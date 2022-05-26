import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Fittness Tracker Tagline', () => {
  render(<App />);
  const linkElement = screen.getByText(/The Revolution is Here./i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Quick Link element in footer', () => {
    render(<App />);
    const linkElement = screen.getByText(/Quick Links/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders About Us element in footer', () => {
    render(<App />);
    const linkElement = screen.getByText(/About Us/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Newsletter element in footer', () => {
    render(<App />);
    const linkElement = screen.getByText(/Newsletter/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Contact element in footer', () => {
    render(<App />);
    const linkElement = screen.getByText(/Contact/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Login element in Home', () => {
    render(<App />);
    const linkElement = screen.getByText(/Log In/i);
    expect(linkElement).toBeInTheDocument();
  });

