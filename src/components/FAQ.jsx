import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
    {
        id: 1,
        question: "What consulting services do you offer?",
        answer: "We provide expert guidance in business strategy, financial planning, logistics optimization, and social media management to help businesses grow and operate efficiently.",
    },
    {
        id: 2,
        question: "How can your financial support services help my business?",
        answer: "Our financial services include budgeting, investment strategies, financial forecasting, and securing funding to ensure financial stability and business expansion.",
    },
    {
        id: 3,
        question: "Do you provide logistics solutions for small businesses?",
        answer: "Yes, we offer customized logistics strategies, supply chain optimization, and operational efficiency solutions tailored to small and medium-sized businesses.",
    },
    {
        id: 4,
        question: "How can social media management benefit my brand?",
        answer: "We enhance brand visibility through content creation, targeted advertising, and engagement strategies to help you grow your audience and increase conversions.",
    },
    {
        id: 5,
        question: "How do I get started with your consulting services?",
        answer: "Simply reach out via our website or call us to schedule a free consultation. We'll assess your needs and recommend the best solutions for your business.",
    },
    {
        id: 6,
        question: "Do you offer tailored solutions for specific industries?",
        answer: "Yes, our consulting services are customized for various industries, including finance, e-commerce, logistics, and marketing, ensuring the best strategies for your business.",
    }
];

const FAQ = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const handleFaqToggle = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <motion.div 
            className='my-4 pb-5 faqq'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container2">
                {/* Header */}
                <motion.div 
                    className="comp-header text-center my-3 my-md-5"
                    initial={{ opacity: 0, y: -30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }} 
                    viewport={{ once: true }}
                >
                    <h4 className='fw-bolder'>FAQ</h4>
                    <small className="muted">Find answers to common questions about our consulting services.</small>
                </motion.div>


                <div className="equal-grid">
                    <div className="image d-none d-md-flex align-items-center justify-content-center">
                        <img src="../../Images/faq.png" alt="" />
                    </div>

                    {/* FAQ Section */}
                    <div className="faqs d-flex gap-2 flex-column">
                        {faqs.map((faq) => (
                            <motion.div
                                key={faq.id}
                                className="faq-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: faq.id * 0.05 }}
                            >
                                <div className="faq-head d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="num d-none d-md-flex fw-bold align-items-center justify-content-center">
                                            0{faq.id}
                                        </div>
                                        <h6 className="fw-bold faq-q">{faq.question}</h6>
                                    </div>
                                    <motion.button
                                        onClick={() => handleFaqToggle(faq.id)}
                                        className="faq-btn"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {openFAQ === faq.id ? <FiMinus size={18} /> : <FiPlus size={18} />}
                                    </motion.button>
                                </div>

                                {/* Smooth Expand/Collapse Animation */}
                                <AnimatePresence initial={false}>
                                    {openFAQ === faq.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="faq-answer"
                                        >
                                            <small className="muted">{faq.answer}</small>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default FAQ;
