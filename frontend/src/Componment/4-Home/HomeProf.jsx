import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import axios from 'axios';
import './Home.css';

const HomeProf = () => {
  const [quizs, setQuizs] = useState([]);
  const [filteredQuizs, setFilteredQuizs] = useState(quizs);
  const id = localStorage.getItem('user');

  useEffect(() => {
    axios.get(`http://localhost:3000/Quiz/Professeur/${id}`)
      .then((res) => {
        const listQuizs = res.data;
        setQuizs(listQuizs);
        setFilteredQuizs(listQuizs); 
      })
      .catch((err) => console.log(err));
  }, [id]);

  function filtrage(filtre_categorie) {
    if (filtre_categorie === "enCours") {
      const quizzesEnCours = quizs.filter((item) => new Date(item.dateFin) > new Date());
      setFilteredQuizs(quizzesEnCours);
    } else if (filtre_categorie === "finQuiz") {
      const quizzesTermines = quizs.filter((item) => new Date(item.dateFin) <= new Date());
      setFilteredQuizs(quizzesTermines);
    } else {
      setFilteredQuizs(quizs);
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/Quiz/Professeur/Delete-Quiz/${id}`)
      .then(() => {
        console.log('Quiz supprimé avec succès');
        axios.get("http://localhost:3000/Quiz/Professeur/")
          .then((res) => {
            const listQuizs = res.data;
            setQuizs(listQuizs);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="mt-5 mb-5">
      <section className="description">
        <h1>Liste de quiz</h1>
        <p>Bienvenue dans votre espace de professeur. Vous pouvez ajouter, modifier, supprimer des quiz ici</p>
        <Link to='/Home/Professeur/Add-Quiz' className="btn btn-primary">Créer un quiz</Link>
      </section>
      <hr />
      <section className="section-filtrage">
        <Button variant="secondary" onClick={() => filtrage("Tout")}>Tout les quiz</Button>
        <Button variant="secondary" onClick={() => filtrage("enCours")}>Quiz en cours</Button>
        <Button variant="secondary" onClick={() => filtrage("finQuiz")}>Les quizs terminés</Button>
      </section>
      <hr />
      <h2>Liste de quiz</h2>
      <ul className="quiz-list">
        {filteredQuizs.map((data) => (
          <li key={data._id}>
            <p>{data.nomQuiz}</p>
            <div className="action-buttons">
              <Link to={`/Home/Professeur/Quiz/${data._id}`} className="btn btn-primary">Lire</Link>
              <Link to={`/Home/Professeur/Quiz/Edit/${data._id}`} className="btn btn-warning">Edit</Link>
              <Button variant="danger" onClick={() => handleDelete(data._id)}>Supprimer</Button>
              <Link to={`/Home/Professeur/Quiz/${data._id}/Resultat`} className="btn btn-info">Résultat</Link>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default HomeProf;
