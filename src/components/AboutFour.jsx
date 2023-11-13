import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
const AboutFour = () => {
  return (
    <>
      {/* About area start */}
      <section className="about__area-3 pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="about__imgs-3" data-aos="fade-up">
                <img src="assets/imgs/about/3/1.jpg" alt="digibold" />
                <div className="projects">
                  <img src="assets/imgs/icon/user.png" alt="Medal Icon" />

                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <>
                          <p>
                            <span className="d-flex">
                              <span className="counter_slow">
                                <CountUp delay={0} start={0} end={5000} />
                              </span>
                              <span>+</span>
                            </span>
                            Satisfied Clients
                          </p>
                        </>
                      )
                    }
                  </TrackVisibility>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div
                className="about__content-3"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <h2 className="sec-title text-capitalize">
                  Innovative solutions for a digital world
                </h2>
                <p>
                  Which is the same as saying through shrinking from toil and
                  pain. These cases are many perfectly simple and easy to
                  distinguish. In a free hour this when our power of choice is
                  untrammelled and when nothing prevents
                </p>
                <ul>
                  <li>How to improve your busines for Helping us </li>
                  <li>making this the first true generator on the Internet</li>
                  <li>Creative this the first true generator on the designe</li>
                </ul>
                <div className="about__btn-3">
                  <Link className="db-btn-border btn-rollover" to="/about">
                    Discover more <i className="fa-solid fa-arrow-right" />
                  </Link>
                  <Link className="db-btn-call" to="callto:45654987">
                    <span>
                      <i className="fa-solid fa-phone" />
                    </span>{" "}
                    + (123) 45654987
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About area end */}
    </>
  );
};

export default AboutFour;
