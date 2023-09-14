import React from 'react';
import './style.css'

export default function HomePage() {
  return (
    <div className='home-page'>
      <h1 id='home-title'>ProgFolio: Your Path to Productivity!</h1>
      <div className='btn-cont'>
        <button id='login-btn'>Login</button>
        <button id='signup-btn'>Sign Up</button>
      </div>
      <img id='bg-image' src="bg-image.png" alt="" />
    </div>
  )
}
