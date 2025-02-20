import React from "react";
import "../styles/FAQ.css";

const Faq = () => {
  return (
    <section className="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>What is AI-PAMSCO?</h3>
        <p>AI-PAMSCO is a platform that connects buyers and sellers for seamless transactions in agricultural products.</p>
      </div>
      <div className="faq-item">
        <h3>How can I sell my products?</h3>
        <p>Simply sign up as a seller, list your products, and connect with buyers across the region.</p>
      </div>
      <div className="faq-item">
        <h3>Is there a transport option available?</h3>
        <p>Yes, we provide transport services for your convenience. Costs are calculated based on the distance.</p>
      </div>
    </section>
  );
};

export default Faq;
