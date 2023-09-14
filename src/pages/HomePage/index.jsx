import React, { useState, useEffect } from 'react';
import './style.css'
import GuestHomePage from '../GuestHomePage';
import StudentHomePage from '../StudentHomePage';

export default function HomePage() {
  const [success, setSuccess] = useState(false); // temporary change when auth implemented

  return (
    // <div className='home-page'>
    //   <h1 id='home-title'>ProgFolio: Your Path to Productivity!</h1>
    //   <div className='btn-cont'>
    //     <button id='login-btn'>Login</button>
    //     <button id='signup-btn'>Sign Up</button>
    //   </div>
    //   <img id='bg-image' src="bg-image.png" alt="" />
    // </div>
    <>
      {success
      ? <StudentHomePage />
      : <GuestHomePage />
      }
    </>
    
  )
}
