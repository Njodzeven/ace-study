import React from "react";
import { Link } from "react-router-dom";

const AboutTwo = () => {
  return (
    <>
      {/* About area start */}
      <section className="about__area-6 pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="about__imgs-6">
                <div className="image-1">
                  <img src="assets/imgs/about/6/1.jpg" alt="digibold" />
                  <Link
                    className="play popup-link"
                    to="https://www.youtube.com/watch?v=FYpsf0ACkmI"
                  >
                    <i className="fa-solid fa-play" />
                  </Link>
                </div>
                <div className="image-2">
                  <img src="assets/imgs/about/6/2.jpg" alt="digibold" />
                </div>
                <div className="bell">
                  <span>
                    <i className="fa-regular fa-bell" />
                  </span>
                </div>
                <div className="chart">
                  <span>
                    <i className="fa-solid fa-chart-column" />
                  </span>
                </div>
                <div className="projects">
                  <img src="assets/imgs/about/6/medal.png" alt="Medal Icon" />
                  <p>
                    <span>230+</span>Project Complete
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="about__content-6">
                <h2 className="sec-subtitle-2">ABOUT US </h2>
                <h3 className="sec-title underline-2">
                  Innovative solutions for a digital world
                </h3>
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
                <Link className="db-btn-arrow" to="#">
                  Read More <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/imgs/shape/6.png"
          alt="Zigzag Shape"
          className="shape"
        />
      </section>
      {/* About area end */}
    </>
  );
};

export default AboutTwo;
