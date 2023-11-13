import React from "react";

const AboutFive = () => {
  return (
    <>
      {/* About area start */}
      <section className="about__area-4 pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-xl-5 col-md-5">
              <div
                className="about__imgs-4"
                data-aos="fade-right"
                data-aos-delay={300}
              >
                <img
                  className="img-1"
                  src="assets/imgs/about/4/1.png"
                  alt="digibold"
                  data-speed="0.9"
                />
                <img
                  className="img-2"
                  src="assets/imgs/about/4/2.png"
                  alt="digibold"
                />
                <div className="activity">
                  <div className="icon">
                    <img src="assets/imgs/about/4/3.png" alt="Icon" />
                  </div>
                  <p>
                    <span>Daily Activity</span>Loream is ispam
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-xl-7 col-md-7">
              <div className="about__content-4">
                <h2 className="sec-subtitle">about us</h2>
                <h3 className="sec-title heading-animation">
                  Innovative solutions <br /> for digital success
                </h3>
                <div className="p-animation">
                  <p>
                    Payment solutions enable businesses to accept payments
                    Payment solutions enable businesses to accept payments from
                    customers conveniently securely from customers conveniently
                    and securely.
                  </p>
                </div>
              </div>
              <div className="skill__list-4">
                <div
                  className="skill__item-4"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="img">
                    <img src="assets/imgs/about/4/skill.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <div
                      className="skill_active"
                      data-width={95}
                      data-target={100}
                    >
                      Digital Marketing
                    </div>
                  </div>
                </div>
                <div
                  className="skill__item-4"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="img">
                    <img src="assets/imgs/about/4/skill-2.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <div
                      className="skill_active"
                      data-width={90}
                      data-target={100}
                    >
                      Digital Business
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About area end */}
    </>
  );
};

export default AboutFive;
