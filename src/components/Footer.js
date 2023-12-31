import { useEffect, useState } from "react";
import "../styles/Footer.css";
import Cart from "./cart";

function Footer(Cart) {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci est donc pas une adresse mail 🥲"
      );
    }
  }
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné.e.s de plantes 🪴🌿
      </div>
      <div className="lmj-footer-elem">Laissez nous votre mail :</div>
      <input
        placeholder="'Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
    </footer>
  );
}

export default Footer;
