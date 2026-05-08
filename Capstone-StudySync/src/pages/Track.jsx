function Track() {
  return (
    <div>
      <h2>Progress Tracking</h2>
      <p>Monitor your study progress and achievements</p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>Completion Rate</h3>
          <p className="stat-number">0%</p>
        </div>
      </div>
    </div>
  );
}

export default Track;
