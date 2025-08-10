import React from 'react';
import './Footer.css';
// import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg'; // ✅ Fixed path and uncommented

const Footer = () => {
  return (
    <div id='contact' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={footer_logo} alt=" " /> */}
          <p>I am a MERN-STACK developer from Ethiopia with 3 in years of experience.</p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe"><p>Subscribe</p></div>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">  ©  2025 Gemtessa Deksisa. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy police </p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
