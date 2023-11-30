import React from "react";

import { Link } from "react-router-dom";
const HeroFour = () => {
  return (
    <>
      {/* Hero area start */}
      <section className="hero__area-4">
        <div className="hero__inner-4">
          <div className="hero__left-4">
            <h1 className="hero__title-4 heading-animation">
              Crafting your digital story with passion
            </h1>
            <div className="p-animation">
              <p>
                Payment solutions enable businesses to accept payments Payment
                solutions enable businesses to accept payments from customers
                conveniently securely from customers conveniently and securely.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay={400}>
              <Link className="db-btn-border btn-rollover" to="#">
                Discover more <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="hero__right-4">
            <img
              src="assets/imgs/hero/4/1.png"
              alt="digibold"
              data-lag="0.3"
            />
          </div>
        </div>
      </section>
      {/* Hero area end */}
    </>
  );
};

export default HeroFour;
