// src/Layout.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Progress from "./Pages/Skills";
import NavBar from "./Components/NavBar";
import { ThemeProvider } from "./ThemeContext";

const Layout = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Progress />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Layout;
