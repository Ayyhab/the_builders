var Ei =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Si(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function xf(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(e, arguments, this.constructor)
        : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(t, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }
      );
    }),
    n
  );
}
function jn() {
  return (
    typeof window == "object" &&
    (window == null ? void 0 : window.document) !== void 0
  );
}
var Cs = function () {
    var t;
    if (jn()) {
      var e = window,
        n = Array;
      if (
        e.Prototype !== void 0 &&
        ((t = n.prototype) === null || t === void 0 ? void 0 : t.toJSON) !==
          void 0
      )
        return delete n.prototype.toJSON, !0;
    }
    return !1;
  },
  Ii = { exports: {} };
(function (t) {
  (function (e) {
    function n(d, O) {
      var y = (d & 65535) + (O & 65535),
        P = (d >> 16) + (O >> 16) + (y >> 16);
      return (P << 16) | (y & 65535);
    }
    function r(d, O) {
      return (d << O) | (d >>> (32 - O));
    }
    function i(d, O, y, P, q, V) {
      return n(r(n(n(O, d), n(P, V)), q), y);
    }
    function s(d, O, y, P, q, V, te) {
      return i((O & y) | (~O & P), d, O, q, V, te);
    }
    function o(d, O, y, P, q, V, te) {
      return i((O & P) | (y & ~P), d, O, q, V, te);
    }
    function a(d, O, y, P, q, V, te) {
      return i(O ^ y ^ P, d, O, q, V, te);
    }
    function c(d, O, y, P, q, V, te) {
      return i(y ^ (O | ~P), d, O, q, V, te);
    }
    function u(d, O) {
      (d[O >> 5] |= 128 << O % 32), (d[(((O + 64) >>> 9) << 4) + 14] = O);
      var y,
        P,
        q,
        V,
        te,
        S = 1732584193,
        b = -271733879,
        E = -1732584194,
        I = 271733878;
      for (y = 0; y < d.length; y += 16)
        (P = S),
          (q = b),
          (V = E),
          (te = I),
          (S = s(S, b, E, I, d[y], 7, -680876936)),
          (I = s(I, S, b, E, d[y + 1], 12, -389564586)),
          (E = s(E, I, S, b, d[y + 2], 17, 606105819)),
          (b = s(b, E, I, S, d[y + 3], 22, -1044525330)),
          (S = s(S, b, E, I, d[y + 4], 7, -176418897)),
          (I = s(I, S, b, E, d[y + 5], 12, 1200080426)),
          (E = s(E, I, S, b, d[y + 6], 17, -1473231341)),
          (b = s(b, E, I, S, d[y + 7], 22, -45705983)),
          (S = s(S, b, E, I, d[y + 8], 7, 1770035416)),
          (I = s(I, S, b, E, d[y + 9], 12, -1958414417)),
          (E = s(E, I, S, b, d[y + 10], 17, -42063)),
          (b = s(b, E, I, S, d[y + 11], 22, -1990404162)),
          (S = s(S, b, E, I, d[y + 12], 7, 1804603682)),
          (I = s(I, S, b, E, d[y + 13], 12, -40341101)),
          (E = s(E, I, S, b, d[y + 14], 17, -1502002290)),
          (b = s(b, E, I, S, d[y + 15], 22, 1236535329)),
          (S = o(S, b, E, I, d[y + 1], 5, -165796510)),
          (I = o(I, S, b, E, d[y + 6], 9, -1069501632)),
          (E = o(E, I, S, b, d[y + 11], 14, 643717713)),
          (b = o(b, E, I, S, d[y], 20, -373897302)),
          (S = o(S, b, E, I, d[y + 5], 5, -701558691)),
          (I = o(I, S, b, E, d[y + 10], 9, 38016083)),
          (E = o(E, I, S, b, d[y + 15], 14, -660478335)),
          (b = o(b, E, I, S, d[y + 4], 20, -405537848)),
          (S = o(S, b, E, I, d[y + 9], 5, 568446438)),
          (I = o(I, S, b, E, d[y + 14], 9, -1019803690)),
          (E = o(E, I, S, b, d[y + 3], 14, -187363961)),
          (b = o(b, E, I, S, d[y + 8], 20, 1163531501)),
          (S = o(S, b, E, I, d[y + 13], 5, -1444681467)),
          (I = o(I, S, b, E, d[y + 2], 9, -51403784)),
          (E = o(E, I, S, b, d[y + 7], 14, 1735328473)),
          (b = o(b, E, I, S, d[y + 12], 20, -1926607734)),
          (S = a(S, b, E, I, d[y + 5], 4, -378558)),
          (I = a(I, S, b, E, d[y + 8], 11, -2022574463)),
          (E = a(E, I, S, b, d[y + 11], 16, 1839030562)),
          (b = a(b, E, I, S, d[y + 14], 23, -35309556)),
          (S = a(S, b, E, I, d[y + 1], 4, -1530992060)),
          (I = a(I, S, b, E, d[y + 4], 11, 1272893353)),
          (E = a(E, I, S, b, d[y + 7], 16, -155497632)),
          (b = a(b, E, I, S, d[y + 10], 23, -1094730640)),
          (S = a(S, b, E, I, d[y + 13], 4, 681279174)),
          (I = a(I, S, b, E, d[y], 11, -358537222)),
          (E = a(E, I, S, b, d[y + 3], 16, -722521979)),
          (b = a(b, E, I, S, d[y + 6], 23, 76029189)),
          (S = a(S, b, E, I, d[y + 9], 4, -640364487)),
          (I = a(I, S, b, E, d[y + 12], 11, -421815835)),
          (E = a(E, I, S, b, d[y + 15], 16, 530742520)),
          (b = a(b, E, I, S, d[y + 2], 23, -995338651)),
          (S = c(S, b, E, I, d[y], 6, -198630844)),
          (I = c(I, S, b, E, d[y + 7], 10, 1126891415)),
          (E = c(E, I, S, b, d[y + 14], 15, -1416354905)),
          (b = c(b, E, I, S, d[y + 5], 21, -57434055)),
          (S = c(S, b, E, I, d[y + 12], 6, 1700485571)),
          (I = c(I, S, b, E, d[y + 3], 10, -1894986606)),
          (E = c(E, I, S, b, d[y + 10], 15, -1051523)),
          (b = c(b, E, I, S, d[y + 1], 21, -2054922799)),
          (S = c(S, b, E, I, d[y + 8], 6, 1873313359)),
          (I = c(I, S, b, E, d[y + 15], 10, -30611744)),
          (E = c(E, I, S, b, d[y + 6], 15, -1560198380)),
          (b = c(b, E, I, S, d[y + 13], 21, 1309151649)),
          (S = c(S, b, E, I, d[y + 4], 6, -145523070)),
          (I = c(I, S, b, E, d[y + 11], 10, -1120210379)),
          (E = c(E, I, S, b, d[y + 2], 15, 718787259)),
          (b = c(b, E, I, S, d[y + 9], 21, -343485551)),
          (S = n(S, P)),
          (b = n(b, q)),
          (E = n(E, V)),
          (I = n(I, te));
      return [S, b, E, I];
    }
    function p(d) {
      var O,
        y = "",
        P = d.length * 32;
      for (O = 0; O < P; O += 8)
        y += String.fromCharCode((d[O >> 5] >>> O % 32) & 255);
      return y;
    }
    function h(d) {
      var O,
        y = [];
      for (y[(d.length >> 2) - 1] = void 0, O = 0; O < y.length; O += 1)
        y[O] = 0;
      var P = d.length * 8;
      for (O = 0; O < P; O += 8)
        y[O >> 5] |= (d.charCodeAt(O / 8) & 255) << O % 32;
      return y;
    }
    function f(d) {
      return p(u(h(d), d.length * 8));
    }
    function g(d, O) {
      var y,
        P = h(d),
        q = [],
        V = [],
        te;
      for (
        q[15] = V[15] = void 0,
          P.length > 16 && (P = u(P, d.length * 8)),
          y = 0;
        y < 16;
        y += 1
      )
        (q[y] = P[y] ^ 909522486), (V[y] = P[y] ^ 1549556828);
      return (
        (te = u(q.concat(h(O)), 512 + O.length * 8)),
        p(u(V.concat(te), 512 + 128))
      );
    }
    function l(d) {
      var O = "0123456789abcdef",
        y = "",
        P,
        q;
      for (q = 0; q < d.length; q += 1)
        (P = d.charCodeAt(q)),
          (y += O.charAt((P >>> 4) & 15) + O.charAt(P & 15));
      return y;
    }
    function m(d) {
      return unescape(encodeURIComponent(d));
    }
    function v(d) {
      return f(m(d));
    }
    function j(d) {
      return l(v(d));
    }
    function H(d, O) {
      return g(m(d), m(O));
    }
    function A(d, O) {
      return l(H(d, O));
    }
    function R(d, O, y) {
      return O ? (y ? H(O, d) : A(O, d)) : y ? v(d) : j(d);
    }
    t.exports ? (t.exports = R) : (e.md5 = R);
  })(Ei);
})(Ii);
var ks = Ii.exports;
const Ps = Si(ks),
  wi = "%[a-f0-9]{2}",
  yr = new RegExp("(" + wi + ")|([^%]+?)", "gi"),
  vr = new RegExp("(" + wi + ")+", "gi");
