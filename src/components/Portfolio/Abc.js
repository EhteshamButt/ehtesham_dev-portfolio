import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import c from "../../img/c.PNG";
import restorent from "../../img/restorent.PNG";

import HOC from "../../img/hoc.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : 'white' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
              <SwiperSlide>
          <a href='http://welcome.devforhealth.com/MainScreen'>  <img style={{ "height": "10.7rem" }} className="siderbr img3 marr mx-5" src='https://res.cloudinary.com/alpja/image/upload/v1702752171/e7dslq84hzg0wdxyyvyp.png' alt="" /></a>
          {/* <img  alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://tech.doingthistogether.com/login'>  <img style={{ "height": "10.7rem" }} className="siderbr1 img3 marr mx-5" src={'https://res.cloudinary.com/alpja/image/upload/v1702752592/vffs7bx9yrfsk98aorz9.png'} alt="" /></a>
          {/* <img  alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://saloonshop.vercel.app/'>  <img style={{ "height": "10.7rem" }} className="siderbr my-5 img1" src={c} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide >
          <a href='https://car-sandy.vercel.app/'>  <img style={{ "height": "10.7rem" }} src={Sidebar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide >
          <a href='https://medassist.devforhealth.com/'>  <img style={{ "height": "10.7rem" }} src={'https://res.cloudinary.com/alpja/image/upload/v1702752829/crsvhuzcpfgjvgdrdgz9.png'} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://mern-418ex8thb-ehteshambutt.vercel.app/'>  <img style={{ "height": "10.7rem" }} className=" img2 marr" src={restorent} alt="" /></a>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default Portfolio;
