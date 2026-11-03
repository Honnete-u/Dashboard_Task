const filters = ["All", "Pending", "Completed"];

export default function TaskFilter({ current, onChange }) {
  return (
    <div className="filters" role="group" aria-label="Filter tasks">
      {filters.map((f) => (
        <button
          key={f}
          type="button"
          className={`filter-btn ${current === f ? "active" : ""}`}
          aria-pressed={current === f}
          onClick={() => onChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
