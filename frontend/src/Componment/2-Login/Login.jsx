// Login.js
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    userType: 'eleve', // Par défaut, sélectionnez "eleve"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
//   const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hh"+loginData);
    axios.post('http://localhost:3000/User/Login', {loginData}).then(
        res => {
          console.log("connected!!!");
          window.location.reload()
        })
    console.log('Formulaire soumis:', loginData);
  };

  return (
    <div className='body2'>
      <div className="login-form-container">
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={loginData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input type="password" name="password" value={loginData.password} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Type d'utilisateur</label>
            <select name="userType" value={loginData.userType} onChange={handleInputChange} required>
              <option value="eleve">Étudiant</option>
              <option value="prof">Professeur</option>
            </select>
          </div>
          <button type="submit">Se connecter</button>
        </form>
        <p className="register-link">
          Vous n'avez pas de compte ? <a href="/Choix">S'inscrire</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
