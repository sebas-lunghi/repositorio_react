import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navList">
      <p>Home</p>
      <p>Catalogo</p>
      <p>Contacto</p>
      <button> 🛒</button>
    </nav>
  );
};

export default Navbar;
