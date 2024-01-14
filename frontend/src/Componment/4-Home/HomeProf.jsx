import React from "react";
import './Home.css';
const HomeProf = () => {
  return (
    <div className="container">
      <section className="description">
        <h1>Liste de quiz</h1>
        <p>Bienvenue dans votre espace de professeur. Vous pouvez ajouter, modifier, supprimer des quiz ici</p>
        <button>Creer un quiz</button>
      </section>
      

      <h2>Quiz en cours</h2>
      <ul>
        <li>
          <p>Titre quiz</p>
          <div>
            <button>Lire</button>
            <button>Edit</button>
            <button>Supprimer</button>
            <button>Résultat</button>
          </div>
        </li>
        <li>
          <p>Titre quiz</p>
          <div>
            <button>Lire</button>
            <button>Edit</button>
            <button>Supprimer</button>
            <button>Résultat</button>
          </div>
        </li>
        <li>
          <p>Titre quiz</p>
          <div>
            <button>Lire</button>
            <button>Edit</button>
            <button>Supprimer</button>
            <button>Résultat</button>
          </div>
        </li>
      </ul>
      <h2>Mes quizs terminés</h2>
      <ul>
        <li>
          <p>Titre quiz</p>
          <div>
            <button>Lire</button>
            <button>Edit</button>
            <button>Supprimer</button>
            <button>Résultat</button>
          </div>
        </li>
        <li>
          <p>Titre quiz</p>
          <div>
            <button>Lire</button>
            <button>Edit</button>
            <button>Supprimer</button>
            <button>Résultat</button>
          </div>
        </li>
        <li>
          <p>Titre quiz</p>
          <div>
            <button>Lire</button>
            <button>Edit</button>
            <button>Supprimer</button>
            <button>Résultat</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomeProf;
