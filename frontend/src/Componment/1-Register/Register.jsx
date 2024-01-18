import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    filiere: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const eleveData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      filiere: formData.filiere,
    };

    axios.post('http://localhost:8080/User/Student', eleveData).then(
      res => {
        console.log("created!!!");
        navigate("/");
      })
    console.log('Formulaire soumis:', eleveData);
  };

  return (
    <Container className="mt-5 mb-5">
      <h1>Inscription dans la Plateforme De Quiz - Ecole supérieure de technologie Essaouira</h1>
      <div >
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nom d'utilisateur</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirmer le mot de passe</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Filière</Form.Label>
            <Form.Control
              as="select"
              name="filiere"
              value={formData.filiere}
              onChange={handleInputChange}
              required
            >
              <option value="">Choisissez une filière</option>
              <option value="informatique">Informatique</option>
              <option value="électronique">Électronique</option>
              <option value="mécanique">Mécanique</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            S'inscrire
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default RegisterForm;

