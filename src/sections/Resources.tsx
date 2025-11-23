import React from 'react';
import { resources } from '../data/portfolioData';

export const Resources: React.FC = () => {
  return (
    <section className="resources">
      <h2>Helpful Resources</h2>
      <div className="resources-grid">
        {resources.map(resource => (
          <div key={resource.id} className="resource-card">
            <img
              src={resource.image}
              alt={resource.title}
              className="resource-icon"
            />
            <h3>{resource.title}</h3>
            <p>{resource.summary}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              Visit Resource →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
