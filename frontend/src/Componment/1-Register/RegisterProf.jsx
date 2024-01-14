import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterProf.css';
import axios from 'axios';

const RegisterProf = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    filiere: [], // Utilisez un tableau pour stocker plusieurs choix
  });
 const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Si c'est un champ de sélection multiple, utilisez un tableau pour stocker les valeurs
    setFormData({
      ...formData,
      [name]: e.target.multiple ? Array.from(e.target.selectedOptions, option => option.value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/User/Prof',{formData}).then(
        res=>{
            console.log("created!!!");
            navigate("/")
        })
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
            <label>Filière (sélection multiple)</label>
            <select
              name="filiere"
              value={formData.filiere}
              onChange={handleInputChange}
              multiple  // Permet la sélection multiple
              required
            >
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

export default RegisterProf;
