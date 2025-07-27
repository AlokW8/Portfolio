import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Services from './Components/Services/Services.jsx'
import MyWork from './Components/MyWork/MyWork.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import './App.css';

import { motion } from 'framer-motion';

// Animation variant: bottom to top with fade
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const App = () => {
  return (
    <div className="appbg">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <Navbar />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
      >
        <Hero />
      </motion.div>

      {/* No animation on these below */}
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
