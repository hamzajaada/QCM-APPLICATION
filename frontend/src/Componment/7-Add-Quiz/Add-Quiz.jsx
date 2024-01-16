import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
// import "./Add-Quiz.css";

const AddQuiz = () => {
  const [nomQuiz, setNomQuiz] = useState("");
  const [filiere, setFiliere] = useState("");
  const navigate = useNavigate();
  const fl = localStorage.getItem("filiere");
  const filieresArray = fl.split(",");
  const [questions, setQuestions] = useState(
    Array.from({ length: 10 }, () => ({
      question: "",
      reponses: [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
      reponseCorrecte: null,
    }))
  );
  const [dateFin, setDateFin] = useState("");
  const professeurId = localStorage.getItem("user");

  const handleQuestionChange = (index, field, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, i) =>
        i === index ? { ...question, [field]: value } : question
      )
    );
  };

  const handleReponseChange = (questionIndex, reponseIndex, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, i) =>
        i === questionIndex
          ? {
              ...question,
              reponses: question.reponses.map((reponse, j) =>
                j === reponseIndex ? { ...reponse, value } : reponse
              ),
            }
          : question
      )
    );
  };

  const handleReponseCorrecteChange = (questionIndex, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, i) =>
        i === questionIndex ? { ...question, reponseCorrecte: value } : question
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const quizData = {
        nomQuiz,
        filiere,
        questions: questions.map((question) => ({
          ...question,
          reponses: question.reponses.map((reponse) => ({
            value: reponse.value,
          })),
          reponseCorrecte:
            question.reponseCorrecte === null
              ? 1
              : parseInt(question.reponseCorrecte),
        })),
        dateFin,
        professeurId,
      };

      const response = await axios.post(
        "http://localhost:3000/Quiz/Professeur/Add-Quiz",
        quizData
      );
      navigate("/Home/Professeur");
      console.log("Réponse du serveur:", response.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi du quiz au serveur:", error);
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-4">Ajouter un Quiz</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nom du Quiz:</Form.Label>
          <Form.Control type="text" onChange={(e) => setNomQuiz(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Filière:</Form.Label>
          <Form.Control as="select" onChange={(e) => setFiliere(e.target.value)}>
            {filieresArray.map((f, index) => (
              <option key={index} value={f.trim()}>
                {f.trim()}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {questions.map((question, index) => (
          <div key={index}>
            <h3 className="mb-3">Question {index + 1}</h3>
            <Form.Group>
              <Form.Label>Question:</Form.Label>
              <Form.Control type="text" onChange={(e) => handleQuestionChange(index, "question", e.target.value)} />
            </Form.Group>

            <h4>Réponses:</h4>
            {question.reponses.map((reponse, reponseIndex) => (
              <Form.Group key={reponseIndex}>
                <Form.Label>Réponse {reponseIndex + 1}:</Form.Label>
                <Form.Control type="text" onChange={(e) => handleReponseChange(index, reponseIndex, e.target.value)} />
              </Form.Group>
            ))}
            <Form.Group>
              <Form.Label>Réponse correcte:</Form.Label>
              <Form.Control as="select" onChange={(e) => handleReponseCorrecteChange(index, e.target.value)}>
                {question.reponses.map((reponse, reponseIndex) => (
                  <option key={reponseIndex} value={reponseIndex + 1}>
                    {reponseIndex + 1}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <hr />
          </div>
        ))}

        <Form.Group>
          <Form.Label>Date de fin:</Form.Label>
          <Form.Control type="date" value={dateFin} onChange={(e) => setDateFin(e.target.value)} />
        </Form.Group>

        <input type="hidden" value={professeurId} />

        <Button variant="primary" type="submit" className="mt-3">
          Enregistrer le Quiz
        </Button>
      </Form>
    </Container>
  );
};

export default AddQuiz;
