import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainContent from "./Components/MainContent/MainContent";
import AboutMe from "./Components/Pages/About";
import Projects from "./Components/Pages/Projects";
import ContactMe from "./Components/Pages/ContactMe";
import Wrapper from "./Components/UI/Wrapper";

export default function App() {
  return (
    <Router>
      <div className="flex flex-row ">
        <Routes>
          <Route
            path="/"
            element={
              <Wrapper>
                {" "}
                <MainContent />
              </Wrapper>
            }
          />
          <Route
            path="/aboutMe"
            element={
              <Wrapper>
                {""}
                <AboutMe />
              </Wrapper>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

