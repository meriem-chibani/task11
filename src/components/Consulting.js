import React from 'react';
import '../App.css';
import consultingImage from '../img/about.png'; 

const Consulting = () => {
  return (
    <section className="consulting">
      <div className="consulting-content">
        <div className="consulting-text">
          <h2>Why our Consulting?</h2>
          <p>
            We provide tailored solutions to help your business succeed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button>Learn More</button>
        </div>
        <div className="consulting-image">
          <img src={consultingImage} alt="Consulting" />
        </div>
      </div>
    </section>
  );
};

export default Consulting;
