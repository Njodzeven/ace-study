import React from "react";
import { Link } from "react-router-dom";

const FaqTwo = () => {
  return (
    <>
      {/* FAQs area start */}
      <section className="faq__area-3 pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-xl-5">
              <div className="faq__content-3" data-aos="fade-right">
                <h3 className="sec-title text-capitalize">
                  Turning ideas into <br /> digital realities
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sed mattis duis tellus
                  jklhjh consectetur. Mi eu viverra purus in magna accumsan. Sed
                  quis seduk ornare aliquam urna.
                </p>
                <Link className="db-btn-arrow" to="/about">
                  Read More <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-xl-7">
              <div className="faq__list-3">
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
                        <span>01</span>
                        What services do you offer?
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
                          We offer a range of IT services, including software
                          development, web development and blockchain solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay={400}
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
                        <span>02</span>
                        What is your experience in the industry?
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
                          This is the third item's accordion body. It is hidden
                          by default, until the collapse plugin adds the
                          appropriate classes that we use to style each element.
                          These classes control the overall appearance, as well
                          as the showing and hiding via CSS transitions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay={600}
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
                        <span>03</span>
                        What is your approach to project management?
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
                          This is the third item's accordion body. It is hidden
                          by default, until the collapse plugin adds the
                          appropriate classes that we use to style each element.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="shape" src="assets/imgs/shape/11.png" alt="Shape" />
      </section>
      {/* FAQs area end */}
    </>
  );
};

export default FaqTwo;
