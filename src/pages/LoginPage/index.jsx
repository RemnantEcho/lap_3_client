import React from 'react';
import LoginForm from '../../components/LoginForm';

export default function LoginPage() {
  return (
    <div>
    <LoginForm />

      <div id="login">
        <p>Don't have an account? <a id="link-register" href="./register.html">Register here</a></p>
      </div>
    </div>
  )
}
