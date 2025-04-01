import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { IoTimeOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactUs = () => {
  return (
    <motion.div 
      className="mb-4 container2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Ensures it animates only once
      variants={fadeUpVariant}
    >
      <div className="container2">
        {/* Contact Header */}
        <div className="comp-header mb-4 d-flex align-items-center justify-content-center flex-column text-center">
          <h4>Contact Us</h4>
          <p>We’d love to hear from you! Get in touch with us today.</p>
        </div>

        <div className="grid4">
          <motion.div
            className="box rounded bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-3"
            variants={fadeUpVariant}
          >
            <RiMailSendLine size={20} />
            <h6 className="text-bold">Email</h6>
            <small>contact@consultingservices.com</small>
            <a className=" text-white" href="mailto:yustee2017@gmail.com">
              Share your consulting needs with us <IoIosArrowRoundForward />
            </a>
          </motion.div>

          {/* WhatsApp Box */}
          <motion.div
            className="box rounded bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-3"
            variants={fadeUpVariant}
          >
            <FaWhatsapp size={20} />
            <h6 className="text-bold">WhatsApp</h6>
            <small>(+44) 7943 722218</small>
            <a className=" text-white" href="https://wa.me/447943722218">
              We’d love to hear about your consulting needs!{" "}
              <IoIosArrowRoundForward />
            </a>
          </motion.div>

          {/* Address Box */}
          <motion.div
            className="box rounded bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-3"
            variants={fadeUpVariant}
          >
            <SlLocationPin size={20} />
            <h6 className="text-bold">Address</h6>
            <small>123 Consulting St, London, UK</small>
            <small className="text-white">Near Central Square</small>
          </motion.div>

          {/* Office Time Box */}
          <motion.div
            className="box rounded bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-3"
            variants={fadeUpVariant}
          >
            <IoTimeOutline size={20} />
            <h6 className="text-bold">Office Time</h6>
            <small>Mon-Fri: 9:00 AM - 6:00 PM</small>
            <small>Sat: 9:00 AM - 2:00 PM</small>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
