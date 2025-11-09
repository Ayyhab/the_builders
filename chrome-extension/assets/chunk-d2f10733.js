const n = (e) => {
    const t = new Date(e);
    return `${a(t.getMonth() + 1)}/${a(t.getDate())}/${t.getFullYear()}`;
  },
  o = (e) => {
    const t = new Date(e);
    return `${a(t.getHours())}:${a(t.getMinutes())}`;
  },
  a = (e) => e.toString().padStart(2, "0");
export { o as a, n as t };
