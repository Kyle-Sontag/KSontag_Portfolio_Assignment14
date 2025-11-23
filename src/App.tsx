import React from 'react';
import './App.css';
import { BasicInfo } from './sections/BasicInfo';
import { Work } from './sections/Work';
import { Skills } from './sections/Skills';
import { Resources } from './sections/Resources';
import { DeveloperSetup } from './sections/DeveloperSetup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Portfolio - Kyle Sontag</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#resources">Resources</a>
          <a href="#setup">Setup</a>
        </nav>
      </header>

      <main className="portfolio-content">
        <div id="about">
          <BasicInfo />
        </div>

        <div id="work">
          <Work />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="resources">
          <Resources />
        </div>

        <div id="setup">
          <DeveloperSetup />
        </div>
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 Kyle Sontag. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
