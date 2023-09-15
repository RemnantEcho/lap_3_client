import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username:'',
        email: '',
        password: '',
        regDate: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const registrationData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            regDate: new Date(),
          };

       

          

   
        axios.post('http://localhost:3000/users/register', registrationData).then((response) => {
            console.log("thank u for registering", response.status)
        });
      
} 
    
  return (
    <div>
      <form id="signup-form" onSubmit={handleSubmit}>
      <h1 id="signup-title" role="heading">Sign Up</h1>
      <p className="signup-login-text">Already have an account? <Link to="/login" className="signup-login-button">Login</Link></p>
      <div className="signup-horizontal-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input
            className="signup-input"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="signup-horizontal-wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input
            className="signup-input"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="signup-horizontal-wrapper">
          <label htmlFor="email">Email</label>
          <input
            className="signup-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="signup-horizontal-wrapper">
          <label htmlFor="username">Username</label>
          <input
            className="signup-input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="signup-horizontal-wrapper">
          <label>Password</label>
          <input
            className="signup-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <input id="signup-button" className="button-style green-button" type="submit" defaultValue="Sign up" />
      </form>
      
    </div>
  )
}

export default RegistrationForm
