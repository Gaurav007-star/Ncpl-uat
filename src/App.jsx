import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Lenis from "lenis";
import ServicePage from "./pages/Service/ServicePage";
import ProjectPage from "./pages/Project/ProjectPage";
import ContactPage from "./pages/Contact/ContactPage";
import Privacy from "./pages/Privacy/Privacy";
import Term from "./pages/Term/Term";

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
        <Route path="/service" element={<ServicePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/term" element={<Term />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
