import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MealList from "./components/MealList/MealList";
import Reservation from "./components/Reservation/Reservation";



function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          exact path={"/"}
          element={<MealList />}
        />

        <Route
          path={"/about"}
          element={<About />}
        />

        <Route
          path={"/reservation"}
          element={<Reservation />}
        />  
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;