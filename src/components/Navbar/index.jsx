import "./index.css"
import logo from "../../../assets/stendahlslogo.jpeg"
import menyClosed from "../../../assets/menyClosed.png"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <a href="/">
        <img
          src={logo}
          style={{ width: "25%", height: "auto", marginTop: "15px" }}>
        </img>
      </a>
      <nav>
        <button onClick={() => setIsOpen(!isOpen)}><img
          src={menyClosed}
          style={{ width: "15%", height: "auto", marginTop: "15px", alignSelf: "right"}}>
        </img></button>
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
            <form>
              <input className="searchbar" type="search"></input>
            </form>
            <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Our Work</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">News & Articles</a>
          </li>
          <li>
            <a href="/">Talks & Seminars</a>
          </li>
          <li>
            <a href="/">Open positions</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
