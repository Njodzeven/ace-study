import React from "react";
import { Link } from "react-router-dom";

const ServiceFour = () => {
  return (
    <>
      {/* Service area start */}
      <section className="service__area-4 pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div
                className="service__title-wrap"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h2 className="sec-subtitle">Our services</h2>
                <h3 className="sec-title text-white heading-animation">
                  Crafting your digital <br /> story with passion
                </h3>
              </div>
            </div>
            <div className="col-xxl-12">
              <div
                className="service__list-4"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service__item-4" data-tilt="">
                  <Link to="/service-details">
                    <img src="assets/imgs/service/4/1.png" alt="Thumbnail" />
                  </Link>
                  <div className="service__content-4">
                    <div className="icon">
                      <img src="assets/imgs/service/4/i1.png" alt="digibold" />
                    </div>
                    <p>Our services</p>
                    <Link to="/service-details">
                      <h3 className="service__title-4">Regular update</h3>
                    </Link>
                    <Link className="link" to="/service-details">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div className="service__item-4" data-tilt="">
                  <Link to="/service-details">
                    <img src="assets/imgs/service/4/2.png" alt="Thumbnail" />
                  </Link>
                  <div className="service__content-4">
                    <div className="icon">
                      <img src="assets/imgs/service/4/i2.png" alt="digibold" />
                    </div>
                    <p>Our services</p>
                    <Link to="/service-details">
                      <h3 className="service__title-4">Regular update</h3>
                    </Link>
                    <Link className="link" to="/service-details">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div className="service__item-4" data-tilt="">
                  <Link to="/service-details">
                    <img src="assets/imgs/service/4/3.png" alt="Thumbnail" />
                  </Link>
                  <div className="service__content-4">
                    <div className="icon">
                      <img src="assets/imgs/service/4/i3.png" alt="digibold" />
                    </div>
                    <p>Our services</p>
                    <Link to="">
                      <h3 className="service__title-4">Regular update</h3>
                    </Link>
                    <Link className="link" to="">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div className="service__item-4" data-tilt="">
                  <Link to="/service-details">
                    <img src="assets/imgs/service/4/2.png" alt="Thumbnail" />
                  </Link>
                  <div className="service__content-4">
                    <div className="icon">
                      <img src="assets/imgs/service/4/i4.png" alt="digibold" />
                    </div>
                    <p>Our services</p>
                    <Link to="/service-details">
                      <h3 className="service__title-4">Regular update</h3>
                    </Link>
                    <Link className="link" to="/service-details">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
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

export default ServiceFour;
