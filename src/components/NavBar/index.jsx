import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

export default function NavBar() {
  return (
    <>
        <header>
            <nav>
                <NavLink to="/" style={styles}>Home</NavLink>
                <NavLink to='/calendar' style={styles}> Calendar </NavLink>
                <NavLink to='/progress' style={styles}> Progress </NavLink>
                <NavLink to='/accessibility' style={styles}> Accessibility </NavLink>
                <NavLink to='/login' style={styles}>Login</NavLink>
                <NavLink to='/signup' style={styles}>Sign up</NavLink>
            </nav>
        </header>
            <Outlet />
    </>
    
  )
}
