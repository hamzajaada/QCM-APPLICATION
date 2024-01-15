import React, { useState } from "react";
import './Home.css';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios'

const HomeProf = () => {
  const [quizs, setQuizs] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/Quiz/Professeur/")
      .then((res) => {
        const listQuizs = res.data;
        setQuizs(listQuizs);
        
      })
      .catch((err) => console.log(err));
  },[])

  function handleDelete(id) {
    console.log(id);
    axios.delete(`http://localhost:3000/Quiz/Professeur/Delete-Quiz/${id}`)
      .then((res) => {
        console.log('fin')
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <section className="description">
        <h1>Liste de quiz</h1>
        <p>Bienvenue dans votre espace de professeur. Vous pouvez ajouter, modifier, supprimer des quiz ici</p>
        <Link to='/Home/Professeur/Add-Quiz' className="main-button">Créer un quiz</Link>
      </section>

      <h2>Quiz en cours</h2>
      <ul className="quiz-list">
        {quizs.map((data) => (
          <li key={data._id}>
            <p>{data.nomQuiz}</p>
            <div className="action-buttons">
              <Link to={`/Home/Professeur/Quiz/${data._id}`} className="button">Lire</Link>
              <Link to={`/Home/Professeur/Quiz/Edit/${data._id}`} className="button">Edit</Link>
              <button className="button" onClick={() => handleDelete(data._id)}>Supprimer</button>
              <button className="button">Résultat</button>
            </div>
          </li>
        ))}
      </ul>

      <h2>Mes quizs terminés</h2>
      <ul className="quiz-list">
        {quizs.map((data) => (
          <li>
            <p>{data.nomQuiz}</p>
            <div className="action-buttons">
            <div className="action-buttons">
              <Link to={`/Home/Professeur/Quiz/${data._id}`} className="button">Lire</Link>
              <Link to={`/Home/Professeur/Quiz/Edit/${data._id}`} className="button">Edit</Link>
              <button className="button" onClick={() => handleDelete(data._id)}>Supprimer</button>
              <button className="button">Résultat</button>
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeProf;
