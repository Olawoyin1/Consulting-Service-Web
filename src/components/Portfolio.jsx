import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { RiCheckLine } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";

const portfolio = [
  {
    title: "Boosting Financial Stability for an E-commerce Startup",
    service: "Finance Support",
    client: "John Doe",
    location: "Lagos, Nigeria",
    problem: "Cash flow issues causing supplier delays and stock shortages.",
    solution:
      "Automated invoicing, optimized budgeting, and better forecasting.",
    resultsArray: [
      "Reduced expenses by 30%.",
      "Increased revenue by 50%.",
      "Improved cash flow stability.",
    ],
    testimonial: "Thanks to the improvements, we scaled effortlessly!",
    category: "Finance",
  },

  {
    title: "Custom Web Development for a Retail Business",
    service: "Web Development",
    client: "Michael Brown",
    location: "London, UK",
    problem: "No online presence leading to low sales and limited reach.",
    solution: "Developed a responsive e-commerce site with secure payments.",
    resultsArray: [
      "Increased online sales by 80%.",
      "Expanded customer base by 120%.",
      "Boosted brand trust.",
    ],
    testimonial: "Our online store transformed our business!",
    category: "Web Development",
    website: "https://consultents.netlify.app",
  },
  {
    title: "Logistics Optimization for Faster Deliveries",
    service: "Logistics Support",
    client: "Jane Smith",
    location: "Abuja, Nigeria",
    problem: "Delivery delays causing customer complaints and lower retention.",
    solution:
      "Real-time tracking, route optimization, and streamlined processes.",
    resultsArray: [
      "Cut delivery times by 40%.",
      "Increased satisfaction by 60%.",
      "Grew repeat customers by 15%.",
    ],
    testimonial: "Faster deliveries made a huge difference for us!",
    category: "Logistics",
  },
  {
    title: "Scaling Distribution for an FMCG Brand",
    service: "Logistics Support",
    client: "Sarah Adams",
    location: "Kano, Nigeria",
    problem:
      "Limited distribution channels leading to missed sales opportunities.",
    solution: "Expanded partner networks and improved inventory forecasting.",
    resultsArray: [
      "Expanded market reach.",
      "Increased order fulfillment by 35%.",
      "Enhanced logistics efficiency.",
    ],
    testimonial: "Our brand is now more accessible across multiple regions!",
    category: "Logistics",
  },
  {
    title: "Social Media Growth for a Fashion Brand",
    service: "Social Media Marketing & Branding",
    client: "Emily Johnson",
    location: "New York, USA",
    problem: "Low engagement and weak sales from social media.",
    solution:
      "Revamped content, added influencer partnerships, and improved ad targeting.",
    resultsArray: [
      "Boosted engagement by 200%.",
      "Raised conversion rates by 35%.",
      "Expanded to 3 new markets.",
    ],
    testimonial: "More people see our brand, and our sales have skyrocketed!",
    category: "Social Media",
  },
  {
    title: "Brand Awareness for a Local Restaurant",
    service: "Social Media Marketing & Branding",
    client: "Tom Evans",
    location: "Cape Town, South Africa",
    problem: "Limited customer reach and poor online visibility.",
    solution: "Created viral campaigns and optimized local SEO strategies.",
    resultsArray: [
      "Doubled online reservations.",
      "Increased foot traffic.",
      "Improved brand recognition.",
    ],
    testimonial: "Now, people easily find and visit us!",
    category: "Social Media",
  },

  {
    title: "Corporate Website for a Consulting Firm",
    service: "Web Development",
    client: "Daniel Carter",
    location: "Toronto, Canada",
    problem:
      "Outdated website leading to low inquiries and credibility issues.",
    solution:
      "Redesigned UI, improved navigation, and added lead capture forms.",
    resultsArray: [
      "Doubled client inquiries.",
      "Increased session duration.",
      "Improved brand perception.",
    ],
    testimonial: "The new website attracts more leads and looks professional!",
    category: "Web Development",
    website: "https://consultents.netlify.app",
  },
  {
    title: "Improving Budgeting for a Tech Startup",
    service: "Finance Support",
    client: "David Wilson",
    location: "Accra, Ghana",
    problem: "Unstructured budget leading to overspending and missed targets.",
    solution:
      "Introduced financial planning tools and quarterly expense reviews.",
    resultsArray: [
      "Controlled spending and saved 25% on operational costs.",
      "Achieved financial targets.",
      "Improved financial planning efficiency.",
    ],
    testimonial: "Our finances are now more predictable and stable!",
    category: "Finance",
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Finance", "Logistics", "Social Media", "Web Development"];

  const filteredPortfolio =
    selectedCategory === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === selectedCategory);

  return (
    <div className="container2 py-5">
      <h1 className="text-center mb-4 hero-title">Portfolio</h1>
      
      {/* Category Buttons with Motion */}
      <div className="d-flex gap-2 justify-content-center mb-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`fw-bold cat-btn ${
              selectedCategory === category ? "btn-active" : "btn-outline-secondary"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <motion.div 
        className="grid2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {filteredPortfolio.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card with Hover Animation */}
              <motion.div 
                className="card h-100 d-flex flex-column gap-3 p-3"
                whileHover={{ scale: 1.03 }}
              >
                <h5 className="card-title fw-bolder">{item.title}</h5>
                <div className="port-det row">
                  <div className="d-flex col-6 gap-1">
                    <FiUser className="mt-1" />
                    <div>
                      <p>Client</p>
                      <p>{item.client}</p>
                    </div>
                  </div>
                  <div className="col-6 d-flex gap-1">
                    <SlLocationPin className="mt-1" />
                    <div>
                      <p>Location</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                </div>

                <h6 className="card-subtitle mb-2 text-muted">{item.service}</h6>
                <p className="card-text"><strong>Problem:</strong> {item.problem}</p>
                <p className="card-text"><strong>Solution:</strong> {item.solution}</p>
                
                <ul>
                  <p><strong>Results:</strong></p>
                  {item.resultsArray.map((result, i) => (
                    <li key={i} className="d-flex align-items-center gap-1">
                      <RiCheckLine />
                      {result}
                    </li>
                  ))}
                </ul>

                {item.category === "Web Development" && item.website && (
                  <p className="d-flex align-items-center gap-1">
                    <BsGlobe />
                    <strong>Website:</strong>{" "}
                    <a href={item.website} target="_blank" rel="noopener noreferrer">
                      {item.website}
                    </a>
                  </p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Portfolio;
