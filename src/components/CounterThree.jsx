import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const CounterThree = () => {
  return (
    <>
      {/* counter  */}
      <section className="counter__area-2">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="counter__item-2" data-aos="fade-up">
                    <img src="assets/imgs/home-2/icon-4.png" alt="item" />
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <>
                            <span className="counter counter_fast">
                              <CountUp delay={0} start={0} end={200} />+
                            </span>
                          </>
                        )
                      }
                    </TrackVisibility>
                    <p className="dis">Project complete</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="counter__item-2"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <img src="assets/imgs/home-2/icon-4.png" alt="item" />
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <>
                            <span className="counter counter_fast">
                              <CountUp delay={0} start={0} end={250} />+
                            </span>
                          </>
                        )
                      }
                    </TrackVisibility>
                    <p className="dis">Happy customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="counter__content-2">
                <div
                  className="service__sectiontitle"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <span>Number talk</span>
                  <h2 className="title">
                    Creating Exceptional <br /> Digital Experiences
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /counter  */}
    </>
  );
};

export default CounterThree;
