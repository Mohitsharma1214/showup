import type { HabitData } from "./App";

interface Props {
  data: HabitData;
  onUpdate: (data: HabitData) => void;
}

export default function TodayHabit({ data, onUpdate }: Props) {
  const today = new Date().toISOString().split("T")[0];
  const doneToday = data.lastDone === today;

  function markDone() {
    if (doneToday) return;
    
    const updated: HabitData = { 
      ...data, 
      lastDone: today
    };
    onUpdate(updated);
  }

  return (
    <div className="container today-container">
      {/* Problem Demonstration */}
      <div className="problem-demo">
        <div className="traditional-approach">
          <h3>❌ Traditional Approach</h3>
          <div className="big-goal">
            <span className="goal-text">"{data.habit} for 1 hour every day"</span>
            <div className="pressure-indicators">
              <span className="pressure">😰 Feels overwhelming</span>
              <span className="pressure">😔 Miss one day = guilt</span>
              <span className="pressure">🚫 Quit after 3 days</span>
            </div>
          </div>
        </div>

        <div className="vs-divider">VS</div>

        <div className="showup-approach">
          <h3>✅ ShowUp Approach</h3>
          <div className="small-goal">
            <span className="goal-text">"{data.action}"</span>
            <div className="success-indicators">
              <span className="success">😌 Feels doable</span>
              <span className="success">🎯 Hard to fail</span>
              <span className="success">🔥 Builds momentum</span>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Action */}
      <div className="habit-card">
        <div className="habit-info">
          <h2>Today's Minimum Win</h2>
          <div className="minimum-commitment">
            <span className="commitment-text">{data.action}</span>
            <div className="win-condition">
              ✨ Do this = Today is a success ✨
            </div>
          </div>
        </div>

        <div className="action-section">
          {doneToday ? (
            <div className="completed-state">
              <div className="success-celebration">
                <div className="celebration-animation">🎉</div>
                <h3>You broke the cycle!</h3>
                <p>While others quit from overwhelm, you stayed consistent with small wins.</p>
                <div className="momentum-message">
                  <strong>Tomorrow:</strong> Same small commitment. Same guaranteed win.
                </div>
              </div>
            </div>
          ) : (
            <div className="pending-state">
              <div className="motivation-section">
                <div className="difficulty-meter">
                  <span className="meter-label">Difficulty Level:</span>
                  <div className="meter">
                    <div className="meter-fill easy"></div>
                    <span className="meter-text">TOO EASY TO FAIL</span>
                  </div>
                </div>
                
                <div className="time-estimate">
                  ⏱️ This will take you less than 5 minutes
                </div>
                
                <div className="psychological-trick">
                  <strong>The Psychology:</strong> Your brain can't resist something this small. 
                  Once you start, you'll often do more naturally.
                </div>
              </div>
              
              <button 
                className="complete-btn"
                onClick={markDone}
              >
                ✓ I Did The Minimum (Mark Complete)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Insight */}
      <div className="insight-footer">
        <div className="insight-text">
          <strong>Why this works:</strong> Most people fail because they aim too high. 
          This app forces you to aim so low that consistency becomes inevitable.
        </div>
      </div>
    </div>
  );
}
