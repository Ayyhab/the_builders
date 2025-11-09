export default function Progress({ value = 0, className = "" }) {
  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-neutral-200 ${className}`}
    >
      <div
        className="h-full bg-emerald-600"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}
