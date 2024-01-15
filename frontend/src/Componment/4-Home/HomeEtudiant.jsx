import React from 'react';
import './Home.css'
import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';

const HomeEtudiant = () => {
  const [quizs, setQuizs] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/Quiz/Professeur/")
      .then((res) => {
        const listQuizs = res.data;
        setQuizs(listQuizs);
        
      })
      .catch((err) => console.log(err));
  },[])
  return (
    <div className='container'>
      <section className='description'>
        <h1>Liste de quiz</h1>
        <p>Bienvenue dans votre espace d'étudiant. Vous pouvez Consulter, Voir les résultats des quiz ici</p>
      </section>
      
      <h2>Quiz en cours</h2>
      <ul>
      {quizs.map((data) => (
          <li key={data._id}>
            <p>{data.nomQuiz}</p>
            <div className="action-buttons">
              <Link to={`/Home/Etudiant/Quiz/${data._id}`} className="button">Consulter</Link>
              <button>Résultat</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Mes quizs terminés</h2>
      <ul>
        {quizs.map((data) => (
          <li>
            <p>{data.nomQuiz}</p>
            <div className="action-buttons">
              <Link to={`/Home/Etudiant/Quiz/${data._id}`} className="button">Consulter</Link>
            {/* <button>Consulter</button> */}
              <button>Résultat</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeEtudiant;
