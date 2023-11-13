import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
const AboutOne = () => {
  return (
    <>
      {/* About area start */}
      <section className="about__area pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="about__imgs" data-aos="fade-up">
                <div className="image-1">
                  <img src="assets/imgs/about/1.png" alt="digibold" />
                </div>
                <div className="image-2">
                  <img src="assets/imgs/about/2.png" alt="digibold" />
                </div>
                <div className="bell">
                  <span>
                    <i className="fa-regular fa-bell" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div
                className="about__content"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <h3 className="sec-title">
                  Know why you could be performing low because of poor study habits
                </h3>
                <i></i>
                <blockquote>
                  <p>“The study habits of the students are the behaviors that they do in studying. These include time management, note taking, reading and comprehension, and test taking. The study habits of the students are influenced by their study attitudes, which are the feelings and beliefs that they have towards studying. The study attitudes and study habits of the students affect their academic performance, which is the measure of their learning outcomes. The academic performance of the students is important for their personal and professional development.”</p>
                  <footer>by Tus, Jhoselle</footer>
                </blockquote>                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About area end */}
    </>
  );
};

export default AboutOne;
