function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "#999" : "#2c2c2c",
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