import React, { useState } from "react";
import "./Add-Quiz.css";

const AddQuiz = () => {
  const [nomQuiz, setNomQuiz] = useState("");
  const [filiere, setFiliere] = useState("");
  const [questions, setQuestions] = useState(
    Array.from({ length: 20 }, () => ({
      question: "",
      reponses: ["", "", "", ""],
      reponseCorrecte: 0,
    }))
  );
  const [dateFin, setDateFin] = useState("");

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
                j === reponseIndex ? value : reponse
              ),
            }
          : question
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez la logique pour envoyer les données au serveur
  };

  return (
    <div className="container">
      <h1>Ajouter un Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom du Quiz:</label>
          <input
            type="text"
            value={nomQuiz}
            onChange={(e) => setNomQuiz(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Filière:</label>
          <select
            value={filiere}
            onChange={(e) => setFiliere(e.target.value)}
          >
            <option value="informatique">Informatique</option>
            <option value="mathematiques">Mathématiques</option>
            {/* Ajoutez d'autres options selon vos besoins */}
          </select>
        </div>

        {questions.map((question, index) => (
          <div key={index}>
            <h3>Question {index + 1}</h3>
            <div className="form-group">
              <label>Question:</label>
              <input
                type="text"
                value={question.question}
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
                  value={reponse}
                  onChange={(e) =>
                    handleReponseChange(index, reponseIndex, e.target.value)
                  }
                />
              </div>
            ))}
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

        <button type="submit">Enregistrer le Quiz</button>
      </form>
    </div>
  );
};

export default AddQuiz;
