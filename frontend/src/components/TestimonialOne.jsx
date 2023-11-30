import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
const TestimonialOne = () => {
  return (
    <>
      {/* Testimonial area start */}
      <section className="testimonial__area-3 pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="testimonial__left-3" data-aos="fade-up">
                <h2 className="sec-title text-capitalize text-white">
                  What they’re talking <br /> about us?
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Non lacus pellentesque
                  quam faucibus. Ridiculus malesuada mi etiam sit elementum quis
                  auctor. Dignissim mi imperdiet pretium purus hkhk varius
                  adipiscing morbi eu. Bibendum at nec lobortis eget.
                </p>
                <Link className="db-btn-border" to="/about">
                  read more <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div
                className="testimonial__right-3"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <div className="swiper testimonial__slider-3">
                  <div className="swiper-wrappers">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={20}
                      modules={[Autoplay]}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                      }}
                      loop
                    >
                      <SwiperSlide>
                        <div className="testimonial__slide-3">
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Non lacus
                            pellentesque quam fauc ibus. Ridiculus malesuada mi
                            etiam sit elementum quis auctor. Dignissim mi
                            imperdiet pretium purus varius adipiscing morbi eu.
                            Bibendum at nec It is a long established fact that a
                            reader will be distracted by the readable content of
                            a page when looking at its layout.
                          </p>
                          <div className="testimonial__content-3">
                            <div className="img">
                              <img
                                src="assets/imgs/testimonial/3/client.png"
                                alt="digibold"
                              />
                            </div>
                            <div className="info">
                              <h3 className="client__name-3">Christaine Eve</h3>
                              <h4 className="client__role-3">
                                Founder &amp; CEO
                              </h4>
                              <ul className="rating">
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="testimonial__slide-3">
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Non lacus
                            pellentesque quam fauc ibus. Ridiculus malesuada mi
                            etiam sit elementum quis auctor. Dignissim mi
                            imperdiet pretium purus varius adipiscing morbi eu.
                            Bibendum at nec It is a long established fact that a
                            reader will be distracted by the readable content of
                            a page when looking at its layout.
                          </p>
                          <div className="testimonial__content-3">
                            <div className="img">
                              <img
                                src="assets/imgs/testimonial/3/client.png"
                                alt="digibold"
                              />
                            </div>
                            <div className="info">
                              <h3 className="client__name-3">Anns Underwood</h3>
                              <h4 className="client__role-3">
                                Founder &amp; CEO
                              </h4>
                              <ul className="rating">
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="testimonial__slide-3">
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Non lacus
                            pellentesque quam fauc ibus. Ridiculus malesuada mi
                            etiam sit elementum quis auctor. Dignissim mi
                            imperdiet pretium purus varius adipiscing morbi eu.
                            Bibendum at nec It is a long established fact that a
                            reader will be distracted by the readable content of
                            a page when looking at its layout.
                          </p>
                          <div className="testimonial__content-3">
                            <div className="img">
                              <img
                                src="assets/imgs/testimonial/3/client.png"
                                alt="digibold"
                              />
                            </div>
                            <div className="info">
                              <h3 className="client__name-3">Merekian Dev</h3>
                              <h4 className="client__role-3">
                                Founder &amp; CEO
                              </h4>
                              <ul className="rating">
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial area end */}
    </>
  );
};

export default TestimonialOne;
