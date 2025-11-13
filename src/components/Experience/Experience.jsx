import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      className="experience" 
      id='experience'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="achievement" variants={itemVariants}>
        {/* darkMode */}
        <motion.div 
          className="circle" 
          style={{color: darkMode?'var(--orange)':''}}
          variants={circleVariants}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >8</motion.div>
        <span  style={{color: darkMode?'white':'white'}}>years </span>
        <span>Experience</span>
      </motion.div>
      <motion.div className="achievement" variants={itemVariants}>
        <motion.div 
          className="circle" 
          style={{color: darkMode?'var(--orange)':''}}
          variants={circleVariants}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >30+</motion.div>
        <span  style={{color: darkMode?'white':'white'}}>completed </span>
        <span>Projects</span>
      </motion.div>
      <motion.div className="achievement" variants={itemVariants}>
        <motion.div 
          className="circle" 
          style={{color: darkMode?'var(--orange)':''}}
          variants={circleVariants}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >2</motion.div>
        <span  style={{color: darkMode?'white':'white'}}>company </span>
        <span>Works</span>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
