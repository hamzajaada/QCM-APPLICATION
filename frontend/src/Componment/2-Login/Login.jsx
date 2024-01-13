// Login.js

import React from 'react';
import './Login.css';

const LoginForm = () => {
  return (
   <div className='body2'>
     <div className="login-form-container">
       <h2>Connexion</h2>
       <form>
         <div className="form-group">
           <label>Email</label>
           <input type="email" name="email" required />
         </div>
         <div className="form-group">
           <label>Mot de passe</label>
           <input type="password" name="password" required />
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
