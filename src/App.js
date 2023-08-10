import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LateralNav from "./Components/LateralNav/LateralNav";
import MainContent from "./Components/MainContent/MainContent";
import AboutMe from "./Components/Pages/About";
import Projects from "./Components/Pages/Projects";
import ContactMe from "./Components/Pages/ContactMe";

export default function App() {
  return (
    <Router>
      <div className="flex flex-row ">
        <Routes>
          <Route path="/" element={<MainContentWithNav />} />
          <Route path="/aboutMe" element={<AboutWithNav />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainContentWithNav() {
  return (
    <>
      <LateralNav />
      <MainContent />
    </>
  );
}

function AboutWithNav () {
  return (
    <>
    <LateralNav />
    <AboutMe />
    </>
  )
}
