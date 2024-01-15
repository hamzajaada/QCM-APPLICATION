import React, { useState } from "react";
import "./Add-Quiz.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddQuiz = () => {
  const [nomQuiz, setNomQuiz] = useState("");
  const [filiere, setFiliere] = useState("informatique");
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(
    Array.from({ length: 4 }, () => ({
      question: "",
      reponses: [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
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
          reponses: question.reponses.map((reponse) => ({ value: reponse.value })),
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
    <div className="container">
      <h1>Ajouter un Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom du Quiz:</label>
          <input
            type="text"
            onChange={(e) => setNomQuiz(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Filière:</label>
          <select onChange={(e) => setFiliere(e.target.value)}>
            <option value="informatique">Informatique</option>
            <option value="mathematiques">Mathématiques</option>
          </select>
        </div>

        {questions.map((question, index) => (
          <div key={index}>
            <h3>Question {index + 1}</h3>
            <div className="form-group">
              <label>Question:</label>
              <input
                type="text"
                onChange={(e) =>
                  handleQuestionChange(index, "question", e.target.value)
                }
              />
            </div>

            <h4>Réponses:</h4>
            {question.reponses.map((reponse, reponseIndex) => (
              <div key={reponseIndex} className="form-group">
                <label>Réponse {reponseIndex + 1}:</label>
                <input
                  type="text"
                  onChange={(e) =>
                    handleReponseChange(index, reponseIndex, e.target.value)
                  }
                />
              </div>
            ))}
            <div className="form-group">
              <label>Reponse correcte:</label>
              <select
                onChange={(e) =>
                  handleReponseCorrecteChange(index, e.target.value)
                }
              >
                {question.reponses.map((reponse, reponseIndex) => (
                  <option key={reponseIndex} value={reponseIndex + 1}>
                    {reponseIndex + 1}
                  </option>
                ))}
              </select>
            </div>
            <hr />
          </div>
        ))}

        <div className="form-group">
          <label>Date de fin:</label>
          <input
            type="date"
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
          />
        </div>

        <input type="hidden" value={professeurId} />

        <button type="submit">Enregistrer le Quiz</button>
      </form>
    </div>
  );
};

export default AddQuiz;
