import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Services from "./services";
import Contact from "./contact";
import './i18n';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
