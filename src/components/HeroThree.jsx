import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
const HeroThree = () => {
  return (
    <>
      {/* Hero area start */}
      <section className="hero__area-3">
        <div className="hero__inner-3">
          <div className="hero__gallery">
            <img
              className="image-1 cxufadeUp"
              src="assets/imgs/hero/3/1.png"
              alt="digibold"
            />
            <img
              className="image-2 cxufadeUp2"
              src="assets/imgs/hero/3/2.png"
              alt="digibold"
            />
            <img
              className="image-3 cxufadeUp3"
              src="assets/imgs/hero/3/3.png"
              alt="digibold"
            />
          </div>
          <div className="hero__title-3-wrap">
            <h1 className="hero__title-3 cxufadeUp4">
              {" "}
              <span>Think</span> outside <span>the box</span>{" "}
            </h1>
            <img className="line" src="assets/imgs/shape/line.png" alt="Line" />
          </div>
          <div className="hero__contact-3 cxufadeUp4">
            <Link to="/about"> Get in Touch </Link>
          </div>
        </div>
        <img
          className="shape cxuSpin-slow"
          src="assets/imgs/shape/10.png"
          alt="Shape"
        />
        {/* Counter */}
        <div className="counter__area-3-hero">
          <div className="counter__inner">
            <div className="counter__item" data-aos="fade-up">
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <>
                      <div className="counter__number counter_slow">
                        <CountUp delay={0} start={0} end={300} />+
                      </div>
                      <h3 className="counter__title">Happy customer</h3>
                    </>
                  )
                }
              </TrackVisibility>
            </div>
            <div
              className="counter__item"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <>
                      <div className="counter__number counter_slow">
                        <CountUp delay={0} start={0} end={300} />+{" "}
                      </div>
                      <h3 className="counter__title">total branches</h3>
                    </>
                  )
                }
              </TrackVisibility>
            </div>
            <div
              className="counter__item"
              data-aos="fade-up"
              data-aos-delay={900}
            >
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <>
                      <div className="counter__number counter_slow">
                        <CountUp delay={0} start={0} end={500} />+
                      </div>
                      <h3 className="counter__title">Project complete</h3>
                    </>
                  )
                }
              </TrackVisibility>
            </div>
          </div>
        </div>
      </section>
      {/* Hero area end */}
    </>
  );
};

export default HeroThree;
