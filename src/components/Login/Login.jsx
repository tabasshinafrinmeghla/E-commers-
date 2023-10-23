
import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {

  /**
   * sinIn আসবে useContext er AuthContext থেকে
  */

  const { signIn } = useContext(AuthContext);
  /**
   * log in korar por home page e niye jabe 
   * */
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || '/';


  const handleLogIn = event => {
    event.preventDefault();

    /**
     * input theke data neyar jonno amra from er email theke value nicchi */




    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password,)


    signIn(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error)
      })


  }



  return (
    <>
      <div className='form-container'>
        <h2 className='form-title'>Log in</h2>
        <form onSubmit={handleLogIn}>
          <div className="from-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" placeholder='email' required />
          </div>
          <div className="from-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" placeholder='password' required />
          </div>
          <input className='btn-submit' type="submit" value="Login" />

        </form>

        <p><small>if you didn't Enroll please <Link to='/Registration'>Create Account</Link></small></p>

      </div>
    </>
  );
};

export default Login;