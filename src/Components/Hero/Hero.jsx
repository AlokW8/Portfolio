import React from 'react';
import './Hero.css';
import Profile_img from '../../assets/Profile_img.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  const handleResumeDownload = () => {
  const link = document.createElement('a');
  link.href = '/ResumeAlokAlok.pdf';
  link.download = 'Alok_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Toast: download started
  toast.info('⬇️ Resume download started...');

  // Toast: simulate completion after 2 seconds
  setTimeout(() => {
    toast.success('✅ Resume downloaded successfully!');
  }, 2000);
};


  return (
    <>
    <div id='home' className='hero'>
      <img src={Profile_img} alt="Profile" className="profile-img" />

    <h1 className='hero-heading'>
      I'm Alok, Aspiring Full Stack Developer
    
</h1>

<TypeAnimation
  sequence={[
    "I'm a passionate Full Stack Developer skilled in building robust web applications using modern technologies. " +
    "I actively solve Data Structures and Algorithms problems to strengthen my coding skills. " +
    "Curious, detail-oriented, and always eager to learn — I strive to write clean, efficient, and scalable code.",
  ]}
  speed={60}
  wrapper="p"
  cursor={false}
  repeat={0}
  className="hero-description"
/>



      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink
  className="hero-connect"
  href="#contact"
  offset={50}
>
  Connect with me
</AnchorLink>


        </div>

        <div className="hero-resume">
          <button className="glow-on-hover" onClick={handleResumeDownload}>
            My Resume
          </button>
        </div>
      </div>

      {/* Toast container for notifications */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
    <div className="navbar-underline2" />
    </>
  );
};

export default Hero;
