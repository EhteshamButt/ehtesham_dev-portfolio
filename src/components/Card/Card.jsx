import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (<>
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a
      className="nav-link text-light"
      href="https://saloonshop.vercel.app/"
    >  <button className="c-button">Check it</button></a>
     
    </div>
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a
      className="nav-link text-light"
      href="#"
    >  <button className="c-button">Click Here</button></a>
     
    </div>
    </>
    
  );
};

export default Card;
