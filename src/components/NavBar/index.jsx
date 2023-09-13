import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './style.css'

export default function NavBar() {
  const styles = ({ isActive }) => ({ color: 'black', textDecoration: isActive ? 'underline' : 'none', fontWeight: isActive? 'bold' : 'normal' });
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
            <NavLink to='/login' style={styles}>Login</NavLink>
            <NavLink to='/signup' style={styles}>Sign up</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
