import TaskCard from "./TaskCard.jsx";

const emptyMessages = {
  All: "No tasks yet. Add your first task using the form.",
  Pending: "Nothing pending. Nice work, or add a new task.",
  Completed: "No completed tasks yet. Mark a task as completed to see it here.",
};

export default function TaskList({ tasks, filter, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty">{emptyMessages[filter]}</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
