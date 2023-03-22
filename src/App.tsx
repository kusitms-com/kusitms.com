import React, { Suspense, lazy, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main, Recruit, Reviews } from "pages";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "components/ScrollToTop";

// eslint-disable-next-line
const Projects = lazy(() => import("./pages/Projects/ProjectsPage"));

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container>
      <Router>
        <Suspense fallback={<div>Loading ..</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/recruit" element={<Recruit />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;
