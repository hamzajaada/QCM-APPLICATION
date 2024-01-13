import React, { useState } from 'react';
import './Register.css';

const RegisterForm = () => {
  // Utilisez le state pour gérer les valeurs des champs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    filiere: '',  // Ajout du champ filière
  });

  // Fonction pour mettre à jour le state lorsqu'un champ change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour soumettre les données (envoyer à un backend, etc.)
    console.log('Formulaire soumis:', formData);
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
            <input
              type="text"
              name="filiere"
              value={formData.filiere}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
