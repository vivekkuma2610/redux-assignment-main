import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from "./Components/ProductList";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

function App() {
  const [alert, setAlert] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList alert={alert} setAlert={setAlert} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
