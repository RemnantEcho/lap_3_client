import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './style.css';

export default function StudentHomePage() {
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users/0');
        if (response.status === 200) {
            const responseData = response.data;
            setName(responseData.User.firstName)
            

        }
      } catch (error) {
          console.error('Error fetching data:', error);
          setName('Geoff');
      }
    }

    fetchName();
  }, []);


  return (
    <>
    <div id="student-home-page" className='home-page'>
      <h1>Welcome {name} </h1>

      <Link to='/calendar'>
        <div className="student-home-box">
          <img className="student-home-image" src="../../../public/calendar-icon.png" alt="calendar"></img>
          <h2 className="student-home-box-title">Calendar</h2>
        </div>
      </Link>

      <Link to='/progress'>
        <div className="student-home-box">
          <img className="student-home-image" src="../../../public/progress-icon.png" alt="progress"></img>
          <h2 className="student-home-box-title">Progress</h2>
        </div>
      </Link>

      <Link to='/account'>
        <div className="student-home-box">
          <img className="student-home-image" src="../../../public/account-icon.png" alt="account"></img>
          <h2 className="student-home-box-title">Account</h2>
        </div>
      </Link>
    </div>
    </>
  )
}
