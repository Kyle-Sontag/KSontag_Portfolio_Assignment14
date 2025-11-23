import React from 'react';
import { workItems } from '../data/portfolioData';

export const Work: React.FC = () => {
  return (
    <section className="work">
      <h2>My Work</h2>
      <div className="work-grid">
        {workItems.map(item => (
          <div key={item.id} className="work-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tech-list">
              {item.techList.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
