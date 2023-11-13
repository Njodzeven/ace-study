import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const TeamFour = () => {
  const swiperRef = useRef();

  return (
    <>
      {/* Team area start */}
      <section className="team__area-5 pt-150 swiper">
        <div className="row">
          <div className="col-lg-4">
            <div className="team__left-5" data-aos="fade-up">
              <span className="team__subtitle-5 heading-animation">
                the team
              </span>
              <h3 className="team__sub-5">Our Best</h3>
              <h2 className="team__title-5">
                {" "}
                <span>Team</span> here
              </h2>
              <div
                className="testimonial-five-prev cursor"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <i className="fa-solid fa-chevron-left" />
              </div>
              <div
                className="testimonial-five-next cursor"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <i className="fa-solid fa-chevron-right" />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className=" team-active-5">
              <div>
                <Swiper
                  spaceBetween={20}
                  modules={[Navigation]}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  slidesPerView={1}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="team__member team-member-5"
                        data-aos="fade-up"
                      >
                        <div className="team__image">
                          <img src="assets/imgs/home-5/t1.jpg" alt="digibold" />
                          <div className="share__wrap">
                            <button className="share-btn">
                              <i className="fa-solid fa-share-nodes" />
                            </button>
                            <ul className="social-share">
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
                          </div>
                        </div>
                        <div className="team__content">
                          <h5 className="team__title">Annette Black</h5>
                          <p>Finance Assistant</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="team__member team-member-5 pt-0"
                        data-aos="fade-up"
                        data-aos-delay={300}
                      >
                        <div className="team__image">
                          <img src="assets/imgs/home-5/t2.jpg" alt="digibold" />
                          <div className="share__wrap">
                            <button className="share-btn">
                              <i className="fa-solid fa-share-nodes" />
                            </button>
                            <ul className="social-share">
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
                          </div>
                        </div>
                        <div className="team__content">
                          <h5 className="team__title">Nayan Tara</h5>
                          <p>accountandant</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="team__member team-member-5 pt-0"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <div className="team__image">
                          <img src="assets/imgs/home-5/t3.jpg" alt="digibold" />
                          <div className="share__wrap">
                            <button className="share-btn">
                              <i className="fa-solid fa-share-nodes" />
                            </button>
                            <ul className="social-share">
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
                          </div>
                        </div>
                        <div className="team__content">
                          <h5 className="team__title">Adward collin</h5>
                          <p> Assistant Manager</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="team__member team-member-5"
                        data-aos="fade-up"
                      >
                        <div className="team__image">
                          <img src="assets/imgs/home-5/t1.jpg" alt="Member" />
                          <div className="share__wrap">
                            <button className="share-btn">
                              <i className="fa-solid fa-share-nodes" />
                            </button>
                            <ul className="social-share">
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
                          </div>
                        </div>
                        <div className="team__content">
                          <h5 className="team__title">Annette Black</h5>
                          <p>Finance Assistant</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="team__member team-member-5 pt-0"
                        data-aos="fade-up"
                        data-aos-delay={300}
                      >
                        <div className="team__image">
                          <img src="assets/imgs/home-5/t2.jpg" alt="Member " />
                          <div className="share__wrap">
                            <button className="share-btn">
                              <i className="fa-solid fa-share-nodes" />
                            </button>
                            <ul className="social-share">
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
                          </div>
                        </div>
                        <div className="team__content">
                          <h5 className="team__title">Nayan Tara</h5>
                          <p>accountandant</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="team__member team-member-5 pt-0"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <div className="team__image">
                          <img src="assets/imgs/home-5/t3.jpg" alt="Member " />
                          <div className="share__wrap">
                            <button className="share-btn">
                              <i className="fa-solid fa-share-nodes" />
                            </button>
                            <ul className="social-share">
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
                          </div>
                        </div>
                        <div className="team__content">
                          <h5 className="team__title">Adward collin</h5>
                          <p> Assistant Manager</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="team__member team-member-5"
                        data-aos="fade-up"
                      >
                        <div className="team__image">
                          <img src="assets/imgs/home-5/t1.jpg" alt="Member " />
                          <div className="share__wrap">
                            <button className="share-btn">
                              <i className="fa-solid fa-share-nodes" />
                            </button>
                            <ul className="social-share">
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
                          </div>
                        </div>
                        <div className="team__content">
                          <h5 className="team__title">Annette Black</h5>
                          <p>Finance Assistant</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="team__member team-member-5 pt-0"
                        data-aos="fade-up"
                        data-aos-delay={300}
                      >
                        <div className="team__image">
                          <img src="assets/imgs/home-5/t2.jpg" alt="Member " />
                          <div className="share__wrap">
                            <button className="share-btn">
                              <i className="fa-solid fa-share-nodes" />
                            </button>
                            <ul className="social-share">
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
                          </div>
                        </div>
                        <div className="team__content">
                          <h5 className="team__title">Nayan Tara</h5>
                          <p>accountandant</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="team__member team-member-5 pt-0"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <div className="team__image">
                          <img src="assets/imgs/home-5/t3.jpg" alt="Member " />
                          <div className="share__wrap">
                            <button className="share-btn">
                              <i className="fa-solid fa-share-nodes" />
                            </button>
                            <ul className="social-share">
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
                          </div>
                        </div>
                        <div className="team__content">
                          <h5 className="team__title">Adward collin</h5>
                          <p> Assistant Manager</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team area end */}
    </>
  );
};

export default TeamFour;
