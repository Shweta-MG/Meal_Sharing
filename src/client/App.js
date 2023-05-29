import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Router>
      <Navbar />
      <About />
      <Meals />
      <Footer />
    </Router>
  );
}

export default App;
