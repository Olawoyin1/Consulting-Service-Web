import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const Statistics = () => {
  const statisticsData = [
    { value: 10, suffix: "+", label: "Years of Business Operation" },
    { value: 50, suffix: "+", label: "Completed Projects" },
    { value: 40, suffix: "+", label: "Positive Client Experiences" },
    { value: 100, suffix: "%", label: "Client Satisfaction Rate" },
  ];

  return (
    <motion.div
      className="statistics py-5 d-flex gap-5 flex-column text-white align-items-center justify-content-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="comp-header mb-4 d-flex align-items-center justify-content-center flex-column text-center">
        <h4>Proven Track Record of Excellence</h4>
        <p>
          Our journey is defined by impactful projects, long-term partnerships,
          and measurable success. These numbers showcase the trust we've built
          over time.
        </p>
      </div>

      <div className="container2">
        <motion.div
          className="grid7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.5 },
            },
          }}
        >
          {statisticsData.map((stat, index) => (
            <motion.div
              key={index}
              className="stat"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} delay={1000} />
              <h2 className="hf">{stat.label}</h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Animated Number Component with Delay
const AnimatedNumber = ({ value, suffix, delay }) => {
  const [count, setCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setStartCounting(true);
      }, delay);
    }
  }, [isInView, delay]);

  useEffect(() => {
    if (startCounting) {
      let start = 0;
      const duration = 2000; // 2 seconds animation
      const intervalTime = 50;
      const steps = duration / intervalTime;
      const increment = value / steps;

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          clearInterval(counter);
          setCount(value); // Set final value
        } else {
          setCount(Math.ceil(start));
        }
      }, intervalTime);

      return () => clearInterval(counter);
    }
  }, [startCounting, value]);

  return (
    <motion.h1 className="fw-bolder" ref={ref}>
      {count}
      {suffix}
    </motion.h1>
  );
};

export default Statistics;
