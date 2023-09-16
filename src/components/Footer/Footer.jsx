import React from 'react';
import './Footer.css'
import logo from '../ema-john-resources-main/images/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faCoffee, faEnvelope, faLink, faLocation, faLocationDot, faPhone, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='firstFooter'>
          <h3>Sign Up to our latest Collection</h3>
          <div className='footer_box'>
            <input type="email" name="Email" id="FooterEmail" placeholder='Email Address' />
            <button type="submit" id='footer_button'>Submit </button>
          </div>
        </div>
        <div className='endOfFooter'>
          <div className='footerLogo'>
            <img src={logo} alt="" id='footerLogo' />
          </div>
          <div className='menu'>
            <h3>Menu</h3>
            <hr className='h' />
            <div className='angcerTag'>
              <a href="http://localhost:5173/">Home</a>
              <a href="http://localhost:5173/orderReview">Order Review</a>
              <a href="http://localhost:5173/Inventory">Manage Inventory</a>
              <a href="http://localhost:5173/Contact">Contact</a>
              <a href="http://localhost:5173/Login">Sing In</a>
            </div>
          </div>
          <div className='Contact_footer'>
            <h3>Follow Us</h3>
            <hr className='h' />
            <p><FontAwesomeIcon icon={faAddressBook} /> Facebook </p>
            <p><FontAwesomeIcon icon={faLink} />  LinkIn</p>
            <p ><FontAwesomeIcon icon={faEnvelope} /> Gmail-******@gmail.com</p>
            <p> <FontAwesomeIcon icon={faPhone} />Phone No-******898</p>
            <p> <FontAwesomeIcon icon={faLocationDot} />Location-Rampura-292,B-block,Dhaka</p>

          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;