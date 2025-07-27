import React, { useRef } from 'react';
import './Services.css';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import { useInView, motion } from 'framer-motion';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="services"
      id="services"
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className="services-title">
        <h1>TechStack</h1>
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <img src={service.image} alt={service.s_name} className="service-img" />


            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>

            
          </div>
        ))}
      </div>
      <div className="navbar-underline4" />
    </motion.div>
  );
};

export default Services;
