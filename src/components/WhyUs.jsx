// import React from "react";

// const WhyUs = () => {
//     const whyChooseUs = [
//         {
//           id: 1,
//           image: "../../Images/quality.png",
//           name: "Proven Expertise",
//           desc: "With years of experience across various industries, we bring strategic insights and data-driven solutions to drive business success.",
//         },
//         {
//           id: 2,
//           image: "../../Images/quality.png",
//           name: "Tailored Solutions",
//           desc: "We understand that every business is unique. Our consulting services are customized to meet your specific needs and challenges.",
//         },
//         {
//           id: 3,
//           image: "../../Images/quality.png",
//           name: "Results-Driven Approach",
//           desc: "Our focus is on delivering measurable results, whether it's improving efficiency, increasing revenue, or scaling operations.",
//         },
//         {
//           id: 4,
//           image: "../../Images/quality.png",
//           name: "End-to-End Support",
//           desc: "From strategy development to implementation, we provide full support to ensure your business achieves sustainable growth.",
//         },
//         {
//           id: 5,
//           image: "../../Images/quality.png",
//           name: "Innovative Strategies",
//           desc: "We leverage the latest industry trends, technology, and best practices to keep your business ahead of the competition.",
//         },
//         {
//           id: 6,
//           image: "../../Images/quality.png",
//           name: "Client-Centric Approach",
//           desc: "Your success is our priority. We work closely with you to ensure solutions align with your vision and business objectives.",
//         }
//       ];

//   return (
//     <div className="container2">
//       <h2 className="text-center">Why Choose Us</h2>
//       <div className="grid2">
//         <div className="left">
//             {whyChooseUs.map((item) => (
//             <div key={item.id} className="why">
//                 <div className="why-card">
//                 <div className="why-card-image">
//                     <img src={item.image} alt={item.name} />
//                 </div>
//                 <div className="why-card-content">
//                     <h4 className="hf">{item.name}</h4>
//                     <p>{item.desc}</p>
//                 </div>
//                 </div>
//             </div>
//             ))}
//         </div>
//         <div className="middle"></div>
//         <div className="right"></div>

//         <div className="why-image"></div>
//       </div>
//     </div>
//   );
// };

// export default WhyUs;

import React from "react";

const WhyUs = () => {
  const whyChooseUs = [
    {
      id: 1,
      image: "../../Images/business.png",
      name: "Proven Expertise",
      desc: "With years of experience across various industries, we bring strategic insights and data-driven solutions to drive business success.",
    },
    {
      id: 2,
      image: "../../Images/solution.png",
      name: "Tailored Solutions",
      desc: "We understand that every business is unique. Our consulting services are customized to meet your specific needs and challenges.",
    },
    {
      id: 3,
      image: "../../Images/statistics.png",
      name: "Results-Driven Approach",
      desc: "Our focus is on delivering measurable results, whether it's improving efficiency, increasing revenue, or scaling operations.",
    },
    {
      id: 4,
      image: "../../Images/helping-hand.png",
      name: "End-to-End Support",
      desc: "From strategy development to implementation, we provide full support to ensure your business achieves sustainable growth.",
    },
    {
      id: 5,
      image: "../../Images/idea.png",
      name: "Innovative Strategies",
      desc: "We leverage the latest industry trends, technology, and best practices to keep your business ahead of the competition.",
    },
    {
      id: 6,
      image: "../../Images/consumer-centric.png",
      name: "Client-Centric Approach",
      desc: "Your success is our priority. We work closely with you to ensure solutions align with your vision and business objectives.",
    },
  ];

  return (
    <div className="why">
      <div className="container2 py-5">
        <div className="comp-header text-center d-flex flex-column align-items-center justify-content-center my-4">
          <h4 className="text-center">Why Choose Us</h4>
          <p>Empowering Businesses with Tailored Consulting Strategies</p>
        </div>
        <div className="grid2 my-4 mt-5 gap-4">
          {/* Left Side (First 3 Items) */}
          <div className="left d-flex flex-column gap-md-3 gap-4">
            {whyChooseUs.slice(0, 3).map((item) => (
              <div key={item.id} className="why">
                <div className="why-card  d-flex  gap-3">
                  <div className="why-card-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="why-card-content">
                    <h4 className="hf">{item.name}</h4>
                    <p className="mt-2">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Section for Spacing or Image */}
          <div className="middle d-none rounded overflow-hidden d-md-grid ">
            <div className="why-image">
              <img src="../../Images/slide1.jpg" alt="Why Us" />
            </div>
          </div>

          {/* Right Side (Last 3 Items) */}
          <div className="right d-flex flex-column gap-md-3 gap-4">
            {whyChooseUs.slice(3, 6).map((item) => (
              <div key={item.id} className="why ">
                <div className="why-card d-flex gap-3">
                  <div className="why-card-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="why-card-content">
                    <h4 className="hf">{item.name}</h4>
                    <p className="mt-2">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
