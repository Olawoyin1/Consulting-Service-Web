import React from 'react';

const Statistics = () => {

    const statisticsData = [
        { value: "10+", label: "Years of Business Operation" },
        { value: "50+", label: "Completed Projects" },
        { value: "40+", label: "Positive Client Experiences" },
        { value: "100%", label: "Client Satisfaction Rate" },
      ];
  return (
    <div className='statistics py-5 my-4 d-flex gap-5 flex-column text-white align-items-center justify-content-center'>
        <div className="comp-header mb-4 d-flex align-items-center justify-content-center flex-column text-center">
            <h4>Proven Track Record of Excellence</h4>
            <p>Our journey is defined by impactful projects, long-term partnerships, and measurable success. These numbers showcase the trust we've built over time.</p>

        </div>
      <div className="container2">
        <div className="grid7">
          {statisticsData.map((stat, index) => (
            <div key={index} className="stat">
              <h1 className='fw-bolder'>{stat.value}</h1>
              <h2 className='hf'>{stat.label}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
