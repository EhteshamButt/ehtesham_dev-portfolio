import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";

import legalpro from "../../img/legalpro.png";

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
  <>
  <motion.div 
    className="center-text2 text-center"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, type: "spring" }}
  >
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >Recent Projects</motion.span>
    <br />
    <motion.span 
      className="text-muted text11"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      Our client projects are highly confidential and protected by login credentials. To access these exclusive insights and resources, access exclusive client projects by logging in with my test credentials. Company/Clients privacy is my priority. Thank you for your understanding and cooperation.
      <br/>
      <span class="text-muted textt" style={{textAlign: 'center', display: 'block', margin: '0 auto',marginTop:"1rem"}}></span>
    </motion.span>
  </motion.div>


  <motion.div 
    className="bodys" 
    style={{borderRadius:'50px',height:"auto"}}
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
  <motion.a 
    href='https://legalpro-law-assistant-xqou.vercel.app/'
    variants={itemVariants}
    whileHover={{ scale: 1.05, y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div class="card-wrap bbbb">
      <div class="card-header one" style={{ height: '200px' }}>
        <img src={legalpro} alt="Legal Pro project" style={{ width: '100%', height: '100%' }} />
      </div>
      <div class="card-content">
        <h1 class="card-title">Legal Pro for law firm
        in React.js and Node Project</h1>
        <p class="card-text">Used React.js and Node Tailwind css,html,css3 and i added
        link of project here.</p>
        <a href='https://legalpro-law-assistant-xqou.vercel.app/'>
          <button class="card-btn one">Click</button>
        </a>
      </div>
    </div>
  </motion.a>
  <motion.a 
    href='https://welcome.doingthistogether.com/MainScreen'
    variants={itemVariants}
    whileHover={{ scale: 1.05, y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div class="card-wrap bbbb">
  <div class="card-header one" style={{ height: '200px' }}>
    <img src='https://res.cloudinary.com/alpja/image/upload/v1702752171/e7dslq84hzg0wdxyyvyp.png' alt="Medical Test System project" style={{ width: '100%', height: '100%' }} />
  </div>
  <div class="card-content">
    <h1 class="card-title">Medical Test System for Hospital in React.js Node js</h1>
    <p class="card-text">Used bootstrap5,html,css3 with react js Node js and i added
    link of project here.</p>
    <a href='https://welcome.doingthistogether.com/MainScreen'>
      <button class="card-btn one">Click</button>
    </a>
  </div>
    </div>
  </motion.a>
  <motion.a 
    href='https://tech.doingthistogether.com/login'
    variants={itemVariants}
    whileHover={{ scale: 1.05, y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div class="card-wrap">
  <div class="card-header two" style={{ height: '200px' }}>
    <img src='https://res.cloudinary.com/alpja/image/upload/v1702752592/vffs7bx9yrfsk98aorz9.png' alt="Hospital system project" style={{ width: '100%', height: '100%' }} />
  </div>
  <div class="card-content">
    <h1 class="card-title">doingthistogether, a complete hospital system in Next/Reactjs/Node</h1>
    <p class="card-text">I used React js and Node js for it with Materail UI and many more functionalties</p>
    <a href='https://tech.doingthistogether.com/login'>
      <button class="card-btn two">Click</button>
    </a>
  </div>
    </div>
  </motion.a>
  <motion.a 
    href='https://saloonshop.vercel.app/'
    variants={itemVariants}
    whileHover={{ scale: 1.05, y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  > 
    <div class="card-wrap">
  <div class="card-header three">
  <img src='https://res.cloudinary.com/alpja/image/upload/v1704651644/ueg5qjvk46j6jhqofvfu.png' alt="Saloon Shop project" style={{ width: '100%', height: '100%' }} />
  </div>
  <div class="card-content">
    <h1 class="card-title">Saloon Shop/Services website in React js and Nest js Node</h1>
    <p class="card-text">A React js project
    with bootstrap5 and some animations click below to view</p>
    <a href='https://saloonshop.vercel.app/'> <button class="card-btn three">Click</button></a>
     </div>
    </div>
  </motion.a>
  <motion.a 
    href='https://medassist.devforhealth.com/'
    variants={itemVariants}
    whileHover={{ scale: 1.05, y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  > 
    <div class="card-wrap">
  <div class="card-header four">
  <img src='https://res.cloudinary.com/alpja/image/upload/v1702752829/crsvhuzcpfgjvgdrdgz9.png' alt="Medassist hospital system" style={{ width: '100%', height: '100%' }} />
  </div>

  <div class="card-content">
    <h1 class="card-title">medassist in React.js a complete hospital System</h1>
    <p class="card-text">This is complete React js Node project and is syetem for a USA hospital link </p>
    <a href='https://medassist.devforhealth.com/'> <button class="card-btn four">Click</button></a>
     </div>
    </div>
  </motion.a>
  <motion.a 
    href='https://podstarz.net/'
    variants={itemVariants}
    whileHover={{ scale: 1.05, y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  > 
    <div class="card-wrap">
  <div class="card-header four">
  <img src='https://res.cloudinary.com/dgmjg9zr4/image/upload/v1746661034/WhatsApp_Image_2025-05-07_at_4_34_21_PM-Picsart-AiImageEnhancer_rarbvc.png' alt="DTT hospital billing system" style={{ width: '100%', height: '100%' }} />
  </div>

  <div class="card-content">
    <h1 class="card-title">dtt in Next js and Node complete system for a hospital/Billing EHR</h1>
    <p class="card-text">This is complete Next js project and is syetem for a USA hospital EHR link</p>
    <a href='https://podstarz.net/'> <button class="card-btn four">Click</button></a>
     </div>
    </div>
  </motion.a>
  <motion.a 
    href='https://app.silvercareagency.com/'
    variants={itemVariants}
    whileHover={{ scale: 1.05, y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  > 
    <div class="card-wrap">
  <div class="card-header four">
  <img src='https://res.cloudinary.com/dgmjg9zr4/image/upload/v1746662333/WhatsApp_Image_2025-05-07_at_4.58.20_PM_npsopo.jpg' alt="Silver Care Agency project" style={{ width: '100%', height: '100%' }} />
  </div>

  <div class="card-content">
    <h1 class="card-title">silvercareagency in Next js complete system for a hospital/billing </h1>
    <p class="card-text">This is complete Next js Node project and is syetem for a USA silvercareAgency credintiol from local will be shown per requirement</p>
    <a href='https://app.silvercareagency.com/'> <button class="card-btn four">Click</button></a>
     </div>
    </div>
  </motion.a>
  </motion.div>









  </>
  );
};

export default Portfolio;
