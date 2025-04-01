import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { VscMenu } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="container2">
        <nav className="navbar d-flex align-items-center">
          {/* Logo */}
          <Link to="/" className="nav-logo nav-link d-flex align-items-center gap-1">
            <img src="../../Images/logo1.png" loading="lazy" className="logo" alt="logo" />
            <h5 className="fw-bold c-name text-uppercase">Consultents</h5>
          </Link>

          {/* Desktop Navigation */}
          <ul className="d-md-flex d-none gap-3 align-items-center">
            <li><Link className="nav-link" to="/">HOME</Link></li>
            <li><Link className="nav-link" to="/services">SERVICES</Link></li>
            <li><Link className="nav-link" to="/">ABOUT US</Link></li>
            <li><Link className="nav-link" to="/">CONTACT</Link></li>
            <li><Link className="nav-link" to="/portfolio">PORTFOLIO</Link></li>
          </ul>

          {/* Mobile Navigation - Smooth Slide Animation */}
          <AnimatePresence>
            {open && (
              <motion.div
                className="mobile-nav d-flex flex-column gap-3 align-items-center"
                initial={{ opacity: 0, x: -200 }} // Start off-screen left
                animate={{ opacity: 1, x: 0 }} // Slide into view
                exit={{ opacity: 0, x: 200 }} // Exit off-screen right
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <IoMdClose color="#ffffff" size={28} onClick={() => setOpen(false)} className="close-btn" />
                <ul className="header-ul d-flex flex-column gap-3 align-items-center">
                  <li><Link className="nav-link" onClick={() => setOpen(false)} to="/">HOME</Link></li>
                  <li><Link className="nav-link" onClick={() => setOpen(false)} to="/services">SERVICES</Link></li>
                  <li><Link className="nav-link" onClick={() => setOpen(false)} to="/about">ABOUT US</Link></li>
                  <li><Link className="nav-link" onClick={() => setOpen(false)} to="/contact">CONTACT</Link></li>
                  <li><Link className="nav-link" onClick={() => setOpen(false)} to="/portfolio">PORTFOLIO</Link></li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact & Menu Icons */}
          <ul className="d-flex align-items-center gap-3 m-0 p-0">
            <div className="h-contact m-0 p-0">
              <small className="muted m-0">Need Help? Talk to an Expert</small>
              <p className="m-0">(+44) 7943 722218</p>
            </div>

            <FiSearch className="d-none d-md-flex" size={24} />
            <VscMenu className="d-flex d-md-none" onClick={() => setOpen(true)} size={28} />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
