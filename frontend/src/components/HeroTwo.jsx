import React from "react";
import { Link } from "react-router-dom";

const HeroTwo = () => {
  return (
    <>
      <section className="hero__area-2">
        <div className="hero__area-wrapper">
          <div className="hero__area-item">
            <img src="assets/imgs/hero/2.png" alt="img-1" />
            <span className="hero__area-gradient1"></span>
          </div>
          <div className="hero__area-item">
            <div className="hero__area-content">
              <h2 className="hero__area-title cxufadeUp">
                Let us take your <br /> IT problems off <br /> your hands
              </h2>
              <p className="hero__area-dis cxufadeUp2">
                There are many variations of passages{" "}
              </p>
              <Link
                className="header__btn arrow-down btn-rollover cxufadeUp3"
                to="/about"
              >
                Discover more
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="hero__area-item">
            <span className="hero__area-gradient2"></span>
            <img src="assets/imgs/hero/3.png" alt="img-1" />
          </div>
        </div>
        <img className="shape-1" src="assets/imgs/hero/bg-2.png" alt="Shape" />
        <img className="shape-2" src="assets/imgs/hero/bg-3.png" alt="Shape" />
      </section>
    </>
  );
};

export default HeroTwo;
