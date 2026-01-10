export default function Button({
  children,
  className = "",
  variant = "solid",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-3.5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    solid:
      "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500",
    ghost: "text-emerald-700 hover:bg-neutral-50 focus:ring-emerald-500",
    outline:
      "border border-emerald-200 text-emerald-700 hover:bg-emerald-50/40 focus:ring-emerald-500",
    muted:
      "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus:ring-neutral-400",
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
