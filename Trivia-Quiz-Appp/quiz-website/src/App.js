import React, { useState } from 'react';

function App() {
  const [curr_qs, set_curr_q] = useState(0);
	const [Show_Score, setShow_Score] = useState(false);
	const [score, setScore] = useState(0);

	const questions = [
		{
			question: 'What year did the American Civil War begin?',
      image: 'https://assets.editorial.aetnd.com/uploads/2009/10/civil-war-gettyimages-3427284.jpg',
			options: [
				{ answer: '1861', isCorrect: true },
				{ answer: '1950', isCorrect: false },
				{ answer: '1650', isCorrect: false },
				{ answer: '1862', isCorrect: false },
			],
		},
		{
			question: 'Who worte the book, "The Great Gatsby"? ',
      image: 'https://m.media-amazon.com/images/M/MV5BOTM3ZGJiYzgtMmYwMi00NzU1LWJkNmItYWE5ZDhiMjJmN2RhXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_FMjpg_UX1000_.jpg',
			options: [
				{ answer: 'Rosa Parks', isCorrect: false },
				{ answer: 'F. Scott Fitzgerald', isCorrect: true },
				{ answer: 'Barak Obama', isCorrect: false },
				{ answer: 'Donald Trump', isCorrect: false },
			],
		},
		{
			question: 'Who died in Avengers: End Game',
      image: 'https://ew.com/thmb/3M-ERlX8R_YEcEm8Yk-po7isQ7E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avengersendgame5cd9fa91978f5-2000-b4a183c33e6c404da69e57afbd39ea2b.jpg',
			options: [
				{ answer: 'The Hulk', isCorrect: false },
				{ answer: 'Spider-Man', isCorrect: false },
				{ answer: 'Harry Potter', isCorrect: false },
				{ answer: 'Iron Man', isCorrect: true },
			],
		},
		{
			question: 'What is the chemical symbol for Gold?',
      image: 'https://www.thoughtco.com/thmb/QjFYmqeC_tsWT2bsXHP0WC8gwrA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/closeup-of-big-gold-nugget-511603038-5ad92a97fa6bcc00362b919b.jpg',
			options: [
				{ answer: 'Au', isCorrect: true },
				{ answer: 'Ae', isCorrect: false },
				{ answer: 'Fg', isCorrect: false },
				{ answer: 'Hg', isCorrect: false },
			],
		},
		{
			question: "What river is the longest in the world?",
      image: 'https://images.nationalgeographic.org/image/upload/v1638889941/EducationHub/photos/blue-nile.jpg',
			options: [
			  { answer: "Amazon", isCorrect: false },
			  { answer: "Nile", isCorrect: true },
			  { answer: "Yangtze", isCorrect: false },
			  { answer: "Mississippi", isCorrect: false },
			],
		  },
		  {
			question: "Who wrote 'Romeo and Juliet'?",
      image: 'https://www.seattleshakespeare.org/wp-content/uploads/2019/02/Wooden-O-square-_Romeo-Juliet_-scaled.jpg',
			options: [
			  { answer: "Abraham Lincoln", isCorrect: false },
			  { answer: "William Shakespeare", isCorrect: true },
			  { answer: "Lebron James", isCorrect: false },
			  { answer: "Danny Devito", isCorrect: false },
			],
		  },
		  {
			question: "Who was the first President of the United States?",
      image: 'https://cdn1.edgedatg.com/aws/v2/abc/JudgeSteveHarvey/person/3894227/57d216d54c46ff03518232e2be52d150/579x579-Q90_57d216d54c46ff03518232e2be52d150.jpg',
			options: [
			  { answer: "George Washington", isCorrect: true },
			  { answer: "John Adams", isCorrect: false },
			  { answer: "Steve Harvey", isCorrect: false },
			  { answer: "Thomas Jefferson", isCorrect: false },
			],
		  },
		  {
			question: "In which sport would you perform a slam dunk?",
      image: 'https://media.npr.org/assets/img/2020/06/10/gettyimages-200199027-001-b5fb3d8d8469ab744d9e97706fa67bc5c0e4fa40-s1100-c50.jpg',
			options: [
			  { answer: "Soccer", isCorrect: false },
			  { answer: "Golf", isCorrect: false },
			  { answer: "Tennis", isCorrect: false },
			  { answer: "Basketball", isCorrect: true },
			],
		  },
		  {
			question: "Who painted the famous artwork 'Starry Night'?",
      image: 'https://miro.medium.com/v2/resize:fit:1024/0*RQp7rf-rTOODM_FY.jpg',
			options: [
			  { answer: "Pablo Picasso", isCorrect: false },
			  { answer: "Leonardo da Vinci", isCorrect: false },
			  { answer: "Vincent Van Gogh", isCorrect: true },
			  { answer: "Michelangelo", isCorrect: false },
			],
		  },
		  {
			question: "What is the square root of 49?",
      image: 'https://i.pinimg.com/originals/0d/95/97/0d9597e638fbfda7e7d6ca491b01092c.jpg',
			options: [
			  { answer: "6", isCorrect: false },
			  { answer: "7", isCorrect: true },
			  { answer: "8", isCorrect: false },
			  { answer: "9", isCorrect: false },
			],
		  },
	];

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = curr_qs + 1;
		if (nextQuestion < questions.length) {
			set_curr_q(nextQuestion);
		} else {
			setShow_Score(true);
		}
	};

	return (
		<div className='app'>
			{Show_Score ? (
				<div className='score-section'>
					You scored {score} out of {questions.length} !!
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {curr_qs + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[curr_qs].image && (
            <img
              src={questions[curr_qs].image}
              alt={`Question ${curr_qs + 1}`}
              className="question-image"
            />
          )}
          {questions[curr_qs].question}
        </div>
      </div>
					<div className='answer-section'>
						{questions[curr_qs].options.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answer}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
