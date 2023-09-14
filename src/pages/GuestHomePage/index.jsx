import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function GuestHomePage() {
  return (
    <div className='home-page'>
      <h1>Welcome to ProgFolio!</h1>
      <p>A Time management app that allows you to keep track of the things you want to do in life. </p>
      <div className='btn-cont'>
        <Link to="/login">
          <button id="guest-login-button" className="hidden-style-button">Login</button>
        </Link>
        <Link to="/signup">
          <button id="guest-signup-button" className="button-style green-button">Sign Up</button>
        </Link>
      </div>
    </div>
  )
}
