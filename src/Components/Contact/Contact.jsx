import React, { useRef, useState } from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "0d0384b7-b482-4762-a4bb-6c312a095228");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message was sent successfully");
      alert("Message sent successfully! 😊");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <motion.div
      id='contact'
      className='contact'
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } }
      }}
    >
      <motion.div
        className="contact-title"
        variants={{
          hidden: { opacity: 0, x: 80 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1>Get in touch</h1>
      </motion.div>

      <div className="contact-section">
        <motion.div
          className="contact-left"
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1>Let's talk</h1>
          <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail" />
              <p>alok.kumar.ug22@nsut.ac.in</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call" />
              <p>+91-8287784373</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>New Delhi, India</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          className='contact-right'
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <label htmlFor='name'>Your Name</label>
          <input type="text" id="name" name='name' placeholder='Enter your name' required />

          <label htmlFor='email'>Your Email</label>
          <input type="email" id="email" name='email' placeholder='Enter your email' required />

          <label htmlFor='message'>Write your message here</label>
          <textarea id="message" name='message' rows="6" placeholder='Enter your message' required></textarea>

          <button type='submit' className="contact-submit">Submit Now</button>
          <p className="form-status">{result}</p>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
