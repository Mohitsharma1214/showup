import { useEffect, useState } from "react";
import HabitSetup from "./HabitSetup";
import TodayHabit from "./TodayHabit";

export interface HabitData {
  habit: string;
  action: string;
  lastDone: string | null;
}

function App() {
  const [habitData, setHabitData] = useState<HabitData | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("showup_habit");
    if (saved) {
      try {
        setHabitData(JSON.parse(saved));
      } catch (error) {
        console.error('Error parsing saved habit data:', error);
        localStorage.removeItem("showup_habit");
      }
    }
  }, []);

  const updateHabitData = (data: HabitData) => {
    setHabitData(data);
    localStorage.setItem("showup_habit", JSON.stringify(data));
  };

  if (!habitData) {
    return <HabitSetup onSave={updateHabitData} />;
  }

  return (
    <div className="app">
      <main className="main-content">
        <TodayHabit data={habitData} onUpdate={updateHabitData} />
      </main>
    </div>
  );
}

export default App;
