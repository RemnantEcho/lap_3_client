import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

export default function NavBar() {
  return (
    <>
        <header>
            <nav>
                <NavLink to="/" style={styles}>Home</NavLink>
                <NavLink to='/calendar'> Calendar </NavLink>
                <NavLink to='/progress'> Progress </NavLink>
                <NavLink to='/accessibility'> Accessibility </NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Sign up</NavLink>
            </nav>
        </header>
            <Outlet />
    </>
    
  )
}
