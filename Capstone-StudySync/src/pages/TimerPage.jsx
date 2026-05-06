import Timer from "../components/Timer.jsx";

function TimerPage() {
  return (
    <div className="timer-page">
      <h2>Pomodoro Timer</h2>
      <p className="timer-subtitle">Focus for 25 minutes, then take a break</p>
      <Timer />
    </div>
  );
}

export default TimerPage;