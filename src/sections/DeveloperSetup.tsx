import React from 'react';
import { developerSetup } from '../data/portfolioData';

export const DeveloperSetup: React.FC = () => {
  return (
    <section className="developer-setup">
      <h2>Developer Setup</h2>

      <div className="setup-card">
        <h3>VS Code Extensions</h3>
        <ul>
          {developerSetup.vscode.map((ext, index) => (
            <li key={index}>{ext}</li>
          ))}
        </ul>
      </div>

      <div className="setup-card">
        <h3>Terminal</h3>
        <p>{developerSetup.terminal}</p>
      </div>
    </section>
  );
};
