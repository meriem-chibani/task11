import React from 'react';
import '../App.css'; 

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-icon">
            <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-bleu.png" alt="Team Members Icon" />
          </div>
          <h3 className="stat-number">200+</h3>
          <p className="stat-label">Team Members</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <img src="https://cdn-icons-png.freepik.com/256/11198/11198213.png?semt=ais_hybrid" alt="Business Success Icon" />
          </div>
          <h3 className="stat-number">97%</h3>
          <p className="stat-label">Business Success</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <img src="https://www.freeiconspng.com/uploads/love-heart-icon-14.png" alt="Happy Clients Icon" />
          </div>
          <h3 className="stat-number">5628</h3>
          <p className="stat-label">Happy Clients</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <img src="https://static.thenounproject.com/png/4022563-200.png" alt="Business Done Icon" />
          </div>
          <h3 className="stat-number">5637</h3>
          <p className="stat-label">Business Done</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
