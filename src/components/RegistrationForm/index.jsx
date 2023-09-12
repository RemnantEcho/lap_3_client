import React, {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';

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
            console.log("thank u for registering", response.status, response.formData.token)
        });
      
} 



    
  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Register</button>
      </form>
      
    </div>
  )
}

export default RegistrationForm
