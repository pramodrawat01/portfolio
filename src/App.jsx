import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects.jsx";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Layout from "./components/Layout.jsx";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      
    </Routes>
  );
};

export default App;
