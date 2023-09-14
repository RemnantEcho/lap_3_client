import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './style.css';
import useAuth from '../../hooks/useAuth';

export default function StudentHomePage() {
  const [name, setName] = useState('');
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${auth.id}`);
        if (response.status === 200) {
            const responseData = response.data;
            console.log(responseData);
            setName(responseData.User.firstName)
            

        }
      } catch (error) {
          console.error('Error fetching data:', error);
      }
    }

    fetchName();
  }, []);


  return (
    <>
    <div id="student-home-page" className='home-page'>
      <h1 id="student-home-greeting">Welcome {name} </h1>
      <div id="student-home-wrapper">
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
      
    </div>
    </>
  )
}
