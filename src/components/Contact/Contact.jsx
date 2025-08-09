import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', '6811d7fc-4f11-4a6c-a79d-b15448a848a4');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('✅ Form Submitted Successfully!');
      event.target.reset();
    } else {
      console.error('❌ Error', data);
      setResult('❌ ' + data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>
            I’m always excited to connect, collaborate, and contribute! Whether you have a question,
            a project idea, or just want to say hello — feel free to reach out. I’m open to
            opportunities in web development, mobile app development, AI projects, internships, and
            tech communities. Let’s work together to create something impactful. Your message is
            always welcome!
          </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='' />
              <p>gemtessadeksisa@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='' />
              <p>0903735890</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt='' />
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
          <label>Your Name</label>
          <input type='text' placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email' required />
          <label>Your Message</label>
          <textarea name='message' rows='8' placeholder='Enter your idea' required></textarea>
          <button type='submit' className='contact-submit'>
            Submit now
          </button>
          {result && <p className='form-result'>{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
