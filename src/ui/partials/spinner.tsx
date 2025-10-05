import "../styles/partials/spinner.css";

export default function Spinner({ size }: { size: number }) {
  return (
    <span
      className="spinner"
      style={{ width: `${size}px`, height: `${size}px`, margin: `${size}px` }}
    ></span>
  );
}
