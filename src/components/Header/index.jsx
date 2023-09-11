import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

export default function Header() {
  return (
    <>
        <header>
            <nav>
                <NavLink to="/" style={styles}>Home</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </>
    
  )
}