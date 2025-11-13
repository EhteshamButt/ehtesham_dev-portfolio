import React, { useRef, useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_2mu5xtl",
    //     "template_m5udu2c",
    //     form.current,
    //     "VLwg1ltOWvnCYAiK_"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setDone(true);
    //       setFormData({ name: "", email: "", message: "" });
    //       setTimeout(() => setDone(false), 5000);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="contact-form" 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Left side - Contact Info */}
      <motion.div 
        className="c-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="contact-title"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
          >
            Get in <span className="highlight">Touch</span>
          </motion.h2>
          
          <motion.p
            className="contact-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>

          <motion.div 
            className="contact-details"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:buttehtesham86@gmail.com">buttehtesham86@gmail.com</a>
              </div>
            </motion.div>

            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon">📱</div>
              <div>
                <h4>Phone</h4>
                <a href="https://wa.me/+923189391781">+92 318 939 1781</a>
              </div>
            </motion.div>

            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Islamabad, Pakistan</p>
              </div>
            </motion.div>
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
      </motion.div>

      {/* Right side - Contact Form */}
      <motion.div 
        className="c-right"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="form-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h3
            className="form-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Send me a <span className="highlight">Message</span>
          </motion.h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form-element">
            <motion.div 
              className="input-group"
              variants={inputVariants}
            >
              <label htmlFor="user_name">Your Name</label>
              <motion.input 
                type="text" 
                id="user_name"
                name="user_name" 
                className="user"  
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02, borderColor: "var(--orange)" }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>

            <motion.div 
              className="input-group"
              variants={inputVariants}
            >
              <label htmlFor="user_email">Your Email</label>
              <motion.input 
                type="email" 
                id="user_email"
                name="user_email" 
                className="user" 
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02, borderColor: "var(--orange)" }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>

            <motion.div 
              className="input-group"
              variants={inputVariants}
            >
              <label htmlFor="message">Your Message</label>
              <motion.textarea 
                id="message"
                name="message" 
                className="user message-input" 
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                whileFocus={{ scale: 1.01, borderColor: "var(--orange)" }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>

            <motion.button 
              type="submit" 
              className="submit-button"
              variants={inputVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 25px 30px 3px rgba(251, 161, 40, 0.5)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>Send Message</span>
              <motion.span
                className="button-icon"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>

            {done && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="success-icon">✓</span>
                <span>Thanks for contacting me! I'll get back to you soon.</span>
              </motion.div>
            )}
          </form>

          <motion.div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
