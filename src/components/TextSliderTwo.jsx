import React from "react";
import Marquee from "react-fast-marquee";
const TextSliderTwo = () => {
  return (
    <>
      {/* rotate text  */}
      <section className="textslider2__wrap pt-150 pb-150">
        <div className="textslider__area-2 text-slider-down rtl">
          <div className="textslider__inner-2">
            <div className="swiper textslider__active-2">
              <div className="swiper-wrapper">
                <Marquee direction={"right"}>
                  <div className="swiper-slide">
                    <div className="textslider__slide">
                      <h2 className="textslider__text1 text-uppercase">
                        Digital mark
                        <span>
                          <i className="fa-solid fa-chevron-right" />
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="textslider__slide">
                      <h2 className="textslider__text1 text-uppercase">
                        Web develo
                        <span>
                          <i className="fa-solid fa-chevron-right" />
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="textslider__slide">
                      <h2 className="textslider__text1 text-uppercase">
                        Email market
                        <span>
                          <i className="fa-solid fa-chevron-right" />
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="textslider__slide">
                      <h2 className="textslider__text1 text-uppercase">
                        Brand identity
                        <span>
                          <i className="fa-solid fa-chevron-right" />
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="textslider__slide">
                      <h2 className="textslider__text1 text-uppercase">
                        Brand identity
                        <span>
                          <i className="fa-solid fa-chevron-right" />
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="textslider__slide">
                      <h2 className="textslider__text1 text-uppercase">
                        Digital trans
                        <span>
                          <i className="fa-solid fa-chevron-right" />
                        </span>
                      </h2>
                    </div>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /rotate text  */}
    </>
  );
};

export default TextSliderTwo;
