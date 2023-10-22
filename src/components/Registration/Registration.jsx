import React from 'react';
import './Registration.css';

const Registration = () => {
  return (

    <div className='form-container'>
      <h2 className='form-title'>Sign In </h2>
      <form>
        <div className="from-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" placeholder='email' required />
        </div>
        <div className="from-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" placeholder='password' required />
        </div>
        <div className="from-control">
          <label htmlFor="password"> Conform Password</label>
          <input type="password" name="password" id="" placeholder='conform password' required />
        </div>

        <input className='btn-submit' type="submit" value="Login" />

      </form>

    </div>
  );
};

export default Registration;