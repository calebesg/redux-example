import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';

import './styles.css';
import logo from '../../assets/logo.png';

function SignIn() {
  const { loadingSignInRequest } = useSelector((state: StoreState) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('LOADING: ', loadingSignInRequest);

  return (
    <div className="sign-in-page">
      <img src={logo} alt="logo sign in"/>
      
      <input 
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input 
        type="password" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button 
        onClick={() => dispatch(signInRequest({ email, password }))}
      >
        { loadingSignInRequest ? 'Carregando' : 'Entrar' }
      </button>
    </div>
  );
}

export default SignIn;
