import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TimerPage from "./pages/TimerPage";
import Track from "./pages/Track";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav>
        <h1>StudySync</h1>

        <div className="links">
          <Link to="/">HOME</Link>
          <Link to="/tasks">TASKS</Link>
          <Link to="/timer">TIMER</Link>
          <Link to="/track">TRACK</Link>
        </div>
      </nav>

      {/* Page Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;