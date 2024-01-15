import React, { useEffect, useState } from "react";
import "./UpdateQuiz.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateQuiz = () => {

  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Quiz/Professeur/quiz/${id}`)
      .then((res) => {
        console.log(res.data);
        setQuiz(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const [nomQuiz, setNomQuiz] = useState("");
  const [filiere, setFiliere] = useState("informatique");
  const [questions, setQuestions] = useState([]);
  const [dateFin, setDateFin] = useState("");
  const professeurId = "65a479396b5d99d5799839a3";

  // const [reponseCorrecte, setReponseCorrecte] = useState("");
  // const [questions, setQuestions] = useState(
  //   Array.from({ length: 4 }, () => ({
  //     question: "",
  //     reponses: [
  //       { value: { value: "" } },
  //       { value: { value: "" } },
  //       { value: { value: "" } },
  //       { value: { value: "" } },
  //     ],
  //     reponseCorrecte: null,
  //   }))
  // );

  useEffect(() => {
    // Set the initial state based on the fetched quiz data
    if (quiz) {
      setNomQuiz(quiz.nomQuiz || "");
      setFiliere(quiz.filiere || "informatique");
      setQuestions(
        quiz.questions.map((question) => ({
          ...question,
          reponseCorrecte: (question.reponseCorrecte || 1).toString(),
        })) || []
      );
      setDateFin(quiz.dateFin || "");
    }
  }, [quiz]);

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
          reponseCorrecte:
            question.reponseCorrecte === null
              ? 1
              : parseInt(question.reponseCorrecte),
        })),
        dateFin,
        professeurId,
      };
      console.log(quizData);

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
      <h1>Modifier un Quiz</h1>
      <form onSubmit={handleSubmit}>
      {quiz.questions.map((question, index) => (
        <div key={question._id}>
          <div className="form-group">
          <label>Nom du Quiz:</label>
          <input
            type="text"
            // value={nomQuiz}
            onChange={(e) => setNomQuiz(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Filière:</label>
          <select  onChange={(e) => setFiliere(e.target.value)}>
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
                value={{}}
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
                  // value={reponse.value}
                  onChange={(e) =>
                    handleReponseChange(index, reponseIndex, e.target.value)
                  }
                />
              </div>
            ))}
            <div className="form-group">
              <label>Reponse correct:</label>
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

        <button type="submit">Modifier le Quiz</button>
        </div>
      ))}
        
        
      </form>
    </div>
  );
};

export default UpdateQuiz;
