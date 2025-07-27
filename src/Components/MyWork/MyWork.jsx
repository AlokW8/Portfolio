import React, { useRef } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const directions = [
  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } }, // left
  { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } }, // top
  { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },  // right
  { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },  // bottom
];

const MyWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      id="work"
      className="mywork"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>

      <div className="mywork-container">
  {mywork_data.map((work, index) => (
    <motion.div
      className="mywork-card"
      key={index}
      variants={directions[index % directions.length]}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <img src={work.w_img} alt="" className="mywork-image" />
      <div className="mywork-overlay">
        <button onClick={() => window.open(work.w_url, "_blank")}>View Code</button>
      </div>
    </motion.div>
  ))}
</div>


      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </motion.div>
  );
};

export default MyWork;
