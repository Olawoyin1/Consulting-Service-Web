import React from "react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Staggers the animation of each child by 0.3s
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Data array for Mission, Vision, and Values
const missionData = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "We are committed to empowering businesses with innovative strategies and tailored solutions that drive growth, enhance efficiency, and ensure long-term success in today’s digital and competitive landscape.",
    image: "../../Images/mission.png",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "To be a leading consulting firm recognized for transforming businesses through strategic innovation, operational excellence, and cutting-edge digital solutions that create lasting impact.",
    image: "../../Images/motivation.png",
  },
  {
    id: 3,
    title: "Our Values",
    description:
      "We believe in innovation, integrity, and excellence. Our approach is built on transparency, professionalism, and a commitment to delivering high-quality solutions. We prioritize our clients' needs and business goals to drive impactful results.",
    image: "../../Images/benefits.png",
  },
];

const Mission = () => {
  return (
    <div className="pb-5">
      <div className="container2">
        <motion.div
          className="grid1"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Ensures animation runs once when at least 30% of the section is visible
        >
          {missionData.map((item) => (
            <motion.div
              key={item.id}
              className="mission-card d-flex flex-column align-items-center gap-3"
              variants={fadeUpVariant}
            >
              <div className="mission-header d-flex align-items-center justify-content-center">
                <img src={item.image} className="serv-image" alt={item.title} />
                <div className="number fw-bolder d-flex align-items-center justify-content-center">
                  {item.id}.
                </div>
              </div>
              <h4 className="fw-bolder">{item.title}</h4>
              <p className="text-center">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;
