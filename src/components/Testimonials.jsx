import React from "react";
import  { Component } from "react";
import Slider from "react-slick";


const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        arrows: false,
        draggable: true, // Enables dragging
        swipeToSlide: true, // Allows smooth swipe transitions
        touchThreshold: 10, // Adjusts touch sensitivity
        responsive: [
          {
            breakpoint: 1024, // Tablets
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768, // Mobile landscape
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 480, // Mobile portrait
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };
      
      


// Testimonials Data
const testimonialData = [
    {
      name: "Olawoyin Gbolahan",
      role: "CEO, GrowthEdge Solutions",
      image: "../../Images/t-10.jpg",
      feedback:
        "The team's expertise in digital marketing and business strategy transformed our online presence, increasing our revenue by 60% in just six months.",
    },
    {
      name: "Williams Jones",
      role: "Founder, Elite Logistics",
      image: "../../Images/t-11.jpg",
      feedback:
        "Their logistics and supply chain optimization helped us cut costs and streamline operations, making deliveries 30% faster and more efficient.",
    },
    {
      name: "James Barkley",
      role: "Managing Director, FinTrust Accounting",
      image: "../../Images/t-12.jpg",
      feedback:
        "Thanks to their financial advisory services, we secured the right funding for our expansion. Their bookkeeping solutions also saved us valuable time and effort.",
    },
    {
      name: "Fatima Hassan",
      role: "E-commerce Entrepreneur",
      image: "../../Images/t-13.jpg",
      feedback:
        "With their web development and SEO services, my online store's traffic tripled in just four months. Now, I attract customers from all over the country!",
    },
    {
      name: "David Johnson",
      role: "Marketing Director, BrandMax Agency",
      image: "../../Images/t-13.jpg",
      feedback:
        "Their social media strategy and content marketing helped us engage our audience better and improve lead conversions by 45% within three months.",
    },
    {
      name: "Moses Dan",
      role: "Owner, Obi Logistics",
      image: "../../Images/t-10.jpg",
      feedback:
        "They introduced AI-driven automation into our supply chain, reducing manual work and cutting errors by 50%. It was a game-changer for our operations!",
    },
    {
      name: "Kelvin Adebayo",
      role: "Startup Founder",
      image: "../../Images/t-11.jpg",
      feedback:
        "Their business model consulting and funding application support helped us secure investors and scale our startup effectively in a highly competitive industry.",
    },
    {
      name: "Sarah Williams",
      role: "HR Manager, VisionTech Ltd",
      image: "../../Images/t-12.jpg",
      feedback:
        "Thanks to their workflow automation strategies, our internal processes are now 40% more efficient, allowing our team to focus on core business growth.",
    },
  ];


  return (
    <div className="pt-5">
      {/* Section Header */}
      <div className="comp-header d-flex align-items-center justify-content-center flex-column text-center">
        <h4>What Our Clients Say</h4>
        <p>
          Discover how our consulting services have helped businesses optimize operations, enhance their online presence, and achieve sustainable growth.
        </p>
      </div>

      {/* Testimonials */}
      <div className="testimonials slider-container  py-5">

      <Slider {...settings}>


        {testimonialData.map((testimonial, index) => (
          <div key={index} className="testimonial-card bg-white service-card  d-flex flex-column gap-2">
            {/* User Info */}
            <div className="test-header d-flex align-items-center gap-2">
              <div className="test-user-image overflow-hidden">
                <img src={testimonial.image} className="test-user" alt={testimonial.name} />
              </div>
              <div className="details d-flex flex-column">
                <h5 className="hf">{testimonial.name}</h5>
                <p>{testimonial.role}</p>
              </div>
            </div>
            {/* Feedback Content */}
            <div className="test-content">
              <p>{testimonial.feedback}</p>
            </div>
          </div>
        ))}

</Slider>
      </div>
    </div>
  );
};



export default Testimonials;
