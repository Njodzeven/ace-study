import React from "react";
import { Link } from "react-router-dom";
const WorkProcessTwo = () => {
  return (
    <>
      {/* Work Process area start */}
      <section className="process__area-3 pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="process__title-wrap-3" data-aos="fade-up">
                <h2 className="sec-title text-capitalize">
                  Let's create something <br /> amazing together
                </h2>
              </div>
              <div className="process__list-3">
                <div
                  className="process__item-3"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="serial">01</div>
                  <div className="process__content-3">
                    <h3 className="process__title-3">Creative Craze</h3>
                    <p>
                      Health and medical is a encompasses a wide range of topics
                      related to health
                    </p>
                  </div>
                  <div className="process__btn-3">
                    <Link className="db-btn-border" to="/about">
                      read more <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="process__item-3"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="serial">02</div>
                  <div className="process__content-3">
                    <h3 className="process__title-3">Brand Boost</h3>
                    <p>
                      Health and medical is a encompasses a wide range of topics
                      related to health
                    </p>
                  </div>
                  <div className="process__btn-3">
                    <Link className="db-btn-border" to="/about">
                      read more <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="process__item-3"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <div className="serial">03</div>
                  <div className="process__content-3">
                    <h3 className="process__title-3">Media Minds</h3>
                    <p>
                      Health and medical is a encompasses a wide range of topics
                      related to health
                    </p>
                  </div>
                  <div className="process__btn-3">
                    <Link className="db-btn-border" to="/about">
                      read more <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process area end */}
    </>
  );
};

export default WorkProcessTwo;
