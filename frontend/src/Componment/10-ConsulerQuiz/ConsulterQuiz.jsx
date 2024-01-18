import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";

const ConsulterQuiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [counter, setCounter] = useState(0); 
  const { id } = useParams();
  const navigate = useNavigate();
  const etudiantId = localStorage.getItem("user");

  useEffect(() => {
    axios.get(`http://localhost:8080/Quiz/Professeur/quiz/${id}`)
      .then((res) => {
        setQuiz(res.data);
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
    let correctAnswersCounter = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.reponseCorrecte) {
        correctAnswersCounter++;
      }
    });
    setCounter(correctAnswersCounter);

    const resultObject = {
      quizId: quiz._id,
      professeurId: quiz.professeurId,
      etudiantId: etudiantId, 
      resultat: correctAnswersCounter,
    };

    axios.post("http://localhost:8080/Resultat/Add", resultObject)
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
