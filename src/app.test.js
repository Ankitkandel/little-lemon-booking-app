import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders booking form', () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/name/i);
  const dateInput = screen.getByLabelText(/date/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  expect(nameInput).toBeInTheDocument();
  expect(dateInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('allows user to fill and submit the form', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Ankit' } });
  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2025-06-20' } });

  const submitButton = screen.getByRole('button', { name: /submit/i });
  fireEvent.click(submitButton);

  // Replace this with actual feedback behavior if available
  // Example: expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument();
});
