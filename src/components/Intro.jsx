import React from "react";

const Intro = () => {
  return (
    <div className="my-4 py-5">
      <div className="container2">
        <div className="grid3">
          <div className="about-image">
            <img src="../../Images/about.jpg" loading="lazy" alt="" />
          </div>
          <div className="d-flex flex-column gap-3 align-items-start">
            <h6 className="hero-heading-text  fw-bolder">GET TO KNOW US</h6>
            <h4 className="hf">
              Discover who we are, what we stand for, and how we can help your
              business succeed.
            </h4>
    

            <p>
              At Consultents, we believe that success is built
              on strong partnerships, expert guidance, and innovative solutions.
              Our goal is to empower businesses with the right strategies,
              tools, and support to achieve long-term growth. We are more than
              just consultants—we are your strategic partners, committed to
              understanding your unique challenges and providing tailored
              solutions that drive measurable success. Whether it's financial
              planning, logistics management, or digital strategy, our team
              brings years of expertise to help your business thrive in a
              competitive market.By leveraging data-driven insights and industry best practices, we craft solutions that are both practical and scalable. Our client-focused approach ensures that every strategy we implement aligns with your vision, positioning your business for sustainable success.
            </p>
            {/* <button className="main-btn">More About Us</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
