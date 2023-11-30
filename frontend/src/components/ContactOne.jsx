import React from "react";
import { Link } from "react-router-dom";

const ContactOne = () => {
  return (
    <>
      {/* Contact area start */}
      <section className="contact__area">
        <div className="contact__top">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="from" data-aos="fade-right">
                  <h2 className="form__title">From 1950</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__btm">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div
                  className="contact__content pt-150 pb-120"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <h3 className="sec-subtitle">
                    get touch <span>get touch</span>
                  </h3>
                  <h4 className="sec-title">
                    Your success is <br /> our mission
                  </h4>
                  <ul className="contact__media">
                    <li>
                      <span>
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <div>
                        <Link to="mailto:company@.com">
                          Main Email : our company@.com
                        </Link>
                        <Link to="mailto:ompny@mail.com">
                          Sub Email: compny@mail.com
                        </Link>
                      </div>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-phone" />
                      </span>
                      <div>
                        <Link to="tel:006475785769">
                          Telephone : 006475 785769{" "}
                        </Link>
                        <Link to="tel:00123456789">
                          Mobile : 00 123 456 789
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="contact__form">
                  <div className="" data-aos="fade-up" data-aos-delay={600}>
                    <form action="#">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        required=""
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail*"
                        required=""
                      />
                      <input
                        type="text"
                        name="subject"
                        placeholder="subject*"
                        required=""
                      />
                      <textarea
                        name="comments"
                        placeholder="Comment*"
                        required=""
                        defaultValue={""}
                      />
                      <button className="submit btn-rollover" type="submit">
                        Submit
                        <i className="fa-solid fa-arrow-right" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact area end */}
    </>
  );
};

export default ContactOne;
