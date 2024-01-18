import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    userType: 'eleve',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/User/Login', { loginData }).then(
      (res) => {
        if (loginData.userType === 'eleve') {
          localStorage.setItem('token', res.data.jsenwebtkn);
          localStorage.setItem('user', res.data.user);
          localStorage.setItem('userType', res.data.userType);
          localStorage.setItem('filiere', res.data.filiere);

          navigate('/Home/Etudiant');
        } else if (loginData.userType === 'prof') {
          localStorage.setItem('token', res.data.jsenwebtkn);
          localStorage.setItem('user', res.data.user);
          localStorage.setItem('userType', res.data.userType);
          localStorage.setItem('filiere', res.data.filiere);
          navigate('/Home/Professeur');
        }
      }
    );
  };

  return (
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
          <Col mt={6}>
            <div className="login-form-container">
              <h2>Connexion</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Type d'utilisateur</Form.Label>
                  <Form.Control
                    as="select"
                    name="userType"
                    value={loginData.userType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="eleve">Étudiant</option>
                    <option value="prof">Professeur</option>
                  </Form.Control>
                </Form.Group>
                <Button className='mb-2 mt-2' type="submit">Se connecter</Button>
              </Form>
              <p className="register-link">
                Vous n'avez pas de compte ? <a href="/Choix">S'inscrire</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default LoginForm;

