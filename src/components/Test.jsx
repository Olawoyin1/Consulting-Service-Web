import React from "react";

const Test = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Get to Know Us</h2>
      <p className="text-center">
        Discover who we are, what we stand for, and how we can help your business succeed.
      </p>

      <div className="row mt-4">
        {/* Mission & Vision */}
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower businesses with strategic consulting solutions that drive efficiency, 
            innovation, and sustainable growth.
          </p>

          <h3>Our Vision</h3>
          <p>
            To be the leading consulting firm that transforms challenges into opportunities, 
            helping businesses achieve long-term success in an evolving global market.
          </p>
        </div>

        {/* Core Values */}
        <div className="col-md-6">
          <h3>Our Core Values</h3>
          <ul>
            <li><strong>🏆 Excellence:</strong> We strive for the highest standards in every project.</li>
            <li><strong>🤝 Integrity:</strong> Honesty and transparency guide all our interactions.</li>
            <li><strong>🚀 Innovation:</strong> We leverage data and technology to create smart business solutions.</li>
            <li><strong>💡 Customer-Centric:</strong> Your success is our priority.</li>
            <li><strong>📈 Results-Driven:</strong> We focus on measurable growth and tangible outcomes.</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="text-center">Why Choose Us?</h3>
          <p className="text-center">
            We combine industry expertise, innovation, and a customer-first approach to help businesses succeed.
          </p>
          <ul className="text-center list-unstyled">
            <li>✅ Expertise Across Industries</li>
            <li>✅ Customized Solutions</li>
            <li>✅ Data-Driven Decision Making</li>
            <li>✅ Commitment to Growth</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Test;
