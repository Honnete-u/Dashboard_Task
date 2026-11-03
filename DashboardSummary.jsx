export default function DashboardSummary({ total, pending, completed }) {
  const items = [
    { label: "Total tasks", value: total, tone: "total" },
    { label: "Pending tasks", value: pending, tone: "pending" },
    { label: "Completed tasks", value: completed, tone: "completed" },
  ];

  return (
    <section className="summary" aria-label="Task summary">
      {items.map((item) => (
        <div key={item.label} className={`stat stat-${item.tone}`}>
          <span className="stat-value">{item.value}</span>
          <span className="stat-label">{item.label}</span>
        </div>
      ))}
    </section>
  );
}
