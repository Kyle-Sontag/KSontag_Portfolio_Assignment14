import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Portfolio - Kyle Sontag/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  const aboutElement = screen.getByText(/About Me/i);
  expect(aboutElement).toBeInTheDocument();
});
