import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export default function NotFoundPage() {
  return (
    <div id='notFoundPage'>
    <img id='not-found' src="paper.png" alt="" />

    <h1 id='not-found-text'>404: PAGE NOT FOUND</h1>
    <button id='home-btn' className="button-style green-button"><Link id='home-link' to='/'> Home </Link></button>
    </div>
  )
}
