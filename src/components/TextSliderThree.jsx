import React from "react";
import Marquee from "react-fast-marquee";
const TextSliderThree = () => {
  return (
    <>
      {/* Text Slider area start */}
      <section className="textslider__area-2">
        <div className="textslider__inner-2">
          <div className="swiper textslider__active-2">
            <div className="swiper-wrapper">
              <Marquee>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text1 herotext">
                      Digital marketing<span>*</span>
                    </h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text1 herotext">
                      Web development<span>*</span>
                    </h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text1 herotext">
                      Email marketing<span>*</span>
                    </h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text1 herotext">
                      Brand identity<span>*</span>
                    </h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text1 herotext">
                      Brand identity<span>*</span>
                    </h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text1 herotext">
                      Digital transformation<span>*</span>
                    </h2>
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      {/* Text Slider area end */}
    </>
  );
};

export default TextSliderThree;
