import React, {useRef, useState, useEffect, useContext} from 'react'
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
        const data = {
            username: user,
            password: pwd
        }
        try {
            
            console.log("entered try statement")
            console.log("this is username",username, "this is user", user,"this one is password",password, "this one is pwd", pwd)
            const response = await axios.post('/users/login', data);
            const accessToken = response.data.accessToken;
            // need to check these two lines
            const roles = response.data.roles // need to check these two lines properly 24 
            setAuth({user,pwd,roles, accessToken})
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
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
        type="text" 
        id="username" 
        ref={userRef}
        onChange={(e) => setUser(e.target.value)}
        value={user}
        required
        /> <br />
        <label htmlFor="password">Password:</label>
        <input 
        type="password" 
        id="password" 
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required
        />
        <button>Sign-in</button>
      </form>
    </section>
)}
</>

  )
}


export default LoginForm
