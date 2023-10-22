// import React from 'react';
import './Header.css'
import logo from '../ema-john-resources-main/images/Logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {

  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    <div className='header'>

      <img src={logo} alt="" />
      <nav className='angkor_tag'>
        <Link to="/">Order</Link>
        <Link to="orderReview">Order Review</Link>
        <Link to="Inventory">Manage Inventory</Link>
        <Link to="Contact">Contact</Link>
        <Link to="Login">Log in</Link>
        <Link to="Registration">Sign up </Link>

        {/* যদি ইউজার থাকে তাহলে আমরা ওয়েল কাম দেখাবো */}
        {
          user && <span> {user.email}</span>
        }


      </nav>

    </div>
  );
};

export default Header;