import React, { useRef } from 'react'
import './About.css'
import Profile_img2 from '../../assets/Profile_img2.jpeg'
import { motion, useInView } from 'framer-motion';

const About = () => {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="about-container"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id="about" // important for anchor link to work
    >
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
    <div className="about-section">
        <div className="about-left">
            <img src={Profile_img2} alt=""/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hello, I'm Alok, currently pursuing B.Tech from Netaji Subhas University of Technology.
My interests lie in the tech domain, and I enjoy exploring various fields within it.
I love building new things, creating projects, and continuously learning.
I'm also a competitive programming enthusiast with over 800 problems solved across various platforms.
My expertise lies in the MERN stack, and I also have hands-on experience with Python and FastAPI.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML && CSS</p><hr style={{width:"55%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr style={{width:"60%"}}/>
                </div>
                <div className="about-skill">
                    <p>Javascript</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>Next JS</p><hr style={{width:"30%"}}/>
                </div>
                <div className="about-skill">
                    <p>Python</p><hr style={{width:"50%"}}/>
                </div>
            </div>
        </div>
    </div>
   
    </div>
    <div className="navbar-underline3" />
    </motion.div>
  )
}

export default About