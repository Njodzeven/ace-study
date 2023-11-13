import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
const TeamThree = () => {
  const swiperParams = {
    spaceBetween: 20,
    slidesPerView: 1,
    modules: [Autoplay],
    loop: true,
    autoplay: [
      {
        delay: 500,
        disableOnInteraction: true,
      },
    ],
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <>
      {/* Team area start */}
      <section className="team__area-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrap" data-aos="fade-up">
                <h3 className="sec-title text-capitalize">
                  Meet Our <br /> Professional Team
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="team__list-3 plr-100">
          <div className="swiper team__slider-3">
            <div className="swiper-wrappers">
              <Swiper {...swiperParams}>
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="team__image-3">
                      <Link to="/about">
                        <img src="assets/imgs/team/3/1.png" alt="digibold" />
                      </Link>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                      <Link to="/about">
                        <h5 className="team__title-3">Annette Black</h5>
                      </Link>
                      <p>Finance Assistant</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="team__image-3">
                      <Link to="/about">
                        <img src="assets/imgs/team/3/2.png" alt="digibold" />
                      </Link>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                      <Link to="/about">
                        <h5 className="team__title-3">Christaine Eve</h5>
                      </Link>
                      <p> Founder &amp; CEO </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <div className="team__image-3">
                      <Link to="/about">
                        <img src="assets/imgs/team/3/3.png" alt="digibold" />
                      </Link>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                      <Link to="/about">
                        <h5 className="team__title-3">Annette Black</h5>
                      </Link>
                      <p>Finance Assistant</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={800}
                  >
                    <div className="team__image-3">
                      <Link to="/about">
                        <img src="assets/imgs/team/3/4.png" alt="digibold" />
                      </Link>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                      <Link to="/about">
                        <h5 className="team__title-3">Jhon Adam</h5>
                      </Link>
                      <p>Lead Developer</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="team__image-3">
                      <Link to="/about">
                        <img src="assets/imgs/team/3/1.png" alt="digibold" />
                      </Link>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                      <Link to="/about">
                        <h5 className="team__title-3">Annette Black</h5>
                      </Link>
                      <p>Finance Assistant</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="team__image-3">
                      <Link to="/about">
                        <img src="assets/imgs/team/3/1.png" alt="digibold" />
                      </Link>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                      <Link to="/about">
                        <h5 className="team__title-3">Annette Black</h5>
                      </Link>
                      <p>Finance Assistant</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="team__image-3">
                      <Link to="/about">
                        <img src="assets/imgs/team/3/2.png" alt="digibold" />
                      </Link>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                      <Link to="/about">
                        <h5 className="team__title-3">Christaine Eve</h5>
                      </Link>
                      <p> Founder &amp; CEO </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* Team area end */}
    </>
  );
};

export default TeamThree;
