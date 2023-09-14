import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import './style.css';

export default function SignupPage() {
  return (
    <div id="signup-page">
      <RegistrationForm />
      <img id='bg-image-small' src="bg-image.png" alt="logo" />
    </div>
    )
}
