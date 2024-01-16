import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
// import "./UpdateQuiz.css"; // Ajoutez votre fichier de style personnalisé si nécessaire

const UpdateQuiz = () => {
  const [quiz, setQuiz] = useState({
    nomQuiz: "",
    filiere: "",
    questions: [],
    dateFin: "",
    professeurId: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/Quiz/Professeur/quiz/${id}`
        );
        setQuiz(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération du quiz :", error);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (index, e) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[index].question = e.target.value;
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleAnswerChange = (questionIndex, answerIndex, e) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[questionIndex].reponses[answerIndex].value =
      e.target.value;
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleCorrectAnswerChange = (questionIndex, e) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[questionIndex].reponseCorrecte = parseInt(e.target.value);
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(quiz);
    axios
      .put(`http://localhost:3000/Quiz/Professeur/Update-Quiz/${id}`, { quiz })
      .then((res) => {
        navigate("/Home/Professeur");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container  className="mt-5 mb-5">
      <h1 className="mt-4 mb-4">Modification de quiz</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Nom du Quiz:</Form.Label>
              <Form.Control
                type="text"
                name="nomQuiz"
                value={quiz.nomQuiz}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Filière:</Form.Label>
              <Form.Control
                type="text"
                name="filiere"
                value={quiz.filiere}
                onChange={handleChange}
              />
            </Form.Group>

          </Col>
        </Row>

        {quiz.questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <Form.Group>
              <Form.Label>Question {questionIndex + 1}:</Form.Label>
              <Form.Control
                type="text"
                value={question.question}
                onChange={(e) => handleQuestionChange(questionIndex, e)}
              />
            </Form.Group>

            {question.reponses.map((answer, answerIndex) => (
              <div key={answerIndex}>
                <Form.Group>
                  <Form.Label>Réponse {answerIndex + 1}:</Form.Label>
                  <Form.Control
                    type="text"
                    value={answer.value}
                    onChange={(e) =>
                      handleAnswerChange(questionIndex, answerIndex, e)
                    }
                  />
                </Form.Group>
              </div>
            ))}

            <Form.Group>
              <Form.Label>Réponse Correcte:</Form.Label>
              <Form.Control
                type="number"
                value={question.reponseCorrecte}
                min={1}
                max={4}
                onChange={(e) => handleCorrectAnswerChange(questionIndex, e)}
              />
            </Form.Group>
            <hr />
          </div>
        ))}

        <Button type="submit" variant="primary">
          Modifier
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateQuiz;
