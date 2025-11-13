import React from "react";
import "./Services.css";

const Services = () => {

  return (<>
  {/* <div class="content-wrapper">
  
  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image"/>
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Amazing First Title</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image"/>
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Amazing Second Title that is Quite Long</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit&hellip;</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" class="news-card__image"/>
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Amazing Title</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae&hellip;</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/248486/pexels-photo-248486.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image"/>
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Amazing Forth Title that is Quite Long</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Lorem ipsum dolor sit amet!</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image"/>
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Amazing Fifth Title</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio&hellip;</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image"/>
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Amazing 6<sup>th</sup> Title</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia.</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

</div> */}
  {/* <div className="services" id="services">

  <div className="awesome">

    <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
    <span>Projects</span>
    <span>
      Here are links to my few React JS website projects
      <br />
      <p className="mx-5">
        Click these <i className="fa-sharp fa-solid fa-3"></i> Boxes
        <i className="fa-sharp fa-solid fa-right-long ma"></i>
      </p>
    </span>
    <a href="https://wa.me/+923189391781">
      <button className="button s-button">Whatsapp</button>
    </a>
    <div
      className="blur s-blur1"
      style={{ background: "#ABF1FF94" }}
    ></div>
  </div>

  <div className="cards">

    <motion.div
      initial={{ left: "25rem" }}
      whileInView={{ left: "14rem" }}
      transition={transition}
    >
      <a
        className="nav-link text-light"
        href="https://saloonshop.vercel.app/"
      >
        <Card
          emoji={HeartEmoji}
          heading={"Design"}
          detail={"Web design, HTML CSS design, Bootstrap 5, JavaScript"}
        />
      </a>
    </motion.div>
    <motion.div
      initial={{ left: "35rem" }}
      whileInView={{ left: "30rem" }}
      transition={transition}
    >
      <a
        className="nav-link text-light"
        href="http://welcome.devforhealth.com/MainScreen"
      >
        <Card
          emoji={HeartEmoji}
          heading={"Professional work"}
          detail={"Mega level projects"}
        />
      </a>
    </motion.div>

    <motion.div
      initial={{ left: "-11rem", top: "12rem" }}
      whileInView={{ left: "-4rem" }}
      transition={transition}
    >
      <a
        className="nav-link text-light"
        href="https://car-sandy.vercel.app/"
      >
        <Card
          emoji={Glasses}
          heading={"Developer"}
          detail={"HTML, CSS, JavaScript, React, Nodejs, Express"}
        />
      </a>
    </motion.div>

    <motion.div
      initial={{ top: "19rem", left: "25rem" }}
      whileInView={{ left: "12rem" }}
      transition={transition}
    >
      <a
        className="nav-link text-light"
        href="https://mern-418ex8thb-ehteshambutt.vercel.app/"
      >
        <Card
          emoji={Humble}
          heading={"Figma to"}
          detail={"I can make your Figma design into a React JS website"}
          color="rgba(252, 166, 31, 0.45)"
        />
      </a>
    </motion.div>
    <div
      className="blur s-blur2 mt-5"
      style={{ background: "var(--purple)" }}
    ></div>
  </div>
</div> */}
</>

  );
};

export default Services;
