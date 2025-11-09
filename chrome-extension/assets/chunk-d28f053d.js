import {
  r as n,
  s as E,
  a as B,
  b as R,
  j as e,
  C as w,
  T as L,
  B as I,
  d as M,
  e as S,
  S as z,
  f as T,
  I as k,
  c as H,
  R as O,
} from "./chunk-09f48e00.js";
import {
  s as A,
  f as h,
  a as D,
  t as m,
  g as N,
  b as g,
  c as U,
  d as W,
  e as _,
  h as F,
  i as q,
  j as G,
} from "./chunk-874c5426.js";
import { E as Y } from "./chunk-73377495.js";
const J = chrome.runtime.getURL("/img/recorder.svg"),
  K = () => {
    const [t, s] = n.useState([-50, -50]),
      [r, c] = n.useState(!1);
    return (
      n.useEffect(() => {
        let l;
        const i = () => {
          clearTimeout(l),
            c(!0),
            s(U()),
            (l = setTimeout(() => {
              c(!1);
            }, 200));
        };
        return (
          W(s),
          window.addEventListener("resize", i),
          window.addEventListener("scroll", i),
          () => {
            window.removeEventListener("resize", i),
              window.removeEventListener("scroll", i);
          }
        );
      }, []),
      [t, r]
    );
  },
  Q = ({ shadowRootEl: t }) => {
    const [s, r] = n.useState(!1),
      [c, l] = n.useState(1.2),
      [i, f] = n.useState(!0),
      [v, d] = n.useState(!1),
      [[b, y], j] = K(),
      x = (o) => {
        f(o), chrome.runtime.sendMessage({ type: "setEnabled", payload: o });
      };
    n.useEffect(() => {
      E("isEnabled", (u) => f(u ?? !0));
      const o = (u) => {
        u.type === "setEnabled" && f(u.payload);
      };
      return (
        chrome.runtime.onMessage.addListener(o),
        _(() => r(!0)),
        F(() => r(!1)),
        q(l),
        () => {
          chrome.runtime.onMessage.removeListener(o);
        }
      );
    }, []);
    const C = n.useMemo(
        () =>
          B({
            components: {
              MuiPopover: { defaultProps: { container: t } },
              MuiPopper: { defaultProps: { container: t } },
              MuiModal: { defaultProps: { container: t } },
            },
          }),
        []
      ),
      P = R({
        key: "css-widget",
        prepend: !0,
        container: t == null ? void 0 : t.parentNode,
      });
    return e.jsx(w, {
      value: P,
      children: e.jsxs(L, {
        theme: C,
        children: [
          i
            ? e.jsxs(I, {
                children: [
                  e.jsx("style", { children: M.replace("RECORDER_URL", J) }),
                  e.jsxs("div", {
                    className: "recorder-wrapper",
                    style: {
                      left: b,
                      top: y,
                      ...(j ? { transition: "none" } : {}),
                    },
                    children: [
                      e.jsx("div", {
                        className: "recorder-button" + (s ? " active" : ""),
                        style: { "--scale": c },
                        onClick: () => {
                          var o;
                          A(
                            h,
                            (((o = h) == null ? void 0 : o.innerText.length) ||
                              1) - 1
                          ),
                            s ? g() : D(),
                            m("Button Pressed", {
                              name: "Recorder (OnSite)",
                              toState: s ? "off" : "on",
                              host: N(),
                            });
                        },
                      }),
                      e.jsx("div", {
                        className: "hide-button",
                        onClick: () => {
                          d(!0),
                            x(!1),
                            g(),
                            m("Button Pressed", { name: "Close Recorder" });
                        },
                        children: e.jsx(S, { fontSize: "small" }),
                      }),
                    ],
                  }),
                ],
              })
            : null,
          e.jsx(z, {
            anchorOrigin: { vertical: "top", horizontal: "right" },
            open: v,
            onClose: () => d(!1),
            autoHideDuration: 6e3,
            message:
              "Speech to Text button is hidden. You can enable it in settings.",
            action: e.jsxs(e.Fragment, {
              children: [
                e.jsx(T, {
                  color: "secondary",
                  size: "small",
                  onClick: () => {
                    x(!0),
                      d(!1),
                      m("Button Pressed", { name: "Undo Closing Recorder" });
                  },
                  children: "UNDO",
                }),
                e.jsx(k, {
                  size: "small",
                  "aria-label": "close",
                  color: "inherit",
                  onClick: () => {
                    d(!1),
                      m("Button Pressed", {
                        name: "Hide Closing Recorder Warning",
                      });
                  },
                  children: e.jsx(S, { fontSize: "small" }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  a = document.createElement("div");
a.style.position = "fixed";
a.style.top = "0";
a.style.left = "0";
a.style.zIndex = "999999";
document.body.appendChild(a);
const V = a.attachShadow({ mode: "open" }),
  p = document.createElement("div");
p.id = "sttc_widget_root";
V.appendChild(p);
const X = document.querySelectorAll(
  'input[type="text"], input[type="password"], input[type="search"], textarea, [contenteditable="true"], [contenteditable="plaintext-only"]'
);
X.forEach((t) => {
  t.addEventListener("focus", (s) => {
    const r = s.target;
    G(r);
  }),
    t.addEventListener("input", (s) => {
      const r = s.target;
      !s.isTrusted || r !== h || g();
    });
});
H.createRoot(p).render(
  e.jsx(O.StrictMode, {
    children: e.jsx(Y, { children: e.jsx(Q, { shadowRootEl: p }) }),
  })
);
