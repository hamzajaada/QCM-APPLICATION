import React, { useState, useEffect } from "react";
import './Home.css';
import { Link } from "react-router-dom";
import axios from 'axios';

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
  },[id]);

  

  function filtrage (filtre_categorie) {
    if (filtre_categorie === "enCours") {
      console.log("En cours")
      const quizzesEnCours = quizs.filter((item) => new Date(item.dateFin) > new Date());
      setFilteredQuizs(quizzesEnCours);
      // setQuizs(quizzesEnCours);
    } else if (filtre_categorie === "finQuiz") {
      console.log("Fin de quiz")
      const quizzesTermines = quizs.filter((item) => new Date(item.dateFin) <= new Date());
      setFilteredQuizs(quizzesTermines);
      // setQuizs(quizzesTermines);
    } else {
      setFilteredQuizs(quizs);
      // setQuizs(quizs);
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
    <div className="container">
      <section className="description">
        <h1>Liste de quiz</h1>
        <p>Bienvenue dans votre espace de professeur. Vous pouvez ajouter, modifier, supprimer des quiz ici</p>
        <Link to='/Home/Professeur/Add-Quiz' className="main-button">Créer un quiz</Link>
      </section>
      <hr />
      <section className="section-filtrage">
        <button onClick={() => filtrage("Tout")}>Tout les quiz</button>
        <button onClick={() => filtrage("enCours")}>Quiz en cours</button>
        <button onClick={() => filtrage("finQuiz")}>Les quizs terminés</button>
      </section>
      <hr />
      <h2>Lise de quiz</h2>
      <ul className="quiz-list">
        {filteredQuizs.map((data) => (
          <li key={data._id}>
            <p>{data.nomQuiz}</p>
            <div className="action-buttons">
              <Link to={`/Home/Professeur/Quiz/${data._id}`} className="button_list">Lire</Link>
              <Link to={`/Home/Professeur/Quiz/Edit/${data._id}`} className="button_list">Edit</Link>
              <button className="button_list" onClick={() => handleDelete(data._id)}>Supprimer</button>
              <Link to={`/Home/Professeur/Quiz/${data._id}/Resultat`} className="button_list">Résultat</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeProf;
