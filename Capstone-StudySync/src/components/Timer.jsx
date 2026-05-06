import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(1500);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="timer-container">
      <div className="timer-display">{formatTime()}</div>

      <div className="timer-controls">
        <button className="btn-start" onClick={() => setRunning(true)}>Start</button>
        <button className="btn-pause" onClick={() => setRunning(false)}>Pause</button>
        <button className="btn-reset" onClick={() => setSeconds(1500)}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;