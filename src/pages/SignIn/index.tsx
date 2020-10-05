import React from 'react';

import logo from '../../assets/logo.png';

import './styles.css';

function SignIn() {
  return (
    <div className="sign-in-page">
      <img src={logo} alt="logo sign in"/>
      
      <input 
        type="text" 
        placeholder="Email"
        defaultValue="email@email.com"
      />
      <input 
        type="password" 
        placeholder="Password"
        defaultValue="123456"
      />

      <button onClick={() => {}}>Entrar</button>
    </div>
  );
}

export default SignIn;
