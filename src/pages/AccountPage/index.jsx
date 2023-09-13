import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './style.css';

export default function AccountPage() {
  const [isEditingDetails, setIsEditingDetails] = useState(false);

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [rPassword, setRPassword] = useState('');

  let tempDetails = {};

  function toggleDetailsEdit(e) {
    e.preventDefault();
    if (!isEditingDetails);
    setIsEditingDetails(!isEditingDetails);
  }

  useEffect(() => {
    const editInputs = document.querySelectorAll('.details-input');
    const editButton = document.querySelector('#account-details-edit-button');
    const submitButton = document.querySelector('#account-details-submit-button');

    if (isEditingDetails) {
      editButton.textContent = "Cancel";
      submitButton.classList.remove('hide');
      editInputs.forEach((el) => {
        el.disabled = false;
      });

    }
    else {
      editButton.textContent = "Edit";
      submitButton.classList.add('hide');
      editInputs.forEach((el) => {
        el.disabled = true;
      });
    }

  }, [isEditingDetails]);

  useEffect(() => {
    const fetchAccountInfo = async () => {
      
    }

    fetchAccountInfo()
  }, []);

  return (
    <>
    <div id="account-page-container">
      <div id="account-main-container">
      <h1 className="account-title page-title green-text">ACCOUNT</h1>
      
      <form id="account-details-form" className="account-form">
        <div className="account-form-top-bar">
          <h2>Personal Details</h2>
          <button id="account-details-edit-button" className="button-style green-button" onClick={toggleDetailsEdit}>Edit Details</button>
        </div>
        <div className="account-input-wrapper">
          <label htmlFor="account-input-fname">First Name</label>
          <input 
            type="text" 
            className="account-input details-input" 
            name="account-input-fname" 
            onChange={(e) => setFName(e.target.value)} 
            value={fName} 
          />
        </div>
        <div className="account-input-wrapper">
          <label htmlFor="account-input-lname">Surname</label>
          <input 
            type="text" 
            className="account-input details-input" 
            name="account-input-lname" 
            onChange={(e) => setLName(e.target.value)  } 
            value={lName}
            />
        </div>
        <div className="account-input-wrapper">
          <label htmlFor="account-input-username">Username</label>
          <input 
            type="text" 
            className="account-input details-input" 
            name="account-input-username" 
            onChange={(e) => setUsername(e.target.value)} 
            value={username}
          />
        </div>
        <div className="account-input-wrapper">
          <label htmlFor="account-input-email">Email</label>
          <input 
            type="text" 
            className="account-input details-input" 
            name="account-input-email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
           />
        </div>
        
        <input 
          type="submit" 
          id="account-details-submit-button" 
          className="button-style green-button"
        />
      </form>
      
      
      <form id="account-password-form" className="account-form">
        <h2> Change password </h2>
        <div className="account-input-wrapper">
        <label htmlFor="old-password">Password</label>
          <input 
          type="text"
          className="account-input" 
          name="old-password" 
          id="old-password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
        </div>
        
         <div className="account-input-wrapper">
          <label htmlFor="new-password">Re-Type Password</label>
          <input 
            type="text" 
            className="account-input" 
            name="new-password" 
            id="new-password"
            onChange={(e) => setRPassword(e.target.value)}
            value={rPassword}
          />
        </div>
        
        <button id="account-password-submit-button" className="button-style green-button">Change</button>
      </form>

      </div>
    </div>
    </>

    
    
  )
}
