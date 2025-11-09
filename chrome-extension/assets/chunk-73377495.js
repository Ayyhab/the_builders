import { R as s, j as r } from "./chunk-09f48e00.js";
import { q as n } from "./chunk-874c5426.js";
class h extends s.Component {
  constructor(e) {
    super(e), (this.state = { hasError: !1 });
  }
  static getDerivedStateFromError(e) {
    return { hasError: !0, error: e };
  }
  componentDidCatch(e, o) {
    n(e, o);
  }
  render() {
    return this.state.hasError
      ? this.props.fallback || r.jsx(a, { error: this.state.error })
      : this.props.children;
  }
}
const a = ({ error: t }) =>
  r.jsxs("div", {
    className: "error-container",
    children: [
      r.jsx("h2", { children: "Something went wrong" }),
      r.jsx("p", {
        children:
          "An error occurred while loading the component. We're working on fixing it.",
      }),
      t && r.jsx("pre", { children: t.message }),
      r.jsx("button", {
        onClick: () => window.location.reload(),
        children: "Refresh Page",
      }),
    ],
  });
export { h as E, a };
