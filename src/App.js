import Cart from "./Components/Pages/Cart/Cart";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Shop from "./Components/Pages/Shop/Shop";
import {Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
  
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
   </Routes>

    </>
  );
}

export default App;