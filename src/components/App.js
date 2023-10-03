import Banner from "./banner";
import logo from "./assets/logo.png";
import Cart from "./cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import "../styles/layout.css";
import { useState } from "react";

function App() {
  const [cart, updateCart] = useState([]);

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maisin jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
