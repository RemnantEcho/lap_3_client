import React, {useRef, useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import axios from '../../api/axios';

const LOGIN_URL = 'users/login'; //matches his backend url

const LoginForm = () => {
    const { setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const[user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');

    }, [user,pwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitting")
        try {
            console.log("entered try statement")
            console.log("this is username",username, "this is user", user,"this one is password",password, "this one is pwd", pwd)
            const response = await axios.post(LOGIN_URL, JSON.stringify({ username: user,password: pwd}),
            
            
            {
                headers: { 'Content-Type': 'application/json'},
                withCredentials:true
            }
            ); 

            console.log(JSON.stringify(response.data))
            console.log(JSON.stringify(response))
            const accesToken = response?.data?.accessToken; // need to check these two lines
            const roles = response?.data?.roles // need to check these two lines properly 24 
            setAuth({user,pwd,roles, accesToken})
            setUser('');
            setPwd('');
            setSuccess(true);
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
  return (

    <>
    {success ? (
        <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
                <a href="#">Go to Home</a>
            </p>
        </section>
    ) :  (  
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
)}
</>

  )
}


export default LoginForm
