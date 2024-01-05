import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span>Lama Dev</span>

        <div className="social">
          <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="/youtube.png" alt="Youtube" /></a>
          <a href="#"><img src="/dribbble.png" alt="Dribbble" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;