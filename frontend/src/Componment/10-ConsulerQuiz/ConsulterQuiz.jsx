import React, { useEffect, useState } from "react";
import './ConsulterQuiz.css'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ConsulterQuiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [counter, setCounter] = useState(0); // Counter for correct answers
  const { id } = useParams();
  const navigate = useNavigate();
  const etudiantId = localStorage.getItem("user");

  useEffect(() => {
    axios.get(`http://localhost:3000/Quiz/Professeur/quiz/${id}`)
      .then((res) => {
        console.log(res.data)
        setQuiz(res.data);
        // Initialize answers array with default values
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
    // Compare answers and calculate the counter
    let correctAnswersCounter = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.reponseCorrecte) {
        correctAnswersCounter++;
      }
    });
    setCounter(correctAnswersCounter);

    // Create the result object
    const resultObject = {
      quizId: quiz._id,
      professeurId: quiz.professeurId,
      etudiantId: etudiantId, 
      resultat: correctAnswersCounter,
    };

    // Send the resultObject to the server (you need to implement this)
    axios.post("http://localhost:3000/Resultat/Add", resultObject)
      .then((res) => {
        console.log(res.data);
        navigate('/Home/Etudiant')
      })
      .catch(err => console.log(err));
    
  };

  return (
    <div className="container">
      <h1>{quiz && quiz.nomQuiz}</h1>
      <p>Filière: {quiz && quiz.filiere}</p>
      <p>Date de fin: {quiz && new Date(quiz.dateFin).toLocaleDateString()}</p>

      {/* <p>Date de fin: {quiz && quiz.dateFin}</p> */}

      {quiz && quiz.questions.map((question, index) => (
        <div className="question" key={question._id}>
          <h3>{`Question ${index + 1}`}</h3>
          <p>{question.question}</p>

          <div>
            {question.reponses.map((reponse, reponseIndex) => (
              <div className="reponse" key={reponseIndex}>
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
          <hr />
        </div>
      ))}

      <button onClick={handleSubmitQuiz}>Soumettre le quiz</button>
      {/* {counter !== null && <p>Résultat: {counter} correcte(s)</p>} */}
    </div>
  );
}

export default ConsulterQuiz;
