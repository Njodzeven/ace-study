import React from "react";
import { Link } from "react-router-dom";

const HeroOne = () => {
  return (
    <>
      {/* Hero area start */}
      <section className="hero__area">
        <div className="hero__inner">
          <div className="hero__top">
            <h1 className="hero__title cxufadeUp">
            Empowering <br />{" "}
                <span>
                  <i class="fas fa-trophy"/>
                </span>
              Study Habits
            </h1>
            <div className="hero__contact cxufadeUp2">
              <Link to="/">
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
              <div className="text">
                <p>Get Started</p>
              </div>
            </div>
          </div>
          <div className="hero__btm">
            <div className="cxufadeUp2">
              <p className="sec-title">
              Unlock your learning potential with better study habits
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Hero area end */}
    </>
  );
};

export default HeroOne;
