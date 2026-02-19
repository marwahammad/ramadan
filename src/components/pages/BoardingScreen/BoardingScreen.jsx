import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BoardingScreen() {

  const [selectedDays, setSelectedDays] = useState(null);
  const navigate=useNavigate();

  const handleNumDays = () => {
    localStorage.setItem("days", Number(selectedDays));
    navigate('/mainscreen')
  };
  return (<div className="screen-card">

    <div className="boarding-screen">
      <h1>  🌙ختمتي</h1>
      <h2>ابدأ رحلتك مع القرآن</h2>
      <div className="choose-days">
        <h3>تختار تختم في القران في كام يوم؟</h3>
        <label htmlFor="10day"> 10</label>
        <input
          type="radio"
          name="numdays"
          id="10day"
          value={10}
          onChange={(e) => {
            setSelectedDays(e.target.value);
          }}
        />
        <label htmlFor="20day"> 20</label>
        <input
          type="radio"
          name="numdays"
          id="20day"
          value={20}
          onChange={(e) => {
            setSelectedDays(e.target.value);
          }}
        />
        <label htmlFor="30day"> 30</label>
        <input
          type="radio"
          name="numdays"
          id="30day"
          value={30}
          onChange={(e) => {
            setSelectedDays(e.target.value);
          }}
        />
      </div>
      <button onClick={handleNumDays}   disabled={!selectedDays}
>ابدأ الرحله</button>
    </div>
    </div>
  );
}
