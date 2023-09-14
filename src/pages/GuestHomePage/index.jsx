import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function GuestHomePage() {
  return (
    <div className='home-page'>
      <h1 id='home-title'>ProgFolio: Your Path to Productivity!</h1>
      <div className='btn-cont'>
        <Link to="/login">
          <button id="guest-login-button" className="hidden-style-button">Login</button>
        </Link>
        <Link to="/signup">
          <button id="guest-signup-button" className="button-style green-button">Sign Up</button>
        </Link>
      </div>
      <img id='bg-image' src="bg-image.png" alt="" />
    </div>
  )
}
