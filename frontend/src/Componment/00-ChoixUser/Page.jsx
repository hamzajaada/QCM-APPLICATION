import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStudentLogin = () => {
    // Redirige vers la page de connexion pour les étudiants
    navigate("/Register");
  };

  const handleProfessorLogin = () => {
    // Redirige vers la page de connexion pour les professeurs
    navigate("/RegisterProf");
  };

  return (
    <div className="home-page">
      <h2>Choisissez votre type de connexion</h2>
      <div className="ButtonClick">
        <button onClick={handleStudentLogin}>
          S'inscrire en tant qu'étudiant
        </button>
        <button onClick={handleProfessorLogin}>
          S'inscrire en tant que professeur
        </button>
      </div>
    </div>
  );
};

export default HomePage;
