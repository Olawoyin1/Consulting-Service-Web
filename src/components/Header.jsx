import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className='header'>
        <div className="container2">
            <nav className='navbar d-flex align-items-center'>
                <Link to="/" className="nav-logo nav-link d-flex align-items-center gap-1">
                    <img src="../../Images/logo.png" className='logo' alt="" />
                    <h5 className="fw-bold c-name">KONSULT.</h5>
                </Link>

                <ul className='d-md-flex d-none gap-3 align-items-center'>
                    <li><Link className='nav-link' to="/">HOME</Link></li>
                    <li><Link className='nav-link' to="/services">SERVICES</Link></li>
                    <li><Link className='nav-link' to="/about">ABOUT US</Link></li>
                    <li><Link className='nav-link' to="/contact">CONTACT</Link></li>
                    <li><Link className='nav-link' to="/portfolio">PORTFOLIO</Link></li>
                </ul>

                <ul className='d-flex align-items-center gap-3'>
                    <div className="h-contact  d-flex flex-column ">
                        <small className='muted'>Need Help? Talk to an Expert</small>
                        <p className='m-0'>(+234)80 1232 4771</p>
                    </div>
                    <FiSearch  size={24}/>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header