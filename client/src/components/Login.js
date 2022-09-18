import React,{useState} from 'react'
import login from "../images/login.jpg"
import { NavLink, useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginUser = async (e) =>{
    e.preventDefault();
    const res = await fetch('/signin',{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Credentials");
    } else{
      window.alert("Login success")
      history.push("/");
    }
  }
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="sign-content">
          <div className="sign-image">
                <figure>
                  <img src={login} alt="loginpic"/>
                </figure>
                <NavLink to= "/login" classNames='signin-image-link'>Create an Account</NavLink>
              </div>
            <div className="signin-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className='register-form' id='register-form'>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className='zmdi zmdi-email material-icons-name'></i>
                  </label>
                  <input type="email" name='email' id='email' autoCapitalize='off' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email'/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className='zmdi zmdi-lock material-icons-name'></i>
                  </label>
                  <input type="password" name='password' id='password' autoCapitalize='off' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Your Password'/>
                </div>
                <div className="from-group from-button">
                  <input type="submit" name='signin' id='signin' className='form-submit btn btn-primary' value="Log in" onClick={loginUser}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
