import Timer from "../components/Timer";

function TimerPage({
  timeLeft,
  setTimeLeft,
  isRunning,
  setIsRunning,
}) {

  return (
    <div className="timer-page">

      <h1>Pomodoro Timer</h1>

      <p className="timer-subtitle">
        Stay focused for 25 minutes.
      </p>

      <Timer
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />

    </div>
  );
}

export default TimerPage;