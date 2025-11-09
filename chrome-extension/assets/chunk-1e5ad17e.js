import {
  
  u as fa,
  j as u,
  G as ma,
  i as ga,
  _ as X,
  g as ha,
  h as p,
  k as ss,
  l as va,
  m as ba,
  r as f,
  n as ya,
  o as cr,
  p as rn,
  q as xa,
  t as zo,
  v as Ca,
  w as as,
  x as ee,
  y as be,
  z as we,
  A as ur,
  D as Te,
  E as wa,
  F as Pa,
  H as We,
  J as uo,
  K as Re,
  L as Rt,
  M as B,
  P as eo,
  N as U,
  O as vn,
  Q as bn,
  I as tt,
  U as Sa,
  V as Xe,
  W as Ft,
  X as yn,
  Y as $a,
  Z as Wt,
  $ as Tt,
  a0 as Ra,
  a1 as dr,
  a2 as Ht,
  a3 as is,
  a4 as Ut,
  a5 as Mt,
  a6 as ka,
  a7 as _e,
  a8 as xn,
  a9 as Oa,
  aa as Ia,
  ab as Cn,
  ac as ls,
  ad as En,
  ae as Ta,
  af as Ea,
  ag as pr,
  ah as ft,
  ai as sn,
  aj as wn,
  ak as Mn,
  al as cs,
  am as us,
  an as Ma,
  ao as Po,
  ap as Aa,
  s as ja,
  a as Fa,
  T as La,
  aq as Na,
  B as Pn,
  d as Da,
  ar as to,
  as as oo,
  f as Xt,
  S as ds,
  e as ps,
} from "./chunk-09f48e00.js";
import {
  t as Le,
  e as Ba,
  h as za,
  i as _a,
  s as Wa,
  f as fr,
  b as fs,
  a as Ha,
  g as At,
  l as Va,
  m as Sn,
  n as Ao,
  o as jo,
  p as Ua,
} from "./chunk-874c5426.js";
import { t as St, a as mr } from "./chunk-d2f10733.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = o(r);
    fetch(r.href, s);
  }
})();
function qa({ styles: e, themeId: t, defaultTheme: o = {} }) {
  const n = fa(o),
    r = typeof e == "function" ? e((t && n[t]) || n) : e;
  return u.jsx(ma, { styles: r });
}
const Ka = ["ownerState"],
  Ga = ["variants"],
  Xa = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Ya(e) {
  return Object.keys(e).length === 0;
}
function Za(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function an(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ja = ss(),
  Qa = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function So({ defaultTheme: e, theme: t, themeId: o }) {
  return Ya(t) ? e : t[o] || t;
}
function ei(e) {
  return e ? (t, o) => o[e] : null;
}
function To(e, t) {
  let { ownerState: o } = t,
    n = X(t, Ka);
  const r = typeof e == "function" ? e(p({ ownerState: o }, n)) : e;
  if (Array.isArray(r)) return r.flatMap((s) => To(s, p({ ownerState: o }, n)));
  if (r && typeof r == "object" && Array.isArray(r.variants)) {
    const { variants: s = [] } = r;
    let l = X(r, Ga);
    return (
      s.forEach((i) => {
        let c = !0;
        typeof i.props == "function"
          ? (c = i.props(p({ ownerState: o }, n, o)))
          : Object.keys(i.props).forEach((d) => {
              (o == null ? void 0 : o[d]) !== i.props[d] &&
                n[d] !== i.props[d] &&
                (c = !1);
            }),
          c &&
            (Array.isArray(l) || (l = [l]),
            l.push(
              typeof i.style == "function"
                ? i.style(p({ ownerState: o }, n, o))
                : i.style
            ));
      }),
      l
    );
  }
  return r;
}
function ti(e = {}) {
  const {
      themeId: t,
      defaultTheme: o = Ja,
      rootShouldForwardProp: n = an,
      slotShouldForwardProp: r = an,
    } = e,
    s = (a) =>
      va(p({}, a, { theme: So(p({}, a, { defaultTheme: o, themeId: t })) }));
  return (
    (s.__mui_systemSx = !0),
    (a, l = {}) => {
      ga(a, (C) => C.filter((P) => !(P != null && P.__mui_systemSx)));
      const {
          name: i,
          slot: c,
          skipVariantsResolver: d,
          skipSx: m,
          overridesResolver: b = ei(Qa(c)),
        } = l,
        v = X(l, Xa),
        y = d !== void 0 ? d : (c && c !== "Root" && c !== "root") || !1,
        $ = m || !1;
      let x,
        w = an;
      c === "Root" || c === "root"
        ? (w = n)
        : c
        ? (w = r)
        : Za(a) && (w = void 0);
      const S = ha(a, p({ shouldForwardProp: w, label: x }, v)),
        g = (C) =>
          (typeof C == "function" && C.__emotion_real !== C) || ba(C)
            ? (P) =>
                To(
                  C,
                  p({}, P, {
                    theme: So({ theme: P.theme, defaultTheme: o, themeId: t }),
                  })
                )
            : C,
        h = (C, ...P) => {
          let k = g(C);
          const I = P ? P.map(g) : [];
          i &&
            b &&
            I.push((F) => {
              const T = So(p({}, F, { defaultTheme: o, themeId: t }));
              if (
                !T.components ||
                !T.components[i] ||
                !T.components[i].styleOverrides
              )
                return null;
              const M = T.components[i].styleOverrides,
                L = {};
              return (
                Object.entries(M).forEach(([V, j]) => {
                  L[V] = To(j, p({}, F, { theme: T }));
                }),
                b(F, L)
              );
            }),
            i &&
              !y &&
              I.push((F) => {
                var T;
                const M = So(p({}, F, { defaultTheme: o, themeId: t })),
                  L =
                    M == null ||
                    (T = M.components) == null ||
                    (T = T[i]) == null
                      ? void 0
                      : T.variants;
                return To({ variants: L }, p({}, F, { theme: M }));
              }),
            $ || I.push(s);
          const E = I.length - P.length;
          if (Array.isArray(C) && E > 0) {
            const F = new Array(E).fill("");
            (k = [...C, ...F]), (k.raw = [...C.raw, ...F]);
          }
          const A = S(k, ...I);
          return a.muiName && (A.muiName = a.muiName), A;
        };
      return S.withConfig && (h.withConfig = S.withConfig), h;
    }
  );
}
const oi = ti(),
  ni = oi;
function ms(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const ri = (e) => {
    const t = f.useRef({});
    return (
      f.useEffect(() => {
        t.current = e;
      }),
      t.current
    );
  },
  si = ri,
  ai = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },
  ii = ai,
  li = [
    "component",
    "direction",
    "spacing",
    "divider",
    "children",
    "className",
    "useFlexGap",
  ],
  ci = ss(),
  ui = ni("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  });
function di(e) {
  return ya({ props: e, name: "MuiStack", defaultTheme: ci });
}
function pi(e, t) {
  const o = f.Children.toArray(e).filter(Boolean);
  return o.reduce(
    (n, r, s) => (
      n.push(r),
      s < o.length - 1 && n.push(f.cloneElement(t, { key: `separator-${s}` })),
      n
    ),
    []
  );
}
const fi = (e) =>
    ({
      row: "Left",
      "row-reverse": "Right",
      column: "Top",
      "column-reverse": "Bottom",
    }[e]),
  mi = ({ ownerState: e, theme: t }) => {
    let o = p(
      { display: "flex", flexDirection: "column" },
      cr(
        { theme: t },
        rn({ values: e.direction, breakpoints: t.breakpoints.values }),
        (n) => ({ flexDirection: n })
      )
    );
    if (e.spacing) {
      const n = xa(t),
        r = Object.keys(t.breakpoints.values).reduce(
          (i, c) => (
            ((typeof e.spacing == "object" && e.spacing[c] != null) ||
              (typeof e.direction == "object" && e.direction[c] != null)) &&
              (i[c] = !0),
            i
          ),
          {}
        ),
        s = rn({ values: e.direction, base: r }),
        a = rn({ values: e.spacing, base: r });
      typeof s == "object" &&
        Object.keys(s).forEach((i, c, d) => {
          if (!s[i]) {
            const b = c > 0 ? s[d[c - 1]] : "column";
            s[i] = b;
          }
        }),
        (o = zo(
          o,
          cr({ theme: t }, a, (i, c) =>
            e.useFlexGap
              ? { gap: ur(n, i) }
              : {
                  "& > :not(style):not(style)": { margin: 0 },
                  "& > :not(style) ~ :not(style)": {
                    [`margin${fi(c ? s[c] : e.direction)}`]: ur(n, i),
                  },
                }
          )
        ));
    }
    return (o = Ca(t.breakpoints, o)), o;
  };
function gi(e = {}) {
  const {
      createStyledComponent: t = ui,
      useThemeProps: o = di,
      componentName: n = "MuiStack",
    } = e,
    r = () => be({ root: ["root"] }, (i) => we(n, i), {}),
    s = t(mi);
  return f.forwardRef(function (i, c) {
    const d = o(i),
      m = as(d),
      {
        component: b = "div",
        direction: v = "column",
        spacing: y = 0,
        divider: $,
        children: x,
        className: w,
        useFlexGap: S = !1,
      } = m,
      g = X(m, li),
      h = { direction: v, spacing: y, useFlexGap: S },
      C = r();
    return u.jsx(
      s,
      p({ as: b, ownerState: h, ref: c, className: ee(C.root, w) }, g, {
        children: $ ? pi(x, $) : x,
      })
    );
  });
}
var Ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var An = Symbol.for("react.element"),
  jn = Symbol.for("react.portal"),
  _o = Symbol.for("react.fragment"),
  Wo = Symbol.for("react.strict_mode"),
  Ho = Symbol.for("react.profiler"),
  Vo = Symbol.for("react.provider"),
  Uo = Symbol.for("react.context"),
  hi = Symbol.for("react.server_context"),
  qo = Symbol.for("react.forward_ref"),
  Ko = Symbol.for("react.suspense"),
  Go = Symbol.for("react.suspense_list"),
  Xo = Symbol.for("react.memo"),
  Yo = Symbol.for("react.lazy"),
  vi = Symbol.for("react.offscreen"),
  gs;
gs = Symbol.for("react.module.reference");
function dt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case An:
        switch (((e = e.type), e)) {
          case _o:
          case Ho:
          case Wo:
          case Ko:
          case Go:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case hi:
              case Uo:
              case qo:
              case Yo:
              case Xo:
              case Vo:
                return e;
              default:
                return t;
            }
        }
      case jn:
        return t;
    }
  }
}
Ae.ContextConsumer = Uo;
Ae.ContextProvider = Vo;
Ae.Element = An;
Ae.ForwardRef = qo;
Ae.Fragment = _o;
Ae.Lazy = Yo;
Ae.Memo = Xo;
Ae.Portal = jn;
Ae.Profiler = Ho;
Ae.StrictMode = Wo;
Ae.Suspense = Ko;
Ae.SuspenseList = Go;
Ae.isAsyncMode = function () {
  return !1;
};
Ae.isConcurrentMode = function () {
  return !1;
};
Ae.isContextConsumer = function (e) {
  return dt(e) === Uo;
};
Ae.isContextProvider = function (e) {
  return dt(e) === Vo;
};
Ae.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === An;
};
Ae.isForwardRef = function (e) {
  return dt(e) === qo;
};
Ae.isFragment = function (e) {
  return dt(e) === _o;
};
Ae.isLazy = function (e) {
  return dt(e) === Yo;
};
Ae.isMemo = function (e) {
  return dt(e) === Xo;
};
Ae.isPortal = function (e) {
  return dt(e) === jn;
};
Ae.isProfiler = function (e) {
  return dt(e) === Ho;
};
Ae.isStrictMode = function (e) {
  return dt(e) === Wo;
};
Ae.isSuspense = function (e) {
  return dt(e) === Ko;
};
Ae.isSuspenseList = function (e) {
  return dt(e) === Go;
};
Ae.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === _o ||
    e === Ho ||
    e === Wo ||
    e === Ko ||
    e === Go ||
    e === vi ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Yo ||
        e.$$typeof === Xo ||
        e.$$typeof === Vo ||
        e.$$typeof === Uo ||
        e.$$typeof === qo ||
        e.$$typeof === gs ||
        e.getModuleId !== void 0))
  );
};
Ae.typeOf = dt;
function Fn(e) {
  return Te;
}
const bi = { disableDefaultClasses: !1 },
  yi = f.createContext(bi);
function xi(e) {
  const { disableDefaultClasses: t } = f.useContext(yi);
  return (o) => (t ? "" : e(o));
}
const Ci = [
    "className",
    "elementType",
    "ownerState",
    "externalForwardedProps",
    "getSlotOwnerState",
    "internalForwardedProps",
  ],
  wi = ["component", "slots", "slotProps"],
  Pi = ["component"];
function gr(e, t) {
  const {
      className: o,
      elementType: n,
      ownerState: r,
      externalForwardedProps: s,
      getSlotOwnerState: a,
      internalForwardedProps: l,
    } = t,
    i = X(t, Ci),
    {
      component: c,
      slots: d = { [e]: void 0 },
      slotProps: m = { [e]: void 0 },
    } = s,
    b = X(s, wi),
    v = d[e] || n,
    y = wa(m[e], r),
    $ = Pa(
      p({ className: o }, i, {
        externalForwardedProps: e === "root" ? b : void 0,
        externalSlotProps: y,
      })
    ),
    {
      props: { component: x },
      internalRef: w,
    } = $,
    S = X($.props, Pi),
    g = We(w, y == null ? void 0 : y.ref, t.ref),
    h = a ? a(S) : {},
    C = p({}, r, h),
    P = e === "root" ? x || c : x,
    k = uo(
      v,
      p(
        {},
        e === "root" && !c && !d[e] && l,
        e !== "root" && !d[e] && l,
        S,
        P && { as: P },
        { ref: g }
      ),
      C
    );
  return (
    Object.keys(h).forEach((I) => {
      delete k[I];
    }),
    [v, k]
  );
}
function Si(e) {
  return we("MuiAlert", e);
}
const $i = Re("MuiAlert", [
    "root",
    "action",
    "icon",
    "message",
    "filled",
    "colorSuccess",
    "colorInfo",
    "colorWarning",
    "colorError",
    "filledSuccess",
    "filledInfo",
    "filledWarning",
    "filledError",
    "outlined",
    "outlinedSuccess",
    "outlinedInfo",
    "outlinedWarning",
    "outlinedError",
    "standard",
    "standardSuccess",
    "standardInfo",
    "standardWarning",
    "standardError",
  ]),
  hr = $i,
  Ri = Rt(
    u.jsx("path", {
      d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
    }),
    "SuccessOutlined"
  ),
  ki = Rt(
    u.jsx("path", {
      d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
    }),
    "ReportProblemOutlined"
  ),
  Oi = Rt(
    u.jsx("path", {
      d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
    "ErrorOutline"
  ),
  Ii = Rt(
    u.jsx("path", {
      d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
    }),
    "InfoOutlined"
  ),
  hs = Rt(
    u.jsx("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  ),
  Ti = [
    "action",
    "children",
    "className",
    "closeText",
    "color",
    "components",
    "componentsProps",
    "icon",
    "iconMapping",
    "onClose",
    "role",
    "severity",
    "slotProps",
    "slots",
    "variant",
  ],
  Ei = Fn(),
  Mi = (e) => {
    const { variant: t, color: o, severity: n, classes: r } = e,
      s = {
        root: ["root", `color${U(o || n)}`, `${t}${U(o || n)}`, `${t}`],
        icon: ["icon"],
        message: ["message"],
        action: ["action"],
      };
    return be(s, Si, r);
  },
  Ai = B(eo, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        t[o.variant],
        t[`${o.variant}${U(o.color || o.severity)}`],
      ];
    },
  })(({ theme: e }) => {
    const t = e.palette.mode === "light" ? vn : bn,
      o = e.palette.mode === "light" ? bn : vn;
    return p({}, e.typography.body2, {
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette)
          .filter(([, n]) => n.main && n.light)
          .map(([n]) => ({
            props: { colorSeverity: n, variant: "standard" },
            style: {
              color: e.vars
                ? e.vars.palette.Alert[`${n}Color`]
                : t(e.palette[n].light, 0.6),
              backgroundColor: e.vars
                ? e.vars.palette.Alert[`${n}StandardBg`]
                : o(e.palette[n].light, 0.9),
              [`& .${hr.icon}`]: e.vars
                ? { color: e.vars.palette.Alert[`${n}IconColor`] }
                : { color: e.palette[n].main },
            },
          })),
        ...Object.entries(e.palette)
          .filter(([, n]) => n.main && n.light)
          .map(([n]) => ({
            props: { colorSeverity: n, variant: "outlined" },
            style: {
              color: e.vars
                ? e.vars.palette.Alert[`${n}Color`]
                : t(e.palette[n].light, 0.6),
              border: `1px solid ${(e.vars || e).palette[n].light}`,
              [`& .${hr.icon}`]: e.vars
                ? { color: e.vars.palette.Alert[`${n}IconColor`] }
                : { color: e.palette[n].main },
            },
          })),
        ...Object.entries(e.palette)
          .filter(([, n]) => n.main && n.dark)
          .map(([n]) => ({
            props: { colorSeverity: n, variant: "filled" },
            style: p(
              { fontWeight: e.typography.fontWeightMedium },
              e.vars
                ? {
                    color: e.vars.palette.Alert[`${n}FilledColor`],
                    backgroundColor: e.vars.palette.Alert[`${n}FilledBg`],
                  }
                : {
                    backgroundColor:
                      e.palette.mode === "dark"
                        ? e.palette[n].dark
                        : e.palette[n].main,
                    color: e.palette.getContrastText(e.palette[n].main),
                  }
            ),
          })),
      ],
    });
  }),
  ji = B("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon,
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9,
  }),
  Fi = B("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message,
  })({ padding: "8px 0", minWidth: 0, overflow: "auto" }),
  vr = B("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action,
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8,
  }),
  br = {
    success: u.jsx(Ri, { fontSize: "inherit" }),
    warning: u.jsx(ki, { fontSize: "inherit" }),
    error: u.jsx(Oi, { fontSize: "inherit" }),
    info: u.jsx(Ii, { fontSize: "inherit" }),
  },
  Li = f.forwardRef(function (t, o) {
    const n = Ei({ props: t, name: "MuiAlert" }),
      {
        action: r,
        children: s,
        className: a,
        closeText: l = "Close",
        color: i,
        components: c = {},
        componentsProps: d = {},
        icon: m,
        iconMapping: b = br,
        onClose: v,
        role: y = "alert",
        severity: $ = "success",
        slotProps: x = {},
        slots: w = {},
        variant: S = "standard",
      } = n,
      g = X(n, Ti),
      h = p({}, n, {
        color: i,
        severity: $,
        variant: S,
        colorSeverity: i || $,
      }),
      C = Mi(h),
      P = {
        slots: p({ closeButton: c.CloseButton, closeIcon: c.CloseIcon }, w),
        slotProps: p({}, d, x),
      },
      [k, I] = gr("closeButton", {
        elementType: tt,
        externalForwardedProps: P,
        ownerState: h,
      }),
      [E, A] = gr("closeIcon", {
        elementType: hs,
        externalForwardedProps: P,
        ownerState: h,
      });
    return u.jsxs(
      Ai,
      p(
        {
          role: y,
          elevation: 0,
          ownerState: h,
          className: ee(C.root, a),
          ref: o,
        },
        g,
        {
          children: [
            m !== !1
              ? u.jsx(ji, {
                  ownerState: h,
                  className: C.icon,
                  children: m || b[$] || br[$],
                })
              : null,
            u.jsx(Fi, { ownerState: h, className: C.message, children: s }),
            r != null
              ? u.jsx(vr, { ownerState: h, className: C.action, children: r })
              : null,
            r == null && v
              ? u.jsx(vr, {
                  ownerState: h,
                  className: C.action,
                  children: u.jsx(
                    k,
                    p(
                      {
                        size: "small",
                        "aria-label": l,
                        title: l,
                        color: "inherit",
                        onClick: v,
                      },
                      I,
                      { children: u.jsx(E, p({ fontSize: "small" }, A)) }
                    )
                  ),
                })
              : null,
          ],
        }
      )
    );
  }),
  vs = Li;
