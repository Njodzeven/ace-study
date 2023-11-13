import React from "react";
import { Link } from "react-router-dom";

const ServiceOne = () => {
  return (
    <>
      {/* Service area start */}
      <section className="service__area pb-150">
        <div className="container">
          <div className="row pt-4">
            <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-4">
              <div className="service__item" data-aos="fade-up">
              <div className="bell icon">
                  <span>
                    <i className="fas fa-lightbulb" />
                  </span>
                </div>
                <div className="service__content">
                  <Link to="/service-details">
                    <div className="service__title">Personalized Study Tips</div>
                  </Link>
                  <p>
                  Tailor your study sessions with personalized tips designed to enhance your learning style, making each session more effective and efficient.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-4">
              <div
                className="service__item"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="bell icon">
                  <span>
                    <i className="fas fa-chart-line" />
                  </span>
                </div>
                <div className="service__content">
                  <Link to="/service-details">
                    <div className="service__title">
                    Progress Tracking
                    </div>
                  </Link>
                  <p>
                  Monitor and celebrate your academic journey, visualizing improvements and setting new goals based on evolving study patterns and successes since sign-up.
                  </p>
                </div>
                <div className="bell icon">
                  <span>
                    <i className="fas fa-bell" />
                  </span>
                </div>
                <div className="service__content">
                  <Link to="/service-details">
                    <div className="service__title">
                      Reminder
                    </div>
                  </Link>
                  <p>
                  Stay organized effortlessly by setting personalized reminders for assignments, exams, and events, ensuring you never miss a crucial deadline.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-4">
              <div
                className="service__item"
                data-aos="fade-up"
                data-aos-delay={1000}
              >
                <div className="bell icon">
                  <span>
                    <i className="fas fa-heart" />
                  </span>
                </div>
                <div className="service__content">
                  <Link to="/service-details">
                    <div className="service__title"> Counseling</div>
                  </Link>
                  <p>
                  Overcome bad study habits and common challenges with personalized counseling, fostering positive study routines for long-term success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-4">
              <div
                className="service__item"
                data-aos="fade-up"
                data-aos-delay={1000}
              >
                <div className="bell icon">
                  <span>
                    <i className="fas fa-book" />
                  </span>
                </div>
                <div className="service__content">
                  <Link to="/service-details">
                    <div className="service__title">Study Resources</div>
                  </Link>
                  <p>
                  Dive into curated study resources tailored to your needs, providing a comprehensive library of materials and tools to support your educational journey.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Service area end */}
    </>
  );
};

export default ServiceOne;
