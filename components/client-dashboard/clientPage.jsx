// app/client/[id]/page.jsx
// Pure Tailwind. Clean white surfaces with light shadows; emerald-600 as accent only.
// Visit /client/ava or /client/leo

"use client";

import { useMemo, useState, useCallback, useRef, useEffect } from "react";
import Badge from "../reuseables/Badge";
import { Input } from "./Input";
import Card from "./card";
import CardHeader from "./cardHeader";
import { CardTitle } from "./cardTitle";
import Button from "./Button";
import CardContent from "./cardContent";
import { data } from "../../dummyData/data";
import HalfPieChart from "./halfPieChart";

// Timeline event types with icons
const timelineTypes = {
  email: {
    bgColorClass: "bg-emerald-600",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        {...props}
      >
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
      </svg>
    ),
  },
  call: {
    bgColorClass: "bg-blue-500",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  meeting: {
    bgColorClass: "bg-purple-500",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  note: {
    bgColorClass: "bg-amber-500",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        {...props}
      >
        <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
      </svg>
    ),
  },
};

function PriorityDot({ level }) {
  const map = {
    high: "bg-rose-500",
    med: "bg-amber-500",
    low: "bg-emerald-600",
  };
  return (
    <span
      className={`inline-block h-2.5 w-2.5 rounded-full ${
        map[level] || "bg-neutral-400"
      }`}
    />
  );
}

// Stable, SSR-safe formatter (forces UTC so server & client match)
function formatUpdatedAt(iso) {
  try {
    const now = Date.now();
    const updated = new Date(iso).getTime();
    const diffMs = now - updated;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffHours < 1) return "Less than 1h ago";
    if (diffHours === 1) return "1h ago";
    return `${diffHours}h ago`;
  } catch {
    return "—";
  }
}

