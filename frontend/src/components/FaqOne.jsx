import React from "react";
import { Link } from "react-router-dom";

const FaqOne = () => {
  return (
    <>
      {/* FAQs area start */}
      <section className="faq__area pt-170 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="faq__content" data-aos="fade-up">
                <h2 className="sec-subtitle text-white">
                  some faq’s <span>some faq’s</span>
                </h2>
                <h3 className="sec-title text-white">
                  Powering your <br /> digital potential
                </h3>
                <p>
                  Which is the same as saying through shrinking from toil and
                  pain in These cases are many perfectly simple and easy to
                  distinguish thiIn a free hours this when our{" "}
                </p>
                <div className="db-arrow-up">
                  <Link to="/about">
                    <img
                      className="img"
                      src="assets/imgs/icon/arrow-xxl-2.png"
                      alt="Arrow Icon"
                    />
                    <img
                      className="img-2"
                      src="assets/imgs/icon/arrow-xxl-2.png"
                      alt="Arrow Icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="faq__list">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item" data-aos="fade-up">
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
                          It is a long established fact that a reader will be
                          distr acted bioiiy the rea dablea content of a page
                          when looking at its layout Thoiie point of using.It is
                          a long this established fact that a reader
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay={300}
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
                        How long does i digital agency to complete a project ?
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
                          This is the third item's accordion body. It is hidden
                          by default, until the collapse plugin adds the
                          appropriate classes that we use to style each element.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay={900}
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
      </section>
      {/* FAQs area end */}
    </>
  );
};

export default FaqOne;
