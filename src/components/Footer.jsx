import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-5 text-white footer pb-5 m-0">
      <div className="container2">
        <div className="grid">
          <div>
            <ul className="p-0 mt-5 mt-sm-4 d-flex justify-content-sm-start align-items-sm-start flex-column gap-3">
               <div className="nav-logo d-flex align-items-center gap-1">
                  <img src="../../Images/logo1.png" className='logo' alt="" />
                  <h5 className="fw-bold c-name">CONSULTENTS.</h5>
                </div>
                <small className="text-sm-start">
                  Your trusted partner in business consulting, finance support, logistics, and social media management. We provide tailored solutions to help businesses grow, streamline operations, and achieve long-term success in a competitive market.
                </small>
            </ul>
          </div>

          <div className="footer-right">
            <ul className="p-0 mt-5 mt-sm-4 d-flex justify-content-sm-start align-items-sm-start flex-column gap-3 text-sm-start">
              <h6 className="fw-bold">Our Services</h6>
              <li className="d-flex align-items-center gap-2">
                <small>Financial Consulting</small>
              </li>
              <li className="d-flex align-items-center gap-2">
                <small>Logistics Management</small>
              </li>
              <li className="d-flex align-items-center gap-2">
                <small>Business Strategy Development</small>
              </li>
              <li className="d-flex align-items-center gap-2">
                <small>Social Media Management</small>
              </li>
              <li className="d-flex align-items-center gap-2">
                <small>Human Resource Consulting</small>
              </li>
            </ul>

           

            <ul className="p-0 d-flex justify-content-sm-start align-items-sm-start flex-column gap-3 text-sm-start mt-5 mt-sm-4">
              <h6 className="fw-bold">Quick Contact</h6>
              <small>Need expert advice? Contact our team today.</small>
              <li>
                (+44) 7943 722218
              </li>
              <small>10, Business Avenue, Victoria Island, Lagos</small>
              <li><small>Global.Konsult@gmail.com</small></li>
            </ul>


            <ul className="p-0 d-flex justify-content-sm-start align-items-sm-start flex-column gap-3 text-sm-start mt-5 mt-sm-4">
              <h6 className="fw-bold">Quick Links</h6>
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/">About Us</Link>
              <Link className="nav-link" to="/services">Services</Link>
              <Link className="nav-link" to="/">Contact</Link>
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </ul>
              
            <ul className="p-0 d-flex justify-content-sm-start align-items-sm-start flex-column gap-3 text-sm-start mt-5 mt-sm-4">
              <h6 className="fw-bold">Social Media</h6>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
