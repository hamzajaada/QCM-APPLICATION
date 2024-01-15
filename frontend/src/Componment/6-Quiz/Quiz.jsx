import React, { useEffect, useState } from "react";
import './Quiz.css'
import axios from "axios";
import { useParams } from "react-router-dom";


const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const {id} = useParams();

  // Charge le quiz à partir du serveur lors du montage du composant
  useEffect(() => {
    axios.get(`http://localhost:3000/Quiz/Professeur/quiz/${id}`)
      .then((res) => {
        console.log(res.data)
        setQuiz(res.data);  
      }) 
      .catch(err=>console.log(err));
  }, [id]);

  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    setAnswers((prevAnswers) =>
      prevAnswers.map((answer, index) =>
        index === questionIndex ? selectedAnswer : answer
      )
    );
  };

  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/Quiz/Submit-Quiz",
  //       {
  //         quizId,
  //         answers,
  //       }
  //     );
  //     console.log("Réponse du serveur :", response.data);
  //     // Rediriger l'utilisateur ou effectuer d'autres actions après la soumission du quiz
  //   } catch (error) {
  //     console.error("Erreur lors de la soumission du quiz :", error);
  //   }
  // };

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return <p>Chargement du quiz...</p>;
  }

  return (
    <div className="container">
      <h1>{quiz.nomQuiz}</h1>
      <p>Filière: {quiz.filiere}</p>
      <p>Date de fin: {quiz.dateFin}</p>

      {quiz.questions.map((question, index) => (
        <div className="question" key={question._id}>
          <h3>{`Question ${index + 1}`}</h3>
          <p>{question.question}</p>

          <div>
            {question.reponses.map((reponse, reponseIndex) => (
              <div className="reponse" key={reponse._id}>
                <input
                  type="radio"
                  id={`q${index + 1}r${reponseIndex + 1}`}
                  name={`q${index + 1}`}
                  value={reponseIndex + 1}
                  checked={answers[index] === reponseIndex + 1}
                  onChange={() => handleAnswerChange(index, reponseIndex + 1)}
                />
                <label htmlFor={`q${index + 1}r${reponseIndex + 1}`}>
                  {reponse.value}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* <button >Soumettre le quiz</button> */}
    </div>
  );
};

export default QuizPage;
