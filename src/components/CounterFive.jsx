import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const CounterFive = () => {
  return (
    <>
      {/* Counter area start */}
      <section className="counter__area-4 line-cols-3 pt-120 pb-100">
        <div className="counter__inner-4 plr-90">
          <div className="counter__list-4">
            <div
              className="counter__item-4"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="counter__left-4">
                <img src="assets/imgs/icon/c1.png" alt="Icon" />
              </div>
              <div className="counter__right-4">
                <TrackVisibility once>
                  {({ isVisible }) =>
                    isVisible && (
                      <>
                        <div className="counter__number-4 counter_slow">
                          <CountUp delay={0} start={0} end={200} />+
                        </div>
                        <h2 className="counter__title-4">Team member</h2>
                      </>
                    )
                  }
                </TrackVisibility>
              </div>
            </div>
            <div
              className="counter__item-4"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="counter__left-4">
                <img src="assets/imgs/icon/c2.png" alt="Icon" />
              </div>
              <div className="counter__right-4">
                <TrackVisibility once>
                  {({ isVisible }) =>
                    isVisible && (
                      <>
                        <div className="counter__number-4 counter_slow">
                          <CountUp delay={0} start={0} end={10} />
                          K+
                        </div>
                        <h2 className="counter__title-4">Project complete</h2>
                      </>
                    )
                  }
                </TrackVisibility>
              </div>
            </div>
            <div
              className="counter__item-4"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="counter__left-4">
                <img src="assets/imgs/icon/c3.png" alt="Icon" />
              </div>
              <div className="counter__right-4">
                <TrackVisibility once>
                  {({ isVisible }) =>
                    isVisible && (
                      <>
                        <div className="counter__number-4 counter_slow">
                          <CountUp delay={0} start={0} end={50} />+
                        </div>
                        <h2 className="counter__title-4">Winning award</h2>
                      </>
                    )
                  }
                </TrackVisibility>
              </div>
            </div>
            <div
              className="counter__item-4"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="counter__left-4">
                <img src="assets/imgs/icon/c4.png" alt="Icon" />
              </div>
              <div className="counter__right-4">
                <TrackVisibility once>
                  {({ isVisible }) =>
                    isVisible && (
                      <>
                        <div className="counter__number-4 counter_slow">
                          <CountUp delay={0} start={0} end={550} />+
                        </div>
                        <h2 className="counter__title-4">Client review</h2>
                      </>
                    )
                  }
                </TrackVisibility>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter area end */}
    </>
  );
};

export default CounterFive;
