import React, { useEffect, useState } from "react";
import './Quiz.css'
import axios from "axios";
import { useParams } from "react-router-dom";


const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  // const [answers, setAnswers] = useState([]);
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
                <label htmlFor={`q${index + 1}r${reponseIndex + 1}`}>
                  {reponse.value}
                </label>
              </div>
            ))}
          </div>
          <hr />
        </div>
      ))}

      {/* <button >Soumettre le quiz</button> */}
    </div>
  );
};

export default QuizPage;
