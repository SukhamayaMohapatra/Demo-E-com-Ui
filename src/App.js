import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header setQuery={setQuery} />

      <Routes>
        <Route path="/" element={<Home query={query} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </>
  );
}

export default App;
