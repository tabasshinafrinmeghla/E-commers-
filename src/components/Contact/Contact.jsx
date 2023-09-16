import React from 'react';
import './Contact.css'
import LiveTime from '../Live_time/LIveTime';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <>
      <div>
        <h1 className='Contact'> "Contact us" </h1>

        <p className='Contact_text'>Welcome to our E-commerce platform. We value your feedback, inquiries, and concerns. Our dedicated support team is here to assist you. Please feel free to reach out to us through the following channels </p>
      </div>
      <div className='live_time'>
        <LiveTime></LiveTime>
      </div>
      <div className='input_text'>
        <input type="email" id="email" pattern=".+@globex\.com" size="50" required placeholder="Enter a gmail address" />
        <input type="text" id="text" pattern=".+@globex\.com" size="50" required placeholder="Enter your phone number" />
        <input type="text" id="feed" pattern=".+@globex\.com" size="50" required placeholder="your feed back" />
        <button type="submit" id='submit'>Submit</button>
      </div>
      <div>

        <h1 id='Business'> Business Hours:</h1>
        <h4 className='time'>Monday to Friday: <span >10:00AM to 08;00 PM</span></h4>
        <h4 className='time'>Saturday: <span >10:00AM to 04;00 PM</span></h4>
        <h4 className='time'>Sunday: <span >10:00AM to 04;00 PM</span></h4>
      </div>
      <Footer></Footer>

    </>
  );
};

export default Contact;