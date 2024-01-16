import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
// import "./Page.css";

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
    <Container className="home-page text-center mt-5 mb-5">
      <Row>
        <Col>
          <h2 className="my-4">Choisissez votre type de connexion</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} className="mb-3">
          <Button
            variant="primary"
            size="lg"
            block
            onClick={handleStudentLogin}
          >
            S'inscrire en tant qu'étudiant
          </Button>
        </Col>
        <Col md={6} className="mb-3">
          <Button
            variant="success"
            size="lg"
            block
            onClick={handleProfessorLogin}
          >
            S'inscrire en tant que professeur
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
