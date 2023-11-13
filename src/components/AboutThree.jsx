import React from "react";
import { Link } from "react-router-dom";

const AboutThree = () => {
  return (
    <>
      {/* About area about */}
      <section className="about__area-2">
        <div className="container">
          <div className="about__wrapper-2">
            <div className="about__item">
              <div className="about__content">
                <h2 className="about__title-2" data-aos="fade-up">
                  Experience the <br /> power of agency <br /> transformation
                </h2>
                <p
                  className="about__dis-2"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  There are many variations of passages of Lorem Ipsum available
                  ours but the majority have suffered alteration in some form,
                  by injected humour or randomised words which don look even the
                  design here us
                </p>
                <div
                  className="about__btnwrapper-2 db-arrow-up"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <Link className="about__arrowup" to="/about">
                    <img
                      className="img"
                      src="assets/imgs/home-2/arrow-up.svg"
                      alt="arrowup"
                    />
                    <img
                      className="img-2"
                      src="assets/imgs/home-2/arrow-up.svg"
                      alt="arrowup"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="about__item">
              <div
                className="about__thumb"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <img
                  src="assets/imgs/home-2/about-thumb.png"
                  alt="about-thumb"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Hero area about */}
    </>
  );
};

export default AboutThree;
