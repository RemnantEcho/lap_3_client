import React, { useState, useEffect } from 'react';
import './style.css'
import GuestHomePage from '../GuestHomePage';
import StudentHomePage from '../StudentHomePage';

export default function HomePage() {
  const [hasToken, setHasToken] = useState(false); // temporary change when auth implemented

  return (
    <>
      {hasToken
      ? <StudentHomePage />
      : <GuestHomePage />
      }
    </>
    
  )
}
