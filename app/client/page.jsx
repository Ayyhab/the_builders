// app/client/[id]/page.jsx
// Pure Tailwind. Clean white surfaces with light shadows; emerald-600 as accent only.
// Visit /client/ava or /client/leo

"use client";

import { useMemo, useState, useCallback, useRef, useEffect } from "react";

// --- Lightweight local UI primitives (Tailwind only) ---
function Card({ className = "", children }) {
  return <div className={`rounded-2xl border border-neutral-200 bg-white shadow-sm ${className}`}>{children}</div>;
}
function CardHeader({ children, className = "" }) {
  return <div className={`px-6 pt-5 ${className}`}>{children}</div>;
}
function CardTitle({ children, className = "" }) {
  return <div className={`text-lg font-semibold ${className}`}>{children}</div>;
}
function CardContent({ children, className = "" }) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}
function Button({ children, className = "", variant = "solid", ...props }) {
  const base = "inline-flex items-center justify-center rounded-lg px-3.5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    solid: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500",
    ghost: "text-emerald-700 hover:bg-neutral-50 focus:ring-emerald-500",
    outline: "border border-emerald-200 text-emerald-700 hover:bg-emerald-50/40 focus:ring-emerald-500",
    muted: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus:ring-neutral-400",
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
function Input({ className = "", onKeyDown, ...props }) {
  return (
    <input
      onKeyDown={onKeyDown}
      className={`w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`}
      {...props}
    />
  );
}
function Badge({ children, className = "", variant = "subtle" }) {
  const styles = {
    subtle: "bg-neutral-100 text-neutral-700 border border-neutral-200",
    accent: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    solid: "bg-emerald-600 text-white border border-emerald-600",
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${styles[variant]} ${className}`}>{children}</span>;
}
function Progress({ value = 0, className = "" }) {
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-neutral-200 ${className}`}>
      <div className="h-full bg-emerald-600" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

// --- Mock data ---
const MOCK = {
  ava: {
    id: "ava",
    name: "Ava Patel",
    company: "Nimbus Cloud",
    role: "VP Engineering",
    email: "ava@nimbuscloud.io",
    phone: "+1 (415) 555-0134",
    summary:
      "Security review in progress. Procurement requests DPIA and pricing for 500 seats. Engineering pilot live on EU cluster.",
    score: 86,
    tasks: [
      { id: 1, title: "Send DPIA packet", priority: "high", done: false },
      { id: 2, title: "Share procurement-ready pricing (500 seats)", priority: "med", done: false },
      { id: 3, title: "Book security deep-dive (45m)", priority: "low", done: false },
    ],
  },
  leo: {
    id: "leo",
    name: "Leo Zhang",
    company: "Marina Logistics",
    role: "Head of Ops",
    email: "leo@marinalogistics.com",
    phone: "+44 20 7946 0013",
    summary:
      "On‑prem connector PoC requested. Legal redlines around indemnity cap. Waiting on COO sign‑off.",
    score: 58,
    tasks: [
      { id: 1, title: "Propose compromise on indemnity cap", priority: "high", done: false },
      { id: 2, title: "Send on‑prem connector architecture diagram", priority: "med", done: false },
    ],
  },
};

function PriorityDot({ level }) {
  const map = { high: "bg-rose-500", med: "bg-amber-500", low: "bg-emerald-600" };
  return <span className={`inline-block h-2.5 w-2.5 rounded-full ${map[level] || "bg-neutral-400"}`} />;
}

export default function ClientPage({ params }) {
  const client = useMemo(() => MOCK[params.id] ?? Object.values(MOCK)[0], [params.id]);
  const [prompt, setPrompt] = useState("");
  // keep explicit order; newest open at top; completed items moved to bottom with animation
  const initialTasks = useMemo(
    () => client.tasks.map((t, i) => ({ ...t, createdAt: Date.now() - (client.tasks.length - i) })),
    [client.tasks]
  );
  const [tasks, setTasks] = useState(initialTasks);
  const [completingId, setCompletingId] = useState(null); // triggers slide-fade out
  const [recentlyMovedId, setRecentlyMovedId] = useState(null); // triggers pop-in

  // --- NEW: attachment & voice recording state ---
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [attachment, setAttachment] = useState(null); // { type: 'image'|'audio', url, name, duration? }
  const imageInputRef = useRef(null);

  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);
  const [recordStart, setRecordStart] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [audioChunks, setAudioChunks] = useState([]);

  // Timer for recording UI
  useEffect(() => {
    if (!isRecording) return;
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - recordStart) / 1000)), 250);
    return () => clearInterval(id);
  }, [isRecording, recordStart]);

  // Clean up object URLs on unmount
  useEffect(() => {
    return () => {
      if (attachment?.url?.startsWith("blob:")) URL.revokeObjectURL(attachment.url);
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

  const toggleDone = useCallback((id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    const t = tasks.find((x) => x.id === id);
    if (!t) return;
    if (!t.done) {
      // going from open -> done: play slide-out, then move to end
      setCompletingId(id);
      setTimeout(() => {
        moveTaskToEnd(id);
        setCompletingId(null);
        setRecentlyMovedId(id);
        setTimeout(() => setRecentlyMovedId(null), 250);
      }, 260);
    } else {
      // undo: bring to top with a pop-in
      moveTaskToStart(id);
      setRecentlyMovedId(id);
      setTimeout(() => setRecentlyMovedId(null), 250);
    }
  }, [moveTaskToEnd, moveTaskToStart, tasks]);

  const addTaskFromPrompt = useCallback(() => {
    const text = prompt.trim();
    if (!text) return;
    setTasks((t) => [{ id: Date.now(), title: text, priority: "med", done: false, createdAt: Date.now() }, ...t]);
    setPrompt("");
    // clear attachment after sending
    clearAttachment();
  }, [prompt]);

  const handlePromptKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addTaskFromPrompt();
    }
  };

  // --- NEW: Attachment handlers ---
  const openImagePicker = useCallback(() => {
    setShowAttachMenu(false);
    imageInputRef.current?.click();
  }, []);

  const onImageSelected = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAttachment({ type: "image", url, name: file.name });
    e.target.value = ""; // reset so selecting same file again works
  }, []);

  const clearAttachment = useCallback(() => {
    setAttachment(null);
    if (attachment?.url?.startsWith("blob:")) URL.revokeObjectURL(attachment.url);
  }, [attachment]);

  // --- NEW: Voice recording ---
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
        setAttachment({ type: "audio", url, name: `voice-${new Date().toISOString().slice(0,19).replace(/[:T]/g,'-')}.webm`, duration: elapsed });
        // stop all tracks
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
      alert("Microphone access was blocked. Please allow mic permissions to record.");
    }
  }, [elapsed]);

  const stopRecording = useCallback(() => {
    if (recorder && recorder.state !== "inactive") {
      recorder.stop();
    }
  }, [recorder]);

  const cancelRecording = useCallback(() => {
    if (recorder) {
      try { recorder.stop(); } catch {}
    }
    setIsRecording(false);
    setElapsed(0);
    setRecorder(null);
  }, [recorder]);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* main content gets bottom padding so the fixed prompt bar doesn't overlap */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-32 space-y-6">
        {/* Header strip – white, light shadow, subtle accent */}
        <div className="rounded-2xl bg-white border border-neutral-200 shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-600 shadow-[0_0_0_4px] shadow-emerald-50" />
            <div className="font-semibold text-neutral-900">Client Overview</div>
          </div>
          <Badge variant="accent">Active</Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            {/* Primary info */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-start justify-between">
                    <span className="text-2xl text-neutral-900">{client.name}</span>
                    <Badge variant="subtle">Priority</Badge>
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
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-neutral-900 flex items-center gap-2">
                  <span>What’s going on</span>
                  <span className="h-1 w-8 rounded bg-emerald-600 inline-block" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-neutral-700">{client.summary}</p>
              </CardContent>
            </Card>

            {/* Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-neutral-900">Outstanding Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tasks.map((t) => (
                    <li
                      key={t.id}
                      className={`flex items-center gap-3 rounded-xl bg-white border border-neutral-200 px-4 py-3 shadow-xs transition-all duration-300 ${
                        t.done ? "opacity-60" : ""
                      } ${
                        completingId === t.id ? "animate-[slideFade_260ms_ease-out_forwards]" : ""
                      } ${
                        recentlyMovedId === t.id ? "animate-[popIn_220ms_ease-out]" : ""
                      }`}
                    >
                      <PriorityDot level={t.priority} />
                      <span className={`text-sm text-neutral-800 ${t.done ? "line-through" : ""}`}>{t.title}</span>
                      <div className="ml-auto flex items-center gap-2">
                        <Badge variant="accent" className="capitalize">{t.priority}</Badge>
                        <Button variant={t.done ? "muted" : "ghost"} onClick={() => toggleDone(t.id)}>
                          {t.done ? "Undo" : "Mark done"}
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: score circle – white with subtle border; emerald as accent */}
          <aside className="order-first w-full lg:order-0 lg:col-span-1 flex lg:justify-center">
            <div className="mx-auto relative w-64 h-64 rounded-full bg-white/50 border border-neutral-200 shadow-md backdrop-blur">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-xs uppercase tracking-widest text-neutral-500">Score</div>
                <div className="text-6xl font-bold text-neutral-900">{client.score}</div>
                <div className="w-40 mt-4">
                  <Progress value={client.score} />
                </div>
                <div className="text-[11px] mt-2 text-neutral-500">attention / health</div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Floating prompt bar */}
      <div className="fixed left-1/2 bottom-6 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <div className={`rounded-2xl border ${attachment ? 'border-emerald-300' : 'border-neutral-200'} bg-white shadow-xl p-3 flex items-center gap-2`}>
          {/* NEW: Attach button + dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowAttachMenu((s) => !s)}
              className="shrink-0 h-11 w-11 flex items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Add attachment"
            >
              {/* Plus icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path strokeLinecap="round" d="M12 5v14M5 12h14" />
              </svg>
            </button>

            {showAttachMenu && (
              <div className="absolute left-0 bottom-14 w-44 rounded-xl border border-neutral-200 bg-white shadow-lg p-2 animate-[popIn_180ms_ease-out]">
                <button onClick={openImagePicker} className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-neutral-50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4-4 3 3 5-5 4 4M4 7h16a1 1 0 011 1v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1z" />
                  </svg>
                  Add image
                </button>
                <button onClick={startRecording} className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-neutral-50">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  Record voice
                </button>
              </div>
            )}

            {/* Hidden input for image picking */}
            <input ref={imageInputRef} type="file" accept="image/*" className="hidden" onChange={onImageSelected} />
          </div>

          {/* NEW: Attachment chips / recording state */}
          {attachment?.type === 'image' && (
            <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-xs text-emerald-700">
              <img src={attachment.url} alt="preview" className="h-7 w-7 rounded-lg object-cover border border-emerald-200" />
              <span className="truncate max-w-40">{attachment.name || 'image'}</span>
              <button onClick={clearAttachment} className="ml-1 rounded-md px-2 py-1 hover:bg-emerald-100" aria-label="Remove image">✕</button>
            </div>
          )}

          {isRecording && (
            <div className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-2.5 py-2 text-xs text-rose-700">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500 animate-[blink_1s_steps(2,start)_infinite]" />
              <span>Recording… {Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2,'0')}</span>
              <button onClick={stopRecording} className="ml-1 rounded-md bg-rose-600 text-white px-2 py-1 hover:bg-rose-700">Stop</button>
              <button onClick={cancelRecording} className="ml-1 rounded-md px-2 py-1 hover:bg-rose-100">Cancel</button>
            </div>
          )}

          {attachment?.type === 'audio' && !isRecording && (
            <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-2.5 py-2">
              <audio src={attachment.url} controls className="h-8" />
              <span className="text-xs text-neutral-700">{attachment.duration ? `${Math.floor(attachment.duration/60)}:${String(attachment.duration%60).padStart(2,'0')}` : ''}</span>
              <button onClick={clearAttachment} className="ml-1 rounded-md px-2 py-1 text-xs hover:bg-neutral-100">Remove</button>
            </div>
          )}

          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handlePromptKeyDown}
            placeholder={attachment?.type === 'image' ? 'Ask Simplicity' : (isRecording ? 'Recording in progress…' : 'Ask Simplicity')}
            className={`border-0 focus:ring-0 focus:outline-none ${attachment ? 'bg-emerald-50' : ''}`}
            disabled={isRecording}
          />

          <button
            onClick={addTaskFromPrompt}
            className="shrink-0 h-11 w-11 flex items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Send"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Local keyframes for smooth reordering */}
      <style jsx global>{`
        @keyframes slideFade {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(8px); opacity: 0; }
        }
        @keyframes popIn {
          from { transform: scale(0.98); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
