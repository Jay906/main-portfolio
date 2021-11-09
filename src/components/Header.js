import React, { useState, useEffect } from "react";

function Header() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY < 40) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <header className={active || show ? "active-header" : ""}>
      <a className="brand" href="/">
        Jay Atalykov
      </a>
      <button className="toggle-button" onClick={() => setShow(!show)}>
        <span></span>
      </button>
      <nav className={show ? "nav-show" : ""}>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="#start">Home</a>
          </li>
          <li className="nav-link">
            <a href="#services">Services</a>
          </li>
          <li className="nav-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-link">
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
