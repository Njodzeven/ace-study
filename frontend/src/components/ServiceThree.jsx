import React from "react";
import { Link } from "react-router-dom";

const ServiceThree = () => {
  return (
    <>
      {/* Service area start */}
      <section className="service__area-3 pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="service__title-wrap" data-aos="fade-up">
                <h3 className="sec-title text-capitalize text-white">
                  Bringing your brand to life <br /> in the digital
                </h3>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div
                className="service__text-3"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur. Dolor erat sed sit
                  massa urna. In mattis cursus thi nunc iaculis quam amet nibh
                  ipsum. Fringilla imperdiet vel aliquet viverra tempus felis Ui
                  lacus lectus ultrices commodo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="service__list-3">
              <div
                className="service__item-3"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="icon">
                  <img src="assets/imgs/icon/s4.png" alt="Service Icon" />
                </div>
                <div className="service__content-3">
                  <Link to="/service-details">
                    <div className="service__title-3">The Digital Touch</div>
                  </Link>
                  <p>
                    It is a long established fact that a reader lio will be lio
                    distracted by the readable content of an seo page desgner
                  </p>
                  <Link
                    className="db-btn-border btn-rollover color-1"
                    to="/service-details"
                  >
                    Discover more <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div
                className="service__item-3"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="icon">
                  <img src="assets/imgs/icon/s5.png" alt="Service Icon" />
                </div>
                <div className="service__content-3">
                  <Link to="/service-details">
                    <div className="service__title-3">
                      Creative Edge Solutions
                    </div>
                  </Link>
                  <p>
                    It is a long established fact that a reader lio will be lio
                    distracted by the readable content of an seo page desgner
                  </p>
                  <Link
                    className="db-btn-border btn-rollover color-1"
                    to="/service-details"
                  >
                    Discover more <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div
                className="service__item-3"
                data-aos="fade-up"
                data-aos-delay={800}
              >
                <div className="icon">
                  <img src="assets/imgs/icon/s6.png" alt="Service Icon" />
                </div>
                <div className="service__content-3">
                  <Link to="/service-details">
                    <div className="service__title-3">
                      Infinity Creative Group
                    </div>
                  </Link>
                  <p>
                    It is a long established fact that a reader lio will be lio
                    distracted by the readable content of an seo page desgner
                  </p>
                  <Link
                    className="db-btn-border btn-rollover color-1"
                    to="/service-details"
                  >
                    Discover more <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service area end */}
    </>
  );
};

export default ServiceThree;
