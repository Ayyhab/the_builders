export default function Badge({ text, className = "", variant = "subtle" }) {
  const styles = {
    subtle: "bg-neutral-100 text-neutral-700 border border-neutral-200",
    accent: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    solid: "bg-emerald-600 text-white border border-emerald-600",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${styles[variant]} ${className}`}
    >
      {text}
    </span>
  );
}
