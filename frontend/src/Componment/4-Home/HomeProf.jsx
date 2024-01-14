import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

const HomeProf = () => {
  return (
    <div className="container">
      <section className="description">
        <h1>Liste de quiz</h1>
        <p>Bienvenue dans votre espace de professeur. Vous pouvez ajouter, modifier, supprimer des quiz ici</p>
        {/* <button className="main-button">Créer un quiz</button> */}
        <Link to='/Home/Professeur/Add-Quiz' className="main-button">Créer un quiz</Link>
      </section>

      <h2>Quiz en cours</h2>
      <ul className="quiz-list">
        {/* Sample Quiz Item */}
        <li>
          <p>Titre quiz</p>
          <div className="action-buttons">
            <button className="read-button">Lire</button>
            <button className="edit-button">Edit</button>
            <button className="delete-button">Supprimer</button>
            <button className="result-button">Résultat</button>
          </div>
        </li>
        <li>
          <p>Titre quiz</p>
          <div className="action-buttons">
            <button className="read-button">Lire</button>
            <button className="edit-button">Edit</button>
            <button className="delete-button">Supprimer</button>
            <button className="result-button">Résultat</button>
          </div>
        </li>
        <li>
          <p>Titre quiz</p>
          <div className="action-buttons">
            <button className="read-button">Lire</button>
            <button className="edit-button">Edit</button>
            <button className="delete-button">Supprimer</button>
            <button className="result-button">Résultat</button>
          </div>
        </li>
        {/* Repeat similar structure for other quiz items */}
      </ul>

      <h2>Mes quizs terminés</h2>
      <ul className="quiz-list">
        {/* Sample Quiz Item */}
        <li>
          <p>Titre quiz</p>
          <div className="action-buttons">
            <button className="read-button">Lire</button>
            <button className="edit-button">Edit</button>
            <button className="delete-button">Supprimer</button>
            <button className="result-button">Résultat</button>
          </div>
        </li>
        <li>
          <p>Titre quiz</p>
          <div className="action-buttons">
            <button className="read-button">Lire</button>
            <button className="edit-button">Edit</button>
            <button className="delete-button">Supprimer</button>
            <button className="result-button">Résultat</button>
          </div>
        </li>
        <li>
          <p>Titre quiz</p>
          <div className="action-buttons">
            <button className="read-button">Lire</button>
            <button className="edit-button">Edit</button>
            <button className="delete-button">Supprimer</button>
            <button className="result-button">Résultat</button>
          </div>
        </li>
        {/* Repeat similar structure for other quiz items */}
      </ul>
    </div>
  );
};

export default HomeProf;
