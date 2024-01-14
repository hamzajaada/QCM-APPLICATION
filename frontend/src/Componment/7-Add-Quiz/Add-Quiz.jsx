import React, { useState } from "react";
import './Add-Quiz.css'
const AddQuiz = () => {
  const [nomQuiz, setNomQuiz] = useState("");
  const [filiere, setFiliere] = useState("");
  const [questions, setQuestions] = useState(Array.from({ length: 20 }, () => ({ question: "", reponses: ["", "", "", ""], reponseCorrecte: 0 })));
  const [dateFin, setDateFin] = useState("");
  // const [idProf, setIdProf] = useState(""); // Ajoutez la logique pour obtenir l'ID du professeur

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
        <label>
          Nom du Quiz:
          <input
            type="text"
            value={nomQuiz}
            onChange={(e) => setNomQuiz(e.target.value)}
          />
        </label>
        <br />
        <label>
          Filière:
          <select value={filiere} onChange={(e) => setFiliere(e.target.value)}>
            <option value="informatique">Informatique</option>
            <option value="mathematiques">Mathématiques</option>
            {/* Ajoutez d'autres options selon vos besoins */}
          </select>
        </label>
        <br />
        {questions.map((question, index) => (
          <div key={index}>
            <h3>Question {index + 1}</h3>
            <label>
              Question:
              <input
                type="text"
                value={question.question}
                onChange={(e) =>
                  handleQuestionChange(index, "question", e.target.value)
                }
              />
            </label>
            <br />
            <h4>Réponses:</h4>
            {question.reponses.map((reponse, reponseIndex) => (
              <div key={reponseIndex}>
                <label>
                  Réponse {reponseIndex + 1}:
                  <input
                    type="text"
                    value={reponse}
                    onChange={(e) =>
                      handleReponseChange(
                        index,
                        reponseIndex,
                        e.target.value
                      )
                    }
                  />
                </label>
              </div>
            ))}
          </div>
        ))}
        <label>
          Date de fin:
          <input
            type="date"
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enregistrer le Quiz</button>
      </form>
    </div>
  );
};

export default AddQuiz;

