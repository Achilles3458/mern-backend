import React from 'react'
import login from "../images/login.jpg"
import { NavLink } from 'react-router-dom'

const Login = () => {
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
              <form className='register-form' id='register-form'>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className='zmdi zmdi-email material-icons-name'></i>
                  </label>
                  <input type="email" name='email' id='email' autoCapitalize='off' placeholder='Your Email'/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className='zmdi zmdi-lock material-icons-name'></i>
                  </label>
                  <input type="password" name='password' id='password' autoCapitalize='off' placeholder='Your Password'/>
                </div>
                <div className="from-group from-button">
                  <input type="submit" name='signin' id='signin' className='form-submit' value="Log in" />
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
