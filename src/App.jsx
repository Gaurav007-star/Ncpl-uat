import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coming" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
