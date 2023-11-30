import React from "react";
import Marquee from "react-fast-marquee";
const BrandThree = () => {
  return (
    <>
      {/* Brand area start */}
      <section className="brand__area pt-150 pb-150">
        <div className="brand__inner">
          <div
            className="swiper brand__slider"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="swiper-wrapper">
              <Marquee>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/5.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/6.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      {/* Brand area end */}
    </>
  );
};

export default BrandThree;
