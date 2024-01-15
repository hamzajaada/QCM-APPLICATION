import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UpdateQuiz.css";
import { useParams, useNavigate } from "react-router-dom";

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
    <div className="container">
      <h1>Edit Quiz</h1>
      <form onSubmit={handleSubmit}>
        <label>Nom du Quiz:</label>
        <input
          type="text"
          name="nomQuiz"
          value={quiz.nomQuiz}
          onChange={handleChange}
        />

        <label>Filière:</label>
        <input
          type="text"
          name="filiere"
          value={quiz.filiere}
          onChange={handleChange}
        />


        {quiz.questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <label>Question {questionIndex + 1}:</label>
            <input
              type="text"
              value={question.question}
              onChange={(e) => handleQuestionChange(questionIndex, e)}
            />

            {question.reponses.map((answer, answerIndex) => (
              <div key={answerIndex}>
                <label>Réponse {answerIndex + 1}:</label>
                <input
                  type="text"
                  value={answer.value}
                  onChange={(e) =>
                    handleAnswerChange(questionIndex, answerIndex, e)
                  }
                />
              </div>
            ))}

            <label>Réponse Correcte:</label>
            <input
              type="text"
              value={question.reponseCorrecte}
              onChange={(e) => handleCorrectAnswerChange(questionIndex, e)}
            />
            <hr />
          </div>
        ))}

        <button type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default UpdateQuiz;
