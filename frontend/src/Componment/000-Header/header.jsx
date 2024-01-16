import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
// import "./header.css";
import { Link, useLocation } from "react-router-dom";

const StaticHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userType = window.localStorage.getItem("userType");
  const location = useLocation();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
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
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <h1>
          {isLoggedIn ? (
            userType === "eleve" ? (
              <Link to="/Home/Etudiant">Mon Quiz</Link>
            ) : (
              <Link to="/Home/Professeur">Mon Quiz</Link>
            )
          ) : (
            <Link to="/">Mon Quiz</Link>
          )}
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {isLoggedIn ? (
            <Nav.Link as={Link} to="/" onClick={handleLogout}>
              Déconnexion
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/">
              Connexion
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default StaticHeader;
