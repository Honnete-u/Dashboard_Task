export default function TaskCard({ task, onToggle, onDelete }) {
  const done = task.status === "Completed";

  return (
    <li className={`task-card ${done ? "is-done" : ""}`}>
      <div className="task-main">
        <h3>{task.title}</h3>
        {task.description && <p className="task-desc">{task.description}</p>}
        <div className="badges">
          <span className={`badge priority-${task.priority.toLowerCase()}`}>
            {task.priority} priority
          </span>
          <span className={`badge status-${task.status.toLowerCase()}`}>{task.status}</span>
        </div>
      </div>

      <div className="task-actions">
        <button className="btn btn-secondary" onClick={() => onToggle(task.id)}>
          {done ? "Mark as pending" : "Mark as completed"}
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
