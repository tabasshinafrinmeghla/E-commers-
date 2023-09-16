import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='firstFooter'>
          <h3>Sign Up to latest Collection</h3>
          <div className='footer_box'>
            <input type="email" name="Email" id="FooterEmail" placeholder='Email Address' />
            <button type="submit"  id='footer_button'>Submit </button>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

    </>
  );
};

export default Footer;