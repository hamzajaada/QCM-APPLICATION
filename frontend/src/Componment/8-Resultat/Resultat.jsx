import React, { useEffect, useState } from "react";
import "./Resultat.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Resultat = () => {
  const [quizName, setQuizName] = useState("");
  const [results, setResults] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/Resultat/Professeur/Quiz/${id}/Resultat`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:3000/Quiz/Professeur/quiz/${id}`)
      .then((res) => {
        // console.log("Quiz Name : " + res.data);
        setQuizName(res.data.nomQuiz);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container">
      <h1>Résultats de {quizName}</h1>
      <table>
        <thead>
          <tr>
            <th>Élève</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.etudiantId.username}</td>
              <td>{result.resultat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Resultat;
