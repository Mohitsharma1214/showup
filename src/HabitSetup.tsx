
import { useState } from "react";
import type { HabitData } from "./App";

interface Props {
  onSave: (data: HabitData) => void;
}

export default function HabitSetup({ onSave }: Props) {
  const [habit, setHabit] = useState("");
  const [action, setAction] = useState("");

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
        <p className="subtitle">Set one small habit. Show up every day.</p>
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
          <label htmlFor="action">What's the smallest version you can commit to?</label>
          <input
            id="action"
            placeholder="e.g., 5 push-ups, 1 page, 2 minutes"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            maxLength={100}
          />
          <small className="help-text">Make it so small you can't fail</small>
        </div>

        <button 
          className="primary-btn"
          onClick={handleSave}
          disabled={!habit.trim() || !action.trim()}
        >
          Start My Journey
        </button>
      </div>
    </div>
  );
}