function Ni(e) {
  return we("MuiTypography", e);
}
Re("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const Di = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  Bi = (e) => {
    const {
        align: t,
        gutterBottom: o,
        noWrap: n,
        paragraph: r,
        variant: s,
        classes: a,
      } = e,
      l = {
        root: [
          "root",
          s,
          e.align !== "inherit" && `align${U(t)}`,
          o && "gutterBottom",
          n && "noWrap",
          r && "paragraph",
        ],
      };
    return be(l, Ni, a);
  },
  zi = B("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        o.variant && t[o.variant],
        o.align !== "inherit" && t[`align${U(o.align)}`],
        o.noWrap && t.noWrap,
        o.gutterBottom && t.gutterBottom,
        o.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    p(
      { margin: 0 },
      t.variant === "inherit" && { font: "inherit" },
      t.variant !== "inherit" && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  yr = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  _i = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  Wi = (e) => _i[e] || e,
  Hi = f.forwardRef(function (t, o) {
    const n = Te({ props: t, name: "MuiTypography" }),
      r = Wi(n.color),
      s = as(p({}, n, { color: r })),
      {
        align: a = "inherit",
        className: l,
        component: i,
        gutterBottom: c = !1,
        noWrap: d = !1,
        paragraph: m = !1,
        variant: b = "body1",
        variantMapping: v = yr,
      } = s,
      y = X(s, Di),
      $ = p({}, s, {
        align: a,
        color: r,
        className: l,
        component: i,
        gutterBottom: c,
        noWrap: d,
        paragraph: m,
        variant: b,
        variantMapping: v,
      }),
      x = i || (m ? "p" : v[b] || yr[b]) || "span",
      w = Bi($);
    return u.jsx(
      zi,
      p({ as: x, ref: o, ownerState: $, className: ee(w.root, l) }, y)
    );
  }),
  Lt = Hi,
  bs = "base";
function Vi(e) {
  return `${bs}--${e}`;
}
function Ui(e, t) {
  return `${bs}-${e}-${t}`;
}
function ys(e, t) {
  const o = Sa[t];
  return o ? Vi(o) : Ui(e, t);
}
function qi(e, t) {
  const o = {};
  return (
    t.forEach((n) => {
      o[n] = ys(e, n);
    }),
    o
  );
}
const Ki = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function Gi(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function Xi(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function Yi(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    Xi(e)
  );
}
function Zi(e) {
  const t = [],
    o = [];
  return (
    Array.from(e.querySelectorAll(Ki)).forEach((n, r) => {
      const s = Gi(n);
      s === -1 ||
        !Yi(n) ||
        (s === 0
          ? t.push(n)
          : o.push({ documentOrder: r, tabIndex: s, node: n }));
    }),
    o
      .sort((n, r) =>
        n.tabIndex === r.tabIndex
          ? n.documentOrder - r.documentOrder
          : n.tabIndex - r.tabIndex
      )
      .map((n) => n.node)
      .concat(t)
  );
}
function Ji() {
  return !0;
}
function Qi(e) {
  const {
      children: t,
      disableAutoFocus: o = !1,
      disableEnforceFocus: n = !1,
      disableRestoreFocus: r = !1,
      getTabbable: s = Zi,
      isEnabled: a = Ji,
      open: l,
    } = e,
    i = f.useRef(!1),
    c = f.useRef(null),
    d = f.useRef(null),
    m = f.useRef(null),
    b = f.useRef(null),
    v = f.useRef(!1),
    y = f.useRef(null),
    $ = We(t.ref, y),
    x = f.useRef(null);
  f.useEffect(() => {
    !l || !y.current || (v.current = !o);
  }, [o, l]),
    f.useEffect(() => {
      if (!l || !y.current) return;
      const g = Xe(y.current);
      return (
        y.current.contains(g.activeElement) ||
          (y.current.hasAttribute("tabIndex") ||
            y.current.setAttribute("tabIndex", "-1"),
          v.current && y.current.focus()),
        () => {
          r ||
            (m.current &&
              m.current.focus &&
              ((i.current = !0), m.current.focus()),
            (m.current = null));
        }
      );
    }, [l]),
    f.useEffect(() => {
      if (!l || !y.current) return;
      const g = Xe(y.current),
        h = (k) => {
          (x.current = k),
            !(n || !a() || k.key !== "Tab") &&
              g.activeElement === y.current &&
              k.shiftKey &&
              ((i.current = !0), d.current && d.current.focus());
        },
        C = () => {
          const k = y.current;
          if (k === null) return;
          if (!g.hasFocus() || !a() || i.current) {
            i.current = !1;
            return;
          }
          if (
            k.contains(g.activeElement) ||
            (n &&
              g.activeElement !== c.current &&
              g.activeElement !== d.current)
          )
            return;
          if (g.activeElement !== b.current) b.current = null;
          else if (b.current !== null) return;
          if (!v.current) return;
          let I = [];
          if (
            ((g.activeElement === c.current || g.activeElement === d.current) &&
              (I = s(y.current)),
            I.length > 0)
          ) {
            var E, A;
            const F = !!(
                (E = x.current) != null &&
                E.shiftKey &&
                ((A = x.current) == null ? void 0 : A.key) === "Tab"
              ),
              T = I[0],
              M = I[I.length - 1];
            typeof T != "string" &&
              typeof M != "string" &&
              (F ? M.focus() : T.focus());
          } else k.focus();
        };
      g.addEventListener("focusin", C), g.addEventListener("keydown", h, !0);
      const P = setInterval(() => {
        g.activeElement && g.activeElement.tagName === "BODY" && C();
      }, 50);
      return () => {
        clearInterval(P),
          g.removeEventListener("focusin", C),
          g.removeEventListener("keydown", h, !0);
      };
    }, [o, n, r, a, l, s]);
  const w = (g) => {
      m.current === null && (m.current = g.relatedTarget),
        (v.current = !0),
        (b.current = g.target);
      const h = t.props.onFocus;
      h && h(g);
    },
    S = (g) => {
      m.current === null && (m.current = g.relatedTarget), (v.current = !0);
    };
  return u.jsxs(f.Fragment, {
    children: [
      u.jsx("div", {
        tabIndex: l ? 0 : -1,
        onFocus: S,
        ref: c,
        "data-testid": "sentinelStart",
      }),
      f.cloneElement(t, { ref: $, onFocus: w }),
      u.jsx("div", {
        tabIndex: l ? 0 : -1,
        onFocus: S,
        ref: d,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function el(e) {
  return typeof e == "function" ? e() : e;
}
const xs = f.forwardRef(function (t, o) {
  const { children: n, container: r, disablePortal: s = !1 } = t,
    [a, l] = f.useState(null),
    i = We(f.isValidElement(n) ? n.ref : null, o);
  if (
    (Ft(() => {
      s || l(el(r) || document.body);
    }, [r, s]),
    Ft(() => {
      if (a && !s)
        return (
          yn(o, a),
          () => {
            yn(o, null);
          }
        );
    }, [o, a, s]),
    s)
  ) {
    if (f.isValidElement(n)) {
      const c = { ref: i };
      return f.cloneElement(n, c);
    }
    return u.jsx(f.Fragment, { children: n });
  }
  return u.jsx(f.Fragment, { children: a && $a.createPortal(n, a) });
});
function tl(e) {
  const t = Xe(e);
  return t.body === e
    ? Wt(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function fo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function xr(e) {
  return parseInt(Wt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function ol(e) {
  const o =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || n;
}
function Cr(e, t, o, n, r) {
  const s = [t, o, ...n];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1,
      i = !ol(a);
    l && i && fo(a, r);
  });
}
function ln(e, t) {
  let o = -1;
  return e.some((n, r) => (t(n) ? ((o = r), !0) : !1)), o;
}
function nl(e, t) {
  const o = [],
    n = e.container;
  if (!t.disableScrollLock) {
    if (tl(n)) {
      const a = ms(Xe(n));
      o.push({ value: n.style.paddingRight, property: "padding-right", el: n }),
        (n.style.paddingRight = `${xr(n) + a}px`);
      const l = Xe(n).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (i) => {
        o.push({
          value: i.style.paddingRight,
          property: "padding-right",
          el: i,
        }),
          (i.style.paddingRight = `${xr(i) + a}px`);
      });
    }
    let s;
    if (n.parentNode instanceof DocumentFragment) s = Xe(n).body;
    else {
      const a = n.parentElement,
        l = Wt(n);
      s =
        (a == null ? void 0 : a.nodeName) === "HTML" &&
        l.getComputedStyle(a).overflowY === "scroll"
          ? a
          : n;
    }
    o.push(
      { value: s.style.overflow, property: "overflow", el: s },
      { value: s.style.overflowX, property: "overflow-x", el: s },
      { value: s.style.overflowY, property: "overflow-y", el: s }
    ),
      (s.style.overflow = "hidden");
  }
  return () => {
    o.forEach(({ value: s, el: a, property: l }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function rl(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (o) => {
      o.getAttribute("aria-hidden") === "true" && t.push(o);
    }),
    t
  );
}
class sl {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, o) {
    let n = this.modals.indexOf(t);
    if (n !== -1) return n;
    (n = this.modals.length),
      this.modals.push(t),
      t.modalRef && fo(t.modalRef, !1);
    const r = rl(o);
    Cr(o, t.mount, t.modalRef, r, !0);
    const s = ln(this.containers, (a) => a.container === o);
    return s !== -1
      ? (this.containers[s].modals.push(t), n)
      : (this.containers.push({
          modals: [t],
          container: o,
          restore: null,
          hiddenSiblings: r,
        }),
        n);
  }
  mount(t, o) {
    const n = ln(this.containers, (s) => s.modals.indexOf(t) !== -1),
      r = this.containers[n];
    r.restore || (r.restore = nl(r, o));
  }
  remove(t, o = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1) return n;
    const r = ln(this.containers, (a) => a.modals.indexOf(t) !== -1),
      s = this.containers[r];
    if (
      (s.modals.splice(s.modals.indexOf(t), 1),
      this.modals.splice(n, 1),
      s.modals.length === 0)
    )
      s.restore && s.restore(),
        t.modalRef && fo(t.modalRef, o),
        Cr(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1),
        this.containers.splice(r, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && fo(a.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function al(e) {
  return typeof e == "function" ? e() : e;
}
function il(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ll = new sl();
function cl(e) {
  const {
      container: t,
      disableEscapeKeyDown: o = !1,
      disableScrollLock: n = !1,
      manager: r = ll,
      closeAfterTransition: s = !1,
      onTransitionEnter: a,
      onTransitionExited: l,
      children: i,
      onClose: c,
      open: d,
      rootRef: m,
    } = e,
    b = f.useRef({}),
    v = f.useRef(null),
    y = f.useRef(null),
    $ = We(y, m),
    [x, w] = f.useState(!d),
    S = il(i);
  let g = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (g = !1);
  const h = () => Xe(v.current),
    C = () => (
      (b.current.modalRef = y.current), (b.current.mount = v.current), b.current
    ),
    P = () => {
      r.mount(C(), { disableScrollLock: n }),
        y.current && (y.current.scrollTop = 0);
    },
    k = Tt(() => {
      const j = al(t) || h().body;
      r.add(C(), j), y.current && P();
    }),
    I = f.useCallback(() => r.isTopModal(C()), [r]),
    E = Tt((j) => {
      (v.current = j), j && (d && I() ? P() : y.current && fo(y.current, g));
    }),
    A = f.useCallback(() => {
      r.remove(C(), g);
    }, [g, r]);
  f.useEffect(
    () => () => {
      A();
    },
    [A]
  ),
    f.useEffect(() => {
      d ? k() : (!S || !s) && A();
    }, [d, A, S, s, k]);
  const F = (j) => (_) => {
      var D;
      (D = j.onKeyDown) == null || D.call(j, _),
        !(_.key !== "Escape" || _.which === 229 || !I()) &&
          (o || (_.stopPropagation(), c && c(_, "escapeKeyDown")));
    },
    T = (j) => (_) => {
      var D;
      (D = j.onClick) == null || D.call(j, _),
        _.target === _.currentTarget && c && c(_, "backdropClick");
    };
  return {
    getRootProps: (j = {}) => {
      const _ = Ra(e);
      delete _.onTransitionEnter, delete _.onTransitionExited;
      const D = p({}, _, j);
      return p({ role: "presentation" }, D, { onKeyDown: F(D), ref: $ });
    },
    getBackdropProps: (j = {}) => {
      const _ = j;
      return p({ "aria-hidden": !0 }, _, { onClick: T(_), open: d });
    },
    getTransitionProps: () => {
      const j = () => {
          w(!1), a && a();
        },
        _ = () => {
          w(!0), l && l(), s && A();
        };
      return {
        onEnter: dr(j, i == null ? void 0 : i.props.onEnter),
        onExited: dr(_, i == null ? void 0 : i.props.onExited),
      };
    },
    rootRef: $,
    portalRef: E,
    isTopModal: I,
    exited: x,
    hasTransition: S,
  };
}
var Ye = "top",
  ct = "bottom",
  ut = "right",
  Ze = "left",
  Ln = "auto",
  yo = [Ye, ct, ut, Ze],
  Yt = "start",
  vo = "end",
  ul = "clippingParents",
  Cs = "viewport",
  so = "popper",
  dl = "reference",
  wr = yo.reduce(function (e, t) {
    return e.concat([t + "-" + Yt, t + "-" + vo]);
  }, []),
  ws = [].concat(yo, [Ln]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Yt, t + "-" + vo]);
  }, []),
  pl = "beforeRead",
  fl = "read",
  ml = "afterRead",
  gl = "beforeMain",
  hl = "main",
  vl = "afterMain",
  bl = "beforeWrite",
  yl = "write",
  xl = "afterWrite",
  Cl = [pl, fl, ml, gl, hl, vl, bl, yl, xl];
function yt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ot(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Vt(e) {
  var t = ot(e).Element;
  return e instanceof t || e instanceof Element;
}
function lt(e) {
  var t = ot(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Nn(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ot(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function wl(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (o) {
    var n = t.styles[o] || {},
      r = t.attributes[o] || {},
      s = t.elements[o];
    !lt(s) ||
      !yt(s) ||
      (Object.assign(s.style, n),
      Object.keys(r).forEach(function (a) {
        var l = r[a];
        l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
      }));
  });
}
function Pl(e) {
  var t = e.state,
    o = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, o.popper),
    (t.styles = o),
    t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var r = t.elements[n],
          s = t.attributes[n] || {},
          a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : o[n]),
          l = a.reduce(function (i, c) {
            return (i[c] = ""), i;
          }, {});
        !lt(r) ||
          !yt(r) ||
          (Object.assign(r.style, l),
          Object.keys(s).forEach(function (i) {
            r.removeAttribute(i);
          }));
      });
    }
  );
}
const Sl = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: wl,
  effect: Pl,
  requires: ["computeStyles"],
};
function bt(e) {
  return e.split("-")[0];
}
var _t = Math.max,
  Fo = Math.min,
  Zt = Math.round;
function $n() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Ps() {
  return !/^((?!chrome|android).)*safari/i.test($n());
}
function Jt(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var n = e.getBoundingClientRect(),
    r = 1,
    s = 1;
  t &&
    lt(e) &&
    ((r = (e.offsetWidth > 0 && Zt(n.width) / e.offsetWidth) || 1),
    (s = (e.offsetHeight > 0 && Zt(n.height) / e.offsetHeight) || 1));
  var a = Vt(e) ? ot(e) : window,
    l = a.visualViewport,
    i = !Ps() && o,
    c = (n.left + (i && l ? l.offsetLeft : 0)) / r,
    d = (n.top + (i && l ? l.offsetTop : 0)) / s,
    m = n.width / r,
    b = n.height / s;
  return {
    width: m,
    height: b,
    top: d,
    right: c + m,
    bottom: d + b,
    left: c,
    x: c,
    y: d,
  };
}
function Dn(e) {
  var t = Jt(e),
    o = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - o) <= 1 && (o = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: o, height: n }
  );
}
function Ss(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (o && Nn(o)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function $t(e) {
  return ot(e).getComputedStyle(e);
}
function $l(e) {
  return ["table", "td", "th"].indexOf(yt(e)) >= 0;
}
function Nt(e) {
  return ((Vt(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Zo(e) {
  return yt(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Nn(e) ? e.host : null) || Nt(e);
}
function Pr(e) {
  return !lt(e) || $t(e).position === "fixed" ? null : e.offsetParent;
}
function Rl(e) {
  var t = /firefox/i.test($n()),
    o = /Trident/i.test($n());
  if (o && lt(e)) {
    var n = $t(e);
    if (n.position === "fixed") return null;
  }
  var r = Zo(e);
  for (Nn(r) && (r = r.host); lt(r) && ["html", "body"].indexOf(yt(r)) < 0; ) {
    var s = $t(r);
    if (
      s.transform !== "none" ||
      s.perspective !== "none" ||
      s.contain === "paint" ||
      ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
      (t && s.willChange === "filter") ||
      (t && s.filter && s.filter !== "none")
    )
      return r;
    r = r.parentNode;
  }
  return null;
}
function xo(e) {
  for (var t = ot(e), o = Pr(e); o && $l(o) && $t(o).position === "static"; )
    o = Pr(o);
  return o &&
    (yt(o) === "html" || (yt(o) === "body" && $t(o).position === "static"))
    ? t
    : o || Rl(e) || t;
}
function Bn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function mo(e, t, o) {
  return _t(e, Fo(t, o));
}
function kl(e, t, o) {
  var n = mo(e, t, o);
  return n > o ? o : n;
}
function $s() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Rs(e) {
  return Object.assign({}, $s(), e);
}
function ks(e, t) {
  return t.reduce(function (o, n) {
    return (o[n] = e), o;
  }, {});
}
var Ol = function (t, o) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, o.rects, { placement: o.placement }))
        : t),
    Rs(typeof t != "number" ? t : ks(t, yo))
  );
};
function Il(e) {
  var t,
    o = e.state,
    n = e.name,
    r = e.options,
    s = o.elements.arrow,
    a = o.modifiersData.popperOffsets,
    l = bt(o.placement),
    i = Bn(l),
    c = [Ze, ut].indexOf(l) >= 0,
    d = c ? "height" : "width";
  if (!(!s || !a)) {
    var m = Ol(r.padding, o),
      b = Dn(s),
      v = i === "y" ? Ye : Ze,
      y = i === "y" ? ct : ut,
      $ =
        o.rects.reference[d] + o.rects.reference[i] - a[i] - o.rects.popper[d],
      x = a[i] - o.rects.reference[i],
      w = xo(s),
      S = w ? (i === "y" ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
      g = $ / 2 - x / 2,
      h = m[v],
      C = S - b[d] - m[y],
      P = S / 2 - b[d] / 2 + g,
      k = mo(h, P, C),
      I = i;
    o.modifiersData[n] = ((t = {}), (t[I] = k), (t.centerOffset = k - P), t);
  }
}
function Tl(e) {
  var t = e.state,
    o = e.options,
    n = o.element,
    r = n === void 0 ? "[data-popper-arrow]" : n;
  r != null &&
    ((typeof r == "string" && ((r = t.elements.popper.querySelector(r)), !r)) ||
      (Ss(t.elements.popper, r) && (t.elements.arrow = r)));
}
const El = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Il,
  effect: Tl,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Qt(e) {
  return e.split("-")[1];
}
var Ml = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Al(e, t) {
  var o = e.x,
    n = e.y,
    r = t.devicePixelRatio || 1;
  return { x: Zt(o * r) / r || 0, y: Zt(n * r) / r || 0 };
}
function Sr(e) {
  var t,
    o = e.popper,
    n = e.popperRect,
    r = e.placement,
    s = e.variation,
    a = e.offsets,
    l = e.position,
    i = e.gpuAcceleration,
    c = e.adaptive,
    d = e.roundOffsets,
    m = e.isFixed,
    b = a.x,
    v = b === void 0 ? 0 : b,
    y = a.y,
    $ = y === void 0 ? 0 : y,
    x = typeof d == "function" ? d({ x: v, y: $ }) : { x: v, y: $ };
  (v = x.x), ($ = x.y);
  var w = a.hasOwnProperty("x"),
    S = a.hasOwnProperty("y"),
    g = Ze,
    h = Ye,
    C = window;
  if (c) {
    var P = xo(o),
      k = "clientHeight",
      I = "clientWidth";
    if (
      (P === ot(o) &&
        ((P = Nt(o)),
        $t(P).position !== "static" &&
          l === "absolute" &&
          ((k = "scrollHeight"), (I = "scrollWidth"))),
      (P = P),
      r === Ye || ((r === Ze || r === ut) && s === vo))
    ) {
      h = ct;
      var E = m && P === C && C.visualViewport ? C.visualViewport.height : P[k];
      ($ -= E - n.height), ($ *= i ? 1 : -1);
    }
    if (r === Ze || ((r === Ye || r === ct) && s === vo)) {
      g = ut;
      var A = m && P === C && C.visualViewport ? C.visualViewport.width : P[I];
      (v -= A - n.width), (v *= i ? 1 : -1);
    }
  }
  var F = Object.assign({ position: l }, c && Ml),
    T = d === !0 ? Al({ x: v, y: $ }, ot(o)) : { x: v, y: $ };
  if (((v = T.x), ($ = T.y), i)) {
    var M;
    return Object.assign(
      {},
      F,
      ((M = {}),
      (M[h] = S ? "0" : ""),
      (M[g] = w ? "0" : ""),
      (M.transform =
        (C.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + $ + "px)"
          : "translate3d(" + v + "px, " + $ + "px, 0)"),
      M)
    );
  }
  return Object.assign(
    {},
    F,
    ((t = {}),
    (t[h] = S ? $ + "px" : ""),
    (t[g] = w ? v + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function jl(e) {
  var t = e.state,
    o = e.options,
    n = o.gpuAcceleration,
    r = n === void 0 ? !0 : n,
    s = o.adaptive,
    a = s === void 0 ? !0 : s,
    l = o.roundOffsets,
    i = l === void 0 ? !0 : l,
    c = {
      placement: bt(t.placement),
      variation: Qt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Sr(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: i,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Sr(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: i,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const Fl = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: jl,
  data: {},
};
var $o = { passive: !0 };
function Ll(e) {
  var t = e.state,
    o = e.instance,
    n = e.options,
    r = n.scroll,
    s = r === void 0 ? !0 : r,
    a = n.resize,
    l = a === void 0 ? !0 : a,
    i = ot(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    s &&
      c.forEach(function (d) {
        d.addEventListener("scroll", o.update, $o);
      }),
    l && i.addEventListener("resize", o.update, $o),
    function () {
      s &&
        c.forEach(function (d) {
          d.removeEventListener("scroll", o.update, $o);
        }),
        l && i.removeEventListener("resize", o.update, $o);
    }
  );
}
const Nl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Ll,
  data: {},
};
var Dl = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Eo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Dl[t];
  });
}
var Bl = { start: "end", end: "start" };
function $r(e) {
  return e.replace(/start|end/g, function (t) {
    return Bl[t];
  });
}
function zn(e) {
  var t = ot(e),
    o = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: o, scrollTop: n };
}
function _n(e) {
  return Jt(Nt(e)).left + zn(e).scrollLeft;
}
function zl(e, t) {
  var o = ot(e),
    n = Nt(e),
    r = o.visualViewport,
    s = n.clientWidth,
    a = n.clientHeight,
    l = 0,
    i = 0;
  if (r) {
    (s = r.width), (a = r.height);
    var c = Ps();
    (c || (!c && t === "fixed")) && ((l = r.offsetLeft), (i = r.offsetTop));
  }
  return { width: s, height: a, x: l + _n(e), y: i };
}
function _l(e) {
  var t,
    o = Nt(e),
    n = zn(e),
    r = (t = e.ownerDocument) == null ? void 0 : t.body,
    s = _t(
      o.scrollWidth,
      o.clientWidth,
      r ? r.scrollWidth : 0,
      r ? r.clientWidth : 0
    ),
    a = _t(
      o.scrollHeight,
      o.clientHeight,
      r ? r.scrollHeight : 0,
      r ? r.clientHeight : 0
    ),
    l = -n.scrollLeft + _n(e),
    i = -n.scrollTop;
  return (
    $t(r || o).direction === "rtl" &&
      (l += _t(o.clientWidth, r ? r.clientWidth : 0) - s),
    { width: s, height: a, x: l, y: i }
  );
}
function Wn(e) {
  var t = $t(e),
    o = t.overflow,
    n = t.overflowX,
    r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + r + n);
}
function Os(e) {
  return ["html", "body", "#document"].indexOf(yt(e)) >= 0
    ? e.ownerDocument.body
    : lt(e) && Wn(e)
    ? e
    : Os(Zo(e));
}
function go(e, t) {
  var o;
  t === void 0 && (t = []);
  var n = Os(e),
    r = n === ((o = e.ownerDocument) == null ? void 0 : o.body),
    s = ot(n),
    a = r ? [s].concat(s.visualViewport || [], Wn(n) ? n : []) : n,
    l = t.concat(a);
  return r ? l : l.concat(go(Zo(a)));
}
function Rn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Wl(e, t) {
  var o = Jt(e, !1, t === "fixed");
  return (
    (o.top = o.top + e.clientTop),
    (o.left = o.left + e.clientLeft),
    (o.bottom = o.top + e.clientHeight),
    (o.right = o.left + e.clientWidth),
    (o.width = e.clientWidth),
    (o.height = e.clientHeight),
    (o.x = o.left),
    (o.y = o.top),
    o
  );
}
function Rr(e, t, o) {
  return t === Cs ? Rn(zl(e, o)) : Vt(t) ? Wl(t, o) : Rn(_l(Nt(e)));
}
function Hl(e) {
  var t = go(Zo(e)),
    o = ["absolute", "fixed"].indexOf($t(e).position) >= 0,
    n = o && lt(e) ? xo(e) : e;
  return Vt(n)
    ? t.filter(function (r) {
        return Vt(r) && Ss(r, n) && yt(r) !== "body";
      })
    : [];
}
function Vl(e, t, o, n) {
  var r = t === "clippingParents" ? Hl(e) : [].concat(t),
    s = [].concat(r, [o]),
    a = s[0],
    l = s.reduce(function (i, c) {
      var d = Rr(e, c, n);
      return (
        (i.top = _t(d.top, i.top)),
        (i.right = Fo(d.right, i.right)),
        (i.bottom = Fo(d.bottom, i.bottom)),
        (i.left = _t(d.left, i.left)),
        i
      );
    }, Rr(e, a, n));
  return (
    (l.width = l.right - l.left),
    (l.height = l.bottom - l.top),
    (l.x = l.left),
    (l.y = l.top),
    l
  );
}
function Is(e) {
  var t = e.reference,
    o = e.element,
    n = e.placement,
    r = n ? bt(n) : null,
    s = n ? Qt(n) : null,
    a = t.x + t.width / 2 - o.width / 2,
    l = t.y + t.height / 2 - o.height / 2,
    i;
  switch (r) {
    case Ye:
      i = { x: a, y: t.y - o.height };
      break;
    case ct:
      i = { x: a, y: t.y + t.height };
      break;
    case ut:
      i = { x: t.x + t.width, y: l };
      break;
    case Ze:
      i = { x: t.x - o.width, y: l };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var c = r ? Bn(r) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (s) {
      case Yt:
        i[c] = i[c] - (t[d] / 2 - o[d] / 2);
        break;
      case vo:
        i[c] = i[c] + (t[d] / 2 - o[d] / 2);
        break;
    }
  }
  return i;
}
function bo(e, t) {
  t === void 0 && (t = {});
  var o = t,
    n = o.placement,
    r = n === void 0 ? e.placement : n,
    s = o.strategy,
    a = s === void 0 ? e.strategy : s,
    l = o.boundary,
    i = l === void 0 ? ul : l,
    c = o.rootBoundary,
    d = c === void 0 ? Cs : c,
    m = o.elementContext,
    b = m === void 0 ? so : m,
    v = o.altBoundary,
    y = v === void 0 ? !1 : v,
    $ = o.padding,
    x = $ === void 0 ? 0 : $,
    w = Rs(typeof x != "number" ? x : ks(x, yo)),
    S = b === so ? dl : so,
    g = e.rects.popper,
    h = e.elements[y ? S : b],
    C = Vl(Vt(h) ? h : h.contextElement || Nt(e.elements.popper), i, d, a),
    P = Jt(e.elements.reference),
    k = Is({ reference: P, element: g, strategy: "absolute", placement: r }),
    I = Rn(Object.assign({}, g, k)),
    E = b === so ? I : P,
    A = {
      top: C.top - E.top + w.top,
      bottom: E.bottom - C.bottom + w.bottom,
      left: C.left - E.left + w.left,
      right: E.right - C.right + w.right,
    },
    F = e.modifiersData.offset;
  if (b === so && F) {
    var T = F[r];
    Object.keys(A).forEach(function (M) {
      var L = [ut, ct].indexOf(M) >= 0 ? 1 : -1,
        V = [Ye, ct].indexOf(M) >= 0 ? "y" : "x";
      A[M] += T[V] * L;
    });
  }
  return A;
}
function Ul(e, t) {
  t === void 0 && (t = {});
  var o = t,
    n = o.placement,
    r = o.boundary,
    s = o.rootBoundary,
    a = o.padding,
    l = o.flipVariations,
    i = o.allowedAutoPlacements,
    c = i === void 0 ? ws : i,
    d = Qt(n),
    m = d
      ? l
        ? wr
        : wr.filter(function (y) {
            return Qt(y) === d;
          })
      : yo,
    b = m.filter(function (y) {
      return c.indexOf(y) >= 0;
    });
  b.length === 0 && (b = m);
  var v = b.reduce(function (y, $) {
    return (
      (y[$] = bo(e, { placement: $, boundary: r, rootBoundary: s, padding: a })[
        bt($)
      ]),
      y
    );
  }, {});
  return Object.keys(v).sort(function (y, $) {
    return v[y] - v[$];
  });
}
function ql(e) {
  if (bt(e) === Ln) return [];
  var t = Eo(e);
  return [$r(e), t, $r(t)];
}
function Kl(e) {
  var t = e.state,
    o = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var r = o.mainAxis,
        s = r === void 0 ? !0 : r,
        a = o.altAxis,
        l = a === void 0 ? !0 : a,
        i = o.fallbackPlacements,
        c = o.padding,
        d = o.boundary,
        m = o.rootBoundary,
        b = o.altBoundary,
        v = o.flipVariations,
        y = v === void 0 ? !0 : v,
        $ = o.allowedAutoPlacements,
        x = t.options.placement,
        w = bt(x),
        S = w === x,
        g = i || (S || !y ? [Eo(x)] : ql(x)),
        h = [x].concat(g).reduce(function (Y, te) {
          return Y.concat(
            bt(te) === Ln
              ? Ul(t, {
                  placement: te,
                  boundary: d,
                  rootBoundary: m,
                  padding: c,
                  flipVariations: y,
                  allowedAutoPlacements: $,
                })
              : te
          );
        }, []),
        C = t.rects.reference,
        P = t.rects.popper,
        k = new Map(),
        I = !0,
        E = h[0],
        A = 0;
      A < h.length;
      A++
    ) {
      var F = h[A],
        T = bt(F),
        M = Qt(F) === Yt,
        L = [Ye, ct].indexOf(T) >= 0,
        V = L ? "width" : "height",
        j = bo(t, {
          placement: F,
          boundary: d,
          rootBoundary: m,
          altBoundary: b,
          padding: c,
        }),
        _ = L ? (M ? ut : Ze) : M ? ct : Ye;
      C[V] > P[V] && (_ = Eo(_));
      var D = Eo(_),
        K = [];
      if (
        (s && K.push(j[T] <= 0),
        l && K.push(j[_] <= 0, j[D] <= 0),
        K.every(function (Y) {
          return Y;
        }))
      ) {
        (E = F), (I = !1);
        break;
      }
      k.set(F, K);
    }
    if (I)
      for (
        var ye = y ? 3 : 1,
          Oe = function (te) {
            var fe = h.find(function (Ie) {
              var J = k.get(Ie);
              if (J)
                return J.slice(0, te).every(function (ue) {
                  return ue;
                });
            });
            if (fe) return (E = fe), "break";
          },
          pe = ye;
        pe > 0;
        pe--
      ) {
        var ge = Oe(pe);
        if (ge === "break") break;
      }
    t.placement !== E &&
      ((t.modifiersData[n]._skip = !0), (t.placement = E), (t.reset = !0));
  }
}
const Gl = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Kl,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function kr(e, t, o) {
  return (
    o === void 0 && (o = { x: 0, y: 0 }),
    {
      top: e.top - t.height - o.y,
      right: e.right - t.width + o.x,
      bottom: e.bottom - t.height + o.y,
      left: e.left - t.width - o.x,
    }
  );
}
function Or(e) {
  return [Ye, ut, ct, Ze].some(function (t) {
    return e[t] >= 0;
  });
}
function Xl(e) {
  var t = e.state,
    o = e.name,
    n = t.rects.reference,
    r = t.rects.popper,
    s = t.modifiersData.preventOverflow,
    a = bo(t, { elementContext: "reference" }),
    l = bo(t, { altBoundary: !0 }),
    i = kr(a, n),
    c = kr(l, r, s),
    d = Or(i),
    m = Or(c);
  (t.modifiersData[o] = {
    referenceClippingOffsets: i,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: m,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": d,
      "data-popper-escaped": m,
    }));
}
const Yl = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Xl,
};
function Zl(e, t, o) {
  var n = bt(e),
    r = [Ze, Ye].indexOf(n) >= 0 ? -1 : 1,
    s = typeof o == "function" ? o(Object.assign({}, t, { placement: e })) : o,
    a = s[0],
    l = s[1];
  return (
    (a = a || 0),
    (l = (l || 0) * r),
    [Ze, ut].indexOf(n) >= 0 ? { x: l, y: a } : { x: a, y: l }
  );
}
function Jl(e) {
  var t = e.state,
    o = e.options,
    n = e.name,
    r = o.offset,
    s = r === void 0 ? [0, 0] : r,
    a = ws.reduce(function (d, m) {
      return (d[m] = Zl(m, t.rects, s)), d;
    }, {}),
    l = a[t.placement],
    i = l.x,
    c = l.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += i),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = a);
}
const Ql = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Jl,
};
function ec(e) {
  var t = e.state,
    o = e.name;
  t.modifiersData[o] = Is({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const tc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ec,
  data: {},
};
function oc(e) {
  return e === "x" ? "y" : "x";
}
function nc(e) {
  var t = e.state,
    o = e.options,
    n = e.name,
    r = o.mainAxis,
    s = r === void 0 ? !0 : r,
    a = o.altAxis,
    l = a === void 0 ? !1 : a,
    i = o.boundary,
    c = o.rootBoundary,
    d = o.altBoundary,
    m = o.padding,
    b = o.tether,
    v = b === void 0 ? !0 : b,
    y = o.tetherOffset,
    $ = y === void 0 ? 0 : y,
    x = bo(t, { boundary: i, rootBoundary: c, padding: m, altBoundary: d }),
    w = bt(t.placement),
    S = Qt(t.placement),
    g = !S,
    h = Bn(w),
    C = oc(h),
    P = t.modifiersData.popperOffsets,
    k = t.rects.reference,
    I = t.rects.popper,
    E =
      typeof $ == "function"
        ? $(Object.assign({}, t.rects, { placement: t.placement }))
        : $,
    A =
      typeof E == "number"
        ? { mainAxis: E, altAxis: E }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, E),
    F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    T = { x: 0, y: 0 };
  if (P) {
    if (s) {
      var M,
        L = h === "y" ? Ye : Ze,
        V = h === "y" ? ct : ut,
        j = h === "y" ? "height" : "width",
        _ = P[h],
        D = _ + x[L],
        K = _ - x[V],
        ye = v ? -I[j] / 2 : 0,
        Oe = S === Yt ? k[j] : I[j],
        pe = S === Yt ? -I[j] : -k[j],
        ge = t.elements.arrow,
        Y = v && ge ? Dn(ge) : { width: 0, height: 0 },
        te = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : $s(),
        fe = te[L],
        Ie = te[V],
        J = mo(0, k[j], Y[j]),
        ue = g ? k[j] / 2 - ye - J - fe - A.mainAxis : Oe - J - fe - A.mainAxis,
        Ee = g
          ? -k[j] / 2 + ye + J + Ie + A.mainAxis
          : pe + J + Ie + A.mainAxis,
        ne = t.elements.arrow && xo(t.elements.arrow),
        ae = ne ? (h === "y" ? ne.clientTop || 0 : ne.clientLeft || 0) : 0,
        Q = (M = F == null ? void 0 : F[h]) != null ? M : 0,
        re = _ + ue - Q - ae,
        W = _ + Ee - Q,
        z = mo(v ? Fo(D, re) : D, _, v ? _t(K, W) : K);
      (P[h] = z), (T[h] = z - _);
    }
    if (l) {
      var ke,
        Z = h === "x" ? Ye : Ze,
        Pe = h === "x" ? ct : ut,
        he = P[C],
        ie = C === "y" ? "height" : "width",
        Se = he + x[Z],
        xe = he - x[Pe],
        $e = [Ye, Ze].indexOf(w) !== -1,
        He = (ke = F == null ? void 0 : F[C]) != null ? ke : 0,
        Ne = $e ? Se : he - k[ie] - I[ie] - He + A.altAxis,
        ze = $e ? he + k[ie] + I[ie] - He - A.altAxis : xe,
        se = v && $e ? kl(Ne, he, ze) : mo(v ? Ne : Se, he, v ? ze : xe);
      (P[C] = se), (T[C] = se - he);
    }
    t.modifiersData[n] = T;
  }
}
const rc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: nc,
  requiresIfExists: ["offset"],
};
function sc(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function ac(e) {
  return e === ot(e) || !lt(e) ? zn(e) : sc(e);
}
function ic(e) {
  var t = e.getBoundingClientRect(),
    o = Zt(t.width) / e.offsetWidth || 1,
    n = Zt(t.height) / e.offsetHeight || 1;
  return o !== 1 || n !== 1;
}
function lc(e, t, o) {
  o === void 0 && (o = !1);
  var n = lt(t),
    r = lt(t) && ic(t),
    s = Nt(t),
    a = Jt(e, r, o),
    l = { scrollLeft: 0, scrollTop: 0 },
    i = { x: 0, y: 0 };
  return (
    (n || (!n && !o)) &&
      ((yt(t) !== "body" || Wn(s)) && (l = ac(t)),
      lt(t)
        ? ((i = Jt(t, !0)), (i.x += t.clientLeft), (i.y += t.clientTop))
        : s && (i.x = _n(s))),
    {
      x: a.left + l.scrollLeft - i.x,
      y: a.top + l.scrollTop - i.y,
      width: a.width,
      height: a.height,
    }
  );
}
function cc(e) {
  var t = new Map(),
    o = new Set(),
    n = [];
  e.forEach(function (s) {
    t.set(s.name, s);
  });
  function r(s) {
    o.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function (l) {
      if (!o.has(l)) {
        var i = t.get(l);
        i && r(i);
      }
    }),
      n.push(s);
  }
  return (
    e.forEach(function (s) {
      o.has(s.name) || r(s);
    }),
    n
  );
}
function uc(e) {
  var t = cc(e);
  return Cl.reduce(function (o, n) {
    return o.concat(
      t.filter(function (r) {
        return r.phase === n;
      })
    );
  }, []);
}
function dc(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (o) {
          Promise.resolve().then(function () {
            (t = void 0), o(e());
          });
        })),
      t
    );
  };
}
function pc(e) {
  var t = e.reduce(function (o, n) {
    var r = o[n.name];
    return (
      (o[n.name] = r
        ? Object.assign({}, r, n, {
            options: Object.assign({}, r.options, n.options),
            data: Object.assign({}, r.data, n.data),
          })
        : n),
      o
    );
  }, {});
  return Object.keys(t).map(function (o) {
    return t[o];
  });
}
var Ir = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Tr() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function fc(e) {
  e === void 0 && (e = {});
  var t = e,
    o = t.defaultModifiers,
    n = o === void 0 ? [] : o,
    r = t.defaultOptions,
    s = r === void 0 ? Ir : r;
  return function (l, i, c) {
    c === void 0 && (c = s);
    var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ir, s),
        modifiersData: {},
        elements: { reference: l, popper: i },
        attributes: {},
        styles: {},
      },
      m = [],
      b = !1,
      v = {
        state: d,
        setOptions: function (w) {
          var S = typeof w == "function" ? w(d.options) : w;
          $(),
            (d.options = Object.assign({}, s, d.options, S)),
            (d.scrollParents = {
              reference: Vt(l)
                ? go(l)
                : l.contextElement
                ? go(l.contextElement)
                : [],
              popper: go(i),
            });
          var g = uc(pc([].concat(n, d.options.modifiers)));
          return (
            (d.orderedModifiers = g.filter(function (h) {
              return h.enabled;
            })),
            y(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!b) {
            var w = d.elements,
              S = w.reference,
              g = w.popper;
            if (Tr(S, g)) {
              (d.rects = {
                reference: lc(S, xo(g), d.options.strategy === "fixed"),
                popper: Dn(g),
              }),
                (d.reset = !1),
                (d.placement = d.options.placement),
                d.orderedModifiers.forEach(function (A) {
                  return (d.modifiersData[A.name] = Object.assign({}, A.data));
                });
              for (var h = 0; h < d.orderedModifiers.length; h++) {
                if (d.reset === !0) {
                  (d.reset = !1), (h = -1);
                  continue;
                }
                var C = d.orderedModifiers[h],
                  P = C.fn,
                  k = C.options,
                  I = k === void 0 ? {} : k,
                  E = C.name;
                typeof P == "function" &&
                  (d = P({ state: d, options: I, name: E, instance: v }) || d);
              }
            }
          }
        },
        update: dc(function () {
          return new Promise(function (x) {
            v.forceUpdate(), x(d);
          });
        }),
        destroy: function () {
          $(), (b = !0);
        },
      };
    if (!Tr(l, i)) return v;
    v.setOptions(c).then(function (x) {
      !b && c.onFirstUpdate && c.onFirstUpdate(x);
    });
    function y() {
      d.orderedModifiers.forEach(function (x) {
        var w = x.name,
          S = x.options,
          g = S === void 0 ? {} : S,
          h = x.effect;
        if (typeof h == "function") {
          var C = h({ state: d, name: w, instance: v, options: g }),
            P = function () {};
          m.push(C || P);
        }
      });
    }
    function $() {
      m.forEach(function (x) {
        return x();
      }),
        (m = []);
    }
    return v;
  };
}
var mc = [Nl, tc, Fl, Sl, Ql, Gl, rc, El, Yl],
  gc = fc({ defaultModifiers: mc });
const Ts = "Popper";
function hc(e) {
  return ys(Ts, e);
}
qi(Ts, ["root"]);
const vc = [
    "anchorEl",
    "children",
    "direction",
    "disablePortal",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "slotProps",
    "slots",
    "TransitionProps",
    "ownerState",
  ],
  bc = [
    "anchorEl",
    "children",
    "container",
    "direction",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "style",
    "transition",
    "slotProps",
    "slots",
  ];
function yc(e, t) {
  if (t === "ltr") return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function kn(e) {
  return typeof e == "function" ? e() : e;
}
function xc(e) {
  return e.nodeType !== void 0;
}
const Cc = () => be({ root: ["root"] }, xi(hc)),
  wc = {},
  Pc = f.forwardRef(function (t, o) {
    var n;
    const {
        anchorEl: r,
        children: s,
        direction: a,
        disablePortal: l,
        modifiers: i,
        open: c,
        placement: d,
        popperOptions: m,
        popperRef: b,
        slotProps: v = {},
        slots: y = {},
        TransitionProps: $,
      } = t,
      x = X(t, vc),
      w = f.useRef(null),
      S = We(w, o),
      g = f.useRef(null),
      h = We(g, b),
      C = f.useRef(h);
    Ft(() => {
      C.current = h;
    }, [h]),
      f.useImperativeHandle(b, () => g.current, []);
    const P = yc(d, a),
      [k, I] = f.useState(P),
      [E, A] = f.useState(kn(r));
    f.useEffect(() => {
      g.current && g.current.forceUpdate();
    }),
      f.useEffect(() => {
        r && A(kn(r));
      }, [r]),
      Ft(() => {
        if (!E || !c) return;
        const V = (D) => {
          I(D.placement);
        };
        let j = [
          { name: "preventOverflow", options: { altBoundary: l } },
          { name: "flip", options: { altBoundary: l } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: D }) => {
              V(D);
            },
          },
        ];
        i != null && (j = j.concat(i)),
          m && m.modifiers != null && (j = j.concat(m.modifiers));
        const _ = gc(E, w.current, p({ placement: P }, m, { modifiers: j }));
        return (
          C.current(_),
          () => {
            _.destroy(), C.current(null);
          }
        );
      }, [E, l, i, c, m, P]);
    const F = { placement: k };
    $ !== null && (F.TransitionProps = $);
    const T = Cc(),
      M = (n = y.root) != null ? n : "div",
      L = Ht({
        elementType: M,
        externalSlotProps: v.root,
        externalForwardedProps: x,
        additionalProps: { role: "tooltip", ref: S },
        ownerState: t,
        className: T.root,
      });
    return u.jsx(M, p({}, L, { children: typeof s == "function" ? s(F) : s }));
  }),
  Sc = f.forwardRef(function (t, o) {
    const {
        anchorEl: n,
        children: r,
        container: s,
        direction: a = "ltr",
        disablePortal: l = !1,
        keepMounted: i = !1,
        modifiers: c,
        open: d,
        placement: m = "bottom",
        popperOptions: b = wc,
        popperRef: v,
        style: y,
        transition: $ = !1,
        slotProps: x = {},
        slots: w = {},
      } = t,
      S = X(t, bc),
      [g, h] = f.useState(!0),
      C = () => {
        h(!1);
      },
      P = () => {
        h(!0);
      };
    if (!i && !d && (!$ || g)) return null;
    let k;
    if (s) k = s;
    else if (n) {
      const A = kn(n);
      k = A && xc(A) ? Xe(A).body : Xe(null).body;
    }
    const I = !d && i && (!$ || g) ? "none" : void 0,
      E = $ ? { in: d, onEnter: C, onExited: P } : void 0;
    return u.jsx(xs, {
      disablePortal: l,
      container: k,
      children: u.jsx(
        Pc,
        p(
          {
            anchorEl: n,
            direction: a,
            disablePortal: l,
            modifiers: c,
            ref: o,
            open: $ ? !g : d,
            placement: m,
            popperOptions: b,
            popperRef: v,
            slotProps: x,
            slots: w,
          },
          S,
          {
            style: p({ position: "fixed", top: 0, left: 0, display: I }, y),
            TransitionProps: E,
            children: r,
          }
        )
      ),
    });
  }),
  $c = ["onChange", "maxRows", "minRows", "style", "value"];
function Ro(e) {
  return parseInt(e, 10) || 0;
}
const Rc = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function kc(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflowing)
  );
}
const Oc = f.forwardRef(function (t, o) {
  const { onChange: n, maxRows: r, minRows: s = 1, style: a, value: l } = t,
    i = X(t, $c),
    { current: c } = f.useRef(l != null),
    d = f.useRef(null),
    m = We(o, d),
    b = f.useRef(null),
    v = f.useCallback(() => {
      const x = d.current,
        S = Wt(x).getComputedStyle(x);
      if (S.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      const g = b.current;
      (g.style.width = S.width),
        (g.value = x.value || t.placeholder || "x"),
        g.value.slice(-1) ===
          `
` && (g.value += " ");
      const h = S.boxSizing,
        C = Ro(S.paddingBottom) + Ro(S.paddingTop),
        P = Ro(S.borderBottomWidth) + Ro(S.borderTopWidth),
        k = g.scrollHeight;
      g.value = "x";
      const I = g.scrollHeight;
      let E = k;
      s && (E = Math.max(Number(s) * I, E)),
        r && (E = Math.min(Number(r) * I, E)),
        (E = Math.max(E, I));
      const A = E + (h === "border-box" ? C + P : 0),
        F = Math.abs(E - k) <= 1;
      return { outerHeightStyle: A, overflowing: F };
    }, [r, s, t.placeholder]),
    y = f.useCallback(() => {
      const x = v();
      if (kc(x)) return;
      const w = d.current;
      (w.style.height = `${x.outerHeightStyle}px`),
        (w.style.overflow = x.overflowing ? "hidden" : "");
    }, [v]);
  Ft(() => {
    const x = () => {
      y();
    };
    let w;
    const S = is(x),
      g = d.current,
      h = Wt(g);
    h.addEventListener("resize", S);
    let C;
    return (
      typeof ResizeObserver < "u" &&
        ((C = new ResizeObserver(x)), C.observe(g)),
      () => {
        S.clear(),
          cancelAnimationFrame(w),
          h.removeEventListener("resize", S),
          C && C.disconnect();
      }
    );
  }, [v, y]),
    Ft(() => {
      y();
    });
  const $ = (x) => {
    c || y(), n && n(x);
  };
  return u.jsxs(f.Fragment, {
    children: [
      u.jsx(
        "textarea",
        p({ value: l, onChange: $, ref: m, rows: s, style: a }, i)
      ),
      u.jsx("textarea", {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: b,
        tabIndex: -1,
        style: p({}, Rc.shadow, a, { paddingTop: 0, paddingBottom: 0 }),
      }),
    ],
  });
});
function Er(e) {
  return typeof e.normalize < "u"
    ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    : e;
}
function Ic(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: o = !0,
    limit: n,
    matchFrom: r = "any",
    stringify: s,
    trim: a = !1,
  } = e;
  return (l, { inputValue: i, getOptionLabel: c }) => {
    let d = a ? i.trim() : i;
    o && (d = d.toLowerCase()), t && (d = Er(d));
    const m = d
      ? l.filter((b) => {
          let v = (s || c)(b);
          return (
            o && (v = v.toLowerCase()),
            t && (v = Er(v)),
            r === "start" ? v.indexOf(d) === 0 : v.indexOf(d) > -1
          );
        })
      : l;
    return typeof n == "number" ? m.slice(0, n) : m;
  };
}
function ko(e, t) {
  for (let o = 0; o < e.length; o += 1) if (t(e[o])) return o;
  return -1;
}
const Tc = Ic(),
  Mr = 5,
  Ec = (e) => {
    var t;
    return (
      e.current !== null &&
      ((t = e.current.parentElement) == null
        ? void 0
        : t.contains(document.activeElement))
    );
  };
