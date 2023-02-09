import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import Layout from "./components/Layouts/Layout";
import ScrollToTop from "./ScrollToTop";
import Cart from "./pages/Cart/Cart";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleRender = () => {
    setCount(count + 1);
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="/" element={<Home handlRender={handleRender} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart handlRender={handleRender} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
