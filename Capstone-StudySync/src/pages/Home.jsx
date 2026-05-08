import { Link } from "react-router-dom";

function Home({
  tasks,
  timeLeft,
  isRunning,
  setIsRunning,
}) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""
    }${seconds}`;
  return (
    <div className="home-container">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome Back</h1>
          <p>Stay productive and keep your momentum going.</p>
        </div>
      </section>

      <section className="dashboard-grid">

        {/* TASK STATS */}

        <div className="track-card">
          <h3>Total Tasks</h3>
          <div className="track-number">
            {totalTasks}
          </div>
        </div>

        <div className="track-card">
          <h3>Completed</h3>
          <div className="track-number">
            {completedTasks}
          </div>
        </div>

        <div className="track-card">
          <h3>Pending</h3>
          <div className="track-number">
            {pendingTasks}
          </div>
        </div>

        {/* TIMER */}

        <div className="timer-home-card">
          <h3>Pomodoro Timer</h3>

          <div className="home-timer-display">
            {formattedTime}
          </div>

          <button
            className="btn-start"
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
        </div>

      </section>

      {/* RECENT TASKS */}
      <section className="card">
        <div className="section-header">
          <h2>Recent Tasks</h2>
        </div>

        {tasks.length === 0 ? (
          <div className="empty-state">
            No tasks added yet.
          </div>
        ) : (
          tasks.slice(0, 5).map((task, index) => (
            <div className="recent-task" key={index}>

              <span
                className={
                  task.completed
                    ? "completed-task"
                    : "task-text"
                }
              >
                {task.text}
              </span>

              <span
                className={
                  task.completed
                    ? "completed"
                    : "pending"
                }
              >
                {task.completed ? "Done" : "Pending"}
              </span>

            </div>
          ))
        )}
      </section>

    </div>
  );
}

export default Home;