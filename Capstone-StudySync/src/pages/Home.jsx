import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome To STUDYSync 📚</h1>
          <p>Plan your studies, manage tasks, and stay focused.</p>
        </div>
        
      </div>
      <br></br>
        <hr></hr>

      <div className="features-section">
        <h2>Features</h2>

        <div className="features-grid">
          <Link to="/tasks" style={{ textDecoration: "none" }}>
            <div className="feature-card">
              <h3>✅ Tasks</h3>
              <p>Manage your study tasks</p>
            </div>
          </Link>

          <Link to="/timer" style={{ textDecoration: "none" }}>
            <div className="feature-card">
              <h3>⏱️ Timer</h3>
              <p>Pomodoro focus sessions</p>
            </div>
          </Link>

          <Link to="/track" style={{ textDecoration: "none" }}>
            <div className="feature-card">
              <h3>📊 Track</h3>
              <p>Monitor your progress</p>
            </div>
          </Link>
        </div>
        <br></br><br></br>
        <hr></hr>
      </div>

      <div className="benefits-section">
        <h2>Why Choose StudySync?</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>🎯 Stay Focused</h3>
            <p>Use the Pomodoro technique to maintain focus</p>
          </div>

          <div className="benefit-item">
            <h3>📈 Track Progress</h3>
            <p>See your improvements over time</p>
          </div>

          <div className="benefit-item">
            <h3>⚡ Get Productive</h3>
            <p>Achieve more with better organization</p>
          </div>
        </div>
        <br></br><br></br>
        <hr></hr>
      </div>

      <div className="cta-section">
        <h2>Get Started</h2>

        <div className="cta-buttons">
          <a href="/tasks" className="cta-button primary">
            View Tasks
          </a>

          <a href="/timer" className="cta-button secondary">
            Start Timer
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;