import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <motion.div 
        className="w-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.div 
          className="awesome"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* dark Mode */}
          <motion.span 
            style={{ color: darkMode ? "white" : "white" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Works for All these
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
          >Brands & Clients</motion.span>
          <motion.spane 
            style={{background:"cyan"}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
I am senior React js/Next.js and Node js nest and express developer with 8 + years experience              <br />
           I works as Senior MERN Stack developer at SolutionWIngs.io LTD,Islamabad 
             
            <br />
            {/* Also works as node js developer as Freelancer */}
            <br />
           <span className="ml-8 text-muted">Full Stack Developer</span> 
          </motion.spane>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="'https://wa.me/+923189391781'" smooth={true} spy={true}>
              <button className="button s-button">Hire Me</button>
            </Link>
          </motion.div>
          <motion.div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </motion.div>

        {/* right side */}
      </motion.div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <motion.div 
            className="w-secCircle"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s'} alt="" />
          </motion.div>
          <motion.div 
            className="w-secCircle"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <img src={'https://camo.githubusercontent.com/54d64f1260052c96ce70c540bd64ee83edbe865aa765941bbc012821744fe265/68747470733a2f2f6173736574732e7a6569742e636f2f696d6167652f75706c6f61642f76313533383336313039312f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6a732e706e67'} alt="" />
          </motion.div>
          <div className="">
            <img alt="" />
          </div>{" "}
          <motion.div 
            className="w-secCircle"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ktLx11LIB8SVdDFdpmalA3NTJXgd2MqwohJt7yiu7g&s'} alt="" />
          </motion.div>
          <motion.div 
            className="w-secCircle"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMRs58hmAkTEaN5AMpXvhgc43KMzQxrXEr9RcrDOSUA&s'} alt="" />
          </motion.div>
        </motion.div>
        {/* background Circles */}
        <motion.div 
          className="w-backCircle blueCircle"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="w-backCircle yellowCircle"
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Works;
