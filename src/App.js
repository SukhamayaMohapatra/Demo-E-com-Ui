import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
