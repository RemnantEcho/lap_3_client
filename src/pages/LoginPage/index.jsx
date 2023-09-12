import React from 'react';

export default function LoginPage() {
  return (
    <div id="form-container">
      <h2>Login</h2>

      <form id="login-form">
      <input type="text" name="email" placeholder="Email" />
        <input type="text" id="username" name="username" placeholder="Username" />
        <input type="password" id="password" name="password" placeholder="Password" />
        <input type="submit" value="Log In" class="login-btn" />
      </form>

      <div id="login">
        <p>Don't have an account? <a id="link-register" href="./register.html">Register here</a></p>
      </div>
    </div>
  )
}
