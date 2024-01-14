import React from 'react';
import './Home.css'
const HomeEtudiant = () => {
  return (
    <div className='container'>
      <section className='description'>
        <h1>Liste de quiz</h1>
        <p>Bienvenue dans votre espace d'étudiant. Vous pouvez Consulter, Voir les résultats des quiz ici</p>
      </section>
      
      <h2>Quiz en cours</h2>
      <ul>
        <li>
          <p>Titre quiz</p>
          <div>
            <button>Consulter</button>
            <button>Résultat</button>
          </div>
        </li>
        <li>
          <p>Titre quiz</p>
          <div>
            <button>Consulter</button>
            <button>Résultat</button>
          </div>
        </li>
        <li>
          <p>Titre quiz</p>
          <div>
            <button>Consulter</button>
            <button>Résultat</button>
          </div>
        </li>
      </ul>
      <h2>Mes quizs terminés</h2>
      <ul>
        <li>
          <p>Titre quiz</p>
          <div>
            <button>Consulter</button>
            <button>Résultat</button>
          </div>
        </li>
        <li>
          <p>Titre quiz</p>
          <div>
            <button>Consulter</button>
            <button>Résultat</button>
          </div>
        </li>
        <li>
          <p>Titre quiz</p>
          <div>
            <button>Consulter</button>
            <button>Résultat</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HomeEtudiant;
