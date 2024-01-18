import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

const Resultat = () => {
  const [quizName, setQuizName] = useState("");
  const [results, setResults] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Resultat/Professeur/Quiz/${id}/Resultat`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:8080/Quiz/Professeur/quiz/${id}`)
      .then((res) => {
        setQuizName(res.data.nomQuiz);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container className="mt-5 mb-5">
      <h1>Résultats de {quizName}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Élève</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? (
            results.map((result, index) => (
              <tr key={index}>
                <td>{result.etudiantId.username}</td>
                <td>{result.resultat}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>Aucun résultat disponible pour le moment.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Resultat;
