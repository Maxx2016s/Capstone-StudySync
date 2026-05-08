function Timer({
  timeLeft,
  setTimeLeft,
  isRunning,
  setIsRunning,
}) {

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  return (
    <div className="timer-container">

      <div className="timer-display">
        {formattedTime}
      </div>

      <div className="timer-controls">

        <button
          className="btn-start"
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>

        <button
          className="btn-pause"
          onClick={() => setIsRunning(false)}
        >
          Pause
        </button>

        <button
          className="btn-reset"
          onClick={() => {
            setIsRunning(false);
            setTimeLeft(1500);
          }}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default Timer;