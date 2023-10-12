import React, { useState } from 'react';
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['New York', 'Paris', 'London'],
    correctAnswer: 'Paris',
  },
  // Add more questions as needed
];

function QuizModal() {
  const [showModal, setShowModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(''));
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setCurrentQuestion(0); // Reset the quiz when opening the modal
    setUserAnswers(Array(quizData.length).fill(''));
    setScore(0);
    setIsQuizCompleted(false);
  };

  const closeModal = () => setShowModal(false);

  const handleAnswerSelection = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate the score
      let totalScore = 0;
      for (let i = 0; i < quizData.length; i++) {
        if (userAnswers[i] === quizData[i].correctAnswer) {
          totalScore++;
        }
      }
      setScore(totalScore);
      setIsQuizCompleted(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., send data to a server or generate a certificate)
  };

  return (
    <div>
        <div className="quiz-container bg-blue p-3 mt-3">
            <div className="row d-flex align-items-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <p className='card-heading text-900'>
                  Here Test Your Skills Take This Simple Quiz and Get Free Certificate.
                  </p>
                </div>
                <div className="col12 col-md-4 col-lg-4 text-lg-end text-center ">
                    <button className="btn-main" onClick={openModal}>Start Quiz <i class="bi bi-chevron-double-right"></i></button>
                </div>
            </div>
        </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isQuizCompleted ? (
            <div>
              <h3>Question {currentQuestion + 1}:</h3>
              <p>{quizData[currentQuestion].question}</p>
              <Form>
                {quizData[currentQuestion].options.map((option, index) => (
                  <Form.Check
                    type="radio"
                    name="quizOption"
                    key={index}
                    label={option}
                    onChange={() => handleAnswerSelection(option)}
                    checked={userAnswers[currentQuestion] === option}
                  />
                ))}
              </Form>
              <Button variant="primary" onClick={handleNextQuestion}>
                Next
              </Button>
            </div>
          ) : (
            <div>
              <h3>Wow 👍,, you completed your Quiz. Download your Free Certificate</h3>
              <p>Your Score: {score} out of {quizData.length}</p>
              <Form onSubmit={handleFormSubmit}>
              <Form.Group className='mt-2'>
       <FloatingLabel controlId="floatingInputGrid" label="Student name">
          <Form.Control type="text" placeholder="name@example.com" required />
        </FloatingLabel>
       </Form.Group>
       <Form.Group className='mt-2'>
       <FloatingLabel controlId="floatingInputGrid" label="Mobile number">
          <Form.Control type="text" placeholder="+91-000-0000-000"  required/>
        </FloatingLabel>
       </Form.Group>
       <Form.Group className='mt-2'>
       <FloatingLabel controlId="floatingInputGrid" label="Email address">
          <Form.Control type="email" placeholder="name@example.com"  required/>
        </FloatingLabel>
       </Form.Group>
               <div className='d-flex justify-content-between mt-5'>
               <button className='btn-main' type="submit">
                  Download Certificate <i class="bi bi-download"></i>
                </button>
                <Button variant="secondary" onClick={openModal}>
                Retake Quiz
              </Button>
               </div>
              </Form>
              
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default QuizModal;
