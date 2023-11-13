import React from "react";
import { Link } from "react-router-dom";

const ServiceTwo = () => {
  return (
    <>
      {/* service area  */}
      <section className="service__area-2">
        <div className="line-1" />
        <div className="line-2" />
        <div className="line-3" />
        <div className="line-4" />
        <div className="container">
          <div className="service__sectiontitle" data-aos="fade-up">
            <span>Our Services</span>
            <h2 className="title text-white">
              Creating Exceptional <br /> Digital Experiences
            </h2>
          </div>
          <div className="service__wrapper-2">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="service__item-2"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="service__thumb-2">
                    <img src="assets/imgs/home-2/icon-1.png" alt="thumb" />
                  </div>
                  <span className="service__ititle-2">Pixel Crafting</span>
                  <p className="service__idis-2">
                    There are many variations of passages of <br /> Lorem Ipsum
                    available,ut the majority have <br /> suffered alteration in
                    sme form
                  </p>
                  <Link
                    className="service__readmore-2"
                    to="/service-details"
                  >
                    Read more{" "}
                    <img
                      src="assets/imgs/home-2/arrow-down.png"
                      alt="arrow-down"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="service__item-2"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <div className="service__thumb-2">
                    <img src="assets/imgs/home-2/icon-2.png" alt="thumb" />
                  </div>
                  <span className="service__ititle-2">Branding Blueprint</span>
                  <p className="service__idis-2">
                    There are many variations of passages of <br /> Lorem Ipsum
                    available,ut the majority have <br /> suffered alteration in
                    sme form
                  </p>
                  <Link
                    className="service__readmore-2"
                    to="/service-details"
                  >
                    Read more{" "}
                    <img
                      src="assets/imgs/home-2/arrow-down.png"
                      alt="arrow-down"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="service__item-2"
                  data-aos="fade-up"
                  data-aos-delay={900}
                >
                  <div className="service__thumb-2">
                    <img src="assets/imgs/home-2/icon-3.png" alt="thumb" />
                  </div>
                  <span className="service__ititle-2">Digital Consultancy</span>
                  <p className="service__idis-2">
                    There are many variations of passages of <br /> Lorem Ipsum
                    available,ut the majority have <br /> suffered alteration in
                    sme form
                  </p>
                  <Link
                    className="service__readmore-2"
                    to="/service-details"
                  >
                    Read more{" "}
                    <img
                      src="assets/imgs/home-2/arrow-down.png"
                      alt="arrow-down"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /service area  */}
    </>
  );
};

export default ServiceTwo;
