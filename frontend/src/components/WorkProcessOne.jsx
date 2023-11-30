import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const WorkProcessOne = () => {
  const swiperParams = {
    spaceBetween: 20,
    slidesPerView: 1,
    modules: [Navigation],
    navigation: true,
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
      {/* work process  */}
      <div className="work__area-2">
        <div className="container">
          <div className="counter__content-2 work__header-2 p-0">
            <div className="service__sectiontitle" data-aos="fade-up">
              <span>Work process</span>
              <h2 className="title">
                Unlocking the potential <br /> of your brand
              </h2>
            </div>
            <div
              className="work__icon-2"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="swiper-img-prev size"></div>
              <div className="swiper-img-next size"></div>
            </div>
          </div>
          <div className="work__wrapper">
            <div className="swiper workProcess-2">
              <div className="swiper-wrappers">
                <Swiper {...swiperParams}>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="work__item"
                        data-aos="fade-up"
                        data-aos-delay={300}
                      >
                        <div className="work__thumb">
                          <img
                            src="assets/imgs/home-2/process-1.png"
                            alt="thumb"
                          />
                        </div>
                        <div className="work__contentwrap">
                          <h2 className="work__ititle">
                            App Store <br /> Optimization
                          </h2>
                          <span className="work__icounter">01</span>
                        </div>
                        <p>
                          There are many variations of passages desi of Lorem
                          Ipsum available isout the majority have suffered
                          alteration in sme form
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="work__item"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <div className="work__thumb">
                          <img
                            src="assets/imgs/home-2/process-2.png"
                            alt="thumb"
                          />
                        </div>
                        <div className="work__contentwrap">
                          <h2 className="work__ititle">
                            Quality <br /> Assurance
                          </h2>
                          <span className="work__icounter">02</span>
                        </div>
                        <p>
                          There are many variations of passages desi of Lorem
                          Ipsum available isout the majority have suffered
                          alteration in sme form
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="work__item"
                        data-aos="fade-up"
                        data-aos-delay={900}
                      >
                        <div className="work__thumb">
                          <img
                            src="assets/imgs/home-2/process-3.png"
                            alt="thumb"
                          />
                        </div>
                        <div className="work__contentwrap">
                          <h2 className="work__ititle">
                            Cloud-Based App <br />
                            Development
                          </h2>
                          <span className="work__icounter">03</span>
                        </div>
                        <p>
                          There are many variations of passages desi of Lorem
                          Ipsum available isout the majority have suffered
                          alteration in sme form
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="work__item"
                        data-aos="fade-up"
                        data-aos-delay={300}
                      >
                        <div className="work__thumb">
                          <img
                            src="assets/imgs/home-2/process-3.png"
                            alt="thumb"
                          />
                        </div>
                        <div className="work__contentwrap">
                          <h2 className="work__ititle">
                            Cloud-Based App <br />
                            Development
                          </h2>
                          <span className="work__icounter">03</span>
                        </div>
                        <p>
                          There are many variations of passages desi of Lorem
                          Ipsum available isout the majority have suffered
                          alteration in sme form
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div
                        className="work__item"
                        data-aos="fade-up"
                        data-aos-delay={300}
                      >
                        <div className="work__thumb">
                          <img
                            src="assets/imgs/home-2/process-1.png"
                            alt="thumb"
                          />
                        </div>
                        <div className="work__contentwrap">
                          <h2 className="work__ititle">
                            App Store <br /> Optimization
                          </h2>
                          <span className="work__icounter">01</span>
                        </div>
                        <p>
                          There are many variations of passages desi of Lorem
                          Ipsum available isout the majority have suffered
                          alteration in sme form
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /work process  */}
    </>
  );
};

export default WorkProcessOne;
