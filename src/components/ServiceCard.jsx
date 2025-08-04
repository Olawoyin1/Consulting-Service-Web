import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    image: "../../Images/services3.jpg",
    name: "Structural Design and Documentation",
    icon: `<LuPaintBucket />`,
    desc: "We transform spaces into aesthetically pleasing and functional environments with expert interior design solutions tailored to your style and needs.",
  },
  {
    id: 2,
    image: "../../Images/services2.jpg",
    name: "Structural Space Planning and Design",
    icon: `<LuBrush />`,
    desc: "Our professional tiling and painting services enhance the beauty and durability of your walls and floors with high-quality materials and finishes.",
  },
  {
    id: 3,
    image: "../../Images/services1.jpg",
    name: "Design and Build",
    icon: `<LuBuilding />`,
    desc: "From concept to blueprint, our architectural services ensure innovative, sustainable, and structurally sound designs for all types of buildings.",
  },
  {
    id: 4,
    image: "../../Images/services4.jpg",
    name: "Master Planning",
    icon: `<LuBriefcase />`,
    desc: "We oversee every aspect of your construction project, ensuring timely completion, cost control, and adherence to quality standards.",
  },
  {
    id: 5,
    image: "../../Images/service1.jpg",
    name: "Site Selection and Planning",
    icon: `<LuHammer />`,
    desc: "Our design-build approach streamlines the construction process by integrating design and execution under a single contract for efficiency and accountability.",
  },
  {
    id: 6,
    image: "../../Images/services2.jpg",
    name: "Project Management",
    icon: `<LuClipboardList />`,
    desc: "We provide detailed project planning services, ensuring that every phase of construction is strategically mapped out for efficiency and success.",
  },
  {
    id: 7,
    image: "../../Images/services1.jpg",
    name: "Facility Management",
    icon: `<LuDollarSign />`,
    desc: "Our budget planning services help you manage costs effectively while ensuring quality construction without unexpected expenses.",
  },
  {
    id: 8,
    image: "../../Images/services4.jpg",
    name: "Space Fit-Out",
    icon: `<LuMountain />`,
    desc: "We handle land clearing, excavation, and site preparation to create a solid foundation for construction projects of all scales.",
  },
  {
    id: 9,
    image: "../../Images/services3.jpg",
    name: "Construction Administration",
    icon: `<LuRuler />`,
    desc: "Our structural engineering expertise ensures that your building is safe, durable, and capable of withstanding environmental factors and load requirements.",
  },
  {
    id: 10,
    image: "../../Images/project-6.jpg",
    name: "Furniture Design and Procurement",
    icon: `<LuRuler />`,
    desc: "Our structural engineering expertise ensures that your building is safe, durable, and capable of withstanding environmental factors and load requirements.",
  },
  {
    id: 11,
    image: "../../Images/project-5.jpg",
    name: "Materials Procurement",
    icon: `<LuRuler />`,
    desc: "Our structural engineering expertise ensures that your building is safe, durable, and capable of withstanding environmental factors and load requirements.",
  },
  {
    id: 12,
    image: "../../Images/project-4.jpg",
    name: "Refurbishments",
    icon: `<LuRuler />`,
    desc: "Our structural engineering expertise ensures that your building is safe, durable, and capable of withstanding environmental factors and load requirements.",
  },
  {
    id: 13,
    image: "../../Images/project-3.jpg",
    name: "Renovation",
    icon: `<LuRuler />`,
    desc: "Our structural engineering expertise ensures that your building is safe, durable, and capable of withstanding environmental factors and load requirements.",
  },
  {
    id: 14,
    image: "../../Images/painting.jpg",
    name: "Painting and Wall Finishes",
    icon: `<LuPaintBucket />`,
    desc: "Professional interior and exterior painting with high-quality finishes that protect and beautify your property.",
  },
  {
    id: 15,
    image: "../../Images/roofing.jpg",
    name: "Roofing and Waterproofing",
    icon: `<LuMountain />`,
    desc: "Installation and maintenance of durable roofs with effective waterproofing solutions to prevent leaks and extend lifespan.",
  },
  {
    id: 16,
    image: "../../Images/interior.jpg",
    name: "Interior Decorations",
    icon: `<LuBrush />`,
    desc: "We create captivating interior spaces with customized decor, elegant finishes, and stylish accessories that reflect your unique taste and enhance comfort.",
  },
];

const ServiceCard = () => {
  return (
    <div className="container2 mt-4">
      <div className="mt-4">
        <div className="services-contents grid2 my-5">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              className="service-card d-flex flex-column"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="service-card-image">
                <img src={item.image} alt="" />
              </div>
              <div className="grid2-content p-3 d-flex flex-column gap-2">
                <h6 className="fw-bold">{item.name}</h6>
                <small className="muted">{item.desc}</small>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
