import React from 'react';
import { skills } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-card">
        <p className="skills-description">{skills.description}</p>

        <div className="skills-section">
          <h3>Languages & Frameworks</h3>
          <div className="skills-list">
            {skills.languages.map((lang, index) => (
              <span key={index} className="skill-tag">{lang}</span>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3>Tools & Technologies</h3>
          <div className="skills-list">
            {skills.tools.map((tool, index) => (
              <span key={index} className="skill-tag">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};