import React from "react";
import { Link } from "react-router-dom";

const BlogTwo = () => {
  return (
    <>
      {/* blog  */}
      <section className="blog__area-2">
        <div
          className="service__sectiontitle pb-70 text-center"
          data-aos="fade-up"
        >
          <span>Latest Blog</span>
          <h2 className="title text-dark">
            Unlocking the potential <br /> of your brand
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                className="blog__item-2"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="blog__thumb-2">
                  <Link to="/blog-details">
                    <img src="assets/imgs/home-2/blog-1.jpg" alt="thumb" />
                  </Link>
                  <span className="blog__meta-2">December 23,2023</span>
                </div>
                <div className="blog__content-2">
                  <Link className="blog__title-2" to="/blog-details">
                    Social Media Management
                  </Link>
                  <p>
                    It is a long established fact that a reader will be
                    distracted byi the readable desi content of a page when
                    looking at its layout
                  </p>
                  <Link className="blog__btn-2" to="/blog-details">
                    Read more{" "}
                    <img src="assets/imgs/home-2/arrow-down.png" alt="thumb" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="blog__item-2"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="blog__thumb-2">
                  <Link to="/blog-details">
                    <img src="assets/imgs/home-2/blog-2.jpg" alt="thumb" />
                  </Link>
                  <span className="blog__meta-2">December 23,2023</span>
                </div>
                <div className="blog__content-2">
                  <Link className="blog__title-2" to="/blog-details">
                    Environmental Design digital
                  </Link>
                  <p>
                    It is a long established fact that a reader will be
                    distracted byi the readable desi content of a page when
                    looking at its layout
                  </p>
                  <Link className="blog__btn-2" to="/blog-details">
                    Read more{" "}
                    <img src="assets/imgs/home-2/arrow-down.png" alt="thumb" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /blog  */}
    </>
  );
};

export default BlogTwo;
