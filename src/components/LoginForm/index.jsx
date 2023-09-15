import React, {useRef, useState, useEffect} from 'react'
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { useContext } from 'react';

const LoginForm = () => {
    const { auth, setAuth } = useAuth();
    
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const userRef = useRef();
    const errRef = useRef();
    const [success, setSuccess] = useContext('');
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');

    }, [user,pwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitting")
        const data = {
            username: user,
            password: pwd
        }
        try {
            
            console.log("entered try statement")
            console.log("this is username",username, "this is user", user,"this one is password",password, "this one is pwd", pwd)
            const response = await axios.post('/users/login', data);
            console.log(response.data);
            const accessToken = response.data.token;
            const id = response.data.id;
            console.log(accessToken)

            // need to check these two lines
            await setAuth({user, pwd, accessToken, id})
            setUser('');
            setPwd('');
            console.log(auth);
            navigate(from, {replace: true});
        }

        catch (err) {
            if(!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Username or Password")
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized")
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }

       
    }
    useEffect(() => {
        // Check if the user is authenticated (based on your condition)
        if (success) {
          // If authenticated, redirect to the homepage
        
        navigate('/welcome'); 
        }
    }, [success])

   
  return (
    
   

    <section>
        
      <form id="login-form" onSubmit={handleSubmit}>
        <h1 id="login-title">Login</h1>
        <p className="login-signup-text">Don't have an account? <Link to="/signup" className="login-sign-up-button">Sign Up</Link></p>
        <p ref={errRef} className= {errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

        <label htmlFor="username">Username</label>
        <input 
        className="login-input" 
        type="text" 
        id="username" 
        ref={userRef}
        onChange={(e) => setUser(e.target.value)}
        value={user}
        required
        /> <br />
        <label htmlFor="password">Password</label>
        <input 
        className="login-input"
        type="password" 
        id="password" 
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required
        />
        <input type="submit" id="login-button" className="button-style green-button" defaultValue="Log in" />
      </form>
    </section>
  )
}


export default LoginForm
