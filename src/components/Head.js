import React from "react";
import "../App.css";

const Head = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#pages">Pages</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#casestudy">Case Study</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#quote" className="btn-secondary">Get a Quote</a>
      </nav>

      <div className="hero">
        <h1>Big Opportunity <br />For Your Business</h1>
        <div className="buttons">
          <a href="#services" className="btn-primary">Our Services</a>
        </div>
      </div>

      
      <div className="header-arrows">
        <button className="arrow-left">&lt;</button>
        <button className="arrow-right">&gt;</button>
      </div>
    </header>
  );
};

export default Head;
