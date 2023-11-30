import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialTwo = () => {
  const swiperRef = useRef();
  return (
    <>
      {/* testimonial area start */}
      <section className="testimonial__area-5">
        <div className="container">
          <div className="digibold-section-wrapper-5">
            <h2
              className="section-subtitle-5 heading-animation"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              Testomonials
            </h2>
            <h3 className="section-title-5 heading-animation">
              Designs that leave a <br /> lasting impression
            </h3>
            {/* If we need navigation buttons */}
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
          <div className="testimonial__wrapper-5">
            <div className=" testimonial-five-active">
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
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial__item-5">
                      <div className="testimonial__header-5">
                        <div className="testimonial__thumb-5">
                          <img
                            src="assets/imgs/home-5/testi-1.png"
                            alt="testimonial"
                          />
                        </div>
                        <div className="testimonial__rating-5">
                          <div className="testimonial__rating-wrap-5">
                            <div className="testimonial__rating-star">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                            </div>
                            <span className="testimonial__rate-5">4.8</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-animation">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by thes readable content of a page when
                          looking at its layout. Many desktop us or publishing
                          packages and web pagejk editors now use Lorem Ipsum as
                          their desi default model text, and a search
                        </p>
                      </div>
                      <div className="testimonial__footer-5">
                        <h4 className="testimonial__name-5">Ronald Richards</h4>
                        <span className="testimonial__post-5">
                          Marketing Coordinator
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial__item-5">
                      <div className="testimonial__header-5">
                        <div className="testimonial__thumb-5">
                          <img
                            src="assets/imgs/home-5/testi-1.png"
                            alt="testimonial"
                          />
                        </div>
                        <div className="testimonial__rating-5">
                          <div className="testimonial__rating-wrap-5">
                            <div className="testimonial__rating-star">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                            </div>
                            <span className="testimonial__rate-5">4.8</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-animation">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by thes readable content of a page when
                          looking at its layout. Many desktop us or publishing
                          packages and web pagejk editors now use Lorem Ipsum as
                          their desi default model text, and a search
                        </p>
                      </div>
                      <div className="testimonial__footer-5">
                        <h4 className="testimonial__name-5">Ronald Richards</h4>
                        <span className="testimonial__post-5">
                          Marketing Coordinator
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial__item-5">
                      <div className="testimonial__header-5">
                        <div className="testimonial__thumb-5">
                          <img
                            src="assets/imgs/home-5/testi-1.png"
                            alt="testimonial"
                          />
                        </div>
                        <div className="testimonial__rating-5">
                          <div className="testimonial__rating-wrap-5">
                            <div className="testimonial__rating-star">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                            </div>
                            <span className="testimonial__rate-5">4.8</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-animation">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by thes readable content of a page when
                          looking at its layout. Many desktop us or publishing
                          packages and web pagejk editors now use Lorem Ipsum as
                          their desi default model text, and a search
                        </p>
                      </div>
                      <div className="testimonial__footer-5">
                        <h4 className="testimonial__name-5">Ronald Richards</h4>
                        <span className="testimonial__post-5">
                          Marketing Coordinator
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial__item-5">
                      <div className="testimonial__header-5">
                        <div className="testimonial__thumb-5">
                          <img
                            src="assets/imgs/home-5/testi-1.png"
                            alt="testimonial"
                          />
                        </div>
                        <div className="testimonial__rating-5">
                          <div className="testimonial__rating-wrap-5">
                            <div className="testimonial__rating-star">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                            </div>
                            <span className="testimonial__rate-5">4.8</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-animation">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by thes readable content of a page when
                          looking at its layout. Many desktop us or publishing
                          packages and web pagejk editors now use Lorem Ipsum as
                          their desi default model text, and a search
                        </p>
                      </div>
                      <div className="testimonial__footer-5">
                        <h4 className="testimonial__name-5">Ronald Richards</h4>
                        <span className="testimonial__post-5">
                          Marketing Coordinator
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial__item-5">
                      <div className="testimonial__header-5">
                        <div className="testimonial__thumb-5">
                          <img
                            src="assets/imgs/home-5/testi-1.png"
                            alt="testimonial"
                          />
                        </div>
                        <div className="testimonial__rating-5">
                          <div className="testimonial__rating-wrap-5">
                            <div className="testimonial__rating-star">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                            </div>
                            <span className="testimonial__rate-5">4.8</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-animation">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by thes readable content of a page when
                          looking at its layout. Many desktop us or publishing
                          packages and web pagejk editors now use Lorem Ipsum as
                          their desi default model text, and a search
                        </p>
                      </div>
                      <div className="testimonial__footer-5">
                        <h4 className="testimonial__name-5">Ronald Richards</h4>
                        <span className="testimonial__post-5">
                          Marketing Coordinator
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial area end */}
    </>
  );
};

export default TestimonialTwo;
