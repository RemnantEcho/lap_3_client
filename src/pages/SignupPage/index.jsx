import React from 'react';

export default function SignupPage() {
  return (
    <div id="form-container">
      <h2>Sign Up</h2>
      <form id="form">
        <input type="text" id="Name" name="Name" placeholder="First Name" />
        <input type="text" id="Surname" name="Surname" placeholder="Last Name" />
        <input type="text" id="username" name="username" placeholder="Username" />
        <input type="text" id="Email" name="Email" placeholder="Email" />
        <input type="password" id="password" name="password" placeholder="Password" />
        <input type="submit" value="Register" id="register-btn" />
      </form>
      <div id="login">
        <p>Already Registered? <a id="link-login" href="./login.html">Log In here</a></p>
      </div>
    </div>
  )
}
