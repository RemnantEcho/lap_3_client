import React from 'react';
import './style.css'

export default function HomePage() {
  return (
    <div className='home-page'>
      <h1>Welcome to the app</h1>
      <div className='btn-cont'>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  )
}
