import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
const Navbar = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  return (
    <motion.div 
      className="n-wrapper" 
      id="Navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      {/* left */}
      <motion.div 
        className="n-left"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.span 
          className="n-name button i-button2"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >Ehtesham</motion.span>
        <Toggle />
      </motion.div>
      {/* right */}
      <motion.div 
        className="n-right"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            {[
              { to: "Navbar", text: "Home" },
              { to: "services", text: "Serivces" },
              { to: "works", text: "Experience" },
              { to: "portfolio", text: "Protfolio" },
              { to: "testimonial", text: "Testimonial" }
            ].map((item, index) => (
              <motion.li
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Link 
                  activeClass="active" 
                  to={item.to} 
                  style={{ color: darkmode ? "cyan" : "#00ffff" }} 
                  spy={true} 
                  smooth={true}
                >
                  {item.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.a 
          href="https://wa.me/+923189391781" 
          spy={true} 
          smooth={true}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="button n-button d-none ddd d-lg-block">Call : +923189391781</button>
        </motion.a>

      </motion.div>
    </motion.div>
  );
};

export default Navbar;
