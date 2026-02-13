import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TOTAL_PAGES = 604;

export default function MainScreen() {
  const navigate = useNavigate();
  const [totalDays, setTotalDays] = useState(null);
  const [pagesPerDay, setPagesPerDay] = useState(0);
  const [currentDay, setCurrentDay] = useState(1); // اليوم الحالي
  const [completedDays, setCompletedDays] = useState([]); // قائمة الأيام المكتملة

  // استرجاع العدد وقائمة الأيام المكتملة من LocalStorage
  useEffect(() => {
    const savedDays = localStorage.getItem("days");
    if (!savedDays) {
      navigate("/");
      return;
    }
    setTotalDays(Number(savedDays));
    setPagesPerDay(Math.ceil(TOTAL_PAGES / Number(savedDays)));

    const savedCompleted = localStorage.getItem("completedDays");
    if (savedCompleted) {
      const completedArray = JSON.parse(savedCompleted); // تحويل string إلى array
      setCompletedDays(completedArray);
      setCurrentDay(completedArray.length + 1); // اليوم الحالي = آخر يوم + 1
    }
  }, []);

  const handleCompleteDay = () => {
    if (currentDay <= totalDays) {
      const newCompleted = [...completedDays, currentDay];
      setCompletedDays(newCompleted);
      localStorage.setItem("completedDays", JSON.stringify(newCompleted));

      if (newCompleted.length === totalDays) {
        navigate("/completionscreen"); // الآن يعتمد على newCompleted
      } else {
        setCurrentDay(currentDay + 1);
      }
    }
  };

  const completedPages = completedDays.length * pagesPerDay;
  const progressPercent = Math.min(
    100,
    Math.round((completedPages / TOTAL_PAGES) * 100),
  );

  if (!totalDays) return <div>Loading...</div>;

  return (
    <div className="screen-card">
      <div className="dashboard">
        {/* <h1>Dashboard</h1> */}
        <p>
          اليوم {currentDay} من {totalDays}
        </p>
        <p>عدد الصفحات اليوم: {pagesPerDay}</p>
        <div
          className="progress-bar"
          style={{
            width: "100%",
            maxWidth: "320px",
            height: "20px",
            backgroundColor: "#ddd",
            borderRadius: "10px",
            overflow: "hidden",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              width: `${progressPercent}%`,
              height: "100%",
              backgroundColor: "#C9A24D",
              transition: "width 0.5s ease",
            }}
          />
        </div>
        <p>التقدم: {progressPercent}%</p>
        <button
          onClick={handleCompleteDay}
          style={{
            backgroundColor: "#C9A24D",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          ✔ تم الإنجاز
        </button>

        <div style={{ marginTop: "20px" }}>
          <h3>الأيام المكتملة:</h3>
          <div className="completed-days">
            {completedDays.map((day) => (
              <div key={day} className="day-chip">
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
