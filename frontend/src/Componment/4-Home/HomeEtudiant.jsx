import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container} from "react-bootstrap";

const StudentHome = () => {
  const [completedQuizzes, setCompletedQuizzes] = useState([]);
  const [incompletedQuizzes, setIncompletedQuizzes] = useState([]);
  const id = localStorage.getItem("user");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Resultat/Etudiant/${id}/CompletedQuizzes`)
      .then((res) => {
        const completedQuizzesList = res.data;
        setCompletedQuizzes(completedQuizzesList);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Resultat/Etudiant/${id}/IncompletedQuizzes`)
      .then((res) => {
        const incompletedQuizzesList = res.data;
        setIncompletedQuizzes(incompletedQuizzesList);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container className="mt-5 mb-5">
      <section className="description">
        <h1>Liste de quiz</h1>
        <p>
          Bienvenue dans votre espace d'étudiant. Vous pouvez consulter et voir
          les résultats des quiz ici.
        </p>
      </section>

      <h2>Quiz en cours</h2>
      {incompletedQuizzes.length > 0 ? (
        <ul className="list-unstyled">
          {incompletedQuizzes.map((data) => (
            <li key={data._id} className="mb-3">
              <p>{data?.nomQuiz}</p>
              <Link
                to={`/Home/Etudiant/Quiz/${data._id}`}
                className="btn btn-primary"
              >
                Consulter
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun quiz en cours disponible pour le moment.</p>
      )}
      <h2>Quiz Terminé</h2>
      {completedQuizzes.length > 0 ? (
        <ul className="list-unstyled">
          {completedQuizzes.map((data) => (
            <li key={data._id} className="mb-3">
              <p>{data?.quizId?.nomQuiz}</p>
              <p>Résultat: {data?.resultat}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun quiz terminé disponible pour le moment.</p>
      )}
    </Container>
  );
};

export default StudentHome;
