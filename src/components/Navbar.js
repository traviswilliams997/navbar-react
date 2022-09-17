import React, {useState} from "react"
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../img/logo.png'
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)
    return (
        <div className = 'navbar'>
          <div className = 'logo'> 
            <img src = {Logo} alt='logo' />
          </div>
          <ul className="nav-menu">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/">About</a></li>
            <li className="nav-item"><a href="/">Faq</a></li>
            <li className="nav-item"><a href="/">Contact</a></li>
          </ul>
          <div className = 'hamburger'>
              <FaBars  size={30} style = {{color: '#f8f8f8'}} />
          </div>
        </div>
    )
}

export default Navbar