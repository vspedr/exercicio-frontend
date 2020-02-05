import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/victor pedrazzi/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders footer', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/made with/i);
  expect(headingElement).toBeInTheDocument();
});
