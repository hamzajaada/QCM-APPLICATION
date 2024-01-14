import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    filiere: '',  // Utilisez une chaîne pour stocker le choix de filière
  });

  const navigate = useNavigate();

  // Fonction pour mettre à jour le state lorsqu'un champ change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Création d'un objet à envoyer au backend
    const eleveData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      filiere: formData.filiere,
    };
    console.log(eleveData);

    // Envoi des données au backend

    axios.post('http://localhost:3000/User/Student', eleveData).then(
      res => {
        console.log("created!!!");
        navigate("/");
      })
    console.log('Formulaire soumis:', eleveData);
  };

  return (
    <div className='body1'>
      <h1>Inscription dans la Plateforme De Quiz - Ecole supérieure de technologie Essaouira</h1>
      <div className="register-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom d'utilisateur</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirmer le mot de passe</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Filière</label>
            <select
              name="filiere"
              value={formData.filiere}
              onChange={handleInputChange}
              required
            >
              <option value="">Choisissez une filière</option>
              <option value="informatique">Informatique</option>
              <option value="électronique">Électronique</option>
              <option value="mécanique">Mécanique</option>
              {/* Ajoutez d'autres options en fonction des filières disponibles */}
            </select>
          </div>
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
