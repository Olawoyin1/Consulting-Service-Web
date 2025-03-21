import React from "react";
import { GoVerified } from "react-icons/go";

const ServiceCard = () => {



    const services = [
        {
          name: "Training & Development",
          description:
            "We offer expert-led training programs designed to enhance skills, improve performance, and drive business growth.",
          icon: "../../Images/development.png",
          serviceList: [
            { text: "Corporate training tailored to your business needs." },
            { text: "Professional development workshops for employees." },
            { text: "Soft skills and leadership training programs." },
            { text: "Customized e-learning solutions for remote teams." },
          ],
        },
        {
          name: "Project Management",
          description:
            "We help businesses streamline project execution, ensuring efficiency, productivity, and goal achievement.",
          icon: "../../Images/management.png",
          serviceList: [
            {text: "Project planning and execution strategies." },
            {text: "Agile and Scrum project methodologies." },
            {text: "Resource allocation and risk management." },
            {text: "Project monitoring, evaluation, and reporting." },
          ],
        },
        {
          name: "Financial Consulting",
          description:
            "We provide financial strategies and advisory services to help businesses achieve stability and growth.",
          icon: "../../Images/messenger.png",
          serviceList: [
            { text: "Business budgeting and financial planning." },
            { text: "Investment strategies for sustainable growth." },
            { text: "Risk assessment and mitigation planning." },
            { text: "Tax advisory and compliance solutions." },
          ],
        },
        {
          name: "Logistics & Supply Chain",
          description:
            "Streamline your operations with our end-to-end logistics and supply chain management solutions.",
          icon: "../../Images/supply-chain.png",
          serviceList: [
            {  text: "Efficient supply chain optimization services." },
            {  text: "Inventory and warehouse management solutions." },
            {  text: "Last-mile delivery and distribution strategies." },
            {  text: "Custom logistics consulting for businesses." },
          ],
        },
        {
          name: "Social Media Management",
          description:
            "We help brands build their online presence, engage their audience, and drive growth through social media marketing.",
          icon: "../../Images/bullhorn.png",
          serviceList: [
            {text: "Content creation and strategy development." },
            {text: "Community management and audience engagement." },
            {text: "Social media advertising and campaign optimization." },
            {text: "Performance analytics and reporting." },
          ],
        },
        {
          name: "Career Development",
          description:
            "We provide career coaching and professional development to help individuals reach their full potential.",
          icon: "../../Images/goal.png",
          serviceList: [
            {text: "Personalized career coaching and mentorship." },
            {text: "Resume and LinkedIn profile optimization." },
            {text: "Job search strategies and interview preparation." },
            {text: "Skill development and career transition support." },
          ],
        },
        {
          name: "Business Strategy & Consulting",
          description:
            "We help businesses develop strategic plans that drive sustainable growth and competitive advantage.",
          icon: "../../Images/developing.png",
          serviceList: [
            {text: "Market research and industry analysis." },
            {text: "Business model innovation and optimization." },
            {text: "Strategic growth planning and execution." },
            {text: "Competitive positioning strategies." },
          ],
        },
        {
          name: "Legal & Compliance Consulting",
          description:
            "Ensure your business operates within legal frameworks with our compliance solutions.",
          icon: "../../Images/legal.png",
          serviceList: [
            {text: "Regulatory compliance and risk management." },
            {text: "Contract drafting and legal advisory." },
            {text: "Business incorporation and licensing." },
            {text: "Intellectual property protection." },
          ],
        },
        {
          name: "Human Resource Consulting",
          description:
            "Optimize your workforce and improve employee experience with our HR solutions.",
          icon: "../../Images/recruitment.png",
          serviceList: [
            {text: "Talent acquisition and recruitment services." },
            {text: "Employee engagement and retention strategies." },
            {text: "HR policy development and compliance." },
            {text: "Performance management solutions." },
          ],
        },
      ];
      
      
  return (
    <div className="container2 my-5">
      <div className="grid4">
        {services.map((service, index) => (
          <div key={index} className="service-card d-flex flex-column gap-4">
            <div className="serv-header d-flex align-items-center justify-content-between ">
              <h4 className="fw-bolder hf serv-card-header">{service.name}</h4>
              {/* <span className="line"></span> */}
              <div className="img-box rounded d-flex justify-content-end">
                <img src={service.icon} className="s-image" alt={service.name} />
              </div>
            </div>

            <div className="serv-info">
              <p>{service.description}</p>
            </div>

            <div className="serv-details d-flex flex-column gap-3">
              {service.serviceList.map((item, idx) => (
                <li key={idx} className="d-flex align-items-center gap-2">
                    <GoVerified />  
                  <p>{item.text}</p>
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
