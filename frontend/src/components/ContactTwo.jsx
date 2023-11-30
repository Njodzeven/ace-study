import React from "react";
import { Link } from "react-router-dom";

const ContactTwo = () => {
  return (
    <>
      {/* contact  */}
      <section className="contact__area-2">
        <div className="contact__top">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="from" data-aos="fade-right">
                  <h2 className="form__title">Let's Talk</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__btm-2">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                <div className="contact__content pt-100 pb-120">
                  <div
                    className="service__sectiontitle contact__sectiontitle text-start"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <span>Common Faq</span>
                    <h2 className="title text-white">
                      Experience the power <br /> of creativity
                    </h2>
                  </div>
                  <div className="faq__list faq__list-2">
                    <div className="accordion" id="accordionExample">
                      <div
                        className="accordion-item"
                        data-aos="fade-up"
                        data-aos-delay={200}
                      >
                        <h2 className="" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            How much agencies charge for their services ?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              It is a long established fact that a reader will
                              be distr acted bioiiy the rea dablea content of a
                              page when looking at its layout Thoiie point of
                              using.It is a long this established fact that a
                              reader
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <h2 className="" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How long does i digital agency to complete a project
                            ?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              This is the third item's accordion body. It is
                              hidden by default, until the collapse plugin adds
                              the appropriate classes that we use to style each
                              element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item"
                        data-aos="fade-up"
                        data-aos-delay={800}
                      >
                        <h2 className="" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What services do digital agencies typically offer ?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              This is the third item's accordion body. It is
                              hidden by default, until the collapse plugin adds
                              the appropriate classes that we use to style each
                              element.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item"
                        data-aos="fade-up"
                        data-aos-delay={1000}
                      >
                        <h2 className="" id="headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            How do I know if a digital agency is business ?
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              This is the third item's accordion body. It is
                              hidden by default, until the collapse plugin adds
                              the appropriate classes that we use to style each
                              element.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                <div className="contact__form contact__form-2">
                  <form action="#" data-aos="fade-up" data-aos-delay={300}>
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
                    <button className="submit" type="submit">
                      Submit <i className="fa-solid fa-arrow-right" />
                    </button>
                  </form>
                </div>
                <ul className="contact__media contact__media-2">
                  <li data-aos="fade-up" data-aos-delay={600}>
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
                  <li data-aos="fade-up" data-aos-delay={800}>
                    <span>
                      <i className="fa-solid fa-phone" />
                    </span>
                    <div>
                      <Link to="tel:006475785769">
                        Telephone : 006475 785769{" "}
                      </Link>
                      <Link to="tel:00123456789">Mobile : 00 123 456 789</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /contact  */}
    </>
  );
};

export default ContactTwo;
