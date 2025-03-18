import React from "react";

const Intro = () => {
  return (
    <div>
      <div className="container2">
        <div className="row">
          <div className="col-5">
            <img src="../../Images/slide2.jpg" alt="" />
          </div>
          <div className="col-7">
            <p>GET TO KNOW US</p>
            <h4 className="hf">
              Discover who we are, what we stand for, and how we can help your
              business succeed.
            </h4>
            <ul>
                <li>History</li>
                <li>Mission</li>
                <li>Vission</li>
            </ul>

            <p>At [Your Consulting Firm Name], we believe that success is built on strong partnerships, expert guidance, and innovative solutions. Our goal is to empower businesses with the right strategies, tools, and support to achieve long-term growth.

We are more than just consultants—we are your strategic partners, committed to understanding your unique challenges and providing tailored solutions that drive measurable success. Whether it's financial planning, logistics management, or digital strategy, our team brings years of expertise to help your business thrive in a competitive market.</p>
<button>More About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
