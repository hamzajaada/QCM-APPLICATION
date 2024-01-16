// Dans votre fichier React
import React, { useState, useEffect } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const StaticHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userType = window.localStorage.getItem("userType");
  const location = useLocation();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    // token est trouver
    setIsLoggedIn(token !== null);
  }, [location.pathname]); 

  function handleLogout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userType");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("filiere");
    setIsLoggedIn(false);
  }

  return (
    <header className="header">
      <h1>
        {isLoggedIn ? (
          userType === "eleve" ? (
            <a href="/Home/Etudiant">Mon Quiz</a>
          ) : (
            <a href="/Home/Professeur">Mon Quiz</a>
          )
        ) : (
          <a href="/">Mon Quiz</a>
        )}
      </h1>
      <div>
        {isLoggedIn ? (
          <Link className="Link-header" to ="/" onClick={handleLogout}>
            Déconnexion
          </Link>
        ) : (
          <Link className="Link-header" to="/">
            Connexion
          </Link>
        )}
      </div>
    </header>
  );
};

export default StaticHeader;
