export default function CardHeader({ children, className = "" }) {
  return <div className={`px-6 pt-5 ${className}`}>{children}</div>;
}
