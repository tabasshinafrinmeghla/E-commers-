import React, { useState } from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';

const Registration = () => {

  // password same na hole error dibe 
  const [error, setError] = useState()


  const handleSignUp = event => {
    event.preventDefault();
    // for stop reload 

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const conformPassword = form.conformPassword.value;
    console.log(email, password, conformPassword)
    // condition check korbe password same ki na 
    if (password !== conformPassword) {
      setError('please put on same password!')


    }

    else if (password.length < 6) {

      setError('please put on must be 6 characters ')

    }
    alert('Successfully you Enrolled');


  }

  return (

    <div className='form-container'>
      <h2 className='form-title'>Sign In </h2>
      <form onSubmit={handleSignUp}>
        <div className="from-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" placeholder='email' required />
        </div>
        <div className="from-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" placeholder='password' required />
        </div>
        <div className="from-control">
          <label htmlFor="conformPassword"> Conform Password</label>
          <input type="password" name="conformPassword" id="" placeholder='conform password' required />
        </div>



        <input className='btn-submit' type="submit" value="Login" />

      </form>
      <p><small>Already have an account?<Link to='/Login'>Log in</Link> </small></p>

      <p className='text-error'>{error}</p>
    </div>
  );
};

export default Registration;