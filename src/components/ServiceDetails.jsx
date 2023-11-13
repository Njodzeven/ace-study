import React from "react";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  return (
    <>
      {/* Service Details area start */}
      <section className="service__details-area pb-150 pt-150">
        <div className="container">
          <div className="service__details top pb-140">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="img">
                  <img src="assets/imgs/service/details/1.jpg" alt="digibold" />
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="content">
                  <h2 className="service__details-title">
                    Boost your brand, boost your business!
                  </h2>
                  <p>
                    Corporate Payment Vantage refers use of innovative financial
                    technologies and processes to optimize payment and cash
                    management operations for businesses. This includes tools
                    such as virtual cards, automated invoicing,
                  </p>
                  <ul className="list-angle">
                    <li>
                      Corporate Payment Vantage is a modern financial approach
                      that utilizes technology to optimize payment and cash
                      management operations.
                    </li>
                  </ul>
                  <Link className="db-btn-primary btn-rollover" to="/about">
                    Get started <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="service__details mid pb-140">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="content">
                  <h2 className="service__details-title">
                    The power of digital the reach of marketing
                  </h2>
                  <p>
                    In today's rapidly evolving business landscape, companies
                    need to be agile, adaptable, and efficient to stay
                    competitive. One crucial aspect
                  </p>
                  <div className="feature">
                    <div className="icon">
                      <img src="assets/imgs/icon/phone.png" alt="Icon" />
                    </div>
                    <div className="info">
                      <h4 className="title">Content Forge</h4>
                      <p>
                        Corporate Payment Vantage modern financial approach
                        utilizes in our technology to optimize payment
                        validation ask to use{" "}
                      </p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="icon">
                      <img src="assets/imgs/icon/phone.png" alt="Icon" />
                    </div>
                    <div className="info">
                      <h4 className="title">Content Forge</h4>
                      <p>
                        Corporate Payment Vantage modern financial approach
                        utilizes in our technology to optimize payment
                        validation ask to use{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="img">
                  <img src="assets/imgs/service/details/2.jpg" alt="digibold" />
                </div>
              </div>
              <div className="col-xxl-12">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editor Contra
                  popular belief, Lorem Ipsum is not simply random text. It has
                  roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin
                  profe at Hampden-Sydney College in Virginia, looked up one of
                  the more obscure Latin words, consectetur, from a Lorem Ipsum
                  passage, and going through the cites of the word in classical
                  literature
                </p>
              </div>
            </div>
          </div>
          <div className="service__details btm">
            <div className="row">
              <div className="col-xxl-12">
                <h2 className="service__details-title">
                  Digital marketing that <br /> delivers
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="more-service__item">
                  <Link to="#">
                    <img
                      src="assets/imgs/service/details/3.jpg"
                      alt="digibold"
                    />
                  </Link>
                  <div className="more-service__content">
                    <Link to="#">
                      <h3 className="more-service__title">Marketing</h3>
                    </Link>
                    <p>
                      How to Solve your Mobile in Development Managemetn System
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="more-service__item">
                  <Link to="#">
                    <img
                      src="assets/imgs/service/details/4.jpg"
                      alt="digibold"
                    />
                  </Link>
                  <div className="more-service__content">
                    <Link to="#">
                      <h3 className="more-service__title">Advertising</h3>
                    </Link>
                    <p>
                      How to Solve your Mobile in Development Managemetn System
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="more-service__item">
                  <Link to="#">
                    <img
                      src="assets/imgs/service/details/5.jpg"
                      alt="digibold"
                    />
                  </Link>
                  <div className="more-service__content">
                    <Link to="#">
                      <h3 className="more-service__title">Content Marketing</h3>
                    </Link>
                    <p>
                      How to Solve your Mobile in Development Managemetn System
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Details area end */}
    </>
  );
};

export default ServiceDetails;
