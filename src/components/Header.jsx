import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className='header'>
        <div className="container2">
            <nav className='navbar d-flex align-items-center'>
                <div className="nav-logo d-flex align-items-center gap-1">
                    <img src="../../Images/logo.png" className='logo' alt="" />
                    <h5 className="fw-bold c-name">KONSULT.</h5>
                </div>

                <ul className='d-md-flex d-none gap-3 align-items-center'>
                    <li><Link className='nav-link' to="/">HOME</Link></li>
                    <li><Link className='nav-link' to="/">SERVICES</Link></li>
                    <li><Link className='nav-link' to="/">ABOUT US</Link></li>
                    <li><Link className='nav-link' to="/">CONTACT</Link></li>
                    <li><Link className='nav-link' to="/">PORTFOLIO</Link></li>
                </ul>

                <ul>
                    <FiSearch  size={24}/>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header