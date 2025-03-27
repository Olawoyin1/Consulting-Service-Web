// import React, { useState } from 'react'
// import { RiMailSendLine } from "react-icons/ri";
// import { FaWhatsapp } from "react-icons/fa";
// import { VscSend } from "react-icons/vsc";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { motion } from 'framer-motion';
// import { IoTimeOutline } from "react-icons/io5";
// import { SlLocationPin } from "react-icons/sl";

// const Contact = () => {

//     const contactVar = {
//         initial : {
//             // x : width > 0 ? -100 : "0",
//             x : -100,
//             opacity : 0
//           },
//           animate : {
//             opacity : 1,
//             x: 0,
//             transition : {
//               duration: 0.5,
//               staggerChildren : 0.7,
//               when : "beforeChildren",
//             } , 
//         }
//     }

//     const leftVar = {
//         initial : {
//             x : -100,
//             opacity : 0
//           },
//           animate : {
//             opacity : 1,
//             x: 0,
//             transition : {
//               duration: 0.5,
              
//             //   staggerChildren : 0.7
//             } , 
//         }
//     }
   
//     const rightVar = {
//         initial : {
//             x : 100,
//             opacity : 0
//           },
//           animate : {
//             opacity : 1,
//             x: 0,
//             transition : {
//               duration: 0.5,
              
//             //   staggerChildren : 0.7
//             } , 
//         }
//     }




   
    
//   return (
//     <div className='py-4' id='contact'>
//         <div className="container2">

//         <div className="comp-header mb-4 d-flex align-items-center justify-content-center flex-column text-center">
//               <h4>Contact Us</h4>
//               <p>We’d love to hear from you! Get in touch with us today.</p>

//           </div>

//             <motion.div 
//                 className="row m-0"
//                 variants={contactVar}
//                 initial="initial"
//                 whileInView="animate"
//             >
//                 <motion.div variants={leftVar} className="col-lg-6 p-lg-5">
//                     <div className="box rounded  bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3 mb-4">
//                         <RiMailSendLine size={20} />    
//                         <h6 className='text-bold'>Email</h6>
//                         <small>contact@consultingservices.com</small>
//                         <a className='text-muted' href="mailto:yustee2017@gmail.com">Share your consulting needs with us <IoIosArrowRoundForward /></a>
//                     </div>
//                     <div className="box rounded  bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
//                         <FaWhatsapp size={20}/>   
//                         <h6 className='text-bold'>Whatsapp</h6>
//                         <small>(+44) 7943 722218</small>
//                         <a className='text-muted' href="HTTPS://wa.me/447943722218">We’d love to hear about your consulting needs!<IoIosArrowRoundForward /></a>
//                     </div>
//                 </motion.div>
//                 <motion.div variants={rightVar} className="col-lg-6 p-lg-5">
//                 <div className="box rounded bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3 mb-4">
//                         <SlLocationPin size={20} />    
//                         <h6 className='text-bold'>Address</h6>
//                         <small>123 Consulting St, London, UK</small>
//                         <small className="text-muted">Near Central Square</small>
//                     </div>
//                     <div className="box rounded bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
//                         <IoTimeOutline size={20}/>   
//                         <h6 className='text-bold'>Office Time</h6>
//                         <small>Mon-Fri: 9:00 am to 6pm</small>
//                         <small>Sat: 9:00am to 2:00pm</small>
//                     </div>                   
//                 </motion.div>
//             </motion.div>
//         </div>
//     </div>
//   )
// }

// export default Contact




import React from 'react';
import { RiMailSendLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'framer-motion';
import { IoTimeOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const Contact = () => {
    // Animation Variants
    const contactVar = {
        initial: { x: -100, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.7,
                when: "beforeChildren",
            },
        },
    };

    const leftVar = {
        initial: { x: -100, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    const rightVar = {
        initial: { x: 100, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="py-4" id="contact">
            <div className="container2">
                {/* Contact Header */}
                <div className="comp-header mb-4 d-flex align-items-center justify-content-center flex-column text-center">
                    <h4>Contact Us</h4>
                    <p>We’d love to hear from you! Get in touch with us today.</p>
                </div>

                {/* Contact Section */}
                <motion.div
                    className="row m-0"
                    variants={contactVar}
                    initial="initial"
                    whileInView="animate"
                >
                    {/* Left Column - Email & WhatsApp */}
                    <motion.div variants={leftVar} className="col-lg-6 p-lg-5">
                        {/* Email Box */}
                        <div className="box rounded bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3 mb-4">
                            <RiMailSendLine size={20} />
                            <h6 className="text-bold">Email</h6>
                            <small>contact@consultingservices.com</small>
                            <a className="text-muted" href="mailto:yustee2017@gmail.com">
                                Share your consulting needs with us <IoIosArrowRoundForward />
                            </a>
                        </div>

                        {/* WhatsApp Box */}
                        <div className="box rounded bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                            <FaWhatsapp size={20} />
                            <h6 className="text-bold">WhatsApp</h6>
                            <small>(+44) 7943 722218</small>
                            <a className="text-muted" href="https://wa.me/447943722218">
                                We’d love to hear about your consulting needs! <IoIosArrowRoundForward />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column - Address & Office Time */}
                    <motion.div variants={rightVar} className="col-lg-6 p-lg-5">
                        {/* Address Box */}
                        <div className="box rounded bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3 mb-4">
                            <SlLocationPin size={20} />
                            <h6 className="text-bold">Address</h6>
                            <small>123 Consulting St, London, UK</small>
                            <small className="text-muted">Near Central Square</small>
                        </div>

                        {/* Office Time Box */}
                        <div className="box rounded bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                            <IoTimeOutline size={20} />
                            <h6 className="text-bold">Office Time</h6>
                            <small>Mon-Fri: 9:00 AM - 6:00 PM</small>
                            <small>Sat: 9:00 AM - 2:00 PM</small>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
