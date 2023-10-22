// import React from 'react';
import './Header.css'
import logo from '../ema-john-resources-main/images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>

      <img src={logo} alt="" />
      <div className='angkor_tag'>
        <Link to="/">Order</Link>
        <Link to="orderReview">Order Review</Link>
        <Link to="Inventory">Manage Inventory</Link>
        <Link to="Contact">Contact</Link>
        <Link to="Login">Log in</Link>
        <Link to="Registration">Sign up </Link>


      </div>

    </div>
  );
};

export default Header;