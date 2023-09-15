import React from 'react';
import LoginForm from '../../components/LoginForm';
import './style.css';

export default function LoginPage() {
  return (
    <div id="login-page">
      <LoginForm />
      <img id='bg-image-small' src="bg-image.png" alt="logo" />
    </div>
  )
}
