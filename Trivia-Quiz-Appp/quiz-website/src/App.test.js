import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the first question', () => {
  const { getByText } = render(<App />);
  const questionText = getByText(/What year did the American Civil War begin?/i);
  expect(questionText).toBeInTheDocument();
});

test('selects the correct answer and advances to the next question', () => {
  const { getByText } = render(<App />);
  
  fireEvent.click(getByText(/1861/i));

  
  const nextQuestionText = getByText(/Who worte the book, "The Great Gatsby"?/i);
  expect(nextQuestionText).toBeInTheDocument();
});

test('displays the final score at the end of the quiz', () => {
  const { getByText } = render(<App />);
  // Answer all questions
  fireEvent.click(getByText(/1861/i));
  fireEvent.click(getByText(/F. Scott Fitzgerald/i));
  fireEvent.click(getByText(/Iron Man/i));
  fireEvent.click(getByText(/Au/i));
  fireEvent.click(getByText(/Nile/i));
  fireEvent.click(getByText(/William Shakespeare/i));
  fireEvent.click(getByText(/George Washington/i));
  fireEvent.click(getByText(/Basketball/i));
  fireEvent.click(getByText(/Vincent Van Gogh/i));
  fireEvent.click(getByText(/7/i));

  // Check if the final score is displayed
  const finalScoreText = getByText(/You scored 10 out of 10/i);
  expect(finalScoreText).toBeInTheDocument();
});
