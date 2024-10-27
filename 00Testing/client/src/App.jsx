import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Transactions from "./components/Transactions";
import Contact from "./pages/Contact";
import Tutorials from "./pages/Tutorials";
import "./App.css"
const App = () => (
  <Router>
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
