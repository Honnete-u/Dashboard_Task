import { useState } from "react";
import DashboardSummary from "./components/DashboardSummary.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskFilter from "./components/TaskFilter.jsx";
import TaskList from "./components/TaskList.jsx";

// Task shape: { id, title, description, priority, status }
const initialTasks = [
  { id: crypto.randomUUID(), title: "Review pull requests", description: "Check the two open PRs before standup.", priority: "High", status: "Pending" },
  { id: crypto.randomUUID(), title: "Write weekly report", description: "", priority: "Medium", status: "Pending" },
  { id: crypto.randomUUID(), title: "Water the plants", description: "Office and balcony.", priority: "Low", status: "Completed" },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All");

  const addTask = ({ title, description, priority }) => {
    const task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      priority,
      status: "Pending",
    };
    setTasks((prev) => [task, ...prev]);
  };

  const toggleStatus = (id) =>
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: t.status === "Pending" ? "Completed" : "Pending" } : t
      )
    );

  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));

  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const pending = total - completed;

  const visibleTasks = filter === "All" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Dashboard</h1>
        <p>Plan your day and see what is still open.</p>
      </header>

      <DashboardSummary total={total} pending={pending} completed={completed} />

      <main className="layout">
        <section className="panel">
          <h2>Add a task</h2>
          <TaskForm onAdd={addTask} />
        </section>

        <section className="panel">
          <div className="list-header">
            <h2>Your tasks</h2>
            <TaskFilter current={filter} onChange={setFilter} />
          </div>
          <TaskList
            tasks={visibleTasks}
            filter={filter}
            onToggle={toggleStatus}
            onDelete={deleteTask}
          />
        </section>
      </main>
    </div>
  );
}