function Mc(e) {
  const {
      unstable_isActiveElementInListbox: t = Ec,
      unstable_classNamePrefix: o = "Mui",
      autoComplete: n = !1,
      autoHighlight: r = !1,
      autoSelect: s = !1,
      blurOnSelect: a = !1,
      clearOnBlur: l = !e.freeSolo,
      clearOnEscape: i = !1,
      componentName: c = "useAutocomplete",
      defaultValue: d = e.multiple ? [] : null,
      disableClearable: m = !1,
      disableCloseOnSelect: b = !1,
      disabled: v,
      disabledItemsFocusable: y = !1,
      disableListWrap: $ = !1,
      filterOptions: x = Tc,
      filterSelectedOptions: w = !1,
      freeSolo: S = !1,
      getOptionDisabled: g,
      getOptionKey: h,
      getOptionLabel: C = (O) => {
        var R;
        return (R = O.label) != null ? R : O;
      },
      groupBy: P,
      handleHomeEndKeys: k = !e.freeSolo,
      id: I,
      includeInputInList: E = !1,
      inputValue: A,
      isOptionEqualToValue: F = (O, R) => O === R,
      multiple: T = !1,
      onChange: M,
      onClose: L,
      onHighlightChange: V,
      onInputChange: j,
      onOpen: _,
      open: D,
      openOnFocus: K = !1,
      options: ye,
      readOnly: Oe = !1,
      selectOnFocus: pe = !e.freeSolo,
      value: ge,
    } = e,
    Y = Ut(I);
  let te = C;
  te = (O) => {
    const R = C(O);
    return typeof R != "string" ? String(R) : R;
  };
  const fe = f.useRef(!1),
    Ie = f.useRef(!0),
    J = f.useRef(null),
    ue = f.useRef(null),
    [Ee, ne] = f.useState(null),
    [ae, Q] = f.useState(-1),
    re = r ? 0 : -1,
    W = f.useRef(re),
    [z, ke] = Mt({ controlled: ge, default: d, name: c }),
    [Z, Pe] = Mt({ controlled: A, default: "", name: c, state: "inputValue" }),
    [he, ie] = f.useState(!1),
    Se = f.useCallback(
      (O, R) => {
        if (!(T ? z.length < R.length : R !== null) && !l) return;
        let N;
        if (T) N = "";
        else if (R == null) N = "";
        else {
          const oe = te(R);
          N = typeof oe == "string" ? oe : "";
        }
        Z !== N && (Pe(N), j && j(O, N, "reset"));
      },
      [te, Z, T, j, Pe, l, z]
    ),
    [xe, $e] = Mt({ controlled: D, default: !1, name: c, state: "open" }),
    [He, Ne] = f.useState(!0),
    ze = !T && z != null && Z === te(z),
    se = xe && !Oe,
    me = se
      ? x(
          ye.filter(
            (O) => !(w && (T ? z : [z]).some((R) => R !== null && F(O, R)))
          ),
          { inputValue: ze && He ? "" : Z, getOptionLabel: te }
        )
      : [],
    Me = si({ filteredOptions: me, value: z, inputValue: Z });
  f.useEffect(() => {
    const O = z !== Me.value;
    (he && !O) || (S && !O) || Se(null, z);
  }, [z, Se, he, Me.value, S]);
  const Je = xe && me.length > 0 && !Oe,
    Ve = Tt((O) => {
      O === -1
        ? J.current.focus()
        : Ee.querySelector(`[data-tag-index="${O}"]`).focus();
    });
  f.useEffect(() => {
    T && ae > z.length - 1 && (Q(-1), Ve(-1));
  }, [z, T, ae, Ve]);
  function G(O, R) {
    if (!ue.current || O < 0 || O >= me.length) return -1;
    let H = O;
    for (;;) {
      const N = ue.current.querySelector(`[data-option-index="${H}"]`),
        oe = y
          ? !1
          : !N || N.disabled || N.getAttribute("aria-disabled") === "true";
      if (N && N.hasAttribute("tabindex") && !oe) return H;
      if (
        (R === "next"
          ? (H = (H + 1) % me.length)
          : (H = (H - 1 + me.length) % me.length),
        H === O)
      )
        return -1;
    }
  }
  const de = Tt(({ event: O, index: R, reason: H = "auto" }) => {
      if (
        ((W.current = R),
        R === -1
          ? J.current.removeAttribute("aria-activedescendant")
          : J.current.setAttribute("aria-activedescendant", `${Y}-option-${R}`),
        V && V(O, R === -1 ? null : me[R], H),
        !ue.current)
      )
        return;
      const N = ue.current.querySelector(`[role="option"].${o}-focused`);
      N &&
        (N.classList.remove(`${o}-focused`),
        N.classList.remove(`${o}-focusVisible`));
      let oe = ue.current;
      if (
        (ue.current.getAttribute("role") !== "listbox" &&
          (oe = ue.current.parentElement.querySelector('[role="listbox"]')),
        !oe)
      )
        return;
      if (R === -1) {
        oe.scrollTop = 0;
        return;
      }
      const q = ue.current.querySelector(`[data-option-index="${R}"]`);
      if (
        q &&
        (q.classList.add(`${o}-focused`),
        H === "keyboard" && q.classList.add(`${o}-focusVisible`),
        oe.scrollHeight > oe.clientHeight && H !== "mouse" && H !== "touch")
      ) {
        const le = q,
          st = oe.clientHeight + oe.scrollTop,
          wo = le.offsetTop + le.offsetHeight;
        wo > st
          ? (oe.scrollTop = wo - oe.clientHeight)
          : le.offsetTop - le.offsetHeight * (P ? 1.3 : 0) < oe.scrollTop &&
            (oe.scrollTop = le.offsetTop - le.offsetHeight * (P ? 1.3 : 0));
      }
    }),
    ve = Tt(
      ({ event: O, diff: R, direction: H = "next", reason: N = "auto" }) => {
        if (!se) return;
        const q = G(
          (() => {
            const le = me.length - 1;
            if (R === "reset") return re;
            if (R === "start") return 0;
            if (R === "end") return le;
            const st = W.current + R;
            return st < 0
              ? st === -1 && E
                ? -1
                : ($ && W.current !== -1) || Math.abs(R) > 1
                ? 0
                : le
              : st > le
              ? st === le + 1 && E
                ? -1
                : $ || Math.abs(R) > 1
                ? le
                : 0
              : st;
          })(),
          H
        );
        if ((de({ index: q, reason: N, event: O }), n && R !== "reset"))
          if (q === -1) J.current.value = Z;
          else {
            const le = te(me[q]);
            (J.current.value = le),
              le.toLowerCase().indexOf(Z.toLowerCase()) === 0 &&
                Z.length > 0 &&
                J.current.setSelectionRange(Z.length, le.length);
          }
      }
    ),
    De = () => {
      const O = (R, H) => {
        const N = R ? te(R) : "",
          oe = H ? te(H) : "";
        return N === oe;
      };
      if (
        W.current !== -1 &&
        Me.filteredOptions &&
        Me.filteredOptions.length !== me.length &&
        Me.inputValue === Z &&
        (T
          ? z.length === Me.value.length &&
            Me.value.every((R, H) => te(z[H]) === te(R))
          : O(Me.value, z))
      ) {
        const R = Me.filteredOptions[W.current];
        if (R) return ko(me, (H) => te(H) === te(R));
      }
      return -1;
    },
    nt = f.useCallback(() => {
      if (!se) return;
      const O = De();
      if (O !== -1) {
        W.current = O;
        return;
      }
      const R = T ? z[0] : z;
      if (me.length === 0 || R == null) {
        ve({ diff: "reset" });
        return;
      }
      if (ue.current) {
        if (R != null) {
          const H = me[W.current];
          if (T && H && ko(z, (oe) => F(H, oe)) !== -1) return;
          const N = ko(me, (oe) => F(oe, R));
          N === -1 ? ve({ diff: "reset" }) : de({ index: N });
          return;
        }
        if (W.current >= me.length - 1) {
          de({ index: me.length - 1 });
          return;
        }
        de({ index: W.current });
      }
    }, [me.length, T ? !1 : z, w, ve, de, se, Z, T]),
    Kt = Tt((O) => {
      yn(ue, O), O && nt();
    });
  f.useEffect(() => {
    nt();
  }, [nt]);
  const Ke = (O) => {
      xe || ($e(!0), Ne(!0), _ && _(O));
    },
    pt = (O, R) => {
      xe && ($e(!1), L && L(O, R));
    },
    rt = (O, R, H, N) => {
      if (T) {
        if (z.length === R.length && z.every((oe, q) => oe === R[q])) return;
      } else if (z === R) return;
      M && M(O, R, H, N), ke(R);
    },
    xt = f.useRef(!1),
    mt = (O, R, H = "selectOption", N = "options") => {
      let oe = H,
        q = R;
      if (T) {
        q = Array.isArray(z) ? z.slice() : [];
        const le = ko(q, (st) => F(R, st));
        le === -1
          ? q.push(R)
          : N !== "freeSolo" && (q.splice(le, 1), (oe = "removeOption"));
      }
      Se(O, q),
        rt(O, q, oe, { option: R }),
        !b && (!O || (!O.ctrlKey && !O.metaKey)) && pt(O, oe),
        (a === !0 ||
          (a === "touch" && xt.current) ||
          (a === "mouse" && !xt.current)) &&
          J.current.blur();
    };
  function Bt(O, R) {
    if (O === -1) return -1;
    let H = O;
    for (;;) {
      if ((R === "next" && H === z.length) || (R === "previous" && H === -1))
        return -1;
      const N = Ee.querySelector(`[data-tag-index="${H}"]`);
      if (
        !N ||
        !N.hasAttribute("tabindex") ||
        N.disabled ||
        N.getAttribute("aria-disabled") === "true"
      )
        H += R === "next" ? 1 : -1;
      else return H;
    }
  }
  const zt = (O, R) => {
      if (!T) return;
      Z === "" && pt(O, "toggleInput");
      let H = ae;
      ae === -1
        ? Z === "" && R === "previous" && (H = z.length - 1)
        : ((H += R === "next" ? 1 : -1),
          H < 0 && (H = 0),
          H === z.length && (H = -1)),
        (H = Bt(H, R)),
        Q(H),
        Ve(H);
    },
    Gt = (O) => {
      (fe.current = !0),
        Pe(""),
        j && j(O, "", "clear"),
        rt(O, T ? [] : null, "clear");
    },
    no = (O) => (R) => {
      if (
        (O.onKeyDown && O.onKeyDown(R),
        !R.defaultMuiPrevented &&
          (ae !== -1 &&
            ["ArrowLeft", "ArrowRight"].indexOf(R.key) === -1 &&
            (Q(-1), Ve(-1)),
          R.which !== 229))
      )
        switch (R.key) {
          case "Home":
            se &&
              k &&
              (R.preventDefault(),
              ve({
                diff: "start",
                direction: "next",
                reason: "keyboard",
                event: R,
              }));
            break;
          case "End":
            se &&
              k &&
              (R.preventDefault(),
              ve({
                diff: "end",
                direction: "previous",
                reason: "keyboard",
                event: R,
              }));
            break;
          case "PageUp":
            R.preventDefault(),
              ve({
                diff: -Mr,
                direction: "previous",
                reason: "keyboard",
                event: R,
              }),
              Ke(R);
            break;
          case "PageDown":
            R.preventDefault(),
              ve({ diff: Mr, direction: "next", reason: "keyboard", event: R }),
              Ke(R);
            break;
          case "ArrowDown":
            R.preventDefault(),
              ve({ diff: 1, direction: "next", reason: "keyboard", event: R }),
              Ke(R);
            break;
          case "ArrowUp":
            R.preventDefault(),
              ve({
                diff: -1,
                direction: "previous",
                reason: "keyboard",
                event: R,
              }),
              Ke(R);
            break;
          case "ArrowLeft":
            zt(R, "previous");
            break;
          case "ArrowRight":
            zt(R, "next");
            break;
          case "Enter":
            if (W.current !== -1 && se) {
              const H = me[W.current],
                N = g ? g(H) : !1;
              if ((R.preventDefault(), N)) return;
              mt(R, H, "selectOption"),
                n &&
                  J.current.setSelectionRange(
                    J.current.value.length,
                    J.current.value.length
                  );
            } else
              S &&
                Z !== "" &&
                ze === !1 &&
                (T && R.preventDefault(), mt(R, Z, "createOption", "freeSolo"));
            break;
          case "Escape":
            se
              ? (R.preventDefault(), R.stopPropagation(), pt(R, "escape"))
              : i &&
                (Z !== "" || (T && z.length > 0)) &&
                (R.preventDefault(), R.stopPropagation(), Gt(R));
            break;
          case "Backspace":
            if (T && !Oe && Z === "" && z.length > 0) {
              const H = ae === -1 ? z.length - 1 : ae,
                N = z.slice();
              N.splice(H, 1), rt(R, N, "removeOption", { option: z[H] });
            }
            break;
          case "Delete":
            if (T && !Oe && Z === "" && z.length > 0 && ae !== -1) {
              const H = ae,
                N = z.slice();
              N.splice(H, 1), rt(R, N, "removeOption", { option: z[H] });
            }
            break;
        }
    },
    Co = (O) => {
      ie(!0), K && !fe.current && Ke(O);
    },
    gt = (O) => {
      if (t(ue)) {
        J.current.focus();
        return;
      }
      ie(!1),
        (Ie.current = !0),
        (fe.current = !1),
        s && W.current !== -1 && se
          ? mt(O, me[W.current], "blur")
          : s && S && Z !== ""
          ? mt(O, Z, "blur", "freeSolo")
          : l && Se(O, z),
        pt(O, "blur");
    },
    Be = (O) => {
      const R = O.target.value;
      Z !== R && (Pe(R), Ne(!1), j && j(O, R, "input")),
        R === "" ? !m && !T && rt(O, null, "clear") : Ke(O);
    },
    Fe = (O) => {
      const R = Number(O.currentTarget.getAttribute("data-option-index"));
      W.current !== R && de({ event: O, index: R, reason: "mouse" });
    },
    Ue = (O) => {
      de({
        event: O,
        index: Number(O.currentTarget.getAttribute("data-option-index")),
        reason: "touch",
      }),
        (xt.current = !0);
    },
    Ge = (O) => {
      const R = Number(O.currentTarget.getAttribute("data-option-index"));
      mt(O, me[R], "selectOption"), (xt.current = !1);
    },
    Ct = (O) => (R) => {
      const H = z.slice();
      H.splice(O, 1), rt(R, H, "removeOption", { option: z[O] });
    },
    ro = (O) => {
      xe ? pt(O, "toggleInput") : Ke(O);
    },
    wt = (O) => {
      O.currentTarget.contains(O.target) &&
        O.target.getAttribute("id") !== Y &&
        O.preventDefault();
    },
    kt = (O) => {
      O.currentTarget.contains(O.target) &&
        (J.current.focus(),
        pe &&
          Ie.current &&
          J.current.selectionEnd - J.current.selectionStart === 0 &&
          J.current.select(),
        (Ie.current = !1));
    },
    Ot = (O) => {
      !v && (Z === "" || !xe) && ro(O);
    };
  let ht = S && Z.length > 0;
  ht = ht || (T ? z.length > 0 : z !== null);
  let Pt = me;
  return (
    P &&
      (Pt = me.reduce((O, R, H) => {
        const N = P(R);
        return (
          O.length > 0 && O[O.length - 1].group === N
            ? O[O.length - 1].options.push(R)
            : O.push({ key: H, index: H, group: N, options: [R] }),
          O
        );
      }, [])),
    v && he && gt(),
    {
      getRootProps: (O = {}) =>
        p({ "aria-owns": Je ? `${Y}-listbox` : null }, O, {
          onKeyDown: no(O),
          onMouseDown: wt,
          onClick: kt,
        }),
      getInputLabelProps: () => ({ id: `${Y}-label`, htmlFor: Y }),
      getInputProps: () => ({
        id: Y,
        value: Z,
        onBlur: gt,
        onFocus: Co,
        onChange: Be,
        onMouseDown: Ot,
        "aria-activedescendant": se ? "" : null,
        "aria-autocomplete": n ? "both" : "list",
        "aria-controls": Je ? `${Y}-listbox` : void 0,
        "aria-expanded": Je,
        autoComplete: "off",
        ref: J,
        autoCapitalize: "none",
        spellCheck: "false",
        role: "combobox",
        disabled: v,
      }),
      getClearProps: () => ({ tabIndex: -1, type: "button", onClick: Gt }),
      getPopupIndicatorProps: () => ({
        tabIndex: -1,
        type: "button",
        onClick: ro,
      }),
      getTagProps: ({ index: O }) =>
        p(
          { key: O, "data-tag-index": O, tabIndex: -1 },
          !Oe && { onDelete: Ct(O) }
        ),
      getListboxProps: () => ({
        role: "listbox",
        id: `${Y}-listbox`,
        "aria-labelledby": `${Y}-label`,
        ref: Kt,
        onMouseDown: (O) => {
          O.preventDefault();
        },
      }),
      getOptionProps: ({ index: O, option: R }) => {
        var H;
        const N = (T ? z : [z]).some((q) => q != null && F(R, q)),
          oe = g ? g(R) : !1;
        return {
          key: (H = h == null ? void 0 : h(R)) != null ? H : te(R),
          tabIndex: -1,
          role: "option",
          id: `${Y}-option-${O}`,
          onMouseMove: Fe,
          onClick: Ge,
          onTouchStart: Ue,
          "data-option-index": O,
          "aria-disabled": oe,
          "aria-selected": N,
        };
      },
      id: Y,
      inputValue: Z,
      value: z,
      dirty: ht,
      expanded: se && Ee,
      popupOpen: se,
      focused: he || ae !== -1,
      anchorEl: Ee,
      setAnchorEl: ne,
      focusedTag: ae,
      groupedOptions: Pt,
    }
  );
}
var Hn = {};
Object.defineProperty(Hn, "__esModule", { value: !0 });
var Es = (Hn.default = void 0),
  Ac = Fc(f),
  jc = ka;
function Ms(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    o = new WeakMap();
  return (Ms = function (n) {
    return n ? o : t;
  })(e);
}
function Fc(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var o = Ms(t);
  if (o && o.has(e)) return o.get(e);
  var n = { __proto__: null },
    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var a = r ? Object.getOwnPropertyDescriptor(e, s) : null;
      a && (a.get || a.set) ? Object.defineProperty(n, s, a) : (n[s] = e[s]);
    }
  return (n.default = e), o && o.set(e, n), n;
}
function Lc(e) {
  return Object.keys(e).length === 0;
}
function Nc(e = null) {
  const t = Ac.useContext(jc.ThemeContext);
  return !t || Lc(t) ? e : t;
}
Es = Hn.default = Nc;
const Dc = [
    "anchorEl",
    "component",
    "components",
    "componentsProps",
    "container",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "transition",
    "slots",
    "slotProps",
  ],
  Bc = B(Sc, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  zc = f.forwardRef(function (t, o) {
    var n;
    const r = Es(),
      s = Te({ props: t, name: "MuiPopper" }),
      {
        anchorEl: a,
        component: l,
        components: i,
        componentsProps: c,
        container: d,
        disablePortal: m,
        keepMounted: b,
        modifiers: v,
        open: y,
        placement: $,
        popperOptions: x,
        popperRef: w,
        transition: S,
        slots: g,
        slotProps: h,
      } = s,
      C = X(s, Dc),
      P =
        (n = g == null ? void 0 : g.root) != null
          ? n
          : i == null
          ? void 0
          : i.Root,
      k = p(
        {
          anchorEl: a,
          container: d,
          disablePortal: m,
          keepMounted: b,
          modifiers: v,
          open: y,
          placement: $,
          popperOptions: x,
          popperRef: w,
          transition: S,
        },
        C
      );
    return u.jsx(
      Bc,
      p(
        {
          as: l,
          direction: r == null ? void 0 : r.direction,
          slots: { root: P },
          slotProps: h ?? c,
        },
        k,
        { ref: o }
      )
    );
  }),
  Jo = zc;
function _c(e) {
  return we("MuiListSubheader", e);
}
Re("MuiListSubheader", [
  "root",
  "colorPrimary",
  "colorInherit",
  "gutters",
  "inset",
  "sticky",
]);
const Wc = [
    "className",
    "color",
    "component",
    "disableGutters",
    "disableSticky",
    "inset",
  ],
  Hc = (e) => {
    const {
        classes: t,
        color: o,
        disableGutters: n,
        inset: r,
        disableSticky: s,
      } = e,
      a = {
        root: [
          "root",
          o !== "default" && `color${U(o)}`,
          !n && "gutters",
          r && "inset",
          !s && "sticky",
        ],
      };
    return be(a, _c, t);
  },
  Vc = B("li", {
    name: "MuiListSubheader",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        o.color !== "default" && t[`color${U(o.color)}`],
        !o.disableGutters && t.gutters,
        o.inset && t.inset,
        !o.disableSticky && t.sticky,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    p(
      {
        boxSizing: "border-box",
        lineHeight: "48px",
        listStyle: "none",
        color: (e.vars || e).palette.text.secondary,
        fontFamily: e.typography.fontFamily,
        fontWeight: e.typography.fontWeightMedium,
        fontSize: e.typography.pxToRem(14),
      },
      t.color === "primary" && { color: (e.vars || e).palette.primary.main },
      t.color === "inherit" && { color: "inherit" },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.inset && { paddingLeft: 72 },
      !t.disableSticky && {
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: (e.vars || e).palette.background.paper,
      }
    )
  ),
  As = f.forwardRef(function (t, o) {
    const n = Te({ props: t, name: "MuiListSubheader" }),
      {
        className: r,
        color: s = "default",
        component: a = "li",
        disableGutters: l = !1,
        disableSticky: i = !1,
        inset: c = !1,
      } = n,
      d = X(n, Wc),
      m = p({}, n, {
        color: s,
        component: a,
        disableGutters: l,
        disableSticky: i,
        inset: c,
      }),
      b = Hc(m);
    return u.jsx(
      Vc,
      p({ as: a, className: ee(b.root, r), ref: o, ownerState: m }, d)
    );
  });
As.muiSkipListHighlight = !0;
const Uc = As,
  qc = Rt(
    u.jsx("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    }),
    "Cancel"
  );
function Kc(e) {
  return we("MuiChip", e);
}
const Gc = Re("MuiChip", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "clickable",
    "clickableColorPrimary",
    "clickableColorSecondary",
    "deletable",
    "deletableColorPrimary",
    "deletableColorSecondary",
    "outlined",
    "filled",
    "outlinedPrimary",
    "outlinedSecondary",
    "filledPrimary",
    "filledSecondary",
    "avatar",
    "avatarSmall",
    "avatarMedium",
    "avatarColorPrimary",
    "avatarColorSecondary",
    "icon",
    "iconSmall",
    "iconMedium",
    "iconColorPrimary",
    "iconColorSecondary",
    "label",
    "labelSmall",
    "labelMedium",
    "deleteIcon",
    "deleteIconSmall",
    "deleteIconMedium",
    "deleteIconColorPrimary",
    "deleteIconColorSecondary",
    "deleteIconOutlinedColorPrimary",
    "deleteIconOutlinedColorSecondary",
    "deleteIconFilledColorPrimary",
    "deleteIconFilledColorSecondary",
    "focusVisible",
  ]),
  Ce = Gc,
  Xc = [
    "avatar",
    "className",
    "clickable",
    "color",
    "component",
    "deleteIcon",
    "disabled",
    "icon",
    "label",
    "onClick",
    "onDelete",
    "onKeyDown",
    "onKeyUp",
    "size",
    "variant",
    "tabIndex",
    "skipFocusWhenDisabled",
  ],
  Yc = (e) => {
    const {
        classes: t,
        disabled: o,
        size: n,
        color: r,
        iconColor: s,
        onDelete: a,
        clickable: l,
        variant: i,
      } = e,
      c = {
        root: [
          "root",
          i,
          o && "disabled",
          `size${U(n)}`,
          `color${U(r)}`,
          l && "clickable",
          l && `clickableColor${U(r)}`,
          a && "deletable",
          a && `deletableColor${U(r)}`,
          `${i}${U(r)}`,
        ],
        label: ["label", `label${U(n)}`],
        avatar: ["avatar", `avatar${U(n)}`, `avatarColor${U(r)}`],
        icon: ["icon", `icon${U(n)}`, `iconColor${U(s)}`],
        deleteIcon: [
          "deleteIcon",
          `deleteIcon${U(n)}`,
          `deleteIconColor${U(r)}`,
          `deleteIcon${U(i)}Color${U(r)}`,
        ],
      };
    return be(c, Kc, t);
  },
  Zc = B("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e,
        {
          color: n,
          iconColor: r,
          clickable: s,
          onDelete: a,
          size: l,
          variant: i,
        } = o;
      return [
        { [`& .${Ce.avatar}`]: t.avatar },
        { [`& .${Ce.avatar}`]: t[`avatar${U(l)}`] },
        { [`& .${Ce.avatar}`]: t[`avatarColor${U(n)}`] },
        { [`& .${Ce.icon}`]: t.icon },
        { [`& .${Ce.icon}`]: t[`icon${U(l)}`] },
        { [`& .${Ce.icon}`]: t[`iconColor${U(r)}`] },
        { [`& .${Ce.deleteIcon}`]: t.deleteIcon },
        { [`& .${Ce.deleteIcon}`]: t[`deleteIcon${U(l)}`] },
        { [`& .${Ce.deleteIcon}`]: t[`deleteIconColor${U(n)}`] },
        { [`& .${Ce.deleteIcon}`]: t[`deleteIcon${U(i)}Color${U(n)}`] },
        t.root,
        t[`size${U(l)}`],
        t[`color${U(n)}`],
        s && t.clickable,
        s && n !== "default" && t[`clickableColor${U(n)})`],
        a && t.deletable,
        a && n !== "default" && t[`deletableColor${U(n)}`],
        t[i],
        t[`${i}${U(n)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      const o =
        e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
      return p(
        {
          maxWidth: "100%",
          fontFamily: e.typography.fontFamily,
          fontSize: e.typography.pxToRem(13),
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: 32,
          color: (e.vars || e).palette.text.primary,
          backgroundColor: (e.vars || e).palette.action.selected,
          borderRadius: 32 / 2,
          whiteSpace: "nowrap",
          transition: e.transitions.create(["background-color", "box-shadow"]),
          cursor: "unset",
          outline: 0,
          textDecoration: "none",
          border: 0,
          padding: 0,
          verticalAlign: "middle",
          boxSizing: "border-box",
          [`&.${Ce.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
            pointerEvents: "none",
          },
          [`& .${Ce.avatar}`]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : o,
            fontSize: e.typography.pxToRem(12),
          },
          [`& .${Ce.avatarColorPrimary}`]: {
            color: (e.vars || e).palette.primary.contrastText,
            backgroundColor: (e.vars || e).palette.primary.dark,
          },
          [`& .${Ce.avatarColorSecondary}`]: {
            color: (e.vars || e).palette.secondary.contrastText,
            backgroundColor: (e.vars || e).palette.secondary.dark,
          },
          [`& .${Ce.avatarSmall}`]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: e.typography.pxToRem(10),
          },
          [`& .${Ce.icon}`]: p(
            { marginLeft: 5, marginRight: -6 },
            t.size === "small" && {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4,
            },
            t.iconColor === t.color &&
              p(
                { color: e.vars ? e.vars.palette.Chip.defaultIconColor : o },
                t.color !== "default" && { color: "inherit" }
              )
          ),
          [`& .${Ce.deleteIcon}`]: p(
            {
              WebkitTapHighlightColor: "transparent",
              color: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)`
                : _e(e.palette.text.primary, 0.26),
              fontSize: 22,
              cursor: "pointer",
              margin: "0 5px 0 -6px",
              "&:hover": {
                color: e.vars
                  ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
                  : _e(e.palette.text.primary, 0.4),
              },
            },
            t.size === "small" && {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4,
            },
            t.color !== "default" && {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`
                : _e(e.palette[t.color].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[t.color].contrastText,
              },
            }
          ),
        },
        t.size === "small" && { height: 24 },
        t.color !== "default" && {
          backgroundColor: (e.vars || e).palette[t.color].main,
          color: (e.vars || e).palette[t.color].contrastText,
        },
        t.onDelete && {
          [`&.${Ce.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : _e(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        t.onDelete &&
          t.color !== "default" && {
            [`&.${Ce.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark,
            },
          }
      );
    },
    ({ theme: e, ownerState: t }) =>
      p(
        {},
        t.clickable && {
          userSelect: "none",
          WebkitTapHighlightColor: "transparent",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : _e(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                ),
          },
          [`&.${Ce.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : _e(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
          "&:active": { boxShadow: (e.vars || e).shadows[1] },
        },
        t.clickable &&
          t.color !== "default" && {
            [`&:hover, &.${Ce.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark,
            },
          }
      ),
    ({ theme: e, ownerState: t }) =>
      p(
        {},
        t.variant === "outlined" && {
          backgroundColor: "transparent",
          border: e.vars
            ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
            : `1px solid ${
                e.palette.mode === "light"
                  ? e.palette.grey[400]
                  : e.palette.grey[700]
              }`,
          [`&.${Ce.clickable}:hover`]: {
            backgroundColor: (e.vars || e).palette.action.hover,
          },
          [`&.${Ce.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`& .${Ce.avatar}`]: { marginLeft: 4 },
          [`& .${Ce.avatarSmall}`]: { marginLeft: 2 },
          [`& .${Ce.icon}`]: { marginLeft: 4 },
          [`& .${Ce.iconSmall}`]: { marginLeft: 2 },
          [`& .${Ce.deleteIcon}`]: { marginRight: 5 },
          [`& .${Ce.deleteIconSmall}`]: { marginRight: 3 },
        },
        t.variant === "outlined" &&
          t.color !== "default" && {
            color: (e.vars || e).palette[t.color].main,
            border: `1px solid ${
              e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : _e(e.palette[t.color].main, 0.7)
            }`,
            [`&.${Ce.clickable}:hover`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.hoverOpacity
                  })`
                : _e(e.palette[t.color].main, e.palette.action.hoverOpacity),
            },
            [`&.${Ce.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.focusOpacity
                  })`
                : _e(e.palette[t.color].main, e.palette.action.focusOpacity),
            },
            [`& .${Ce.deleteIcon}`]: {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : _e(e.palette[t.color].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[t.color].main,
              },
            },
          }
      )
  ),
  Jc = B("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e,
        { size: n } = o;
      return [t.label, t[`label${U(n)}`]];
    },
  })(({ ownerState: e }) =>
    p(
      {
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingLeft: 12,
        paddingRight: 12,
        whiteSpace: "nowrap",
      },
      e.variant === "outlined" && { paddingLeft: 11, paddingRight: 11 },
      e.size === "small" && { paddingLeft: 8, paddingRight: 8 },
      e.size === "small" &&
        e.variant === "outlined" && { paddingLeft: 7, paddingRight: 7 }
    )
  );
