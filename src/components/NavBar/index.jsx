import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import './style.css'
import useAuth from '../../hooks/useAuth';

export default function NavBar() {
  const styles = ({ isActive }) => ({ color: 'black', textDecoration: isActive ? 'underline' : 'none', fontWeight: isActive? 'bold' : 'normal' });
  const { auth, setAuth } = useAuth();
  
  async function handleLogout(e) {
    e.preventDefault();
    console.log(auth);
    await setAuth({});
    console.log(auth);
    console.log(auth && Object.keys(auth).length !== 0 ? true : false);
    // useNavigate('/home');

  }

  return (
    <>
      <header>
        <nav className='navbar-container'>
          
          <div id='logo-container'>
            <img src="./logo.png" alt="Logo" />
          </div>

          <div id='top-links-container'>  
            <NavLink to="/" style={styles}>Home</NavLink>
            <NavLink to='/calendar' style={styles}> Calendar </NavLink>
            <NavLink to='/progress' style={styles}> Progress </NavLink>
            <NavLink to='/accessibility' style={styles}> Accessibility </NavLink>
          </div>

          <div id='bottom-links-container'>
            { auth && Object.keys(auth).length !== 0 ?
            <>
              <NavLink to='/account' style={styles}>Account</NavLink>
              <a id="nav-logout" href="" onClick={handleLogout}>Logout</a>
            </>
            :
            <>
              <NavLink to='/login' style={styles}>Login</NavLink>
              <NavLink to='/signup' style={styles}>Sign up</NavLink>
            </> }
            
            
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
