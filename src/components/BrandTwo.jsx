import React from "react";
import Marquee from "react-fast-marquee";
const BrandTwo = () => {
  return (
    <>
      {/* Brand area start */}
      <section className="brand__area pt-150 pb-150">
        <div className="brand__inner">
          <div className="swiper brand__slider">
            <div className="swiper-wrapper">
              <Marquee>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/6/1.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/6/2.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/6/3.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/6/4.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/6/5.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/6/6.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/6/1.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/6/2.png" alt="Brand Logo" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand__slide">
                    <img src="assets/imgs/brand/6/3.png" alt="Brand Logo" />
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

export default BrandTwo;
