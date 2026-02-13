import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BoardingScreen from "./components/pages/BoardingScreen/BoardingScreen";
import MainScreen from "./components/pages/MainScreen/MainScreen";
import CompletionScreen from "./components/pages/CompletionScreen/CompletionScreen";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<BoardingScreen />} />
          <Route path="/mainscreen" element={<MainScreen />} />
          <Route path="/completionscreen" element={<CompletionScreen />} />
        </Routes>
      </div>
    </Router>
  );
}
