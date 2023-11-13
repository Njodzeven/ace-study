import React from "react";

const GalleryTwo = () => {
  return (
    <>
      {/* Gallery area start */}
      <section className="gallery__area-3 pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="gallery__title-wrap-3" data-aos="fade-up">
                <h2 className="sec-title text-capitalize">
                  Crafting digital experiences that <br /> engage and inspire
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="gallery__top-3">
                <div
                  className="gallery__item-3"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <img src="assets/imgs/gallery/3/1.jpg" alt="digibold" />
                </div>
                <div
                  className="gallery__item-3"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available ours but the majority have suffered alteration in
                    some form, by injected humour or randomised words which don
                    look even the design here us
                  </p>
                  <img src="assets/imgs/gallery/3/2.jpg" alt="digibold" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="gallery__btm-3">
                <div
                  className="gallery__item-3"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <img src="assets/imgs/gallery/3/3.jpg" alt="digibold" />
                </div>
                <div
                  className="gallery__item-3"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <img src="assets/imgs/gallery/3/4.jpg" alt="digibold" />
                </div>
                <div
                  className="gallery__item-3"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <img src="assets/imgs/gallery/3/5.jpg" alt="digibold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery area end */}
    </>
  );
};

export default GalleryTwo;
