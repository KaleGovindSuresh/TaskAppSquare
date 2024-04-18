import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<Navbar />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
