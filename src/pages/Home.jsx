// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";

// const slides = [
//     {
//       id: 1,
//       heading: "Business Growth",
//       title: "Empowering Your Business with Expert Solutions",
//       subtitle: "We offer innovative financial strategies, optimized logistics, and social media expertise to help businesses grow, scale efficiently, and maintain a competitive edge in an ever-evolving market landscape.",
//       image: "../../images/slide1.jpg",
//     },
//     {
//       id: 2,
//       heading: "New Opportunities",
//       title: "Turning Challenges Into Opportunities",
//       subtitle: "We help businesses navigate uncertainties, optimize resources, and transform obstacles into stepping stones for success with strategic planning, risk management, and expert guidance to maximize growth potential.",
//       image: "../../images/slide2.jpg",
//     },
//     {
//       id: 3,
//       heading: "Efficient Logistics",
//       title: "Optimized Logistics for Maximum Efficiency",
//       subtitle: "We provide cost-effective supply chain solutions, real-time tracking, and seamless distribution management to help businesses improve operational efficiency, reduce delays, and enhance customer satisfaction.",
//       image: "../../images/slide3.jpg",
//     },
//   ];
  

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="container2">
//       <div className="hero-container rounded p-5 mt-1">
//         {/* Background Image Transition */}
//         <div className="hero-background">
//           {slides.map((slide, index) => (
//             <motion.div
//               key={slide.id}
//               className="hero-slide"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 opacity: index === currentIndex ? 1 : 0, // Keep previous image visible during fade
//               }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: index === currentIndex ? 1 : 0 }}
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//             />
//           ))}
//         </div>

//         {/* Dark Overlay */}
//         <div className="hero-overlay"></div>

//         {/* Text Animation */}
//         <div className="hero-content">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={slides[currentIndex].id}
//               initial={{ opacity: 0, x: 50 }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//                 transition: { type: "spring", stiffness: 80, damping: 10,},
//               }}
//               exit={{ opacity: 0, x: -50 }}
//               transition={{ type: "spring", stiffness: 80, damping: 10 }}
//               className="d-flex flex-column gap-4"
//             >
//                 <p className="hero-subtitle text-uppercase muted text-start">{slides[currentIndex].heading}</p>
//               <h1 className="hero-title text-start">{slides[currentIndex].title}</h1>
//               <p className="hero-subtitle muted text-start">{slides[currentIndex].subtitle}</p>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const slides = [
  {
    id: 1,
    heading: "Business Growth",
    title: "Empowering Your Business with Expert Solutions",
    subtitle:
      "We offer innovative financial strategies, optimized logistics, and social media expertise to help businesses grow, scale efficiently, and maintain a competitive edge in an ever-evolving market landscape.",
    image: "../../images/slide1.jpg",
  },
  {
    id: 2,
    heading: "New Opportunities",
    title: "Turning Challenges Into Opportunities",
    subtitle:
      "We help businesses navigate uncertainties, optimize resources, and transform obstacles into stepping stones for success with strategic planning, risk management, and expert guidance to maximize growth potential.",
    image: "../../images/slide2.jpg",
  },
  {
    id: 3,
    heading: "Efficient Logistics",
    title: "Optimized Logistics for Maximum Efficiency",
    subtitle:
      "We provide cost-effective supply chain solutions, real-time tracking, and seamless distribution management to help businesses improve operational efficiency, reduce delays, and enhance customer satisfaction.",
    image: "../../images/slide3.jpg",
  },
];

const textContainerVariants = {
  visible: {
    transition: { staggerChildren: 0.2 }, // Staggered text animation
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 }, // Start from the right
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 10 },
  },
  exit: { opacity: 0, x: -50 }, // Exit to the left
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container2">
      <div className="hero-container rounded p-5 mt-1">
        {/* Background Image Transition */}
        <div className="hero-background">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
                opacity: index === currentIndex ? 1 : 0,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="hero-overlay"></div>

        {/* Text Animation with Staggered Effect */}
        <div className="hero-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentIndex].id}
              initial="hidden"
              animate="visible"
              exit="exit" // Now exits to the left
              variants={textContainerVariants}
              className="d-flex flex-column gap-4"
            >
              <motion.p
                className="hero-subtitle text-uppercase text-start muted"
                variants={textVariants}
              >
                {slides[currentIndex].heading}
              </motion.p>
              <motion.h1
                className="hero-title text-start"
                variants={textVariants}
              >
                {slides[currentIndex].title}
              </motion.h1>
              <motion.p
                className="hero-subtitle muted text-start"
                variants={textVariants}
              >
                {slides[currentIndex].subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;
