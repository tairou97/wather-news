import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CityWeather from "./pages/CityWeather";
import Layout from "./layout/Layout"; // Stelle sicher, dass der Pfad korrekt ist

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather/:city" element={<CityWeather />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
