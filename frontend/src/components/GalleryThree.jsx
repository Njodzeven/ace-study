import React from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const GalleryThree = () => {
  const isotope = React.useRef(Isotope | null);
  const [active, setActive] = useState(1);

  // handling filter key change
  useEffect(() => {
    const imgLoad = imagesLoaded(document.querySelectorAll(".portfolio"));

    imgLoad.on("done", () => {
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "masonry",
      });

      return () => isotope.current?.destroy();
    });

    return () => imgLoad.off("done");
  }, []);

  const handleFilterKeyChange = (key, index) => {
    setActive(index);
    isotope.current?.arrange({ filter: `${key}` });
  };
  return (
    <>
      {/* gallery area start */}
      <section className="gallary__area-5">
        <div className="container">
          <div className="gallary__section-wrapper">
            <h2
              className="gallary__sec-title heading-animation"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <span>Elevating</span> Brands through <br /> Seamless Digital{" "}
              <small>Solutions</small>
            </h2>
          </div>
          <img
            className="gallary__circle-5"
            src="assets/imgs/home-5/circle.png"
            alt="circle"
          />
          <section className="portfolio__area-1 pt-145" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div
                    className="portfolio__menu text-center mb-50"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <button
                      data-filter="*"
                      className={active === 1 ? "active" : null}
                      onClick={() => handleFilterKeyChange("*", 1)}
                    >
                      All
                    </button>
                    <button
                      className={active === 2 ? "active" : null}
                      onClick={() => handleFilterKeyChange(".cat1", 2)}
                    >
                      Business
                    </button>
                    <button
                      className={active === 3 ? "active" : null}
                      onClick={() => handleFilterKeyChange(".cat2", 3)}
                    >
                      Consulting
                    </button>
                    <button
                      className={active === 4 ? "active" : null}
                      onClick={() => handleFilterKeyChange(".cat3", 4)}
                    >
                      Worldwide
                    </button>
                    <button
                      className={active === 5 ? "active" : null}
                      onClick={() => handleFilterKeyChange(".cat4", 5)}
                    >
                      Agency
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid filter-container" data-aos="fade-up">
                <div className="portfolio filter-item cat1">
                  <div className="portfolio__thumb">
                    <img src="assets/imgs/home-5/pr-1.jpg" alt="" />
                    <Link className="portfolio__icon" to="/project">
                      <img
                        src="assets/imgs/home-5/chevron-gallary.png"
                        alt="icon"
                      />
                    </Link>
                  </div>
                  <div className="portfolio__text">
                    <Link to="/project">
                      <h4 className="portfolio-title">Light Mockup</h4>
                    </Link>
                    <span>Graphic design</span>
                  </div>
                </div>
                <div className="portfolio filter-item cat2">
                  <div className="portfolio__thumb">
                    <img src="assets/imgs/home-5/pr-1.jpg" alt="" />
                    <Link className="portfolio__icon" to="/project">
                      <img
                        src="assets/imgs/home-5/chevron-gallary.png"
                        alt="icon"
                      />
                    </Link>
                  </div>
                  <div className="portfolio__text">
                    <Link to="/project">
                      <h4 className="portfolio-title">Light Mockup</h4>
                    </Link>
                    <span>Graphic design</span>
                  </div>
                </div>
                <div className="portfolio filter-item cat3">
                  <div className="portfolio__thumb">
                    <img src="assets/imgs/home-5/pr-1.jpg" alt="" />
                    <Link className="portfolio__icon" to="/project">
                      <img
                        src="assets/imgs/home-5/chevron-gallary.png"
                        alt="icon"
                      />
                    </Link>
                  </div>
                  <div className="portfolio__text">
                    <Link to="/project">
                      <h4 className="portfolio-title">Light Mockup</h4>
                    </Link>
                    <span>Graphic design</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* gallary area end */}
    </>
  );
};

export default GalleryThree;
