import React from 'react';
import { basicInfo } from '../data/portfolioData';

export const BasicInfo: React.FC = () => {
  return (
    <section className="basic-info">
      <h2>About Me</h2>
      <div className="basic-info-card">
        <div className="basic-info-content">
          <img
            src={basicInfo.photo}
            alt={basicInfo.name}
            className="profile-photo"
          />
          <div className="basic-info-text">
            <h3>{basicInfo.name}</h3>
            <p className="title">{basicInfo.title}</p>
            <p className="bio">{basicInfo.bio}</p>
            <div className="contact-links">
              <a
                href={basicInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