export default function ClientPage({ client }) {
  const [prompt, setPrompt] = useState("");
  const initialTasks = useMemo(
    () =>
      client.tasks.map((t, i) => ({
        ...t,
        createdAt: Date.now() - (client.tasks.length - i),
      })),
    [client.tasks]
  );
  const [tasks, setTasks] = useState(initialTasks);
  const [completingId, setCompletingId] = useState(null);
  const [recentlyMovedId, setRecentlyMovedId] = useState(null);
  const [showMessage, setDisplayMessage] = useState(null);

  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const imageInputRef = useRef(null);

  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);
  const [recordStart, setRecordStart] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [audioChunks, setAudioChunks] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  // Mode: 'chat' (default) or 'addTask'
  const [mode, setMode] = useState("chat");

  // Client-only date rendering to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isRecording) return;
    const id = setInterval(
      () => setElapsed(Math.floor((Date.now() - recordStart) / 1000)),
      250
    );
    return () => clearInterval(id);
  }, [isRecording, recordStart]);

  useEffect(() => {
    return () => {
      if (attachment?.url?.startsWith("blob:"))
        URL.revokeObjectURL(attachment.url);
    };
  }, [attachment]);

  const moveTaskToEnd = useCallback((id) => {
    setTasks((prev) => {
      const idx = prev.findIndex((t) => t.id === id);
      if (idx === -1) return prev;
      const copy = [...prev];
      const [item] = copy.splice(idx, 1);
      copy.push(item);
      return copy;
    });
  }, []);

  const moveTaskToStart = useCallback((id) => {
    setTasks((prev) => {
      const idx = prev.findIndex((t) => t.id === id);
      if (idx === -1) return prev;
      const copy = [...prev];
      const [item] = copy.splice(idx, 1);
      copy.unshift(item);
      return copy;
    });
  }, []);

  const toggleDone = useCallback(
    (id) => {
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
      );
      const t = tasks.find((x) => x.id === id);
      if (!t) return;
      if (!t.done) {
        setCompletingId(id);
        setTimeout(() => {
          moveTaskToEnd(id);
          setCompletingId(null);
          setRecentlyMovedId(id);
          setTimeout(() => setRecentlyMovedId(null), 250);
        }, 260);
      } else {
        moveTaskToStart(id);
        setRecentlyMovedId(id);
        setTimeout(() => setRecentlyMovedId(null), 250);
      }
    },
    [moveTaskToEnd, moveTaskToStart, tasks]
  );

  const addTaskFromPrompt = useCallback(() => {
    const text = prompt.trim();
    if (!text) return;
    setTasks((t) => [
      {
        id: Date.now(),
        title: text,
        priority: "med",
        done: false,
        createdAt: Date.now(),
      },
      ...t,
    ]);
    setPrompt("");
    clearAttachment();
    setMode("chat"); // Return to chat mode after adding task
  }, [prompt]);

  const handlePromptKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (mode === "addTask") {
        addTaskFromPrompt();
      }
      // In chat mode, you can handle LLM queries here
    }
  };

  const handleSendClick = () => {
    if (mode === "addTask") {
      addTaskFromPrompt();
    } else {
      // Handle chat/LLM query here
      // const query = prompt.trim();
      // if (query) {
      //   console.log("LLM Query:", query);
      // TODO: Send to LLM
      //   setPrompt("");
      //   clearAttachment();
      // }
      setDisplayMessage(true);
    }
  };

  const openImagePicker = useCallback(() => {
    setShowAttachMenu(false);
    imageInputRef.current?.click();
  }, []);

  const onImageSelected = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAttachment({ type: "image", url, name: file.name });
    e.target.value = "";
  }, []);

  const clearAttachment = useCallback(() => {
    if (attachment?.url?.startsWith("blob:"))
      URL.revokeObjectURL(attachment.url);
    setAttachment(null);
  }, [attachment]);

  const onDragOverPrompt = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeavePrompt = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDropPrompt = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setAttachment({ type: "image", url, name: file.name });
    }
  }, []);

  const startRecording = useCallback(async () => {
    try {
      setShowAttachMenu(false);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      const chunks = [];
      rec.ondataavailable = (ev) => {
        if (ev.data.size > 0) chunks.push(ev.data);
      };
      rec.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAttachment({
          type: "audio",
          url,
          name: `voice-${new Date()
            .toISOString()
            .slice(0, 19)
            .replace(/[:T]/g, "-")}.webm`,
          duration: elapsed,
        });
        stream.getTracks().forEach((t) => t.stop());
        setAudioChunks([]);
        setIsRecording(false);
        setRecorder(null);
        setElapsed(0);
      };
      rec.start();
      setRecorder(rec);
      setAudioChunks(chunks);
      setIsRecording(true);
      setRecordStart(Date.now());
    } catch (err) {
      console.error("Microphone error", err);
      alert(
        "Microphone access was blocked. Please allow mic permissions to record."
      );
    }
  }, [elapsed]);

  const stopRecording = useCallback(() => {
    if (recorder && recorder.state !== "inactive") {
      recorder.stop();
    }
  }, [recorder]);

  const cancelRecording = useCallback(() => {
    if (recorder) {
      try {
        recorder.stop();
      } catch {}
    }
    setIsRecording(false);
    setElapsed(0);
    setRecorder(null);
  }, [recorder]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-32 space-y-6">
        <div className="rounded-2xl bg-white border border-neutral-200 shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-600 shadow-[0_0_0_4px] shadow-emerald-50" />
            <div className="font-semibold text-neutral-900">
              Client Overview
            </div>
          </div>

          <Badge variant="accent" text={"Hi Nerva"} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-start justify-between">
                    <span className="text-2xl text-neutral-900">
                      {client.name}
                    </span>
                    <Badge variant="subtle" text={"Priority"} />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between text-neutral-700">
                  <div className="space-y-1">
                    <div>{client.role}</div>
                    <div className="text-neutral-600">{client.company}</div>
                  </div>
                  <div className="text-right text-sm">
                    <div>{client.email}</div>
                    <div>{client.phone}</div>
                    {mounted && (
                      <div>
                        Last updated: {formatUpdatedAt(client.updatedAt)}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-neutral-900 flex items-center gap-2">
                  <span>What's going on</span>
                  <span className="h-1 w-8 rounded bg-emerald-600 inline-block" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-neutral-700">
                  {client.summary}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-neutral-900">
                    Outstanding Tasks
                  </CardTitle>
                  <button
                    onClick={() => setMode("addTask")}
                    className="ml-3 h-8 w-8 flex items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    aria-label="Add task"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-5 w-5"
                    >
                      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="mt-4 space-y-3">
                  {tasks.map((t) => (
                    <li
                      key={t.id}
                      className={`flex items-center gap-3 rounded-xl bg-white border border-neutral-200 px-4 py-3 shadow-xs transition-all duration-300 ${
                        t.done ? "opacity-60" : ""
                      } ${
                        completingId === t.id
                          ? "animate-[slideFade_260ms_ease-out_forwards]"
                          : ""
                      } ${
                        recentlyMovedId === t.id
                          ? "animate-[popIn_220ms_ease-out]"
                          : ""
                      }`}
                    >
                      <PriorityDot level={t.priority} />
                      <span
                        className={`text-sm text-neutral-800 ${
                          t.done ? "line-through" : ""
                        }`}
                      >
                        {t.title}
                      </span>
                      <div className="ml-auto flex items-center gap-2">
                        <Badge
                          variant="accent"
                          className="capitalize"
                          text={t.priority}
                        ></Badge>
                        <Button
                          variant={t.done ? "muted" : "ghost"}
                          onClick={() => toggleDone(t.id)}
                        >
                          {t.done ? "Undo" : "Mark done"}
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <aside className="order-first lg:order-none lg:col-span-1 space-y-6">
            <div className="flex justify-center">
              <div className="mx-auto relative w-65 h-64 rounded-full bg-green-100/50 border border-neutral-200 shadow-sm bg-opacity-50">
                <div className="h-[350px] w-[350px]">
                  <HalfPieChart score={client.score} />
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-neutral-900">Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flow-root">
                  <ul role="list" className="-mb-8">
                    {client.timeline.map((item, itemIdx) => (
                      <li key={item.id}>
                        <div className="relative pb-8">
                          {itemIdx !== client.timeline.length - 1 ? (
                            <span
                              aria-hidden="true"
                              className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-neutral-200"
                            />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span
                                className={`${
                                  timelineTypes[item.type].bgColorClass
                                } flex size-8 items-center justify-center rounded-full ring-8 ring-white`}
                              >
                                {timelineTypes[item.type].icon({
                                  "aria-hidden": "true",
                                  className: "size-5 text-white",
                                })}
                              </span>
                            </div>
                            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                              <div>
                                <p className="text-sm text-neutral-500">
                                  {item.content}{" "}
                                  <span className="font-medium text-neutral-900">
                                    {item.target}
                                  </span>
                                </p>
                              </div>
                              <div className="whitespace-nowrap text-right text-sm text-neutral-500">
                                <time dateTime={item.datetime}>
                                  {item.date}
                                </time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>

      <div className="fixed left-1/2 bottom-6 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        {" "}
        {/* THIS IS THE INPUT BLOCK!!!!  */}
        {showMessage && (
          <div className="relative overflow-hidden rounded-lg bg-white shadow mb-2">
            {/* Close Button */}
            <button
              onClick={() => {
                setDisplayMessage(false);
                setPrompt("");
              }}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Message Content */}
            <div className="px-4 py-5 sm:p-6 text-center">
              You last updated Leo's contact information 9 hours ago. You
              changed their phone number and email.
            </div>
          </div>
        )}
        {mode === "addTask" && (
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-neutral-600 font-medium">Add Task Mode</span>
            <button
              onClick={() => {
                setMode("chat");
                setPrompt("");
                clearAttachment();
              }}
              className="text-neutral-500 hover:text-neutral-700"
            >
              Cancel
            </button>
          </div>
        )}
        <div
          onDragOver={mode === "chat" ? onDragOverPrompt : undefined}
          onDragLeave={mode === "chat" ? onDragLeavePrompt : undefined}
          onDrop={mode === "chat" ? onDropPrompt : undefined}
          className={`group rounded-2xl border ${
            mode === "addTask"
              ? "border-emerald-300 ring-2 ring-emerald-200"
              : attachment
              ? "border-emerald-300"
              : isDragging
              ? "border-emerald-400 ring-2 ring-emerald-200"
              : "border-neutral-200"
          } bg-white shadow-xl p-3 flex items-center gap-2`}
        >
          {mode === "chat" && (
            <>
              <div className="relative">
                <button
                  onClick={() => setShowAttachMenu((s) => !s)}
                  className="shrink-0 h-11 w-11 flex items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  aria-label="Add attachment"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </button>

                {showAttachMenu && (
                  <div className="absolute left-0 bottom-14 w-44 rounded-xl border border-neutral-200 bg-white shadow-lg p-2 animate-[popIn_180ms_ease-out]">
                    <button
                      onClick={openImagePicker}
                      className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-neutral-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16l4-4 3 3 5-5 4 4M4 7h16a1 1 0 011 1v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1z"
                        />
                      </svg>
                      Add image
                    </button>
                    <button
                      onClick={startRecording}
                      className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-neutral-50"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                      Record voice
                    </button>
                  </div>
                )}

                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={onImageSelected}
                />
              </div>

              {attachment?.type === "image" && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-xs text-emerald-700">
                  <img
                    src={attachment.url}
                    alt="preview"
                    className="h-7 w-7 rounded-lg object-cover border border-emerald-200"
                  />
                  <span className="truncate max-w-[10rem]">
                    {attachment.name || "image"}
                  </span>
                  <button
                    onClick={clearAttachment}
                    className="ml-1 rounded-md px-2 py-1 hover:bg-emerald-100"
                    aria-label="Remove image"
                  >
                    ✕
                  </button>
                </div>
              )}

              {isRecording && (
                <div className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-2.5 py-2 text-xs text-rose-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500 animate-[blink_1s_steps(2,start)_infinite]" />
                  <span>
                    Recording… {Math.floor(elapsed / 60)}:
                    {String(elapsed % 60).padStart(2, "0")}
                  </span>
                  <button
                    onClick={stopRecording}
                    className="ml-1 rounded-md bg-rose-600 text-white px-2 py-1 hover:bg-rose-700"
                  >
                    Stop
                  </button>
                  <button
                    onClick={cancelRecording}
                    className="ml-1 rounded-md px-2 py-1 hover:bg-rose-100"
                  >
                    Cancel
                  </button>
                </div>
              )}

              {attachment?.type === "audio" && !isRecording && (
                <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-2.5 py-2">
                  <audio src={attachment.url} controls className="h-8" />
                  <span className="text-xs text-neutral-700">
                    {attachment.duration
                      ? `${Math.floor(attachment.duration / 60)}:${String(
                          attachment.duration % 60
                        ).padStart(2, "0")}`
                      : ""}
                  </span>
                  <button
                    onClick={clearAttachment}
                    className="ml-1 rounded-md px-2 py-1 text-xs hover:bg-neutral-100"
                  >
                    Remove
                  </button>
                </div>
              )}
            </>
          )}

          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handlePromptKeyDown}
            placeholder={
              mode === "addTask"
                ? "Enter task description… (Enter to add)"
                : isDragging
                ? "Drop image to attach…"
                : attachment?.type === "image"
                ? "Ask a question about the image…"
                : isRecording
                ? "Recording in progress…"
                : "Ask questions about client data…"
            }
            className={`border-0 focus:ring-0 focus:outline-none ${
              mode === "addTask"
                ? "bg-emerald-50"
                : attachment
                ? "bg-emerald-50"
                : ""
            }`}
            disabled={isRecording}
          />

          <button
            onClick={handleSendClick}
            className="shrink-0 h-11 w-11 flex items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Send"
          >
            {mode === "addTask" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideFade {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(8px);
            opacity: 0;
          }
        }
        @keyframes popIn {
          from {
            transform: scale(0.98);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
