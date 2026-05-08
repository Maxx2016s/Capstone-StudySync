import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TimerPage from "./pages/TimerPage";
import Track from "./pages/Track";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);


  useEffect(() => {
    let interval = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="brand">StudySync</h2>

        <nav className="nav">
          <NavLink to="/" end className="navlink">
            Home
          </NavLink>

          <NavLink to="/tasks" className="navlink">
            Tasks
          </NavLink>

          <NavLink to="/timer" className="navlink">
            Timer
          </NavLink>

          <NavLink to="/track" className="navlink">
            Track
          </NavLink>
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </aside>

      {/* Main Content */}
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                tasks={tasks}
                timeLeft={timeLeft}
                isRunning={isRunning}
                setIsRunning={setIsRunning}
              />
            }
          />
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />
          <Route
            path="/timer"
            element={
              <TimerPage
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
                isRunning={isRunning}
                setIsRunning={setIsRunning}
              />
            }
          />
          <Route
            path="/track"
            element={<Track tasks={tasks} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;