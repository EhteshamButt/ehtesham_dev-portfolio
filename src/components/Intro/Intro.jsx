import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <motion.div 
        className="i-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.div 
          className="i-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* yahan change hy darkmode ka */}

       




          <span style={{ color: darkMode ? "white" : "white" }}>Hy! I Am</span>
     <h3 className="animate-charcter">Ehtesham Ali</h3>
           <span style={{fontWeight:'bold',color:"cyan"}}>



     <span class="title-word title-word-1">Senior Full Stack Developer</span>
    <span class="title-word title-word-2"> with</span>
    <span class="title-word title-word-3"> 8 + years experience</span>
    <span class="title-word title-word-4"> Next.js React js Node Nest js and Express js</span>
  

          </span>
        </motion.div>
        <motion.a 
          href="https://wa.me/+923189391781" 
          smooth={true} 
          spy={true}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="button i-button">Hire me</button>
        </motion.a>
        {/* social icons */}
        <motion.div 
          className="i-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            className="nav-link text-light"
            href="https://github.com/Ehteshambutt"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          ><img src={Github} alt="" /></motion.a>
          <motion.a
            className="nav-link text-light"
            href="https://www.linkedin.com/in/ehtesham-butt-837200162/"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          ><img src={LinkedIn} alt="" /></motion.a>
          
          <motion.a
            className="nav-link text-light"
            href="https://www.instagram.com/ehteshambutt58/"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          ><img src={Instagram} alt="" /></motion.a>
        </motion.div>
      </motion.div>
      {/* right image side */}
      <div className="i-right crwn1">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div crwn"
        >
          <FloatinDiv  img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="React js Next.js" text2=" Node js Express js" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
