import React from "react";
import "../App.css"; // Ensure your CSS file matches

const Services = ({ icon, title, description, link }) => {
  return (
    <div className="service-item">
      <div className="service-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} className="btn-ser">
          Learn More
        </a>
      )}
    </div>
  );
};

export default Services;
