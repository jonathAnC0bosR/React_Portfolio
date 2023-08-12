import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainContent from "./Components/MainContent/MainContent";
import AboutMe from "./Components/Pages/About";
import Projects from "./Components/Pages/Projects";
import ContactMe from "./Components/Pages/ContactMe";
import Wrapper from "./Components/UI/Wrapper";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-row ">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
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
          <Route
            path="/projects"
            element={
              <Wrapper>
                {" "}
                <Projects />
              </Wrapper>
            }
          />
          <Route
            path="/contactMe"
            element={
              <Wrapper>
                {" "}
                <ContactMe />
              </Wrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
