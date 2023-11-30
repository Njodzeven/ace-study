import React from "react";

const WhoWeAreOne = () => {
  return (
    <>
      {/* Who we are area start */}
      <section className="who__area pt-170 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6">
              <div className="who__left">
                <div className="sec-title-wrap" data-aos="fade-up">
                  <h3 className="sec-title">
                    Transforming dreams <br /> into degrees
                  </h3>
                </div>
                <div className="who__features">
                  <div
                    className="who__feature"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="number">
                      <span>01</span>
                    </div>
                    <div className="who__content">
                      <h4 className="title">Unlock your academic performance</h4>
                      <p>
                        Enhance your academic performance with our personalized study platform. Receive tailored study tips and track your progress to achieve better results effortlessly
                      </p>
                    </div>
                  </div>
                  <div
                    className="who__feature"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <div className="number">
                      <span>02</span>
                    </div>
                    <div className="who__content">
                      <h4 className="title">Effortless Exam Excellence</h4>
                      <p>
                        Ace exams while studying smarter, not harder. With personalized study tips, resources, reminders, and a counsellor, streamline your study routine, helping you reduce late-night cramming sessions
                      </p>
                    </div>
                  </div>
                  <div
                    className="who__feature"
                    data-aos="fade-up"
                    data-aos-delay={900}
                  >
                    <div className="number">
                      <span>03</span>
                    </div>
                    <div className="who__content">
                      <h4 className="title">Bye Bye To Midnight Cramming</h4>
                      <p>
                        Revolutionize your study habits with Ace Study. Utilize personalized reminders, expert study guidance, and a comprehensive tracker to optimize your study schedule, leaving behind stress of last-minute studying
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who we are area end */}
    </>
  );
};

export default WhoWeAreOne;
