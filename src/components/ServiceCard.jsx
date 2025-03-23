import React from "react";
import { GoVerified } from "react-icons/go";

const ServiceCard = () => {

      const services = [
        {
          name: "Digital Marketing & Social Media Management",
          description:
            "We help businesses build strong digital brands, engage audiences, and drive results with data-driven marketing strategies.",
          icon: "../../Images/bullhorn.png",
          serviceList: [
            { text: "Social Media Strategy & Management (Facebook, Instagram, LinkedIn, TikTok, etc.)" },
            { text: "Content Creation (Graphics, Video, Copywriting)" },
            { text: "Paid Advertising (Google Ads, Facebook & Instagram Ads, LinkedIn Ads)" },
            { text: "Social Media Analytics & Performance Optimization" },
            { text: "Email Marketing Campaigns" },
            { text: "Branding & Identity Development" },
          ],
        },
        {
          name: "Website Development & Online Presence",
          description:
            "We create high-performing websites and online stores optimized for visibility, engagement, and conversions.",
          icon: "../../Images/coding.png",
          serviceList: [
            { text: "Custom Website Design & Development (WordPress, Shopify, Wix, etc.)" },
            { text: "E-commerce Store Setup & Management" },
            { text: "Search Engine Optimization (SEO)" },
            { text: "Website Maintenance & Security" },
            { text: "Website Performance Audits & Enhancements" },
            { text: "Google Business Profile Optimization" },
          ],
        },
        {
          name: "Finance, Accounting & Tax Support",
          description:
            "We provide expert financial solutions to help businesses maintain compliance, optimize cash flow, and maximize profitability.",
          icon: "../../Images/finance.png",
          serviceList: [
            { text: "Bookkeeping & Financial Reporting" },
            { text: "Business Budgeting & Forecasting" },
            { text: "Tax Preparation & Compliance" },
            { text: "Payroll Processing & Management" },
            { text: "Business Credit & Loan Consultation" },
            { text: "Financial Strategy & Advisory" },
          ],
        },
        {
          name: "Logistics & Supply Chain Support",
          description:
            "We streamline logistics and supply chain operations to ensure efficiency, cost-effectiveness, and seamless distribution.",
          icon: "../../Images/supply-chain.png",
          serviceList: [
            { text: "Inventory Management Solutions" },
            { text: "Order Fulfillment & Dropshipping Support" },
            { text: "Vendor & Supplier Coordination" },
            { text: "Logistics Cost Optimization" },
            { text: "Shipping & Distribution Strategy" },
            { text: "Process Automation for Supply Chain Efficiency" },
          ],
        },
        {
          name: "Operations & Process Improvement",
          description:
            "We optimize business processes to improve efficiency, productivity, and overall operational effectiveness.",
          icon: "../../Images/goal.png",
          serviceList: [
            { text: "Business Process Audits & Optimization" },
            { text: "SOP (Standard Operating Procedure) Development" },
            { text: "Productivity & Efficiency Consulting" },
            { text: "CRM & Business Tool Integration" },
            { text: "Workflow Automation & AI Implementation" },
            { text: "Employee Training & Development" },
          ],
        },
        {
          name: "Business Strategy & Growth Consulting",
          description:
            "We provide expert guidance to help businesses develop strategies for sustainable growth and market expansion.",
          icon: "../../Images/strategy.png",
          serviceList: [
            { text: "Business Model Development & Refinement" },
            { text: "Competitive Market Research & Analysis" },
            { text: "Business Plan Writing & Pitch Deck Development" },
            { text: "Funding & Investment Readiness Consulting" },
            { text: "Expansion & Scaling Strategies" },
            { text: "Customer Experience Enhancement" },
          ],
        },
        {
          name: "Funding Applications & Business Grants",
          description:
            "We assist businesses in securing funding through strategic grant applications, loan processing, and investor readiness.",
          icon: "../../Images/grant.png",
          serviceList: [
            { text: "Business Grant Research & Eligibility Assessment" },
            { text: "Writing & Submitting Grant Applications" },
            { text: "Small Business Loan Applications & Documentation Support" },
            { text: "Investor Pitch Deck Development" },
            { text: "Crowdfunding Campaign Strategy & Execution" },
            { text: "Government & Private Sector Funding Advisory" },
          ],
        },
      ];
      
      
      
      
  return (
    <div className="services bg-white py-5">
      <div className="container2  ">
          <div className="comp-header mb-4 d-flex align-items-center justify-content-center flex-column text-center">
              <h4>What We Offer</h4>
              <p>We provide expert consulting solutions tailored to help businesses thrive, from strategic planning and financial advisory to digital transformation and brand development.</p>

          </div>
        <div className="grid4">
          {services.map((service, index) => (
            <div key={index} className="service-card d-flex flex-column gap-4">
              <div className="serv-header d-flex align-items-center justify-content-between ">
                <h4 className="fw-bolder hf serv-card-header">{service.name}</h4>
                {/* <span className="line"></span> */}
                <div className="img-box bg-white rounded d-flex justify-content-end">
                  <img src={service.icon} className="s-image" alt={service.name} />
                </div>
              </div>

              <div className="serv-info">
                <p>{service.description}</p>
              </div>

              <div className="serv-details d-flex flex-column gap-3">
                {service.serviceList.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-center gap-2">
                      <GoVerified  className="icon"/>  
                    <p>{item.text}</p>
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
