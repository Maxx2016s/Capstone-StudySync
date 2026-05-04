import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.trim()) return;
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default Tasks;