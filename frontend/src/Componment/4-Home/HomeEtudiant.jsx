import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentHome = () => {
  const [quizs, setQuizs] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState([]);
  const [IncompletedQuizzes, setIncompletedQuizzes] = useState([]);

  const id = localStorage.getItem("user");

  useEffect(() => {
    axios
      .get("http://localhost:3000/Quiz/Professeur/")
      .then((res) => {
        const listQuizs = res.data;
        setQuizs(listQuizs);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Resultat/Etudiant/${id}/CompletedQuizzes`)
      .then((res) => {
        console.log("Completed Quizzes:", res.data);
        const completedQuizzesList = res.data;
        setCompletedQuizzes(completedQuizzesList);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Resultat//Etudiant/${id}/IncompletedQuizzes`)
      .then((res) => {
        console.log("Incompleted Quizzes:", res.data);
        const incompletedQuizzesList = res.data;
        setIncompletedQuizzes(incompletedQuizzesList);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container">
      <section className="description">
        <h1>Liste de quiz</h1>
        <p>
          Bienvenue dans votre espace d'étudiant. Vous pouvez Consulter, Voir
          les résultats des quiz ici
        </p>
      </section>

      <h2>Quiz en cours</h2>
      <ul>
        {IncompletedQuizzes.map((data) => (
          <li key={data._id}>
            <p>{data?.nomQuiz}</p>
            <div className="action-buttons">
              <Link to={`/Home/Etudiant/Quiz/${data._id}`} className="button_list">
                Consulter
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <h2>Quiz Terminé</h2>
      <ul>
        {completedQuizzes.map((data) => (
          <li key={data._id}>
            <p>{data?.quizId?.nomQuiz}</p>
            <div className="action-buttons">
              <p>Résultat: {data?.resultat}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentHome;
