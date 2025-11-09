export function Input({ className = "", onKeyDown, ...props }) {
  return (
    <input
      onKeyDown={onKeyDown}
      className={`w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`}
      {...props}
    />
  );
}
