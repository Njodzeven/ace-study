import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const CounterTwo = () => {
  return (
    <>
      {/* Counter area start */}
      <section className="counter__area-6">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="counter__inner">
                <div className="counter__item">
                  <div className="counter__number counter_slow underline-5">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <>
                            <span>
                              <CountUp delay={0} start={0} end={200} />+
                            </span>
                            <span className="inner_span">
                              <CountUp delay={0} start={0} end={200} />+
                            </span>
                          </>
                        )
                      }
                    </TrackVisibility>
                  </div>
                  <h3 className="counter__title underline-2">
                    Happy <br /> customer
                  </h3>
                </div>
                <div className="counter__item">
                  <div className="counter__number counter_slow underline-5">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <>
                            <span>
                              <CountUp delay={0} start={0} end={300} />+
                            </span>
                            <span className="inner_span">
                              <CountUp delay={0} start={0} end={300} />+
                            </span>
                          </>
                        )
                      }
                    </TrackVisibility>
                  </div>
                  <h3 className="counter__title underline-2">
                    total <br /> branches
                  </h3>
                </div>
                <div className="counter__item">
                  <div className="counter__number counter_slow underline-5">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <>
                            <span>
                              <CountUp delay={0} start={0} end={550} />+
                            </span>
                            <span className="inner_span">
                              <CountUp delay={0} start={0} end={550} />+
                            </span>
                          </>
                        )
                      }
                    </TrackVisibility>
                  </div>
                  <h3 className="counter__title underline-2">
                    Project <br /> complete
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter area end */}
    </>
  );
};

export default CounterTwo;
