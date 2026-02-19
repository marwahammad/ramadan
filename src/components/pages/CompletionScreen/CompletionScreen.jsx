import React from "react";
import { useNavigate } from "react-router-dom";

export default function CompletionScreen() {
  const navigate = useNavigate();

  const handleRestart = () => {
    // لو عايزة المستخدم يقدر يبدأ ختمة جديدة
    localStorage.removeItem("completedDays");
    localStorage.removeItem("days");
    navigate("/"); // ترجع لشاشة البداية
  };

  return (
    <div className="completion" style={{ textAlign:"center", padding: "50px" }}>
      <h1 style={{color:"#fff"}}>🎉 مبارك! لقد أتممت ختم القرآن! 🎉</h1>
      <p style={{color:"#fff"}}>🌙نتمنى لك التوفيق في المرات القادمة  </p>
      <button
        onClick={handleRestart}
        style={{
          backgroundColor: "#206381",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "12px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        ابدأ ختمة جديدة
      </button>
    </div>
  );
}
