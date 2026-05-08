import { useState, useEffect } from "react";

function Track() {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    rate: 0,
  });

  const updateStats = () => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const tasks = JSON.parse(saved);
      const total = tasks.length;
      const completed = tasks.filter((t) => t.completed).length;
      const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

      setStats({ total, completed, rate });
    }
  };

  useEffect(() => {
    updateStats();

    const handleStorageChange = () => {
      updateStats();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div>
      <h2>Progress Tracking</h2>
      <p>Monitor your study progress and achievements</p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p className="stat-number">{stats.total}</p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p className="stat-number">{stats.completed}</p>
        </div>
        <div className="stat-card">
          <h3>Completion Rate</h3>
          <p className="stat-number">{stats.rate}%</p>
        </div>
      </div>
    </div>
  );
}

export default Track;
