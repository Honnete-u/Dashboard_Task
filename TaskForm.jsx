import { useState } from "react";

const emptyForm = { title: "", description: "", priority: "Medium" };

export default function TaskForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "title") setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title.trim() === "") {
      setError("Enter a task title. It can't be empty or only spaces.");
      return;
    }
    onAdd(form);
    setForm(emptyForm);
    setError("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <label>
        Task title
        <input
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
          placeholder="e.g. Book dentist appointment"
          aria-invalid={error ? "true" : "false"}
        />
      </label>
      {error && <p className="error" role="alert">{error}</p>}

      <label>
        Description (optional)
        <textarea
          name="description"
          rows="3"
          value={form.description}
          onChange={handleChange}
          placeholder="Any details to remember"
        />
      </label>

      <label>
        Priority
        <select name="priority" value={form.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </label>

      <button type="submit" className="btn btn-primary">Add task</button>
    </form>
  );
}