function Ar(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Qc = f.forwardRef(function (t, o) {
    const n = Te({ props: t, name: "MuiChip" }),
      {
        avatar: r,
        className: s,
        clickable: a,
        color: l = "default",
        component: i,
        deleteIcon: c,
        disabled: d = !1,
        icon: m,
        label: b,
        onClick: v,
        onDelete: y,
        onKeyDown: $,
        onKeyUp: x,
        size: w = "medium",
        variant: S = "filled",
        tabIndex: g,
        skipFocusWhenDisabled: h = !1,
      } = n,
      C = X(n, Xc),
      P = f.useRef(null),
      k = We(P, o),
      I = (K) => {
        K.stopPropagation(), y && y(K);
      },
      E = (K) => {
        K.currentTarget === K.target && Ar(K) && K.preventDefault(), $ && $(K);
      },
      A = (K) => {
        K.currentTarget === K.target &&
          (y && Ar(K)
            ? y(K)
            : K.key === "Escape" && P.current && P.current.blur()),
          x && x(K);
      },
      F = a !== !1 && v ? !0 : a,
      T = F || y ? xn : i || "div",
      M = p({}, n, {
        component: T,
        disabled: d,
        size: w,
        color: l,
        iconColor: (f.isValidElement(m) && m.props.color) || l,
        onDelete: !!y,
        clickable: F,
        variant: S,
      }),
      L = Yc(M),
      V =
        T === xn
          ? p(
              { component: i || "div", focusVisibleClassName: L.focusVisible },
              y && { disableRipple: !0 }
            )
          : {};
    let j = null;
    y &&
      (j =
        c && f.isValidElement(c)
          ? f.cloneElement(c, {
              className: ee(c.props.className, L.deleteIcon),
              onClick: I,
            })
          : u.jsx(qc, { className: ee(L.deleteIcon), onClick: I }));
    let _ = null;
    r &&
      f.isValidElement(r) &&
      (_ = f.cloneElement(r, { className: ee(L.avatar, r.props.className) }));
    let D = null;
    return (
      m &&
        f.isValidElement(m) &&
        (D = f.cloneElement(m, { className: ee(L.icon, m.props.className) })),
      u.jsxs(
        Zc,
        p(
          {
            as: T,
            className: ee(L.root, s),
            disabled: F && d ? !0 : void 0,
            onClick: v,
            onKeyDown: E,
            onKeyUp: A,
            ref: k,
            tabIndex: h && d ? -1 : g,
            ownerState: M,
          },
          V,
          C,
          {
            children: [
              _ || D,
              u.jsx(Jc, { className: ee(L.label), ownerState: M, children: b }),
              j,
            ],
          }
        )
      )
    );
  }),
  eu = Qc;
function qt({ props: e, states: t, muiFormControl: o }) {
  return t.reduce(
    (n, r) => ((n[r] = e[r]), o && typeof e[r] > "u" && (n[r] = o[r]), n),
    {}
  );
}
const tu = f.createContext(void 0),
  Vn = tu;
function Dt() {
  return f.useContext(Vn);
}
function ou(e) {
  return u.jsx(qa, p({}, e, { defaultTheme: Oa, themeId: Ia }));
}
function jr(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Lo(e, t = !1) {
  return (
    e &&
    ((jr(e.value) && e.value !== "") ||
      (t && jr(e.defaultValue) && e.defaultValue !== ""))
  );
}
function nu(e) {
  return e.startAdornment;
}
function ru(e) {
  return we("MuiInputBase", e);
}
const su = Re("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]),
  Qe = su,
  au = [
    "aria-describedby",
    "autoComplete",
    "autoFocus",
    "className",
    "color",
    "components",
    "componentsProps",
    "defaultValue",
    "disabled",
    "disableInjectingGlobalStyles",
    "endAdornment",
    "error",
    "fullWidth",
    "id",
    "inputComponent",
    "inputProps",
    "inputRef",
    "margin",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onClick",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "placeholder",
    "readOnly",
    "renderSuffix",
    "rows",
    "size",
    "slotProps",
    "slots",
    "startAdornment",
    "type",
    "value",
  ],
  Qo = (e, t) => {
    const { ownerState: o } = e;
    return [
      t.root,
      o.formControl && t.formControl,
      o.startAdornment && t.adornedStart,
      o.endAdornment && t.adornedEnd,
      o.error && t.error,
      o.size === "small" && t.sizeSmall,
      o.multiline && t.multiline,
      o.color && t[`color${U(o.color)}`],
      o.fullWidth && t.fullWidth,
      o.hiddenLabel && t.hiddenLabel,
    ];
  },
  en = (e, t) => {
    const { ownerState: o } = e;
    return [
      t.input,
      o.size === "small" && t.inputSizeSmall,
      o.multiline && t.inputMultiline,
      o.type === "search" && t.inputTypeSearch,
      o.startAdornment && t.inputAdornedStart,
      o.endAdornment && t.inputAdornedEnd,
      o.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  iu = (e) => {
    const {
        classes: t,
        color: o,
        disabled: n,
        error: r,
        endAdornment: s,
        focused: a,
        formControl: l,
        fullWidth: i,
        hiddenLabel: c,
        multiline: d,
        readOnly: m,
        size: b,
        startAdornment: v,
        type: y,
      } = e,
      $ = {
        root: [
          "root",
          `color${U(o)}`,
          n && "disabled",
          r && "error",
          i && "fullWidth",
          a && "focused",
          l && "formControl",
          b && b !== "medium" && `size${U(b)}`,
          d && "multiline",
          v && "adornedStart",
          s && "adornedEnd",
          c && "hiddenLabel",
          m && "readOnly",
        ],
        input: [
          "input",
          n && "disabled",
          y === "search" && "inputTypeSearch",
          d && "inputMultiline",
          b === "small" && "inputSizeSmall",
          c && "inputHiddenLabel",
          v && "inputAdornedStart",
          s && "inputAdornedEnd",
          m && "readOnly",
        ],
      };
    return be($, ru, t);
  },
  tn = B("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Qo })(
    ({ theme: e, ownerState: t }) =>
      p(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${Qe.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          p({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" }
      )
  ),
  on = B("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: en,
  })(({ theme: e, ownerState: t }) => {
    const o = e.palette.mode === "light",
      n = p(
        { color: "currentColor" },
        e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: o ? 0.42 : 0.5 },
        {
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        }
      ),
      r = { opacity: "0 !important" },
      s = e.vars
        ? { opacity: e.vars.opacity.inputPlaceholder }
        : { opacity: o ? 0.42 : 0.5 };
    return p(
      {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": n,
        "&::-moz-placeholder": n,
        "&:-ms-input-placeholder": n,
        "&::-ms-input-placeholder": n,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${Qe.formControl} &`]: {
          "&::-webkit-input-placeholder": r,
          "&::-moz-placeholder": r,
          "&:-ms-input-placeholder": r,
          "&::-ms-input-placeholder": r,
          "&:focus::-webkit-input-placeholder": s,
          "&:focus::-moz-placeholder": s,
          "&:focus:-ms-input-placeholder": s,
          "&:focus::-ms-input-placeholder": s,
        },
        [`&.${Qe.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill",
        },
      },
      t.size === "small" && { paddingTop: 1 },
      t.multiline && {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0,
      },
      t.type === "search" && { MozAppearance: "textfield" }
    );
  }),
  lu = u.jsx(ou, {
    styles: {
      "@keyframes mui-auto-fill": { from: { display: "block" } },
      "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
    },
  }),
  cu = f.forwardRef(function (t, o) {
    var n;
    const r = Te({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": s,
        autoComplete: a,
        autoFocus: l,
        className: i,
        components: c = {},
        componentsProps: d = {},
        defaultValue: m,
        disabled: b,
        disableInjectingGlobalStyles: v,
        endAdornment: y,
        fullWidth: $ = !1,
        id: x,
        inputComponent: w = "input",
        inputProps: S = {},
        inputRef: g,
        maxRows: h,
        minRows: C,
        multiline: P = !1,
        name: k,
        onBlur: I,
        onChange: E,
        onClick: A,
        onFocus: F,
        onKeyDown: T,
        onKeyUp: M,
        placeholder: L,
        readOnly: V,
        renderSuffix: j,
        rows: _,
        slotProps: D = {},
        slots: K = {},
        startAdornment: ye,
        type: Oe = "text",
        value: pe,
      } = r,
      ge = X(r, au),
      Y = S.value != null ? S.value : pe,
      { current: te } = f.useRef(Y != null),
      fe = f.useRef(),
      Ie = f.useCallback((se) => {}, []),
      J = We(fe, g, S.ref, Ie),
      [ue, Ee] = f.useState(!1),
      ne = Dt(),
      ae = qt({
        props: r,
        muiFormControl: ne,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (ae.focused = ne ? ne.focused : ue),
      f.useEffect(() => {
        !ne && b && ue && (Ee(!1), I && I());
      }, [ne, b, ue, I]);
    const Q = ne && ne.onFilled,
      re = ne && ne.onEmpty,
      W = f.useCallback(
        (se) => {
          Lo(se) ? Q && Q() : re && re();
        },
        [Q, re]
      );
    Ft(() => {
      te && W({ value: Y });
    }, [Y, W, te]);
    const z = (se) => {
        if (ae.disabled) {
          se.stopPropagation();
          return;
        }
        F && F(se),
          S.onFocus && S.onFocus(se),
          ne && ne.onFocus ? ne.onFocus(se) : Ee(!0);
      },
      ke = (se) => {
        I && I(se),
          S.onBlur && S.onBlur(se),
          ne && ne.onBlur ? ne.onBlur(se) : Ee(!1);
      },
      Z = (se, ...me) => {
        if (!te) {
          const Me = se.target || fe.current;
          if (Me == null) throw new Error(ls(1));
          W({ value: Me.value });
        }
        S.onChange && S.onChange(se, ...me), E && E(se, ...me);
      };
    f.useEffect(() => {
      W(fe.current);
    }, []);
    const Pe = (se) => {
      fe.current && se.currentTarget === se.target && fe.current.focus(),
        A && A(se);
    };
    let he = w,
      ie = S;
    P &&
      he === "input" &&
      (_
        ? (ie = p({ type: void 0, minRows: _, maxRows: _ }, ie))
        : (ie = p({ type: void 0, maxRows: h, minRows: C }, ie)),
      (he = Oc));
    const Se = (se) => {
      W(
        se.animationName === "mui-auto-fill-cancel"
          ? fe.current
          : { value: "x" }
      );
    };
    f.useEffect(() => {
      ne && ne.setAdornedStart(!!ye);
    }, [ne, ye]);
    const xe = p({}, r, {
        color: ae.color || "primary",
        disabled: ae.disabled,
        endAdornment: y,
        error: ae.error,
        focused: ae.focused,
        formControl: ne,
        fullWidth: $,
        hiddenLabel: ae.hiddenLabel,
        multiline: P,
        size: ae.size,
        startAdornment: ye,
        type: Oe,
      }),
      $e = iu(xe),
      He = K.root || c.Root || tn,
      Ne = D.root || d.root || {},
      ze = K.input || c.Input || on;
    return (
      (ie = p({}, ie, (n = D.input) != null ? n : d.input)),
      u.jsxs(f.Fragment, {
        children: [
          !v && lu,
          u.jsxs(
            He,
            p(
              {},
              Ne,
              !Cn(He) && { ownerState: p({}, xe, Ne.ownerState) },
              { ref: o, onClick: Pe },
              ge,
              {
                className: ee(
                  $e.root,
                  Ne.className,
                  i,
                  V && "MuiInputBase-readOnly"
                ),
                children: [
                  ye,
                  u.jsx(Vn.Provider, {
                    value: null,
                    children: u.jsx(
                      ze,
                      p(
                        {
                          ownerState: xe,
                          "aria-invalid": ae.error,
                          "aria-describedby": s,
                          autoComplete: a,
                          autoFocus: l,
                          defaultValue: m,
                          disabled: ae.disabled,
                          id: x,
                          onAnimationStart: Se,
                          name: k,
                          placeholder: L,
                          readOnly: V,
                          required: ae.required,
                          rows: _,
                          value: Y,
                          onKeyDown: T,
                          onKeyUp: M,
                          type: Oe,
                        },
                        ie,
                        !Cn(ze) && {
                          as: he,
                          ownerState: p({}, xe, ie.ownerState),
                        },
                        {
                          ref: J,
                          className: ee(
                            $e.input,
                            ie.className,
                            V && "MuiInputBase-readOnly"
                          ),
                          onBlur: ke,
                          onChange: Z,
                          onFocus: z,
                        }
                      )
                    ),
                  }),
                  y,
                  j ? j(p({}, ae, { startAdornment: ye })) : null,
                ],
              }
            )
          ),
        ],
      })
    );
  }),
  Un = cu;
function uu(e) {
  return we("MuiInput", e);
}
const du = p({}, Qe, Re("MuiInput", ["root", "underline", "input"])),
  It = du;
function pu(e) {
  return we("MuiOutlinedInput", e);
}
const fu = p(
    {},
    Qe,
    Re("MuiOutlinedInput", ["root", "notchedOutline", "input"])
  ),
  vt = fu;
function mu(e) {
  return we("MuiFilledInput", e);
}
const gu = p({}, Qe, Re("MuiFilledInput", ["root", "underline", "input"])),
  et = gu,
  js = Rt(u.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown");
function hu(e) {
  return we("MuiAutocomplete", e);
}
const vu = Re("MuiAutocomplete", [
    "root",
    "expanded",
    "fullWidth",
    "focused",
    "focusVisible",
    "tag",
    "tagSizeSmall",
    "tagSizeMedium",
    "hasPopupIcon",
    "hasClearIcon",
    "inputRoot",
    "input",
    "inputFocused",
    "endAdornment",
    "clearIndicator",
    "popupIndicator",
    "popupIndicatorOpen",
    "popper",
    "popperDisablePortal",
    "paper",
    "listbox",
    "loading",
    "noOptions",
    "option",
    "groupLabel",
    "groupUl",
  ]),
  ce = vu;
var Fr, Lr;
const bu = [
    "autoComplete",
    "autoHighlight",
    "autoSelect",
    "blurOnSelect",
    "ChipProps",
    "className",
    "clearIcon",
    "clearOnBlur",
    "clearOnEscape",
    "clearText",
    "closeText",
    "componentsProps",
    "defaultValue",
    "disableClearable",
    "disableCloseOnSelect",
    "disabled",
    "disabledItemsFocusable",
    "disableListWrap",
    "disablePortal",
    "filterOptions",
    "filterSelectedOptions",
    "forcePopupIcon",
    "freeSolo",
    "fullWidth",
    "getLimitTagsText",
    "getOptionDisabled",
    "getOptionKey",
    "getOptionLabel",
    "isOptionEqualToValue",
    "groupBy",
    "handleHomeEndKeys",
    "id",
    "includeInputInList",
    "inputValue",
    "limitTags",
    "ListboxComponent",
    "ListboxProps",
    "loading",
    "loadingText",
    "multiple",
    "noOptionsText",
    "onChange",
    "onClose",
    "onHighlightChange",
    "onInputChange",
    "onOpen",
    "open",
    "openOnFocus",
    "openText",
    "options",
    "PaperComponent",
    "PopperComponent",
    "popupIcon",
    "readOnly",
    "renderGroup",
    "renderInput",
    "renderOption",
    "renderTags",
    "selectOnFocus",
    "size",
    "slotProps",
    "value",
  ],
  yu = ["ref"],
  xu = ["key"],
  Cu = ["key"],
  wu = Fn(),
  Pu = (e) => {
    const {
        classes: t,
        disablePortal: o,
        expanded: n,
        focused: r,
        fullWidth: s,
        hasClearIcon: a,
        hasPopupIcon: l,
        inputFocused: i,
        popupOpen: c,
        size: d,
      } = e,
      m = {
        root: [
          "root",
          n && "expanded",
          r && "focused",
          s && "fullWidth",
          a && "hasClearIcon",
          l && "hasPopupIcon",
        ],
        inputRoot: ["inputRoot"],
        input: ["input", i && "inputFocused"],
        tag: ["tag", `tagSize${U(d)}`],
        endAdornment: ["endAdornment"],
        clearIndicator: ["clearIndicator"],
        popupIndicator: ["popupIndicator", c && "popupIndicatorOpen"],
        popper: ["popper", o && "popperDisablePortal"],
        paper: ["paper"],
        listbox: ["listbox"],
        loading: ["loading"],
        noOptions: ["noOptions"],
        option: ["option"],
        groupLabel: ["groupLabel"],
        groupUl: ["groupUl"],
      };
    return be(m, hu, t);
  },
  Su = B("div", {
    name: "MuiAutocomplete",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e,
        {
          fullWidth: n,
          hasClearIcon: r,
          hasPopupIcon: s,
          inputFocused: a,
          size: l,
        } = o;
      return [
        { [`& .${ce.tag}`]: t.tag },
        { [`& .${ce.tag}`]: t[`tagSize${U(l)}`] },
        { [`& .${ce.inputRoot}`]: t.inputRoot },
        { [`& .${ce.input}`]: t.input },
        { [`& .${ce.input}`]: a && t.inputFocused },
        t.root,
        n && t.fullWidth,
        s && t.hasPopupIcon,
        r && t.hasClearIcon,
      ];
    },
  })({
    [`&.${ce.focused} .${ce.clearIndicator}`]: { visibility: "visible" },
    "@media (pointer: fine)": {
      [`&:hover .${ce.clearIndicator}`]: { visibility: "visible" },
    },
    [`& .${ce.tag}`]: { margin: 3, maxWidth: "calc(100% - 6px)" },
    [`& .${ce.inputRoot}`]: {
      [`.${ce.hasPopupIcon}&, .${ce.hasClearIcon}&`]: { paddingRight: 26 + 4 },
      [`.${ce.hasPopupIcon}.${ce.hasClearIcon}&`]: { paddingRight: 52 + 4 },
      [`& .${ce.input}`]: { width: 0, minWidth: 30 },
    },
    [`& .${It.root}`]: {
      paddingBottom: 1,
      "& .MuiInput-input": { padding: "4px 4px 4px 0px" },
    },
    [`& .${It.root}.${Qe.sizeSmall}`]: {
      [`& .${It.input}`]: { padding: "2px 4px 3px 0" },
    },
    [`& .${vt.root}`]: {
      padding: 9,
      [`.${ce.hasPopupIcon}&, .${ce.hasClearIcon}&`]: {
        paddingRight: 26 + 4 + 9,
      },
      [`.${ce.hasPopupIcon}.${ce.hasClearIcon}&`]: { paddingRight: 52 + 4 + 9 },
      [`& .${ce.input}`]: { padding: "7.5px 4px 7.5px 5px" },
      [`& .${ce.endAdornment}`]: { right: 9 },
    },
    [`& .${vt.root}.${Qe.sizeSmall}`]: {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 6,
      [`& .${ce.input}`]: { padding: "2.5px 4px 2.5px 8px" },
    },
    [`& .${et.root}`]: {
      paddingTop: 19,
      paddingLeft: 8,
      [`.${ce.hasPopupIcon}&, .${ce.hasClearIcon}&`]: {
        paddingRight: 26 + 4 + 9,
      },
      [`.${ce.hasPopupIcon}.${ce.hasClearIcon}&`]: { paddingRight: 52 + 4 + 9 },
      [`& .${et.input}`]: { padding: "7px 4px" },
      [`& .${ce.endAdornment}`]: { right: 9 },
    },
    [`& .${et.root}.${Qe.sizeSmall}`]: {
      paddingBottom: 1,
      [`& .${et.input}`]: { padding: "2.5px 4px" },
    },
    [`& .${Qe.hiddenLabel}`]: { paddingTop: 8 },
    [`& .${et.root}.${Qe.hiddenLabel}`]: {
      paddingTop: 0,
      paddingBottom: 0,
      [`& .${ce.input}`]: { paddingTop: 16, paddingBottom: 17 },
    },
    [`& .${et.root}.${Qe.hiddenLabel}.${Qe.sizeSmall}`]: {
      [`& .${ce.input}`]: { paddingTop: 8, paddingBottom: 9 },
    },
    [`& .${ce.input}`]: { flexGrow: 1, textOverflow: "ellipsis", opacity: 0 },
    variants: [
      { props: { fullWidth: !0 }, style: { width: "100%" } },
      {
        props: { size: "small" },
        style: {
          [`& .${ce.tag}`]: { margin: 2, maxWidth: "calc(100% - 4px)" },
        },
      },
      {
        props: { inputFocused: !0 },
        style: { [`& .${ce.input}`]: { opacity: 1 } },
      },
      {
        props: { multiple: !0 },
        style: { [`& .${ce.inputRoot}`]: { flexWrap: "wrap" } },
      },
    ],
  }),
  $u = B("div", {
    name: "MuiAutocomplete",
    slot: "EndAdornment",
    overridesResolver: (e, t) => t.endAdornment,
  })({
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translate(0, -50%)",
  }),
  Ru = B(tt, {
    name: "MuiAutocomplete",
    slot: "ClearIndicator",
    overridesResolver: (e, t) => t.clearIndicator,
  })({ marginRight: -2, padding: 4, visibility: "hidden" }),
  ku = B(tt, {
    name: "MuiAutocomplete",
    slot: "PopupIndicator",
    overridesResolver: ({ ownerState: e }, t) =>
      p({}, t.popupIndicator, e.popupOpen && t.popupIndicatorOpen),
  })({
    padding: 2,
    marginRight: -2,
    variants: [
      { props: { popupOpen: !0 }, style: { transform: "rotate(180deg)" } },
    ],
  }),
  Ou = B(Jo, {
    name: "MuiAutocomplete",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        { [`& .${ce.option}`]: t.option },
        t.popper,
        o.disablePortal && t.popperDisablePortal,
      ];
    },
  })(({ theme: e }) => ({
    zIndex: (e.vars || e).zIndex.modal,
    variants: [
      { props: { disablePortal: !0 }, style: { position: "absolute" } },
    ],
  })),
  Iu = B(eo, {
    name: "MuiAutocomplete",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })(({ theme: e }) => p({}, e.typography.body1, { overflow: "auto" })),
  Tu = B("div", {
    name: "MuiAutocomplete",
    slot: "Loading",
    overridesResolver: (e, t) => t.loading,
  })(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px",
  })),
  Eu = B("div", {
    name: "MuiAutocomplete",
    slot: "NoOptions",
    overridesResolver: (e, t) => t.noOptions,
  })(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px",
  })),
  Mu = B("div", {
    name: "MuiAutocomplete",
    slot: "Listbox",
    overridesResolver: (e, t) => t.listbox,
  })(({ theme: e }) => ({
    listStyle: "none",
    margin: 0,
    padding: "8px 0",
    maxHeight: "40vh",
    overflow: "auto",
    position: "relative",
    [`& .${ce.option}`]: {
      minHeight: 48,
      display: "flex",
      overflow: "hidden",
      justifyContent: "flex-start",
      alignItems: "center",
      cursor: "pointer",
      paddingTop: 6,
      boxSizing: "border-box",
      outline: "0",
      WebkitTapHighlightColor: "transparent",
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16,
      [e.breakpoints.up("sm")]: { minHeight: "auto" },
      [`&.${ce.focused}`]: {
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      '&[aria-disabled="true"]': {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none",
      },
      [`&.${ce.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus,
      },
      '&[aria-selected="true"]': {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
          : _e(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${ce.focused}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : _e(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: (e.vars || e).palette.action.selected,
          },
        },
        [`&.${ce.focusVisible}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
            : _e(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.focusOpacity
              ),
        },
      },
    },
  })),
  Au = B(Uc, {
    name: "MuiAutocomplete",
    slot: "GroupLabel",
    overridesResolver: (e, t) => t.groupLabel,
  })(({ theme: e }) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    top: -8,
  })),
  ju = B("ul", {
    name: "MuiAutocomplete",
    slot: "GroupUl",
    overridesResolver: (e, t) => t.groupUl,
  })({ padding: 0, [`& .${ce.option}`]: { paddingLeft: 24 } }),
  Fu = f.forwardRef(function (t, o) {
    var n, r, s, a;
    const l = wu({ props: t, name: "MuiAutocomplete" }),
      {
        autoComplete: i = !1,
        autoHighlight: c = !1,
        autoSelect: d = !1,
        blurOnSelect: m = !1,
        ChipProps: b,
        className: v,
        clearIcon: y = Fr || (Fr = u.jsx(hs, { fontSize: "small" })),
        clearOnBlur: $ = !l.freeSolo,
        clearOnEscape: x = !1,
        clearText: w = "Clear",
        closeText: S = "Close",
        componentsProps: g = {},
        defaultValue: h = l.multiple ? [] : null,
        disableClearable: C = !1,
        disableCloseOnSelect: P = !1,
        disabled: k = !1,
        disabledItemsFocusable: I = !1,
        disableListWrap: E = !1,
        disablePortal: A = !1,
        filterSelectedOptions: F = !1,
        forcePopupIcon: T = "auto",
        freeSolo: M = !1,
        fullWidth: L = !1,
        getLimitTagsText: V = (N) => `+${N}`,
        getOptionLabel: j,
        groupBy: _,
        handleHomeEndKeys: D = !l.freeSolo,
        includeInputInList: K = !1,
        limitTags: ye = -1,
        ListboxComponent: Oe = "ul",
        ListboxProps: pe,
        loading: ge = !1,
        loadingText: Y = "Loading…",
        multiple: te = !1,
        noOptionsText: fe = "No options",
        openOnFocus: Ie = !1,
        openText: J = "Open",
        PaperComponent: ue = eo,
        PopperComponent: Ee = Jo,
        popupIcon: ne = Lr || (Lr = u.jsx(js, {})),
        readOnly: ae = !1,
        renderGroup: Q,
        renderInput: re,
        renderOption: W,
        renderTags: z,
        selectOnFocus: ke = !l.freeSolo,
        size: Z = "medium",
        slotProps: Pe = {},
      } = l,
      he = X(l, bu),
      {
        getRootProps: ie,
        getInputProps: Se,
        getInputLabelProps: xe,
        getPopupIndicatorProps: $e,
        getClearProps: He,
        getTagProps: Ne,
        getListboxProps: ze,
        getOptionProps: se,
        value: me,
        dirty: Me,
        expanded: Je,
        id: Ve,
        popupOpen: G,
        focused: de,
        focusedTag: ve,
        anchorEl: De,
        setAnchorEl: nt,
        inputValue: Kt,
        groupedOptions: Ke,
      } = Mc(p({}, l, { componentName: "Autocomplete" })),
      pt = !C && !k && Me && !ae,
      rt = (!M || T === !0) && T !== !1,
      { onMouseDown: xt } = Se(),
      { ref: mt } = pe ?? {},
      Bt = ze(),
      { ref: zt } = Bt,
      Gt = X(Bt, yu),
      no = We(zt, mt),
      gt =
        j ||
        ((N) => {
          var oe;
          return (oe = N.label) != null ? oe : N;
        }),
      Be = p({}, l, {
        disablePortal: A,
        expanded: Je,
        focused: de,
        fullWidth: L,
        getOptionLabel: gt,
        hasClearIcon: pt,
        hasPopupIcon: rt,
        inputFocused: ve === -1,
        popupOpen: G,
        size: Z,
      }),
      Fe = Pu(Be);
    let Ue;
    if (te && me.length > 0) {
      const N = (oe) => p({ className: Fe.tag, disabled: k }, Ne(oe));
      z
        ? (Ue = z(me, N, Be))
        : (Ue = me.map((oe, q) => {
            const le = N({ index: q }),
              { key: st } = le,
              wo = X(le, xu);
            return u.jsx(eu, p({ label: gt(oe), size: Z }, wo, b), st);
          }));
    }
    if (ye > -1 && Array.isArray(Ue)) {
      const N = Ue.length - ye;
      !de &&
        N > 0 &&
        ((Ue = Ue.splice(0, ye)),
        Ue.push(
          u.jsx("span", { className: Fe.tag, children: V(N) }, Ue.length)
        ));
    }
    const Ct =
        Q ||
        ((N) =>
          u.jsxs(
            "li",
            {
              children: [
                u.jsx(Au, {
                  className: Fe.groupLabel,
                  ownerState: Be,
                  component: "div",
                  children: N.group,
                }),
                u.jsx(ju, {
                  className: Fe.groupUl,
                  ownerState: Be,
                  children: N.children,
                }),
              ],
            },
            N.key
          )),
      wt =
        W ||
        ((N, oe) => {
          const { key: q } = N,
            le = X(N, Cu);
          return u.jsx("li", p({}, le, { children: gt(oe) }), q);
        }),
      kt = (N, oe) => {
        const q = se({ option: N, index: oe });
        return wt(
          p({}, q, { className: Fe.option }),
          N,
          { selected: q["aria-selected"], index: oe, inputValue: Kt },
          Be
        );
      },
      Ot = (n = Pe.clearIndicator) != null ? n : g.clearIndicator,
      ht = (r = Pe.paper) != null ? r : g.paper,
      Pt = (s = Pe.popper) != null ? s : g.popper,
      O = (a = Pe.popupIndicator) != null ? a : g.popupIndicator,
      R = (N) =>
        u.jsx(
          Ou,
          p(
            {
              as: Ee,
              disablePortal: A,
              style: { width: De ? De.clientWidth : null },
              ownerState: Be,
              role: "presentation",
              anchorEl: De,
              open: G,
            },
            Pt,
            {
              className: ee(Fe.popper, Pt == null ? void 0 : Pt.className),
              children: u.jsx(
                Iu,
                p({ ownerState: Be, as: ue }, ht, {
                  className: ee(Fe.paper, ht == null ? void 0 : ht.className),
                  children: N,
                })
              ),
            }
          )
        );
    let H = null;
    return (
      Ke.length > 0
        ? (H = R(
            u.jsx(
              Mu,
              p({ as: Oe, className: Fe.listbox, ownerState: Be }, Gt, pe, {
                ref: no,
                children: Ke.map((N, oe) =>
                  _
                    ? Ct({
                        key: N.key,
                        group: N.group,
                        children: N.options.map((q, le) => kt(q, N.index + le)),
                      })
                    : kt(N, oe)
                ),
              })
            )
          ))
        : ge && Ke.length === 0
        ? (H = R(
            u.jsx(Tu, { className: Fe.loading, ownerState: Be, children: Y })
          ))
        : Ke.length === 0 &&
          !M &&
          !ge &&
          (H = R(
            u.jsx(Eu, {
              className: Fe.noOptions,
              ownerState: Be,
              role: "presentation",
              onMouseDown: (N) => {
                N.preventDefault();
              },
              children: fe,
            })
          )),
      u.jsxs(f.Fragment, {
        children: [
          u.jsx(
            Su,
            p({ ref: o, className: ee(Fe.root, v), ownerState: Be }, ie(he), {
              children: re({
                id: Ve,
                disabled: k,
                fullWidth: !0,
                size: Z === "small" ? "small" : void 0,
                InputLabelProps: xe(),
                InputProps: p(
                  {
                    ref: nt,
                    className: Fe.inputRoot,
                    startAdornment: Ue,
                    onClick: (N) => {
                      N.target === N.currentTarget && xt(N);
                    },
                  },
                  (pt || rt) && {
                    endAdornment: u.jsxs($u, {
                      className: Fe.endAdornment,
                      ownerState: Be,
                      children: [
                        pt
                          ? u.jsx(
                              Ru,
                              p(
                                {},
                                He(),
                                { "aria-label": w, title: w, ownerState: Be },
                                Ot,
                                {
                                  className: ee(
                                    Fe.clearIndicator,
                                    Ot == null ? void 0 : Ot.className
                                  ),
                                  children: y,
                                }
                              )
                            )
                          : null,
                        rt
                          ? u.jsx(
                              ku,
                              p(
                                {},
                                $e(),
                                {
                                  disabled: k,
                                  "aria-label": G ? S : J,
                                  title: G ? S : J,
                                  ownerState: Be,
                                },
                                O,
                                {
                                  className: ee(
                                    Fe.popupIndicator,
                                    O == null ? void 0 : O.className
                                  ),
                                  children: ne,
                                }
                              )
                            )
                          : null,
                      ],
                    }),
                  }
                ),
                inputProps: p(
                  { className: Fe.input, disabled: k, readOnly: ae },
                  Se()
                ),
              }),
            })
          ),
          De ? H : null,
        ],
      })
    );
  }),
  Fs = Fu,
  Lu = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  Nu = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  Du = f.forwardRef(function (t, o) {
    const n = En(),
      r = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen,
      },
      {
        addEndListener: s,
        appear: a = !0,
        children: l,
        easing: i,
        in: c,
        onEnter: d,
        onEntered: m,
        onEntering: b,
        onExit: v,
        onExited: y,
        onExiting: $,
        style: x,
        timeout: w = r,
        TransitionComponent: S = Ta,
      } = t,
      g = X(t, Lu),
      h = f.useRef(null),
      C = We(h, l.ref, o),
      P = (L) => (V) => {
        if (L) {
          const j = h.current;
          V === void 0 ? L(j) : L(j, V);
        }
      },
      k = P(b),
      I = P((L, V) => {
        Ea(L);
        const j = pr({ style: x, timeout: w, easing: i }, { mode: "enter" });
        (L.style.webkitTransition = n.transitions.create("opacity", j)),
          (L.style.transition = n.transitions.create("opacity", j)),
          d && d(L, V);
      }),
      E = P(m),
      A = P($),
      F = P((L) => {
        const V = pr({ style: x, timeout: w, easing: i }, { mode: "exit" });
        (L.style.webkitTransition = n.transitions.create("opacity", V)),
          (L.style.transition = n.transitions.create("opacity", V)),
          v && v(L);
      }),
      T = P(y),
      M = (L) => {
        s && s(h.current, L);
      };
    return u.jsx(
      S,
      p(
        {
          appear: a,
          in: c,
          nodeRef: h,
          onEnter: I,
          onEntered: E,
          onEntering: k,
          onExit: F,
          onExited: T,
          onExiting: A,
          addEndListener: M,
          timeout: w,
        },
        g,
        {
          children: (L, V) =>
            f.cloneElement(
              l,
              p(
                {
                  style: p(
                    {
                      opacity: 0,
                      visibility: L === "exited" && !c ? "hidden" : void 0,
                    },
                    Nu[L],
                    x,
                    l.props.style
                  ),
                  ref: C,
                },
                V
              )
            ),
        }
      )
    );
  }),
  Ls = Du;
function Bu(e) {
  return we("MuiBackdrop", e);
}
Re("MuiBackdrop", ["root", "invisible"]);
const zu = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  _u = (e) => {
    const { classes: t, invisible: o } = e;
    return be({ root: ["root", o && "invisible"] }, Bu, t);
  },
  Wu = B("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [t.root, o.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    p(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  Hu = f.forwardRef(function (t, o) {
    var n, r, s;
    const a = Te({ props: t, name: "MuiBackdrop" }),
      {
        children: l,
        className: i,
        component: c = "div",
        components: d = {},
        componentsProps: m = {},
        invisible: b = !1,
        open: v,
        slotProps: y = {},
        slots: $ = {},
        TransitionComponent: x = Ls,
        transitionDuration: w,
      } = a,
      S = X(a, zu),
      g = p({}, a, { component: c, invisible: b }),
      h = _u(g),
      C = (n = y.root) != null ? n : m.root;
    return u.jsx(
      x,
      p({ in: v, timeout: w }, S, {
        children: u.jsx(
          Wu,
          p({ "aria-hidden": !0 }, C, {
            as: (r = (s = $.root) != null ? s : d.Root) != null ? r : c,
            className: ee(h.root, i, C == null ? void 0 : C.className),
            ownerState: p({}, g, C == null ? void 0 : C.ownerState),
            classes: h,
            ref: o,
            children: l,
          })
        ),
      })
    );
  }),
  Ns = Hu;
function Vu(e) {
  return we("PrivateSwitchBase", e);
}
Re("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const Uu = [
    "autoFocus",
    "checked",
    "checkedIcon",
    "className",
    "defaultChecked",
    "disabled",
    "disableFocusRipple",
    "edge",
    "icon",
    "id",
    "inputProps",
    "inputRef",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "readOnly",
    "required",
    "tabIndex",
    "type",
    "value",
  ],
  qu = (e) => {
    const { classes: t, checked: o, disabled: n, edge: r } = e,
      s = {
        root: ["root", o && "checked", n && "disabled", r && `edge${U(r)}`],
        input: ["input"],
      };
    return be(s, Vu, t);
  },
  Ku = B(xn)(({ ownerState: e }) =>
    p(
      { padding: 9, borderRadius: "50%" },
      e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
      e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 }
    )
  ),
  Gu = B("input", { shouldForwardProp: ft })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  Xu = f.forwardRef(function (t, o) {
    const {
        autoFocus: n,
        checked: r,
        checkedIcon: s,
        className: a,
        defaultChecked: l,
        disabled: i,
        disableFocusRipple: c = !1,
        edge: d = !1,
        icon: m,
        id: b,
        inputProps: v,
        inputRef: y,
        name: $,
        onBlur: x,
        onChange: w,
        onFocus: S,
        readOnly: g,
        required: h = !1,
        tabIndex: C,
        type: P,
        value: k,
      } = t,
      I = X(t, Uu),
      [E, A] = Mt({
        controlled: r,
        default: !!l,
        name: "SwitchBase",
        state: "checked",
      }),
      F = Dt(),
      T = (K) => {
        S && S(K), F && F.onFocus && F.onFocus(K);
      },
      M = (K) => {
        x && x(K), F && F.onBlur && F.onBlur(K);
      },
      L = (K) => {
        if (K.nativeEvent.defaultPrevented) return;
        const ye = K.target.checked;
        A(ye), w && w(K, ye);
      };
    let V = i;
    F && typeof V > "u" && (V = F.disabled);
    const j = P === "checkbox" || P === "radio",
      _ = p({}, t, { checked: E, disabled: V, disableFocusRipple: c, edge: d }),
      D = qu(_);
    return u.jsxs(
      Ku,
      p(
        {
          component: "span",
          className: ee(D.root, a),
          centerRipple: !0,
          focusRipple: !c,
          disabled: V,
          tabIndex: null,
          role: void 0,
          onFocus: T,
          onBlur: M,
          ownerState: _,
          ref: o,
        },
        I,
        {
          children: [
            u.jsx(
              Gu,
              p(
                {
                  autoFocus: n,
                  checked: r,
                  defaultChecked: l,
                  className: D.input,
                  disabled: V,
                  id: j ? b : void 0,
                  name: $,
                  onChange: L,
                  readOnly: g,
                  ref: y,
                  required: h,
                  ownerState: _,
                  tabIndex: C,
                  type: P,
                },
                P === "checkbox" && k === void 0 ? {} : { value: k },
                v
              )
            ),
            E ? s : m,
          ],
        }
      )
    );
  }),
  Yu = Xu;
function Zu(e) {
  return we("MuiModal", e);
}
Re("MuiModal", ["root", "hidden", "backdrop"]);
const Ju = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  Qu = (e) => {
    const { open: t, exited: o, classes: n } = e;
    return be(
      { root: ["root", !t && o && "hidden"], backdrop: ["backdrop"] },
      Zu,
      n
    );
  },
  ed = B("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [t.root, !o.open && o.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    p(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  td = B(Ns, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  od = f.forwardRef(function (t, o) {
    var n, r, s, a, l, i;
    const c = Te({ name: "MuiModal", props: t }),
      {
        BackdropComponent: d = td,
        BackdropProps: m,
        className: b,
        closeAfterTransition: v = !1,
        children: y,
        container: $,
        component: x,
        components: w = {},
        componentsProps: S = {},
        disableAutoFocus: g = !1,
        disableEnforceFocus: h = !1,
        disableEscapeKeyDown: C = !1,
        disablePortal: P = !1,
        disableRestoreFocus: k = !1,
        disableScrollLock: I = !1,
        hideBackdrop: E = !1,
        keepMounted: A = !1,
        onBackdropClick: F,
        open: T,
        slotProps: M,
        slots: L,
      } = c,
      V = X(c, Ju),
      j = p({}, c, {
        closeAfterTransition: v,
        disableAutoFocus: g,
        disableEnforceFocus: h,
        disableEscapeKeyDown: C,
        disablePortal: P,
        disableRestoreFocus: k,
        disableScrollLock: I,
        hideBackdrop: E,
        keepMounted: A,
      }),
      {
        getRootProps: _,
        getBackdropProps: D,
        getTransitionProps: K,
        portalRef: ye,
        isTopModal: Oe,
        exited: pe,
        hasTransition: ge,
      } = cl(p({}, j, { rootRef: o })),
      Y = p({}, j, { exited: pe }),
      te = Qu(Y),
      fe = {};
    if ((y.props.tabIndex === void 0 && (fe.tabIndex = "-1"), ge)) {
      const { onEnter: Q, onExited: re } = K();
      (fe.onEnter = Q), (fe.onExited = re);
    }
    const Ie =
        (n = (r = L == null ? void 0 : L.root) != null ? r : w.Root) != null
          ? n
          : ed,
      J =
        (s = (a = L == null ? void 0 : L.backdrop) != null ? a : w.Backdrop) !=
        null
          ? s
          : d,
      ue = (l = M == null ? void 0 : M.root) != null ? l : S.root,
      Ee = (i = M == null ? void 0 : M.backdrop) != null ? i : S.backdrop,
      ne = Ht({
        elementType: Ie,
        externalSlotProps: ue,
        externalForwardedProps: V,
        getSlotProps: _,
        additionalProps: { ref: o, as: x },
        ownerState: Y,
        className: ee(
          b,
          ue == null ? void 0 : ue.className,
          te == null ? void 0 : te.root,
          !Y.open && Y.exited && (te == null ? void 0 : te.hidden)
        ),
      }),
      ae = Ht({
        elementType: J,
        externalSlotProps: Ee,
        additionalProps: m,
        getSlotProps: (Q) =>
          D(
            p({}, Q, {
              onClick: (re) => {
                F && F(re), Q != null && Q.onClick && Q.onClick(re);
              },
            })
          ),
        className: ee(
          Ee == null ? void 0 : Ee.className,
          m == null ? void 0 : m.className,
          te == null ? void 0 : te.backdrop
        ),
        ownerState: Y,
      });
    return !A && !T && (!ge || pe)
      ? null
      : u.jsx(xs, {
          ref: ye,
          container: $,
          disablePortal: P,
          children: u.jsxs(
            Ie,
            p({}, ne, {
              children: [
                !E && d ? u.jsx(J, p({}, ae)) : null,
                u.jsx(Qi, {
                  disableEnforceFocus: h,
                  disableAutoFocus: g,
                  disableRestoreFocus: k,
                  isEnabled: Oe,
                  open: T,
                  children: f.cloneElement(y, fe),
                }),
              ],
            })
          ),
        });
  }),
  Ds = od;
