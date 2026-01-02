
import { useState } from "react";
import type { HabitData } from "./App";

interface Props {
  onSave: (data: HabitData) => void;
}

export default function HabitSetup({ onSave }: Props) {
  const [habit, setHabit] = useState("");
  const [action, setAction] = useState("");
  const [showExample, setShowExample] = useState(false);

  function handleSave() {
    if (!habit || !action) return;

    const data: HabitData = {
      habit: habit.trim(),
      action: action.trim(),
      lastDone: null
    };

    onSave(data);
  }

  return (
    <div className="container setup-container">
      <div className="header">
        <h1>ShowUp</h1>
        <p className="subtitle">The app that makes consistency inevitable</p>
      </div>

      <div className="problem-statement">
        <h3>The Problem You Face:</h3>
        <div className="problem-cycle">
          <div className="cycle-step">📈 Set ambitious goal</div>
          <div className="cycle-arrow">→</div>
          <div className="cycle-step">😰 Feel overwhelmed</div>
          <div className="cycle-arrow">→</div>
          <div className="cycle-step">😔 Miss a day</div>
          <div className="cycle-arrow">→</div>
          <div className="cycle-step">🚫 Quit entirely</div>
        </div>
      </div>

      <div className="solution-preview">
        <h3>Our Solution:</h3>
        <p>Make your commitment so small that failure becomes nearly impossible.</p>
      </div>

      <div className="form-section">
        <div className="input-group">
          <label htmlFor="habit">What habit do you want to build?</label>
          <input
            id="habit"
            placeholder="e.g., Exercise, Read, Meditate"
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
            maxLength={50}
          />
        </div>

        <div className="input-group">
          <label htmlFor="action">What's the SMALLEST version you can commit to?</label>
          <input
            id="action"
            placeholder="e.g., 1 push-up, 1 page, 1 minute"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            maxLength={100}
          />
          <div className="help-section">
            <small className="help-text">Make it embarrassingly small - that's the point!</small>
            <button 
              type="button"
              className="example-btn"
              onClick={() => setShowExample(!showExample)}
            >
              {showExample ? 'Hide' : 'Show'} Examples
            </button>
          </div>
          
          {showExample && (
            <div className="examples">
              <div className="example-item">
                <strong>Exercise:</strong> "1 push-up" not "30-minute workout"
              </div>
              <div className="example-item">
                <strong>Reading:</strong> "1 page" not "1 chapter"
              </div>
              <div className="example-item">
                <strong>Meditation:</strong> "1 minute" not "20 minutes"
              </div>
            </div>
          )}
        </div>

        <button 
          className="primary-btn"
          onClick={handleSave}
          disabled={!habit.trim() || !action.trim()}
        >
          Start My Consistency Journey
        </button>
      </div>
    </div>
  );
}
