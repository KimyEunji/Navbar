import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Services from "./services";
import Contact from "./contact";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_kr from "./translations/kr/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
    kr: {
      global: global_kr
    }
  }
})

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
    <I18nextProvider i18n = { i18next }>
    <App />
    </I18nextProvider>
  </React.StrictMode>
);
