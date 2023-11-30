import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const TeamOne = () => {
  return (
    <>
      {/* Team area start */}
      <section className="team__area pt-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="sec-title-wrap" data-aos="fade-up">
                <h2 className="sec-subtitle">
                  our expert <span>our expert</span>
                </h2>
                <h3 className="sec-title">
                  Building digital experiences <br /> that matter
                </h3>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div
                className="team__awards"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <TrackVisibility once>
                  {({ isVisible }) =>
                    isVisible && (
                      <>
                        <h4 className="team__award counter_fast">
                          <CountUp delay={0} start={0} end={20} />+
                        </h4>
                      </>
                    )
                  }
                </TrackVisibility>
                <p>Winning award</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="team__list">
                <div className="team__member" data-aos="fade-up">
                  <div className="team__image">
                    <img src="assets/imgs/team/1.png" alt="digibold" />
                    <div className="share__wrap">
                      <button className="share-btn">
                        <i className="fa-solid fa-share-nodes" />
                      </button>
                      <ul className="social-share">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__content">
                    <h5 className="team__title">Annette Black</h5>
                    <p>Finance Assistant</p>
                  </div>
                </div>
                <div
                  className="team__member"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="team__image">
                    <img src="assets/imgs/team/2.png" alt="digibold" />
                    <div className="share__wrap">
                      <button className="share-btn">
                        <i className="fa-solid fa-share-nodes" />
                      </button>
                      <ul className="social-share">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__content">
                    <h5 className="team__title">Nayan Tara</h5>
                    <p>accountandant</p>
                  </div>
                </div>
                <div
                  className="team__member"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <div className="team__image">
                    <img src="assets/imgs/team/3.png" alt="digibold" />
                    <div className="share__wrap">
                      <button className="share-btn">
                        <i className="fa-solid fa-share-nodes" />
                      </button>
                      <ul className="social-share">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team__content">
                    <h5 className="team__title">Adward collin</h5>
                    <p> Assistant Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team area end */}
    </>
  );
};

export default TeamOne;
