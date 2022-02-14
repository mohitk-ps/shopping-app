import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/Products";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