function an(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {}
  if (t.length === 1) return t;
  e = e || 1;
  const n = t.slice(0, e),
    r = t.slice(e);
  return Array.prototype.concat.call([], an(n), an(r));
}
function Ds(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    let e = t.match(yr) || [];
    for (let n = 1; n < e.length; n++)
      (t = an(e, n).join("")), (e = t.match(yr) || []);
    return t;
  }
}
function Us(t) {
  const e = { "%FE%FF": "��", "%FF%FE": "��" };
  let n = vr.exec(t);
  for (; n; ) {
    try {
      e[n[0]] = decodeURIComponent(n[0]);
    } catch {
      const i = Ds(n[0]);
      i !== n[0] && (e[n[0]] = i);
    }
    n = vr.exec(t);
  }
  e["%C2"] = "�";
  const r = Object.keys(e);
  for (const i of r) t = t.replace(new RegExp(i, "g"), e[i]);
  return t;
}
function xs(t) {
  if (typeof t != "string")
    throw new TypeError(
      "Expected `encodedURI` to be of type `string`, got `" + typeof t + "`"
    );
  try {
    return decodeURIComponent(t);
  } catch {
    return Us(t);
  }
}
function Ti(t, e) {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "" || e === "") return [];
  const n = t.indexOf(e);
  return n === -1 ? [] : [t.slice(0, n), t.slice(n + e.length)];
}
function Ms(t, e) {
  const n = {};
  if (Array.isArray(e))
    for (const r of e) {
      const i = Object.getOwnPropertyDescriptor(t, r);
      i != null && i.enumerable && Object.defineProperty(n, r, i);
    }
  else
    for (const r of Reflect.ownKeys(t)) {
      const i = Object.getOwnPropertyDescriptor(t, r);
      if (i.enumerable) {
        const s = t[r];
        e(r, s, t) && Object.defineProperty(n, r, i);
      }
    }
  return n;
}
const Ls = (t) => t == null,
  Fs = (t) =>
    encodeURIComponent(t).replace(
      /[!'()*]/g,
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  cn = Symbol("encodeFragmentIdentifier");
function js(t) {
  switch (t.arrayFormat) {
    case "index":
      return (e) => (n, r) => {
        const i = n.length;
        return r === void 0 ||
          (t.skipNull && r === null) ||
          (t.skipEmptyString && r === "")
          ? n
          : r === null
          ? [...n, [Y(e, t), "[", i, "]"].join("")]
          : [...n, [Y(e, t), "[", Y(i, t), "]=", Y(r, t)].join("")];
      };
    case "bracket":
      return (e) => (n, r) =>
        r === void 0 ||
        (t.skipNull && r === null) ||
        (t.skipEmptyString && r === "")
          ? n
          : r === null
          ? [...n, [Y(e, t), "[]"].join("")]
          : [...n, [Y(e, t), "[]=", Y(r, t)].join("")];
    case "colon-list-separator":
      return (e) => (n, r) =>
        r === void 0 ||
        (t.skipNull && r === null) ||
        (t.skipEmptyString && r === "")
          ? n
          : r === null
          ? [...n, [Y(e, t), ":list="].join("")]
          : [...n, [Y(e, t), ":list=", Y(r, t)].join("")];
    case "comma":
    case "separator":
    case "bracket-separator": {
      const e = t.arrayFormat === "bracket-separator" ? "[]=" : "=";
      return (n) => (r, i) =>
        i === void 0 ||
        (t.skipNull && i === null) ||
        (t.skipEmptyString && i === "")
          ? r
          : ((i = i === null ? "" : i),
            r.length === 0
              ? [[Y(n, t), e, Y(i, t)].join("")]
              : [[r, Y(i, t)].join(t.arrayFormatSeparator)]);
    }
    default:
      return (e) => (n, r) =>
        r === void 0 ||
        (t.skipNull && r === null) ||
        (t.skipEmptyString && r === "")
          ? n
          : r === null
          ? [...n, Y(e, t)]
          : [...n, [Y(e, t), "=", Y(r, t)].join("")];
  }
}
function $s(t) {
  let e;
  switch (t.arrayFormat) {
    case "index":
      return (n, r, i) => {
        if (((e = /\[(\d*)]$/.exec(n)), (n = n.replace(/\[\d*]$/, "")), !e)) {
          i[n] = r;
          return;
        }
        i[n] === void 0 && (i[n] = {}), (i[n][e[1]] = r);
      };
    case "bracket":
      return (n, r, i) => {
        if (((e = /(\[])$/.exec(n)), (n = n.replace(/\[]$/, "")), !e)) {
          i[n] = r;
          return;
        }
        if (i[n] === void 0) {
          i[n] = [r];
          return;
        }
        i[n] = [...i[n], r];
      };
    case "colon-list-separator":
      return (n, r, i) => {
        if (((e = /(:list)$/.exec(n)), (n = n.replace(/:list$/, "")), !e)) {
          i[n] = r;
          return;
        }
        if (i[n] === void 0) {
          i[n] = [r];
          return;
        }
        i[n] = [...i[n], r];
      };
    case "comma":
    case "separator":
      return (n, r, i) => {
        const s = typeof r == "string" && r.includes(t.arrayFormatSeparator),
          o =
            typeof r == "string" &&
            !s &&
            be(r, t).includes(t.arrayFormatSeparator);
        r = o ? be(r, t) : r;
        const a =
          s || o
            ? r.split(t.arrayFormatSeparator).map((c) => be(c, t))
            : r === null
            ? r
            : be(r, t);
        i[n] = a;
      };
    case "bracket-separator":
      return (n, r, i) => {
        const s = /(\[])$/.test(n);
        if (((n = n.replace(/\[]$/, "")), !s)) {
          i[n] = r && be(r, t);
          return;
        }
        const o =
          r === null
            ? []
            : r.split(t.arrayFormatSeparator).map((a) => be(a, t));
        if (i[n] === void 0) {
          i[n] = o;
          return;
        }
        i[n] = [...i[n], ...o];
      };
    default:
      return (n, r, i) => {
        if (i[n] === void 0) {
          i[n] = r;
          return;
        }
        i[n] = [...[i[n]].flat(), r];
      };
  }
}
function Oi(t) {
  if (typeof t != "string" || t.length !== 1)
    throw new TypeError("arrayFormatSeparator must be single character string");
}
function Y(t, e) {
  return e.encode ? (e.strict ? Fs(t) : encodeURIComponent(t)) : t;
}
function be(t, e) {
  return e.decode ? xs(t) : t;
}
function Ni(t) {
  return Array.isArray(t)
    ? t.sort()
    : typeof t == "object"
    ? Ni(Object.keys(t))
        .sort((e, n) => Number(e) - Number(n))
        .map((e) => t[e])
    : t;
}
function Ai(t) {
  const e = t.indexOf("#");
  return e !== -1 && (t = t.slice(0, e)), t;
}
function Gs(t) {
  let e = "";
  const n = t.indexOf("#");
  return n !== -1 && (e = t.slice(n)), e;
}
function br(t, e) {
  return (
    e.parseNumbers &&
    !Number.isNaN(Number(t)) &&
    typeof t == "string" &&
    t.trim() !== ""
      ? (t = Number(t))
      : e.parseBooleans &&
        t !== null &&
        (t.toLowerCase() === "true" || t.toLowerCase() === "false") &&
        (t = t.toLowerCase() === "true"),
    t
  );
}
function $n(t) {
  t = Ai(t);
  const e = t.indexOf("?");
  return e === -1 ? "" : t.slice(e + 1);
}
function Gn(t, e) {
  (e = {
    decode: !0,
    sort: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    parseNumbers: !1,
    parseBooleans: !1,
    ...e,
  }),
    Oi(e.arrayFormatSeparator);
  const n = $s(e),
    r = Object.create(null);
  if (typeof t != "string" || ((t = t.trim().replace(/^[?#&]/, "")), !t))
    return r;
  for (const i of t.split("&")) {
    if (i === "") continue;
    const s = e.decode ? i.replace(/\+/g, " ") : i;
    let [o, a] = Ti(s, "=");
    o === void 0 && (o = s),
      (a =
        a === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(e.arrayFormat)
          ? a
          : be(a, e)),
      n(be(o, e), a, r);
  }
  for (const [i, s] of Object.entries(r))
    if (typeof s == "object" && s !== null)
      for (const [o, a] of Object.entries(s)) s[o] = br(a, e);
    else r[i] = br(s, e);
  return e.sort === !1
    ? r
    : (e.sort === !0
        ? Object.keys(r).sort()
        : Object.keys(r).sort(e.sort)
      ).reduce((i, s) => {
        const o = r[s];
        return (
          o && typeof o == "object" && !Array.isArray(o)
            ? (i[s] = Ni(o))
            : (i[s] = o),
          i
        );
      }, Object.create(null));
}
function Ri(t, e) {
  if (!t) return "";
  (e = {
    encode: !0,
    strict: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    ...e,
  }),
    Oi(e.arrayFormatSeparator);
  const n = (o) =>
      (e.skipNull && Ls(t[o])) || (e.skipEmptyString && t[o] === ""),
    r = js(e),
    i = {};
  for (const [o, a] of Object.entries(t)) n(o) || (i[o] = a);
  const s = Object.keys(i);
  return (
    e.sort !== !1 && s.sort(e.sort),
    s
      .map((o) => {
        const a = t[o];
        return a === void 0
          ? ""
          : a === null
          ? Y(o, e)
          : Array.isArray(a)
          ? a.length === 0 && e.arrayFormat === "bracket-separator"
            ? Y(o, e) + "[]"
            : a.reduce(r(o), []).join("&")
          : Y(o, e) + "=" + Y(a, e);
      })
      .filter((o) => o.length > 0)
      .join("&")
  );
}
function Ci(t, e) {
  var i;
  e = { decode: !0, ...e };
  let [n, r] = Ti(t, "#");
  return (
    n === void 0 && (n = t),
    {
      url:
        ((i = n == null ? void 0 : n.split("?")) == null ? void 0 : i[0]) ?? "",
      query: Gn($n(t), e),
      ...(e && e.parseFragmentIdentifier && r
        ? { fragmentIdentifier: be(r, e) }
        : {}),
    }
  );
}
function ki(t, e) {
  e = { encode: !0, strict: !0, [cn]: !0, ...e };
  const n = Ai(t.url).split("?")[0] || "",
    r = $n(t.url),
    i = { ...Gn(r, { sort: !1 }), ...t.query };
  let s = Ri(i, e);
  s && (s = `?${s}`);
  let o = Gs(t.url);
  if (t.fragmentIdentifier) {
    const a = new URL(n);
    (a.hash = t.fragmentIdentifier),
      (o = e[cn] ? a.hash : `#${t.fragmentIdentifier}`);
  }
  return `${n}${s}${o}`;
}
function Pi(t, e, n) {
  n = { parseFragmentIdentifier: !0, [cn]: !1, ...n };
  const { url: r, query: i, fragmentIdentifier: s } = Ci(t, n);
  return ki({ url: r, query: Ms(i, e), fragmentIdentifier: s }, n);
}
function qs(t, e, n) {
  const r = Array.isArray(e) ? (i) => !e.includes(i) : (i, s) => !e(i, s);
  return Pi(t, r, n);
}
const Zt = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      exclude: qs,
      extract: $n,
      parse: Gn,
      parseUrl: Ci,
      pick: Pi,
      stringify: Ri,
      stringifyUrl: ki,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var un = { exports: {} };
(function (t, e) {
  (function (n, r) {
    var i = "0.7.33",
      s = "",
      o = "?",
      a = "function",
      c = "undefined",
      u = "object",
      p = "string",
      h = "major",
      f = "model",
      g = "name",
      l = "type",
      m = "vendor",
      v = "version",
      j = "architecture",
      H = "console",
      A = "mobile",
      R = "tablet",
      d = "smarttv",
      O = "wearable",
      y = "embedded",
      P = 350,
      q = "Amazon",
      V = "Apple",
      te = "ASUS",
      S = "BlackBerry",
      b = "Browser",
      E = "Chrome",
      I = "Edge",
      ft = "Firefox",
      dt = "Google",
      ur = "Huawei",
      Vt = "LG",
      Wt = "Microsoft",
      lr = "Motorola",
      pt = "Opera",
      Kt = "Samsung",
      fr = "Sharp",
      ht = "Sony",
      zt = "Xiaomi",
      Yt = "Zebra",
      dr = "Facebook",
      Ns = function (D, L) {
        var U = {};
        for (var z in D)
          L[z] && L[z].length % 2 === 0
            ? (U[z] = L[z].concat(D[z]))
            : (U[z] = D[z]);
        return U;
      },
      gt = function (D) {
        for (var L = {}, U = 0; U < D.length; U++) L[D[U].toUpperCase()] = D[U];
        return L;
      },
      pr = function (D, L) {
        return typeof D === p ? Qe(L).indexOf(Qe(D)) !== -1 : !1;
      },
      Qe = function (D) {
        return D.toLowerCase();
      },
      As = function (D) {
        return typeof D === p ? D.replace(/[^\d\.]/g, s).split(".")[0] : r;
      },
      Xt = function (D, L) {
        if (typeof D === p)
          return (
            (D = D.replace(/^\s\s*/, s)), typeof L === c ? D : D.substring(0, P)
          );
      },
      et = function (D, L) {
        for (var U = 0, z, x, _t, B, tt, me; U < L.length && !tt; ) {
          var mr = L[U],
            _r = L[U + 1];
          for (z = x = 0; z < mr.length && !tt; )
            if (((tt = mr[z++].exec(D)), tt))
              for (_t = 0; _t < _r.length; _t++)
                (me = tt[++x]),
                  (B = _r[_t]),
                  typeof B === u && B.length > 0
                    ? B.length === 2
                      ? typeof B[1] == a
                        ? (this[B[0]] = B[1].call(this, me))
                        : (this[B[0]] = B[1])
                      : B.length === 3
                      ? typeof B[1] === a && !(B[1].exec && B[1].test)
                        ? (this[B[0]] = me ? B[1].call(this, me, B[2]) : r)
                        : (this[B[0]] = me ? me.replace(B[1], B[2]) : r)
                      : B.length === 4 &&
                        (this[B[0]] = me
                          ? B[3].call(this, me.replace(B[1], B[2]))
                          : r)
                    : (this[B] = me || r);
          U += 2;
        }
      },
      Jt = function (D, L) {
        for (var U in L)
          if (typeof L[U] === u && L[U].length > 0) {
            for (var z = 0; z < L[U].length; z++)
              if (pr(L[U][z], D)) return U === o ? r : U;
          } else if (pr(L[U], D)) return U === o ? r : U;
        return D;
      },
      Rs = {
        "1.0": "/8",
        1.2: "/1",
        1.3: "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/",
      },
      hr = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        2e3: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        8.1: "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM",
      },
      gr = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [v, [g, "Chrome"]],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [v, [g, "Edge"]],
          [
            /(opera mini)\/([-\w\.]+)/i,
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
          ],
          [g, v],
          [/opios[\/ ]+([\w\.]+)/i],
          [v, [g, pt + " Mini"]],
          [/\bopr\/([\w\.]+)/i],
          [v, [g, pt]],
          [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
            /(?:ms|\()(ie) ([\w\.]+)/i,
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
            /(weibo)__([\d\.]+)/i,
          ],
          [g, v],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [v, [g, "UC" + b]],
          [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
          [v, [g, "WeChat(Win) Desktop"]],
          [/micromessenger\/([\w\.]+)/i],
          [v, [g, "WeChat"]],
          [/konqueror\/([\w\.]+)/i],
          [v, [g, "Konqueror"]],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [v, [g, "IE"]],
          [/yabrowser\/([\w\.]+)/i],
          [v, [g, "Yandex"]],
          [/(avast|avg)\/([\w\.]+)/i],
          [[g, /(.+)/, "$1 Secure " + b], v],
          [/\bfocus\/([\w\.]+)/i],
          [v, [g, ft + " Focus"]],
          [/\bopt\/([\w\.]+)/i],
          [v, [g, pt + " Touch"]],
          [/coc_coc\w+\/([\w\.]+)/i],
          [v, [g, "Coc Coc"]],
          [/dolfin\/([\w\.]+)/i],
          [v, [g, "Dolphin"]],
          [/coast\/([\w\.]+)/i],
          [v, [g, pt + " Coast"]],
          [/miuibrowser\/([\w\.]+)/i],
          [v, [g, "MIUI " + b]],
          [/fxios\/([-\w\.]+)/i],
          [v, [g, ft]],
          [/\bqihu|(qi?ho?o?|360)browser/i],
          [[g, "360 " + b]],
          [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
          [[g, /(.+)/, "$1 " + b], v],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [[g, /_/g, " "], v],
          [
            /(electron)\/([\w\.]+) safari/i,
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
          ],
          [g, v],
          [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
          [g],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [[g, dr], v],
          [
            /safari (line)\/([\w\.]+)/i,
            /\b(line)\/([\w\.]+)\/iab/i,
            /(chromium|instagram)[\/ ]([-\w\.]+)/i,
          ],
          [g, v],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [v, [g, "GSA"]],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [v, [g, E + " Headless"]],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [[g, E + " WebView"], v],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [v, [g, "Android " + b]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [g, v],
          [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
          [v, [g, "Mobile Safari"]],
          [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
          [v, g],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [g, [v, Jt, Rs]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [g, v],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [[g, "Netscape"], v],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [v, [g, ft + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            /(swiftfox)/i,
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            /(firefox)\/([\w\.]+)/i,
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            /(links) \(([\w\.]+)/i,
          ],
          [g, v],
          [/(cobalt)\/([\w\.]+)/i],
          [g, [v, /master.|lts./, ""]],
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
          [[j, "amd64"]],
          [/(ia32(?=;))/i],
          [[j, Qe]],
          [/((?:i[346]|x)86)[;\)]/i],
          [[j, "ia32"]],
          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
          [[j, "arm64"]],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [[j, "armhf"]],
          [/windows (ce|mobile); ppc;/i],
          [[j, "arm"]],
          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
          [[j, /ower/, s, Qe]],
          [/(sun4\w)[;\)]/i],
          [[j, "sparc"]],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
          ],
          [[j, Qe]],
        ],
        device: [
          [
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
          ],
          [f, [m, Kt], [l, R]],
          [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i,
          ],
          [f, [m, Kt], [l, A]],
          [/((ipod|iphone)\d+,\d+)/i],
          [f, [m, V], [l, A]],
          [/(ipad\d+,\d+)/i],
          [f, [m, V], [l, R]],
          [/\((ip(?:hone|od)[\w ]*);/i],
          [f, [m, V], [l, A]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
          ],
          [f, [m, V], [l, R]],
          [/(macintosh);/i],
          [f, [m, V]],
          [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
          [f, [m, ur], [l, R]],
          [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
          ],
          [f, [m, ur], [l, A]],
          [
            /\b(poco[\w ]+)(?: bui|\))/i,
            /\b; (\w+) build\/hm\1/i,
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
          ],
          [
            [f, /_/g, " "],
            [m, zt],
            [l, A],
          ],
          [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
          [
            [f, /_/g, " "],
            [m, zt],
            [l, R],
          ],
          [
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
          ],
          [f, [m, "OPPO"], [l, A]],
          [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [f, [m, "Vivo"], [l, A]],
          [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
          [f, [m, "Realme"], [l, A]],
          [
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
          ],
          [f, [m, lr], [l, A]],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [f, [m, lr], [l, R]],
          [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [f, [m, Vt], [l, R]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i,
          ],
          [f, [m, Vt], [l, A]],
          [
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
          ],
          [f, [m, "Lenovo"], [l, R]],
          [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
          [
            [f, /_/g, " "],
            [m, "Nokia"],
            [l, A],
          ],
          [/(pixel c)\b/i],
          [f, [m, dt], [l, R]],
          [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
          [f, [m, dt], [l, A]],
          [
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
          ],
          [f, [m, ht], [l, A]],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [f, "Xperia Tablet"],
            [m, ht],
            [l, R],
          ],
          [
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
          ],
          [f, [m, "OnePlus"], [l, A]],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)( bui|\))/i,
            /(kf[a-z]+)( bui|\)).+silk\//i,
          ],
          [f, [m, q], [l, R]],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [f, /(.+)/g, "Fire Phone $1"],
            [m, q],
            [l, A],
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [f, m, [l, R]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
          [f, [m, S], [l, A]],
          [
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
          ],
          [f, [m, te], [l, R]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [f, [m, te], [l, A]],
          [/(nexus 9)/i],
          [f, [m, "HTC"], [l, R]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i,
          ],
          [m, [f, /_/g, " "], [l, A]],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [f, [m, "Acer"], [l, R]],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [f, [m, "Meizu"], [l, A]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [f, [m, fr], [l, A]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
            /(hp) ([\w ]+\w)/i,
            /(asus)-?(\w+)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(lenovo)[-_ ]?([-\w]+)/i,
            /(jolla)/i,
            /(oppo) ?([\w ]+) bui/i,
          ],
          [m, f, [l, A]],
          [
            /(archos) (gamepad2?)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
            /(nook)[\w ]+build\/(\w+)/i,
            /(dell) (strea[kpr\d ]*[\dko])/i,
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            /(trinity)[- ]*(t\d{3}) bui/i,
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            /(vodafone) ([\w ]+)(?:\)| bui)/i,
          ],
          [m, f, [l, R]],
          [/(surface duo)/i],
          [f, [m, Wt], [l, R]],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [f, [m, "Fairphone"], [l, A]],
          [/(u304aa)/i],
          [f, [m, "AT&T"], [l, A]],
          [/\bsie-(\w*)/i],
          [f, [m, "Siemens"], [l, A]],
          [/\b(rct\w+) b/i],
          [f, [m, "RCA"], [l, R]],
          [/\b(venue[\d ]{2,7}) b/i],
          [f, [m, "Dell"], [l, R]],
          [/\b(q(?:mv|ta)\w+) b/i],
          [f, [m, "Verizon"], [l, R]],
          [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
          [f, [m, "Barnes & Noble"], [l, R]],
          [/\b(tm\d{3}\w+) b/i],
          [f, [m, "NuVision"], [l, R]],
          [/\b(k88) b/i],
          [f, [m, "ZTE"], [l, R]],
          [/\b(nx\d{3}j) b/i],
          [f, [m, "ZTE"], [l, A]],
          [/\b(gen\d{3}) b.+49h/i],
          [f, [m, "Swiss"], [l, A]],
          [/\b(zur\d{3}) b/i],
          [f, [m, "Swiss"], [l, R]],
          [/\b((zeki)?tb.*\b) b/i],
          [f, [m, "Zeki"], [l, R]],
          [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
          [[m, "Dragon Touch"], f, [l, R]],
          [/\b(ns-?\w{0,9}) b/i],
          [f, [m, "Insignia"], [l, R]],
          [/\b((nxa|next)-?\w{0,9}) b/i],
          [f, [m, "NextBook"], [l, R]],
          [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
          [[m, "Voice"], f, [l, A]],
          [/\b(lvtel\-)?(v1[12]) b/i],
          [[m, "LvTel"], f, [l, A]],
          [/\b(ph-1) /i],
          [f, [m, "Essential"], [l, A]],
          [/\b(v(100md|700na|7011|917g).*\b) b/i],
          [f, [m, "Envizen"], [l, R]],
          [/\b(trio[-\w\. ]+) b/i],
          [f, [m, "MachSpeed"], [l, R]],
          [/\btu_(1491) b/i],
          [f, [m, "Rotor"], [l, R]],
          [/(shield[\w ]+) b/i],
          [f, [m, "Nvidia"], [l, R]],
          [/(sprint) (\w+)/i],
          [m, f, [l, A]],
          [/(kin\.[onetw]{3})/i],
          [
            [f, /\./g, " "],
            [m, Wt],
            [l, A],
          ],
          [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [f, [m, Yt], [l, R]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [f, [m, Yt], [l, A]],
          [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
          [m, f, [l, H]],
          [/droid.+; (shield) bui/i],
          [f, [m, "Nvidia"], [l, H]],
          [/(playstation [345portablevi]+)/i],
          [f, [m, ht], [l, H]],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [f, [m, Wt], [l, H]],
          [/smart-tv.+(samsung)/i],
          [m, [l, d]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [f, /^/, "SmartTV"],
            [m, Kt],
            [l, d],
          ],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [m, Vt],
            [l, d],
          ],
          [/(apple) ?tv/i],
          [m, [f, V + " TV"], [l, d]],
          [/crkey/i],
          [
            [f, E + "cast"],
            [m, dt],
            [l, d],
          ],
          [/droid.+aft(\w)( bui|\))/i],
          [f, [m, q], [l, d]],
          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
          [f, [m, fr], [l, d]],
          [/(bravia[\w ]+)( bui|\))/i],
          [f, [m, ht], [l, d]],
          [/(mitv-\w{5}) bui/i],
          [f, [m, zt], [l, d]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
          ],
          [
            [m, Xt],
            [f, Xt],
            [l, d],
          ],
          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
          [[l, d]],
          [/((pebble))app/i],
          [m, f, [l, O]],
          [/droid.+; (glass) \d/i],
          [f, [m, dt], [l, O]],
          [/droid.+; (wt63?0{2,3})\)/i],
          [f, [m, Yt], [l, O]],
          [/(quest( 2)?)/i],
          [f, [m, dr], [l, O]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [m, [l, y]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
          [f, [l, A]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
          [f, [l, R]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [[l, R]],
          [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
          [[l, A]],
          [/(android[-\w\. ]{0,9});.+buil/i],
          [f, [m, "Generic"]],
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [v, [g, I + "HTML"]],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [v, [g, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
          ],
          [g, v],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [v, g],
        ],
        os: [
          [/microsoft (windows) (vista|xp)/i],
          [g, v],
          [
            /(windows) nt 6\.2; (arm)/i,
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
          ],
          [g, [v, Jt, hr]],
          [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
          [
            [g, "Windows"],
            [v, Jt, hr],
          ],
          [
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            /cfnetwork\/.+darwin/i,
          ],
          [
            [v, /_/g, "."],
            [g, "iOS"],
          ],
          [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
          [
            [g, "Mac OS"],
            [v, /_/g, "."],
          ],
          [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
          [v, g],
          [
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            /\((series40);/i,
          ],
          [g, v],
          [/\(bb(10);/i],
          [v, [g, S]],
          [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
          [v, [g, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
          ],
          [v, [g, ft + " OS"]],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [v, [g, "webOS"]],
          [/crkey\/([\d\.]+)/i],
          [v, [g, E + "cast"]],
          [/(cros) [\w]+ ([\w\.]+\w)/i],
          [[g, "Chromium OS"], v],
          [
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            /(xbox); +xbox ([^\);]+)/i,
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            /(mint)[\/\(\) ]?(\w*)/i,
            /(mageia|vectorlinux)[; ]/i,
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            /(hurd|linux) ?([\w\.]*)/i,
            /(gnu) ?([\w\.]*)/i,
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            /(haiku) (\w+)/i,
          ],
          [g, v],
          [/(sunos) ?([\w\.\d]*)/i],
          [[g, "Solaris"], v],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
            /(unix) ?([\w\.]*)/i,
          ],
          [g, v],
        ],
      },
      fe = function (D, L) {
        if ((typeof D === u && ((L = D), (D = r)), !(this instanceof fe)))
          return new fe(D, L).getResult();
        var U =
            D ||
            (typeof n !== c && n.navigator && n.navigator.userAgent
              ? n.navigator.userAgent
              : s),
          z = L ? Ns(gr, L) : gr;
        return (
          (this.getBrowser = function () {
            var x = {};
            return (
              (x[g] = r),
              (x[v] = r),
              et.call(x, U, z.browser),
              (x.major = As(x.version)),
              x
            );
          }),
          (this.getCPU = function () {
            var x = {};
            return (x[j] = r), et.call(x, U, z.cpu), x;
          }),
          (this.getDevice = function () {
            var x = {};
            return (
              (x[m] = r), (x[f] = r), (x[l] = r), et.call(x, U, z.device), x
            );
          }),
          (this.getEngine = function () {
            var x = {};
            return (x[g] = r), (x[v] = r), et.call(x, U, z.engine), x;
          }),
          (this.getOS = function () {
            var x = {};
            return (x[g] = r), (x[v] = r), et.call(x, U, z.os), x;
          }),
          (this.getResult = function () {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU(),
            };
          }),
          (this.getUA = function () {
            return U;
          }),
          (this.setUA = function (x) {
            return (U = typeof x === p && x.length > P ? Xt(x, P) : x), this;
          }),
          this.setUA(U),
          this
        );
      };
    (fe.VERSION = i),
      (fe.BROWSER = gt([g, v, h])),
      (fe.CPU = gt([j])),
      (fe.DEVICE = gt([f, m, l, H, A, d, R, O, y])),
      (fe.ENGINE = fe.OS = gt([g, v])),
      t.exports && (e = t.exports = fe),
      (e.UAParser = fe);
    var Be = typeof n !== c && (n.jQuery || n.Zepto);
    if (Be && !Be.ua) {
      var mt = new fe();
      (Be.ua = mt.getResult()),
        (Be.ua.get = function () {
          return mt.getUA();
        }),
        (Be.ua.set = function (D) {
          mt.setUA(D);
          var L = mt.getResult();
          for (var U in L) Be.ua[U] = L[U];
        });
    }
  })(typeof window == "object" ? window : Ei);
})(un, un.exports);
var Bs = un.exports;
const Hs = Si(Bs);
var Vs = (function () {
    function t() {}
    return (
      (t.prototype.getApplicationContext = function () {
        return {
          versionName: this.versionName,
          language: Ws(),
          platform: "Web",
          os: void 0,
          deviceModel: void 0,
        };
      }),
      t
    );
  })(),
  Ws = function () {
    return (
      (typeof navigator < "u" &&
        ((navigator.languages && navigator.languages[0]) ||
          navigator.language)) ||
      ""
    );
  },
  Ks = (function () {
    function t() {
      this.queue = [];
    }
    return (
      (t.prototype.logEvent = function (e) {
        this.receiver
          ? this.receiver(e)
          : this.queue.length < 512 && this.queue.push(e);
      }),
      (t.prototype.setEventReceiver = function (e) {
        (this.receiver = e),
          this.queue.length > 0 &&
            (this.queue.forEach(function (n) {
              e(n);
            }),
            (this.queue = []));
      }),
      t
    );
  })(),
  Oe = function () {
    return (
      (Oe =
        Object.assign ||
        function (e) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var s in n)
              Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          }
          return e;
        }),
      Oe.apply(this, arguments)
    );
  };
function Ot(t) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    n = e && t[e],
    r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function () {
        return (
          t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Er(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t),
    i,
    s = [],
    o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}
var Nt = function (t, e) {
    var n,
      r,
      i = ["string", "number", "boolean", "undefined"],
      s = typeof t,
      o = typeof e;
    if (s !== o) return !1;
    try {
      for (var a = Ot(i), c = a.next(); !c.done; c = a.next()) {
        var u = c.value;
        if (u === s) return t === e;
      }
    } catch (v) {
      n = { error: v };
    } finally {
      try {
        c && !c.done && (r = a.return) && r.call(a);
      } finally {
        if (n) throw n.error;
      }
    }
    if (t == null && e == null) return !0;
    if (t == null || e == null || t.length !== e.length) return !1;
    var p = Array.isArray(t),
      h = Array.isArray(e);
    if (p !== h) return !1;
    if (p && h) {
      for (var f = 0; f < t.length; f++) if (!Nt(t[f], e[f])) return !1;
    } else {
      var g = Object.keys(t).sort(),
        l = Object.keys(e).sort();
      if (!Nt(g, l)) return !1;
      var m = !0;
      return (
        Object.keys(t).forEach(function (v) {
          Nt(t[v], e[v]) || (m = !1);
        }),
        m
      );
    }
    return !0;
  },
  zs = "$set",
  Ys = "$unset",
  Xs = "$clearAll";
Object.entries ||
  (Object.entries = function (t) {
    for (var e = Object.keys(t), n = e.length, r = new Array(n); n--; )
      r[n] = [e[n], t[e[n]]];
    return r;
  });
var Js = (function () {
    function t() {
      (this.identity = { userProperties: {} }), (this.listeners = new Set());
    }
    return (
      (t.prototype.editIdentity = function () {
        var e = this,
          n = Oe({}, this.identity.userProperties),
          r = Oe(Oe({}, this.identity), { userProperties: n });
        return {
          setUserId: function (i) {
            return (r.userId = i), this;
          },
          setDeviceId: function (i) {
            return (r.deviceId = i), this;
          },
          setUserProperties: function (i) {
            return (r.userProperties = i), this;
          },
          setOptOut: function (i) {
            return (r.optOut = i), this;
          },
          updateUserProperties: function (i) {
            var s,
              o,
              a,
              c,
              u,
              p,
              h = r.userProperties || {};
            try {
              for (
                var f = Ot(Object.entries(i)), g = f.next();
                !g.done;
                g = f.next()
              ) {
                var l = Er(g.value, 2),
                  m = l[0],
                  v = l[1];
                switch (m) {
                  case zs:
                    try {
                      for (
                        var j = ((a = void 0), Ot(Object.entries(v))),
                          H = j.next();
                        !H.done;
                        H = j.next()
                      ) {
                        var A = Er(H.value, 2),
                          R = A[0],
                          d = A[1];
                        h[R] = d;
                      }
                    } catch (P) {
                      a = { error: P };
                    } finally {
                      try {
                        H && !H.done && (c = j.return) && c.call(j);
                      } finally {
                        if (a) throw a.error;
                      }
                    }
                    break;
                  case Ys:
                    try {
                      for (
                        var O = ((u = void 0), Ot(Object.keys(v))),
                          y = O.next();
                        !y.done;
                        y = O.next()
                      ) {
                        var R = y.value;
                        delete h[R];
                      }
                    } catch (P) {
                      u = { error: P };
                    } finally {
                      try {
                        y && !y.done && (p = O.return) && p.call(O);
                      } finally {
                        if (u) throw u.error;
                      }
                    }
                    break;
                  case Xs:
                    h = {};
                    break;
                }
              }
            } catch (P) {
              s = { error: P };
            } finally {
              try {
                g && !g.done && (o = f.return) && o.call(f);
              } finally {
                if (s) throw s.error;
              }
            }
            return (r.userProperties = h), this;
          },
          commit: function () {
            return e.setIdentity(r), this;
          },
        };
      }),
      (t.prototype.getIdentity = function () {
        return Oe({}, this.identity);
      }),
      (t.prototype.setIdentity = function (e) {
        var n = Oe({}, this.identity);
        (this.identity = Oe({}, e)),
          Nt(n, this.identity) ||
            this.listeners.forEach(function (r) {
              r(e);
            });
      }),
      (t.prototype.addIdentityListener = function (e) {
        this.listeners.add(e);
      }),
      (t.prototype.removeIdentityListener = function (e) {
        this.listeners.delete(e);
      }),
      t
    );
  })(),
  nt =
    typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : self,
  Zs = (function () {
    function t() {
      (this.identityStore = new Js()),
        (this.eventBridge = new Ks()),
        (this.applicationContextProvider = new Vs());
    }
    return (
      (t.getInstance = function (e) {
        return (
          nt.analyticsConnectorInstances ||
            (nt.analyticsConnectorInstances = {}),
          nt.analyticsConnectorInstances[e] ||
            (nt.analyticsConnectorInstances[e] = new t()),
          nt.analyticsConnectorInstances[e]
        );
      }),
      t
    );
  })();
function Sr(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ee(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Sr(Object(n), !0).forEach(function (r) {
          Ve(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Sr(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function ln(t) {
  "@babel/helpers - typeof";
  return (
    (ln =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    ln(t)
  );
}
function qn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ir(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, Ui(r.key), r);
  }
}
function Bn(t, e, n) {
  return (
    e && Ir(t.prototype, e),
    n && Ir(t, n),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function Ve(t, e, n) {
  return (
    (e = Ui(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function Qs(t) {
  return eo(t) || to(t) || Di(t) || no();
}
function eo(t) {
  if (Array.isArray(t)) return fn(t);
}
function to(t) {
  if (
    (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  )
    return Array.from(t);
}
function Di(t, e) {
  if (t) {
    if (typeof t == "string") return fn(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (n === "Object" && t.constructor && (n = t.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fn(t, e);
  }
}
function fn(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function no() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ro(t, e) {
  var n = (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (!n) {
    if (
      Array.isArray(t) ||
      (n = Di(t)) ||
      (e && t && typeof t.length == "number")
    ) {
      n && (t = n);
      var r = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
        },
        e: function (c) {
          throw c;
        },
        f: i,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s = !0,
    o = !1,
    a;
  return {
    s: function () {
      n = n.call(t);
    },
    n: function () {
      var c = n.next();
      return (s = c.done), c;
    },
    e: function (c) {
      (o = !0), (a = c);
    },
    f: function () {
      try {
        !s && n.return != null && n.return();
      } finally {
        if (o) throw a;
      }
    },
  };
}
function io(t, e) {
  if (typeof t != "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Ui(t) {
  var e = io(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var w = {
    DEFAULT_INSTANCE: "$default_instance",
    API_VERSION: 2,
    MAX_STRING_LENGTH: 4096,
    MAX_PROPERTY_KEYS: 1e3,
    IDENTIFY_EVENT: "$identify",
    GROUP_IDENTIFY_EVENT: "$groupidentify",
    EVENT_LOG_URL: "api.amplitude.com",
    EVENT_LOG_EU_URL: "api.eu.amplitude.com",
    DYNAMIC_CONFIG_URL: "regionconfig.amplitude.com",
    DYNAMIC_CONFIG_EU_URL: "regionconfig.eu.amplitude.com",
    LAST_EVENT_ID: "amplitude_lastEventId",
    LAST_EVENT_TIME: "amplitude_lastEventTime",
    LAST_IDENTIFY_ID: "amplitude_lastIdentifyId",
    LAST_SEQUENCE_NUMBER: "amplitude_lastSequenceNumber",
    SESSION_ID: "amplitude_sessionId",
    DEVICE_ID: "amplitude_deviceId",
    OPT_OUT: "amplitude_optOut",
    USER_ID: "amplitude_userId",
    DEVICE_ID_INDEX: 0,
    USER_ID_INDEX: 1,
    OPT_OUT_INDEX: 2,
    SESSION_ID_INDEX: 3,
    LAST_EVENT_TIME_INDEX: 4,
    EVENT_ID_INDEX: 5,
    IDENTIFY_ID_INDEX: 6,
    SEQUENCE_NUMBER_INDEX: 7,
    COOKIE_TEST_PREFIX: "amp_cookie_test",
    COOKIE_PREFIX: "amp",
    STORAGE_DEFAULT: "",
    STORAGE_COOKIES: "cookies",
    STORAGE_NONE: "none",
    STORAGE_LOCAL: "localStorage",
    STORAGE_SESSION: "sessionStorage",
    REVENUE_EVENT: "revenue_amount",
    REVENUE_PRODUCT_ID: "$productId",
    REVENUE_QUANTITY: "$quantity",
    REVENUE_PRICE: "$price",
    REVENUE_REVENUE_TYPE: "$revenueType",
    AMP_DEVICE_ID_PARAM: "amp_device_id",
    AMP_REFERRER_PARAM: "amp_referrer",
    REFERRER: "referrer",
    REFERRING_DOMAIN: "referring_domain",
    UTM_SOURCE: "utm_source",
    UTM_MEDIUM: "utm_medium",
    UTM_CAMPAIGN: "utm_campaign",
    UTM_TERM: "utm_term",
    UTM_CONTENT: "utm_content",
    ATTRIBUTION_EVENT: "[Amplitude] Attribution Captured",
    TRANSPORT_HTTP: "http",
    TRANSPORT_BEACON: "beacon",
  },
  wr = {
    encode: function (e) {
      for (var n = "", r = 0; r < e.length; r++) {
        var i = e.charCodeAt(r);
        i < 128
          ? (n += String.fromCharCode(i))
          : i > 127 && i < 2048
          ? ((n += String.fromCharCode((i >> 6) | 192)),
            (n += String.fromCharCode((i & 63) | 128)))
          : ((n += String.fromCharCode((i >> 12) | 224)),
            (n += String.fromCharCode(((i >> 6) & 63) | 128)),
            (n += String.fromCharCode((i & 63) | 128)));
      }
      return n;
    },
    decode: function (e) {
      for (var n = "", r = 0, i = 0, s = 0, o = 0; r < e.length; )
        (i = e.charCodeAt(r)),
          i < 128
            ? ((n += String.fromCharCode(i)), r++)
            : i > 191 && i < 224
            ? ((s = e.charCodeAt(r + 1)),
              (n += String.fromCharCode(((i & 31) << 6) | (s & 63))),
              (r += 2))
            : ((s = e.charCodeAt(r + 1)),
              (o = e.charCodeAt(r + 2)),
              (n += String.fromCharCode(
                ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
              )),
              (r += 3));
      return n;
    },
  },
  k = (function () {
    if (typeof globalThis < "u") return globalThis;
    if (typeof window < "u") return window;
    if (typeof self < "u") return self;
    if (typeof global < "u") return global;
  })(),
  oe = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
      try {
        if (k.btoa && k.atob) return k.btoa(unescape(encodeURIComponent(e)));
      } catch {}
      return oe._encode(e);
    },
    _encode: function (e) {
      var n = "",
        r,
        i,
        s,
        o,
        a,
        c,
        u,
        p = 0;
      for (e = wr.encode(e); p < e.length; )
        (r = e.charCodeAt(p++)),
          (i = e.charCodeAt(p++)),
          (s = e.charCodeAt(p++)),
          (o = r >> 2),
          (a = ((r & 3) << 4) | (i >> 4)),
          (c = ((i & 15) << 2) | (s >> 6)),
          (u = s & 63),
          isNaN(i) ? (c = u = 64) : isNaN(s) && (u = 64),
          (n =
            n +
            oe._keyStr.charAt(o) +
            oe._keyStr.charAt(a) +
            oe._keyStr.charAt(c) +
            oe._keyStr.charAt(u));
      return n;
    },
    decode: function (e) {
      try {
        if (k.btoa && k.atob) return decodeURIComponent(escape(k.atob(e)));
      } catch {}
      return oe._decode(e);
    },
    _decode: function (e) {
      var n = "",
        r,
        i,
        s,
        o,
        a,
        c,
        u,
        p = 0;
      for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); p < e.length; )
        (o = oe._keyStr.indexOf(e.charAt(p++))),
          (a = oe._keyStr.indexOf(e.charAt(p++))),
          (c = oe._keyStr.indexOf(e.charAt(p++))),
          (u = oe._keyStr.indexOf(e.charAt(p++))),
          (r = (o << 2) | (a >> 4)),
          (i = ((a & 15) << 4) | (c >> 2)),
          (s = ((c & 3) << 6) | u),
          (n = n + String.fromCharCode(r)),
          c !== 64 && (n = n + String.fromCharCode(i)),
          u !== 64 && (n = n + String.fromCharCode(s));
      return (n = wr.decode(n)), n;
    },
  },
  so = Object.prototype.toString;
function N(t) {
  switch (so.call(t)) {
    case "[object Date]":
      return "date";
    case "[object RegExp]":
      return "regexp";
    case "[object Arguments]":
      return "arguments";
    case "[object Array]":
      return "array";
    case "[object Error]":
      return "error";
  }
  return t === null
    ? "null"
    : t === void 0
    ? "undefined"
    : t !== t
    ? "nan"
    : t && t.nodeType === 1
    ? "element"
    : typeof Buffer < "u" &&
      typeof Buffer.isBuffer == "function" &&
      Buffer.isBuffer(t)
    ? "buffer"
    : ((t = t.valueOf ? t.valueOf() : Object.prototype.valueOf.apply(t)),
      ln(t));
}
var ke = { DISABLE: 0, ERROR: 1, WARN: 2, INFO: 3 },
  it = ke.WARN,
  oo = function (e) {
    Object.prototype.hasOwnProperty.call(ke, e) && (it = ke[e]);
  },
  ao = function () {
    return it;
  },
  Q = {
    error: function (e) {
      it >= ke.ERROR && Qt(e);
    },
    warn: function (e) {
      it >= ke.WARN && Qt(e);
    },
    info: function (e) {
      it >= ke.INFO && Qt(e);
    },
  },
  Qt = function (e) {
    try {
      console.log("[Amplitude] " + e);
    } catch {}
  },
  co = function (e) {
    return !e || e.length === 0;
  },
  uo = function () {
    try {
      if (k.sessionStorage) return !0;
    } catch {}
    return !1;
  },
  lo = function t(e) {
    if (N(e) === "array") for (var n = 0; n < e.length; n++) e[n] = t(e[n]);
    else if (N(e) === "object") for (var r in e) r in e && (e[r] = t(e[r]));
    else e = fo(e);
    return e;
  },
  fo = function (e) {
    return N(e) === "string" && e.length > w.MAX_STRING_LENGTH
      ? e.substring(0, w.MAX_STRING_LENGTH)
      : e;
  },
  xt = function (e, n, r) {
    return N(e) !== r
      ? (Q.error(
          "Invalid " +
            n +
            " input type. Expected " +
            r +
            " but received " +
            N(e)
        ),
        !1)
      : !0;
  },
  po = function (e) {
    return xt(e, "deviceId", "string")
      ? e.indexOf(".") >= 0
        ? (Q.error(
            `Device IDs may not contain '.' characters. Value will be ignored: "`.concat(
              e,
              '"'
            )
          ),
          !1)
        : !0
      : !1;
  },
  ho = function (e) {
    return xt(e, "transport", "string")
      ? e !== w.TRANSPORT_HTTP && e !== w.TRANSPORT_BEACON
        ? (Q.error(
            "transport value must be one of '"
              .concat(w.TRANSPORT_BEACON, "' or '")
              .concat(w.TRANSPORT_HTTP, "'")
          ),
          !1)
        : e !== w.TRANSPORT_HTTP &&
          typeof navigator < "u" &&
          !navigator.sendBeacon
        ? (Q.error(
            "browser does not support sendBeacon, so transport must be HTTP"
          ),
          !1)
        : !0
      : !1;
  },
  dn = function (e) {
    var n = N(e);
    if (n !== "object")
      return (
        Q.error(
          "Error: invalid properties format. Expecting Javascript object, received " +
            n +
            ", ignoring"
        ),
        {}
      );
    if (Object.keys(e).length > w.MAX_PROPERTY_KEYS)
      return (
        Q.error("Error: too many properties (more than 1000), ignoring"), {}
      );
    var r = {};
    for (var i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        var s = i,
          o = N(s);
        o !== "string" &&
          ((s = String(s)),
          Q.warn(
            "WARNING: Non-string property key, received type " +
              o +
              ', coercing to string "' +
              s +
              '"'
          ));
        var a = mo(s, e[i]);
        a !== null && (r[s] = a);
      }
    return r;
  },
  go = ["nan", "function", "arguments", "regexp", "element"],
  mo = function t(e, n) {
    var r = N(n);
    if (go.indexOf(r) !== -1)
      Q.warn(
        'WARNING: Property key "' +
          e +
          '" with invalid value type ' +
          r +
          ", ignoring"
      ),
        (n = null);
    else if (r === "undefined") n = null;
    else if (r === "error")
      (n = String(n)),
        Q.warn(
          'WARNING: Property key "' +
            e +
            '" with value type error, coercing to ' +
            n
        );
    else if (r === "array") {
      for (var i = [], s = 0; s < n.length; s++) {
        var o = n[s],
          a = N(o);
        if (a === "array") {
          Q.warn(
            "WARNING: Cannot have " +
              a +
              " nested in an array property value, skipping"
          );
          continue;
        } else a === "object" ? i.push(dn(o)) : i.push(t(e, o));
      }
      n = i;
    } else r === "object" && (n = dn(n));
    return n;
  },
  _o = function (e) {
    var n = N(e);
    if (n !== "object")
      return (
        Q.error(
          "Error: invalid groups format. Expecting Javascript object, received " +
            n +
            ", ignoring"
        ),
        {}
      );
    var r = {};
    for (var i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        var s = i,
          o = N(s);
        o !== "string" &&
          ((s = String(s)),
          Q.warn(
            "WARNING: Non-string groupType, received type " +
              o +
              ', coercing to string "' +
              s +
              '"'
          ));
        var a = yo(s, e[i]);
        a !== null && (r[s] = a);
      }
    return r;
  },
  yo = function (e, n) {
    var r = N(n);
    if (r === "string") return n;
    if (r === "date" || r === "number" || r === "boolean")
      return (
        (n = String(n)),
        Q.warn(
          "WARNING: Non-string groupName, received type " +
            r +
            ', coercing to string "' +
            n +
            '"'
        ),
        n
      );
    if (r === "array") {
      for (var i = [], s = 0; s < n.length; s++) {
        var o = n[s],
          a = N(o);
        if (a === "array" || a === "object") {
          Q.warn("WARNING: Skipping nested " + a + " in array groupName");
          continue;
        } else
          a === "string"
            ? i.push(o)
            : (a === "date" || a === "number" || a === "boolean") &&
              ((o = String(o)),
              Q.warn(
                "WARNING: Non-string groupName, received type " +
                  a +
                  ', coercing to string "' +
                  o +
                  '"'
              ),
              i.push(o));
      }
      return i;
    }
    Q.warn(
      "WARNING: Non-string groupName, received type " +
        r +
        ". Please use strings or array of strings for groupName"
    );
  },
  vo = function (e, n) {
    e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var r = new RegExp("[\\?&]" + e + "=([^&#]*)"),
      i = r.exec(n);
    return i === null ? void 0 : decodeURIComponent(i[1].replace(/\+/g, " "));
  },
  bo = function () {
    return typeof WorkerGlobalScope < "u";
  },
  Eo = function (e) {
    return xt(e, "sessionId", "number") && new Date(e).getTime() > 0
      ? !0
      : (Q.error(
          "sessionId value must in milliseconds since epoch (Unix Timestamp)"
        ),
        !1);
  },
  So = function () {
    return k.location;
  },
  Io = function (e) {
    var n = k.location ? k.location.hostname : "";
    if (e) {
      if (typeof document < "u") {
        var r = document.createElement("a");
        return (r.href = e), r.hostname || n;
      }
      if (typeof URL == "function") {
        var i = new URL(e);
        return i.hostname || n;
      }
    }
    return n;
  },
  _ = {
    setLogLevel: oo,
    getLogLevel: ao,
    logLevels: ke,
    log: Q,
    isEmptyString: co,
    isWebWorkerEnvironment: bo,
    getQueryParam: vo,
    sessionStorageEnabled: uo,
    truncate: lo,
    validateGroups: _o,
    validateInput: xt,
    validateProperties: dn,
    validateDeviceId: po,
    validateTransport: ho,
    validateSessionId: Eo,
    getLocation: So,
    getHost: Io,
  },
  xi = function (e) {
    try {
      for (
        var n = document.cookie.split(";"), r = null, i = 0;
        i < n.length;
        i++
      ) {
        for (var s = n[i]; s.charAt(0) === " "; ) s = s.substring(1, s.length);
        if (s.indexOf(e) === 0) {
          r = s.substring(e.length, s.length);
          break;
        }
      }
      return r;
    } catch {
      return null;
    }
  },
  wo = function (e) {
    try {
      var n = document.cookie.split(";").map(function (a) {
          return a.trimStart();
        }),
        r = [],
        i = ro(n),
        s;
      try {
        for (i.s(); !(s = i.n()).done; ) {
          for (var o = s.value; o.charAt(0) === " "; ) o = o.substring(1);
          o.indexOf(e) === 0 && r.push(o.substring(e.length));
        }
      } catch (a) {
        i.e(a);
      } finally {
        i.f();
      }
      return r;
    } catch {
      return [];
    }
  },
  pn = function (e, n, r) {
    var i = n !== null ? r.expirationDays : -1;
    if (i) {
      var s = new Date();
      s.setTime(s.getTime() + i * 24 * 60 * 60 * 1e3), (i = s);
    }
    var o = e + "=" + n;
    i && (o += "; expires=" + i.toUTCString()),
      (o += "; path=/"),
      r.domain && (o += "; domain=" + r.domain),
      r.secure && (o += "; Secure"),
      r.sameSite && (o += "; SameSite=" + r.sameSite),
      (document.cookie = o);
  },
  hn = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
      n = e.split(".")[w.LAST_EVENT_TIME_INDEX],
      r;
    return (
      n && (r = parseInt(n, 32)),
      r || (_.log.warn("unable to parse malformed cookie: ".concat(e)), 0)
    );
  },
  To = function (e) {
    return Qs(e).sort(function (n, r) {
      var i = hn(n),
        s = hn(r);
      return s - i;
    });
  },
  Oo = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = w.COOKIE_TEST_PREFIX;
    if (typeof document > "u") return !1;
    var r = !1;
    try {
      var i = String(Date.now());
      pn(n, i, e),
        _.log.info("Testing if cookies available"),
        (r = xi(n + "=") === i);
    } catch (s) {
      _.log.warn(
        'Error thrown when checking for cookies. Reason: "'.concat(s, '"')
      );
    } finally {
      _.log.info("Cleaning up cookies availability test"), pn(n, null, e);
    }
    return r;
  },
  X = {
    set: pn,
    get: xi,
    getAll: wo,
    getLastEventTime: hn,
    sortByEventTime: To,
    areCookiesEnabled: Oo,
  },
  No = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  Hn = function () {
    for (var e = "", n = 0; n < 22; ++n)
      e += No.charAt(Math.floor(Math.random() * 64));
    return e;
  },
  Mi = function (e) {
    var n = _.getHost(e),
      r = n.split("."),
      i = [],
      s = "_tldtest_" + Hn();
    if (_.isWebWorkerEnvironment()) return "";
    for (var o = r.length - 2; o >= 0; --o) i.push(r.slice(o).join("."));
    for (var a = 0; a < i.length; ++a) {
      var c = i[a],
        u = { domain: "." + c };
      if ((X.set(s, 1, u), X.get(s))) return X.set(s, null, u), c;
    }
    return "";
  },
  re = { expirationDays: void 0, domain: void 0 },
  Ao = function () {
    re = { expirationDays: void 0, domain: void 0 };
  },
  Ro = function (e) {
    if (arguments.length === 0) return re;
    (e = e || {}),
      (re.expirationDays = e.expirationDays),
      (re.secure = e.secure),
      (re.sameSite = e.sameSite);
    var n = _.isEmptyString(e.domain)
        ? "." + Mi(_.getLocation().href)
        : e.domain,
      r = Math.random();
    (re.domain = n), Fi("amplitude_test", r);
    var i = Li("amplitude_test");
    return (
      (!i || i !== r) && (n = null), ji("amplitude_test"), (re.domain = n), re
    );
  },
  ot = function (e) {
    var n = "";
    return (
      re.domain &&
        (n = re.domain.charAt(0) === "." ? re.domain.substring(1) : re.domain),
      e + n
    );
  },
  Li = function (e) {
    var n = ot(e) + "=",
      r = X.get(n);
    try {
      if (r) return JSON.parse(oe.decode(r));
    } catch {
      return null;
    }
    return null;
  },
  Fi = function (e, n) {
    try {
      return X.set(ot(e), oe.encode(JSON.stringify(n)), re), !0;
    } catch {
      return !1;
    }
  },
  Co = function (e, n) {
    try {
      return X.set(ot(e), n, re), !0;
    } catch {
      return !1;
    }
  },
  ko = function (e) {
    var n = ot(e) + "=";
    return X.get(n);
  },
  ji = function (e) {
    try {
      return X.set(ot(e), null, re), !0;
    } catch {
      return !1;
    }
  },
  Po = {
    reset: Ao,
    options: Ro,
    get: Li,
    set: Fi,
    remove: ji,
    setRaw: Co,
    getRaw: ko,
  },
  Do = (function () {
    function t() {
      qn(this, t), (this.map = new Map()), (this.length = 0);
    }
    return (
      Bn(t, [
        {
          key: "key",
          value: function (n) {
            var r = Array.from(this.map.keys()),
              i = r[n];
            return this.map.get(i);
          },
        },
        {
          key: "getItem",
          value: function (n) {
            return this.map.get(n);
          },
        },
        {
          key: "setItem",
          value: function (n, r) {
            this.map.has(n) || (this.length += 1), this.map.set(n, r);
          },
        },
        {
          key: "removeItem",
          value: function (n) {
            this.map.has(n) && ((this.length -= 1), this.map.delete(n));
          },
        },
        {
          key: "clear",
          value: function () {
            this.map.clear(), (this.length = 0);
          },
        },
      ]),
      t
    );
  })(),
  Te;
{
  var Uo = function () {
    var e = new Date(),
      n;
    try {
      return (
        k.localStorage.setItem(e, e),
        (n = k.localStorage.getItem(e) === String(e)),
        k.localStorage.removeItem(e),
        n
      );
    } catch {}
    return !1;
  };
  if (Uo()) Te = k.localStorage;
  else if (typeof k < "u" && k.globalStorage)
    try {
      Te = k.globalStorage[k.location.hostname];
    } catch {}
  else if (typeof document < "u") {
    var W = document.createElement("div"),
      _e = "localStorage";
    (W.style.display = "none"),
      document.getElementsByTagName("head")[0].appendChild(W),
      W.addBehavior &&
        (W.addBehavior("#default#userdata"),
        (Te = {
          length: 0,
          setItem: function (e, n) {
            W.load(_e),
              W.getAttribute(e) || this.length++,
              W.setAttribute(e, n),
              W.save(_e);
          },
          getItem: function (e) {
            return W.load(_e), W.getAttribute(e);
          },
          removeItem: function (e) {
            W.load(_e),
              W.getAttribute(e) && this.length--,
              W.removeAttribute(e),
              W.save(_e);
          },
          clear: function () {
            W.load(_e);
            for (
              var e = 0, n;
              (n = W.XMLDocument.documentElement.attributes[e++]);

            )
              W.removeAttribute(n.name);
            W.save(_e), (this.length = 0);
          },
          key: function (e) {
            return W.load(_e), W.XMLDocument.documentElement.attributes[e];
          },
        }),
        W.load(_e),
        (Te.length = W.XMLDocument.documentElement.attributes.length));
  } else _.isWebWorkerEnvironment() && (Te = new Do());
  Te ||
    (Te = {
      length: 0,
      setItem: function (e, n) {},
      getItem: function (e) {},
      removeItem: function (e) {},
      clear: function () {},
      key: function (e) {},
    });
}
var pe = Te,
  $i = function () {
    this.storage = null;
  };
$i.prototype.getStorage = function (t) {
  if (this.storage !== null) return this.storage;
  if (!t && X.areCookiesEnabled()) this.storage = Po;
  else {
    var e = "amp_cookiestore_";
    this.storage = {
      _options: { expirationDays: void 0, domain: void 0, secure: !1 },
      reset: function () {
        this._options = { expirationDays: void 0, domain: void 0, secure: !1 };
      },
      options: function (r) {
        return arguments.length === 0
          ? this._options
          : ((r = r || {}),
            (this._options.expirationDays =
              r.expirationDays || this._options.expirationDays),
            (this._options.domain =
              r.domain ||
              this._options.domain ||
              (k && k.location && k.location.hostname)),
            (this._options.secure = r.secure || !1));
      },
      get: function (r) {
        try {
          return JSON.parse(pe.getItem(e + r));
        } catch {}
        return null;
      },
      set: function (r, i) {
        try {
          return pe.setItem(e + r, JSON.stringify(i)), !0;
        } catch {}
        return !1;
      },
      remove: function (r) {
        try {
          pe.removeItem(e + r);
        } catch {
          return !1;
        }
      },
    };
  }
  return this.storage;
};
var He,
  xo =
    ((He = {}),
    Ve(He, w.STORAGE_COOKIES, !0),
    Ve(He, w.STORAGE_NONE, !0),
    Ve(He, w.STORAGE_LOCAL, !0),
    Ve(He, w.STORAGE_SESSION, !0),
    He),
  Mo = (function () {
    function t(e) {
      var n = e.storageKey,
        r = e.disableCookies,
        i = e.domain,
        s = e.secure,
        o = e.sameSite,
        a = e.expirationDays,
        c = e.storage;
      qn(this, t),
        (this.storageKey = n),
        (this.domain = i),
        (this.secure = s),
        (this.sameSite = o),
        (this.expirationDays = a),
        (this.cookieDomain = "");
      var u = _.getLocation() ? _.getLocation().href : void 0,
        p = r ? "" : Mi(u);
      if (((this.cookieDomain = i || (p ? "." + p : null)), xo[c]))
        this.storage = c;
      else {
        var h =
          r ||
          !X.areCookiesEnabled({
            domain: this.cookieDomain,
            secure: this.secure,
            sameSite: this.sameSite,
            expirationDays: this.expirationDays,
          });
        h
          ? (this.storage = w.STORAGE_LOCAL)
          : (this.storage = w.STORAGE_COOKIES);
      }
    }
    return (
      Bn(t, [
        {
          key: "getCookieStorageKey",
          value: function () {
            if (!this.domain) return this.storageKey;
            var n =
              this.domain.charAt(0) === "."
                ? this.domain.substring(1)
                : this.domain;
            return "".concat(this.storageKey).concat(n ? "_".concat(n) : "");
          },
        },
        {
          key: "save",
          value: function (n) {
            var r = n.deviceId,
              i = n.userId,
              s = n.optOut,
              o = n.sessionId,
              a = n.lastEventTime,
              c = n.eventId,
              u = n.identifyId,
              p = n.sequenceNumber;
            if (this.storage !== w.STORAGE_NONE) {
              var h = [
                r,
                oe.encode(i || ""),
                s ? "1" : "",
                o ? o.toString(32) : "0",
                a ? a.toString(32) : "0",
                c ? c.toString(32) : "0",
                u ? u.toString(32) : "0",
                p ? p.toString(32) : "0",
              ].join(".");
              switch (this.storage) {
                case w.STORAGE_SESSION:
                  k.sessionStorage &&
                    k.sessionStorage.setItem(this.storageKey, h);
                  break;
                case w.STORAGE_LOCAL:
                  pe.setItem(this.storageKey, h);
                  break;
                case w.STORAGE_COOKIES:
                  this.saveCookie(h);
                  break;
              }
            }
          },
        },
        {
          key: "saveCookie",
          value: function (n) {
            X.set(this.getCookieStorageKey(), n, {
              domain: this.cookieDomain,
              secure: this.secure,
              sameSite: this.sameSite,
              expirationDays: this.expirationDays,
            });
          },
        },
        {
          key: "load",
          value: function () {
            var n = this,
              r;
            if (this.storage === w.STORAGE_COOKIES) {
              var i = this.getCookieStorageKey() + "=",
                s = X.getAll(i);
              if (s.length === 0 || s.length === 1) r = s[0];
              else {
                var o = X.sortByEventTime(s)[0];
                s.forEach(function () {
                  return X.set(n.getCookieStorageKey(), null, {});
                }),
                  this.saveCookie(o),
                  (r = X.get(i));
              }
            }
            if ((r || (r = pe.getItem(this.storageKey)), !r))
              try {
                r =
                  k.sessionStorage && k.sessionStorage.getItem(this.storageKey);
              } catch (u) {
                _.log.info(
                  'window.sessionStorage unavailable. Reason: "'.concat(u, '"')
                );
              }
            if (!r) return null;
            var a = r.split("."),
              c = null;
            if (a[w.USER_ID_INDEX])
              try {
                c = oe.decode(a[w.USER_ID_INDEX]);
              } catch {
                c = null;
              }
            return {
              deviceId: a[w.DEVICE_ID_INDEX],
              userId: c,
              optOut: a[w.OPT_OUT_INDEX] === "1",
              sessionId: parseInt(a[w.SESSION_ID_INDEX], 32),
              lastEventTime: parseInt(a[w.LAST_EVENT_TIME_INDEX], 32),
              eventId: parseInt(a[w.EVENT_ID_INDEX], 32),
              identifyId: parseInt(a[w.IDENTIFY_ID_INDEX], 32),
              sequenceNumber: parseInt(a[w.SEQUENCE_NUMBER_INDEX], 32),
            };
          },
        },
        {
          key: "clear",
          value: function () {
            var n;
            if (
              (this.storage === w.STORAGE_COOKIES &&
                ((n = X.get(this.getCookieStorageKey() + "=")),
                X.set(this.getCookieStorageKey(), null, {
                  domain: this.cookieDomain,
                  secure: this.secure,
                  sameSite: this.sameSite,
                  expirationDays: 0,
                })),
              n || ((n = pe.getItem(this.storageKey)), pe.clear()),
              !n)
            )
              try {
                (n =
                  k.sessionStorage &&
                  k.sessionStorage.getItem(this.storageKey)),
                  k.sessionStorage.clear();
              } catch (r) {
                _.log.info(
                  'window.sessionStorage unavailable. Reason: "'.concat(r, '"')
                );
              }
            return !!n;
          },
        },
      ]),
      t
    );
  })(),
  Lo = function (e, n) {
    var r = e ? "?" + e.split(".").slice(-1)[0].replace(/\|/g, "&") : "",
      i = function (g, l, m, v) {
        return _.getQueryParam(g, l) || _.getQueryParam(m, v);
      },
      s = i(w.UTM_SOURCE, n, "utmcsr", r),
      o = i(w.UTM_MEDIUM, n, "utmcmd", r),
      a = i(w.UTM_CAMPAIGN, n, "utmccn", r),
      c = i(w.UTM_TERM, n, "utmctr", r),
      u = i(w.UTM_CONTENT, n, "utmcct", r),
      p = {},
      h = function (g, l) {
        _.isEmptyString(l) || (p[g] = l);
      };
    return (
      h(w.UTM_SOURCE, s),
      h(w.UTM_MEDIUM, o),
      h(w.UTM_CAMPAIGN, a),
      h(w.UTM_TERM, c),
      h(w.UTM_CONTENT, u),
      p
    );
  },
  Fo = "$add",
  jo = "$append",
  gn = "$clearAll",
  $o = "$prepend",
  Go = "$set",
  qo = "$setOnce",
  Bo = "$unset",
  Ho = "$preInsert",
  Vo = "$postInsert",
  Wo = "$remove",
  K = function () {
    (this.userPropertiesOperations = {}), (this.properties = []);
  };
K.prototype.add = function (t, e) {
  return (
    N(e) === "number" || N(e) === "string"
      ? this._addOperation(Fo, t, e)
      : _.log.error(
          "Unsupported type for value: " + N(e) + ", expecting number or string"
        ),
    this
  );
};
K.prototype.append = function (t, e) {
  return this._addOperation(jo, t, e), this;
};
K.prototype.clearAll = function () {
  return Object.keys(this.userPropertiesOperations).length > 0
    ? (Object.prototype.hasOwnProperty.call(
        this.userPropertiesOperations,
        gn
      ) ||
        _.log.error(
          "Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"
        ),
      this)
    : ((this.userPropertiesOperations[gn] = "-"), this);
};
K.prototype.prepend = function (t, e) {
  return this._addOperation($o, t, e), this;
};
K.prototype.set = function (t, e) {
  return this._addOperation(Go, t, e), this;
};
K.prototype.setOnce = function (t, e) {
  return this._addOperation(qo, t, e), this;
};
K.prototype.unset = function (t) {
  return this._addOperation(Bo, t, "-"), this;
};
K.prototype.preInsert = function (t, e) {
  return this._addOperation(Ho, t, e), this;
};
K.prototype.postInsert = function (t, e) {
  return this._addOperation(Vo, t, e), this;
};
K.prototype.remove = function (t, e) {
  return this._addOperation(Wo, t, e), this;
};
K.prototype._addOperation = function (t, e, n) {
  if (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, gn)) {
    _.log.error(
      "This identify already contains a $clearAll operation, skipping operation " +
        t
    );
    return;
  }
  if (this.properties.indexOf(e) !== -1) {
    _.log.error(
      'User property "' +
        e +
        '" already used in this identify, skipping operation ' +
        t
    );
    return;
  }
  Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, t) ||
    (this.userPropertiesOperations[t] = {}),
    (this.userPropertiesOperations[t][e] = n),
    this.properties.push(e);
};
var Gi = function (e, n, r) {
    (this.url = e), (this.data = n || {}), (this.headers = r);
  },
  Ko = "Cross-Origin-Resource-Policy";
function zo(t, e) {
  for (var n in e) (n === Ko && !e[n]) || t.setRequestHeader(n, e[n]);
}
Gi.prototype.send = function (t) {
  var e = !!k.XDomainRequest;
  if (e) {
    var n = new k.XDomainRequest();
    n.open("POST", this.url, !0),
      (n.onload = function () {
        t(200, n.responseText);
      }),
      (n.onerror = function () {
        n.responseText === "Request Entity Too Large"
          ? t(413, n.responseText)
          : t(500, n.responseText);
      }),
      (n.ontimeout = function () {}),
      (n.onprogress = function () {}),
      n.send(Zt.stringify(this.data));
  } else if (typeof XMLHttpRequest < "u") {
    var r = new XMLHttpRequest();
    r.open("POST", this.url, !0),
      (r.onreadystatechange = function () {
        r.readyState === 4 && t(r.status, r.responseText);
      }),
      zo(r, this.headers),
      r.send(Zt.stringify(this.data));
  } else {
    var i = void 0;
    fetch(this.url, {
      method: "POST",
      headers: this.headers,
      body: Zt.stringify(this.data),
    })
      .then(function (s) {
        return (i = s.status), s.text();
      })
      .then(function (s) {
        t(i, s);
      });
  }
};
var ge = function () {
  (this._price = null),
    (this._productId = null),
    (this._quantity = 1),
    (this._revenueType = null),
    (this._properties = null);
};
ge.prototype.setProductId = function (e) {
  return (
    N(e) !== "string"
      ? _.log.error(
          "Unsupported type for productId: " + N(e) + ", expecting string"
        )
      : _.isEmptyString(e)
      ? _.log.error("Invalid empty productId")
      : (this._productId = e),
    this
  );
};
ge.prototype.setQuantity = function (e) {
  return (
    N(e) !== "number"
      ? _.log.error(
          "Unsupported type for quantity: " + N(e) + ", expecting number"
        )
      : (this._quantity = parseInt(e)),
    this
  );
};
ge.prototype.setPrice = function (e) {
  return (
    N(e) !== "number"
      ? _.log.error(
          "Unsupported type for price: " + N(e) + ", expecting number"
        )
      : (this._price = e),
    this
  );
};
ge.prototype.setRevenueType = function (e) {
  return (
    N(e) !== "string"
      ? _.log.error(
          "Unsupported type for revenueType: " + N(e) + ", expecting string"
        )
      : (this._revenueType = e),
    this
  );
};
ge.prototype.setEventProperties = function (e) {
  return (
    N(e) !== "object"
      ? _.log.error(
          "Unsupported type for eventProperties: " + N(e) + ", expecting object"
        )
      : (this._properties = _.validateProperties(e)),
    this
  );
};
ge.prototype._isValidRevenue = function () {
  return N(this._price) !== "number"
    ? (_.log.error("Invalid revenue, need to set price field"), !1)
    : !0;
};
ge.prototype._toJSONObject = function () {
  var e = N(this._properties) === "object" ? this._properties : {};
  return (
    this._productId !== null && (e[w.REVENUE_PRODUCT_ID] = this._productId),
    this._quantity !== null && (e[w.REVENUE_QUANTITY] = this._quantity),
    this._price !== null && (e[w.REVENUE_PRICE] = this._price),
    this._revenueType !== null &&
      (e[w.REVENUE_REVENUE_TYPE] = this._revenueType),
    e
  );
};
var Yo = function t(e) {
    return e
      ? (e ^ ((Math.random() * 16) >> (e / 4))).toString(16)
      : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, t);
  },
  Xo = function () {
    return (
      (typeof navigator < "u" &&
        ((navigator.languages && navigator.languages[0]) ||
          navigator.language ||
          navigator.userLanguage)) ||
      ""
    );
  },
  Jo = { getLanguage: Xo },
  De = { US: "US", EU: "EU" },
  qi = function (e) {
    var n = w.EVENT_LOG_URL;
    switch (e) {
      case De.EU:
        n = w.EVENT_LOG_EU_URL;
        break;
      case De.US:
        n = w.EVENT_LOG_URL;
        break;
    }
    return n;
  },
  Zo = function (e) {
    var n = w.DYNAMIC_CONFIG_URL;
    switch (e) {
      case De.EU:
        n = w.DYNAMIC_CONFIG_EU_URL;
        break;
      case De.US:
        n = w.DYNAMIC_CONFIG_URL;
        break;
    }
    return n;
  },
  Bi = "8.21.9",
  Ne = {
    apiEndpoint: w.EVENT_LOG_URL,
    batchEvents: !1,
    cookieExpiration: 365,
    cookieName: "amplitude_id",
    sameSiteCookie: "Lax",
    cookieForceUpgrade: !1,
    deferInitialization: !1,
    disableCookies: !1,
    deviceIdFromUrlParam: !1,
    domain: "",
    eventUploadPeriodMillis: 30 * 1e3,
    eventUploadThreshold: 30,
    forceHttps: !0,
    includeFbclid: !1,
    includeGclid: !1,
    includeReferrer: !1,
    includeUtm: !1,
    ingestionMetadata: { sourceName: "", sourceVersion: "" },
    language: Jo.getLanguage(),
    library: { name: "amplitude-js", version: Bi },
    logLevel: "WARN",
    logAttributionCapturedEvent: !1,
    optOut: !1,
    onError: function () {},
    onExitPage: function () {},
    onNewSessionStart: function () {},
    plan: { branch: "", source: "", version: "", versionId: "" },
    platform: "Web",
    savedMaxCount: 1e3,
    saveEvents: !0,
    saveParamsReferrerOncePerSession: !0,
    secureCookie: !1,
    sessionTimeout: 30 * 60 * 1e3,
    storage: w.STORAGE_DEFAULT,
    trackingOptions: {
      city: !0,
      country: !0,
      carrier: !0,
      device_manufacturer: !0,
      device_model: !0,
      dma: !0,
      ip_address: !0,
      language: !0,
      os_name: !0,
      os_version: !0,
      platform: !0,
      region: !0,
      version_name: !0,
    },
    transport: w.TRANSPORT_HTTP,
    unsetParamsReferrerOnNewSession: !1,
    unsentKey: "amplitude_unsent",
    unsentIdentifyKey: "amplitude_unsent_identify",
    uploadBatchSize: 100,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Cross-Origin-Resource-Policy": "cross-origin",
    },
    serverZone: De.US,
    useDynamicConfig: !1,
    serverZoneBasedApi: !1,
    sessionId: null,
    partnerId: "",
  },
  Qo = (function () {
    function t() {
      return (
        qn(this, t),
        t.instance ||
          ((this.ingestionEndpoint = w.EVENT_LOG_URL), (t.instance = this)),
        t.instance
      );
    }
    return (
      Bn(t, [
        {
          key: "refresh",
          value: function (n, r, i) {
            var s = "https";
            !r && k.location.protocol !== "https:" && (s = "http");
            var o = s + "://" + Zo(n),
              a = this,
              c = !!k.XDomainRequest;
            if (c) {
              var u = new k.XDomainRequest();
              u.open("GET", o, !0),
                (u.onload = function () {
                  var h = JSON.parse(u.responseText);
                  (a.ingestionEndpoint = h.ingestionEndpoint), i && i();
                }),
                (u.onerror = function () {}),
                (u.ontimeout = function () {}),
                (u.onprogress = function () {}),
                u.send();
            } else {
              var p = new XMLHttpRequest();
              p.open("GET", o, !0),
                (p.onreadystatechange = function () {
                  if (p.readyState === 4 && p.status === 200) {
                    var h = JSON.parse(p.responseText);
                    (a.ingestionEndpoint = h.ingestionEndpoint), i && i();
                  }
                }),
                p.send();
            }
          },
        },
      ]),
      t
    );
  })(),
  Tr = new Qo(),
  T = function (e) {
    !jn() &&
      !_.isWebWorkerEnvironment() &&
      _.log.warn(
        "amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node"
      ),
      (this._instanceName = _.isEmptyString(e)
        ? w.DEFAULT_INSTANCE
        : e.toLowerCase()),
      (this._unsentEvents = []),
      (this._unsentIdentifys = []),
      (this.options = ee(
        ee({}, Ne),
        {},
        {
          headers: ee({}, Ne.headers),
          ingestionMetadata: ee({}, Ne.ingestionMetadata),
          library: ee({}, Ne.library),
          plan: ee({}, Ne.plan),
          trackingOptions: ee({}, Ne.trackingOptions),
        }
      )),
      (this._q = []),
      (this._sending = !1),
      (this._updateScheduled = !1),
      (this._onInitCallbacks = []),
      (this._onNewSessionStartCallbacks = []),
      (this._eventId = 0),
      (this._identifyId = 0),
      (this._lastEventTime = null),
      (this._newSession = !1),
      (this._sequenceNumber = 0),
      (this._sessionId = null),
      (this._isInitialized = !1),
      (this._connector = null),
      (this._userAgent =
        (typeof navigator < "u" && navigator && navigator.userAgent) || null),
      (this._ua = new Hs(this._userAgent).getResult());
  };
T.prototype.Identify = K;
T.prototype.Revenue = ge;
T.prototype.init = function (e, n, r, i) {
  var s = this;
  if (N(e) !== "string" || _.isEmptyString(e)) {
    _.log.error("Invalid apiKey. Please re-initialize with a valid apiKey");
    return;
  }
  try {
    (this._connector = Zs.getInstance(this._instanceName)),
      ea(this.options, r),
      (jn() || _.isWebWorkerEnvironment()) &&
        k.Prototype !== void 0 &&
        Array.prototype.toJSON &&
        (Cs(),
        _.log.warn(
          "Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify"
        )),
      this.options.cookieName !== Ne.cookieName &&
        _.log.warn(
          "The cookieName option is deprecated. We will be ignoring it for newer cookies"
        ),
      this.options.serverZoneBasedApi &&
        (this.options.apiEndpoint = qi(this.options.serverZone)),
      this._refreshDynamicConfig(),
      (this.options.apiKey = e),
      (this._storageSuffix =
        "_" +
        e +
        (this._instanceName === w.DEFAULT_INSTANCE
          ? ""
          : "_" + this._instanceName)),
      (this._storageSuffixV5 = e.slice(0, 6)),
      (this._oldCookiename = this.options.cookieName + this._storageSuffix),
      (this._unsentKey = this.options.unsentKey + this._storageSuffix),
      (this._unsentIdentifyKey =
        this.options.unsentIdentifyKey + this._storageSuffix),
      (this._cookieName = w.COOKIE_PREFIX + "_" + this._storageSuffixV5),
      (this.cookieStorage = new $i().getStorage(this.options.disableCookies)),
      this.cookieStorage.options({
        expirationDays: this.options.cookieExpiration,
        domain: this.options.domain,
        secure: this.options.secureCookie,
        sameSite: this.options.sameSiteCookie,
      }),
      (this._metadataStorage = new Mo({
        storageKey: this._cookieName,
        disableCookies: this.options.disableCookies,
        expirationDays: this.options.cookieExpiration,
        domain: this.options.domain,
        secure: this.options.secureCookie,
        sameSite: this.options.sameSiteCookie,
        storage: this.options.storage,
      }));
    var o = !!this.cookieStorage.get(this._oldCookiename),
      a = !!this._metadataStorage.load();
    this._useOldCookie = !a && o && !this.options.cookieForceUpgrade;
    var c = a || o;
    if (this.options.deferInitialization && !c) {
      this._deferInitialization(e, n, r, i);
      return;
    }
    (this.options.domain = this.cookieStorage.options().domain),
      N(this.options.logLevel) === "string" &&
        _.setLogLevel(this.options.logLevel);
    var u = ia(this);
    (this._apiPropertiesTrackingOptions =
      Object.keys(u).length > 0 ? { tracking_options: u } : {}),
      this.options.cookieForceUpgrade &&
        o &&
        (a || ta(this), this.cookieStorage.remove(this._oldCookiename)),
      Vn(this),
      (this._pendingReadStorage = !0);
    var p = function (m) {
      r &&
        r.deviceId &&
        !_.validateDeviceId(r.deviceId) &&
        (_.log.error(
          'Invalid device ID rejected. Randomly generated UUID will be used instead of "'.concat(
            r.deviceId,
            '"'
          )
        ),
        delete r.deviceId),
        (s.options.deviceId = s._getInitialDeviceId(r && r.deviceId, m)),
        (s.options.userId =
          (N(n) === "string" && !_.isEmptyString(n) && n) ||
          (N(n) === "number" && n.toString()) ||
          s.options.userId ||
          null);
      var v = new Date().getTime(),
        j =
          !s._sessionId ||
          !s._lastEventTime ||
          v - s._lastEventTime > s.options.sessionTimeout ||
          s.options.sessionId;
      j &&
        (s.options.unsetParamsReferrerOnNewSession && s._unsetUTMParams(),
        (s._newSession = !0),
        (s._sessionId = s.options.sessionId || v),
        (s.options.sessionId = void 0),
        s.options.saveParamsReferrerOncePerSession &&
          s._trackParamsAndReferrer()),
        s.options.saveParamsReferrerOncePerSession ||
          s._trackParamsAndReferrer(),
        s.options.saveEvents && (Or(s._unsentEvents), Or(s._unsentIdentifys)),
        (s._lastEventTime = v),
        we(s),
        (s._pendingReadStorage = !1),
        s._sendEventsIfReady();
      for (var H = 0; H < s._onInitCallbacks.length; H++)
        s._onInitCallbacks[H](s);
      (s._onInitCallbacks = []),
        (s._isInitialized = !0),
        j && s._runNewSessionStartCallbacks();
    };
    this.options.saveEvents &&
      ((this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey)
        .map(function (l) {
          return { event: l };
        })
        .concat(this._unsentEvents)),
      (this._unsentIdentifys = this._loadSavedUnsentEvents(
        this.options.unsentIdentifyKey
      )
        .map(function (l) {
          return { event: l };
        })
        .concat(this._unsentIdentifys))),
      r &&
        r.onNewSessionStart &&
        this.onNewSessionStart(this.options.onNewSessionStart),
      p(),
      this.runQueuedFunctions(),
      N(i) === "function" && i(this);
    var h = this.options.onExitPage;
    if (N(h) === "function" && k.addEventListener && !this.pageHandlersAdded) {
      this.pageHandlersAdded = !0;
      var f = function () {
        var m = s.options.transport;
        s.setTransport(w.TRANSPORT_BEACON), h(), s.setTransport(m);
      };
      k.addEventListener(
        "pagehide",
        function () {
          f();
        },
        !1
      );
    }
    this._connector.eventBridge.setEventReceiver(function (l) {
      s._logEvent(l.eventType, l.eventProperties, l.userProperties);
    });
    var g = this._connector.identityStore.editIdentity();
    this.options.deviceId && g.setDeviceId(this.options.deviceId),
      this.options.userId && g.setUserId(this.options.userId),
      g.commit();
  } catch (l) {
    _.log.error(l), r && N(r.onError) === "function" && r.onError(l);
  }
};
T.prototype._runNewSessionStartCallbacks = function () {
  for (var t = 0; t < this._onNewSessionStartCallbacks.length; t++)
    this._onNewSessionStartCallbacks[t](this);
};
T.prototype.deleteLowerLevelDomainCookies = function () {
  var t = _.getHost(),
    e =
      this.options.domain && this.options.domain[0] === "."
        ? this.options.domain.slice(1)
        : this.options.domain;
  if (
    !(!e || !_.isWebWorkerEnvironment()) &&
    t !== e &&
    new RegExp(e + "$").test(t)
  ) {
    for (
      var n = t.split("."), r = e.split("."), i = n.length;
      i > r.length;
      --i
    ) {
      var s = n.slice(n.length - i).join(".");
      X.set(this._cookieName, null, { domain: "." + s });
    }
    X.set(this._cookieName, null, {});
  }
};
T.prototype._getInitialDeviceId = function (t, e) {
  if (t) return t;
  if (this.options.deviceIdFromUrlParam) {
    var n = this._getDeviceIdFromUrlParam(this._getUrlParams());
    if (n) return n;
  }
  return this.options.deviceId ? this.options.deviceId : e || Hn();
};
var Or = function (e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n].event.user_properties,
      i = e[n].event.event_properties,
      s = e[n].event.groups;
    (e[n].event.user_properties = _.validateProperties(r)),
      (e[n].event.event_properties = _.validateProperties(i)),
      (e[n].event.groups = _.validateGroups(s));
  }
};
T.prototype._trackParamsAndReferrer = function () {
  var e, n, r, i;
  if (
    (this.options.includeUtm && (e = this._initUtmData()),
    this.options.includeReferrer &&
      (n = this._saveReferrer(this._getReferrer())),
    this.options.includeGclid && (r = this._saveGclid(this._getUrlParams())),
    this.options.includeFbclid && (i = this._saveFbclid(this._getUrlParams())),
    this.options.logAttributionCapturedEvent)
  ) {
    var s = ee(ee(ee(ee({}, e), n), r), i);
    Object.keys(s).length > 0 && this.logEvent(w.ATTRIBUTION_EVENT, s);
  }
};
var ea = function t(e, n) {
  if (N(n) === "object") {
    var r = new Set(["headers"]),
      i = new Set(["eventUploadPeriodMillis"]),
      s = function (c) {
        if (Object.prototype.hasOwnProperty.call(e, c)) {
          var u = n[c],
            p = N(e[c]);
          if (!(c === "transport" && !_.validateTransport(u))) {
            if (c === "sessionId" && u !== null) {
              e[c] = _.validateSessionId(u) ? u : null;
              return;
            } else if (!_.validateInput(u, c + " option", p)) return;
            p === "boolean"
              ? (e[c] = !!u)
              : (p === "string" && !_.isEmptyString(u)) ||
                (p === "number" && (u > 0 || (u === 0 && i.has(c)))) ||
                p === "function"
              ? (e[c] = u)
              : p === "object" && t(e[c], u);
          }
        }
      };
    for (var o in n)
      r.has(o)
        ? (e[o] = ee(ee({}, e[o]), n[o]))
        : Object.prototype.hasOwnProperty.call(n, o) && s(o);
  }
};
T.prototype.runQueuedFunctions = function () {
  var t = this._q;
  this._q = [];
  for (var e = 0; e < t.length; e++) {
    var n = this[t[e][0]];
    N(n) === "function" && n.apply(this, t[e].slice(1));
  }
};
T.prototype._apiKeySet = function (e) {
  return _.isEmptyString(this.options.apiKey)
    ? (_.log.error(
        "Invalid apiKey. Please set a valid apiKey with init() before calling " +
          e
      ),
      !1)
    : !0;
};
T.prototype._loadSavedUnsentEvents = function (e) {
  var n = this._getFromStorage(pe, e),
    r = this._parseSavedUnsentEventsString(n, e);
  return this._setInStorage(pe, e, JSON.stringify(r)), r;
};
T.prototype._parseSavedUnsentEventsString = function (e, n) {
  if (_.isEmptyString(e)) return [];
  if (N(e) === "string")
    try {
      var r = JSON.parse(e);
      if (N(r) === "array") return r;
    } catch {}
  return (
    _.log.error(
      "Unable to load " + n + " events. Restart with a new empty queue."
    ),
    []
  );
};
T.prototype.isNewSession = function () {
  return this._newSession;
};
T.prototype.onInit = function (e) {
  this._isInitialized ? e(this) : this._onInitCallbacks.push(e);
};
T.prototype.onNewSessionStart = function (e) {
  this._onNewSessionStartCallbacks.push(e);
};
T.prototype.getSessionId = function () {
  return this._sessionId;
};
T.prototype.nextEventId = function () {
  return this._eventId++, this._eventId;
};
T.prototype.nextIdentifyId = function () {
  return this._identifyId++, this._identifyId;
};
T.prototype.nextSequenceNumber = function () {
  return this._sequenceNumber++, this._sequenceNumber;
};
T.prototype._unsentCount = function () {
  return this._unsentEvents.length + this._unsentIdentifys.length;
};
T.prototype._sendEventsIfReady = function () {
  return this._unsentCount() === 0
    ? !1
    : this.options.batchEvents
    ? this._unsentCount() >= this.options.eventUploadThreshold
      ? (this.sendEvents(), !0)
      : this.options.transport === w.TRANSPORT_BEACON
      ? (this.sendEvents(), !0)
      : (this._updateScheduled ||
          ((this._updateScheduled = !0),
          setTimeout(
            function () {
              (this._updateScheduled = !1), this.sendEvents();
            }.bind(this),
            this.options.eventUploadPeriodMillis
          )),
        !1)
    : (this.sendEvents(), !0);
};
T.prototype.clearStorage = function () {
  return this._metadataStorage.clear();
};
T.prototype._getFromStorage = function (e, n) {
  return e.getItem(n + this._storageSuffix);
};
T.prototype._setInStorage = function (e, n, r) {
  e.setItem(n + this._storageSuffix, r);
};
var Vn = function (e) {
    if (!e._useOldCookie) {
      var n = e._metadataStorage.load();
      N(n) === "object" && mn(e, n);
      return;
    }
    var r = e.cookieStorage.get(e._oldCookiename);
    if (N(r) === "object") {
      mn(e, r);
      return;
    }
  },
  ta = function (e) {
    var n = e.cookieStorage.get(e._oldCookiename);
    N(n) === "object" && (mn(e, n), we(e));
  },
  mn = function (e, n) {
    n.deviceId && (e.options.deviceId = n.deviceId),
      n.userId && (e.options.userId = n.userId),
      n.optOut !== null &&
        n.optOut !== void 0 &&
        n.optOut !== !1 &&
        (e.options.optOut = n.optOut),
      n.sessionId && (e._sessionId = parseInt(n.sessionId, 10)),
      n.lastEventTime && (e._lastEventTime = parseInt(n.lastEventTime, 10)),
      n.eventId && (e._eventId = parseInt(n.eventId, 10)),
      n.identifyId && (e._identifyId = parseInt(n.identifyId, 10)),
      n.sequenceNumber && (e._sequenceNumber = parseInt(n.sequenceNumber, 10));
  },
  we = function (e) {
    var n = {
      deviceId: e.options.deviceId,
      userId: e.options.userId,
      optOut: e.options.optOut,
      sessionId: e._sessionId,
      lastEventTime: e._lastEventTime,
      eventId: e._eventId,
      identifyId: e._identifyId,
      sequenceNumber: e._sequenceNumber,
    };
    e._useOldCookie
      ? e.cookieStorage.set(e.options.cookieName + e._storageSuffix, n)
      : e._metadataStorage.save(n);
  };
T.prototype._initUtmData = function (e, n) {
  (e = e || this._getUrlParams()), (n = n || this.cookieStorage.get("__utmz"));
  var r = Lo(n, e);
  return Mt(this, r), r;
};
T.prototype._unsetUTMParams = function () {
  var e = new K();
  e.unset(w.REFERRER),
    e.unset(w.REFERRING_DOMAIN),
    e.unset(w.UTM_SOURCE),
    e.unset(w.UTM_MEDIUM),
    e.unset(w.UTM_CAMPAIGN),
    e.unset(w.UTM_TERM),
    e.unset(w.UTM_CONTENT),
    this.identify(e);
};
var Mt = function (e, n) {
  if (!(N(n) !== "object" || Object.keys(n).length === 0)) {
    var r = new K();
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) &&
        (r.setOnce("initial_" + i, n[i]), r.set(i, n[i]));
    e.identify(r);
  }
};
T.prototype._getReferrer = function () {
  var e = this._getReferrerFromUrlParam(this._getUrlParams());
  return e || (typeof document < "u" ? document.referrer : "");
};
T.prototype._getUrlParams = function () {
  return k.location.search;
};
T.prototype._saveGclid = function (e) {
  var n = _.getQueryParam("gclid", e);
  if (!_.isEmptyString(n)) {
    var r = { gclid: n };
    return Mt(this, r), r;
  }
};
T.prototype._saveFbclid = function (e) {
  var n = _.getQueryParam("fbclid", e);
  if (!_.isEmptyString(n)) {
    var r = { fbclid: n };
    return Mt(this, r), r;
  }
};
T.prototype._getDeviceIdFromUrlParam = function (e) {
  return _.getQueryParam(w.AMP_DEVICE_ID_PARAM, e);
};
T.prototype._getReferrerFromUrlParam = function (e) {
  return _.getQueryParam(w.AMP_REFERRER_PARAM, e);
};
T.prototype._getReferringDomain = function (e) {
  if (_.isEmptyString(e)) return null;
  var n = e.split("/");
  return n.length >= 3 ? n[2] : null;
};
T.prototype._saveReferrer = function (e) {
  if (!_.isEmptyString(e)) {
    var n = { referrer: e, referring_domain: this._getReferringDomain(e) };
    return Mt(this, n), n;
  }
};
T.prototype.saveEvents = function () {
  try {
    var e = JSON.stringify(
      this._unsentEvents.map(function (r) {
        var i = r.event;
        return i;
      })
    );
    this._setInStorage(pe, this.options.unsentKey, e);
  } catch {}
  try {
    var n = JSON.stringify(
      this._unsentIdentifys.map(function (r) {
        return r.event;
      })
    );
    this._setInStorage(pe, this.options.unsentIdentifyKey, n);
  } catch {}
};
T.prototype.setDomain = function (e) {
  if (this._shouldDeferCall())
    return this._q.push(
      ["setDomain"].concat(Array.prototype.slice.call(arguments, 0))
    );
  if (_.validateInput(e, "domain", "string"))
    try {
      this.cookieStorage.options({
        expirationDays: this.options.cookieExpiration,
        secure: this.options.secureCookie,
        domain: e,
        sameSite: this.options.sameSiteCookie,
      }),
        (this.options.domain = this.cookieStorage.options().domain),
        Vn(this),
        we(this);
    } catch (n) {
      _.log.error(n);
    }
};
T.prototype.setUserId = function (e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (_.validateInput(n, "startNewSession", "boolean")) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["setUserId"].concat(Array.prototype.slice.call(arguments, 0))
      );
    try {
      (this.options.userId = (e != null && "" + e) || null),
        n &&
          (this.options.unsetParamsReferrerOnNewSession &&
            this._unsetUTMParams(),
          (this._newSession = !0),
          (this._sessionId = new Date().getTime()),
          this._runNewSessionStartCallbacks(),
          this.options.saveParamsReferrerOncePerSession &&
            this._trackParamsAndReferrer()),
        we(this),
        this._connector &&
          this._connector.identityStore
            .editIdentity()
            .setUserId(this.options.userId)
            .commit();
    } catch (r) {
      _.log.error(r);
    }
  }
};
T.prototype.setGroup = function (t, e) {
  if (this._shouldDeferCall())
    return this._q.push(
      ["setGroup"].concat(Array.prototype.slice.call(arguments, 0))
    );
  if (
    !(
      !this._apiKeySet("setGroup()") ||
      !_.validateInput(t, "groupType", "string") ||
      _.isEmptyString(t)
    )
  ) {
    var n = {};
    n[t] = e;
    var r = new K().set(t, e);
    this._logEvent(
      w.IDENTIFY_EVENT,
      null,
      null,
      r.userPropertiesOperations,
      n,
      null,
      null,
      null
    );
  }
};
T.prototype.setOptOut = function (e) {
  if (this._shouldDeferCall())
    return this._q.push(
      ["setOptOut"].concat(Array.prototype.slice.call(arguments, 0))
    );
  if (_.validateInput(e, "enable", "boolean"))
    try {
      (this.options.optOut = e), we(this);
    } catch (n) {
      _.log.error(n);
    }
};
T.prototype.setSessionId = function (e) {
  if (_.validateInput(e, "sessionId", "number"))
    try {
      (this._sessionId = e), we(this);
    } catch (n) {
      _.log.error(n);
    }
};
T.prototype.resetSessionId = function () {
  this.setSessionId(new Date().getTime());
};
T.prototype.regenerateDeviceId = function () {
  if (this._shouldDeferCall())
    return this._q.push(
      ["regenerateDeviceId"].concat(Array.prototype.slice.call(arguments, 0))
    );
  this.setDeviceId(Hn());
};
T.prototype.setDeviceId = function (e) {
  if (this._shouldDeferCall())
    return this._q.push(
      ["setDeviceId"].concat(Array.prototype.slice.call(arguments, 0))
    );
  if (_.validateDeviceId(e))
    try {
      _.isEmptyString(e) ||
        ((this.options.deviceId = "" + e),
        we(this),
        this._connector &&
          this._connector.identityStore
            .editIdentity()
            .setDeviceId(this.options.deviceId)
            .commit());
    } catch (n) {
      _.log.error(n);
    }
};
T.prototype.setTransport = function (e) {
  if (this._shouldDeferCall())
    return this._q.push(
      ["setTransport"].concat(Array.prototype.slice.call(arguments, 0))
    );
  _.validateTransport(e) && (this.options.transport = e);
};
T.prototype.setUserProperties = function (e) {
  if (this._shouldDeferCall())
    return this._q.push(
      ["setUserProperties"].concat(Array.prototype.slice.call(arguments, 0))
    );
  if (
    !(
      !this._apiKeySet("setUserProperties()") ||
      !_.validateInput(e, "userProperties", "object")
    )
  ) {
    var n = _.truncate(_.validateProperties(e));
    if (Object.keys(n).length !== 0) {
      var r = new K();
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && r.set(i, n[i]);
      this.identify(r);
    }
  }
};
T.prototype.clearUserProperties = function () {
  if (this._shouldDeferCall())
    return this._q.push(
      ["clearUserProperties"].concat(Array.prototype.slice.call(arguments, 0))
    );
  if (this._apiKeySet("clearUserProperties()")) {
    var e = new K();
    e.clearAll(), this.identify(e);
  }
};
var Wn = function (e, n) {
  for (var r = 0; r < n._q.length; r++) {
    var i = e[n._q[r][0]];
    N(i) === "function" && i.apply(e, n._q[r].slice(1));
  }
  return e;
};
T.prototype.identify = function (t, e, n, r) {
  if (this._shouldDeferCall())
    return this._q.push(
      ["identify"].concat(Array.prototype.slice.call(arguments, 0))
    );
  if (!this._apiKeySet("identify()")) {
    Z(e, n, 0, "No request sent", { reason: "API key is not set" });
    return;
  }
  if (
    (N(t) === "object" &&
      Object.prototype.hasOwnProperty.call(t, "_q") &&
      (t = Wn(new K(), t)),
    t instanceof K)
  ) {
    if (Object.keys(t.userPropertiesOperations).length > 0)
      return this._logEvent(
        w.IDENTIFY_EVENT,
        null,
        null,
        t.userPropertiesOperations,
        null,
        null,
        null,
        e,
        n,
        r
      );
    Z(e, n, 0, "No request sent", { reason: "No user property operations" });
  } else
    _.log.error(
      "Invalid identify input type. Expected Identify object but saw " + N(t)
    ),
      Z(e, n, 0, "No request sent", { reason: "Invalid identify input type" });
};
T.prototype.groupIdentify = function (t, e, n, r, i, s) {
  if (this._shouldDeferCall())
    return this._q.push(
      ["groupIdentify"].concat(Array.prototype.slice.call(arguments, 0))
    );
  if (!this._apiKeySet("groupIdentify()")) {
    Z(r, i, 0, "No request sent", { reason: "API key is not set" });
    return;
  }
  if (!_.validateInput(t, "group_type", "string") || _.isEmptyString(t)) {
    Z(r, i, 0, "No request sent", { reason: "Invalid group type" });
    return;
  }
  if (e == null) {
    Z(r, i, 0, "No request sent", { reason: "Invalid group name" });
    return;
  }
  if (
    (N(n) === "object" &&
      Object.prototype.hasOwnProperty.call(n, "_q") &&
      (n = Wn(new K(), n)),
    n instanceof K)
  ) {
    if (Object.keys(n.userPropertiesOperations).length > 0)
      return this._logEvent(
        w.GROUP_IDENTIFY_EVENT,
        null,
        null,
        null,
        Ve({}, t, e),
        n.userPropertiesOperations,
        null,
        r,
        i,
        s
      );
    Z(r, i, 0, "No request sent", { reason: "No group property operations" });
  } else
    _.log.error(
      "Invalid identify input type. Expected Identify object but saw " + N(n)
    ),
      Z(r, i, 0, "No request sent", { reason: "Invalid identify input type" });
};
T.prototype.setVersionName = function (e) {
  if (this._shouldDeferCall())
    return this._q.push(
      ["setVersionName"].concat(Array.prototype.slice.call(arguments, 0))
    );
  _.validateInput(e, "versionName", "string") && (this.options.versionName = e);
};
T.prototype._logEvent = function (e, n, r, i, s, o, a, c, u, p) {
  if ((Vn(this), !e)) {
    Z(c, u, 0, "No request sent", { reason: "Missing eventType" });
    return;
  }
  if (this.options.optOut) {
    Z(c, u, 0, "No request sent", { reason: "optOut is set to true" });
    return;
  }
  try {
    var h;
    e === w.IDENTIFY_EVENT || e === w.GROUP_IDENTIFY_EVENT
      ? (h = this.nextIdentifyId())
      : (h = this.nextEventId());
    var f = this.nextSequenceNumber(),
      g = N(a) === "number" ? a : new Date().getTime();
    p
      ? (this._sessionId = -1)
      : (!this._sessionId ||
          !this._lastEventTime ||
          g - this._lastEventTime > this.options.sessionTimeout) &&
        ((this._sessionId = g), this._runNewSessionStartCallbacks()),
      (this._lastEventTime = g),
      we(this);
    var l = this._ua.browser.name,
      m = this._ua.browser.major,
      v = this._ua.device.model || this._ua.os.name,
      j = this._ua.device.vendor;
    i = i || {};
    var H = ee({}, this._apiPropertiesTrackingOptions);
    (r = ee(ee({}, r || {}), H)), (n = n || {}), (s = s || {}), (o = o || {});
    var A = {
      device_id: this.options.deviceId,
      user_id: this.options.userId,
      timestamp: g,
      event_id: h,
      session_id: this._sessionId || -1,
      event_type: e,
      version_name: this.options.versionName || null,
      platform: Ce(this, "platform") ? this.options.platform : null,
      os_name: (Ce(this, "os_name") && l) || null,
      os_version: (Ce(this, "os_version") && m) || null,
      device_model: (Ce(this, "device_model") && v) || null,
      device_manufacturer: (Ce(this, "device_manufacturer") && j) || null,
      language: Ce(this, "language") ? this.options.language : null,
      api_properties: r,
      event_properties: _.truncate(_.validateProperties(n)),
      user_properties: _.truncate(_.validateProperties(i)),
      uuid: Yo(),
      library: this.options.library,
      sequence_number: f,
      groups: _.truncate(_.validateGroups(s)),
      group_properties: _.truncate(_.validateProperties(o)),
      user_agent: this._userAgent,
      partner_id: this.options.partnerId || null,
    };
    return (
      na(this) &&
        (A.plan = {
          branch: this.options.plan.branch || void 0,
          source: this.options.plan.source || void 0,
          version: this.options.plan.version || void 0,
          versionId: this.options.plan.versionId || void 0,
        }),
      ra(this) &&
        (A.ingestion_metadata = {
          source_name: this.options.ingestionMetadata.sourceName || void 0,
          source_version:
            this.options.ingestionMetadata.sourceVersion || void 0,
        }),
      e === w.IDENTIFY_EVENT || e === w.GROUP_IDENTIFY_EVENT
        ? (this._unsentIdentifys.push({
            event: A,
            callback: c,
            errorCallback: u,
          }),
          this._limitEventsQueued(this._unsentIdentifys))
        : (this._unsentEvents.push({ event: A, callback: c, errorCallback: u }),
          this._limitEventsQueued(this._unsentEvents)),
      this.options.saveEvents && this.saveEvents(),
      this._sendEventsIfReady(),
      e === w.IDENTIFY_EVENT &&
        this._connector &&
        this._connector.identityStore
          .editIdentity()
          .updateUserProperties(_.truncate(_.validateProperties(i)))
          .commit(),
      h
    );
  } catch (R) {
    _.log.error(R);
  }
};
var na = function (e) {
    return (
      e.options.plan &&
      (e.options.plan.source ||
        e.options.plan.branch ||
        e.options.plan.version ||
        e.options.plan.versionId)
    );
  },
  ra = function (e) {
    return (
      e.options.ingestionMetadata &&
      (e.options.ingestionMetadata.sourceName ||
        e.options.ingestionMetadata.sourceVersion)
    );
  },
  Ce = function (e, n) {
    return !!e.options.trackingOptions[n];
  },
  ia = function (e) {
    for (
      var n = ["city", "country", "dma", "ip_address", "region"], r = {}, i = 0;
      i < n.length;
      i++
    ) {
      var s = n[i];
      Ce(e, s) || (r[s] = !1);
    }
    return r;
  };
T.prototype._limitEventsQueued = function (e) {
  if (e.length > this.options.savedMaxCount) {
    var n = e.splice(0, e.length - this.options.savedMaxCount);
    n.forEach(function (r) {
      Z(r.callback, r.errorCallback, 0, "No request sent", {
        reason:
          "Event dropped because options.savedMaxCount exceeded. User may be offline or have a content blocker",
      });
    });
  }
};
T.prototype.logEvent = function (e, n, r, i) {
  var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  return this._shouldDeferCall()
    ? this._q.push(
        ["logEvent"].concat(Array.prototype.slice.call(arguments, 0))
      )
    : this.logEventWithTimestamp(e, n, null, r, i, s);
};
T.prototype.logEventWithTimestamp = function (e, n, r, i, s) {
  var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1;
  return this._shouldDeferCall()
    ? this._q.push(
        ["logEventWithTimestamp"].concat(
          Array.prototype.slice.call(arguments, 0)
        )
      )
    : this._apiKeySet("logEvent()")
    ? _.validateInput(e, "eventType", "string")
      ? _.isEmptyString(e)
        ? (Z(i, s, 0, "No request sent", { reason: "Missing eventType" }), -1)
        : (_.validateInput(o, "outOfSession", "boolean") ||
            Z(i, s, 0, "No request sent", {
              reason: "Invalid outOfSession value",
            }),
          this._logEvent(e, n, null, null, null, null, r, i, s, o))
      : (Z(i, s, 0, "No request sent", {
          reason: "Invalid type for eventType",
        }),
        -1)
    : (Z(i, s, 0, "No request sent", { reason: "API key not set" }), -1);
};
T.prototype.logEventWithGroups = function (t, e, n, r, i) {
  var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1;
  return this._shouldDeferCall()
    ? this._q.push(
        ["logEventWithGroups"].concat(Array.prototype.slice.call(arguments, 0))
      )
    : this._apiKeySet("logEventWithGroups()")
    ? _.validateInput(t, "eventType", "string")
      ? (_.validateInput(s, "outOfSession", "boolean") ||
          Z(event.callback, event.errorCallback, 0, "No request sent", {
            reason: "Invalid outOfSession value",
          }),
        this._logEvent(t, e, null, null, n, null, null, r, i, s))
      : (Z(event.callback, event.errorCallback, 0, "No request sent", {
          reason: "Invalid type for eventType",
        }),
        -1)
    : (Z(event.callback, event.errorCallback, 0, "No request sent", {
        reason: "API key not set",
      }),
      -1);
};
var Nr = function (e) {
    return !isNaN(parseFloat(e)) && isFinite(e);
  },
  Z = function (e, n, r, i, s) {
    N(e) === "function" && e(r, i, s), N(n) === "function" && n(r, i, s);
  };
T.prototype.logRevenueV2 = function (e) {
  if (this._shouldDeferCall())
    return this._q.push(
      ["logRevenueV2"].concat(Array.prototype.slice.call(arguments, 0))
    );
  if (this._apiKeySet("logRevenueV2()"))
    if (
      (N(e) === "object" &&
        Object.prototype.hasOwnProperty.call(e, "_q") &&
        (e = Wn(new ge(), e)),
      e instanceof ge)
    ) {
      if (e && e._isValidRevenue())
        return this.logEvent(w.REVENUE_EVENT, e._toJSONObject());
    } else
      _.log.error(
        "Invalid revenue input type. Expected Revenue object but saw " + N(e)
      );
};
T.prototype.logRevenue = function (e, n, r) {
  return this._shouldDeferCall()
    ? this._q.push(
        ["logRevenue"].concat(Array.prototype.slice.call(arguments, 0))
      )
    : !this._apiKeySet("logRevenue()") || !Nr(e) || (n !== void 0 && !Nr(n))
    ? -1
    : this._logEvent(
        w.REVENUE_EVENT,
        {},
        { productId: r, special: "revenue_amount", quantity: n || 1, price: e },
        null,
        null,
        null,
        null,
        null
      );
};
T.prototype._logErrorsOnEvents = function (e, n, r, i) {
  for (var s = ["_unsentEvents", "_unsentIdentifys"], o = 0; o < s.length; o++)
    for (
      var a = s[o], c = a === "_unsentEvents" ? e : n, u = 0;
      u < this[a].length;
      u++
    ) {
      var p = this[a][u];
      p.event.event_id <= c && p.errorCallback && p.errorCallback(r, i);
    }
};
T.prototype.removeEvents = function (e, n, r, i) {
  Ar(this, "_unsentEvents", e, r, i), Ar(this, "_unsentIdentifys", n, r, i);
};
var Ar = function (e, n, r, i, s) {
  if (!(r < 0)) {
    for (var o = [], a = 0; a < e[n].length; a++) {
      var c = e[n][a];
      c.event.event_id > r ? o.push(c) : c.callback && c.callback(i, s);
    }
    e[n] = o;
  }
};
T.prototype.sendEvents = function () {
  if (!this._apiKeySet("sendEvents()")) {
    this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
      reason: "API key not set",
    });
    return;
  }
  if (this.options.optOut) {
    this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
      reason: "Opt out is set to true",
    });
    return;
  }
  if (this._unsentCount() !== 0) {
    if (this.options.transport !== w.TRANSPORT_BEACON) {
      if (this._sending) return;
      this._sending = !0;
    }
    var e =
        this.options.forceHttps || k.location.protocol === "https:"
          ? "https"
          : "http",
      n = e + "://" + this.options.apiEndpoint,
      r = Math.min(this._unsentCount(), this.options.uploadBatchSize),
      i = this._mergeEventsAndIdentifys(r),
      s = i.maxEventId,
      o = i.maxIdentifyId,
      a = JSON.stringify(
        i.eventsToSend.map(function (l) {
          var m = l.event;
          return m;
        })
      ),
      c = new Date().getTime(),
      u = {
        client: this.options.apiKey,
        e: a,
        v: w.API_VERSION,
        upload_time: c,
        checksum: Ps(w.API_VERSION + this.options.apiKey + a + c),
      };
    if (
      this.options.transport === w.TRANSPORT_BEACON &&
      typeof navigator < "u"
    ) {
      var p = navigator.sendBeacon(n, new URLSearchParams(u));
      p
        ? (this.removeEvents(s, o, 200, "success"),
          this.options.saveEvents && this.saveEvents())
        : this._logErrorsOnEvents(s, o, 0, "");
      return;
    }
    var h = this;
    try {
      new Gi(n, u, this.options.headers).send(function (l, m) {
        h._sending = !1;
        try {
          l === 200
            ? (h.removeEvents(s, o, l, m),
              h.options.saveEvents && h.saveEvents(),
              h._sendEventsIfReady())
            : (h._logErrorsOnEvents(s, o, l, m),
              l === 413 &&
                (h.options.uploadBatchSize === 1 && h.removeEvents(s, o, l, m),
                (h.options.uploadBatchSize = Math.ceil(r / 2)),
                h.sendEvents()));
        } catch {}
      });
    } catch (l) {
      var f = 0,
        g = "Request failed to send";
      _.log.error(g),
        h._logErrorsOnEvents(s, o, f, g),
        h.removeEvents(s, o, f, g, { reason: l.message });
    }
  }
};
T.prototype._mergeEventsAndIdentifys = function (e) {
  for (var n = [], r = 0, i = -1, s = 0, o = -1; n.length < e; ) {
    var a = void 0,
      c = s >= this._unsentIdentifys.length,
      u = r >= this._unsentEvents.length;
    if (u && c) {
      _.log.error(
        "Merging Events and Identifys, less events and identifys than expected"
      );
      break;
    } else
      c
        ? ((a = this._unsentEvents[r++]), (i = a.event.event_id))
        : u
        ? ((a = this._unsentIdentifys[s++]), (o = a.event.event_id))
        : !("sequence_number" in this._unsentEvents[r].event) ||
          this._unsentEvents[r].event.sequence_number <
            this._unsentIdentifys[s].event.sequence_number
        ? ((a = this._unsentEvents[r++]), (i = a.event.event_id))
        : ((a = this._unsentIdentifys[s++]), (o = a.event.event_id));
    n.push(a);
  }
  return { eventsToSend: n, maxEventId: i, maxIdentifyId: o };
};
T.prototype.setGlobalUserProperties = function (e) {
  this.setUserProperties(e);
};
T.prototype.__VERSION__ = function () {
  return this.options.library.version;
};
T.prototype.setLibrary = function (e, n) {
  e !== null && typeof e < "u" && (this.options.library.name = e),
    n !== null && typeof n < "u" && (this.options.library.version = n);
};
T.prototype._shouldDeferCall = function () {
  return this._pendingReadStorage || this._initializationDeferred;
};
T.prototype._deferInitialization = function () {
  (this._initializationDeferred = !0),
    this._q.push(["init"].concat(Array.prototype.slice.call(arguments, 0)));
};
T.prototype.enableTracking = function () {
  (this._initializationDeferred = !1), we(this), this.runQueuedFunctions();
};
T.prototype._refreshDynamicConfig = function () {
  this.options.useDynamicConfig &&
    Tr.refresh(
      this.options.serverZone,
      this.options.forceHttps,
      function () {
        this.options.apiEndpoint = Tr.ingestionEndpoint;
      }.bind(this)
    );
};
T.prototype.getDeviceId = function () {
  return this.options.deviceId;
};
T.prototype.getUserId = function () {
  return this.options.userId;
};
T.prototype.setMinTimeBetweenSessionsMillis = function (e) {
  if (_.validateInput(e, "timeInMillis", "number")) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["setMinTimeBetweenSessionsMillis"].concat(
          Array.prototype.slice.call(arguments, 0)
        )
      );
    try {
      this.options.sessionTimeout = e;
    } catch (n) {
      _.log.error(n);
    }
  }
};
T.prototype.setEventUploadThreshold = function (e) {
  if (_.validateInput(e, "eventUploadThreshold", "number")) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["setEventUploadThreshold"].concat(
          Array.prototype.slice.call(arguments, 0)
        )
      );
    try {
      this.options.eventUploadThreshold = e;
    } catch (n) {
      _.log.error(n);
    }
  }
};
T.prototype.setUseDynamicConfig = function (e) {
  if (_.validateInput(e, "useDynamicConfig", "boolean")) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["setUseDynamicConfig"].concat(Array.prototype.slice.call(arguments, 0))
      );
    try {
      (this.options.useDynamicConfig = e), this._refreshDynamicConfig();
    } catch (n) {
      _.log.error(n);
    }
  }
};
T.prototype.setServerZone = function (e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (
    !(
      (e !== De.EU && e !== De.US) ||
      !_.validateInput(n, "serverZoneBasedApi", "boolean")
    )
  ) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["setServerZone"].concat(Array.prototype.slice.call(arguments, 0))
      );
    try {
      (this.options.serverZone = e),
        (this.options.serverZoneBasedApi = n),
        n && (this.options.apiEndpoint = qi(this.options.serverZone));
    } catch (r) {
      _.log.error(r);
    }
  }
};
T.prototype.setServerUrl = function (e) {
  if (_.validateInput(e, "serverUrl", "string")) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["setServerUrl"].concat(Array.prototype.slice.call(arguments, 0))
      );
    try {
      this.options.apiEndpoint = e;
    } catch (n) {
      _.log.error(n);
    }
  }
};
var F = function () {
  (this.options = ee({}, Ne)), (this._q = []), (this._instances = {});
};
F.prototype.Identify = K;
F.prototype.Revenue = ge;
F.prototype.getInstance = function (e) {
  e = _.isEmptyString(e) ? w.DEFAULT_INSTANCE : e.toLowerCase();
  var n = this._instances[e];
  return n === void 0 && ((n = new T(e)), (this._instances[e] = n)), n;
};
(F.prototype.init = function (e, n, r, i) {
  this.getInstance().init(
    e,
    n,
    r,
    function (s) {
      (this.options = s.options), N(i) === "function" && i(s);
    }.bind(this)
  );
}),
  (F.prototype.isNewSession = function () {
    return this.getInstance().isNewSession();
  }),
  (F.prototype.getSessionId = function () {
    return this.getInstance().getSessionId();
  }),
  (F.prototype.nextEventId = function () {
    return this.getInstance().nextEventId();
  }),
  (F.prototype.nextIdentifyId = function () {
    return this.getInstance().nextIdentifyId();
  }),
  (F.prototype.nextSequenceNumber = function () {
    return this.getInstance().nextSequenceNumber();
  }),
  (F.prototype.saveEvents = function () {
    this.getInstance().saveEvents();
  }),
  (F.prototype.setDomain = function (e) {
    this.getInstance().setDomain(e);
  }),
  (F.prototype.setUserId = function (e) {
    this.getInstance().setUserId(e);
  }),
  (F.prototype.setGroup = function (t, e) {
    this.getInstance().setGroup(t, e);
  }),
  (F.prototype.setOptOut = function (e) {
    this.getInstance().setOptOut(e);
  }),
  (F.prototype.regenerateDeviceId = function () {
    this.getInstance().regenerateDeviceId();
  }),
  (F.prototype.setDeviceId = function (e) {
    this.getInstance().setDeviceId(e);
  }),
  (F.prototype.setUserProperties = function (e) {
    this.getInstance().setUserProperties(e);
  }),
  (F.prototype.clearUserProperties = function () {
    this.getInstance().clearUserProperties();
  }),
  (F.prototype.identify = function (t, e) {
    this.getInstance().identify(t, e);
  }),
  (F.prototype.setVersionName = function (e) {
    this.getInstance().setVersionName(e);
  }),
  (F.prototype.logEvent = function (e, n, r) {
    return this.getInstance().logEvent(e, n, r);
  }),
  (F.prototype.logEventWithGroups = function (t, e, n, r) {
    return this.getInstance().logEventWithGroups(t, e, n, r);
  }),
  (F.prototype.logRevenueV2 = function (e) {
    return this.getInstance().logRevenueV2(e);
  }),
  (F.prototype.logRevenue = function (e, n, r) {
    return this.getInstance().logRevenue(e, n, r);
  }),
  (F.prototype.removeEvents = function (e, n) {
    this.getInstance().removeEvents(e, n);
  }),
  (F.prototype.sendEvents = function (e) {
    this.getInstance().sendEvents(e);
  }),
  (F.prototype.setGlobalUserProperties = function (e) {
    this.getInstance().setUserProperties(e);
  });
F.prototype.__VERSION__ = Bi;
var At = (typeof k < "u" && k.amplitude) || {},
  Kn = new F();
Kn._q = At._q || [];
for (var en in At._iq)
  Object.prototype.hasOwnProperty.call(At._iq, en) &&
    (Kn.getInstance(en)._q = At._iq[en]._q || []);
const Hi = Kn.getInstance();
try {
  Hi.init("9641e63c32c15d560fc464c41994e082");
} catch {}
const _n = (t, e) => Hi.logEvent(t, e),
  Vi = "en-US",
  Mf = [
    { tag: "af", label: "Afrikaans" },
    { tag: "sq", label: "Albanian (shqip)" },
    { tag: "am", label: "Amharic (አማርኛ)" },
    { tag: "ar", label: "Arabic (العربية)" },
    { tag: "ar-SA", label: "Arabic (Saudi Arabia)" },
    { tag: "hy", label: "Armenian (Հայերեն)" },
    { tag: "as", label: "Assamese (অসমীয়া)" },
    { tag: "az", label: "Azerbaijani (Azərbaycan)" },
    { tag: "bn-BD", label: "Bangla (Bangladesh)" },
    { tag: "bn-IN", label: "Bangla (India)" },
    { tag: "ba", label: "Bashkir (Башҡорт)" },
    { tag: "eu", label: "Basque (euskara)" },
    { tag: "be", label: "Belarusian (беларуская)" },
    { tag: "bn", label: "Bengali (বাংলা)" },
    { tag: "bs", label: "Bosnian (bosanski/босански)" },
    { tag: "br", label: "Breton (brezhoneg)" },
    { tag: "bg", label: "Bulgarian (български)" },
    { tag: "my", label: "Burmese (မြန်မာဘာသာ)" },
    { tag: "ca", label: "Catalan (català)" },
    { tag: "ckb", label: "Central Kurdish (کوردیی ناوەندی)" },
    { tag: "zh", label: "Chinese (中文)" },
    { tag: "zh-CN", label: "Chinese (Mainland)" },
    { tag: "zh-HK", label: "Chinese (Hong Kong)" },
    { tag: "zh-TW", label: "Chinese (Taiwan)" },
    { tag: "co", label: "Corsican (Corsu)" },
    { tag: "hr", label: "Croatian (hrvatski)" },
    { tag: "cs", label: "Czech (čeština)" },
    { tag: "da", label: "Danish (dansk)" },
    { tag: "prs", label: "Dari (درى)" },
    { tag: "dv", label: "Divehi (ދިވެހިބަސް)" },
    { tag: "nl", label: "Dutch (Nederlands)" },
    { tag: "nl-BE", label: "Dutch (Belgian)" },
    { tag: "en", label: "English" },
    { tag: "en-AU", label: "English (Australian)" },
    { tag: "en-CA", label: "English (Canadian)" },
    { tag: "en-GB", label: "English (British)" },
    { tag: "en-IE", label: "English (Irish)" },
    { tag: "en-IN", label: "English (Indian)" },
    { tag: "en-NZ", label: "English (New Zealand)" },
    { tag: "en-US", label: "English (US)" },
    { tag: "en-ZA", label: "English (South Africa)" },
    { tag: "et", label: "Estonian (eesti)" },
    { tag: "fo", label: "Faroese (føroyskt)" },
    { tag: "fil", label: "Filipino" },
    { tag: "fi", label: "Finnish (suomi)" },
    { tag: "fi-FI", label: "Finnish (Finland)" },
    { tag: "fr", label: "French (français)" },
    { tag: "fr-BE", label: "French (Belgian)" },
    { tag: "fr-CA", label: "French (Canadian)" },
    { tag: "fr-CH", label: "French (Swiss)" },
    { tag: "fy", label: "Frisian (Frysk)" },
    { tag: "gl", label: "Galician (galego)" },
    { tag: "ka", label: "Georgian (ქართული)" },
    { tag: "de", label: "German (Deutsch)" },
    { tag: "de-AT", label: "German (Austrian)" },
    { tag: "de-CH", label: "German (Swiss)" },
    { tag: "gil", label: "Gilbertese (Taetae ni Kiribati)" },
    { tag: "el", label: "Greek (Ελληνικά)" },
    { tag: "el-GR", label: "Greek (Modern Greek)" },
    { tag: "kl", label: "Greenlandic (kalaallisut)" },
    { tag: "gu", label: "Gujarati (ગુજરાતી)" },
    { tag: "ha", label: "Hausa" },
    { tag: "he", label: "Hebrew (עברית)" },
    { tag: "he-IL", label: "Hebrew (Israel)" },
    { tag: "hi", label: "Hindi (हिंदी)" },
    { tag: "hi-IN", label: "Hindi (India)" },
    { tag: "hu", label: "Hungarian (magyar)" },
    { tag: "is", label: "Icelandic (íslenska)" },
    { tag: "ig", label: "Igbo" },
    { tag: "id", label: "Indonesian (Bahasa Indonesia)" },
    { tag: "iu", label: "Inuktitut (Inuktitut/ᐃᓄᒃᑎᑐᑦ (ᑲᓇᑕ))" },
    { tag: "ga", label: "Irish (Gaeilge)" },
    { tag: "it", label: "Italian (italiano)" },
    { tag: "it-CH", label: "Italian (Swiss)" },
    { tag: "ja", label: "Japanese (日本語)" },
    { tag: "quc", label: "K'iche" },
    { tag: "kn", label: "Kannada (ಕನ್ನಡ)" },
    { tag: "kk", label: "Kazakh (Қазақша)" },
    { tag: "km", label: "Khmer (ខ្មែរ)" },
    { tag: "rw", label: "Kinyarwanda" },
    { tag: "sw", label: "Kiswahili" },
    { tag: "kok", label: "Konkani (कोंकणी)" },
    { tag: "ko", label: "Korean (한국어)" },
    { tag: "ku", label: "Kurdish (Kurdî/کوردی)" },
    { tag: "ky", label: "Kyrgyz (Кыргыз)" },
    { tag: "lo", label: "Lao (ລາວ)" },
    { tag: "lv", label: "Latvian (latviešu)" },
    { tag: "lt", label: "Lithuanian (lietuvių)" },
    { tag: "dsb", label: "Lower Sorbian (dolnoserbšćina)" },
    { tag: "lb", label: "Luxembourgish (Lëtzebuergesch)" },
    { tag: "mk", label: "Macedonian (македонски јазик)" },
    { tag: "ms", label: "Malay (Bahasa Malaysia)" },
    { tag: "ml", label: "Malayalam (മലയാളം)" },
    { tag: "mt", label: "Maltese (Malti)" },
    { tag: "mi", label: "Maori (Reo Māori)" },
    { tag: "arn", label: "Mapudungun" },
    { tag: "mr", label: "Marathi (मराठी)" },
    { tag: "moh", label: "Mohawk (Kanien'kéha)" },
    { tag: "mn", label: "Mongolian (Монгол хэл/ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ)" },
    { tag: "ary", label: "Moroccan Arabic (الدارجة المغربية)" },
    { tag: "ne", label: "Nepali (नेपाल)" },
    { tag: "no", label: "Norwegian (norsk)" },
    { tag: "nb", label: "Norwegian (bokmål)" },
    { tag: "nn", label: "Norwegian (nynorsk)" },
    { tag: "oc", label: "Occitan" },
    { tag: "or", label: "Odia (ଓଡ଼ିଆ)" },
    { tag: "pap", label: "Papiamento (Papiamentu)" },
    { tag: "ps", label: "Pashto (پښتو)" },
    { tag: "fa", label: "Persian (فارسى)" },
    { tag: "pl", label: "Polish (polski)" },
    { tag: "pt", label: "Portuguese (português)" },
    { tag: "pt-BR", label: "Portuguese (Brazilian)" },
    { tag: "pa", label: "Punjabi (ਪੰਜਾਬੀ/پنجابی)" },
    { tag: "qu", label: "Quechua (runasimi)" },
    { tag: "ro", label: "Romanian (română)" },
    { tag: "rm", label: "Romansh (Rumantsch)" },
    { tag: "ru", label: "Russian (русский)" },
    { tag: "smn", label: "Sami (sämikielâ)" },
    { tag: "smj", label: "Sami (julevusámegiella)" },
    { tag: "se", label: "Sami (davvisámegiella)" },
    { tag: "sms", label: "Sami (sääʹmǩiõll)" },
    { tag: "sma", label: "Sami (åarjelsaemiengiele)" },
    { tag: "sa", label: "Sanskrit (संस्कृत)" },
    { tag: "gd", label: "Scottish Gaelic (Gàidhlig)" },
    { tag: "sr", label: "Serbian (srpski/српски)" },
    { tag: "st", label: "Sesotho" },
    { tag: "si", label: "Sinhala (සිංහල)" },
    { tag: "sk", label: "Slovak (slovenčina)" },
    { tag: "sl", label: "Slovenian (slovenski)" },
    { tag: "es", label: "Spanish (español)" },
    { tag: "es-AR", label: "Spanish (Argentine)" },
    { tag: "es-CL", label: "Spanish (Chilean)" },
    { tag: "es-CO", label: "Spanish (Colombian)" },
    { tag: "es-MX", label: "Spanish (Mexican)" },
    { tag: "es-US", label: "Spanish (American)" },
    { tag: "sv", label: "Swedish (svenska)" },
    { tag: "syc", label: "Syriac (ܣܘܪܝܝܐ)" },
    { tag: "tg", label: "Tajik (Тоҷикӣ)" },
    { tag: "tzm", label: "Tamazight" },
    { tag: "ta", label: "Tamil (தமிழ்)" },
    { tag: "ta-IN", label: "Tamil (Indian)" },
    { tag: "ta-LK", label: "Tamil (Sri Lankan)" },
    { tag: "tt", label: "Tatar (Татарча)" },
    { tag: "te", label: "Telugu (తెలుగు)" },
    { tag: "th", label: "Thai (ไทย)" },
    { tag: "bo", label: "Tibetan (བོད་ཡིག)" },
    { tag: "tn", label: "Tswana (Setswana)" },
    { tag: "tr", label: "Turkish (Türkçe)" },
    { tag: "tk", label: "Turkmen (türkmençe)" },
    { tag: "uk", label: "Ukrainian (українська)" },
    { tag: "hsb", label: "Upper Sorbian (hornjoserbšćina)" },
    { tag: "ur", label: "Urdu (اُردو)" },
    { tag: "ug", label: "Uyghur (ئۇيغۇرچە)" },
    { tag: "uz", label: "Uzbek (Ўзбек)" },
    { tag: "vi", label: "Vietnamese (Tiếng Việt)" },
    { tag: "cy", label: "Welsh (Cymraeg)" },
    { tag: "wo", label: "Wolof" },
    { tag: "xh", label: "Xhosa (isiXhosa)" },
    { tag: "sah", label: "Yakut (саха)" },
    { tag: "ii", label: "Yi (ꆈꌠꁱꂷ)" },
    { tag: "yo", label: "Yoruba" },
    { tag: "zu", label: "Zulu (isiZulu)" },
  ];
let zn = "";
const Lf = (t) => {
  Wi = t;
};
let Wi = ([t, e]) => {};
const sa = (t, e) => {
  Wi([t, e]);
};
let ie = null;
const Ff = (t) => {
    t !== ie && ((ie = t), If(), ie && (zn = ie.value), sa(...oa()));
  },
  Rr = () => {
    ie && (zn = ie.value);
  },
  oa = () => {
    if (!ie) return [-50, -50];
    const { x: t, y: e } = ie.getBoundingClientRect();
    return [t, e];
  },
  aa = (t) => {
    ie &&
      ((ie.value = `${zn} ${t}`.trim()),
      ie.dispatchEvent(new Event("input", { bubbles: !0 })),
      ie.dispatchEvent(new Event("change", { bubbles: !0 })),
      ie.dispatchEvent(new Event("selectionchange", { bubbles: !0 })),
      ie.dispatchEvent(new Event("keydown", { bubbles: !0 })),
      ie.dispatchEvent(new Event("keyup", { bubbles: !0 })));
  },
  jf = (t, e) => {
    if (t)
      if (t.createTextRange) {
        const n = t.createTextRange();
        n.move("character", e), n.select();
      } else
        t.selectionStart ? (t.focus(), t.setSelectionRange(e, e)) : t.focus();
  };
let yn;
const Yn = (t) => {
    yn = t;
  },
  ca = (t) => t.split("/")[2],
  Cr = () =>
    window != null &&
    window.location &&
    !window.location.href.startsWith("chrome-extension://")
      ? window.location.hostname
      : yn && ca(yn);
(async () => {
  if (!chrome.tabs) return;
  const [t] = await chrome.tabs.query({ active: !0, lastFocusedWindow: !0 });
  Yn(t.url);
})();
var vi;
(vi = chrome.tabs) == null ||
  vi.onActivated.addListener(async (t) => {
    const e = await chrome.tabs.get(t.tabId);
    e.active && Yn(e.url);
  });
var bi;
(bi = chrome.tabs) == null ||
  bi.onUpdated.addListener(async (t, e, n) => {
    n.active && Yn(n.url);
  });
const $f = async (t) => {
    if (!navigator.clipboard) {
      ua(t);
      return;
    }
    await navigator.clipboard.writeText(t);
  },
  ua = (t) => {
    const e = document.createElement("textarea");
    (e.value = t),
      (e.style.top = "0"),
      (e.style.left = "0"),
      (e.style.position = "fixed"),
      document.body.appendChild(e),
      e.focus(),
      e.select();
    try {
      const r = document.execCommand("copy") ? "successful" : "unsuccessful";
    } catch (n) {
      console.error("Fallback: Oops, unable to copy", n);
    }
    document.body.removeChild(e);
  },
  G = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Pe = "8.54.0",
  M = globalThis;
function Lt(t, e, n) {
  const r = n || M,
    i = (r.__SENTRY__ = r.__SENTRY__ || {}),
    s = (i[Pe] = i[Pe] || {});
  return s[t] || (s[t] = e());
}
const je = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  la = "Sentry Logger ",
  vn = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  kt = {};
function at(t) {
  if (!("console" in M)) return t();
  const e = M.console,
    n = {},
    r = Object.keys(kt);
  r.forEach((i) => {
    const s = kt[i];
    (n[i] = e[i]), (e[i] = s);
  });
  try {
    return t();
  } finally {
    r.forEach((i) => {
      e[i] = n[i];
    });
  }
}
function fa() {
  let t = !1;
  const e = {
    enable: () => {
      t = !0;
    },
    disable: () => {
      t = !1;
    },
    isEnabled: () => t,
  };
  return (
    je
      ? vn.forEach((n) => {
          e[n] = (...r) => {
            t &&
              at(() => {
                M.console[n](`${la}[${n}]:`, ...r);
              });
          };
        })
      : vn.forEach((n) => {
          e[n] = () => {};
        }),
    e
  );
}
const C = Lt("logger", fa),
  Ki = 50,
  Ue = "?",
  kr = /\(error: (.*)\)/,
  Pr = /captureMessage|captureException/;
function da(...t) {
  const e = t.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
  return (n, r = 0, i = 0) => {
    const s = [],
      o = n.split(`
`);
    for (let a = r; a < o.length; a++) {
      const c = o[a];
      if (c.length > 1024) continue;
      const u = kr.test(c) ? c.replace(kr, "$1") : c;
      if (!u.match(/\S*Error: /)) {
        for (const p of e) {
          const h = p(u);
          if (h) {
            s.push(h);
            break;
          }
        }
        if (s.length >= Ki + i) break;
      }
    }
    return pa(s.slice(i));
  };
}
function pa(t) {
  if (!t.length) return [];
  const e = Array.from(t);
  return (
    /sentryWrapped/.test(yt(e).function || "") && e.pop(),
    e.reverse(),
    Pr.test(yt(e).function || "") &&
      (e.pop(), Pr.test(yt(e).function || "") && e.pop()),
    e
      .slice(0, Ki)
      .map((n) => ({
        ...n,
        filename: n.filename || yt(e).filename,
        function: n.function || Ue,
      }))
  );
}
function yt(t) {
  return t[t.length - 1] || {};
}
const tn = "<anonymous>";
function Re(t) {
  try {
    return !t || typeof t != "function" ? tn : t.name || tn;
  } catch {
    return tn;
  }
}
function Dr(t) {
  const e = t.exception;
  if (e) {
    const n = [];
    try {
      return (
        e.values.forEach((r) => {
          r.stacktrace.frames && n.push(...r.stacktrace.frames);
        }),
        n
      );
    } catch {
      return;
    }
  }
}
const Rt = {},
  Ur = {};
function $e(t, e) {
  (Rt[t] = Rt[t] || []), Rt[t].push(e);
}
function Ge(t, e) {
  if (!Ur[t]) {
    Ur[t] = !0;
    try {
      e();
    } catch (n) {
      je && C.error(`Error while instrumenting ${t}`, n);
    }
  }
}
function he(t, e) {
  const n = t && Rt[t];
  if (n)
    for (const r of n)
      try {
        r(e);
      } catch (i) {
        je &&
          C.error(
            `Error while triggering instrumentation handler.
Type: ${t}
Name: ${Re(r)}
Error:`,
            i
          );
      }
}
let nn = null;
function ha(t) {
  const e = "error";
  $e(e, t), Ge(e, ga);
}
function ga() {
  (nn = M.onerror),
    (M.onerror = function (t, e, n, r, i) {
      return (
        he("error", { column: r, error: i, line: n, msg: t, url: e }),
        nn ? nn.apply(this, arguments) : !1
      );
    }),
    (M.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
let rn = null;
function ma(t) {
  const e = "unhandledrejection";
  $e(e, t), Ge(e, _a);
}
function _a() {
  (rn = M.onunhandledrejection),
    (M.onunhandledrejection = function (t) {
      return he("unhandledrejection", t), rn ? rn.apply(this, arguments) : !0;
    }),
    (M.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
function Ft() {
  return Xn(M), M;
}
function Xn(t) {
  const e = (t.__SENTRY__ = t.__SENTRY__ || {});
  return (e.version = e.version || Pe), (e[Pe] = e[Pe] || {});
}
const zi = Object.prototype.toString;
function Jn(t) {
  switch (zi.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return xe(t, Error);
  }
}
function Ze(t, e) {
  return zi.call(t) === `[object ${e}]`;
}
function Yi(t) {
  return Ze(t, "ErrorEvent");
}
function xr(t) {
  return Ze(t, "DOMError");
}
function ya(t) {
  return Ze(t, "DOMException");
}
function Ee(t) {
  return Ze(t, "String");
}
function Zn(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    "__sentry_template_string__" in t &&
    "__sentry_template_values__" in t
  );
}
function Qn(t) {
  return (
    t === null || Zn(t) || (typeof t != "object" && typeof t != "function")
  );
}
function Ke(t) {
  return Ze(t, "Object");
}
function jt(t) {
  return typeof Event < "u" && xe(t, Event);
}
function va(t) {
  return typeof Element < "u" && xe(t, Element);
}
function ba(t) {
  return Ze(t, "RegExp");
}
function $t(t) {
  return !!(t && t.then && typeof t.then == "function");
}
function Ea(t) {
  return (
    Ke(t) &&
    "nativeEvent" in t &&
    "preventDefault" in t &&
    "stopPropagation" in t
  );
}
function xe(t, e) {
  try {
    return t instanceof e;
  } catch {
    return !1;
  }
}
function Xi(t) {
  return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue));
}
const er = M,
  Sa = 80;
function Ji(t, e = {}) {
  if (!t) return "<unknown>";
  try {
    let n = t;
    const r = 5,
      i = [];
    let s = 0,
      o = 0;
    const a = " > ",
      c = a.length;
    let u;
    const p = Array.isArray(e) ? e : e.keyAttrs,
      h = (!Array.isArray(e) && e.maxStringLength) || Sa;
    for (
      ;
      n &&
      s++ < r &&
      ((u = Ia(n, p)),
      !(u === "html" || (s > 1 && o + i.length * c + u.length >= h)));

    )
      i.push(u), (o += u.length), (n = n.parentNode);
    return i.reverse().join(a);
  } catch {
    return "<unknown>";
  }
}
function Ia(t, e) {
  const n = t,
    r = [];
  if (!n || !n.tagName) return "";
  if (er.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement;
  }
  r.push(n.tagName.toLowerCase());
  const i =
    e && e.length
      ? e.filter((o) => n.getAttribute(o)).map((o) => [o, n.getAttribute(o)])
      : null;
  if (i && i.length)
    i.forEach((o) => {
      r.push(`[${o[0]}="${o[1]}"]`);
    });
  else {
    n.id && r.push(`#${n.id}`);
    const o = n.className;
    if (o && Ee(o)) {
      const a = o.split(/\s+/);
      for (const c of a) r.push(`.${c}`);
    }
  }
  const s = ["aria-label", "type", "name", "title", "alt"];
  for (const o of s) {
    const a = n.getAttribute(o);
    a && r.push(`[${o}="${a}"]`);
  }
  return r.join("");
}
function wa() {
  try {
    return er.document.location.href;
  } catch {
    return "";
  }
}
function Ta(t) {
  if (!er.HTMLElement) return null;
  let e = t;
  const n = 5;
  for (let r = 0; r < n; r++) {
    if (!e) return null;
    if (e instanceof HTMLElement) {
      if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
      if (e.dataset.sentryElement) return e.dataset.sentryElement;
    }
    e = e.parentNode;
  }
  return null;
}
function We(t, e = 0) {
  return typeof t != "string" || e === 0 || t.length <= e
    ? t
    : `${t.slice(0, e)}...`;
}
function Mr(t, e) {
  if (!Array.isArray(t)) return "";
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    try {
      Xi(i) ? n.push("[VueViewModel]") : n.push(String(i));
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(e);
}
function Oa(t, e, n = !1) {
  return Ee(t)
    ? ba(e)
      ? e.test(t)
      : Ee(e)
      ? n
        ? t === e
        : t.includes(e)
      : !1
    : !1;
}
function Gt(t, e = [], n = !1) {
  return e.some((r) => Oa(t, r, n));
}
function ae(t, e, n) {
  if (!(e in t)) return;
  const r = t[e],
    i = n(r);
  typeof i == "function" && Zi(i, r);
  try {
    t[e] = i;
  } catch {
    je && C.log(`Failed to replace method "${e}" in object`, t);
  }
}
function Me(t, e, n) {
  try {
    Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
  } catch {
    je && C.log(`Failed to add non-enumerable property "${e}" to object`, t);
  }
}
function Zi(t, e) {
  try {
    const n = e.prototype || {};
    (t.prototype = e.prototype = n), Me(t, "__sentry_original__", e);
  } catch {}
}
function tr(t) {
  return t.__sentry_original__;
}
function Qi(t) {
  if (Jn(t))
    return { message: t.message, name: t.name, stack: t.stack, ...Fr(t) };
  if (jt(t)) {
    const e = {
      type: t.type,
      target: Lr(t.target),
      currentTarget: Lr(t.currentTarget),
      ...Fr(t),
    };
    return (
      typeof CustomEvent < "u" && xe(t, CustomEvent) && (e.detail = t.detail), e
    );
  } else return t;
}
function Lr(t) {
  try {
    return va(t) ? Ji(t) : Object.prototype.toString.call(t);
  } catch {
    return "<unknown>";
  }
}
function Fr(t) {
  if (typeof t == "object" && t !== null) {
    const e = {};
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
  } else return {};
}
function Na(t, e = 40) {
  const n = Object.keys(Qi(t));
  n.sort();
  const r = n[0];
  if (!r) return "[object has no keys]";
  if (r.length >= e) return We(r, e);
  for (let i = n.length; i > 0; i--) {
    const s = n.slice(0, i).join(", ");
    if (!(s.length > e)) return i === n.length ? s : We(s, e);
  }
  return "";
}
function ue(t) {
  return bn(t, new Map());
}
function bn(t, e) {
  if (Aa(t)) {
    const n = e.get(t);
    if (n !== void 0) return n;
    const r = {};
    e.set(t, r);
    for (const i of Object.getOwnPropertyNames(t))
      typeof t[i] < "u" && (r[i] = bn(t[i], e));
    return r;
  }
  if (Array.isArray(t)) {
    const n = e.get(t);
    if (n !== void 0) return n;
    const r = [];
    return (
      e.set(t, r),
      t.forEach((i) => {
        r.push(bn(i, e));
      }),
      r
    );
  }
  return t;
}
function Aa(t) {
  if (!Ke(t)) return !1;
  try {
    const e = Object.getPrototypeOf(t).constructor.name;
    return !e || e === "Object";
  } catch {
    return !0;
  }
}
const es = 1e3;
function ct() {
  return Date.now() / es;
}
function Ra() {
  const { performance: t } = M;
  if (!t || !t.now) return ct;
  const e = Date.now() - t.now(),
    n = t.timeOrigin == null ? e : t.timeOrigin;
  return () => (n + t.now()) / es;
}
const Se = Ra();
(() => {
  const { performance: t } = M;
  if (!t || !t.now) return;
  const e = 3600 * 1e3,
    n = t.now(),
    r = Date.now(),
    i = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e,
    s = i < e,
    o = t.timing && t.timing.navigationStart,
    c = typeof o == "number" ? Math.abs(o + n - r) : e,
    u = c < e;
  return s || u ? (i <= c ? t.timeOrigin : o) : r;
})();
function le() {
  const t = M,
    e = t.crypto || t.msCrypto;
  let n = () => Math.random() * 16;
  try {
    if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
    e &&
      e.getRandomValues &&
      (n = () => {
        const r = new Uint8Array(1);
        return e.getRandomValues(r), r[0];
      });
  } catch {}
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (r) =>
    (r ^ ((n() & 15) >> (r / 4))).toString(16)
  );
}
function ts(t) {
  return t.exception && t.exception.values ? t.exception.values[0] : void 0;
}
function Ae(t) {
  const { message: e, event_id: n } = t;
  if (e) return e;
  const r = ts(t);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || "<unknown>"
    : n || "<unknown>";
}
function En(t, e, n) {
  const r = (t.exception = t.exception || {}),
    i = (r.values = r.values || []),
    s = (i[0] = i[0] || {});
  s.value || (s.value = e || ""), s.type || (s.type = n || "Error");
}
function ze(t, e) {
  const n = ts(t);
  if (!n) return;
  const r = { type: "generic", handled: !0 },
    i = n.mechanism;
  if (((n.mechanism = { ...r, ...i, ...e }), e && "data" in e)) {
    const s = { ...(i && i.data), ...e.data };
    n.mechanism.data = s;
  }
}
function jr(t) {
  if (Ca(t)) return !0;
  try {
    Me(t, "__sentry_captured__", !0);
  } catch {}
  return !1;
}
function Ca(t) {
  try {
    return t.__sentry_captured__;
  } catch {}
}
var ye;
(function (t) {
  t[(t.PENDING = 0)] = "PENDING";
  const n = 1;
  t[(t.RESOLVED = n)] = "RESOLVED";
  const r = 2;
  t[(t.REJECTED = r)] = "REJECTED";
})(ye || (ye = {}));
function Le(t) {
  return new ce((e) => {
    e(t);
  });
}
function Pt(t) {
  return new ce((e, n) => {
    n(t);
  });
}
class ce {
  constructor(e) {
    ce.prototype.__init.call(this),
      ce.prototype.__init2.call(this),
      ce.prototype.__init3.call(this),
      ce.prototype.__init4.call(this),
      (this._state = ye.PENDING),
      (this._handlers = []);
    try {
      e(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  then(e, n) {
    return new ce((r, i) => {
      this._handlers.push([
        !1,
        (s) => {
          if (!e) r(s);
          else
            try {
              r(e(s));
            } catch (o) {
              i(o);
            }
        },
        (s) => {
          if (!n) i(s);
          else
            try {
              r(n(s));
            } catch (o) {
              i(o);
            }
        },
      ]),
        this._executeHandlers();
    });
  }
  catch(e) {
    return this.then((n) => n, e);
  }
  finally(e) {
    return new ce((n, r) => {
      let i, s;
      return this.then(
        (o) => {
          (s = !1), (i = o), e && e();
        },
        (o) => {
          (s = !0), (i = o), e && e();
        }
      ).then(() => {
        if (s) {
          r(i);
          return;
        }
        n(i);
      });
    });
  }
  __init() {
    this._resolve = (e) => {
      this._setResult(ye.RESOLVED, e);
    };
  }
  __init2() {
    this._reject = (e) => {
      this._setResult(ye.REJECTED, e);
    };
  }
  __init3() {
    this._setResult = (e, n) => {
      if (this._state === ye.PENDING) {
        if ($t(n)) {
          n.then(this._resolve, this._reject);
          return;
        }
        (this._state = e), (this._value = n), this._executeHandlers();
      }
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === ye.PENDING) return;
      const e = this._handlers.slice();
      (this._handlers = []),
        e.forEach((n) => {
          n[0] ||
            (this._state === ye.RESOLVED && n[1](this._value),
            this._state === ye.REJECTED && n[2](this._value),
            (n[0] = !0));
        });
    };
  }
}
function ka(t) {
  const e = Se(),
    n = {
      sid: le(),
      init: !0,
      timestamp: e,
      started: e,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => Da(n),
    };
  return t && Ye(n, t), n;
}
function Ye(t, e = {}) {
  if (
    (e.user &&
      (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
      !t.did &&
        !e.did &&
        (t.did = e.user.id || e.user.email || e.user.username)),
    (t.timestamp = e.timestamp || Se()),
    e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
    e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
    e.sid && (t.sid = e.sid.length === 32 ? e.sid : le()),
    e.init !== void 0 && (t.init = e.init),
    !t.did && e.did && (t.did = `${e.did}`),
    typeof e.started == "number" && (t.started = e.started),
    t.ignoreDuration)
  )
    t.duration = void 0;
  else if (typeof e.duration == "number") t.duration = e.duration;
  else {
    const n = t.timestamp - t.started;
    t.duration = n >= 0 ? n : 0;
  }
  e.release && (t.release = e.release),
    e.environment && (t.environment = e.environment),
    !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
    !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
    typeof e.errors == "number" && (t.errors = e.errors),
    e.status && (t.status = e.status);
}
function Pa(t, e) {
  let n = {};
  e ? (n = { status: e }) : t.status === "ok" && (n = { status: "exited" }),
    Ye(t, n);
}
function Da(t) {
  return ue({
    sid: `${t.sid}`,
    init: t.init,
    started: new Date(t.started * 1e3).toISOString(),
    timestamp: new Date(t.timestamp * 1e3).toISOString(),
    status: t.status,
    errors: t.errors,
    did:
      typeof t.did == "number" || typeof t.did == "string"
        ? `${t.did}`
        : void 0,
    duration: t.duration,
    abnormal_mechanism: t.abnormal_mechanism,
    attrs: {
      release: t.release,
      environment: t.environment,
      ip_address: t.ipAddress,
      user_agent: t.userAgent,
    },
  });
}
function $r() {
  return le();
}
function Sn() {
  return le().substring(16);
}
function qt(t, e, n = 2) {
  if (!e || typeof e != "object" || n <= 0) return e;
  if (t && e && Object.keys(e).length === 0) return t;
  const r = { ...t };
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      (r[i] = qt(r[i], e[i], n - 1));
  return r;
}
const In = "_sentrySpan";
function Gr(t, e) {
  e ? Me(t, In, e) : delete t[In];
}
function qr(t) {
  return t[In];
}
const Ua = 100;
class nr {
  constructor() {
    (this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {}),
      (this._propagationContext = { traceId: $r(), spanId: Sn() });
  }
  clone() {
    const e = new nr();
    return (
      (e._breadcrumbs = [...this._breadcrumbs]),
      (e._tags = { ...this._tags }),
      (e._extra = { ...this._extra }),
      (e._contexts = { ...this._contexts }),
      this._contexts.flags &&
        (e._contexts.flags = { values: [...this._contexts.flags.values] }),
      (e._user = this._user),
      (e._level = this._level),
      (e._session = this._session),
      (e._transactionName = this._transactionName),
      (e._fingerprint = this._fingerprint),
      (e._eventProcessors = [...this._eventProcessors]),
      (e._requestSession = this._requestSession),
      (e._attachments = [...this._attachments]),
      (e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
      (e._propagationContext = { ...this._propagationContext }),
      (e._client = this._client),
      (e._lastEventId = this._lastEventId),
      Gr(e, qr(this)),
      e
    );
  }
  setClient(e) {
    this._client = e;
  }
  setLastEventId(e) {
    this._lastEventId = e;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(e) {
    this._scopeListeners.push(e);
  }
  addEventProcessor(e) {
    return this._eventProcessors.push(e), this;
  }
  setUser(e) {
    return (
      (this._user = e || {
        email: void 0,
        id: void 0,
        ip_address: void 0,
        username: void 0,
      }),
      this._session && Ye(this._session, { user: e }),
      this._notifyScopeListeners(),
      this
    );
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(e) {
    return (this._requestSession = e), this;
  }
  setTags(e) {
    return (
      (this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this
    );
  }
  setTag(e, n) {
    return (
      (this._tags = { ...this._tags, [e]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtras(e) {
    return (
      (this._extra = { ...this._extra, ...e }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtra(e, n) {
    return (
      (this._extra = { ...this._extra, [e]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setFingerprint(e) {
    return (this._fingerprint = e), this._notifyScopeListeners(), this;
  }
  setLevel(e) {
    return (this._level = e), this._notifyScopeListeners(), this;
  }
  setTransactionName(e) {
    return (this._transactionName = e), this._notifyScopeListeners(), this;
  }
  setContext(e, n) {
    return (
      n === null ? delete this._contexts[e] : (this._contexts[e] = n),
      this._notifyScopeListeners(),
      this
    );
  }
  setSession(e) {
    return (
      e ? (this._session = e) : delete this._session,
      this._notifyScopeListeners(),
      this
    );
  }
  getSession() {
    return this._session;
  }
  update(e) {
    if (!e) return this;
    const n = typeof e == "function" ? e(this) : e,
      [r, i] =
        n instanceof Ie
          ? [n.getScopeData(), n.getRequestSession()]
          : Ke(n)
          ? [e, e.requestSession]
          : [],
      {
        tags: s,
        extra: o,
        user: a,
        contexts: c,
        level: u,
        fingerprint: p = [],
        propagationContext: h,
      } = r || {};
    return (
      (this._tags = { ...this._tags, ...s }),
      (this._extra = { ...this._extra, ...o }),
      (this._contexts = { ...this._contexts, ...c }),
      a && Object.keys(a).length && (this._user = a),
      u && (this._level = u),
      p.length && (this._fingerprint = p),
      h && (this._propagationContext = h),
      i && (this._requestSession = i),
      this
    );
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._requestSession = void 0),
      (this._session = void 0),
      Gr(this, void 0),
      (this._attachments = []),
      this.setPropagationContext({ traceId: $r() }),
      this._notifyScopeListeners(),
      this
    );
  }
  addBreadcrumb(e, n) {
    const r = typeof n == "number" ? n : Ua;
    if (r <= 0) return this;
    const i = { timestamp: ct(), ...e };
    return (
      this._breadcrumbs.push(i),
      this._breadcrumbs.length > r &&
        ((this._breadcrumbs = this._breadcrumbs.slice(-r)),
        this._client &&
          this._client.recordDroppedEvent("buffer_overflow", "log_item")),
      this._notifyScopeListeners(),
      this
    );
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
  }
  addAttachment(e) {
    return this._attachments.push(e), this;
  }
  clearAttachments() {
    return (this._attachments = []), this;
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: qr(this),
    };
  }
  setSDKProcessingMetadata(e) {
    return (
      (this._sdkProcessingMetadata = qt(this._sdkProcessingMetadata, e, 2)),
      this
    );
  }
  setPropagationContext(e) {
    return (this._propagationContext = { spanId: Sn(), ...e }), this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(e, n) {
    const r = n && n.event_id ? n.event_id : le();
    if (!this._client)
      return (
        C.warn("No client configured on scope - will not capture exception!"), r
      );
    const i = new Error("Sentry syntheticException");
    return (
      this._client.captureException(
        e,
        { originalException: e, syntheticException: i, ...n, event_id: r },
        this
      ),
      r
    );
  }
  captureMessage(e, n, r) {
    const i = r && r.event_id ? r.event_id : le();
    if (!this._client)
      return (
        C.warn("No client configured on scope - will not capture message!"), i
      );
    const s = new Error(e);
    return (
      this._client.captureMessage(
        e,
        n,
        { originalException: e, syntheticException: s, ...r, event_id: i },
        this
      ),
      i
    );
  }
  captureEvent(e, n) {
    const r = n && n.event_id ? n.event_id : le();
    return this._client
      ? (this._client.captureEvent(e, { ...n, event_id: r }, this), r)
      : (C.warn("No client configured on scope - will not capture event!"), r);
  }
  _notifyScopeListeners() {
    this._notifyingListeners ||
      ((this._notifyingListeners = !0),
      this._scopeListeners.forEach((e) => {
        e(this);
      }),
      (this._notifyingListeners = !1));
  }
}
const Ie = nr;
function xa() {
  return Lt("defaultCurrentScope", () => new Ie());
}
function Ma() {
  return Lt("defaultIsolationScope", () => new Ie());
}
class La {
  constructor(e, n) {
    let r;
    e ? (r = e) : (r = new Ie());
    let i;
    n ? (i = n) : (i = new Ie()),
      (this._stack = [{ scope: r }]),
      (this._isolationScope = i);
  }
  withScope(e) {
    const n = this._pushScope();
    let r;
    try {
      r = e(n);
    } catch (i) {
      throw (this._popScope(), i);
    }
    return $t(r)
      ? r.then(
          (i) => (this._popScope(), i),
          (i) => {
            throw (this._popScope(), i);
          }
        )
      : (this._popScope(), r);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const e = this.getScope().clone();
    return this._stack.push({ client: this.getClient(), scope: e }), e;
  }
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop();
  }
}
function Xe() {
  const t = Ft(),
    e = Xn(t);
  return (e.stack = e.stack || new La(xa(), Ma()));
}
function Fa(t) {
  return Xe().withScope(t);
}
function ja(t, e) {
  const n = Xe();
  return n.withScope(() => ((n.getStackTop().scope = t), e(t)));
}
function Br(t) {
  return Xe().withScope(() => t(Xe().getIsolationScope()));
}
function $a() {
  return {
    withIsolationScope: Br,
    withScope: Fa,
    withSetScope: ja,
    withSetIsolationScope: (t, e) => Br(e),
    getCurrentScope: () => Xe().getScope(),
    getIsolationScope: () => Xe().getIsolationScope(),
  };
}
function rr(t) {
  const e = Xn(t);
  return e.acs ? e.acs : $a();
}
function qe() {
  const t = Ft();
  return rr(t).getCurrentScope();
}
function ut() {
  const t = Ft();
  return rr(t).getIsolationScope();
}
function Ga() {
  return Lt("globalScope", () => new Ie());
}
function qa(...t) {
  const e = Ft(),
    n = rr(e);
  if (t.length === 2) {
    const [r, i] = t;
    return r ? n.withSetScope(r, i) : n.withScope(i);
  }
  return n.withScope(t[0]);
}
function ne() {
  return qe().getClient();
}
function Ba(t) {
  const e = t.getPropagationContext(),
    { traceId: n, spanId: r, parentSpanId: i } = e;
  return ue({ trace_id: n, span_id: r, parent_span_id: i });
}
const Ha = "_sentryMetrics";
function Va(t) {
  const e = t[Ha];
  if (!e) return;
  const n = {};
  for (const [, [r, i]] of e) (n[r] || (n[r] = [])).push(ue(i));
  return n;
}
const Wa = "sentry.source",
  Ka = "sentry.sample_rate",
  za = "sentry.op",
  Ya = "sentry.origin",
  Xa = 0,
  Ja = 1,
  Za = "sentry-",
  Qa = /^sentry-/;
function ec(t) {
  const e = tc(t);
  if (!e) return;
  const n = Object.entries(e).reduce((r, [i, s]) => {
    if (i.match(Qa)) {
      const o = i.slice(Za.length);
      r[o] = s;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function tc(t) {
  if (!(!t || (!Ee(t) && !Array.isArray(t))))
    return Array.isArray(t)
      ? t.reduce((e, n) => {
          const r = Hr(n);
          return (
            Object.entries(r).forEach(([i, s]) => {
              e[i] = s;
            }),
            e
          );
        }, {})
      : Hr(t);
}
function Hr(t) {
  return t
    .split(",")
    .map((e) => e.split("=").map((n) => decodeURIComponent(n.trim())))
    .reduce((e, [n, r]) => (n && r && (e[n] = r), e), {});
}
const nc = 1;
let Vr = !1;
function rc(t) {
  const { spanId: e, traceId: n, isRemote: r } = t.spanContext(),
    i = r ? e : ir(t).parent_span_id,
    s = r ? Sn() : e;
  return ue({ parent_span_id: i, span_id: s, trace_id: n });
}
function Wr(t) {
  return typeof t == "number"
    ? Kr(t)
    : Array.isArray(t)
    ? t[0] + t[1] / 1e9
    : t instanceof Date
    ? Kr(t.getTime())
    : Se();
}
function Kr(t) {
  return t > 9999999999 ? t / 1e3 : t;
}
function ir(t) {
  if (sc(t)) return t.getSpanJSON();
  try {
    const { spanId: e, traceId: n } = t.spanContext();
    if (ic(t)) {
      const {
        attributes: r,
        startTime: i,
        name: s,
        endTime: o,
        parentSpanId: a,
        status: c,
      } = t;
      return ue({
        span_id: e,
        trace_id: n,
        data: r,
        description: s,
        parent_span_id: a,
        start_timestamp: Wr(i),
        timestamp: Wr(o) || void 0,
        status: ac(c),
        op: r[za],
        origin: r[Ya],
        _metrics_summary: Va(t),
      });
    }
    return { span_id: e, trace_id: n };
  } catch {
    return {};
  }
}
function ic(t) {
  const e = t;
  return (
    !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
  );
}
function sc(t) {
  return typeof t.getSpanJSON == "function";
}
function oc(t) {
  const { traceFlags: e } = t.spanContext();
  return e === nc;
}
function ac(t) {
  if (!(!t || t.code === Xa))
    return t.code === Ja ? "ok" : t.message || "unknown_error";
}
const cc = "_sentryRootSpan";
function ns(t) {
  return t[cc] || t;
}
function uc() {
  Vr ||
    (at(() => {
      console.warn(
        "[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly."
      );
    }),
    (Vr = !0));
}
function lc(t) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  const e = ne(),
    n = t || (e && e.getOptions());
  return (
    !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
  );
}
const sr = "production",
  fc = "_frozenDsc";
function rs(t, e) {
  const n = e.getOptions(),
    { publicKey: r } = e.getDsn() || {},
    i = ue({
      environment: n.environment || sr,
      release: n.release,
      public_key: r,
      trace_id: t,
    });
  return e.emit("createDsc", i), i;
}
function dc(t, e) {
  const n = e.getPropagationContext();
  return n.dsc || rs(n.traceId, t);
}
function pc(t) {
  const e = ne();
  if (!e) return {};
  const n = ns(t),
    r = n[fc];
  if (r) return r;
  const i = n.spanContext().traceState,
    s = i && i.get("sentry.dsc"),
    o = s && ec(s);
  if (o) return o;
  const a = rs(t.spanContext().traceId, e),
    c = ir(n),
    u = c.data || {},
    p = u[Ka];
  p != null && (a.sample_rate = `${p}`);
  const h = u[Wa],
    f = c.description;
  return (
    h !== "url" && f && (a.transaction = f),
    lc() && (a.sampled = String(oc(n))),
    e.emit("createDsc", a, n),
    a
  );
}
function hc(t) {
  if (typeof t == "boolean") return Number(t);
  const e = typeof t == "string" ? parseFloat(t) : t;
  if (typeof e != "number" || isNaN(e) || e < 0 || e > 1) {
    G &&
      C.warn(
        `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
          t
        )} of type ${JSON.stringify(typeof t)}.`
      );
    return;
  }
  return e;
}
const gc = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function mc(t) {
  return t === "http" || t === "https";
}
function Bt(t, e = !1) {
  const {
    host: n,
    path: r,
    pass: i,
    port: s,
    projectId: o,
    protocol: a,
    publicKey: c,
  } = t;
  return `${a}://${c}${e && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${
    r && `${r}/`
  }${o}`;
}
function _c(t) {
  const e = gc.exec(t);
  if (!e) {
    at(() => {
      console.error(`Invalid Sentry Dsn: ${t}`);
    });
    return;
  }
  const [n, r, i = "", s = "", o = "", a = ""] = e.slice(1);
  let c = "",
    u = a;
  const p = u.split("/");
  if ((p.length > 1 && ((c = p.slice(0, -1).join("/")), (u = p.pop())), u)) {
    const h = u.match(/^\d+/);
    h && (u = h[0]);
  }
  return is({
    host: s,
    pass: i,
    path: c,
    projectId: u,
    port: o,
    protocol: n,
    publicKey: r,
  });
}
function is(t) {
  return {
    protocol: t.protocol,
    publicKey: t.publicKey || "",
    pass: t.pass || "",
    host: t.host,
    port: t.port || "",
    path: t.path || "",
    projectId: t.projectId,
  };
}
function yc(t) {
  if (!je) return !0;
  const { port: e, projectId: n, protocol: r } = t;
  return ["protocol", "publicKey", "host", "projectId"].find((o) =>
    t[o] ? !1 : (C.error(`Invalid Sentry Dsn: ${o} missing`), !0)
  )
    ? !1
    : n.match(/^\d+$/)
    ? mc(r)
      ? e && isNaN(parseInt(e, 10))
        ? (C.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1)
        : !0
      : (C.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
    : (C.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function vc(t) {
  const e = typeof t == "string" ? _c(t) : is(t);
  if (!(!e || !yc(e))) return e;
}
function bc() {
  const t = typeof WeakSet == "function",
    e = t ? new WeakSet() : [];
  function n(i) {
    if (t) return e.has(i) ? !0 : (e.add(i), !1);
    for (let s = 0; s < e.length; s++) if (e[s] === i) return !0;
    return e.push(i), !1;
  }
  function r(i) {
    if (t) e.delete(i);
    else
      for (let s = 0; s < e.length; s++)
        if (e[s] === i) {
          e.splice(s, 1);
          break;
        }
  }
  return [n, r];
}
function ve(t, e = 100, n = 1 / 0) {
  try {
    return wn("", t, e, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function ss(t, e = 3, n = 100 * 1024) {
  const r = ve(t, e);
  return wc(r) > n ? ss(t, e - 1, n) : r;
}
function wn(t, e, n = 1 / 0, r = 1 / 0, i = bc()) {
  const [s, o] = i;
  if (
    e == null ||
    ["boolean", "string"].includes(typeof e) ||
    (typeof e == "number" && Number.isFinite(e))
  )
    return e;
  const a = Ec(t, e);
  if (!a.startsWith("[object ")) return a;
  if (e.__sentry_skip_normalization__) return e;
  const c =
    typeof e.__sentry_override_normalization_depth__ == "number"
      ? e.__sentry_override_normalization_depth__
      : n;
  if (c === 0) return a.replace("object ", "");
  if (s(e)) return "[Circular ~]";
  const u = e;
  if (u && typeof u.toJSON == "function")
    try {
      const g = u.toJSON();
      return wn("", g, c - 1, r, i);
    } catch {}
  const p = Array.isArray(e) ? [] : {};
  let h = 0;
  const f = Qi(e);
  for (const g in f) {
    if (!Object.prototype.hasOwnProperty.call(f, g)) continue;
    if (h >= r) {
      p[g] = "[MaxProperties ~]";
      break;
    }
    const l = f[g];
    (p[g] = wn(g, l, c - 1, r, i)), h++;
  }
  return o(e), p;
}
function Ec(t, e) {
  try {
    if (t === "domain" && e && typeof e == "object" && e._events)
      return "[Domain]";
    if (t === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && e === global) return "[Global]";
    if (typeof window < "u" && e === window) return "[Window]";
    if (typeof document < "u" && e === document) return "[Document]";
    if (Xi(e)) return "[VueViewModel]";
    if (Ea(e)) return "[SyntheticEvent]";
    if (typeof e == "number" && !Number.isFinite(e)) return `[${e}]`;
    if (typeof e == "function") return `[Function: ${Re(e)}]`;
    if (typeof e == "symbol") return `[${String(e)}]`;
    if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
    const n = Sc(e);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function Sc(t) {
  const e = Object.getPrototypeOf(t);
  return e ? e.constructor.name : "null prototype";
}
function Ic(t) {
  return ~-encodeURI(t).split(/%..|./).length;
}
function wc(t) {
  return Ic(JSON.stringify(t));
}
function lt(t, e = []) {
  return [t, e];
}
function Tc(t, e) {
  const [n, r] = t;
  return [n, [...r, e]];
}
function zr(t, e) {
  const n = t[1];
  for (const r of n) {
    const i = r[0].type;
    if (e(r, i)) return !0;
  }
  return !1;
}
function Tn(t) {
  return M.__SENTRY__ && M.__SENTRY__.encodePolyfill
    ? M.__SENTRY__.encodePolyfill(t)
    : new TextEncoder().encode(t);
}
function Oc(t) {
  const [e, n] = t;
  let r = JSON.stringify(e);
  function i(s) {
    typeof r == "string"
      ? (r = typeof s == "string" ? r + s : [Tn(r), s])
      : r.push(typeof s == "string" ? Tn(s) : s);
  }
  for (const s of n) {
    const [o, a] = s;
    if (
      (i(`
${JSON.stringify(o)}
`),
      typeof a == "string" || a instanceof Uint8Array)
    )
      i(a);
    else {
      let c;
      try {
        c = JSON.stringify(a);
      } catch {
        c = JSON.stringify(ve(a));
      }
      i(c);
    }
  }
  return typeof r == "string" ? r : Nc(r);
}
function Nc(t) {
  const e = t.reduce((i, s) => i + s.length, 0),
    n = new Uint8Array(e);
  let r = 0;
  for (const i of t) n.set(i, r), (r += i.length);
  return n;
}
function Ac(t) {
  const e = typeof t.data == "string" ? Tn(t.data) : t.data;
  return [
    ue({
      type: "attachment",
      length: e.length,
      filename: t.filename,
      content_type: t.contentType,
      attachment_type: t.attachmentType,
    }),
    e,
  ];
}
const Rc = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  statsd: "metric_bucket",
  raw_security: "security",
};
function Yr(t) {
  return Rc[t];
}
function os(t) {
  if (!t || !t.sdk) return;
  const { name: e, version: n } = t.sdk;
  return { name: e, version: n };
}
function Cc(t, e, n, r) {
  const i =
    t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: t.event_id,
    sent_at: new Date().toISOString(),
    ...(e && { sdk: e }),
    ...(!!n && r && { dsn: Bt(r) }),
    ...(i && { trace: ue({ ...i }) }),
  };
}
function kc(t, e) {
  return (
    e &&
      ((t.sdk = t.sdk || {}),
      (t.sdk.name = t.sdk.name || e.name),
      (t.sdk.version = t.sdk.version || e.version),
      (t.sdk.integrations = [
        ...(t.sdk.integrations || []),
        ...(e.integrations || []),
      ]),
      (t.sdk.packages = [...(t.sdk.packages || []), ...(e.packages || [])])),
    t
  );
}
function Pc(t, e, n, r) {
  const i = os(n),
    s = {
      sent_at: new Date().toISOString(),
      ...(i && { sdk: i }),
      ...(!!r && e && { dsn: Bt(e) }),
    },
    o =
      "aggregates" in t
        ? [{ type: "sessions" }, t]
        : [{ type: "session" }, t.toJSON()];
  return lt(s, [o]);
}
function Dc(t, e, n, r) {
  const i = os(n),
    s = t.type && t.type !== "replay_event" ? t.type : "event";
  kc(t, n && n.sdk);
  const o = Cc(t, i, r, e);
  return delete t.sdkProcessingMetadata, lt(o, [[{ type: s }, t]]);
}
function On(t, e, n, r = 0) {
  return new ce((i, s) => {
    const o = t[r];
    if (e === null || typeof o != "function") i(e);
    else {
      const a = o({ ...e }, n);
      G &&
        o.id &&
        a === null &&
        C.log(`Event processor "${o.id}" dropped event`),
        $t(a)
          ? a.then((c) => On(t, c, n, r + 1).then(i)).then(null, s)
          : On(t, a, n, r + 1)
              .then(i)
              .then(null, s);
    }
  });
}
let vt, Xr, bt;
function Uc(t) {
  const e = M._sentryDebugIds;
  if (!e) return {};
  const n = Object.keys(e);
  return (
    (bt && n.length === Xr) ||
      ((Xr = n.length),
      (bt = n.reduce((r, i) => {
        vt || (vt = {});
        const s = vt[i];
        if (s) r[s[0]] = s[1];
        else {
          const o = t(i);
          for (let a = o.length - 1; a >= 0; a--) {
            const c = o[a],
              u = c && c.filename,
              p = e[i];
            if (u && p) {
              (r[u] = p), (vt[i] = [u, p]);
              break;
            }
          }
        }
        return r;
      }, {}))),
    bt
  );
}
function xc(t, e) {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: i,
    sdkProcessingMetadata: s,
  } = e;
  Mc(t, e), r && jc(t, r), $c(t, n), Lc(t, i), Fc(t, s);
}
function Jr(t, e) {
  const {
    extra: n,
    tags: r,
    user: i,
    contexts: s,
    level: o,
    sdkProcessingMetadata: a,
    breadcrumbs: c,
    fingerprint: u,
    eventProcessors: p,
    attachments: h,
    propagationContext: f,
    transactionName: g,
    span: l,
  } = e;
  Et(t, "extra", n),
    Et(t, "tags", r),
    Et(t, "user", i),
    Et(t, "contexts", s),
    (t.sdkProcessingMetadata = qt(t.sdkProcessingMetadata, a, 2)),
    o && (t.level = o),
    g && (t.transactionName = g),
    l && (t.span = l),
    c.length && (t.breadcrumbs = [...t.breadcrumbs, ...c]),
    u.length && (t.fingerprint = [...t.fingerprint, ...u]),
    p.length && (t.eventProcessors = [...t.eventProcessors, ...p]),
    h.length && (t.attachments = [...t.attachments, ...h]),
    (t.propagationContext = { ...t.propagationContext, ...f });
}
function Et(t, e, n) {
  t[e] = qt(t[e], n, 1);
}
function Mc(t, e) {
  const {
      extra: n,
      tags: r,
      user: i,
      contexts: s,
      level: o,
      transactionName: a,
    } = e,
    c = ue(n);
  c && Object.keys(c).length && (t.extra = { ...c, ...t.extra });
  const u = ue(r);
  u && Object.keys(u).length && (t.tags = { ...u, ...t.tags });
  const p = ue(i);
  p && Object.keys(p).length && (t.user = { ...p, ...t.user });
  const h = ue(s);
  h && Object.keys(h).length && (t.contexts = { ...h, ...t.contexts }),
    o && (t.level = o),
    a && t.type !== "transaction" && (t.transaction = a);
}
function Lc(t, e) {
  const n = [...(t.breadcrumbs || []), ...e];
  t.breadcrumbs = n.length ? n : void 0;
}
function Fc(t, e) {
  t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata, ...e };
}
function jc(t, e) {
  (t.contexts = { trace: rc(e), ...t.contexts }),
    (t.sdkProcessingMetadata = {
      dynamicSamplingContext: pc(e),
      ...t.sdkProcessingMetadata,
    });
  const n = ns(e),
    r = ir(n).description;
  r && !t.transaction && t.type === "transaction" && (t.transaction = r);
}
function $c(t, e) {
  (t.fingerprint = t.fingerprint
    ? Array.isArray(t.fingerprint)
      ? t.fingerprint
      : [t.fingerprint]
    : []),
    e && (t.fingerprint = t.fingerprint.concat(e)),
    t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
}
function Gc(t, e, n, r, i, s) {
  const { normalizeDepth: o = 3, normalizeMaxBreadth: a = 1e3 } = t,
    c = {
      ...e,
      event_id: e.event_id || n.event_id || le(),
      timestamp: e.timestamp || ct(),
    },
    u = n.integrations || t.integrations.map((v) => v.name);
  qc(c, t),
    Vc(c, u),
    i && i.emit("applyFrameMetadata", e),
    e.type === void 0 && Bc(c, t.stackParser);
  const p = Kc(r, n.captureContext);
  n.mechanism && ze(c, n.mechanism);
  const h = i ? i.getEventProcessors() : [],
    f = Ga().getScopeData();
  if (s) {
    const v = s.getScopeData();
    Jr(f, v);
  }
  if (p) {
    const v = p.getScopeData();
    Jr(f, v);
  }
  const g = [...(n.attachments || []), ...f.attachments];
  g.length && (n.attachments = g), xc(c, f);
  const l = [...h, ...f.eventProcessors];
  return On(l, c, n).then(
    (v) => (v && Hc(v), typeof o == "number" && o > 0 ? Wc(v, o, a) : v)
  );
}
function qc(t, e) {
  const { environment: n, release: r, dist: i, maxValueLength: s = 250 } = e;
  (t.environment = t.environment || n || sr),
    !t.release && r && (t.release = r),
    !t.dist && i && (t.dist = i),
    t.message && (t.message = We(t.message, s));
  const o = t.exception && t.exception.values && t.exception.values[0];
  o && o.value && (o.value = We(o.value, s));
  const a = t.request;
  a && a.url && (a.url = We(a.url, s));
}
function Bc(t, e) {
  const n = Uc(e);
  try {
    t.exception.values.forEach((r) => {
      r.stacktrace.frames.forEach((i) => {
        n && i.filename && (i.debug_id = n[i.filename]);
      });
    });
  } catch {}
}
function Hc(t) {
  const e = {};
  try {
    t.exception.values.forEach((r) => {
      r.stacktrace.frames.forEach((i) => {
        i.debug_id &&
          (i.abs_path
            ? (e[i.abs_path] = i.debug_id)
            : i.filename && (e[i.filename] = i.debug_id),
          delete i.debug_id);
      });
    });
  } catch {}
  if (Object.keys(e).length === 0) return;
  (t.debug_meta = t.debug_meta || {}),
    (t.debug_meta.images = t.debug_meta.images || []);
  const n = t.debug_meta.images;
  Object.entries(e).forEach(([r, i]) => {
    n.push({ type: "sourcemap", code_file: r, debug_id: i });
  });
}
function Vc(t, e) {
  e.length > 0 &&
    ((t.sdk = t.sdk || {}),
    (t.sdk.integrations = [...(t.sdk.integrations || []), ...e]));
}
function Wc(t, e, n) {
  if (!t) return null;
  const r = {
    ...t,
    ...(t.breadcrumbs && {
      breadcrumbs: t.breadcrumbs.map((i) => ({
        ...i,
        ...(i.data && { data: ve(i.data, e, n) }),
      })),
    }),
    ...(t.user && { user: ve(t.user, e, n) }),
    ...(t.contexts && { contexts: ve(t.contexts, e, n) }),
    ...(t.extra && { extra: ve(t.extra, e, n) }),
  };
  return (
    t.contexts &&
      t.contexts.trace &&
      r.contexts &&
      ((r.contexts.trace = t.contexts.trace),
      t.contexts.trace.data &&
        (r.contexts.trace.data = ve(t.contexts.trace.data, e, n))),
    t.spans &&
      (r.spans = t.spans.map((i) => ({
        ...i,
        ...(i.data && { data: ve(i.data, e, n) }),
      }))),
    t.contexts &&
      t.contexts.flags &&
      r.contexts &&
      (r.contexts.flags = ve(t.contexts.flags, 3, n)),
    r
  );
}
function Kc(t, e) {
  if (!e) return t;
  const n = t ? t.clone() : new Ie();
  return n.update(e), n;
}
function zc(t) {
  if (t)
    return Yc(t) ? { captureContext: t } : Jc(t) ? { captureContext: t } : t;
}
function Yc(t) {
  return t instanceof Ie || typeof t == "function";
}
const Xc = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "requestSession",
  "propagationContext",
];
function Jc(t) {
  return Object.keys(t).some((e) => Xc.includes(e));
}
function Zc(t, e) {
  return qe().captureException(t, zc(e));
}
function as(t, e) {
  return qe().captureEvent(t, e);
}
function Zr(t) {
  const e = ne(),
    n = ut(),
    r = qe(),
    { release: i, environment: s = sr } = (e && e.getOptions()) || {},
    { userAgent: o } = M.navigator || {},
    a = ka({
      release: i,
      environment: s,
      user: r.getUser() || n.getUser(),
      ...(o && { userAgent: o }),
      ...t,
    }),
    c = n.getSession();
  return (
    c && c.status === "ok" && Ye(c, { status: "exited" }),
    cs(),
    n.setSession(a),
    r.setSession(a),
    a
  );
}
function cs() {
  const t = ut(),
    e = qe(),
    n = e.getSession() || t.getSession();
  n && Pa(n), us(), t.setSession(), e.setSession();
}
function us() {
  const t = ut(),
    e = qe(),
    n = ne(),
    r = e.getSession() || t.getSession();
  r && n && n.captureSession(r);
}
function Qr(t = !1) {
  if (t) {
    cs();
    return;
  }
  us();
}
const Qc = "7";
function eu(t) {
  const e = t.protocol ? `${t.protocol}:` : "",
    n = t.port ? `:${t.port}` : "";
  return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
}
function tu(t) {
  return `${eu(t)}${t.projectId}/envelope/`;
}
function nu(t, e) {
  const n = { sentry_version: Qc };
  return (
    t.publicKey && (n.sentry_key = t.publicKey),
    e && (n.sentry_client = `${e.name}/${e.version}`),
    new URLSearchParams(n).toString()
  );
}
function ru(t, e, n) {
  return e || `${tu(t)}?${nu(t, n)}`;
}
const ei = [];
function iu(t, e) {
  const n = {};
  return (
    e.forEach((r) => {
      r && ls(t, r, n);
    }),
    n
  );
}
function ti(t, e) {
  for (const n of e) n && n.afterAllSetup && n.afterAllSetup(t);
}
function ls(t, e, n) {
  if (n[e.name]) {
    G &&
      C.log(`Integration skipped because it was already installed: ${e.name}`);
    return;
  }
  if (
    ((n[e.name] = e),
    ei.indexOf(e.name) === -1 &&
      typeof e.setupOnce == "function" &&
      (e.setupOnce(), ei.push(e.name)),
    e.setup && typeof e.setup == "function" && e.setup(t),
    typeof e.preprocessEvent == "function")
  ) {
    const r = e.preprocessEvent.bind(e);
    t.on("preprocessEvent", (i, s) => r(i, s, t));
  }
  if (typeof e.processEvent == "function") {
    const r = e.processEvent.bind(e),
      i = Object.assign((s, o) => r(s, o, t), { id: e.name });
    t.addEventProcessor(i);
  }
  G && C.log(`Integration installed: ${e.name}`);
}
function su(t, e, n) {
  const r = [
    { type: "client_report" },
    { timestamp: n || ct(), discarded_events: t },
  ];
  return lt(e ? { dsn: e } : {}, [r]);
}
class de extends Error {
  constructor(e, n = "warn") {
    super(e), (this.message = e), (this.logLevel = n);
  }
}
const ni = "Not capturing exception because it's already been captured.";
class ou {
  constructor(e) {
    if (
      ((this._options = e),
      (this._integrations = {}),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      e.dsn
        ? (this._dsn = vc(e.dsn))
        : G && C.warn("No DSN provided, client will not send events."),
      this._dsn)
    ) {
      const i = ru(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
      this._transport = e.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...e.transportOptions,
        url: i,
      });
    }
    const r = ["enableTracing", "tracesSampleRate", "tracesSampler"].find(
      (i) => i in e && e[i] == null
    );
    r &&
      at(() => {
        console.warn(
          `[Sentry] Deprecation warning: \`${r}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`
        );
      });
  }
  captureException(e, n, r) {
    const i = le();
    if (jr(e)) return G && C.log(ni), i;
    const s = { event_id: i, ...n };
    return (
      this._process(
        this.eventFromException(e, s).then((o) => this._captureEvent(o, s, r))
      ),
      s.event_id
    );
  }
  captureMessage(e, n, r, i) {
    const s = { event_id: le(), ...r },
      o = Zn(e) ? e : String(e),
      a = Qn(e)
        ? this.eventFromMessage(o, n, s)
        : this.eventFromException(e, s);
    return (
      this._process(a.then((c) => this._captureEvent(c, s, i))), s.event_id
    );
  }
  captureEvent(e, n, r) {
    const i = le();
    if (n && n.originalException && jr(n.originalException))
      return G && C.log(ni), i;
    const s = { event_id: i, ...n },
      a = (e.sdkProcessingMetadata || {}).capturedSpanScope;
    return this._process(this._captureEvent(e, s, a || r)), s.event_id;
  }
  captureSession(e) {
    typeof e.release != "string"
      ? G &&
        C.warn("Discarded session because of missing or non-string release")
      : (this.sendSession(e), Ye(e, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(e) {
    const n = this._transport;
    return n
      ? (this.emit("flush"),
        this._isClientDoneProcessing(e).then((r) =>
          n.flush(e).then((i) => r && i)
        ))
      : Le(!0);
  }
  close(e) {
    return this.flush(e).then(
      (n) => ((this.getOptions().enabled = !1), this.emit("close"), n)
    );
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
  }
  init() {
    (this._isEnabled() ||
      this._options.integrations.some(({ name: e }) =>
        e.startsWith("Spotlight")
      )) &&
      this._setupIntegrations();
  }
  getIntegrationByName(e) {
    return this._integrations[e];
  }
  addIntegration(e) {
    const n = this._integrations[e.name];
    ls(this, e, this._integrations), n || ti(this, [e]);
  }
  sendEvent(e, n = {}) {
    this.emit("beforeSendEvent", e, n);
    let r = Dc(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) r = Tc(r, Ac(s));
    const i = this.sendEnvelope(r);
    i && i.then((s) => this.emit("afterSendEvent", e, s), null);
  }
  sendSession(e) {
    const n = Pc(e, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(n);
  }
  recordDroppedEvent(e, n, r) {
    if (this._options.sendClientReports) {
      const i = typeof r == "number" ? r : 1,
        s = `${e}:${n}`;
      G && C.log(`Recording outcome: "${s}"${i > 1 ? ` (${i} times)` : ""}`),
        (this._outcomes[s] = (this._outcomes[s] || 0) + i);
    }
  }
  on(e, n) {
    const r = (this._hooks[e] = this._hooks[e] || []);
    return (
      r.push(n),
      () => {
        const i = r.indexOf(n);
        i > -1 && r.splice(i, 1);
      }
    );
  }
  emit(e, ...n) {
    const r = this._hooks[e];
    r && r.forEach((i) => i(...n));
  }
  sendEnvelope(e) {
    return (
      this.emit("beforeEnvelope", e),
      this._isEnabled() && this._transport
        ? this._transport
            .send(e)
            .then(
              null,
              (n) => (G && C.error("Error while sending envelope:", n), n)
            )
        : (G && C.error("Transport disabled"), Le({}))
    );
  }
  _setupIntegrations() {
    const { integrations: e } = this._options;
    (this._integrations = iu(this, e)), ti(this, e);
  }
  _updateSessionFromEvent(e, n) {
    let r = n.level === "fatal",
      i = !1;
    const s = n.exception && n.exception.values;
    if (s) {
      i = !0;
      for (const c of s) {
        const u = c.mechanism;
        if (u && u.handled === !1) {
          r = !0;
          break;
        }
      }
    }
    const o = e.status === "ok";
    ((o && e.errors === 0) || (o && r)) &&
      (Ye(e, {
        ...(r && { status: "crashed" }),
        errors: e.errors || Number(i || r),
      }),
      this.captureSession(e));
  }
  _isClientDoneProcessing(e) {
    return new ce((n) => {
      let r = 0;
      const i = 1,
        s = setInterval(() => {
          this._numProcessing == 0
            ? (clearInterval(s), n(!0))
            : ((r += i), e && r >= e && (clearInterval(s), n(!1)));
        }, i);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(e, n, r = qe(), i = ut()) {
    const s = this.getOptions(),
      o = Object.keys(this._integrations);
    return (
      !n.integrations && o.length > 0 && (n.integrations = o),
      this.emit("preprocessEvent", e, n),
      e.type || i.setLastEventId(e.event_id || n.event_id),
      Gc(s, e, n, r, this, i).then((a) => {
        if (a === null) return a;
        a.contexts = { trace: Ba(r), ...a.contexts };
        const c = dc(this, r);
        return (
          (a.sdkProcessingMetadata = {
            dynamicSamplingContext: c,
            ...a.sdkProcessingMetadata,
          }),
          a
        );
      })
    );
  }
  _captureEvent(e, n = {}, r) {
    return this._processEvent(e, n, r).then(
      (i) => i.event_id,
      (i) => {
        G &&
          (i instanceof de && i.logLevel === "log"
            ? C.log(i.message)
            : C.warn(i));
      }
    );
  }
  _processEvent(e, n, r) {
    const i = this.getOptions(),
      { sampleRate: s } = i,
      o = ds(e),
      a = fs(e),
      c = e.type || "error",
      u = `before send for type \`${c}\``,
      p = typeof s > "u" ? void 0 : hc(s);
    if (a && typeof p == "number" && Math.random() > p)
      return (
        this.recordDroppedEvent("sample_rate", "error", e),
        Pt(
          new de(
            `Discarding event because it's not included in the random sample (sampling rate = ${s})`,
            "log"
          )
        )
      );
    const h = c === "replay_event" ? "replay" : c,
      g = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(e, n, r, g)
      .then((l) => {
        if (l === null)
          throw (
            (this.recordDroppedEvent("event_processor", h, e),
            new de(
              "An event processor returned `null`, will not send event.",
              "log"
            ))
          );
        if (n.data && n.data.__sentry__ === !0) return l;
        const v = cu(this, i, l, n);
        return au(v, u);
      })
      .then((l) => {
        if (l === null) {
          if ((this.recordDroppedEvent("before_send", h, e), o)) {
            const H = 1 + (e.spans || []).length;
            this.recordDroppedEvent("before_send", "span", H);
          }
          throw new de(`${u} returned \`null\`, will not send event.`, "log");
        }
        const m = r && r.getSession();
        if ((!o && m && this._updateSessionFromEvent(m, l), o)) {
          const j =
              (l.sdkProcessingMetadata &&
                l.sdkProcessingMetadata.spanCountBeforeProcessing) ||
              0,
            H = l.spans ? l.spans.length : 0,
            A = j - H;
          A > 0 && this.recordDroppedEvent("before_send", "span", A);
        }
        const v = l.transaction_info;
        if (o && v && l.transaction !== e.transaction) {
          const j = "custom";
          l.transaction_info = { ...v, source: j };
        }
        return this.sendEvent(l, n), l;
      })
      .then(null, (l) => {
        throw l instanceof de
          ? l
          : (this.captureException(l, {
              data: { __sentry__: !0 },
              originalException: l,
            }),
            new de(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${l}`));
      });
  }
  _process(e) {
    this._numProcessing++,
      e.then(
        (n) => (this._numProcessing--, n),
        (n) => (this._numProcessing--, n)
      );
  }
  _clearOutcomes() {
    const e = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.entries(e).map(([n, r]) => {
        const [i, s] = n.split(":");
        return { reason: i, category: s, quantity: r };
      })
    );
  }
  _flushOutcomes() {
    G && C.log("Flushing outcomes...");
    const e = this._clearOutcomes();
    if (e.length === 0) {
      G && C.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      G && C.log("No dsn provided, will not send outcomes");
      return;
    }
    G && C.log("Sending outcomes:", e);
    const n = su(e, this._options.tunnel && Bt(this._dsn));
    this.sendEnvelope(n);
  }
}
function au(t, e) {
  const n = `${e} must return \`null\` or a valid event.`;
  if ($t(t))
    return t.then(
      (r) => {
        if (!Ke(r) && r !== null) throw new de(n);
        return r;
      },
      (r) => {
        throw new de(`${e} rejected with ${r}`);
      }
    );
  if (!Ke(t) && t !== null) throw new de(n);
  return t;
}
function cu(t, e, n, r) {
  const { beforeSend: i, beforeSendTransaction: s, beforeSendSpan: o } = e;
  if (fs(n) && i) return i(n, r);
  if (ds(n)) {
    if (n.spans && o) {
      const a = [];
      for (const c of n.spans) {
        const u = o(c);
        u ? a.push(u) : (uc(), t.recordDroppedEvent("before_send", "span"));
      }
      n.spans = a;
    }
    if (s) {
      if (n.spans) {
        const a = n.spans.length;
        n.sdkProcessingMetadata = {
          ...n.sdkProcessingMetadata,
          spanCountBeforeProcessing: a,
        };
      }
      return s(n, r);
    }
  }
  return n;
}
function fs(t) {
  return t.type === void 0;
}
function ds(t) {
  return t.type === "transaction";
}
function uu(t) {
  const e = [];
  function n() {
    return t === void 0 || e.length < t;
  }
  function r(o) {
    return e.splice(e.indexOf(o), 1)[0] || Promise.resolve(void 0);
  }
  function i(o) {
    if (!n())
      return Pt(new de("Not adding Promise because buffer limit was reached."));
    const a = o();
    return (
      e.indexOf(a) === -1 && e.push(a),
      a.then(() => r(a)).then(null, () => r(a).then(null, () => {})),
      a
    );
  }
  function s(o) {
    return new ce((a, c) => {
      let u = e.length;
      if (!u) return a(!0);
      const p = setTimeout(() => {
        o && o > 0 && a(!1);
      }, o);
      e.forEach((h) => {
        Le(h).then(() => {
          --u || (clearTimeout(p), a(!0));
        }, c);
      });
    });
  }
  return { $: e, add: i, drain: s };
}
const lu = 60 * 1e3;
function fu(t, e = Date.now()) {
  const n = parseInt(`${t}`, 10);
  if (!isNaN(n)) return n * 1e3;
  const r = Date.parse(`${t}`);
  return isNaN(r) ? lu : r - e;
}
function du(t, e) {
  return t[e] || t.all || 0;
}
function pu(t, e, n = Date.now()) {
  return du(t, e) > n;
}
function hu(t, { statusCode: e, headers: n }, r = Date.now()) {
  const i = { ...t },
    s = n && n["x-sentry-rate-limits"],
    o = n && n["retry-after"];
  if (s)
    for (const a of s.trim().split(",")) {
      const [c, u, , , p] = a.split(":", 5),
        h = parseInt(c, 10),
        f = (isNaN(h) ? 60 : h) * 1e3;
      if (!u) i.all = r + f;
      else
        for (const g of u.split(";"))
          g === "metric_bucket"
            ? (!p || p.split(";").includes("custom")) && (i[g] = r + f)
            : (i[g] = r + f);
    }
  else o ? (i.all = r + fu(o, r)) : e === 429 && (i.all = r + 60 * 1e3);
  return i;
}
const gu = 64;
function mu(t, e, n = uu(t.bufferSize || gu)) {
  let r = {};
  const i = (o) => n.drain(o);
  function s(o) {
    const a = [];
    if (
      (zr(o, (h, f) => {
        const g = Yr(f);
        if (pu(r, g)) {
          const l = ri(h, f);
          t.recordDroppedEvent("ratelimit_backoff", g, l);
        } else a.push(h);
      }),
      a.length === 0)
    )
      return Le({});
    const c = lt(o[0], a),
      u = (h) => {
        zr(c, (f, g) => {
          const l = ri(f, g);
          t.recordDroppedEvent(h, Yr(g), l);
        });
      },
      p = () =>
        e({ body: Oc(c) }).then(
          (h) => (
            h.statusCode !== void 0 &&
              (h.statusCode < 200 || h.statusCode >= 300) &&
              G &&
              C.warn(
                `Sentry responded with status code ${h.statusCode} to sent event.`
              ),
            (r = hu(r, h)),
            h
          ),
          (h) => {
            throw (u("network_error"), h);
          }
        );
    return n.add(p).then(
      (h) => h,
      (h) => {
        if (h instanceof de)
          return (
            G && C.error("Skipped sending event because buffer is full."),
            u("queue_overflow"),
            Le({})
          );
        throw h;
      }
    );
  }
  return { send: s, flush: i };
}
function ri(t, e) {
  if (!(e !== "event" && e !== "transaction"))
    return Array.isArray(t) ? t[1] : void 0;
}
function _u(t, e, n = [e], r = "npm") {
  const i = t._metadata || {};
  i.sdk ||
    (i.sdk = {
      name: `sentry.javascript.${e}`,
      packages: n.map((s) => ({ name: `${r}:@sentry/${s}`, version: Pe })),
      version: Pe,
    }),
    (t._metadata = i);
}
const yu = 100;
function Fe(t, e) {
  const n = ne(),
    r = ut();
  if (!n) return;
  const { beforeBreadcrumb: i = null, maxBreadcrumbs: s = yu } = n.getOptions();
  if (s <= 0) return;
  const a = { timestamp: ct(), ...t },
    c = i ? at(() => i(a, e)) : a;
  c !== null &&
    (n.emit && n.emit("beforeAddBreadcrumb", c, e), r.addBreadcrumb(c, s));
}
let ii;
const vu = "FunctionToString",
  si = new WeakMap(),
  bu = () => ({
    name: vu,
    setupOnce() {
      ii = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...t) {
          const e = tr(this),
            n = si.has(ne()) && e !== void 0 ? e : this;
          return ii.apply(n, t);
        };
      } catch {}
    },
    setup(t) {
      si.set(t, !0);
    },
  }),
  Eu = bu,
  Su = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    "undefined is not an object (evaluating 'a.L')",
    `can't redefine non-configurable property "solana"`,
    "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
    "Can't find variable: _AutofillCallbackHandler",
    /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
  ],
  Iu = "InboundFilters",
  wu = (t = {}) => ({
    name: Iu,
    processEvent(e, n, r) {
      const i = r.getOptions(),
        s = Ou(t, i);
      return Nu(e, s) ? null : e;
    },
  }),
  Tu = wu;
function Ou(t = {}, e = {}) {
  return {
    allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
    denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
    ignoreErrors: [
      ...(t.ignoreErrors || []),
      ...(e.ignoreErrors || []),
      ...(t.disableErrorDefaults ? [] : Su),
    ],
    ignoreTransactions: [
      ...(t.ignoreTransactions || []),
      ...(e.ignoreTransactions || []),
    ],
    ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0,
  };
}
function Nu(t, e) {
  return e.ignoreInternal && Du(t)
    ? (G &&
        C.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ae(t)}`),
      !0)
    : Au(t, e.ignoreErrors)
    ? (G &&
        C.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ae(t)}`),
      !0)
    : xu(t)
    ? (G &&
        C.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Ae(t)}`),
      !0)
    : Ru(t, e.ignoreTransactions)
    ? (G &&
        C.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Ae(t)}`),
      !0)
    : Cu(t, e.denyUrls)
    ? (G &&
        C.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ae(t)}.
Url: ${Dt(t)}`),
      !0)
    : ku(t, e.allowUrls)
    ? !1
    : (G &&
        C.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ae(t)}.
Url: ${Dt(t)}`),
      !0);
}
function Au(t, e) {
  return t.type || !e || !e.length ? !1 : Pu(t).some((n) => Gt(n, e));
}
function Ru(t, e) {
  if (t.type !== "transaction" || !e || !e.length) return !1;
  const n = t.transaction;
  return n ? Gt(n, e) : !1;
}
function Cu(t, e) {
  if (!e || !e.length) return !1;
  const n = Dt(t);
  return n ? Gt(n, e) : !1;
}
function ku(t, e) {
  if (!e || !e.length) return !0;
  const n = Dt(t);
  return n ? Gt(n, e) : !0;
}
function Pu(t) {
  const e = [];
  t.message && e.push(t.message);
  let n;
  try {
    n = t.exception.values[t.exception.values.length - 1];
  } catch {}
  return (
    n &&
      n.value &&
      (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`)),
    e
  );
}
function Du(t) {
  try {
    return t.exception.values[0].type === "SentryError";
  } catch {}
  return !1;
}
function Uu(t = []) {
  for (let e = t.length - 1; e >= 0; e--) {
    const n = t[e];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
      return n.filename || null;
  }
  return null;
}
function Dt(t) {
  try {
    let e;
    try {
      e = t.exception.values[0].stacktrace.frames;
    } catch {}
    return e ? Uu(e) : null;
  } catch {
    return G && C.error(`Cannot extract url for event ${Ae(t)}`), null;
  }
}
function xu(t) {
  return t.type ||
    !t.exception ||
    !t.exception.values ||
    t.exception.values.length === 0
    ? !1
    : !t.message &&
        !t.exception.values.some(
          (e) => e.stacktrace || (e.type && e.type !== "Error") || e.value
        );
}
function Mu(t, e, n = 250, r, i, s, o) {
  if (
    !s.exception ||
    !s.exception.values ||
    !o ||
    !xe(o.originalException, Error)
  )
    return;
  const a =
    s.exception.values.length > 0
      ? s.exception.values[s.exception.values.length - 1]
      : void 0;
  a &&
    (s.exception.values = Lu(
      Nn(t, e, i, o.originalException, r, s.exception.values, a, 0),
      n
    ));
}
function Nn(t, e, n, r, i, s, o, a) {
  if (s.length >= n + 1) return s;
  let c = [...s];
  if (xe(r[i], Error)) {
    oi(o, a);
    const u = t(e, r[i]),
      p = c.length;
    ai(u, i, p, a), (c = Nn(t, e, n, r[i], i, [u, ...c], u, p));
  }
  return (
    Array.isArray(r.errors) &&
      r.errors.forEach((u, p) => {
        if (xe(u, Error)) {
          oi(o, a);
          const h = t(e, u),
            f = c.length;
          ai(h, `errors[${p}]`, f, a), (c = Nn(t, e, n, u, i, [h, ...c], h, f));
        }
      }),
    c
  );
}
function oi(t, e) {
  (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
    (t.mechanism = {
      ...t.mechanism,
      ...(t.type === "AggregateError" && { is_exception_group: !0 }),
      exception_id: e,
    });
}
function ai(t, e, n, r) {
  (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
    (t.mechanism = {
      ...t.mechanism,
      type: "chained",
      source: e,
      exception_id: n,
      parent_id: r,
    });
}
function Lu(t, e) {
  return t.map((n) => (n.value && (n.value = We(n.value, e)), n));
}
function sn(t) {
  if (!t) return {};
  const e = t.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
  );
  if (!e) return {};
  const n = e[6] || "",
    r = e[8] || "";
  return {
    host: e[4],
    path: e[5],
    protocol: e[2],
    search: n,
    hash: r,
    relative: e[5] + n + r,
  };
}
function Fu(t) {
  const e = "console";
  $e(e, t), Ge(e, ju);
}
function ju() {
  "console" in M &&
    vn.forEach(function (t) {
      t in M.console &&
        ae(M.console, t, function (e) {
          return (
            (kt[t] = e),
            function (...n) {
              he("console", { args: n, level: t });
              const i = kt[t];
              i && i.apply(M.console, n);
            }
          );
        });
    });
}
function $u(t) {
  return t === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(t)
    ? t
    : "log";
}
const Gu = "Dedupe",
  qu = () => {
    let t;
    return {
      name: Gu,
      processEvent(e) {
        if (e.type) return e;
        try {
          if (Hu(e, t))
            return (
              G &&
                C.warn(
                  "Event dropped due to being a duplicate of previously captured event."
                ),
              null
            );
        } catch {}
        return (t = e);
      },
    };
  },
  Bu = qu;
function Hu(t, e) {
  return e ? !!(Vu(t, e) || Wu(t, e)) : !1;
}
function Vu(t, e) {
  const n = t.message,
    r = e.message;
  return !(
    (!n && !r) ||
    (n && !r) ||
    (!n && r) ||
    n !== r ||
    !hs(t, e) ||
    !ps(t, e)
  );
}
function Wu(t, e) {
  const n = ci(e),
    r = ci(t);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !hs(t, e) ||
    !ps(t, e)
  );
}
function ps(t, e) {
  let n = Dr(t),
    r = Dr(e);
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length))
    return !1;
  for (let i = 0; i < r.length; i++) {
    const s = r[i],
      o = n[i];
    if (
      s.filename !== o.filename ||
      s.lineno !== o.lineno ||
      s.colno !== o.colno ||
      s.function !== o.function
    )
      return !1;
  }
  return !0;
}
function hs(t, e) {
  let n = t.fingerprint,
    r = e.fingerprint;
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r)) return !1;
  (n = n), (r = r);
  try {
    return n.join("") === r.join("");
  } catch {
    return !1;
  }
}
function ci(t) {
  return t.exception && t.exception.values && t.exception.values[0];
}
function gs(t) {
  if (t !== void 0)
    return t >= 400 && t < 500 ? "warning" : t >= 500 ? "error" : void 0;
}
const An = M;
function Ku() {
  if (!("fetch" in An)) return !1;
  try {
    return (
      new Headers(), new Request("http://www.example.com"), new Response(), !0
    );
  } catch {
    return !1;
  }
}
function Rn(t) {
  return (
    t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
  );
}
function zu() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!Ku()) return !1;
  if (Rn(An.fetch)) return !0;
  let t = !1;
  const e = An.document;
  if (e && typeof e.createElement == "function")
    try {
      const n = e.createElement("iframe");
      (n.hidden = !0),
        e.head.appendChild(n),
        n.contentWindow &&
          n.contentWindow.fetch &&
          (t = Rn(n.contentWindow.fetch)),
        e.head.removeChild(n);
    } catch (n) {
      je &&
        C.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
    }
  return t;
}
function Yu(t, e) {
  const n = "fetch";
  $e(n, t), Ge(n, () => Xu(void 0, e));
}
function Xu(t, e = !1) {
  (e && !zu()) ||
    ae(M, "fetch", function (n) {
      return function (...r) {
        const i = new Error(),
          { method: s, url: o } = Ju(r),
          a = {
            args: r,
            fetchData: { method: s, url: o },
            startTimestamp: Se() * 1e3,
            virtualError: i,
          };
        return (
          t || he("fetch", { ...a }),
          n.apply(M, r).then(
            async (c) => (
              t
                ? t(c)
                : he("fetch", { ...a, endTimestamp: Se() * 1e3, response: c }),
              c
            ),
            (c) => {
              throw (
                (he("fetch", { ...a, endTimestamp: Se() * 1e3, error: c }),
                Jn(c) &&
                  c.stack === void 0 &&
                  ((c.stack = i.stack), Me(c, "framesToPop", 1)),
                c)
              );
            }
          )
        );
      };
    });
}
function Cn(t, e) {
  return !!t && typeof t == "object" && !!t[e];
}
function ui(t) {
  return typeof t == "string"
    ? t
    : t
    ? Cn(t, "url")
      ? t.url
      : t.toString
      ? t.toString()
      : ""
    : "";
}
function Ju(t) {
  if (t.length === 0) return { method: "GET", url: "" };
  if (t.length === 2) {
    const [n, r] = t;
    return {
      url: ui(n),
      method: Cn(r, "method") ? String(r.method).toUpperCase() : "GET",
    };
  }
  const e = t[0];
  return {
    url: ui(e),
    method: Cn(e, "method") ? String(e.method).toUpperCase() : "GET",
  };
}
function Zu() {
  return "npm";
}
const St = M;
function Qu() {
  const t = St.chrome,
    e = t && t.app && t.app.runtime,
    n = "history" in St && !!St.history.pushState && !!St.history.replaceState;
  return !e && n;
}
const J = M;
let kn = 0;
function ms() {
  return kn > 0;
}
function el() {
  kn++,
    setTimeout(() => {
      kn--;
    });
}
function Je(t, e = {}) {
  function n(i) {
    return typeof i == "function";
  }
  if (!n(t)) return t;
  try {
    const i = t.__sentry_wrapped__;
    if (i) return typeof i == "function" ? i : t;
    if (tr(t)) return t;
  } catch {
    return t;
  }
  const r = function (...i) {
    try {
      const s = i.map((o) => Je(o, e));
      return t.apply(this, s);
    } catch (s) {
      throw (
        (el(),
        qa((o) => {
          o.addEventProcessor(
            (a) => (
              e.mechanism && (En(a, void 0, void 0), ze(a, e.mechanism)),
              (a.extra = { ...a.extra, arguments: i }),
              a
            )
          ),
            Zc(s);
        }),
        s)
      );
    }
  };
  try {
    for (const i in t)
      Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
  } catch {}
  Zi(r, t), Me(t, "__sentry_wrapped__", r);
  try {
    Object.getOwnPropertyDescriptor(r, "name").configurable &&
      Object.defineProperty(r, "name", {
        get() {
          return t.name;
        },
      });
  } catch {}
  return r;
}
const Ht = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function or(t, e) {
  const n = ar(t, e),
    r = { type: sl(e), value: ol(e) };
  return (
    n.length && (r.stacktrace = { frames: n }),
    r.type === void 0 &&
      r.value === "" &&
      (r.value = "Unrecoverable error caught"),
    r
  );
}
function tl(t, e, n, r) {
  const i = ne(),
    s = i && i.getOptions().normalizeDepth,
    o = fl(e),
    a = { __serialized__: ss(e, s) };
  if (o) return { exception: { values: [or(t, o)] }, extra: a };
  const c = {
    exception: {
      values: [
        {
          type: jt(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
          value: ul(e, { isUnhandledRejection: r }),
        },
      ],
    },
    extra: a,
  };
  if (n) {
    const u = ar(t, n);
    u.length && (c.exception.values[0].stacktrace = { frames: u });
  }
  return c;
}
function on(t, e) {
  return { exception: { values: [or(t, e)] } };
}
function ar(t, e) {
  const n = e.stacktrace || e.stack || "",
    r = rl(e),
    i = il(e);
  try {
    return t(n, r, i);
  } catch {}
  return [];
}
const nl = /Minified React error #\d+;/i;
function rl(t) {
  return t && nl.test(t.message) ? 1 : 0;
}
function il(t) {
  return typeof t.framesToPop == "number" ? t.framesToPop : 0;
}
function _s(t) {
  return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u"
    ? t instanceof WebAssembly.Exception
    : !1;
}
function sl(t) {
  const e = t && t.name;
  return !e && _s(t)
    ? t.message && Array.isArray(t.message) && t.message.length == 2
      ? t.message[0]
      : "WebAssembly.Exception"
    : e;
}
function ol(t) {
  const e = t && t.message;
  return e
    ? e.error && typeof e.error.message == "string"
      ? e.error.message
      : _s(t) && Array.isArray(t.message) && t.message.length == 2
      ? t.message[1]
      : e
    : "No error message";
}
function al(t, e, n, r) {
  const i = (n && n.syntheticException) || void 0,
    s = cr(t, e, i, r);
  return (
    ze(s),
    (s.level = "error"),
    n && n.event_id && (s.event_id = n.event_id),
    Le(s)
  );
}
function cl(t, e, n = "info", r, i) {
  const s = (r && r.syntheticException) || void 0,
    o = Pn(t, e, s, i);
  return (o.level = n), r && r.event_id && (o.event_id = r.event_id), Le(o);
}
function cr(t, e, n, r, i) {
  let s;
  if (Yi(e) && e.error) return on(t, e.error);
  if (xr(e) || ya(e)) {
    const o = e;
    if ("stack" in e) s = on(t, e);
    else {
      const a = o.name || (xr(o) ? "DOMError" : "DOMException"),
        c = o.message ? `${a}: ${o.message}` : a;
      (s = Pn(t, c, n, r)), En(s, c);
    }
    return (
      "code" in o && (s.tags = { ...s.tags, "DOMException.code": `${o.code}` }),
      s
    );
  }
  return Jn(e)
    ? on(t, e)
    : Ke(e) || jt(e)
    ? ((s = tl(t, e, n, i)), ze(s, { synthetic: !0 }), s)
    : ((s = Pn(t, e, n, r)),
      En(s, `${e}`, void 0),
      ze(s, { synthetic: !0 }),
      s);
}
function Pn(t, e, n, r) {
  const i = {};
  if (r && n) {
    const s = ar(t, n);
    s.length &&
      (i.exception = { values: [{ value: e, stacktrace: { frames: s } }] }),
      ze(i, { synthetic: !0 });
  }
  if (Zn(e)) {
    const { __sentry_template_string__: s, __sentry_template_values__: o } = e;
    return (i.logentry = { message: s, params: o }), i;
  }
  return (i.message = e), i;
}
function ul(t, { isUnhandledRejection: e }) {
  const n = Na(t),
    r = e ? "promise rejection" : "exception";
  return Yi(t)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``
    : jt(t)
    ? `Event \`${ll(t)}\` (type=${t.type}) captured as ${r}`
    : `Object captured as ${r} with keys: ${n}`;
}
function ll(t) {
  try {
    const e = Object.getPrototypeOf(t);
    return e ? e.constructor.name : void 0;
  } catch {}
}
function fl(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e)) {
      const n = t[e];
      if (n instanceof Error) return n;
    }
}
function dl(t, { metadata: e, tunnel: n, dsn: r }) {
  const i = {
      event_id: t.event_id,
      sent_at: new Date().toISOString(),
      ...(e && e.sdk && { sdk: { name: e.sdk.name, version: e.sdk.version } }),
      ...(!!n && !!r && { dsn: Bt(r) }),
    },
    s = pl(t);
  return lt(i, [s]);
}
function pl(t) {
  return [{ type: "user_report" }, t];
}
class hl extends ou {
  constructor(e) {
    const n = { parentSpanIsAlwaysRootSpan: !0, ...e },
      r = J.SENTRY_SDK_SOURCE || Zu();
    _u(n, "browser", ["browser"], r),
      super(n),
      n.sendClientReports &&
        J.document &&
        J.document.addEventListener("visibilitychange", () => {
          J.document.visibilityState === "hidden" && this._flushOutcomes();
        });
  }
  eventFromException(e, n) {
    return al(this._options.stackParser, e, n, this._options.attachStacktrace);
  }
  eventFromMessage(e, n = "info", r) {
    return cl(
      this._options.stackParser,
      e,
      n,
      r,
      this._options.attachStacktrace
    );
  }
  captureUserFeedback(e) {
    if (!this._isEnabled()) {
      Ht && C.warn("SDK not enabled, will not capture user feedback.");
      return;
    }
    const n = dl(e, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel,
    });
    this.sendEnvelope(n);
  }
  _prepareEvent(e, n, r) {
    return (
      (e.platform = e.platform || "javascript"), super._prepareEvent(e, n, r)
    );
  }
}
const gl = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  se = M,
  ml = 1e3;
let li, Dn, Un;
function _l(t) {
  const e = "dom";
  $e(e, t), Ge(e, yl);
}
function yl() {
  if (!se.document) return;
  const t = he.bind(null, "dom"),
    e = fi(t, !0);
  se.document.addEventListener("click", e, !1),
    se.document.addEventListener("keypress", e, !1),
    ["EventTarget", "Node"].forEach((n) => {
      const i = se[n],
        s = i && i.prototype;
      !s ||
        !s.hasOwnProperty ||
        !s.hasOwnProperty("addEventListener") ||
        (ae(s, "addEventListener", function (o) {
          return function (a, c, u) {
            if (a === "click" || a == "keypress")
              try {
                const p = (this.__sentry_instrumentation_handlers__ =
                    this.__sentry_instrumentation_handlers__ || {}),
                  h = (p[a] = p[a] || { refCount: 0 });
                if (!h.handler) {
                  const f = fi(t);
                  (h.handler = f), o.call(this, a, f, u);
                }
                h.refCount++;
              } catch {}
            return o.call(this, a, c, u);
          };
        }),
        ae(s, "removeEventListener", function (o) {
          return function (a, c, u) {
            if (a === "click" || a == "keypress")
              try {
                const p = this.__sentry_instrumentation_handlers__ || {},
                  h = p[a];
                h &&
                  (h.refCount--,
                  h.refCount <= 0 &&
                    (o.call(this, a, h.handler, u),
                    (h.handler = void 0),
                    delete p[a]),
                  Object.keys(p).length === 0 &&
                    delete this.__sentry_instrumentation_handlers__);
              } catch {}
            return o.call(this, a, c, u);
          };
        }));
    });
}
function vl(t) {
  if (t.type !== Dn) return !1;
  try {
    if (!t.target || t.target._sentryId !== Un) return !1;
  } catch {}
  return !0;
}
function bl(t, e) {
  return t !== "keypress"
    ? !1
    : !e || !e.tagName
    ? !0
    : !(
        e.tagName === "INPUT" ||
        e.tagName === "TEXTAREA" ||
        e.isContentEditable
      );
}
function fi(t, e = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    const r = El(n);
    if (bl(n.type, r)) return;
    Me(n, "_sentryCaptured", !0), r && !r._sentryId && Me(r, "_sentryId", le());
    const i = n.type === "keypress" ? "input" : n.type;
    vl(n) ||
      (t({ event: n, name: i, global: e }),
      (Dn = n.type),
      (Un = r ? r._sentryId : void 0)),
      clearTimeout(li),
      (li = se.setTimeout(() => {
        (Un = void 0), (Dn = void 0);
      }, ml));
  };
}
function El(t) {
  try {
    return t.target;
  } catch {
    return null;
  }
}
let It;
function ys(t) {
  const e = "history";
  $e(e, t), Ge(e, Sl);
}
function Sl() {
  if (!Qu()) return;
  const t = se.onpopstate;
  se.onpopstate = function (...n) {
    const r = se.location.href,
      i = It;
    if (((It = r), he("history", { from: i, to: r }), t))
      try {
        return t.apply(this, n);
      } catch {}
  };
  function e(n) {
    return function (...r) {
      const i = r.length > 2 ? r[2] : void 0;
      if (i) {
        const s = It,
          o = String(i);
        (It = o), he("history", { from: s, to: o });
      }
      return n.apply(this, r);
    };
  }
  ae(se.history, "pushState", e), ae(se.history, "replaceState", e);
}
const Ct = {};
function Il(t) {
  const e = Ct[t];
  if (e) return e;
  let n = se[t];
  if (Rn(n)) return (Ct[t] = n.bind(se));
  const r = se.document;
  if (r && typeof r.createElement == "function")
    try {
      const i = r.createElement("iframe");
      (i.hidden = !0), r.head.appendChild(i);
      const s = i.contentWindow;
      s && s[t] && (n = s[t]), r.head.removeChild(i);
    } catch (i) {
      gl &&
        C.warn(
          `Could not create sandbox iframe for ${t} check, bailing to window.${t}: `,
          i
        );
    }
  return n && (Ct[t] = n.bind(se));
}
function di(t) {
  Ct[t] = void 0;
}
const rt = "__sentry_xhr_v3__";
function wl(t) {
  const e = "xhr";
  $e(e, t), Ge(e, Tl);
}
function Tl() {
  if (!se.XMLHttpRequest) return;
  const t = XMLHttpRequest.prototype;
  (t.open = new Proxy(t.open, {
    apply(e, n, r) {
      const i = new Error(),
        s = Se() * 1e3,
        o = Ee(r[0]) ? r[0].toUpperCase() : void 0,
        a = Ol(r[1]);
      if (!o || !a) return e.apply(n, r);
      (n[rt] = { method: o, url: a, request_headers: {} }),
        o === "POST" &&
          a.match(/sentry_key/) &&
          (n.__sentry_own_request__ = !0);
      const c = () => {
        const u = n[rt];
        if (u && n.readyState === 4) {
          try {
            u.status_code = n.status;
          } catch {}
          const p = {
            endTimestamp: Se() * 1e3,
            startTimestamp: s,
            xhr: n,
            virtualError: i,
          };
          he("xhr", p);
        }
      };
      return (
        "onreadystatechange" in n && typeof n.onreadystatechange == "function"
          ? (n.onreadystatechange = new Proxy(n.onreadystatechange, {
              apply(u, p, h) {
                return c(), u.apply(p, h);
              },
            }))
          : n.addEventListener("readystatechange", c),
        (n.setRequestHeader = new Proxy(n.setRequestHeader, {
          apply(u, p, h) {
            const [f, g] = h,
              l = p[rt];
            return (
              l && Ee(f) && Ee(g) && (l.request_headers[f.toLowerCase()] = g),
              u.apply(p, h)
            );
          },
        })),
        e.apply(n, r)
      );
    },
  })),
    (t.send = new Proxy(t.send, {
      apply(e, n, r) {
        const i = n[rt];
        if (!i) return e.apply(n, r);
        r[0] !== void 0 && (i.body = r[0]);
        const s = { startTimestamp: Se() * 1e3, xhr: n };
        return he("xhr", s), e.apply(n, r);
      },
    }));
}
function Ol(t) {
  if (Ee(t)) return t;
  try {
    return t.toString();
  } catch {}
}
function Nl(t, e = Il("fetch")) {
  let n = 0,
    r = 0;
  function i(s) {
    const o = s.body.length;
    (n += o), r++;
    const a = {
      body: s.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: t.headers,
      keepalive: n <= 6e4 && r < 15,
      ...t.fetchOptions,
    };
    if (!e) return di("fetch"), Pt("No fetch implementation available");
    try {
      return e(t.url, a).then(
        (c) => (
          (n -= o),
          r--,
          {
            statusCode: c.status,
            headers: {
              "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
              "retry-after": c.headers.get("Retry-After"),
            },
          }
        )
      );
    } catch (c) {
      return di("fetch"), (n -= o), r--, Pt(c);
    }
  }
  return mu(t, i);
}
const Al = 30,
  Rl = 50;
function xn(t, e, n, r) {
  const i = { filename: t, function: e === "<anonymous>" ? Ue : e, in_app: !0 };
  return n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i;
}
const Cl = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  kl =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  Pl = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  Dl = (t) => {
    const e = Cl.exec(t);
    if (e) {
      const [, r, i, s] = e;
      return xn(r, Ue, +i, +s);
    }
    const n = kl.exec(t);
    if (n) {
      if (n[2] && n[2].indexOf("eval") === 0) {
        const o = Pl.exec(n[2]);
        o && ((n[2] = o[1]), (n[3] = o[2]), (n[4] = o[3]));
      }
      const [i, s] = vs(n[1] || Ue, n[2]);
      return xn(s, i, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
    }
  },
  Ul = [Al, Dl],
  xl =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  Ml = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  Ll = (t) => {
    const e = xl.exec(t);
    if (e) {
      if (e[3] && e[3].indexOf(" > eval") > -1) {
        const s = Ml.exec(e[3]);
        s &&
          ((e[1] = e[1] || "eval"), (e[3] = s[1]), (e[4] = s[2]), (e[5] = ""));
      }
      let r = e[3],
        i = e[1] || Ue;
      return (
        ([i, r] = vs(i, r)),
        xn(r, i, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
      );
    }
  },
  Fl = [Rl, Ll],
  jl = [Ul, Fl],
  $l = da(...jl),
  vs = (t, e) => {
    const n = t.indexOf("safari-extension") !== -1,
      r = t.indexOf("safari-web-extension") !== -1;
    return n || r
      ? [
          t.indexOf("@") !== -1 ? t.split("@")[0] : Ue,
          n ? `safari-extension:${e}` : `safari-web-extension:${e}`,
        ]
      : [t, e];
  },
  wt = 1024,
  Gl = "Breadcrumbs",
  ql = (t = {}) => {
    const e = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...t,
    };
    return {
      name: Gl,
      setup(n) {
        e.console && Fu(Wl(n)),
          e.dom && _l(Vl(n, e.dom)),
          e.xhr && wl(Kl(n)),
          e.fetch && Yu(zl(n)),
          e.history && ys(Yl(n)),
          e.sentry && n.on("beforeSendEvent", Hl(n));
      },
    };
  },
  Bl = ql;
function Hl(t) {
  return function (n) {
    ne() === t &&
      Fe(
        {
          category: `sentry.${
            n.type === "transaction" ? "transaction" : "event"
          }`,
          event_id: n.event_id,
          level: n.level,
          message: Ae(n),
        },
        { event: n }
      );
  };
}
function Vl(t, e) {
  return function (r) {
    if (ne() !== t) return;
    let i,
      s,
      o = typeof e == "object" ? e.serializeAttribute : void 0,
      a =
        typeof e == "object" && typeof e.maxStringLength == "number"
          ? e.maxStringLength
          : void 0;
    a &&
      a > wt &&
      (Ht &&
        C.warn(
          `\`dom.maxStringLength\` cannot exceed ${wt}, but a value of ${a} was configured. Sentry will use ${wt} instead.`
        ),
      (a = wt)),
      typeof o == "string" && (o = [o]);
    try {
      const u = r.event,
        p = Xl(u) ? u.target : u;
      (i = Ji(p, { keyAttrs: o, maxStringLength: a })), (s = Ta(p));
    } catch {
      i = "<unknown>";
    }
    if (i.length === 0) return;
    const c = { category: `ui.${r.name}`, message: i };
    s && (c.data = { "ui.component_name": s }),
      Fe(c, { event: r.event, name: r.name, global: r.global });
  };
}
function Wl(t) {
  return function (n) {
    if (ne() !== t) return;
    const r = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: $u(n.level),
      message: Mr(n.args, " "),
    };
    if (n.level === "assert")
      if (n.args[0] === !1)
        (r.message = `Assertion failed: ${
          Mr(n.args.slice(1), " ") || "console.assert"
        }`),
          (r.data.arguments = n.args.slice(1));
      else return;
    Fe(r, { input: n.args, level: n.level });
  };
}
function Kl(t) {
  return function (n) {
    if (ne() !== t) return;
    const { startTimestamp: r, endTimestamp: i } = n,
      s = n.xhr[rt];
    if (!r || !i || !s) return;
    const { method: o, url: a, status_code: c, body: u } = s,
      p = { method: o, url: a, status_code: c },
      h = { xhr: n.xhr, input: u, startTimestamp: r, endTimestamp: i },
      f = gs(c);
    Fe({ category: "xhr", data: p, type: "http", level: f }, h);
  };
}
function zl(t) {
  return function (n) {
    if (ne() !== t) return;
    const { startTimestamp: r, endTimestamp: i } = n;
    if (
      i &&
      !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST")
    )
      if (n.error) {
        const s = n.fetchData,
          o = {
            data: n.error,
            input: n.args,
            startTimestamp: r,
            endTimestamp: i,
          };
        Fe({ category: "fetch", data: s, level: "error", type: "http" }, o);
      } else {
        const s = n.response,
          o = { ...n.fetchData, status_code: s && s.status },
          a = {
            input: n.args,
            response: s,
            startTimestamp: r,
            endTimestamp: i,
          },
          c = gs(o.status_code);
        Fe({ category: "fetch", data: o, type: "http", level: c }, a);
      }
  };
}
function Yl(t) {
  return function (n) {
    if (ne() !== t) return;
    let r = n.from,
      i = n.to;
    const s = sn(J.location.href);
    let o = r ? sn(r) : void 0;
    const a = sn(i);
    (!o || !o.path) && (o = s),
      s.protocol === a.protocol && s.host === a.host && (i = a.relative),
      s.protocol === o.protocol && s.host === o.host && (r = o.relative),
      Fe({ category: "navigation", data: { from: r, to: i } });
  };
}
function Xl(t) {
  return !!t && !!t.target;
}
const Jl = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "BroadcastChannel",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "SharedWorker",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload",
  ],
  Zl = "BrowserApiErrors",
  Ql = (t = {}) => {
    const e = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      ...t,
    };
    return {
      name: Zl,
      setupOnce() {
        e.setTimeout && ae(J, "setTimeout", pi),
          e.setInterval && ae(J, "setInterval", pi),
          e.requestAnimationFrame && ae(J, "requestAnimationFrame", tf),
          e.XMLHttpRequest &&
            "XMLHttpRequest" in J &&
            ae(XMLHttpRequest.prototype, "send", nf);
        const n = e.eventTarget;
        n && (Array.isArray(n) ? n : Jl).forEach(rf);
      },
    };
  },
  ef = Ql;
function pi(t) {
  return function (...e) {
    const n = e[0];
    return (
      (e[0] = Je(n, {
        mechanism: {
          data: { function: Re(t) },
          handled: !1,
          type: "instrument",
        },
      })),
      t.apply(this, e)
    );
  };
}
function tf(t) {
  return function (e) {
    return t.apply(this, [
      Je(e, {
        mechanism: {
          data: { function: "requestAnimationFrame", handler: Re(t) },
          handled: !1,
          type: "instrument",
        },
      }),
    ]);
  };
}
function nf(t) {
  return function (...e) {
    const n = this;
    return (
      ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((i) => {
        i in n &&
          typeof n[i] == "function" &&
          ae(n, i, function (s) {
            const o = {
                mechanism: {
                  data: { function: i, handler: Re(s) },
                  handled: !1,
                  type: "instrument",
                },
              },
              a = tr(s);
            return a && (o.mechanism.data.handler = Re(a)), Je(s, o);
          });
      }),
      t.apply(this, e)
    );
  };
}
function rf(t) {
  const n = J[t],
    r = n && n.prototype;
  !r ||
    !r.hasOwnProperty ||
    !r.hasOwnProperty("addEventListener") ||
    (ae(r, "addEventListener", function (i) {
      return function (s, o, a) {
        try {
          sf(o) &&
            (o.handleEvent = Je(o.handleEvent, {
              mechanism: {
                data: { function: "handleEvent", handler: Re(o), target: t },
                handled: !1,
                type: "instrument",
              },
            }));
        } catch {}
        return i.apply(this, [
          s,
          Je(o, {
            mechanism: {
              data: { function: "addEventListener", handler: Re(o), target: t },
              handled: !1,
              type: "instrument",
            },
          }),
          a,
        ]);
      };
    }),
    ae(r, "removeEventListener", function (i) {
      return function (s, o, a) {
        try {
          const c = o.__sentry_wrapped__;
          c && i.call(this, s, c, a);
        } catch {}
        return i.call(this, s, o, a);
      };
    }));
}
function sf(t) {
  return typeof t.handleEvent == "function";
}
const of = () => ({
    name: "BrowserSession",
    setupOnce() {
      if (typeof J.document > "u") {
        Ht &&
          C.warn(
            "Using the `browserSessionIntegration` in non-browser environments is not supported."
          );
        return;
      }
      Zr({ ignoreDuration: !0 }),
        Qr(),
        ys(({ from: t, to: e }) => {
          t !== void 0 && t !== e && (Zr({ ignoreDuration: !0 }), Qr());
        });
    },
  }),
  af = "GlobalHandlers",
  cf = (t = {}) => {
    const e = { onerror: !0, onunhandledrejection: !0, ...t };
    return {
      name: af,
      setupOnce() {
        Error.stackTraceLimit = 50;
      },
      setup(n) {
        e.onerror && (lf(n), hi("onerror")),
          e.onunhandledrejection && (ff(n), hi("onunhandledrejection"));
      },
    };
  },
  uf = cf;
function lf(t) {
  ha((e) => {
    const { stackParser: n, attachStacktrace: r } = bs();
    if (ne() !== t || ms()) return;
    const { msg: i, url: s, line: o, column: a, error: c } = e,
      u = hf(cr(n, c || i, void 0, r, !1), s, o, a);
    (u.level = "error"),
      as(u, {
        originalException: c,
        mechanism: { handled: !1, type: "onerror" },
      });
  });
}
function ff(t) {
  ma((e) => {
    const { stackParser: n, attachStacktrace: r } = bs();
    if (ne() !== t || ms()) return;
    const i = df(e),
      s = Qn(i) ? pf(i) : cr(n, i, void 0, r, !0);
    (s.level = "error"),
      as(s, {
        originalException: i,
        mechanism: { handled: !1, type: "onunhandledrejection" },
      });
  });
}
function df(t) {
  if (Qn(t)) return t;
  try {
    if ("reason" in t) return t.reason;
    if ("detail" in t && "reason" in t.detail) return t.detail.reason;
  } catch {}
  return t;
}
function pf(t) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(
            t
          )}`,
        },
      ],
    },
  };
}
function hf(t, e, n, r) {
  const i = (t.exception = t.exception || {}),
    s = (i.values = i.values || []),
    o = (s[0] = s[0] || {}),
    a = (o.stacktrace = o.stacktrace || {}),
    c = (a.frames = a.frames || []),
    u = r,
    p = n,
    h = Ee(e) && e.length > 0 ? e : wa();
  return (
    c.length === 0 &&
      c.push({ colno: u, filename: h, function: Ue, in_app: !0, lineno: p }),
    t
  );
}
function hi(t) {
  Ht && C.log(`Global Handler attached: ${t}`);
}
function bs() {
  const t = ne();
  return (
    (t && t.getOptions()) || { stackParser: () => [], attachStacktrace: !1 }
  );
}
const gf = () => ({
    name: "HttpContext",
    preprocessEvent(t) {
      if (!J.navigator && !J.location && !J.document) return;
      const e = (t.request && t.request.url) || (J.location && J.location.href),
        { referrer: n } = J.document || {},
        { userAgent: r } = J.navigator || {},
        i = {
          ...(t.request && t.request.headers),
          ...(n && { Referer: n }),
          ...(r && { "User-Agent": r }),
        },
        s = { ...t.request, ...(e && { url: e }), headers: i };
      t.request = s;
    },
  }),
  mf = "cause",
  _f = 5,
  yf = "LinkedErrors",
  vf = (t = {}) => {
    const e = t.limit || _f,
      n = t.key || mf;
    return {
      name: yf,
      preprocessEvent(r, i, s) {
        const o = s.getOptions();
        Mu(or, o.stackParser, o.maxValueLength, n, e, r, i);
      },
    };
  },
  bf = vf;
function Ef(t) {
  const e = [Tu(), Eu(), ef(), Bl(), uf(), bf(), Bu(), gf()];
  return t.autoSessionTracking !== !1 && e.push(of()), e;
}
const Sf = Ef({}).filter(
    (t) =>
      !["BrowserApiErrors", "Breadcrumbs", "GlobalHandlers"].includes(t.name)
  ),
  Es = new hl({
    dsn: "https://9ff0ed9d717a46aa7f509014d6d19fcd@o4508791117053952.ingest.us.sentry.io/4508791125377024",
    transport: Nl,
    stackParser: $l,
    integrations: Sf,
    enabled: !0,
  }),
  Ss = new Ie();
Ss.setClient(Es);
const gi = (t, e) => {
  Ss.addEventProcessor((r) => ({ ...r, extra: { ...r.extra, errorInfo: e } }));
  const n = { data: { react: e } };
  Es.captureException(t, n);
};
let Tt,
  Ut,
  Is = () => {};
const Gf = (t) => {
  Is = t;
};
let ws = () => {};
const qf = (t) => {
  ws = t;
};
let Ts = () => {};
const Bf = (t) => {
  Ts = t;
};
let Os = (t) => {};
const Hf = (t) => {
  Os = t;
};
let $,
  Mn = !1,
  st = "";
const If = () => {
    $ && ((Mn = !0), $.stop(), wf());
  },
  wf = () => {
    st = "";
  },
  Tf = (t) => {
    $ && ($.lang = t ?? Vi);
  };
let mi = Date.now();
const Of = () => {
    if ($) return $;
    ($ = new webkitSpeechRecognition()),
      ($.lang = Vi),
      ($.interimResults = !0),
      ($.maxAlternatives = 1),
      ($.continuous = !0),
      ($.onstart = (e) => {
        Rr(), (Ln = !1), ws(), (mi = Date.now());
      }),
      ($.onend = (e) => {
        Fn && clearInterval(Fn),
          Mn
            ? ((Mn = !1), Rf())
            : (Cf(),
              Rr(),
              chrome.runtime.sendMessage({
                type: "saveToHistory",
                payload: st,
              }),
              Ts(),
              _n("Speech Recognized", {
                textLength: st.length,
                lang: $.lang,
                duration: Math.round((Date.now() - mi) / 1e3),
              }));
      });
    let t = "";
    return (
      ($.onresult = (e) => {
        if (typeof e.results > "u") {
          ($.onend = null), $.stop();
          return;
        }
        const n = [...e.results].reduce((r, i) => r + i[0].transcript, "");
        n && t.toLowerCase() !== n.toLowerCase() && ((t = n), Af(n));
      }),
      $
    );
  },
  Nf = (t) => {
    aa(t), Os(t);
  },
  Af = (t) => {
    (st = `${Pf(kf(t))}.`.trim()), Nf(st);
  };
let Ln = !1,
  Fn;
const Rf = () => {
    Ln ||
      ((Ln = !0),
      Promise.all([
        window.navigator.mediaDevices.getUserMedia({ audio: !0 }),
        chrome.storage.local.get("language"),
      ])
        .then(([t, e]) => {
          t && _n("Microphone Access Asked", { status: "granted", page: Cr() }),
            (Ut = t),
            Tt || (Tt = new AudioContext());
          const n = Tt.createMediaStreamSource(Ut),
            r = 32,
            i = Tt.createAnalyser();
          i.fftSize = r;
          const s = new Uint8Array(r);
          n.connect(i);
          const o = () => {
            i.getByteTimeDomainData(s), Is(Math.abs(s[16] - 128) / 128 + 1.1);
          };
          (Fn = setInterval(() => {
            o();
          }, 100)),
            Of(),
            Tf(e.language);
          try {
            $.start();
          } catch (a) {
            gi(a),
              $.stop(),
              setTimeout(() => {
                $ == null || $.start();
              }, 100);
          }
        })
        .catch((t) => {
          gi(t),
            console.error(t),
            _n("Microphone Access Asked", { status: t.toString(), page: Cr() }),
            alert(
              Uf[t.toString()] ||
                `An error occurred (${t.toString()}). We're aware of the issue and are working to resolve it. Please try again later. 🛠️`
            );
        }));
  },
  Cf = () => {
    $ && $.stop(), Ut && Ut.getTracks().forEach((t) => t.stop());
  },
  kf = (t) => Df(($.lang.startsWith("de") ? t : t.toLowerCase()).trim()),
  Pf = (t) => {
    const e = t.trim();
    return e[0].toUpperCase() + e.slice(1);
  },
  _i = "123456789",
  Df = (t) => {
    let e = "";
    for (let n = 0; n < t.length; n++)
      (_i.includes(t[n - 1]) && t[n] === " " && _i.includes(t[n + 1])) ||
        (e += t[n]);
    return e;
  },
  yi =
    'Seems like microphone access is blocked for this website. To enable it, please 1) Open your browser settings. 2) Navigate to the "Privacy and security" section. 3) Ensure microphone access is allowed for this site. 4) Refresh the Page.',
  Uf = {
    "NotAllowedError: Permission denied": yi,
    "NotAllowedError: Permission dismissed": yi,
    "NotFoundError: Requested device not found":
      '"No microphone detected. Please connect one to continue.',
    "NotAllowedError: Permission denied by system":
      "Verify that your operating system's privacy settings allow the browser to access the camera. On Windows, go to Settings > Privacy > Camera and make sure the browser is listed and enabled. On macOS, go to System Preferences > Security & Privacy > Privacy tab > Camera.",
  };
  
export {
  Rf as a,
  Cf as b,
  oa as c,
  Lf as d,
  qf as e,
  ie as f,
  Cr as g,
  Bf as h,
  Gf as i,
  Ff as j,
  Tf as k,
  Si as l,
  $f as m,
  Vi as n,
  Mf as o,
  Hf as p,
  gi as q,
  xf as r,
  jf as s,
  _n as t,
};
