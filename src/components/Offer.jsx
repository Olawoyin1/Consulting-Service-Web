import React from "react";
import { motion } from "framer-motion";

const offers = [
    {
      id: 1,
      image: "../../Images/quality.png",
      name: "Business Strategy & Growth",
      icon: `<LuClipboardCheck />`,
      desc: "We provide expert guidance on business planning, market positioning, and strategic growth to help you scale effectively.",
    },
    {
      id: 2,
      image: "../../Images/quality.png",
      name: "Financial Advisory & Planning",
      icon: `<LuUserCheck />`,
      desc: "Our financial consultants offer budgeting, investment, and risk management strategies tailored to your business needs.",
    },
    {
      id: 3,
      image: "../../Images/quality.png",
      name: "Logistics & Supply Chain Management",
      icon: `<LuTruck />`,
      desc: "We optimize your supply chain, streamline operations, and ensure seamless logistics to improve efficiency and reduce costs.",
    },
    {
      id: 4,
      image: "../../Images/quality.png",
      name: "Marketing & Brand Strategy",
      icon: `<LuAlarmCheck />`,
      desc: "We craft result-driven marketing strategies, enhance brand visibility, and boost customer engagement for business growth.",
    },
    {
      id: 5,
      image: "../../Images/quality.png",
      name: "HR & Talent Management",
      icon: `<LuFlaskConical />`,
      desc: "We assist in recruiting top talent, employee training, and performance management to build a strong workforce.",
    },
    {
      id: 6,
      image: "../../Images/quality.png",
      name: "Digital Transformation & IT Solutions",
      icon: `<LuShoppingBag />`,
      desc: "We help businesses leverage technology, streamline processes, and implement digital tools for efficiency and innovation.",
    }
  ];
  
  
  


  

const Offer = () => {
  return (
    <div className="container2 mt-4">
        <div className="comp-header d-flex align-items-center justify-content-center flex-column text-center">
            <h4>What We Offer</h4>
            <p>We provide expert consulting solutions tailored to help businesses thrive, from strategic planning and financial advisory to digital transformation and brand development.</p>

        </div>
      <div className="">
        <div className="services-contents grid1 my-5">
          {offers.map((item, index) => (
            <motion.div
              key={item.id}
              className="service-card d-flex flex-column gap-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <div className="p-2 offer-image-box rounded">
                    <img src={item.image} className="serv-image" alt="" />
                </div>
                <h6 className="fw-bold hf mt-3">{item.name}</h6>
                <small className="muted">{item.desc}</small>
              
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
