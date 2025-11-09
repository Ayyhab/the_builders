!(function () {
  "use strict";
  const e = new (class {
    constructor(e) {
      this["output"] = e;
    }
    ["log"](e, ...o) {
      this["write"](console["log"], e, o);
    }
    ["warn"](e, ...o) {
      this["write"](console["warn"], e, o);
    }
    ["error"](e, ...o) {
      this["write"](console["error"], e, o);
    }
    ["info"](e, ...o) {
      this["write"](console["info"], e, o);
    }
    ["debug"](e, ...o) {
      this["write"](console["debug"], e, o);
    }
    ["trace"](e, ...o) {
      this["write"](console["trace"], e, o);
    }
    ["write"](e, o, r) {
      const t = new Date()["toISOString"]();
      switch (this["output"]) {
        case "normal":
          e("[" + t + "] " + o, ...r);
          break;
        case "error":
          console["error"]("[" + t + "] " + o, ...r);
          break;
        case "error-only":
          e === console["error"] && console["error"]("[" + t + "] " + o, ...r);
          break;
      }
    }
  })("normal");
  async function o({
    token: e,
    text: o,
    fileName: r,
    docId: t,
    openWithCreation: n,
    controller: s,
  }) {
    const c = {
      Authorization: "Bearer " + e,
      "Content-Type": "application/json",
    };
    if (!t) {
      const t = "https://www.googleapis.com/drive/v3/files",
        a = await fetch(t, {
          method: "POST",
          headers: c,
          body: JSON["stringify"]({
            name: r,
            mimeType: "application/vnd.google-apps.document",
          }),
          signal: null == s ? void 0 : s["signal"],
        }),
        i = await a["json"]();
      console["log"]("newResponse", i);
      const { id: l } = i,
        d =
          "https://www.googleapis.com/upload/drive/v3/files/" +
          l +
          "?uploadType=media";
      return (
        await fetch(d, {
          method: "PATCH",
          headers: {
            Authorization: "Bearer " + e,
            "Content-Type": "text/plain",
          },
          body: o,
        }),
        ((e, o) => {
          const r = "https://docs.google.com/document/d/" + e + "/edit";
          chrome["tabs"]["create"]({ url: r, active: o }, () => {});
        })(l, n),
        l
      );
    }
    const a =
        "https://www.googleapis.com/drive/v3/files/" +
        t +
        "/export?mimeType=text/plain",
      i = await fetch(a, {
        method: "GET",
        headers: { Authorization: "Bearer " + e },
      }),
      l = await i["text"](),
      d =
        "https://www.googleapis.com/upload/drive/v3/files/" +
        t +
        "?uploadType=media";
    return (
      await fetch(d, {
        method: "PATCH",
        headers: { Authorization: "Bearer " + e, "Content-Type": "text/plain" },
        body: l + " " + o,
      }),
      t
    );
  }
  !(function (o) {
    const { installUrl: r, uninstallUrl: t, onInstalled: n, onUpdated: s } = o;
    chrome["runtime"]["setUninstallURL"](t),
      chrome["runtime"]["onInstalled"]["addListener"](async (o) => {
        if (o["reason"] === chrome["runtime"]["OnInstalledReason"]["INSTALL"])
          try {
            if ((await chrome["tabs"]["create"]({ url: r }), n)) await n();
          } catch (t) {
            e["error"]("install handler problem:", t);
          }
        else if (
          o["reason"] === chrome["runtime"]["OnInstalledReason"]["UPDATE"]
        )
          try {
            if (s) await s();
          } catch (c) {
            e["error"]("update handler problem:", c);
          }
        else if (
          o["reason"] ===
          chrome["runtime"]["OnInstalledReason"]["CHROME_UPDATE"]
        );
        else if (
          o["reason"] ===
          chrome["runtime"]["OnInstalledReason"]["SHARED_MODULE_UPDATE"]
        );
      });
  })({
    installUrl: "https://cws.tools/transcribe-audio-to-text",
    uninstallUrl: "https://forms.gle/B3bopmhnANvtHsDi8",
  });
  const r = new Map();
  async function t(e, o) {
    try {
      await chrome["runtime"]["sendMessage"]({
        type: "status-message",
        message: e,
        className: o,
      });
    } catch (r) {
      console["error"]("Error broadcasting status:", r);
    }
  }
  chrome["action"]["onClicked"]["addListener"]((e) => {
    if (null == e ? void 0 : e["id"])
      chrome["sidePanel"]["open"]({ tabId: e["id"] });
    else console["error"]("No tab.id in click handler!");
  });
  const n = "../pages/offscreen/index.html";
  chrome["runtime"]["onMessage"]["addListener"](async (e, s, c) => {
    var a;
    if ("permission_check" === e["type"]) return c({ status: "ok" }), !![];
    else if ("google-auth" === e["type"])
      return (
        chrome["identity"]["getAuthToken"](
          { interactive: !![] },
          async function (t) {
            if (chrome["runtime"]["lastError"])
              return (
                console["error"](
                  "Auth Error:",
                  chrome["runtime"]["lastError"]["message"]
                ),
                void c({
                  success: ![],
                  error: chrome["runtime"]["lastError"]["message"],
                })
              );
            if (!t)
              return void c({
                success: ![],
                error: "Failed to retrieve auth token",
              });
            const n = new AbortController();
            e["id"] && r["set"](e["id"], n);
            try {
              await chrome["storage"]["sync"]["set"]({ token: t });
              const r = await o({
                token: t,
                text: e["text"],
                fileName: e["fileName"],
                docId: null == e ? void 0 : e["docId"],
                openWithCreation: null == e ? void 0 : e["openWithCreation"],
                controller: n,
              });
              c({ success: !![], docId: r });
            } catch (s) {
              console["error"]("Error creating doc:", s),
                c({
                  success: ![],
                  error: (null == s ? void 0 : s["message"]) || "Unknown error",
                });
            }
          }
        ),
        !![]
      );
    else if ("abortGoogleDoc" === e["type"])
      null == (a = r["get"](e["id"])) || a["abort"]();
    else if ("extensionVisibilityChanged" === e["type"]) {
      const [e] = await chrome["tabs"]["query"]({
        active: !![],
        currentWindow: !![],
      });
      console["log"]("tab", e),
        chrome["tabs"]["sendMessage"](e["id"], { type: "change-visibility" });
    } else if ("reactivate" === e["type"]) {
      const [e] = await chrome["tabs"]["query"]({
        active: !![],
        currentWindow: !![],
      });
      if (!e) return;
    } else if ("startRecordingMagic" === e["type"]) {
      !(await chrome["offscreen"]["hasDocument"]()) &&
        (await chrome["offscreen"]["createDocument"]({
          url: n,
          reasons: ["USER_MEDIA"],
          justification: "Recording from chrome.tabCapture API",
        }));
      try {
        await chrome["runtime"]["sendMessage"]({
          type: "start-recording-magic-tutorial",
          target: "offscreen",
        }),
          c({ status: "ok" }),
          await t("Recording started", "success");
      } catch (i) {
        return (
          console["error"]("Error sending to offscreen:", i),
          c({ error: "RECORDING_FAILED" }),
          void (await t("RECORDING_FAILED", "error"))
        );
      }
    } else if ("open-settings" === e["type"]) {
      const e = "chrome-extension://" + chrome["runtime"]["id"],
        o =
          "chrome://settings/content/siteDetails?site=" + encodeURIComponent(e);
      chrome["tabs"]["create"]({ url: o });
    } else if ("startRecordingMagicBrowser" === e["type"]) {
      !(await chrome["offscreen"]["hasDocument"]()) &&
        (await chrome["offscreen"]["createDocument"]({
          url: n,
          reasons: ["USER_MEDIA"],
          justification: "Recording from chrome.tabCapture API",
        }));
      try {
        await chrome["runtime"]["sendMessage"]({
          type: "start-recording-magic-browser",
          target: "offscreen",
        }),
          c({ status: "ok" }),
          await t("Recording started", "success");
      } catch (l) {
        return (
          console["error"]("Error sending to offscreen:", l),
          c({ error: "RECORDING_FAILED" }),
          void (await t("RECORDING_FAILED", "error"))
        );
      }
    } else if ("stopRecordingMagicBrowser" === e["type"])
      try {
        if (!(await chrome["offscreen"]["hasDocument"]()))
          return void console["log"]("No offscreen document to stop recording");
        await chrome["runtime"]["sendMessage"]({
          type: "stop-recording-magic-browser",
          target: "offscreen",
        }),
          setTimeout(async () => {
            try {
              (await chrome["offscreen"]["hasDocument"]()) &&
                (console["log"](
                  "Force closing offscreen document after magic browser stop"
                ),
                chrome["offscreen"]["closeDocument"]());
            } catch (e) {
              console["warn"](
                "Error force closing offscreen after magic browser stop:",
                e
              );
            }
          }, 200);
      } catch (d) {
        console["error"]("Error sending stop message:", d),
          await t("Failed to send stop message to offscreen", "error");
      }
    else if ("magic-browser-finished" === e["type"] && e["text"])
      try {
        const [o] = await chrome["tabs"]["query"]({
          active: !![],
          currentWindow: !![],
        });
        chrome["tabs"]["sendMessage"](o["id"], {
          type: "magic-browser-finished",
          text: e["text"],
        }),
          console["log"]("Recording completion forwarded to content-script"),
          c({ status: "ok" });
      } catch (m) {
        console["error"]("Error handling recording completion:", m),
          c({ error: "Failed to handle recording completion" });
      }
    else if ("micro-not-allowed" === e["type"]) {
      const [e] = await chrome["tabs"]["query"]({
        active: !![],
        currentWindow: !![],
      });
      chrome["tabs"]["sendMessage"](e["id"], { type: "micro-not-allowed" });
    } else if ("stopRecordingMagic" === e["type"])
      try {
        if (!(await chrome["offscreen"]["hasDocument"]()))
          return void console["log"]("No offscreen document to stop recording");
        await chrome["runtime"]["sendMessage"]({
          type: "stop-recording-magic-tutorial",
          target: "offscreen",
        }),
          setTimeout(async () => {
            try {
              (await chrome["offscreen"]["hasDocument"]()) &&
                (console["log"](
                  "Force closing offscreen document after magic stop"
                ),
                chrome["offscreen"]["closeDocument"]());
            } catch (e) {
              console["warn"](
                "Error force closing offscreen after magic stop:",
                e
              );
            }
          }, 200);
      } catch (g) {
        console["error"]("Error sending stop message:", g),
          await t("Failed to send stop message to offscreen", "error");
      }
    else if ("magic-tutorial-finished" === e["type"] && e["blobUrl"])
      try {
        await chrome["runtime"]["sendMessage"]({
          type: "magic-tutorial-completed",
          blobUrl: e["blobUrl"],
          fromBackground: !![],
        }),
          console["log"]("Recording completion forwarded to UI"),
          c({ status: "ok" });
      } catch (u) {
        console["error"]("Error handling recording completion:", u),
          c({ error: "Failed to handle recording completion" });
      }
    else if ("startRecording" === e["action"]) {
      console["log"]("Background: startRecording command received");
      const o = await chrome["tabs"]["get"](e["tabId"]);
      if (
        null != o["url"] &&
        o["url"]["startsWith"]("chrome://") &&
        "mic" !== e["mode"]
      )
        return (
          c({ error: "SYSTEM_PAGE" }), void (await t("SYSTEM_PAGE", "error"))
        );
      !(await chrome["offscreen"]["hasDocument"]()) &&
        (await chrome["offscreen"]["createDocument"]({
          url: n,
          reasons: ["USER_MEDIA"],
          justification: "Recording from chrome.tabCapture API",
        })),
        console["log"]("Offscreen document created"),
        console["log"]("Getting media stream id");
      let r = null;
      if ("mic" !== (null == e ? void 0 : e["mode"])) {
        if (
          ((r = await new Promise((o, r) => {
            chrome["tabCapture"]["getMediaStreamId"](
              { targetTabId: e["tabId"] },
              (e) => {
                var t;
                const n =
                  null == (t = chrome["runtime"]["lastError"])
                    ? void 0
                    : t["message"];
                console["log"]("message", n),
                  n
                    ? n["includes"]("has not been invoked")
                      ? r("NO_TAB_ACCESS")
                      : r("RECORDING_FAILED")
                    : o(e);
              }
            );
          })["catch"](
            async (e) => (c({ error: e }), await t(e, "error"), null)
          )),
          !r)
        )
          return;
        console["log"]("Media stream id obtained");
      }
      try {
        await chrome["runtime"]["sendMessage"]({
          type: "start-recording",
          target: "offscreen",
          data: {
            streamId: r,
            mode: null == e ? void 0 : e["mode"],
            streaming: null == e ? void 0 : e["streaming"],
          },
        }),
          c({ status: "ok" }),
          await t("Recording started", "success");
      } catch (f) {
        return (
          console["error"]("Error sending to offscreen:", f),
          c({ error: "RECORDING_FAILED" }),
          void (await t("RECORDING_FAILED", "error"))
        );
      }
    } else if ("testAudioCapture" === e["action"]) {
      const o = await (async function (e, o = "tab") {
        const r = await chrome["tabs"]["get"](e);
        if (
          null != r["url"] &&
          r["url"]["startsWith"]("chrome://") &&
          "mic" !== o
        )
          return { status: ![], error: "SYSTEM_PAGE" };
        try {
          return (
            await new Promise((o, r) => {
              chrome["tabCapture"]["getMediaStreamId"](
                { targetTabId: e },
                (e) => {
                  var t;
                  const n =
                    null == (t = chrome["runtime"]["lastError"])
                      ? void 0
                      : t["message"];
                  n
                    ? n["includes"]("has not been invoked")
                      ? r("NO_TAB_ACCESS")
                      : r("RECORDING_FAILED")
                    : o(e);
                }
              );
            }),
            { status: !![] }
          );
        } catch (t) {
          return { status: ![], error: t };
        }
      })(e["tabId"], e["mode"]);
      return c(o), !![];
    } else if ("cancelRecording" === e["action"])
      try {
        if (!(await chrome["offscreen"]["hasDocument"]()))
          return void console["log"](
            "No offscreen document to cancel recording"
          );
        await chrome["runtime"]["sendMessage"]({
          type: "cancel-recording",
          target: "offscreen",
        }),
          setTimeout(async () => {
            try {
              (await chrome["offscreen"]["hasDocument"]()) &&
                (console["log"]("Force closing offscreen document"),
                chrome["offscreen"]["closeDocument"]());
            } catch (e) {
              console["warn"]("Error force closing offscreen:", e);
            }
          }, 200);
      } catch (h) {
        console["error"]("Error sending cancel message:", h),
          await t("Failed to send cancel message to offscreen", "error");
      }
    else if ("stopRecording" === e["action"]) {
      console["log"]("Background: stopRecording command received");
      try {
        if (!(await chrome["offscreen"]["hasDocument"]()))
          return void console["log"]("No offscreen document to stop recording");
        await chrome["runtime"]["sendMessage"]({
          type: "stop-recording",
          target: "offscreen",
        });
      } catch (p) {
        console["error"]("Error sending stop message:", p),
          await t("Failed to send stop message to offscreen", "error");
      }
    } else if ("pauseRecording" === e["action"]) {
      console["log"]("Background: pauseRecording command received");
      try {
        if (!(await chrome["offscreen"]["hasDocument"]()))
          return void console["log"]("No offscreen document to stop recording");
        await chrome["runtime"]["sendMessage"]({
          type: "pause-recording",
          target: "offscreen",
        });
      } catch (w) {
        console["error"]("Error sending stop message:", w),
          await t("Failed to send stop message to offscreen", "error");
      }
    } else if ("chunk-completed" === e["action"]) {
      console["log"]("Background: chunk completed", e);
      try {
        await chrome["runtime"]["sendMessage"]({
          type: "chunk-completed",
          blobUrl: e["blobUrl"],
          fromBackground: !![],
        }),
          await t("Chunk completed", "success"),
          console["log"]("Chunk completion forwarded to UI"),
          c({ status: "ok" });
      } catch (y) {
        console["error"]("Error handling recording completion:", y),
          c({ error: "Failed to handle recording completion" });
      }
    } else if ("recording-completed" === e["type"]) {
      console["log"]("Background: recording completed", e);
      try {
        await chrome["runtime"]["sendMessage"]({
          type: "recording-completed",
          recordingId: e["recordingId"],
          timestamp: e["timestamp"],
          blobUrl: e["blobUrl"],
          fromBackground: !![],
        }),
          console["log"]("Recording completion forwarded to UI"),
          c({ status: "ok" });
      } catch (b) {
        console["error"]("Error handling recording completion:", b),
          c({ error: "Failed to handle recording completion" });
      }
    }
  }),
    chrome["runtime"]["onMessage"]["addListener"](
      (e, o, r) => (
        console["log"]("Background received message:", e),
        (async () => {})()["catch"]((e) => {
          console["error"]("Unhandled error in background:", e),
            r({ error: e["message"] });
        }),
        !![]
      )
    ),
    chrome["action"]["onClicked"]["addListener"](async (e) => {
      await chrome["sidePanel"]["open"]({ windowId: e["windowId"] }),
        e["id"] && (await chrome["tabs"]["update"](e["id"], { active: !![] }));
    });
})();
