function Track({ tasks = [] }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="track-page">

      <div className="track-header">
        <h1>Progress Tracking</h1>
        <p>Monitor your study progress and achievements.</p>
      </div>

      <div className="track-grid">

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
          <h3>Completion Rate</h3>
          <div className="track-number">
            {completionRate}%
          </div>
        </div>

      </div>

    </div>
  );
}

export default Track;