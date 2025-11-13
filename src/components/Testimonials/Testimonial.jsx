import React from "react";
import "./Testimonial.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Working with Ehtesham was an absolute pleasure! His expertise in React and Node.js helped us build a robust application that exceeded our expectations. Highly professional and always responsive.",
      name: "Sarah Johnson",
      role: "Project Manager"
    },
    {
      img: profilePic2,
      review:
        "Exceptional developer with deep knowledge of MERN stack. Ehtesham delivered our project on time and with outstanding quality. The code was clean, well-documented, and scalable.",
      name: "Michael Chen",
      role: "CTO"
    },
    {
      img: profilePic3,
      review:
        "Ehtesham transformed our vision into reality. His attention to detail and problem-solving skills are remarkable. The application he built is fast, secure, and user-friendly.",
      name: "Emily Rodriguez",
      role: "Product Owner"
    },
    {
      img: profilePic4,
      review:
        "Outstanding work! Ehtesham's technical skills combined with his communication made the development process smooth. We're extremely satisfied with the final product.",
      name: "David Thompson",
      role: "CEO"
    },
  ];

  return (
    <motion.div 
      className="t-wrapper Testo" 
      id="testimonial" 
      style={{marginTop:"6rem"}}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <motion.div 
        className="t-heading"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >Clients always get </motion.span>
        <motion.span
          className="highlight-text"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
        >Exceptional Work </motion.span>
        <motion.span 
          style={{color:'white'}}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >from me...</motion.span>
      <motion.div 
        className="blur t-blur1" 
        style={{ background: "var(--purple)" }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="blur t-blur2" 
        style={{ background: "skyblue" }}
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

      </motion.div>
      
      <div className="swiper-container-wrapper">
        <Swiper
          effect="fade"
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          speed={1000}
          loop={true}
          className="testimonial-swiper"
        >
          {clients.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <motion.div 
                  className="testimonial-card"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="testimonial-content">
                    <motion.div 
                      className="quote-icon"
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      "
                    </motion.div>
                    
                    <motion.p 
                      className="testimonial-text"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {client.review}
                    </motion.p>

                    <motion.div 
                      className="testimonial-author"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <motion.div 
                        className="author-image-wrapper"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img 
                          src={client.img} 
                          alt={client.name}
                          className="author-image"
                        />
                        <div className="image-border"></div>
                      </motion.div>
                      <div className="author-info">
                        <h4 className="author-name">{client.name}</h4>
                        <p className="author-role">{client.role}</p>
                      </div>
                    </motion.div>

                    <div className="stars-rating">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="star"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.5 + i * 0.1 
                          }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Testimonial;
