"use client"

import { useState } from "react"
import "./Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1><span style={{color:"#C8B794",fontWeight:"bold"}}>S</span>alon <span style={{color:"#C8B794",fontWeight:"bold"}}>R</span>iham</h1>
        </div>
        <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#products" onClick={() => setMenuOpen(false)}>
                Products
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
