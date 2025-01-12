import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

/**
 * This is a basic Jest + React Testing Library test.
 * It checks if our "learn react" text is somewhere in the rendered App.
 *
 * Note: If you've removed "learn react" text from your App,
 * this test might fail. You can either update the text or this test.
 */
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