function nd(e) {
  return we("MuiDialog", e);
}
const rd = Re("MuiDialog", [
    "root",
    "scrollPaper",
    "scrollBody",
    "container",
    "paper",
    "paperScrollPaper",
    "paperScrollBody",
    "paperWidthFalse",
    "paperWidthXs",
    "paperWidthSm",
    "paperWidthMd",
    "paperWidthLg",
    "paperWidthXl",
    "paperFullWidth",
    "paperFullScreen",
  ]),
  cn = rd,
  sd = f.createContext({}),
  Bs = sd,
  ad = [
    "aria-describedby",
    "aria-labelledby",
    "BackdropComponent",
    "BackdropProps",
    "children",
    "className",
    "disableEscapeKeyDown",
    "fullScreen",
    "fullWidth",
    "maxWidth",
    "onBackdropClick",
    "onClick",
    "onClose",
    "open",
    "PaperComponent",
    "PaperProps",
    "scroll",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ],
  id = B(Ns, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  ld = (e) => {
    const {
        classes: t,
        scroll: o,
        maxWidth: n,
        fullWidth: r,
        fullScreen: s,
      } = e,
      a = {
        root: ["root"],
        container: ["container", `scroll${U(o)}`],
        paper: [
          "paper",
          `paperScroll${U(o)}`,
          `paperWidth${U(String(n))}`,
          r && "paperFullWidth",
          s && "paperFullScreen",
        ],
      };
    return be(a, nd, t);
  },
  cd = B(Ds, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ "@media print": { position: "absolute !important" } }),
  ud = B("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [t.container, t[`scroll${U(o.scroll)}`]];
    },
  })(({ ownerState: e }) =>
    p(
      { height: "100%", "@media print": { height: "auto" }, outline: 0 },
      e.scroll === "paper" && {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      e.scroll === "body" && {
        overflowY: "auto",
        overflowX: "hidden",
        textAlign: "center",
        "&::after": {
          content: '""',
          display: "inline-block",
          verticalAlign: "middle",
          height: "100%",
          width: "0",
        },
      }
    )
  ),
  dd = B(eo, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.paper,
        t[`scrollPaper${U(o.scroll)}`],
        t[`paperWidth${U(String(o.maxWidth))}`],
        o.fullWidth && t.paperFullWidth,
        o.fullScreen && t.paperFullScreen,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    p(
      {
        margin: 32,
        position: "relative",
        overflowY: "auto",
        "@media print": { overflowY: "visible", boxShadow: "none" },
      },
      t.scroll === "paper" && {
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100% - 64px)",
      },
      t.scroll === "body" && {
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "left",
      },
      !t.maxWidth && { maxWidth: "calc(100% - 64px)" },
      t.maxWidth === "xs" && {
        maxWidth:
          e.breakpoints.unit === "px"
            ? Math.max(e.breakpoints.values.xs, 444)
            : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
        [`&.${cn.paperScrollBody}`]: {
          [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]:
            { maxWidth: "calc(100% - 64px)" },
        },
      },
      t.maxWidth &&
        t.maxWidth !== "xs" && {
          maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
          [`&.${cn.paperScrollBody}`]: {
            [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
              maxWidth: "calc(100% - 64px)",
            },
          },
        },
      t.fullWidth && { width: "calc(100% - 64px)" },
      t.fullScreen && {
        margin: 0,
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "none",
        borderRadius: 0,
        [`&.${cn.paperScrollBody}`]: { margin: 0, maxWidth: "100%" },
      }
    )
  ),
  pd = f.forwardRef(function (t, o) {
    const n = Te({ props: t, name: "MuiDialog" }),
      r = En(),
      s = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        "aria-describedby": a,
        "aria-labelledby": l,
        BackdropComponent: i,
        BackdropProps: c,
        children: d,
        className: m,
        disableEscapeKeyDown: b = !1,
        fullScreen: v = !1,
        fullWidth: y = !1,
        maxWidth: $ = "sm",
        onBackdropClick: x,
        onClick: w,
        onClose: S,
        open: g,
        PaperComponent: h = eo,
        PaperProps: C = {},
        scroll: P = "paper",
        TransitionComponent: k = Ls,
        transitionDuration: I = s,
        TransitionProps: E,
      } = n,
      A = X(n, ad),
      F = p({}, n, {
        disableEscapeKeyDown: b,
        fullScreen: v,
        fullWidth: y,
        maxWidth: $,
        scroll: P,
      }),
      T = ld(F),
      M = f.useRef(),
      L = (D) => {
        M.current = D.target === D.currentTarget;
      },
      V = (D) => {
        w && w(D),
          M.current &&
            ((M.current = null), x && x(D), S && S(D, "backdropClick"));
      },
      j = Ut(l),
      _ = f.useMemo(() => ({ titleId: j }), [j]);
    return u.jsx(
      cd,
      p(
        {
          className: ee(T.root, m),
          closeAfterTransition: !0,
          components: { Backdrop: id },
          componentsProps: { backdrop: p({ transitionDuration: I, as: i }, c) },
          disableEscapeKeyDown: b,
          onClose: S,
          open: g,
          ref: o,
          onClick: V,
          ownerState: F,
        },
        A,
        {
          children: u.jsx(
            k,
            p({ appear: !0, in: g, timeout: I, role: "presentation" }, E, {
              children: u.jsx(ud, {
                className: ee(T.container),
                onMouseDown: L,
                ownerState: F,
                children: u.jsx(
                  dd,
                  p(
                    {
                      as: h,
                      elevation: 24,
                      role: "dialog",
                      "aria-describedby": a,
                      "aria-labelledby": j,
                    },
                    C,
                    {
                      className: ee(T.paper, C.className),
                      ownerState: F,
                      children: u.jsx(Bs.Provider, { value: _, children: d }),
                    }
                  )
                ),
              }),
            })
          ),
        }
      )
    );
  }),
  qn = pd;
function fd(e) {
  return we("MuiDialogActions", e);
}
Re("MuiDialogActions", ["root", "spacing"]);
const md = ["className", "disableSpacing"],
  gd = (e) => {
    const { classes: t, disableSpacing: o } = e;
    return be({ root: ["root", !o && "spacing"] }, fd, t);
  },
  hd = B("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [t.root, !o.disableSpacing && t.spacing];
    },
  })(({ ownerState: e }) =>
    p(
      {
        display: "flex",
        alignItems: "center",
        padding: 8,
        justifyContent: "flex-end",
        flex: "0 0 auto",
      },
      !e.disableSpacing && {
        "& > :not(style) ~ :not(style)": { marginLeft: 8 },
      }
    )
  ),
  vd = f.forwardRef(function (t, o) {
    const n = Te({ props: t, name: "MuiDialogActions" }),
      { className: r, disableSpacing: s = !1 } = n,
      a = X(n, md),
      l = p({}, n, { disableSpacing: s }),
      i = gd(l);
    return u.jsx(hd, p({ className: ee(i.root, r), ownerState: l, ref: o }, a));
  }),
  Kn = vd;
function bd(e) {
  return we("MuiDialogContent", e);
}
Re("MuiDialogContent", ["root", "dividers"]);
function yd(e) {
  return we("MuiDialogTitle", e);
}
const xd = Re("MuiDialogTitle", ["root"]),
  Cd = xd,
  wd = ["className", "dividers"],
  Pd = (e) => {
    const { classes: t, dividers: o } = e;
    return be({ root: ["root", o && "dividers"] }, bd, t);
  },
  Sd = B("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [t.root, o.dividers && t.dividers];
    },
  })(({ theme: e, ownerState: t }) =>
    p(
      {
        flex: "1 1 auto",
        WebkitOverflowScrolling: "touch",
        overflowY: "auto",
        padding: "20px 24px",
      },
      t.dividers
        ? {
            padding: "16px 24px",
            borderTop: `1px solid ${(e.vars || e).palette.divider}`,
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          }
        : { [`.${Cd.root} + &`]: { paddingTop: 0 } }
    )
  ),
  $d = f.forwardRef(function (t, o) {
    const n = Te({ props: t, name: "MuiDialogContent" }),
      { className: r, dividers: s = !1 } = n,
      a = X(n, wd),
      l = p({}, n, { dividers: s }),
      i = Pd(l);
    return u.jsx(Sd, p({ className: ee(i.root, r), ownerState: l, ref: o }, a));
  }),
  Gn = $d;
