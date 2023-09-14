import React, { useState, useEffect } from 'react';
import './style.css'
import GuestHomePage from '../GuestHomePage';
import StudentHomePage from '../StudentHomePage';
import useAuth from '../../hooks/useAuth';

export default function HomePage() {
  const [hasToken, setHasToken] = useState(false); // temporary change when auth implemented
  const { auth } = useAuth();

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
    {console.log(auth)}
      {auth && Object.keys(auth).length !== 0
      ? <StudentHomePage />
      : <GuestHomePage />
      }
    </>
    
  )
}
