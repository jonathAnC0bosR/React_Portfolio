import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LateralNav from "./Components/LateralNav/LateralNav";
import MainContent from "./Components/MainContent/MainContent";

export default function App() {
  return (
    <div className="flex flex-row">
      <LateralNav />
      <MainContent />
    </div>
  );
}