function Rd(e) {
  return we("MuiDialogContentText", e);
}
Re("MuiDialogContentText", ["root"]);
const kd = ["children", "className"],
  Od = (e) => {
    const { classes: t } = e,
      n = be({ root: ["root"] }, Rd, t);
    return p({}, t, n);
  },
  Id = B(Lt, {
    shouldForwardProp: (e) => ft(e) || e === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  Td = f.forwardRef(function (t, o) {
    const n = Te({ props: t, name: "MuiDialogContentText" }),
      { className: r } = n,
      s = X(n, kd),
      a = Od(s);
    return u.jsx(
      Id,
      p(
        {
          component: "p",
          variant: "body1",
          color: "text.secondary",
          ref: o,
          ownerState: s,
          className: ee(a.root, r),
        },
        n,
        { classes: a }
      )
    );
  }),
  Ed = Td,
  Md = ["className", "id"],
  Ad = (e) => {
    const { classes: t } = e;
    return be({ root: ["root"] }, yd, t);
  },
  jd = B(Lt, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ padding: "16px 24px", flex: "0 0 auto" }),
  Fd = f.forwardRef(function (t, o) {
    const n = Te({ props: t, name: "MuiDialogTitle" }),
      { className: r, id: s } = n,
      a = X(n, Md),
      l = n,
      i = Ad(l),
      { titleId: c = s } = f.useContext(Bs);
    return u.jsx(
      jd,
      p(
        {
          component: "h2",
          className: ee(i.root, r),
          ownerState: l,
          ref: o,
          variant: "h6",
          id: s ?? c,
        },
        a
      )
    );
  }),
  Xn = Fd,
  Ld = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "hiddenLabel",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  Nd = (e) => {
    const { classes: t, disableUnderline: o } = e,
      r = be({ root: ["root", !o && "underline"], input: ["input"] }, mu, t);
    return p({}, t, r);
  },
  Dd = B(tn, {
    shouldForwardProp: (e) => ft(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [...Qo(e, t), !o.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    var o;
    const n = e.palette.mode === "light",
      r = n ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
      s = n ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
      a = n ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
      l = n ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return p(
      {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
          },
        },
        [`&.${et.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
        },
        [`&.${et.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l,
        },
      },
      !t.disableUnderline && {
        "&::after": {
          borderBottom: `2px solid ${
            (o = (e.vars || e).palette[t.color || "primary"]) == null
              ? void 0
              : o.main
          }`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut,
          }),
          pointerEvents: "none",
        },
        [`&.${et.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
        [`&.${et.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main,
          },
        },
        "&::before": {
          borderBottom: `1px solid ${
            e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
              : r
          }`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter,
          }),
          pointerEvents: "none",
        },
        [`&:hover:not(.${et.disabled}, .${et.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
        },
        [`&.${et.disabled}:before`]: { borderBottomStyle: "dotted" },
      },
      t.startAdornment && { paddingLeft: 12 },
      t.endAdornment && { paddingRight: 12 },
      t.multiline &&
        p(
          { padding: "25px 12px 8px" },
          t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
          t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
          t.hiddenLabel &&
            t.size === "small" && { paddingTop: 8, paddingBottom: 9 }
        )
    );
  }),
  Bd = B(on, { name: "MuiFilledInput", slot: "Input", overridesResolver: en })(
    ({ theme: e, ownerState: t }) =>
      p(
        { paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 },
        !e.vars && {
          "&:-webkit-autofill": {
            WebkitBoxShadow:
              e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
        },
        e.vars && {
          "&:-webkit-autofill": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
          [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "#fff",
              caretColor: "#fff",
            },
          },
        },
        t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
        t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
        t.startAdornment && { paddingLeft: 0 },
        t.endAdornment && { paddingRight: 0 },
        t.hiddenLabel &&
          t.size === "small" && { paddingTop: 8, paddingBottom: 9 },
        t.multiline && {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }
      )
  ),
  zs = f.forwardRef(function (t, o) {
    var n, r, s, a;
    const l = Te({ props: t, name: "MuiFilledInput" }),
      {
        components: i = {},
        componentsProps: c,
        fullWidth: d = !1,
        inputComponent: m = "input",
        multiline: b = !1,
        slotProps: v,
        slots: y = {},
        type: $ = "text",
      } = l,
      x = X(l, Ld),
      w = p({}, l, { fullWidth: d, inputComponent: m, multiline: b, type: $ }),
      S = Nd(l),
      g = { root: { ownerState: w }, input: { ownerState: w } },
      h = v ?? c ? zo(g, v ?? c) : g,
      C = (n = (r = y.root) != null ? r : i.Root) != null ? n : Dd,
      P = (s = (a = y.input) != null ? a : i.Input) != null ? s : Bd;
    return u.jsx(
      Un,
      p(
        {
          slots: { root: C, input: P },
          componentsProps: h,
          fullWidth: d,
          inputComponent: m,
          multiline: b,
          ref: o,
          type: $,
        },
        x,
        { classes: S }
      )
    );
  });
zs.muiName = "Input";
const _s = zs;
function zd(e) {
  return we("MuiFormControl", e);
}
Re("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const _d = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "focused",
    "fullWidth",
    "hiddenLabel",
    "margin",
    "required",
    "size",
    "variant",
  ],
  Wd = (e) => {
    const { classes: t, margin: o, fullWidth: n } = e,
      r = { root: ["root", o !== "none" && `margin${U(o)}`, n && "fullWidth"] };
    return be(r, zd, t);
  },
  Hd = B("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      p({}, t.root, t[`margin${U(e.margin)}`], e.fullWidth && t.fullWidth),
  })(({ ownerState: e }) =>
    p(
      {
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
      },
      e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
      e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
      e.fullWidth && { width: "100%" }
    )
  ),
  Vd = f.forwardRef(function (t, o) {
    const n = Te({ props: t, name: "MuiFormControl" }),
      {
        children: r,
        className: s,
        color: a = "primary",
        component: l = "div",
        disabled: i = !1,
        error: c = !1,
        focused: d,
        fullWidth: m = !1,
        hiddenLabel: b = !1,
        margin: v = "none",
        required: y = !1,
        size: $ = "medium",
        variant: x = "outlined",
      } = n,
      w = X(n, _d),
      S = p({}, n, {
        color: a,
        component: l,
        disabled: i,
        error: c,
        fullWidth: m,
        hiddenLabel: b,
        margin: v,
        required: y,
        size: $,
        variant: x,
      }),
      g = Wd(S),
      [h, C] = f.useState(() => {
        let M = !1;
        return (
          r &&
            f.Children.forEach(r, (L) => {
              if (!sn(L, ["Input", "Select"])) return;
              const V = sn(L, ["Select"]) ? L.props.input : L;
              V && nu(V.props) && (M = !0);
            }),
          M
        );
      }),
      [P, k] = f.useState(() => {
        let M = !1;
        return (
          r &&
            f.Children.forEach(r, (L) => {
              sn(L, ["Input", "Select"]) &&
                (Lo(L.props, !0) || Lo(L.props.inputProps, !0)) &&
                (M = !0);
            }),
          M
        );
      }),
      [I, E] = f.useState(!1);
    i && I && E(!1);
    const A = d !== void 0 && !i ? d : I;
    let F;
    const T = f.useMemo(
      () => ({
        adornedStart: h,
        setAdornedStart: C,
        color: a,
        disabled: i,
        error: c,
        filled: P,
        focused: A,
        fullWidth: m,
        hiddenLabel: b,
        size: $,
        onBlur: () => {
          E(!1);
        },
        onEmpty: () => {
          k(!1);
        },
        onFilled: () => {
          k(!0);
        },
        onFocus: () => {
          E(!0);
        },
        registerEffect: F,
        required: y,
        variant: x,
      }),
      [h, a, i, c, P, A, m, b, F, y, $, x]
    );
    return u.jsx(Vn.Provider, {
      value: T,
      children: u.jsx(
        Hd,
        p({ as: l, ownerState: S, className: ee(g.root, s), ref: o }, w, {
          children: r,
        })
      ),
    });
  }),
  Ud = Vd,
  qd = gi({
    createStyledComponent: B("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    }),
    useThemeProps: (e) => Te({ props: e, name: "MuiStack" }),
  }),
  jt = qd;
function Kd(e) {
  return we("MuiFormControlLabel", e);
}
const Gd = Re("MuiFormControlLabel", [
    "root",
    "labelPlacementStart",
    "labelPlacementTop",
    "labelPlacementBottom",
    "disabled",
    "label",
    "error",
    "required",
    "asterisk",
  ]),
  po = Gd,
  Xd = [
    "checked",
    "className",
    "componentsProps",
    "control",
    "disabled",
    "disableTypography",
    "inputRef",
    "label",
    "labelPlacement",
    "name",
    "onChange",
    "required",
    "slotProps",
    "value",
  ],
  Yd = (e) => {
    const {
        classes: t,
        disabled: o,
        labelPlacement: n,
        error: r,
        required: s,
      } = e,
      a = {
        root: [
          "root",
          o && "disabled",
          `labelPlacement${U(n)}`,
          r && "error",
          s && "required",
        ],
        label: ["label", o && "disabled"],
        asterisk: ["asterisk", r && "error"],
      };
    return be(a, Kd, t);
  },
  Zd = B("label", {
    name: "MuiFormControlLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        { [`& .${po.label}`]: t.label },
        t.root,
        t[`labelPlacement${U(o.labelPlacement)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    p(
      {
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        verticalAlign: "middle",
        WebkitTapHighlightColor: "transparent",
        marginLeft: -11,
        marginRight: 16,
        [`&.${po.disabled}`]: { cursor: "default" },
      },
      t.labelPlacement === "start" && {
        flexDirection: "row-reverse",
        marginLeft: 16,
        marginRight: -11,
      },
      t.labelPlacement === "top" && {
        flexDirection: "column-reverse",
        marginLeft: 16,
      },
      t.labelPlacement === "bottom" && {
        flexDirection: "column",
        marginLeft: 16,
      },
      {
        [`& .${po.label}`]: {
          [`&.${po.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        },
      }
    )
  ),
  Jd = B("span", {
    name: "MuiFormControlLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${po.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  Qd = f.forwardRef(function (t, o) {
    var n, r;
    const s = Te({ props: t, name: "MuiFormControlLabel" }),
      {
        className: a,
        componentsProps: l = {},
        control: i,
        disabled: c,
        disableTypography: d,
        label: m,
        labelPlacement: b = "end",
        required: v,
        slotProps: y = {},
      } = s,
      $ = X(s, Xd),
      x = Dt(),
      w =
        (n = c ?? i.props.disabled) != null
          ? n
          : x == null
          ? void 0
          : x.disabled,
      S = v ?? i.props.required,
      g = { disabled: w, required: S };
    ["checked", "name", "onChange", "value", "inputRef"].forEach((E) => {
      typeof i.props[E] > "u" && typeof s[E] < "u" && (g[E] = s[E]);
    });
    const h = qt({ props: s, muiFormControl: x, states: ["error"] }),
      C = p({}, s, {
        disabled: w,
        labelPlacement: b,
        required: S,
        error: h.error,
      }),
      P = Yd(C),
      k = (r = y.typography) != null ? r : l.typography;
    let I = m;
    return (
      I != null &&
        I.type !== Lt &&
        !d &&
        (I = u.jsx(
          Lt,
          p({ component: "span" }, k, {
            className: ee(P.label, k == null ? void 0 : k.className),
            children: I,
          })
        )),
      u.jsxs(
        Zd,
        p({ className: ee(P.root, a), ownerState: C, ref: o }, $, {
          children: [
            f.cloneElement(i, g),
            S
              ? u.jsxs(jt, {
                  display: "block",
                  children: [
                    I,
                    u.jsxs(Jd, {
                      ownerState: C,
                      "aria-hidden": !0,
                      className: P.asterisk,
                      children: [" ", "*"],
                    }),
                  ],
                })
              : I,
          ],
        })
      )
    );
  }),
  un = Qd;
function ep(e) {
  return we("MuiFormHelperText", e);
}
const tp = Re("MuiFormHelperText", [
    "root",
    "error",
    "disabled",
    "sizeSmall",
    "sizeMedium",
    "contained",
    "focused",
    "filled",
    "required",
  ]),
  Nr = tp;
var Dr;
const op = [
    "children",
    "className",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "margin",
    "required",
    "variant",
  ],
  np = (e) => {
    const {
        classes: t,
        contained: o,
        size: n,
        disabled: r,
        error: s,
        filled: a,
        focused: l,
        required: i,
      } = e,
      c = {
        root: [
          "root",
          r && "disabled",
          s && "error",
          n && `size${U(n)}`,
          o && "contained",
          l && "focused",
          a && "filled",
          i && "required",
        ],
      };
    return be(c, ep, t);
  },
  rp = B("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        o.size && t[`size${U(o.size)}`],
        o.contained && t.contained,
        o.filled && t.filled,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    p(
      { color: (e.vars || e).palette.text.secondary },
      e.typography.caption,
      {
        textAlign: "left",
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${Nr.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${Nr.error}`]: { color: (e.vars || e).palette.error.main },
      },
      t.size === "small" && { marginTop: 4 },
      t.contained && { marginLeft: 14, marginRight: 14 }
    )
  ),
  sp = f.forwardRef(function (t, o) {
    const n = Te({ props: t, name: "MuiFormHelperText" }),
      { children: r, className: s, component: a = "p" } = n,
      l = X(n, op),
      i = Dt(),
      c = qt({
        props: n,
        muiFormControl: i,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      d = p({}, n, {
        component: a,
        contained: c.variant === "filled" || c.variant === "outlined",
        variant: c.variant,
        size: c.size,
        disabled: c.disabled,
        error: c.error,
        filled: c.filled,
        focused: c.focused,
        required: c.required,
      }),
      m = np(d);
    return u.jsx(
      rp,
      p({ as: a, ownerState: d, className: ee(m.root, s), ref: o }, l, {
        children:
          r === " "
            ? Dr ||
              (Dr = u.jsx("span", { className: "notranslate", children: "​" }))
            : r,
      })
    );
  }),
  ap = sp;
function ip(e) {
  return we("MuiFormLabel", e);
}
const lp = Re("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  ho = lp,
  cp = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "required",
  ],
  up = (e) => {
    const {
        classes: t,
        color: o,
        focused: n,
        disabled: r,
        error: s,
        filled: a,
        required: l,
      } = e,
      i = {
        root: [
          "root",
          `color${U(o)}`,
          r && "disabled",
          s && "error",
          a && "filled",
          n && "focused",
          l && "required",
        ],
        asterisk: ["asterisk", s && "error"],
      };
    return be(i, ip, t);
  },
  dp = B("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      p(
        {},
        t.root,
        e.color === "secondary" && t.colorSecondary,
        e.filled && t.filled
      ),
  })(({ theme: e, ownerState: t }) =>
    p({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      [`&.${ho.focused}`]: { color: (e.vars || e).palette[t.color].main },
      [`&.${ho.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${ho.error}`]: { color: (e.vars || e).palette.error.main },
    })
  ),
  pp = B("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${ho.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  fp = f.forwardRef(function (t, o) {
    const n = Te({ props: t, name: "MuiFormLabel" }),
      { children: r, className: s, component: a = "label" } = n,
      l = X(n, cp),
      i = Dt(),
      c = qt({
        props: n,
        muiFormControl: i,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      d = p({}, n, {
        color: c.color || "primary",
        component: a,
        disabled: c.disabled,
        error: c.error,
        filled: c.filled,
        focused: c.focused,
        required: c.required,
      }),
      m = up(d);
    return u.jsxs(
      dp,
      p({ as: a, ownerState: d, className: ee(m.root, s), ref: o }, l, {
        children: [
          r,
          c.required &&
            u.jsxs(pp, {
              ownerState: d,
              "aria-hidden": !0,
              className: m.asterisk,
              children: [" ", "*"],
            }),
        ],
      })
    );
  }),
  mp = fp,
  gp = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  hp = (e) => {
    const { classes: t, disableUnderline: o } = e,
      r = be({ root: ["root", !o && "underline"], input: ["input"] }, uu, t);
    return p({}, t, r);
  },
  vp = B(tn, {
    shouldForwardProp: (e) => ft(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [...Qo(e, t), !o.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    let n =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.42)"
        : "rgba(255, 255, 255, 0.7)";
    return (
      e.vars &&
        (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
      p(
        { position: "relative" },
        t.formControl && { "label + &": { marginTop: 16 } },
        !t.disableUnderline && {
          "&::after": {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: "none",
          },
          [`&.${It.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${It.error}`]: {
            "&::before, &::after": {
              borderBottomColor: (e.vars || e).palette.error.main,
            },
          },
          "&::before": {
            borderBottom: `1px solid ${n}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {
              duration: e.transitions.duration.shorter,
            }),
            pointerEvents: "none",
          },
          [`&:hover:not(.${It.disabled}, .${It.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            "@media (hover: none)": { borderBottom: `1px solid ${n}` },
          },
          [`&.${It.disabled}:before`]: { borderBottomStyle: "dotted" },
        }
      )
    );
  }),
  bp = B(on, { name: "MuiInput", slot: "Input", overridesResolver: en })({}),
  Ws = f.forwardRef(function (t, o) {
    var n, r, s, a;
    const l = Te({ props: t, name: "MuiInput" }),
      {
        disableUnderline: i,
        components: c = {},
        componentsProps: d,
        fullWidth: m = !1,
        inputComponent: b = "input",
        multiline: v = !1,
        slotProps: y,
        slots: $ = {},
        type: x = "text",
      } = l,
      w = X(l, gp),
      S = hp(l),
      h = { root: { ownerState: { disableUnderline: i } } },
      C = y ?? d ? zo(y ?? d, h) : h,
      P = (n = (r = $.root) != null ? r : c.Root) != null ? n : vp,
      k = (s = (a = $.input) != null ? a : c.Input) != null ? s : bp;
    return u.jsx(
      Un,
      p(
        {
          slots: { root: P, input: k },
          slotProps: C,
          fullWidth: m,
          inputComponent: b,
          multiline: v,
          ref: o,
          type: x,
        },
        w,
        { classes: S }
      )
    );
  });
Ws.muiName = "Input";
const Hs = Ws;
function yp(e) {
  return we("MuiInputLabel", e);
}
Re("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const xp = ["disableAnimation", "margin", "shrink", "variant", "className"],
  Cp = (e) => {
    const {
        classes: t,
        formControl: o,
        size: n,
        shrink: r,
        disableAnimation: s,
        variant: a,
        required: l,
      } = e,
      i = {
        root: [
          "root",
          o && "formControl",
          !s && "animated",
          r && "shrink",
          n && n !== "normal" && `size${U(n)}`,
          a,
        ],
        asterisk: [l && "asterisk"],
      },
      c = be(i, yp, t);
    return p({}, t, c);
  },
  wp = B(mp, {
    shouldForwardProp: (e) => ft(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        { [`& .${ho.asterisk}`]: t.asterisk },
        t.root,
        o.formControl && t.formControl,
        o.size === "small" && t.sizeSmall,
        o.shrink && t.shrink,
        !o.disableAnimation && t.animated,
        o.focused && t.focused,
        t[o.variant],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    p(
      {
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
      },
      t.formControl && {
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translate(0, 20px) scale(1)",
      },
      t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
      t.shrink && {
        transform: "translate(0, -1.5px) scale(0.75)",
        transformOrigin: "top left",
        maxWidth: "133%",
      },
      !t.disableAnimation && {
        transition: e.transitions.create(["color", "transform", "max-width"], {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
      },
      t.variant === "filled" &&
        p(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(12px, 13px) scale(1)" },
          t.shrink &&
            p(
              {
                userSelect: "none",
                pointerEvents: "auto",
                transform: "translate(12px, 7px) scale(0.75)",
                maxWidth: "calc(133% - 24px)",
              },
              t.size === "small" && {
                transform: "translate(12px, 4px) scale(0.75)",
              }
            )
        ),
      t.variant === "outlined" &&
        p(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(14px, 9px) scale(1)" },
          t.shrink && {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          }
        )
    )
  ),
  Pp = f.forwardRef(function (t, o) {
    const n = Te({ name: "MuiInputLabel", props: t }),
      { disableAnimation: r = !1, shrink: s, className: a } = n,
      l = X(n, xp),
      i = Dt();
    let c = s;
    typeof c > "u" && i && (c = i.filled || i.focused || i.adornedStart);
    const d = qt({
        props: n,
        muiFormControl: i,
        states: ["size", "variant", "required", "focused"],
      }),
      m = p({}, n, {
        disableAnimation: r,
        formControl: i,
        shrink: c,
        size: d.size,
        variant: d.variant,
        required: d.required,
        focused: d.focused,
      }),
      b = Cp(m);
    return u.jsx(
      wp,
      p(
        { "data-shrink": c, ownerState: m, ref: o, className: ee(b.root, a) },
        l,
        { classes: b }
      )
    );
  }),
  Sp = Pp,
  $p = f.createContext({}),
  Rp = $p;
function kp(e) {
  return we("MuiList", e);
}
Re("MuiList", ["root", "padding", "dense", "subheader"]);
const Op = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  Ip = (e) => {
    const { classes: t, disablePadding: o, dense: n, subheader: r } = e;
    return be(
      { root: ["root", !o && "padding", n && "dense", r && "subheader"] },
      kp,
      t
    );
  },
  Tp = B("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        !o.disablePadding && t.padding,
        o.dense && t.dense,
        o.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    p(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  Ep = f.forwardRef(function (t, o) {
    const n = Te({ props: t, name: "MuiList" }),
      {
        children: r,
        className: s,
        component: a = "ul",
        dense: l = !1,
        disablePadding: i = !1,
        subheader: c,
      } = n,
      d = X(n, Op),
      m = f.useMemo(() => ({ dense: l }), [l]),
      b = p({}, n, { component: a, dense: l, disablePadding: i }),
      v = Ip(b);
    return u.jsx(Rp.Provider, {
      value: m,
      children: u.jsxs(
        Tp,
        p({ as: a, className: ee(v.root, s), ref: o, ownerState: b }, d, {
          children: [c, r],
        })
      ),
    });
  }),
  Mp = Ep,
  Ap = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ];
function dn(e, t, o) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : o
    ? null
    : e.firstChild;
}
function Br(e, t, o) {
  return e === t
    ? o
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : o
    ? null
    : e.lastChild;
}
function Vs(e, t) {
  if (t === void 0) return !0;
  let o = e.innerText;
  return (
    o === void 0 && (o = e.textContent),
    (o = o.trim().toLowerCase()),
    o.length === 0
      ? !1
      : t.repeating
      ? o[0] === t.keys[0]
      : o.indexOf(t.keys.join("")) === 0
  );
}
function ao(e, t, o, n, r, s) {
  let a = !1,
    l = r(e, t, t ? o : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a) return !1;
      a = !0;
    }
    const i = n ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Vs(l, s) || i) l = r(e, l, o);
    else return l.focus(), !0;
  }
  return !1;
}
const jp = f.forwardRef(function (t, o) {
    const {
        actions: n,
        autoFocus: r = !1,
        autoFocusItem: s = !1,
        children: a,
        className: l,
        disabledItemsFocusable: i = !1,
        disableListWrap: c = !1,
        onKeyDown: d,
        variant: m = "selectedMenu",
      } = t,
      b = X(t, Ap),
      v = f.useRef(null),
      y = f.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      });
    Ft(() => {
      r && v.current.focus();
    }, [r]),
      f.useImperativeHandle(
        n,
        () => ({
          adjustStyleForScrollbar: (g, { direction: h }) => {
            const C = !v.current.style.width;
            if (g.clientHeight < v.current.clientHeight && C) {
              const P = `${ms(Xe(g))}px`;
              (v.current.style[h === "rtl" ? "paddingLeft" : "paddingRight"] =
                P),
                (v.current.style.width = `calc(100% + ${P})`);
            }
            return v.current;
          },
        }),
        []
      );
    const $ = (g) => {
        const h = v.current,
          C = g.key,
          P = Xe(h).activeElement;
        if (C === "ArrowDown") g.preventDefault(), ao(h, P, c, i, dn);
        else if (C === "ArrowUp") g.preventDefault(), ao(h, P, c, i, Br);
        else if (C === "Home") g.preventDefault(), ao(h, null, c, i, dn);
        else if (C === "End") g.preventDefault(), ao(h, null, c, i, Br);
        else if (C.length === 1) {
          const k = y.current,
            I = C.toLowerCase(),
            E = performance.now();
          k.keys.length > 0 &&
            (E - k.lastTime > 500
              ? ((k.keys = []), (k.repeating = !0), (k.previousKeyMatched = !0))
              : k.repeating && I !== k.keys[0] && (k.repeating = !1)),
            (k.lastTime = E),
            k.keys.push(I);
          const A = P && !k.repeating && Vs(P, k);
          k.previousKeyMatched && (A || ao(h, P, !1, i, dn, k))
            ? g.preventDefault()
            : (k.previousKeyMatched = !1);
        }
        d && d(g);
      },
      x = We(v, o);
    let w = -1;
    f.Children.forEach(a, (g, h) => {
      if (!f.isValidElement(g)) {
        w === h && ((w += 1), w >= a.length && (w = -1));
        return;
      }
      g.props.disabled ||
        (((m === "selectedMenu" && g.props.selected) || w === -1) && (w = h)),
        w === h &&
          (g.props.disabled ||
            g.props.muiSkipListHighlight ||
            g.type.muiSkipListHighlight) &&
          ((w += 1), w >= a.length && (w = -1));
    });
    const S = f.Children.map(a, (g, h) => {
      if (h === w) {
        const C = {};
        return (
          s && (C.autoFocus = !0),
          g.props.tabIndex === void 0 &&
            m === "selectedMenu" &&
            (C.tabIndex = 0),
          f.cloneElement(g, C)
        );
      }
      return g;
    });
    return u.jsx(
      Mp,
      p(
        {
          role: "menu",
          ref: x,
          className: l,
          onKeyDown: $,
          tabIndex: r ? 0 : -1,
        },
        b,
        { children: S }
      )
    );
  }),
  Fp = jp;
function Lp(e) {
  return we("MuiPopover", e);
}
Re("MuiPopover", ["root", "paper"]);
const Np = ["onEntering"],
  Dp = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "slots",
    "slotProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
    "disableScrollLock",
  ],
  Bp = ["slotProps"];
function zr(e, t) {
  let o = 0;
  return (
    typeof t == "number"
      ? (o = t)
      : t === "center"
      ? (o = e.height / 2)
      : t === "bottom" && (o = e.height),
    o
  );
}
function _r(e, t) {
  let o = 0;
  return (
    typeof t == "number"
      ? (o = t)
      : t === "center"
      ? (o = e.width / 2)
      : t === "right" && (o = e.width),
    o
  );
}
function Wr(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function pn(e) {
  return typeof e == "function" ? e() : e;
}
const zp = (e) => {
    const { classes: t } = e;
    return be({ root: ["root"], paper: ["paper"] }, Lp, t);
  },
  _p = B(Ds, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  Us = B(eo, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  Wp = f.forwardRef(function (t, o) {
    var n, r, s;
    const a = Te({ props: t, name: "MuiPopover" }),
      {
        action: l,
        anchorEl: i,
        anchorOrigin: c = { vertical: "top", horizontal: "left" },
        anchorPosition: d,
        anchorReference: m = "anchorEl",
        children: b,
        className: v,
        container: y,
        elevation: $ = 8,
        marginThreshold: x = 16,
        open: w,
        PaperProps: S = {},
        slots: g,
        slotProps: h,
        transformOrigin: C = { vertical: "top", horizontal: "left" },
        TransitionComponent: P = wn,
        transitionDuration: k = "auto",
        TransitionProps: { onEntering: I } = {},
        disableScrollLock: E = !1,
      } = a,
      A = X(a.TransitionProps, Np),
      F = X(a, Dp),
      T = (n = h == null ? void 0 : h.paper) != null ? n : S,
      M = f.useRef(),
      L = We(M, T.ref),
      V = p({}, a, {
        anchorOrigin: c,
        anchorReference: m,
        elevation: $,
        marginThreshold: x,
        externalPaperSlotProps: T,
        transformOrigin: C,
        TransitionComponent: P,
        transitionDuration: k,
        TransitionProps: A,
      }),
      j = zp(V),
      _ = f.useCallback(() => {
        if (m === "anchorPosition") return d;
        const Q = pn(i),
          W = (
            Q && Q.nodeType === 1 ? Q : Xe(M.current).body
          ).getBoundingClientRect();
        return {
          top: W.top + zr(W, c.vertical),
          left: W.left + _r(W, c.horizontal),
        };
      }, [i, c.horizontal, c.vertical, d, m]),
      D = f.useCallback(
        (Q) => ({
          vertical: zr(Q, C.vertical),
          horizontal: _r(Q, C.horizontal),
        }),
        [C.horizontal, C.vertical]
      ),
      K = f.useCallback(
        (Q) => {
          const re = { width: Q.offsetWidth, height: Q.offsetHeight },
            W = D(re);
          if (m === "none")
            return { top: null, left: null, transformOrigin: Wr(W) };
          const z = _();
          let ke = z.top - W.vertical,
            Z = z.left - W.horizontal;
          const Pe = ke + re.height,
            he = Z + re.width,
            ie = Wt(pn(i)),
            Se = ie.innerHeight - x,
            xe = ie.innerWidth - x;
          if (x !== null && ke < x) {
            const $e = ke - x;
            (ke -= $e), (W.vertical += $e);
          } else if (x !== null && Pe > Se) {
            const $e = Pe - Se;
            (ke -= $e), (W.vertical += $e);
          }
          if (x !== null && Z < x) {
            const $e = Z - x;
            (Z -= $e), (W.horizontal += $e);
          } else if (he > xe) {
            const $e = he - xe;
            (Z -= $e), (W.horizontal += $e);
          }
          return {
            top: `${Math.round(ke)}px`,
            left: `${Math.round(Z)}px`,
            transformOrigin: Wr(W),
          };
        },
        [i, m, _, D, x]
      ),
      [ye, Oe] = f.useState(w),
      pe = f.useCallback(() => {
        const Q = M.current;
        if (!Q) return;
        const re = K(Q);
        re.top !== null && (Q.style.top = re.top),
          re.left !== null && (Q.style.left = re.left),
          (Q.style.transformOrigin = re.transformOrigin),
          Oe(!0);
      }, [K]);
    f.useEffect(
      () => (
        E && window.addEventListener("scroll", pe),
        () => window.removeEventListener("scroll", pe)
      ),
      [i, E, pe]
    );
    const ge = (Q, re) => {
        I && I(Q, re), pe();
      },
      Y = () => {
        Oe(!1);
      };
    f.useEffect(() => {
      w && pe();
    }),
      f.useImperativeHandle(
        l,
        () =>
          w
            ? {
                updatePosition: () => {
                  pe();
                },
              }
            : null,
        [w, pe]
      ),
      f.useEffect(() => {
        if (!w) return;
        const Q = is(() => {
            pe();
          }),
          re = Wt(i);
        return (
          re.addEventListener("resize", Q),
          () => {
            Q.clear(), re.removeEventListener("resize", Q);
          }
        );
      }, [i, w, pe]);
    let te = k;
    k === "auto" && !P.muiSupportAuto && (te = void 0);
    const fe = y || (i ? Xe(pn(i)).body : void 0),
      Ie = (r = g == null ? void 0 : g.root) != null ? r : _p,
      J = (s = g == null ? void 0 : g.paper) != null ? s : Us,
      ue = Ht({
        elementType: J,
        externalSlotProps: p({}, T, {
          style: ye ? T.style : p({}, T.style, { opacity: 0 }),
        }),
        additionalProps: { elevation: $, ref: L },
        ownerState: V,
        className: ee(j.paper, T == null ? void 0 : T.className),
      }),
      Ee = Ht({
        elementType: Ie,
        externalSlotProps: (h == null ? void 0 : h.root) || {},
        externalForwardedProps: F,
        additionalProps: {
          ref: o,
          slotProps: { backdrop: { invisible: !0 } },
          container: fe,
          open: w,
        },
        ownerState: V,
        className: ee(j.root, v),
      }),
      { slotProps: ne } = Ee,
      ae = X(Ee, Bp);
    return u.jsx(
      Ie,
      p({}, ae, !Cn(Ie) && { slotProps: ne, disableScrollLock: E }, {
        children: u.jsx(
          P,
          p(
            { appear: !0, in: w, onEntering: ge, onExited: Y, timeout: te },
            A,
            { children: u.jsx(J, p({}, ue, { children: b })) }
          )
        ),
      })
    );
  }),
  Hp = Wp;
function Vp(e) {
  return we("MuiMenu", e);
}
Re("MuiMenu", ["root", "paper", "list"]);
const Up = ["onEntering"],
  qp = [
    "autoFocus",
    "children",
    "className",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
    "slots",
    "slotProps",
  ],
  Kp = { vertical: "top", horizontal: "right" },
  Gp = { vertical: "top", horizontal: "left" },
  Xp = (e) => {
    const { classes: t } = e;
    return be({ root: ["root"], paper: ["paper"], list: ["list"] }, Vp, t);
  },
  Yp = B(Hp, {
    shouldForwardProp: (e) => ft(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  Zp = B(Us, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  Jp = B(Fp, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  Qp = f.forwardRef(function (t, o) {
    var n, r;
    const s = Te({ props: t, name: "MuiMenu" }),
      {
        autoFocus: a = !0,
        children: l,
        className: i,
        disableAutoFocusItem: c = !1,
        MenuListProps: d = {},
        onClose: m,
        open: b,
        PaperProps: v = {},
        PopoverClasses: y,
        transitionDuration: $ = "auto",
        TransitionProps: { onEntering: x } = {},
        variant: w = "selectedMenu",
        slots: S = {},
        slotProps: g = {},
      } = s,
      h = X(s.TransitionProps, Up),
      C = X(s, qp),
      P = Mn(),
      k = p({}, s, {
        autoFocus: a,
        disableAutoFocusItem: c,
        MenuListProps: d,
        onEntering: x,
        PaperProps: v,
        transitionDuration: $,
        TransitionProps: h,
        variant: w,
      }),
      I = Xp(k),
      E = a && !c && b,
      A = f.useRef(null),
      F = (D, K) => {
        A.current &&
          A.current.adjustStyleForScrollbar(D, {
            direction: P ? "rtl" : "ltr",
          }),
          x && x(D, K);
      },
      T = (D) => {
        D.key === "Tab" && (D.preventDefault(), m && m(D, "tabKeyDown"));
      };
    let M = -1;
    f.Children.map(l, (D, K) => {
      f.isValidElement(D) &&
        (D.props.disabled ||
          (((w === "selectedMenu" && D.props.selected) || M === -1) &&
            (M = K)));
    });
    const L = (n = S.paper) != null ? n : Zp,
      V = (r = g.paper) != null ? r : v,
      j = Ht({
        elementType: S.root,
        externalSlotProps: g.root,
        ownerState: k,
        className: [I.root, i],
      }),
      _ = Ht({
        elementType: L,
        externalSlotProps: V,
        ownerState: k,
        className: I.paper,
      });
    return u.jsx(
      Yp,
      p(
        {
          onClose: m,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: P ? "right" : "left",
          },
          transformOrigin: P ? Kp : Gp,
          slots: { paper: L, root: S.root },
          slotProps: { root: j, paper: _ },
          open: b,
          ref: o,
          transitionDuration: $,
          TransitionProps: p({ onEntering: F }, h),
          ownerState: k,
        },
        C,
        {
          classes: y,
          children: u.jsx(
            Jp,
            p(
              {
                onKeyDown: T,
                actions: A,
                autoFocus: a && (M === -1 || c),
                autoFocusItem: E,
                variant: w,
              },
              d,
              { className: ee(I.list, d.className), children: l }
            )
          ),
        }
      )
    );
  }),
  ef = Qp;
function tf(e) {
  return we("MuiNativeSelect", e);
}
const of = Re("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  Yn = of,
  nf = [
    "className",
    "disabled",
    "error",
    "IconComponent",
    "inputRef",
    "variant",
  ],
  rf = (e) => {
    const {
        classes: t,
        variant: o,
        disabled: n,
        multiple: r,
        open: s,
        error: a,
      } = e,
      l = {
        select: ["select", o, n && "disabled", r && "multiple", a && "error"],
        icon: ["icon", `icon${U(o)}`, s && "iconOpen", n && "disabled"],
      };
    return be(l, tf, t);
  },
  qs = ({ ownerState: e, theme: t }) =>
    p(
      {
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": p(
          {},
          t.vars
            ? {
                backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
              }
            : {
                backgroundColor:
                  t.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(255, 255, 255, 0.05)",
              },
          { borderRadius: 0 }
        ),
        "&::-ms-expand": { display: "none" },
        [`&.${Yn.disabled}`]: { cursor: "default" },
        "&[multiple]": { height: "auto" },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
          backgroundColor: (t.vars || t).palette.background.paper,
        },
        "&&&": { paddingRight: 24, minWidth: 16 },
      },
      e.variant === "filled" && { "&&&": { paddingRight: 32 } },
      e.variant === "outlined" && {
        borderRadius: (t.vars || t).shape.borderRadius,
        "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
        "&&&": { paddingRight: 32 },
      }
    ),
  sf = B("select", {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: ft,
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.select,
        t[o.variant],
        o.error && t.error,
        { [`&.${Yn.multiple}`]: t.multiple },
      ];
    },
  })(qs),
  Ks = ({ ownerState: e, theme: t }) =>
    p(
      {
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${Yn.disabled}`]: { color: (t.vars || t).palette.action.disabled },
      },
      e.open && { transform: "rotate(180deg)" },
      e.variant === "filled" && { right: 7 },
      e.variant === "outlined" && { right: 7 }
    ),
  af = B("svg", {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.icon,
        o.variant && t[`icon${U(o.variant)}`],
        o.open && t.iconOpen,
      ];
    },
  })(Ks),
  lf = f.forwardRef(function (t, o) {
    const {
        className: n,
        disabled: r,
        error: s,
        IconComponent: a,
        inputRef: l,
        variant: i = "standard",
      } = t,
      c = X(t, nf),
      d = p({}, t, { disabled: r, variant: i, error: s }),
      m = rf(d);
    return u.jsxs(f.Fragment, {
      children: [
        u.jsx(
          sf,
          p(
            {
              ownerState: d,
              className: ee(m.select, n),
              disabled: r,
              ref: l || o,
            },
            c
          )
        ),
        t.multiple
          ? null
          : u.jsx(af, { as: a, ownerState: d, className: m.icon }),
      ],
    });
  }),
  cf = lf;
var Hr;
const uf = ["children", "classes", "className", "label", "notched"],
  df = B("fieldset", { shouldForwardProp: ft })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  pf = B("legend", { shouldForwardProp: ft })(({ ownerState: e, theme: t }) =>
    p(
      { float: "unset", width: "auto", overflow: "hidden" },
      !e.withLabel && {
        padding: 0,
        lineHeight: "11px",
        transition: t.transitions.create("width", {
          duration: 150,
          easing: t.transitions.easing.easeOut,
        }),
      },
      e.withLabel &&
        p(
          {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: t.transitions.create("max-width", {
              duration: 50,
              easing: t.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
          e.notched && {
            maxWidth: "100%",
            transition: t.transitions.create("max-width", {
              duration: 100,
              easing: t.transitions.easing.easeOut,
              delay: 50,
            }),
          }
        )
    )
  );
function ff(e) {
  const { className: t, label: o, notched: n } = e,
    r = X(e, uf),
    s = o != null && o !== "",
    a = p({}, e, { notched: n, withLabel: s });
  return u.jsx(
    df,
    p({ "aria-hidden": !0, className: t, ownerState: a }, r, {
      children: u.jsx(pf, {
        ownerState: a,
        children: s
          ? u.jsx("span", { children: o })
          : Hr ||
            (Hr = u.jsx("span", { className: "notranslate", children: "​" })),
      }),
    })
  );
}
const mf = [
    "components",
    "fullWidth",
    "inputComponent",
    "label",
    "multiline",
    "notched",
    "slots",
    "type",
  ],
  gf = (e) => {
    const { classes: t } = e,
      n = be(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        pu,
        t
      );
    return p({}, t, n);
  },
  hf = B(tn, {
    shouldForwardProp: (e) => ft(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Qo,
  })(({ theme: e, ownerState: t }) => {
    const o =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return p(
      {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${vt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${vt.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : o,
          },
        },
        [`&.${vt.focused} .${vt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[t.color].main,
          borderWidth: 2,
        },
        [`&.${vt.error} .${vt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main,
        },
        [`&.${vt.disabled} .${vt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled,
        },
      },
      t.startAdornment && { paddingLeft: 14 },
      t.endAdornment && { paddingRight: 14 },
      t.multiline &&
        p(
          { padding: "16.5px 14px" },
          t.size === "small" && { padding: "8.5px 14px" }
        )
    );
  }),
  vf = B(ff, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(({ theme: e }) => {
    const t =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: e.vars
        ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
        : t,
    };
  }),
  bf = B(on, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: en,
  })(({ theme: e, ownerState: t }) =>
    p(
      { padding: "16.5px 14px" },
      !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      },
      e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      },
      t.size === "small" && { padding: "8.5px 14px" },
      t.multiline && { padding: 0 },
      t.startAdornment && { paddingLeft: 0 },
      t.endAdornment && { paddingRight: 0 }
    )
  ),
  Gs = f.forwardRef(function (t, o) {
    var n, r, s, a, l;
    const i = Te({ props: t, name: "MuiOutlinedInput" }),
      {
        components: c = {},
        fullWidth: d = !1,
        inputComponent: m = "input",
        label: b,
        multiline: v = !1,
        notched: y,
        slots: $ = {},
        type: x = "text",
      } = i,
      w = X(i, mf),
      S = gf(i),
      g = Dt(),
      h = qt({
        props: i,
        muiFormControl: g,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      C = p({}, i, {
        color: h.color || "primary",
        disabled: h.disabled,
        error: h.error,
        focused: h.focused,
        formControl: g,
        fullWidth: d,
        hiddenLabel: h.hiddenLabel,
        multiline: v,
        size: h.size,
        type: x,
      }),
      P = (n = (r = $.root) != null ? r : c.Root) != null ? n : hf,
      k = (s = (a = $.input) != null ? a : c.Input) != null ? s : bf;
    return u.jsx(
      Un,
      p(
        {
          slots: { root: P, input: k },
          renderSuffix: (I) =>
            u.jsx(vf, {
              ownerState: C,
              className: S.notchedOutline,
              label:
                b != null && b !== "" && h.required
                  ? l || (l = u.jsxs(f.Fragment, { children: [b, " ", "*"] }))
                  : b,
              notched:
                typeof y < "u"
                  ? y
                  : !!(I.startAdornment || I.filled || I.focused),
            }),
          fullWidth: d,
          inputComponent: m,
          multiline: v,
          ref: o,
          type: x,
        },
        w,
        { classes: p({}, S, { notchedOutline: null }) }
      )
    );
  });
Gs.muiName = "Input";
const Xs = Gs,
  yf = Rt(
    u.jsx("path", {
      d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
    }),
    "Star"
  ),
  xf = Rt(
    u.jsx("path", {
      d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",
    }),
    "StarBorder"
  );
function Cf(e) {
  return we("MuiRating", e);
}
const wf = Re("MuiRating", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
    "readOnly",
    "disabled",
    "focusVisible",
    "visuallyHidden",
    "pristine",
    "label",
    "labelEmptyValueActive",
    "icon",
    "iconEmpty",
    "iconFilled",
    "iconHover",
    "iconFocus",
    "iconActive",
    "decimal",
  ]),
  io = wf,
  Pf = ["value"],
  Sf = [
    "className",
    "defaultValue",
    "disabled",
    "emptyIcon",
    "emptyLabelText",
    "getLabelText",
    "highlightSelectedOnly",
    "icon",
    "IconContainerComponent",
    "max",
    "name",
    "onChange",
    "onChangeActive",
    "onMouseLeave",
    "onMouseMove",
    "precision",
    "readOnly",
    "size",
    "value",
  ];
function $f(e) {
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function fn(e, t) {
  if (e == null) return e;
  const o = Math.round(e / t) * t;
  return Number(o.toFixed($f(t)));
}
const Rf = (e) => {
    const {
        classes: t,
        size: o,
        readOnly: n,
        disabled: r,
        emptyValueFocused: s,
        focusVisible: a,
      } = e,
      l = {
        root: [
          "root",
          `size${U(o)}`,
          r && "disabled",
          a && "focusVisible",
          n && "readOnly",
        ],
        label: ["label", "pristine"],
        labelEmptyValue: [s && "labelEmptyValueActive"],
        icon: ["icon"],
        iconEmpty: ["iconEmpty"],
        iconFilled: ["iconFilled"],
        iconHover: ["iconHover"],
        iconFocus: ["iconFocus"],
        iconActive: ["iconActive"],
        decimal: ["decimal"],
        visuallyHidden: ["visuallyHidden"],
      };
    return be(l, Cf, t);
  },
  kf = B("span", {
    name: "MuiRating",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        { [`& .${io.visuallyHidden}`]: t.visuallyHidden },
        t.root,
        t[`size${U(o.size)}`],
        o.readOnly && t.readOnly,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    p(
      {
        display: "inline-flex",
        position: "relative",
        fontSize: e.typography.pxToRem(24),
        color: "#faaf00",
        cursor: "pointer",
        textAlign: "left",
        width: "min-content",
        WebkitTapHighlightColor: "transparent",
        [`&.${io.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
          pointerEvents: "none",
        },
        [`&.${io.focusVisible} .${io.iconActive}`]: {
          outline: "1px solid #999",
        },
        [`& .${io.visuallyHidden}`]: ii,
      },
      t.size === "small" && { fontSize: e.typography.pxToRem(18) },
      t.size === "large" && { fontSize: e.typography.pxToRem(30) },
      t.readOnly && { pointerEvents: "none" }
    )
  ),
  Ys = B("label", {
    name: "MuiRating",
    slot: "Label",
    overridesResolver: ({ ownerState: e }, t) => [
      t.label,
      e.emptyValueFocused && t.labelEmptyValueActive,
    ],
  })(({ ownerState: e }) =>
    p(
      { cursor: "inherit" },
      e.emptyValueFocused && {
        top: 0,
        bottom: 0,
        position: "absolute",
        outline: "1px solid #999",
        width: "100%",
      }
    )
  ),
  Of = B("span", {
    name: "MuiRating",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.icon,
        o.iconEmpty && t.iconEmpty,
        o.iconFilled && t.iconFilled,
        o.iconHover && t.iconHover,
        o.iconFocus && t.iconFocus,
        o.iconActive && t.iconActive,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    p(
      {
        display: "flex",
        transition: e.transitions.create("transform", {
          duration: e.transitions.duration.shortest,
        }),
        pointerEvents: "none",
      },
      t.iconActive && { transform: "scale(1.2)" },
      t.iconEmpty && { color: (e.vars || e).palette.action.disabled }
    )
  ),
  If = B("span", {
    name: "MuiRating",
    slot: "Decimal",
    shouldForwardProp: (e) => cs(e) && e !== "iconActive",
    overridesResolver: (e, t) => {
      const { iconActive: o } = e;
      return [t.decimal, o && t.iconActive];
    },
  })(({ iconActive: e }) =>
    p({ position: "relative" }, e && { transform: "scale(1.2)" })
  );
function Tf(e) {
  const t = X(e, Pf);
  return u.jsx("span", p({}, t));
}
function Vr(e) {
  const {
      classes: t,
      disabled: o,
      emptyIcon: n,
      focus: r,
      getLabelText: s,
      highlightSelectedOnly: a,
      hover: l,
      icon: i,
      IconContainerComponent: c,
      isActive: d,
      itemValue: m,
      labelProps: b,
      name: v,
      onBlur: y,
      onChange: $,
      onClick: x,
      onFocus: w,
      readOnly: S,
      ownerState: g,
      ratingValue: h,
      ratingValueRounded: C,
    } = e,
    P = a ? m === h : m <= h,
    k = m <= l,
    I = m <= r,
    E = m === C,
    A = Ut(),
    F = u.jsx(Of, {
      as: c,
      value: m,
      className: ee(
        t.icon,
        P ? t.iconFilled : t.iconEmpty,
        k && t.iconHover,
        I && t.iconFocus,
        d && t.iconActive
      ),
      ownerState: p({}, g, {
        iconEmpty: !P,
        iconFilled: P,
        iconHover: k,
        iconFocus: I,
        iconActive: d,
      }),
      children: n && !P ? n : i,
    });
  return S
    ? u.jsx("span", p({}, b, { children: F }))
    : u.jsxs(f.Fragment, {
        children: [
          u.jsxs(
            Ys,
            p(
              {
                ownerState: p({}, g, { emptyValueFocused: void 0 }),
                htmlFor: A,
              },
              b,
              {
                children: [
                  F,
                  u.jsx("span", {
                    className: t.visuallyHidden,
                    children: s(m),
                  }),
                ],
              }
            )
          ),
          u.jsx("input", {
            className: t.visuallyHidden,
            onFocus: w,
            onBlur: y,
            onChange: $,
            onClick: x,
            disabled: o,
            value: m,
            id: A,
            type: "radio",
            name: v,
            checked: E,
          }),
        ],
      });
}
const Ef = u.jsx(yf, { fontSize: "inherit" }),
  Mf = u.jsx(xf, { fontSize: "inherit" });
function Af(e) {
  return `${e} Star${e !== 1 ? "s" : ""}`;
}
const jf = f.forwardRef(function (t, o) {
    const n = Te({ name: "MuiRating", props: t }),
      {
        className: r,
        defaultValue: s = null,
        disabled: a = !1,
        emptyIcon: l = Mf,
        emptyLabelText: i = "Empty",
        getLabelText: c = Af,
        highlightSelectedOnly: d = !1,
        icon: m = Ef,
        IconContainerComponent: b = Tf,
        max: v = 5,
        name: y,
        onChange: $,
        onChangeActive: x,
        onMouseLeave: w,
        onMouseMove: S,
        precision: g = 1,
        readOnly: h = !1,
        size: C = "medium",
        value: P,
      } = n,
      k = X(n, Sf),
      I = Ut(y),
      [E, A] = Mt({ controlled: P, default: s, name: "Rating" }),
      F = fn(E, g),
      T = Mn(),
      [{ hover: M, focus: L }, V] = f.useState({ hover: -1, focus: -1 });
    let j = F;
    M !== -1 && (j = M), L !== -1 && (j = L);
    const { isFocusVisibleRef: _, onBlur: D, onFocus: K, ref: ye } = us(),
      [Oe, pe] = f.useState(!1),
      ge = f.useRef(),
      Y = We(ye, ge, o),
      te = (W) => {
        S && S(W);
        const z = ge.current,
          { right: ke, left: Z, width: Pe } = z.getBoundingClientRect();
        let he;
        T ? (he = (ke - W.clientX) / Pe) : (he = (W.clientX - Z) / Pe);
        let ie = fn(v * he + g / 2, g);
        (ie = Ma(ie, g, v)),
          V((Se) =>
            Se.hover === ie && Se.focus === ie ? Se : { hover: ie, focus: ie }
          ),
          pe(!1),
          x && M !== ie && x(W, ie);
      },
      fe = (W) => {
        w && w(W);
        const z = -1;
        V({ hover: z, focus: z }), x && M !== z && x(W, z);
      },
      Ie = (W) => {
        let z = W.target.value === "" ? null : parseFloat(W.target.value);
        M !== -1 && (z = M), A(z), $ && $(W, z);
      },
      J = (W) => {
        (W.clientX === 0 && W.clientY === 0) ||
          (V({ hover: -1, focus: -1 }),
          A(null),
          $ && parseFloat(W.target.value) === F && $(W, null));
      },
      ue = (W) => {
        K(W), _.current === !0 && pe(!0);
        const z = parseFloat(W.target.value);
        V((ke) => ({ hover: ke.hover, focus: z }));
      },
      Ee = (W) => {
        if (M !== -1) return;
        D(W), _.current === !1 && pe(!1);
        const z = -1;
        V((ke) => ({ hover: ke.hover, focus: z }));
      },
      [ne, ae] = f.useState(!1),
      Q = p({}, n, {
        defaultValue: s,
        disabled: a,
        emptyIcon: l,
        emptyLabelText: i,
        emptyValueFocused: ne,
        focusVisible: Oe,
        getLabelText: c,
        icon: m,
        IconContainerComponent: b,
        max: v,
        precision: g,
        readOnly: h,
        size: C,
      }),
      re = Rf(Q);
    return u.jsxs(
      kf,
      p(
        {
          ref: Y,
          onMouseMove: te,
          onMouseLeave: fe,
          className: ee(re.root, r, h && "MuiRating-readOnly"),
          ownerState: Q,
          role: h ? "img" : null,
          "aria-label": h ? c(j) : null,
        },
        k,
        {
          children: [
            Array.from(new Array(v)).map((W, z) => {
              const ke = z + 1,
                Z = {
                  classes: re,
                  disabled: a,
                  emptyIcon: l,
                  focus: L,
                  getLabelText: c,
                  highlightSelectedOnly: d,
                  hover: M,
                  icon: m,
                  IconContainerComponent: b,
                  name: I,
                  onBlur: Ee,
                  onChange: Ie,
                  onClick: J,
                  onFocus: ue,
                  ratingValue: j,
                  ratingValueRounded: F,
                  readOnly: h,
                  ownerState: Q,
                },
                Pe = ke === Math.ceil(j) && (M !== -1 || L !== -1);
              if (g < 1) {
                const he = Array.from(new Array(1 / g));
                return u.jsx(
                  If,
                  {
                    className: ee(re.decimal, Pe && re.iconActive),
                    ownerState: Q,
                    iconActive: Pe,
                    children: he.map((ie, Se) => {
                      const xe = fn(ke - 1 + (Se + 1) * g, g);
                      return u.jsx(
                        Vr,
                        p({}, Z, {
                          isActive: !1,
                          itemValue: xe,
                          labelProps: {
                            style:
                              he.length - 1 === Se
                                ? {}
                                : {
                                    width:
                                      xe === j
                                        ? `${(Se + 1) * g * 100}%`
                                        : "0%",
                                    overflow: "hidden",
                                    position: "absolute",
                                  },
                          },
                        }),
                        xe
                      );
                    }),
                  },
                  ke
                );
              }
              return u.jsx(Vr, p({}, Z, { isActive: Pe, itemValue: ke }), ke);
            }),
            !h &&
              !a &&
              u.jsxs(Ys, {
                className: ee(re.label, re.labelEmptyValue),
                ownerState: Q,
                children: [
                  u.jsx("input", {
                    className: re.visuallyHidden,
                    value: "",
                    id: `${I}-empty`,
                    type: "radio",
                    name: I,
                    checked: F == null,
                    onFocus: () => ae(!0),
                    onBlur: () => ae(!1),
                    onChange: Ie,
                  }),
                  u.jsx("span", { className: re.visuallyHidden, children: i }),
                ],
              }),
          ],
        }
      )
    );
  }),
  Ff = jf;
function Lf(e) {
  return we("MuiSelect", e);
}
const Nf = Re("MuiSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "focused",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  lo = Nf;
var Ur;
const Df = [
    "aria-describedby",
    "aria-label",
    "autoFocus",
    "autoWidth",
    "children",
    "className",
    "defaultOpen",
    "defaultValue",
    "disabled",
    "displayEmpty",
    "error",
    "IconComponent",
    "inputRef",
    "labelId",
    "MenuProps",
    "multiple",
    "name",
    "onBlur",
    "onChange",
    "onClose",
    "onFocus",
    "onOpen",
    "open",
    "readOnly",
    "renderValue",
    "SelectDisplayProps",
    "tabIndex",
    "type",
    "value",
    "variant",
  ],
  Bf = B("div", {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        { [`&.${lo.select}`]: t.select },
        { [`&.${lo.select}`]: t[o.variant] },
        { [`&.${lo.error}`]: t.error },
        { [`&.${lo.multiple}`]: t.multiple },
      ];
    },
  })(qs, {
    [`&.${lo.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  zf = B("svg", {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.icon,
        o.variant && t[`icon${U(o.variant)}`],
        o.open && t.iconOpen,
      ];
    },
  })(Ks),
  _f = B("input", {
    shouldForwardProp: (e) => cs(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function qr(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Wf(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const Hf = (e) => {
    const {
        classes: t,
        variant: o,
        disabled: n,
        multiple: r,
        open: s,
        error: a,
      } = e,
      l = {
        select: ["select", o, n && "disabled", r && "multiple", a && "error"],
        icon: ["icon", `icon${U(o)}`, s && "iconOpen", n && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return be(l, Lf, t);
  },
  Vf = f.forwardRef(function (t, o) {
    var n;
    const {
        "aria-describedby": r,
        "aria-label": s,
        autoFocus: a,
        autoWidth: l,
        children: i,
        className: c,
        defaultOpen: d,
        defaultValue: m,
        disabled: b,
        displayEmpty: v,
        error: y = !1,
        IconComponent: $,
        inputRef: x,
        labelId: w,
        MenuProps: S = {},
        multiple: g,
        name: h,
        onBlur: C,
        onChange: P,
        onClose: k,
        onFocus: I,
        onOpen: E,
        open: A,
        readOnly: F,
        renderValue: T,
        SelectDisplayProps: M = {},
        tabIndex: L,
        value: V,
        variant: j = "standard",
      } = t,
      _ = X(t, Df),
      [D, K] = Mt({ controlled: V, default: m, name: "Select" }),
      [ye, Oe] = Mt({ controlled: A, default: d, name: "Select" }),
      pe = f.useRef(null),
      ge = f.useRef(null),
      [Y, te] = f.useState(null),
      { current: fe } = f.useRef(A != null),
      [Ie, J] = f.useState(),
      ue = We(o, x),
      Ee = f.useCallback((G) => {
        (ge.current = G), G && te(G);
      }, []),
      ne = Y == null ? void 0 : Y.parentNode;
    f.useImperativeHandle(
      ue,
      () => ({
        focus: () => {
          ge.current.focus();
        },
        node: pe.current,
        value: D,
      }),
      [D]
    ),
      f.useEffect(() => {
        d &&
          ye &&
          Y &&
          !fe &&
          (J(l ? null : ne.clientWidth), ge.current.focus());
      }, [Y, l]),
      f.useEffect(() => {
        a && ge.current.focus();
      }, [a]),
      f.useEffect(() => {
        if (!w) return;
        const G = Xe(ge.current).getElementById(w);
        if (G) {
          const de = () => {
            getSelection().isCollapsed && ge.current.focus();
          };
          return (
            G.addEventListener("click", de),
            () => {
              G.removeEventListener("click", de);
            }
          );
        }
      }, [w]);
    const ae = (G, de) => {
        G ? E && E(de) : k && k(de),
          fe || (J(l ? null : ne.clientWidth), Oe(G));
      },
      Q = (G) => {
        G.button === 0 && (G.preventDefault(), ge.current.focus(), ae(!0, G));
      },
      re = (G) => {
        ae(!1, G);
      },
      W = f.Children.toArray(i),
      z = (G) => {
        const de = W.find((ve) => ve.props.value === G.target.value);
        de !== void 0 && (K(de.props.value), P && P(G, de));
      },
      ke = (G) => (de) => {
        let ve;
        if (de.currentTarget.hasAttribute("tabindex")) {
          if (g) {
            ve = Array.isArray(D) ? D.slice() : [];
            const De = D.indexOf(G.props.value);
            De === -1 ? ve.push(G.props.value) : ve.splice(De, 1);
          } else ve = G.props.value;
          if (
            (G.props.onClick && G.props.onClick(de), D !== ve && (K(ve), P))
          ) {
            const De = de.nativeEvent || de,
              nt = new De.constructor(De.type, De);
            Object.defineProperty(nt, "target", {
              writable: !0,
              value: { value: ve, name: h },
            }),
              P(nt, G);
          }
          g || ae(!1, de);
        }
      },
      Z = (G) => {
        F ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(G.key) !== -1 &&
            (G.preventDefault(), ae(!0, G)));
      },
      Pe = Y !== null && ye,
      he = (G) => {
        !Pe &&
          C &&
          (Object.defineProperty(G, "target", {
            writable: !0,
            value: { value: D, name: h },
          }),
          C(G));
      };
    delete _["aria-invalid"];
    let ie, Se;
    const xe = [];
    let $e = !1;
    (Lo({ value: D }) || v) && (T ? (ie = T(D)) : ($e = !0));
    const He = W.map((G) => {
      if (!f.isValidElement(G)) return null;
      let de;
      if (g) {
        if (!Array.isArray(D)) throw new Error(ls(2));
        (de = D.some((ve) => qr(ve, G.props.value))),
          de && $e && xe.push(G.props.children);
      } else (de = qr(D, G.props.value)), de && $e && (Se = G.props.children);
      return f.cloneElement(G, {
        "aria-selected": de ? "true" : "false",
        onClick: ke(G),
        onKeyUp: (ve) => {
          ve.key === " " && ve.preventDefault(),
            G.props.onKeyUp && G.props.onKeyUp(ve);
        },
        role: "option",
        selected: de,
        value: void 0,
        "data-value": G.props.value,
      });
    });
    $e &&
      (g
        ? xe.length === 0
          ? (ie = null)
          : (ie = xe.reduce(
              (G, de, ve) => (
                G.push(de), ve < xe.length - 1 && G.push(", "), G
              ),
              []
            ))
        : (ie = Se));
    let Ne = Ie;
    !l && fe && Y && (Ne = ne.clientWidth);
    let ze;
    typeof L < "u" ? (ze = L) : (ze = b ? null : 0);
    const se = M.id || (h ? `mui-component-select-${h}` : void 0),
      me = p({}, t, { variant: j, value: D, open: Pe, error: y }),
      Me = Hf(me),
      Je = p({}, S.PaperProps, (n = S.slotProps) == null ? void 0 : n.paper),
      Ve = Ut();
    return u.jsxs(f.Fragment, {
      children: [
        u.jsx(
          Bf,
          p(
            {
              ref: Ee,
              tabIndex: ze,
              role: "combobox",
              "aria-controls": Ve,
              "aria-disabled": b ? "true" : void 0,
              "aria-expanded": Pe ? "true" : "false",
              "aria-haspopup": "listbox",
              "aria-label": s,
              "aria-labelledby": [w, se].filter(Boolean).join(" ") || void 0,
              "aria-describedby": r,
              onKeyDown: Z,
              onMouseDown: b || F ? null : Q,
              onBlur: he,
              onFocus: I,
            },
            M,
            {
              ownerState: me,
              className: ee(M.className, Me.select, c),
              id: se,
              children: Wf(ie)
                ? Ur ||
                  (Ur = u.jsx("span", {
                    className: "notranslate",
                    children: "​",
                  }))
                : ie,
            }
          )
        ),
        u.jsx(
          _f,
          p(
            {
              "aria-invalid": y,
              value: Array.isArray(D) ? D.join(",") : D,
              name: h,
              ref: pe,
              "aria-hidden": !0,
              onChange: z,
              tabIndex: -1,
              disabled: b,
              className: Me.nativeInput,
              autoFocus: a,
              ownerState: me,
            },
            _
          )
        ),
        u.jsx(zf, { as: $, className: Me.icon, ownerState: me }),
        u.jsx(
          ef,
          p(
            {
              id: `menu-${h || ""}`,
              anchorEl: ne,
              open: Pe,
              onClose: re,
              anchorOrigin: { vertical: "bottom", horizontal: "center" },
              transformOrigin: { vertical: "top", horizontal: "center" },
            },
            S,
            {
              MenuListProps: p(
                {
                  "aria-labelledby": w,
                  role: "listbox",
                  "aria-multiselectable": g ? "true" : void 0,
                  disableListWrap: !0,
                  id: Ve,
                },
                S.MenuListProps
              ),
              slotProps: p({}, S.slotProps, {
                paper: p({}, Je, {
                  style: p({ minWidth: Ne }, Je != null ? Je.style : null),
                }),
              }),
              children: He,
            }
          )
        ),
      ],
    });
  }),
  Uf = Vf,
  qf = [
    "autoWidth",
    "children",
    "classes",
    "className",
    "defaultOpen",
    "displayEmpty",
    "IconComponent",
    "id",
    "input",
    "inputProps",
    "label",
    "labelId",
    "MenuProps",
    "multiple",
    "native",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "variant",
  ],
  Kf = ["root"],
  Gf = (e) => {
    const { classes: t } = e;
    return t;
  },
  Zn = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => ft(e) && e !== "variant",
    slot: "Root",
  },
  Xf = B(Hs, Zn)(""),
  Yf = B(Xs, Zn)(""),
  Zf = B(_s, Zn)(""),
  Zs = f.forwardRef(function (t, o) {
    const n = Te({ name: "MuiSelect", props: t }),
      {
        autoWidth: r = !1,
        children: s,
        classes: a = {},
        className: l,
        defaultOpen: i = !1,
        displayEmpty: c = !1,
        IconComponent: d = js,
        id: m,
        input: b,
        inputProps: v,
        label: y,
        labelId: $,
        MenuProps: x,
        multiple: w = !1,
        native: S = !1,
        onClose: g,
        onOpen: h,
        open: C,
        renderValue: P,
        SelectDisplayProps: k,
        variant: I = "outlined",
      } = n,
      E = X(n, qf),
      A = S ? cf : Uf,
      F = Dt(),
      T = qt({ props: n, muiFormControl: F, states: ["variant", "error"] }),
      M = T.variant || I,
      L = p({}, n, { variant: M, classes: a }),
      V = Gf(L),
      j = X(V, Kf),
      _ =
        b ||
        {
          standard: u.jsx(Xf, { ownerState: L }),
          outlined: u.jsx(Yf, { label: y, ownerState: L }),
          filled: u.jsx(Zf, { ownerState: L }),
        }[M],
      D = We(o, _.ref);
    return u.jsx(f.Fragment, {
      children: f.cloneElement(
        _,
        p(
          {
            inputComponent: A,
            inputProps: p(
              {
                children: s,
                error: T.error,
                IconComponent: d,
                variant: M,
                type: void 0,
                multiple: w,
              },
              S
                ? { id: m }
                : {
                    autoWidth: r,
                    defaultOpen: i,
                    displayEmpty: c,
                    labelId: $,
                    MenuProps: x,
                    onClose: g,
                    onOpen: h,
                    open: C,
                    renderValue: P,
                    SelectDisplayProps: p({ id: m }, k),
                  },
              v,
              { classes: v ? zo(j, v.classes) : j },
              b ? b.props.inputProps : {}
            ),
          },
          ((w && S) || c) && M === "outlined" ? { notched: !0 } : {},
          { ref: D, className: ee(_.props.className, l, V.root) },
          !b && { variant: M },
          E
        )
      ),
    });
  });
Zs.muiName = "Select";
const Jf = Zs;
function Qf(e) {
  return we("MuiTooltip", e);
}
const em = Re("MuiTooltip", [
    "popper",
    "popperInteractive",
    "popperArrow",
    "popperClose",
    "tooltip",
    "tooltipArrow",
    "touch",
    "tooltipPlacementLeft",
    "tooltipPlacementRight",
    "tooltipPlacementTop",
    "tooltipPlacementBottom",
    "arrow",
  ]),
  Et = em,
  tm = [
    "arrow",
    "children",
    "classes",
    "components",
    "componentsProps",
    "describeChild",
    "disableFocusListener",
    "disableHoverListener",
    "disableInteractive",
    "disableTouchListener",
    "enterDelay",
    "enterNextDelay",
    "enterTouchDelay",
    "followCursor",
    "id",
    "leaveDelay",
    "leaveTouchDelay",
    "onClose",
    "onOpen",
    "open",
    "placement",
    "PopperComponent",
    "PopperProps",
    "slotProps",
    "slots",
    "title",
    "TransitionComponent",
    "TransitionProps",
  ];
function om(e) {
  return Math.round(e * 1e5) / 1e5;
}
const nm = (e) => {
    const {
        classes: t,
        disableInteractive: o,
        arrow: n,
        touch: r,
        placement: s,
      } = e,
      a = {
        popper: ["popper", !o && "popperInteractive", n && "popperArrow"],
        tooltip: [
          "tooltip",
          n && "tooltipArrow",
          r && "touch",
          `tooltipPlacement${U(s.split("-")[0])}`,
        ],
        arrow: ["arrow"],
      };
    return be(a, Qf, t);
  },
  rm = B(Jo, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.popper,
        !o.disableInteractive && t.popperInteractive,
        o.arrow && t.popperArrow,
        !o.open && t.popperClose,
      ];
    },
  })(({ theme: e, ownerState: t, open: o }) =>
    p(
      { zIndex: (e.vars || e).zIndex.tooltip, pointerEvents: "none" },
      !t.disableInteractive && { pointerEvents: "auto" },
      !o && { pointerEvents: "none" },
      t.arrow && {
        [`&[data-popper-placement*="bottom"] .${Et.arrow}`]: {
          top: 0,
          marginTop: "-0.71em",
          "&::before": { transformOrigin: "0 100%" },
        },
        [`&[data-popper-placement*="top"] .${Et.arrow}`]: {
          bottom: 0,
          marginBottom: "-0.71em",
          "&::before": { transformOrigin: "100% 0" },
        },
        [`&[data-popper-placement*="right"] .${Et.arrow}`]: p(
          {},
          t.isRtl
            ? { right: 0, marginRight: "-0.71em" }
            : { left: 0, marginLeft: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "100% 100%" },
          }
        ),
        [`&[data-popper-placement*="left"] .${Et.arrow}`]: p(
          {},
          t.isRtl
            ? { left: 0, marginLeft: "-0.71em" }
            : { right: 0, marginRight: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "0 0" },
          }
        ),
      }
    )
  ),
  sm = B("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.tooltip,
        o.touch && t.touch,
        o.arrow && t.tooltipArrow,
        t[`tooltipPlacement${U(o.placement.split("-")[0])}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    p(
      {
        backgroundColor: e.vars
          ? e.vars.palette.Tooltip.bg
          : _e(e.palette.grey[700], 0.92),
        borderRadius: (e.vars || e).shape.borderRadius,
        color: (e.vars || e).palette.common.white,
        fontFamily: e.typography.fontFamily,
        padding: "4px 8px",
        fontSize: e.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: "break-word",
        fontWeight: e.typography.fontWeightMedium,
      },
      t.arrow && { position: "relative", margin: 0 },
      t.touch && {
        padding: "8px 16px",
        fontSize: e.typography.pxToRem(14),
        lineHeight: `${om(16 / 14)}em`,
        fontWeight: e.typography.fontWeightRegular,
      },
      {
        [`.${Et.popper}[data-popper-placement*="left"] &`]: p(
          { transformOrigin: "right center" },
          t.isRtl
            ? p({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" })
            : p({ marginRight: "14px" }, t.touch && { marginRight: "24px" })
        ),
        [`.${Et.popper}[data-popper-placement*="right"] &`]: p(
          { transformOrigin: "left center" },
          t.isRtl
            ? p({ marginRight: "14px" }, t.touch && { marginRight: "24px" })
            : p({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" })
        ),
        [`.${Et.popper}[data-popper-placement*="top"] &`]: p(
          { transformOrigin: "center bottom", marginBottom: "14px" },
          t.touch && { marginBottom: "24px" }
        ),
        [`.${Et.popper}[data-popper-placement*="bottom"] &`]: p(
          { transformOrigin: "center top", marginTop: "14px" },
          t.touch && { marginTop: "24px" }
        ),
      }
    )
  ),
  am = B("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow,
  })(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : _e(e.palette.grey[700], 0.9),
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "currentColor",
      transform: "rotate(45deg)",
    },
  }));
let Oo = !1;
const Kr = new Aa();
let co = { x: 0, y: 0 };
function Io(e, t) {
  return (o, ...n) => {
    t && t(o, ...n), e(o, ...n);
  };
}
const im = f.forwardRef(function (t, o) {
    var n, r, s, a, l, i, c, d, m, b, v, y, $, x, w, S, g, h, C;
    const P = Te({ props: t, name: "MuiTooltip" }),
      {
        arrow: k = !1,
        children: I,
        components: E = {},
        componentsProps: A = {},
        describeChild: F = !1,
        disableFocusListener: T = !1,
        disableHoverListener: M = !1,
        disableInteractive: L = !1,
        disableTouchListener: V = !1,
        enterDelay: j = 100,
        enterNextDelay: _ = 0,
        enterTouchDelay: D = 700,
        followCursor: K = !1,
        id: ye,
        leaveDelay: Oe = 0,
        leaveTouchDelay: pe = 1500,
        onClose: ge,
        onOpen: Y,
        open: te,
        placement: fe = "bottom",
        PopperComponent: Ie,
        PopperProps: J = {},
        slotProps: ue = {},
        slots: Ee = {},
        title: ne,
        TransitionComponent: ae = wn,
        TransitionProps: Q,
      } = P,
      re = X(P, tm),
      W = f.isValidElement(I) ? I : u.jsx("span", { children: I }),
      z = En(),
      ke = Mn(),
      [Z, Pe] = f.useState(),
      [he, ie] = f.useState(null),
      Se = f.useRef(!1),
      xe = L || K,
      $e = Po(),
      He = Po(),
      Ne = Po(),
      ze = Po(),
      [se, me] = Mt({
        controlled: te,
        default: !1,
        name: "Tooltip",
        state: "open",
      });
    let Me = se;
    const Je = Ut(ye),
      Ve = f.useRef(),
      G = Tt(() => {
        Ve.current !== void 0 &&
          ((document.body.style.WebkitUserSelect = Ve.current),
          (Ve.current = void 0)),
          ze.clear();
      });
    f.useEffect(() => G, [G]);
    const de = (q) => {
        Kr.clear(), (Oo = !0), me(!0), Y && !Me && Y(q);
      },
      ve = Tt((q) => {
        Kr.start(800 + Oe, () => {
          Oo = !1;
        }),
          me(!1),
          ge && Me && ge(q),
          $e.start(z.transitions.duration.shortest, () => {
            Se.current = !1;
          });
      }),
      De = (q) => {
        (Se.current && q.type !== "touchstart") ||
          (Z && Z.removeAttribute("title"),
          He.clear(),
          Ne.clear(),
          j || (Oo && _)
            ? He.start(Oo ? _ : j, () => {
                de(q);
              })
            : de(q));
      },
      nt = (q) => {
        He.clear(),
          Ne.start(Oe, () => {
            ve(q);
          });
      },
      { isFocusVisibleRef: Kt, onBlur: Ke, onFocus: pt, ref: rt } = us(),
      [, xt] = f.useState(!1),
      mt = (q) => {
        Ke(q), Kt.current === !1 && (xt(!1), nt(q));
      },
      Bt = (q) => {
        Z || Pe(q.currentTarget), pt(q), Kt.current === !0 && (xt(!0), De(q));
      },
      zt = (q) => {
        Se.current = !0;
        const le = W.props;
        le.onTouchStart && le.onTouchStart(q);
      },
      Gt = (q) => {
        zt(q),
          Ne.clear(),
          $e.clear(),
          G(),
          (Ve.current = document.body.style.WebkitUserSelect),
          (document.body.style.WebkitUserSelect = "none"),
          ze.start(D, () => {
            (document.body.style.WebkitUserSelect = Ve.current), De(q);
          });
      },
      no = (q) => {
        W.props.onTouchEnd && W.props.onTouchEnd(q),
          G(),
          Ne.start(pe, () => {
            ve(q);
          });
      };
    f.useEffect(() => {
      if (!Me) return;
      function q(le) {
        (le.key === "Escape" || le.key === "Esc") && ve(le);
      }
      return (
        document.addEventListener("keydown", q),
        () => {
          document.removeEventListener("keydown", q);
        }
      );
    }, [ve, Me]);
    const Co = We(W.ref, rt, Pe, o);
    !ne && ne !== 0 && (Me = !1);
    const gt = f.useRef(),
      Be = (q) => {
        const le = W.props;
        le.onMouseMove && le.onMouseMove(q),
          (co = { x: q.clientX, y: q.clientY }),
          gt.current && gt.current.update();
      },
      Fe = {},
      Ue = typeof ne == "string";
    F
      ? ((Fe.title = !Me && Ue && !M ? ne : null),
        (Fe["aria-describedby"] = Me ? Je : null))
      : ((Fe["aria-label"] = Ue ? ne : null),
        (Fe["aria-labelledby"] = Me && !Ue ? Je : null));
    const Ge = p(
        {},
        Fe,
        re,
        W.props,
        {
          className: ee(re.className, W.props.className),
          onTouchStart: zt,
          ref: Co,
        },
        K ? { onMouseMove: Be } : {}
      ),
      Ct = {};
    V || ((Ge.onTouchStart = Gt), (Ge.onTouchEnd = no)),
      M ||
        ((Ge.onMouseOver = Io(De, Ge.onMouseOver)),
        (Ge.onMouseLeave = Io(nt, Ge.onMouseLeave)),
        xe || ((Ct.onMouseOver = De), (Ct.onMouseLeave = nt))),
      T ||
        ((Ge.onFocus = Io(Bt, Ge.onFocus)),
        (Ge.onBlur = Io(mt, Ge.onBlur)),
        xe || ((Ct.onFocus = Bt), (Ct.onBlur = mt)));
    const ro = f.useMemo(() => {
        var q;
        let le = [
          {
            name: "arrow",
            enabled: !!he,
            options: { element: he, padding: 4 },
          },
        ];
        return (
          (q = J.popperOptions) != null &&
            q.modifiers &&
            (le = le.concat(J.popperOptions.modifiers)),
          p({}, J.popperOptions, { modifiers: le })
        );
      }, [he, J]),
      wt = p({}, P, {
        isRtl: ke,
        arrow: k,
        disableInteractive: xe,
        placement: fe,
        PopperComponentProp: Ie,
        touch: Se.current,
      }),
      kt = nm(wt),
      Ot = (n = (r = Ee.popper) != null ? r : E.Popper) != null ? n : rm,
      ht =
        (s =
          (a = (l = Ee.transition) != null ? l : E.Transition) != null
            ? a
            : ae) != null
          ? s
          : wn,
      Pt = (i = (c = Ee.tooltip) != null ? c : E.Tooltip) != null ? i : sm,
      O = (d = (m = Ee.arrow) != null ? m : E.Arrow) != null ? d : am,
      R = uo(
        Ot,
        p({}, J, (b = ue.popper) != null ? b : A.popper, {
          className: ee(
            kt.popper,
            J == null ? void 0 : J.className,
            (v = (y = ue.popper) != null ? y : A.popper) == null
              ? void 0
              : v.className
          ),
        }),
        wt
      ),
      H = uo(ht, p({}, Q, ($ = ue.transition) != null ? $ : A.transition), wt),
      N = uo(
        Pt,
        p({}, (x = ue.tooltip) != null ? x : A.tooltip, {
          className: ee(
            kt.tooltip,
            (w = (S = ue.tooltip) != null ? S : A.tooltip) == null
              ? void 0
              : w.className
          ),
        }),
        wt
      ),
      oe = uo(
        O,
        p({}, (g = ue.arrow) != null ? g : A.arrow, {
          className: ee(
            kt.arrow,
            (h = (C = ue.arrow) != null ? C : A.arrow) == null
              ? void 0
              : h.className
          ),
        }),
        wt
      );
    return u.jsxs(f.Fragment, {
      children: [
        f.cloneElement(W, Ge),
        u.jsx(
          Ot,
          p(
            {
              as: Ie ?? Jo,
              placement: fe,
              anchorEl: K
                ? {
                    getBoundingClientRect: () => ({
                      top: co.y,
                      left: co.x,
                      right: co.x,
                      bottom: co.y,
                      width: 0,
                      height: 0,
                    }),
                  }
                : Z,
              popperRef: gt,
              open: Z ? Me : !1,
              id: Je,
              transition: !0,
            },
            Ct,
            R,
            {
              popperOptions: ro,
              children: ({ TransitionProps: q }) =>
                u.jsx(
                  ht,
                  p({ timeout: z.transitions.duration.shorter }, q, H, {
                    children: u.jsxs(
                      Pt,
                      p({}, N, {
                        children: [
                          ne,
                          k ? u.jsx(O, p({}, oe, { ref: ie })) : null,
                        ],
                      })
                    ),
                  })
                ),
            }
          )
        ),
      ],
    });
  }),
  Mo = im;
function lm(e) {
  return we("MuiSwitch", e);
}
const cm = Re("MuiSwitch", [
    "root",
    "edgeStart",
    "edgeEnd",
    "switchBase",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
    "checked",
    "disabled",
    "input",
    "thumb",
    "track",
  ]),
  qe = cm,
  um = ["className", "color", "edge", "size", "sx"],
  dm = Fn(),
  pm = (e) => {
    const {
        classes: t,
        edge: o,
        size: n,
        color: r,
        checked: s,
        disabled: a,
      } = e,
      l = {
        root: ["root", o && `edge${U(o)}`, `size${U(n)}`],
        switchBase: [
          "switchBase",
          `color${U(r)}`,
          s && "checked",
          a && "disabled",
        ],
        thumb: ["thumb"],
        track: ["track"],
        input: ["input"],
      },
      i = be(l, lm, t);
    return p({}, t, i);
  },
  fm = B("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [t.root, o.edge && t[`edge${U(o.edge)}`], t[`size${U(o.size)}`]];
    },
  })({
    display: "inline-flex",
    width: 34 + 12 * 2,
    height: 14 + 12 * 2,
    overflow: "hidden",
    padding: 12,
    boxSizing: "border-box",
    position: "relative",
    flexShrink: 0,
    zIndex: 0,
    verticalAlign: "middle",
    "@media print": { colorAdjust: "exact" },
    variants: [
      { props: { edge: "start" }, style: { marginLeft: -8 } },
      { props: { edge: "end" }, style: { marginRight: -8 } },
      {
        props: { size: "small" },
        style: {
          width: 40,
          height: 24,
          padding: 7,
          [`& .${qe.thumb}`]: { width: 16, height: 16 },
          [`& .${qe.switchBase}`]: {
            padding: 4,
            [`&.${qe.checked}`]: { transform: "translateX(16px)" },
          },
        },
      },
    ],
  }),
  mm = B(Yu, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.switchBase,
        { [`& .${qe.input}`]: t.input },
        o.color !== "default" && t[`color${U(o.color)}`],
      ];
    },
  })(
    ({ theme: e }) => ({
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      color: e.vars
        ? e.vars.palette.Switch.defaultColor
        : `${
            e.palette.mode === "light"
              ? e.palette.common.white
              : e.palette.grey[300]
          }`,
      transition: e.transitions.create(["left", "transform"], {
        duration: e.transitions.duration.shortest,
      }),
      [`&.${qe.checked}`]: { transform: "translateX(20px)" },
      [`&.${qe.disabled}`]: {
        color: e.vars
          ? e.vars.palette.Switch.defaultDisabledColor
          : `${
              e.palette.mode === "light"
                ? e.palette.grey[100]
                : e.palette.grey[600]
            }`,
      },
      [`&.${qe.checked} + .${qe.track}`]: { opacity: 0.5 },
      [`&.${qe.disabled} + .${qe.track}`]: {
        opacity: e.vars
          ? e.vars.opacity.switchTrackDisabled
          : `${e.palette.mode === "light" ? 0.12 : 0.2}`,
      },
      [`& .${qe.input}`]: { left: "-100%", width: "300%" },
    }),
    ({ theme: e }) => ({
      "&:hover": {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
          : _e(e.palette.action.active, e.palette.action.hoverOpacity),
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      variants: [
        ...Object.entries(e.palette)
          .filter(([, t]) => t.main && t.light)
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&.${qe.checked}`]: {
                color: (e.vars || e).palette[t].main,
                "&:hover": {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : _e(e.palette[t].main, e.palette.action.hoverOpacity),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
                [`&.${qe.disabled}`]: {
                  color: e.vars
                    ? e.vars.palette.Switch[`${t}DisabledColor`]
                    : `${
                        e.palette.mode === "light"
                          ? bn(e.palette[t].main, 0.62)
                          : vn(e.palette[t].main, 0.55)
                      }`,
                },
              },
              [`&.${qe.checked} + .${qe.track}`]: {
                backgroundColor: (e.vars || e).palette[t].main,
              },
            },
          })),
      ],
    })
  ),
  gm = B("span", {
    name: "MuiSwitch",
    slot: "Track",
    overridesResolver: (e, t) => t.track,
  })(({ theme: e }) => ({
    height: "100%",
    width: "100%",
    borderRadius: 14 / 2,
    zIndex: -1,
    transition: e.transitions.create(["opacity", "background-color"], {
      duration: e.transitions.duration.shortest,
    }),
    backgroundColor: e.vars
      ? e.vars.palette.common.onBackground
      : `${
          e.palette.mode === "light"
            ? e.palette.common.black
            : e.palette.common.white
        }`,
    opacity: e.vars
      ? e.vars.opacity.switchTrack
      : `${e.palette.mode === "light" ? 0.38 : 0.3}`,
  })),
  hm = B("span", {
    name: "MuiSwitch",
    slot: "Thumb",
    overridesResolver: (e, t) => t.thumb,
  })(({ theme: e }) => ({
    boxShadow: (e.vars || e).shadows[1],
    backgroundColor: "currentColor",
    width: 20,
    height: 20,
    borderRadius: "50%",
  })),
  vm = f.forwardRef(function (t, o) {
    const n = dm({ props: t, name: "MuiSwitch" }),
      {
        className: r,
        color: s = "primary",
        edge: a = !1,
        size: l = "medium",
        sx: i,
      } = n,
      c = X(n, um),
      d = p({}, n, { color: s, edge: a, size: l }),
      m = pm(d),
      b = u.jsx(hm, { className: m.thumb, ownerState: d });
    return u.jsxs(fm, {
      className: ee(m.root, r),
      sx: i,
      ownerState: d,
      children: [
        u.jsx(
          mm,
          p(
            {
              type: "checkbox",
              icon: b,
              checkedIcon: b,
              ref: o,
              ownerState: d,
            },
            c,
            { classes: p({}, m, { root: m.switchBase }) }
          )
        ),
        u.jsx(gm, { className: m.track, ownerState: d }),
      ],
    });
  }),
  mn = vm;
function bm(e) {
  return we("MuiTextField", e);
}
Re("MuiTextField", ["root"]);
const ym = [
    "autoComplete",
    "autoFocus",
    "children",
    "className",
    "color",
    "defaultValue",
    "disabled",
    "error",
    "FormHelperTextProps",
    "fullWidth",
    "helperText",
    "id",
    "InputLabelProps",
    "inputProps",
    "InputProps",
    "inputRef",
    "label",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "placeholder",
    "required",
    "rows",
    "select",
    "SelectProps",
    "type",
    "value",
    "variant",
  ],
  xm = { standard: Hs, filled: _s, outlined: Xs },
  Cm = (e) => {
    const { classes: t } = e;
    return be({ root: ["root"] }, bm, t);
  },
  wm = B(Ud, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  Pm = f.forwardRef(function (t, o) {
    const n = Te({ props: t, name: "MuiTextField" }),
      {
        autoComplete: r,
        autoFocus: s = !1,
        children: a,
        className: l,
        color: i = "primary",
        defaultValue: c,
        disabled: d = !1,
        error: m = !1,
        FormHelperTextProps: b,
        fullWidth: v = !1,
        helperText: y,
        id: $,
        InputLabelProps: x,
        inputProps: w,
        InputProps: S,
        inputRef: g,
        label: h,
        maxRows: C,
        minRows: P,
        multiline: k = !1,
        name: I,
        onBlur: E,
        onChange: A,
        onFocus: F,
        placeholder: T,
        required: M = !1,
        rows: L,
        select: V = !1,
        SelectProps: j,
        type: _,
        value: D,
        variant: K = "outlined",
      } = n,
      ye = X(n, ym),
      Oe = p({}, n, {
        autoFocus: s,
        color: i,
        disabled: d,
        error: m,
        fullWidth: v,
        multiline: k,
        required: M,
        select: V,
        variant: K,
      }),
      pe = Cm(Oe),
      ge = {};
    K === "outlined" &&
      (x && typeof x.shrink < "u" && (ge.notched = x.shrink), (ge.label = h)),
      V &&
        ((!j || !j.native) && (ge.id = void 0),
        (ge["aria-describedby"] = void 0));
    const Y = Ut($),
      te = y && Y ? `${Y}-helper-text` : void 0,
      fe = h && Y ? `${Y}-label` : void 0,
      Ie = xm[K],
      J = u.jsx(
        Ie,
        p(
          {
            "aria-describedby": te,
            autoComplete: r,
            autoFocus: s,
            defaultValue: c,
            fullWidth: v,
            multiline: k,
            name: I,
            rows: L,
            maxRows: C,
            minRows: P,
            type: _,
            value: D,
            id: Y,
            inputRef: g,
            onBlur: E,
            onChange: A,
            onFocus: F,
            placeholder: T,
            inputProps: w,
          },
          ge,
          S
        )
      );
    return u.jsxs(
      wm,
      p(
        {
          className: ee(pe.root, l),
          disabled: d,
          error: m,
          fullWidth: v,
          ref: o,
          required: M,
          color: i,
          variant: K,
          ownerState: Oe,
        },
        ye,
        {
          children: [
            h != null &&
              h !== "" &&
              u.jsx(Sp, p({ htmlFor: Y, id: fe }, x, { children: h })),
            V
              ? u.jsx(
                  Jf,
                  p(
                    {
                      "aria-describedby": te,
                      id: Y,
                      labelId: fe,
                      value: D,
                      input: J,
                    },
                    j,
                    { children: a }
                  )
                )
              : J,
            y && u.jsx(ap, p({ id: te }, b, { children: y })),
          ],
        }
      )
    );
  }),
  Jn = Pm,
  Gr = "",
  Sm = "",
  $m = "";
function Rm() {
  const [e, t] = f.useState(0);
  f.useEffect(() => {
    ja(Gr, (r) => {
      r && t(+r);
    });
  }, []);
  const o = (r, s) => {
      t(s),
        Le("Rating Pressed", { value: s }),
        s > 3
          ? window.open(`${$m}?rating=${s}`, "_blank", "noreferrer")
          : window.open(`${Sm}?rating=${s}`, "_blank", "noreferrer"),
        Na(Gr, s);
    },
    n = Fa({
      direction: window
        .getComputedStyle(document.body, null)
        .getPropertyValue("direction"),
    });
  return u.jsx(u.Fragment, {
    children: u.jsxs(jt, {
      direction: "row",
      className: "rating-widget",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "3px",
    }),
  });
}
const km = chrome.runtime.getURL("/img/recorder.svg"),
  Om = ({
    top: e,
    left: t,
    isScrolling: o = !1,
    onStart: n = () => {},
    onEnd: r = () => {},
  }) => {
    const [s, a] = f.useState(!1),
      [l, i] = f.useState(1.2);
    return (
      f.useEffect(() => {
        Ba(() => {
          n(), a(!0);
        });
      }, [n]),
      f.useEffect(() => {
        za(() => {
          r(), a(!1);
        });
      }, [r]),
      f.useEffect(() => {
        _a(i);
      }, []),
      u.jsxs(Pn, {
        children: [
          u.jsx("style", {
            children: Da.replace("RECORDER_URL", km).replace(/45px/g, "100px"),
          }),
          u.jsx("div", {
            className: "recorder-wrapper",
            style: { left: t, top: e, ...(o ? { transition: "none" } : {}) },
            children: u.jsx("div", {
              className: "recorder-button" + (s ? " active" : ""),
              style: { marginLeft: "-50px", marginTop: "-50px", "--scale": l },
              onClick: () => {
                var c;
                Wa(
                  fr,
                  (((c = fr) == null ? void 0 : c.innerText.length) || 1) - 1
                ),
                  s ? fs() : Ha(),
                  Le("Button Pressed", {
                    name: "Recorder (SidePanel)",
                    toState: s ? "off" : "on",
                    host: At(),
                  });
              },
            }),
          }),
        ],
      })
    );
  };
var Qn = {},
  Im = oo;
Object.defineProperty(Qn, "__esModule", { value: !0 });
var No = (Qn.default = void 0),
  Tm = Im(to()),
  Em = u;
No = Qn.default = (0, Tm.default)(
  (0, Em.jsx)("path", {
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z",
  }),
  "ContentCopy"
);
var er = {},
  Mm = oo;
Object.defineProperty(er, "__esModule", { value: !0 });
var Js = (er.default = void 0),
  Am = Mm(to()),
  jm = u;
Js = er.default = (0, Am.default)(
  (0, jm.jsx)("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z",
  }),
  "Refresh"
);
var tr = {},
  Fm = oo;
Object.defineProperty(tr, "__esModule", { value: !0 });
var Qs = (tr.default = void 0),
  Lm = Fm(to()),
  Nm = u;
Qs = tr.default = (0, Lm.default)(
  (0, Nm.jsx)("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6",
  }),
  "Settings"
);
var or = {},
  Dm = oo;
Object.defineProperty(or, "__esModule", { value: !0 });
var ea = (or.default = void 0),
  Bm = Dm(to()),
  zm = u;
ea = or.default = (0, Bm.default)(
  (0, zm.jsx)("path", {
    d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z",
  }),
  "History"
);
function je(e) {
  return (
    e != null && typeof e == "object" && e["@@functional/placeholder"] === !0
  );
}
function it(e) {
  return function t(o) {
    return arguments.length === 0 || je(o) ? t : e.apply(this, arguments);
  };
}
function at(e) {
  return function t(o, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return je(o)
          ? t
          : it(function (r) {
              return e(o, r);
            });
      default:
        return je(o) && je(n)
          ? t
          : je(o)
          ? it(function (r) {
              return e(r, n);
            })
          : je(n)
          ? it(function (r) {
              return e(o, r);
            })
          : e(o, n);
    }
  };
}
function nn(e, t) {
  switch (e) {
    case 0:
      return function () {
        return t.apply(this, arguments);
      };
    case 1:
      return function (o) {
        return t.apply(this, arguments);
      };
    case 2:
      return function (o, n) {
        return t.apply(this, arguments);
      };
    case 3:
      return function (o, n, r) {
        return t.apply(this, arguments);
      };
    case 4:
      return function (o, n, r, s) {
        return t.apply(this, arguments);
      };
    case 5:
      return function (o, n, r, s, a) {
        return t.apply(this, arguments);
      };
    case 6:
      return function (o, n, r, s, a, l) {
        return t.apply(this, arguments);
      };
    case 7:
      return function (o, n, r, s, a, l, i) {
        return t.apply(this, arguments);
      };
    case 8:
      return function (o, n, r, s, a, l, i, c) {
        return t.apply(this, arguments);
      };
    case 9:
      return function (o, n, r, s, a, l, i, c, d) {
        return t.apply(this, arguments);
      };
    case 10:
      return function (o, n, r, s, a, l, i, c, d, m) {
        return t.apply(this, arguments);
      };
    default:
      throw new Error(
        "First argument to _arity must be a non-negative integer no greater than ten"
      );
  }
}
function ta(e, t, o) {
  return function () {
    for (
      var n = [], r = 0, s = e, a = 0, l = !1;
      a < t.length || r < arguments.length;

    ) {
      var i;
      a < t.length && (!je(t[a]) || r >= arguments.length)
        ? (i = t[a])
        : ((i = arguments[r]), (r += 1)),
        (n[a] = i),
        je(i) ? (l = !0) : (s -= 1),
        (a += 1);
    }
    return !l && s <= 0 ? o.apply(this, n) : nn(Math.max(0, s), ta(e, n, o));
  };
}
var _m = at(function (t, o) {
  return t === 1 ? it(o) : nn(t, ta(t, [], o));
});
const Wm = _m;
function oa(e) {
  return function t(o, n, r) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return je(o)
          ? t
          : at(function (s, a) {
              return e(o, s, a);
            });
      case 2:
        return je(o) && je(n)
          ? t
          : je(o)
          ? at(function (s, a) {
              return e(s, n, a);
            })
          : je(n)
          ? at(function (s, a) {
              return e(o, s, a);
            })
          : it(function (s) {
              return e(o, n, s);
            });
      default:
        return je(o) && je(n) && je(r)
          ? t
          : je(o) && je(n)
          ? at(function (s, a) {
              return e(s, a, r);
            })
          : je(o) && je(r)
          ? at(function (s, a) {
              return e(s, n, a);
            })
          : je(n) && je(r)
          ? at(function (s, a) {
              return e(o, s, a);
            })
          : je(o)
          ? it(function (s) {
              return e(s, n, r);
            })
          : je(n)
          ? it(function (s) {
              return e(o, s, r);
            })
          : je(r)
          ? it(function (s) {
              return e(o, n, s);
            })
          : e(o, n, r);
    }
  };
}
const nr =
  Array.isArray ||
  function (t) {
    return (
      t != null &&
      t.length >= 0 &&
      Object.prototype.toString.call(t) === "[object Array]"
    );
  };
function Hm(e) {
  return e != null && typeof e["@@transducer/step"] == "function";
}
function na(e, t, o) {
  return function () {
    if (arguments.length === 0) return o();
    var n = arguments[arguments.length - 1];
    if (!nr(n)) {
      for (var r = 0; r < e.length; ) {
        if (typeof n[e[r]] == "function")
          return n[e[r]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        r += 1;
      }
      if (Hm(n)) {
        var s = t.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return s(n);
      }
    }
    return o.apply(this, arguments);
  };
}
const Do = {
  init: function () {
    return this.xf["@@transducer/init"]();
  },
  result: function (e) {
    return this.xf["@@transducer/result"](e);
  },
};
function On(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var Xr = Object.prototype.toString,
  Vm = (function () {
    return Xr.call(arguments) === "[object Arguments]"
      ? function (t) {
          return Xr.call(t) === "[object Arguments]";
        }
      : function (t) {
          return On("callee", t);
        };
  })();
const Um = Vm;
var qm = !{ toString: null }.propertyIsEnumerable("toString"),
  Yr = [
    "constructor",
    "valueOf",
    "isPrototypeOf",
    "toString",
    "propertyIsEnumerable",
    "hasOwnProperty",
    "toLocaleString",
  ],
  Zr = (function () {
    return arguments.propertyIsEnumerable("length");
  })(),
  Km = function (t, o) {
    for (var n = 0; n < t.length; ) {
      if (t[n] === o) return !0;
      n += 1;
    }
    return !1;
  },
  Gm = it(
    typeof Object.keys == "function" && !Zr
      ? function (t) {
          return Object(t) !== t ? [] : Object.keys(t);
        }
      : function (t) {
          if (Object(t) !== t) return [];
          var o,
            n,
            r = [],
            s = Zr && Um(t);
          for (o in t) On(o, t) && (!s || o !== "length") && (r[r.length] = o);
          if (qm)
            for (n = Yr.length - 1; n >= 0; )
              (o = Yr[n]), On(o, t) && !Km(r, o) && (r[r.length] = o), (n -= 1);
          return r;
        }
  );
const ra = Gm;
function Xm(e, t) {
  for (var o = 0, n = t.length, r = Array(n); o < n; )
    (r[o] = e(t[o])), (o += 1);
  return r;
}
function sa(e, t, o) {
  for (var n = 0, r = o.length; n < r; ) (t = e(t, o[n])), (n += 1);
  return t;
}
function Ym(e, t) {
  for (var o = 0, n = t.length, r = []; o < n; )
    e(t[o]) && (r[r.length] = t[o]), (o += 1);
  return r;
}
function Zm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
var Jm = (function () {
  function e(t, o) {
    (this.xf = o), (this.f = t);
  }
  return (
    (e.prototype["@@transducer/init"] = Do.init),
    (e.prototype["@@transducer/result"] = Do.result),
    (e.prototype["@@transducer/step"] = function (t, o) {
      return this.f(o) ? this.xf["@@transducer/step"](t, o) : t;
    }),
    e
  );
})();
function Qm(e) {
  return function (t) {
    return new Jm(e, t);
  };
}
var eg = at(
  na(["fantasy-land/filter", "filter"], Qm, function (e, t) {
    return Zm(t)
      ? sa(
          function (o, n) {
            return e(t[n]) && (o[n] = t[n]), o;
          },
          {},
          ra(t)
        )
      : Ym(e, t);
  })
);
const tg = eg;
var og = (function () {
    function e(t, o) {
      (this.xf = o), (this.f = t);
    }
    return (
      (e.prototype["@@transducer/init"] = Do.init),
      (e.prototype["@@transducer/result"] = Do.result),
      (e.prototype["@@transducer/step"] = function (t, o) {
        return this.xf["@@transducer/step"](t, this.f(o));
      }),
      e
    );
  })(),
  ng = function (t) {
    return function (o) {
      return new og(t, o);
    };
  };
const rg = ng;
var sg = at(
  na(["fantasy-land/map", "map"], rg, function (t, o) {
    switch (Object.prototype.toString.call(o)) {
      case "[object Function]":
        return Wm(o.length, function () {
          return t.call(this, o.apply(this, arguments));
        });
      case "[object Object]":
        return sa(
          function (n, r) {
            return (n[r] = t(o[r])), n;
          },
          {},
          ra(o)
        );
      default:
        return Xm(t, o);
    }
  })
);
const Jr = sg,
  ag =
    Number.isInteger ||
    function (t) {
      return t << 0 === t;
    };
function aa(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function ig(e, t) {
  var o = e < 0 ? t.length + e : e;
  return aa(t) ? t.charAt(o) : t[o];
}
var lg = at(function (t, o) {
  if (o != null) return ag(t) ? ig(t, o) : o[t];
});
const Qr = lg;
var cg = it(function (t) {
  return nr(t)
    ? !0
    : !t || typeof t != "object" || aa(t)
    ? !1
    : t.length === 0
    ? !0
    : t.length > 0
    ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1)
    : !1;
});
const ug = cg;
var es = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function dg(e, t, o) {
  return function (r, s, a) {
    if (ug(a)) return e(r, s, a);
    if (a == null) return s;
    if (typeof a["fantasy-land/reduce"] == "function")
      return t(r, s, a, "fantasy-land/reduce");
    if (a[es] != null) return o(r, s, a[es]());
    if (typeof a.next == "function") return o(r, s, a);
    if (typeof a.reduce == "function") return t(r, s, a, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function pg(e, t, o) {
  for (var n = 0, r = o.length; n < r; ) {
    if (
      ((t = e["@@transducer/step"](t, o[n])), t && t["@@transducer/reduced"])
    ) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
var fg = at(function (t, o) {
  return nn(t.length, function () {
    return t.apply(o, arguments);
  });
});
const mg = fg;
function gg(e, t, o) {
  for (var n = o.next(); !n.done; ) {
    if (
      ((t = e["@@transducer/step"](t, n.value)), t && t["@@transducer/reduced"])
    ) {
      t = t["@@transducer/value"];
      break;
    }
    n = o.next();
  }
  return e["@@transducer/result"](t);
}
function hg(e, t, o, n) {
  return e["@@transducer/result"](o[n](mg(e["@@transducer/step"], e), t));
}
var vg = dg(pg, hg, gg);
const bg = vg;
var yg = (function () {
  function e(t) {
    this.f = t;
  }
  return (
    (e.prototype["@@transducer/init"] = function () {
      throw new Error("init not implemented on XWrap");
    }),
    (e.prototype["@@transducer/result"] = function (t) {
      return t;
    }),
    (e.prototype["@@transducer/step"] = function (t, o) {
      return this.f(t, o);
    }),
    e
  );
})();
function xg(e) {
  return new yg(e);
}
var Cg = oa(function (e, t, o) {
  return bg(typeof e == "function" ? xg(e) : e, t, o);
});
const ia = Cg;
function wg(e, t) {
  return function () {
    return t.call(this, e.apply(this, arguments));
  };
}
function la(e, t) {
  return function () {
    var o = arguments.length;
    if (o === 0) return t();
    var n = arguments[o - 1];
    return nr(n) || typeof n[e] != "function"
      ? t.apply(this, arguments)
      : n[e].apply(n, Array.prototype.slice.call(arguments, 0, o - 1));
  };
}
var Pg = oa(
  la("slice", function (t, o, n) {
    return Array.prototype.slice.call(n, t, o);
  })
);
const ca = Pg;
var Sg = it(la("tail", ca(1, 1 / 0)));
const $g = Sg;
function ts() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return nn(arguments[0].length, ia(wg, arguments[0], $g(arguments)));
}
var Rg = at(function (e, t) {
  for (var o = [], n = 0, r = t.length; n < r; ) {
    for (var s = n + 1; s < r && e(t[s - 1], t[s]); ) s += 1;
    o.push(t.slice(n, s)), (n = s);
  }
  return o;
});
const os = Rg;
var rr = {},
  kg = oo;
Object.defineProperty(rr, "__esModule", { value: !0 });
var In = (rr.default = void 0),
  Og = kg(to()),
  Ig = u;
In = rr.default = (0, Og.default)(
  (0, Ig.jsx)("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z",
  }),
  "Delete"
);
function Tg(e, t) {
  const o = f.useContext(e);
  if (o == null) throw new Error(`context "${t}" was used without a Provider`);
  return o;
}
var Eg = function (e, t, o, n, r, s, a, l) {
    if (!e) {
      var i;
      if (t === void 0)
        i = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var c = [o, n, r, s, a, l],
          d = 0;
        (i = new Error(
          t.replace(/%s/g, function () {
            return c[d++];
          })
        )),
          (i.name = "Invariant Violation");
      }
      throw ((i.framesToPop = 1), i);
    }
  },
  Mg = Eg;
const Tn = Va(Mg),
  ua = f.createContext(null),
  sr = f.createContext(void 0),
  Ag = f.createContext({});
function ar() {
  return f.useContext(Ag);
}
const ir = { alert: "Alert", confirm: "Confirm", cancel: "Cancel", ok: "Ok" };
function Bo(e) {
  const [t, o] = f.useState(!1);
  return {
    onClick: async () => {
      try {
        o(!0), await e();
      } finally {
        o(!1);
      }
    },
    loading: t,
  };
}
function jg({ open: e, payload: t, onClose: o }) {
  const n = f.useContext(sr),
    r = ar(),
    s = { ...ir, ...r },
    a = Bo(() => o());
  return u.jsxs(qn, {
    maxWidth: "xs",
    fullWidth: !0,
    open: e,
    onClose: () => o(),
    container: n == null ? void 0 : n.document.body,
    children: [
      u.jsx(Xn, { children: t.title ?? s.alert }),
      u.jsx(Gn, { children: t.msg }),
      u.jsx(Kn, {
        children: u.jsx(Xt, { disabled: !e, ...a, children: t.okText ?? s.ok }),
      }),
    ],
  });
}
function Fg({ open: e, payload: t, onClose: o }) {
  const n = f.useContext(sr),
    r = ar(),
    s = { ...ir, ...r },
    a = Bo(() => o(!1)),
    l = Bo(() => o(!0));
  return u.jsxs(qn, {
    maxWidth: "xs",
    fullWidth: !0,
    open: e,
    onClose: () => o(!1),
    container: n == null ? void 0 : n.document.body,
    children: [
      u.jsx(Xn, { children: t.title ?? s.confirm }),
      u.jsx(Gn, { children: t.msg }),
      u.jsxs(Kn, {
        children: [
          u.jsx(Xt, {
            autoFocus: !0,
            disabled: !e,
            ...a,
            children: t.cancelText ?? s.cancel,
          }),
          u.jsx(Xt, {
            color: t.severity,
            disabled: !e,
            ...l,
            children: t.okText ?? s.ok,
          }),
        ],
      }),
    ],
  });
}
function Lg({ open: e, payload: t, onClose: o }) {
  const n = f.useContext(sr),
    r = ar(),
    s = { ...ir, ...r },
    [a, l] = f.useState(""),
    i = Bo(() => o(null)),
    [c, d] = f.useState(!1),
    m = "input";
  return u.jsxs(qn, {
    maxWidth: "xs",
    fullWidth: !0,
    open: e,
    onClose: () => o(null),
    PaperProps: {
      component: "form",
      onSubmit: async (b) => {
        b.preventDefault();
        try {
          d(!0);
          const y = new FormData(b.currentTarget).get(m) ?? "";
          Tn(typeof y == "string", "Value must come from a text input"),
            await o(y);
        } finally {
          d(!1);
        }
      },
    },
    container: n == null ? void 0 : n.document.body,
    children: [
      u.jsx(Xn, { children: t.title ?? s.confirm }),
      u.jsxs(Gn, {
        children: [
          u.jsxs(Ed, { children: [t.msg, " "] }),
          u.jsx(Jn, {
            autoFocus: !0,
            required: !0,
            margin: "dense",
            id: "name",
            name: m,
            type: "text",
            fullWidth: !0,
            variant: "standard",
            value: a,
            onChange: (b) => l(b.target.value),
          }),
        ],
      }),
      u.jsxs(Kn, {
        children: [
          u.jsx(Xt, { disabled: !e, ...i, children: t.cancelText ?? s.cancel }),
          u.jsx(Xt, {
            disabled: !e,
            loading: c,
            type: "submit",
            children: t.okText ?? s.ok,
          }),
        ],
      }),
    ],
  });
}
function Ng() {
  const { open: e, close: t } = Tg(ua),
    o = f.useCallback(
      async (s, { onClose: a, ...l } = {}) =>
        e(jg, { ...l, msg: s }, { onClose: a }),
      [e]
    ),
    n = f.useCallback(
      async (s, { onClose: a, ...l } = {}) =>
        e(Fg, { ...l, msg: s }, { onClose: a }),
      [e]
    ),
    r = f.useCallback(
      async (s, { onClose: a, ...l } = {}) =>
        e(Lg, { ...l, msg: s }, { onClose: a }),
      [e]
    );
  return f.useMemo(
    () => ({ alert: o, confirm: n, prompt: r, open: e, close: t }),
    [o, t, n, e, r]
  );
}
const Dg = typeof window < "u" ? f.useLayoutEffect : f.useEffect,
  Bg = Dg;
function gn(e) {
  const t = f.useRef(e);
  return (
    Bg(() => {
      t.current = e;
    }),
    f.useRef((...o) => (0, t.current)(...o)).current
  );
}
function zg(e) {
  const { children: t, unmountAfter: o = 1e3 } = e,
    [n, r] = f.useState([]),
    s = f.useId(),
    a = f.useRef(0),
    l = gn(function (b, v, y = {}) {
      const { onClose: $ = async () => {} } = y;
      let x;
      const w = new Promise((h) => {
        x = h;
      });
      Tn(x, "resolve not set");
      const S = `${s}-${a.current}`;
      a.current += 1;
      const g = {
        key: S,
        open: !0,
        promise: w,
        Component: b,
        payload: v,
        onClose: $,
        resolve: x,
      };
      return r((h) => [...h, g]), w;
    }),
    i = gn(function (b) {
      r((v) => v.map((y) => (y.promise === b ? { ...y, open: !1 } : y))),
        setTimeout(() => {
          r((v) => v.filter((y) => y.promise !== b));
        }, o);
    }),
    c = gn(async function (b, v) {
      const y = n.find(($) => $.promise === b);
      return (
        Tn(y, "dialog not found"), await y.onClose(v), y.resolve(v), i(b), b
      );
    }),
    d = f.useMemo(() => ({ open: l, close: c }), [l, c]);
  return u.jsxs(ua.Provider, {
    value: d,
    children: [
      t,
      n.map(({ key: m, open: b, Component: v, payload: y, promise: $ }) =>
        u.jsx(
          v,
          {
            payload: y,
            open: b,
            onClose: async (x) => {
              await c($, x);
            },
          },
          m
        )
      ),
    ],
  });
}
const _g = Date.now(),
  da = ({ lastDaysAmountShown: e, isFontEnlarged: t }) => {
    const [o, n] = f.useState(!1),
      [r, s] = f.useState([]),
      a = Ng();
    f.useEffect(() => {
      Le("Page Opened", { page: "Side Panel / History", host: At() }),
        chrome.storage.local.get(["history"]).then((c) => {
          s(c.history ?? []);
        });
      const i = (c) => {
        c.type === "saveToHistory" &&
          chrome.storage.local.get("history").then((d) => {
            s([...d.history, { text: c.payload, date: Date.now() }]);
          });
      };
      return (
        chrome.runtime.onMessage.addListener(i),
        () => {
          chrome.runtime.onMessage.removeListener(i);
        }
      );
    }, []);
    const l = ts(
      tg(Qr("text")),
      os((i, c) => i.date - c.date < 5e3),
      Jr(
        (i) => (
          (i[0].text = ts(
            Jr(Qr("text")),
            ia((c, d) => `${c} ${d}`.trim(), "")
          )(i)),
          i[0]
        )
      ),
      os((i, c) => St(i.date) === St(c.date)),
      ca(0, e)
    )(r.sort((i, c) => (i.date < c.date ? 1 : -1)));
    return l.length === 0 && e
      ? u.jsxs("div", {
          style: { margin: "0 10px", fontSize: "x-large" },
          children: [
            u.jsx(vs, {
              severity: "info",
              children: "Just press the record button and begin your meeting!",
            }),
          ],
        })
      : u.jsxs(u.Fragment, {
          children: [
            l.length === 1
              ? u.jsx(Lt, {
                  align: "center",
                  variant: "h6",
                  fontSize: "large !important",
                  marginTop: "0 !important",
                  children: "Recorded text",
                })
              : null,
            u.jsx(jt, {
              style: {
                padding: e ? 0 : "15px",
                marginTop: "0",
                overflow: "scroll",
              },
              spacing: 1,
              children: l.map((i) =>
                u.jsxs(
                  "div",
                  {
                    className: "history-day-notes",
                    children: [
                      St(i[0].date) === St(_g) && l.length === 1
                        ? null
                        : u.jsxs(Lt, {
                            className: "history-day-notes-date",
                            children: [
                              u.jsx("strong", { children: St(i[0].date) }),
                              u.jsx(tt, {
                                size: "small",
                                "aria-label": "copy",
                                color: "inherit",
                                onClick: () => {
                                  Sn(`${St(i[0].date)}
${i.map(({ date: c, text: d }) => `[${mr(c)}]: ${d}`).join(`
`)}`),
                                    n(!0),
                                    Le("Button Pressed", {
                                      name: "Copy Day Notes",
                                    });
                                },
                                children: u.jsx(No, { fontSize: "small" }),
                              }),
                              u.jsx(tt, {
                                size: "small",
                                "aria-label": "delete",
                                color: "inherit",
                                onClick: async () => {
                                  (await a.confirm(
                                    `Are you sure you want to delete all records for the day "${St(
                                      i[0].date
                                    )}"?`,
                                    { title: "" }
                                  )) &&
                                    (s(
                                      r.filter(
                                        (c) => St(i[0].date) !== St(c.date)
                                      )
                                    ),
                                    chrome.runtime.sendMessage({
                                      type: "removeHistoryDay",
                                      payload: i[0].date,
                                    }),
                                    Le("Button Pressed", {
                                      name: "Delete Day Notes",
                                    }));
                                },
                                children: u.jsx(In, { fontSize: "small" }),
                              }),
                            ],
                          }),
                      i.map(({ date: c, text: d }) =>
                        u.jsxs(
                          "p",
                          {
                            className: "history-record",
                            style: { fontSize: t ? "x-large" : void 0 },
                            children: [
                              "[",
                              mr(c),
                              "]: ",
                              d,
                              u.jsx(tt, {
                                size: "small",
                                "aria-label": "copy",
                                color: "inherit",
                                onClick: () => {
                                  Sn(d),
                                    n(!0),
                                    Le("Button Pressed", {
                                      name: "Copy History Record",
                                    });
                                },
                                children: u.jsx(No, { fontSize: "small" }),
                              }),
                              u.jsx(tt, {
                                size: "small",
                                "aria-label": "delete",
                                color: "inherit",
                                onClick: () => {
                                  s(r.filter((m) => c !== m.date)),
                                    chrome.runtime.sendMessage({
                                      type: "removeHistoryItem",
                                      payload: c,
                                    }),
                                    Le("Button Pressed", {
                                      name: "Delete Day Notes",
                                    });
                                },
                                children: u.jsx(In, { fontSize: "small" }),
                              }),
                            ],
                          },
                          c
                        )
                      ),
                    ],
                  },
                  i[0].date
                )
              ),
            }),
            u.jsx(ds, {
              anchorOrigin: { vertical: "bottom", horizontal: "right" },
              open: o,
              onClose: () => n(!1),
              autoHideDuration: 1e3,
              message: "Copied!",
              action: u.jsx(tt, {
                size: "small",
                "aria-label": "close",
                color: "inherit",
                onClick: () => {
                  n(!1), Le("Button Pressed", { name: "Hide Copy Warning" });
                },
                children: u.jsx(ps, { fontSize: "small" }),
              }),
            }),
          ],
        });
  },
  ns = `chrome://settings/content/siteDetails?site=chrome-extension://${chrome.runtime.id}/`,
  rs = localStorage.getItem("isGranted") === "1";
let hn;
const Wg = ({ setPage: e, isFontEnlarged: t }) => {
    const [o, n] = f.useState(!1),
      [r, s] = f.useState(Ao),
      [a, l] = f.useState(""),
      [i, c] = f.useState([]);
    return (
      f.useEffect(
        () => (
          Le("Page Opened", { page: "Side Panel", host: At() }),
          chrome.storage.local.get(["language", "history"]).then((d) => {
            s(d.language ?? Ao);
          }),
          Ua((d) => {
            l(d);
          }),
          () => {
            fs();
          }
        ),
        []
      ),
      u.jsxs(u.Fragment, {
        children: [
          u.jsxs(jt, {
            style: { padding: "0 15px", maxHeight: "100%" },
            spacing: 1,
            children: [
              u.jsxs(jt, {
                style: { marginTop: "15px" },
                direction: "row",
                children: [
                  u.jsx(Fs, {
                    blurOnSelect: !0,
                    disableClearable: !0,
                    openOnFocus: !0,
                    fullWidth: !0,
                    size: "small",
                    value: jo.find((d) => d.tag === r),
                    onChange: (d, m) => {
                      m &&
                        (s(m.tag),
                        chrome.runtime.sendMessage({
                          type: "setLanguage",
                          payload: m.tag,
                        }),
                        Le("Settings Updated", {
                          param: "lang",
                          value: m.tag,
                          host: At(),
                        }));
                    },
                    options: jo,
                    renderInput: (d) => u.jsx(Jn, { ...d, label: "Language" }),
                  }),
                  u.jsx(Mo, {
                    arrow: !0,
                    title: "Settings",
                    placement: "top",
                    children: u.jsx(tt, {
                      "aria-label": "settings",
                      style: { marginLeft: "5px" },
                      onClick: () => {
                        Le("Button Pressed", { name: "Settings" }),
                          e("settings");
                      },
                      children: u.jsx(Qs, {}),
                    }),
                  }),
                  u.jsx(Mo, {
                    arrow: !0,
                    title: "Recognition History",
                    placement: "top-start",
                    children: u.jsx(tt, {
                      "aria-label": "history",
                      onClick: () => {
                        Le("Button Pressed", { name: "History" }), e("history");
                      },
                      children: u.jsx(ea, {}),
                    }),
                  }),
                ],
              }),
              rs &&
                u.jsxs(u.Fragment, {
                  children: [
                    u.jsx("div", {
                      className: "recorder-button-wrapper",
                      children: u.jsx(Om, {
                        left: "50%",
                        top: "50%",
                        onStart: () => l(""),
                        onEnd: () => c([...i, { text: a, date: Date.now() }]),
                      }),
                    }),
                    a
                      ? u.jsxs(u.Fragment, {
                          children: [
                            u.jsx(jt, {
                              style: { marginTop: "-30px" },
                              direction: "row-reverse",
                              children: u.jsx(Mo, {
                                arrow: !0,
                                title: "Copy Text",
                                placement: "top-start",
                                children: u.jsx(tt, {
                                  size: "small",
                                  "aria-label": "copy",
                                  color: "inherit",
                                  onClick: () => {
                                    Sn(a),
                                      n(!0),
                                      Le("Button Pressed", {
                                        name: "Copy Last Transcription",
                                      });
                                  },
                                  children: u.jsx(No, { fontSize: "small" }),
                                }),
                              }),
                            }),
                            u.jsx("div", {
                              className: "transcription-text",
                              style: { fontSize: t ? "x-large" : void 0 },
                              children: a,
                            }),
                          ],
                        })
                      : u.jsx(u.Fragment, {
                          children: u.jsx(da, {
                            lastDaysAmountShown: 1,
                            isFontEnlarged: t,
                          }),
                        }),
                  ],
                }),
            ],
          }),
          !rs &&
            u.jsxs(vs, {
              severity: "warning",
              style: { marginTop: "25px" },
              children: [
                "Microphone access was denied earlier.",
                u.jsx("br", {}),
                "To use the Speech to Text Converter in the side panel, please follow these steps:",
                u.jsxs("ol", {
                  children: [
                    u.jsx("li", {
                      children: u.jsx("a", {
                        href: ns,
                        target: "_blank",
                        onClick: async () => {
                          hn = (await chrome.tabs.create({ url: ns })).id;
                        },
                        children: "Open extension settings (click here)",
                      }),
                    }),
                    u.jsxs("li", {
                      children: [
                        "Allow microphone access.",
                        " ",
                        u.jsx("img", {
                          src: "img/permission-enabling.webp",
                          alt: "Allow microphone access.",
                        }),
                      ],
                    }),
                    u.jsxs("li", {
                      children: [
                        "Press",
                        " ",
                        u.jsx(Xt, {
                          variant: "contained",
                          size: "small",
                          startIcon: u.jsx(Js, {}),
                          onClick: async () => {
                            localStorage.setItem("isGranted", ""),
                              await chrome.tabs.create({
                                url: "pages/permission/index.html",
                              }),
                              hn && (await chrome.tabs.remove(hn)),
                              chrome.runtime.sendMessage({
                                type: "closeSidePanel",
                              });
                          },
                          children: "Reset Extension",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          u.jsx(ds, {
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
            open: o,
            onClose: () => n(!1),
            autoHideDuration: 1e3,
            message: "Copied!",
            action: u.jsx(tt, {
              size: "small",
              "aria-label": "close",
              color: "inherit",
              onClick: () => {
                n(!1), Le("Button Pressed", { name: "Hide Copy Warning" });
              },
              children: u.jsx(ps, { fontSize: "small" }),
            }),
          }),
        ],
      })
    );
  },
  Hg = ({ isFontEnlarged: e, setIsFontEnlarged: t }) => {
    const [o, n] = f.useState(!0),
      [r, s] = f.useState(!0),
      [a, l] = f.useState(Ao);
    return (
      f.useEffect(() => {
        Le("Page Opened", { page: "Side Panel / Settings", host: At() }),
          chrome.storage.local
            .get([
              "isEnabled",
              "isHistoryEnabled",
              "isFontEnlarged",
              "language",
            ])
            .then((c) => {
              n(c.isEnabled ?? !0),
                s(c.isHistoryEnabled ?? !0),
                t(c.isFontEnlarged ?? !1),
                l(c.language ?? Ao);
            });
        const i = (c) => {
          c.type === "setEnabled" && n(c.payload);
        };
        return (
          chrome.runtime.onMessage.addListener(i),
          () => {
            chrome.runtime.onMessage.removeListener(i);
          }
        );
      }, []),
      u.jsx(u.Fragment, {
        children: u.jsxs(jt, {
          style: { padding: "15px" },
          spacing: 1,
          children: [
            u.jsx(Fs, {
              blurOnSelect: !0,
              disableClearable: !0,
              openOnFocus: !0,
              fullWidth: !0,
              size: "small",
              value: jo.find((i) => i.tag === a),
              onChange: (i, c) => {
                c &&
                  (l(c.tag),
                  chrome.runtime.sendMessage({
                    type: "setLanguage",
                    payload: c.tag,
                  }),
                  Le("Settings Updated", {
                    param: "lang",
                    value: c.tag,
                    host: At(),
                  }));
              },
              options: jo,
              renderInput: (i) => u.jsx(Jn, { ...i, label: "Language" }),
            }),
            u.jsx(un, {
              control: u.jsx(mn, {
                checked: o,
                onChange: (i) => {
                  const c = i.target.checked;
                  n(c),
                    chrome.runtime.sendMessage({
                      type: "setEnabled",
                      payload: c,
                    }),
                    Le("Settings Updated", {
                      param: "isEnabled",
                      value: c,
                      host: At(),
                    });
                },
              }),
              label: "Recorder Button Enabled on Pages",
              labelPlacement: "start",
            }),
            u.jsx(un, {
              control: u.jsx(mn, {
                checked: r,
                onChange: (i) => {
                  const c = i.target.checked;
                  s(c),
                    chrome.runtime.sendMessage({
                      type: "setIsHistoryEnabled",
                      payload: c,
                    }),
                    Le("Settings Updated", {
                      param: "isHistoryEnabled",
                      value: c,
                    });
                },
              }),
              label: "Enable History",
              labelPlacement: "start",
            }),
            u.jsx(un, {
              control: u.jsx(mn, {
                checked: e,
                onChange: (i) => {
                  const c = i.target.checked;
                  t(c),
                    chrome.runtime.sendMessage({
                      type: "setIsFontEnlarged",
                      payload: c,
                    }),
                    Le("Settings Updated", {
                      param: "isFontEnlarged",
                      value: c,
                    });
                },
              }),
              label: "Enlarged Content Font",
              labelPlacement: "start",
            }),
          ],
        }),
      })
    );
  },
  Vg = { message: "Nerva Speech to CRM Recorder" },
  Ug = {
    message:
      "Translate voice into text with speech to text converter. Fast audio to text transcription using automatic speech recognition.",
  },
  qg = {
    message: `Discover the ultimate Google Chrome extension designed to simplify your transcription needs: the speech to text converter. This cutting-edge tool is your go-to solution for converting audio speech to video text, enabling you to transform spoken words into accurate, editable text with ease. Whether you're a professional or a casual user, our extension is here to revolutionize the way you handle audio transcription. 🔍

Why Choose This Extension?
1. Seamless Conversion: convert speech to text in real-time with unparalleled accuracy.
2. Versatile Functionality: perfect for converting speech to text from videos, meetings, or even live conversations.
3. AI-Powered Precision: experience the magic of AI convert speech to text for fast and reliable results.
4. Multi-Purpose: whether it's audio to text transcription, video transcription, or simply a talk to text tool, this app covers all your needs.

Key Features of the Speech to Text Converter
🎤 Real-Time Transcription: record speech to text as you talk.
🆙 Automatic Speech Recognition (ASR): harness the power of advanced ASR technology for precise transcription.
🌍 Multi-Language Support: convert speech to text online in numerous languages.
🎥 Video Speech to Text Conversion: easily transcribe video to text speech, making it ideal for content creators and professionals.

How to Use the Extension
➤ Install the video speech to text converter app from the Chrome Web Store.
➤ Open the extension and select your preferred language.
➤ Upload an audio or video file, or start recording speech to text directly.
➤ View the transcribed text instantly and edit as needed.
➤ Save or export your transcription for later use.

Top Benefits of Using This App
1️⃣ Efficiency: save hours of manual typing by automatically converting speech to text
2️⃣ Accuracy: our AI ensures every vocal to text converter operation is precise.
3️⃣ User-Friendly Interface: designed for ease of use, even for beginners.
4️⃣ Flexible Applications: suitable for students, professionals, and content creators alike.
5️⃣ Cost-Effective: access premium features at an affordable price.

Applications of the Speech to Text Converter
– Content Creation: convert video speech to text for subtitles and captions.
– Education: use the app to convert speech to text for lecture notes.
– Professional Use: transform speech to text for meeting minutes and reports.
– Personal Convenience: talk to text and save your thoughts effortlessly.

Highlights of the Voice Speech to Text Converter
🌀 Audio Transcription: upload audio files and transcribe audio to text seamlessly.
🎞 Video Transcription: convert video speech to text for detailed, searchable records.
💻 Speech to Text Online: use it anytime, anywhere with an internet connection.
🔐 Customizable Settings: adjust the speed and formatting to suit your needs.

Who Can Benefit?
👨‍🎓 Students: transcribe lectures effortlessly.
👨‍💼 Professionals: boost productivity by automating meeting transcription.
👨‍🎨 Content Creators: easily create captions or subtitles.
🔬 Researchers: quickly transcribe interviews and focus groups.
🌐 Anyone: from personal reminders to detailed notes, the possibilities are endless.

Additional Features to Explore
• Voice to Text Converter: dictate directly and watch your words appear on the screen.
• Audio to Text Converter: perfect for podcasts, speeches, and recordings.
• Automatic Speech Recognition: AI-driven accuracy for professional results.
• Speech to Text Converter Online: no need to download bulky software.

How Does It Work?
1. Open the extension and choose your input method.
2. Upload your audio or video file, or use live recording.
3. Let the AI process and convert audio speech to video text.
4. Edit and export your transcription as needed.

Why Does It Stand Out?
🚀 Fast Processing: enjoy quick turnaround times for audio transcription.
💎 Reliable Outputs: trust our voice into text technology for accurate results.
🔄 Continuous Updates: stay ahead with regular enhancements to the app for converting speech speech to text.

Final Thoughts
Transform speech to text effortlessly with this innovative Chrome extension. Whether you're looking for a speech to text converter online or need to transcribe video to text, this app is your all-in-one solution. Start today and experience the simplicity of app for converting speech to text with cutting-edge AI technology.`,
  },
  Kg = { appName: Vg, shortDesc: Ug, storeDesc: qg },
  Gg = (e, t) =>
    chrome.i18n == null ? Xg(e, t) : chrome.i18n.getMessage(e, t),
  Xg = (e, t) => Kg[e].message ?? Yg(t),
  Yg = (e) => (Array.isArray(e) ? e[0] ?? "Placeholder" : e ?? "Placeholder"),
  Zg = "speech-to-text-converter",
  Jg = "1.6.0",
  Qg = "Igor Polyakov",
  eh = "module",
  th = "MIT",
  oh = ["chrome-extension", "create-chrome-ext"],
  nh = { node: ">=14.18.0" },
  rh = {
    dev: "vite",
    build: "tsc && vite build",
    preview: "vite preview",
    fmt: "prettier --write '**/*.{tsx,ts,json,css,scss,md}'",
    zip: "npm run build && node src/zip.js",
  },
  sh = {
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@mui/icons-material": "^5.15.20",
    "@mui/material": "^5.15.20",
    "@sentry/browser": "^8.54.0",
    "@toolpad/core": "^0.13.0",
    "amplitude-js": "^8.21.9",
    lodash: "^4.17.21",
    ramda: "^0.30.1",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    "react-draggable": "^4.4.6",
  },
  ah = {
    "@crxjs/vite-plugin": "^2.0.0-beta.26",
    "@types/amplitude-js": "^8.16.5",
    "@types/chrome": "^0.0.270",
    "@types/dom-speech-recognition": "^0.0.4",
    "@types/lodash": "^4.17.5",
    "@types/ramda": "^0.30.2",
    "@types/react": "^18.2.28",
    "@types/react-dom": "^18.2.13",
    "@vitejs/plugin-react": "^4.1.0",
    "form-data": "^4.0.2",
    gulp: "^4.0.2",
    "gulp-zip": "^6.0.0",
    "node-fetch": "^3.3.2",
    prettier: "^3.0.3",
    typescript: "^5.2.2",
    vite: "^4.4.11",
  },
  ih = {
    name: Zg,
    version: Jg,
    author: Qg,
    type: eh,
    license: th,
    keywords: oh,
    engines: nh,
    scripts: rh,
    dependencies: sh,
    devDependencies: ah,
  };
var lr = {},
  lh = oo;
Object.defineProperty(lr, "__esModule", { value: !0 });
var pa = (lr.default = void 0),
  ch = lh(to()),
  uh = u;
pa = lr.default = (0, ch.default)(
  (0, uh.jsx)("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" }),
  "ChevronLeft"
);
const gh = () => {
    const [e, t] = f.useState("main"),
      [o, n] = f.useState(!1);
    return (
      f.useEffect(() => {
        Le("Page Opened", { page: "Side Panel", host: At() }),
          chrome.storage.local.get(["isFontEnlarged"]).then((r) => {
            n(r.isFontEnlarged ?? !1);
          });
      }, []),
      u.jsx(zg, {
        children: u.jsxs(jt, {
          style: { height: "calc(100vh - 30px)", padding: "15px 0 10px" },
          spacing: 1,
          children: [
            u.jsx(Pn, {
              style: { padding: "0 15px" },
              children: u.jsxs(Lt, {
                className: "title",
                align: "center",
                variant: "h6",
                children: [
                  e !== "main" &&
                    u.jsx(Mo, {
                      arrow: !0,
                      title: "Back",
                      placement: "right",
                      children: u.jsx(tt, {
                        "aria-label": "back",
                        onClick: () => {
                          Le("Button Pressed", { name: "Back" }), t("main");
                        },
                        children: u.jsx(pa, {}),
                      }),
                    }),
                  u.jsxs("div", { children: ["v", ih.version] }),
                  dh[e],
                ],
              }),
            }),
            u.jsxs(Pn, {
              style: { flexGrow: 1, overflow: "auto" },
              children: [
                e === "main" && u.jsx(Wg, { setPage: t, isFontEnlarged: o }),
                e === "settings" &&
                  u.jsx(Hg, { isFontEnlarged: o, setIsFontEnlarged: n }),
                e === "history" && u.jsx(da, { isFontEnlarged: o }),
              ],
            }),
            u.jsx(Rm, {}),
          ],
        }),
      })
    );
  },
  dh = {
    main: Gg("appName"),
    settings: "Settings",
    history: "Recognition History",
  };
export { gh as A };
