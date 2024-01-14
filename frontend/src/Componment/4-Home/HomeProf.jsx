// import React from "react";
// import './Home.css';
// const HomeProf = () => {
//   return (
//     <div className="container">
//       <section className="description">
//         <h1>Liste de quiz</h1>
//         <p>Bienvenue dans votre espace de professeur. Vous pouvez ajouter, modifier, supprimer des quiz ici</p>
//         <button>Creer un quiz</button>
//       </section>
      

//       <h2>Quiz en cours</h2>
//       <ul>
//         <li>
//           <p>Titre quiz</p>
//           <div>
//             <button>Lire</button>
//             <button>Edit</button>
//             <button>Supprimer</button>
//             <button>Résultat</button>
//           </div>
//         </li>
//         <li>
//           <p>Titre quiz</p>
//           <div>
//             <button>Lire</button>
//             <button>Edit</button>
//             <button>Supprimer</button>
//             <button>Résultat</button>
//           </div>
//         </li>
//         <li>
//           <p>Titre quiz</p>
//           <div>
//             <button>Lire</button>
//             <button>Edit</button>
//             <button>Supprimer</button>
//             <button>Résultat</button>
//           </div>
//         </li>
//       </ul>
//       <h2>Mes quizs terminés</h2>
//       <ul>
//         <li>
//           <p>Titre quiz</p>
//           <div>
//             <button>Lire</button>
//             <button>Edit</button>
//             <button>Supprimer</button>
//             <button>Résultat</button>
//           </div>
//         </li>
//         <li>
//           <p>Titre quiz</p>
//           <div>
//             <button>Lire</button>
//             <button>Edit</button>
//             <button>Supprimer</button>
//             <button>Résultat</button>
//           </div>
//         </li>
//         <li>
//           <p>Titre quiz</p>
//           <div>
//             <button>Lire</button>
//             <button>Edit</button>
//             <button>Supprimer</button>
//             <button>Résultat</button>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default HomeProf;

import React from "react";
import './Home.css';

const HomeProf = () => {
  return (
    <div className="container">
      <section className="description">
        <h1>Liste de quiz</h1>
        <p>Bienvenue dans votre espace de professeur. Vous pouvez ajouter, modifier, supprimer des quiz ici</p>
        <button className="main-button">Créer un quiz</button>
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
