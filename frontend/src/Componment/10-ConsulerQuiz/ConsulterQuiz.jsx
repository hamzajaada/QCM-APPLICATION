import React, { useEffect, useState } from "react";
import './ConsulterQuiz.css';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const ConsulterQuiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [counter, setCounter] = useState(0); 
  const { id } = useParams();
  const navigate = useNavigate();
  const etudiantId = localStorage.getItem("user");

  useEffect(() => {
    axios.get(`http://localhost:3000/Quiz/Professeur/quiz/${id}`)
      .then((res) => {
        console.log(res.data)
        setQuiz(res.data);
        // Initialize answers array with default values
        setAnswers(Array(res.data.questions.length).fill(null));
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    setAnswers((prevAnswers) =>
      prevAnswers.map((answer, index) =>
        index === questionIndex ? selectedAnswer : answer
      )
    );
  };

  const handleSubmitQuiz = () => {
    // Compare answers and calculate the counter
    let correctAnswersCounter = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.reponseCorrecte) {
        correctAnswersCounter++;
      }
    });
    setCounter(correctAnswersCounter);

    // Create the result object
    const resultObject = {
      quizId: quiz._id,
      professeurId: quiz.professeurId,
      etudiantId: etudiantId, 
      resultat: correctAnswersCounter,
    };

    // Send the resultObject to the server (you need to implement this)
    axios.post("http://localhost:3000/Resultat/Add", resultObject)
      .then((res) => {
        console.log(res.data);
        navigate('/Home/Etudiant')
      })
      .catch(err => console.log(err));
  };

  return (
    <Container className="mt-5 mb-5">
      <h1>{quiz && quiz.nomQuiz}</h1>
      <p>Filière: {quiz && quiz.filiere}</p>
      <p>Date de fin: {quiz && new Date(quiz.dateFin).toLocaleDateString()}</p>

      {quiz && quiz.questions.map((question, index) => (
        <Card className="mb-3" key={question._id}>
          <Card.Body>
            <Card.Title>{`Question ${index + 1}`}</Card.Title>
            <Card.Text>{question.question}</Card.Text>

            <Form>
              {question.reponses.map((reponse, reponseIndex) => (
                <Form.Check
                  key={reponseIndex}
                  type="radio"
                  id={`q${index + 1}r${reponseIndex + 1}`}
                  label={reponse.value}
                  checked={answers[index] === reponseIndex + 1}
                  onChange={() => handleAnswerChange(index, reponseIndex + 1)}
                />
              ))}
            </Form>
          </Card.Body>
        </Card>
      ))}

      <Button variant="primary" onClick={handleSubmitQuiz} className="mt-3">
        Soumettre le quiz
      </Button>
    </Container>
  );
}

export default ConsulterQuiz;
