import React, { useEffect, useState } from "react";
// import './Quiz.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Card, Badge } from "react-bootstrap";

const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/Quiz/Professeur/quiz/${id}`)
      .then((res) => {
        setQuiz(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return <p>Chargement du quiz...</p>;
  }

  return (
    <Container className="mt-5 mb-5">
      <h1>{quiz.nomQuiz}</h1>
      <p>Filière: {quiz.filiere}</p>
      <p>Date de fin: {quiz && new Date(quiz.dateFin).toLocaleDateString()}</p>

      {quiz.questions.map((question, index) => (
        <Card key={question._id} className="mb-3">
          <Card.Body>
            <Card.Title>{`Question ${index + 1}`}</Card.Title>
            <Card.Text>{question.question}</Card.Text>

            <div style={{display:"flex", flexDirection:"column"}}>
              {question.reponses.map((reponse, reponseIndex) => (
                <Badge key={reponse._id} variant="secondary" className="mr-2" style={{width:"auto", margin:"2px", }}>
                  {reponse.value}
                </Badge>
              ))}
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default QuizPage;
