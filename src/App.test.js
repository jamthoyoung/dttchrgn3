import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Roller text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Roller/i);
  expect(linkElement).toBeInTheDocument();
});
