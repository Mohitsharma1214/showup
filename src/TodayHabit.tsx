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
      <div className="header">
        <h1>Today's Commitment</h1>
      </div>

      <div className="habit-card">
        <div className="habit-info">
          <h2>{data.habit}</h2>
          <p className="minimum-action">Minimum: <strong>{data.action}</strong></p>
        </div>

        <div className="action-section">
          {doneToday ? (
            <div className="completed-state">
              <div className="success-message">
                <span className="checkmark">✅</span>
                <h3>You showed up today!</h3>
                <p>That's what matters. See you tomorrow.</p>
              </div>
            </div>
          ) : (
            <div className="pending-state">
              <p className="encouragement">
                Remember: you only need to do <strong>{data.action}</strong>
              </p>
              <button 
                className="complete-btn"
                onClick={markDone}
              >
                ✓ Mark as Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
