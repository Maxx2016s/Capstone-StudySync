function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "#64748b" : "#ffffff",
              fontWeight: "600",
              letterSpacing: "0.3px",
            }}
          >
            {task.text}
          </span>

          <div className="task-buttons">
            <button
              className="btn-complete"
              onClick={() => toggleTask(index)}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button
              className="btn-delete"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;