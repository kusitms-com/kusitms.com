import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main, Projects, Recruit } from "pages";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "components/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/recruit" element={<Recruit />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;
