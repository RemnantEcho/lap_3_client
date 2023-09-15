import React from 'react';
import GetProgress from '../../components/GetProgress'
import './style.css';

export default function ProgressPage() {
  return (
    <>
    <div className="progress_body">
    <h1 id="progress_title">PROGRESS</h1>
    <GetProgress/>
    </div>
    <img id='bg-image-small' src="bg-image.png" alt="logo" />
    </>
  )
}
