import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders closed zoo button', () => {
  render(<App />);
  const closedZooButton = screen.getByText(/Closed/i);
  expect(closedZooButton).toBeInTheDocument();
  fireEvent.click(closedZooButton);
});

test('renders camel button', () => {
  render(<App />);
  const camelButton = screen.getByText(/Camel/i);
  expect(camelButton).toBeInTheDocument();
  fireEvent.click(camelButton);
});