import React from "react";
import { Link } from "react-router-dom";

const BlogFour = () => {
  return (
    <>
      {/* Blog area start */}
      <section className="blog__area-4 pt-150 pb-150">
        <div className="container">
          <div className="blog__top-4">
            <div className="sec-title-wrap">
              <h2 className="sec-subtitle">blog</h2>
              <h3 className="sec-title heading-animation">
                Latest news &amp; articles <br /> from the blog
              </h3>
            </div>
            <div className="btn-wrap" data-aos="fade-up" data-aos-delay={300}>
              <Link className="db-btn-border btn-rollover" to="#">
                Discover more <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="blog__list">
                <article
                  className="blog__item-4"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="blog__thumb-4" data-tilt="">
                    <Link to="#">
                      <img src="assets/imgs/blog/4/1.png" alt="Thumbnail" />
                    </Link>
                  </div>
                  <div className="blog__content-4">
                    <ul className="blog__meta-4">
                      <li>
                        <Link to="#">
                          <i className="fa-regular fa-folder-open" /> Category
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-regular fa-calendar-days" /> October
                          19, 20222
                        </Link>
                      </li>
                    </ul>
                    <Link to="#">
                      <h4 className="blog__title">
                        The standard chunk of Lorem Ipsum Our Company
                      </h4>
                    </Link>
                    <Link className="db-btn-arrow" to="#">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </article>
                <article
                  className="blog__item-4"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="blog__thumb-4" data-tilt="">
                    <Link to="#">
                      <img src="assets/imgs/blog/4/2.png" alt="Thumbnail" />
                    </Link>
                  </div>
                  <div className="blog__content-4">
                    <ul className="blog__meta-4">
                      <li>
                        <Link to="#">
                          <i className="fa-regular fa-folder-open" /> Category
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-regular fa-calendar-days" /> October
                          19, 20222
                        </Link>
                      </li>
                    </ul>
                    <Link to="#">
                      <h4 className="blog__title">
                        The standard chunk of Lorem Ipsum Our Company
                      </h4>
                    </Link>
                    <Link className="db-btn-arrow" to="#">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </article>
                <article
                  className="blog__item-4"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <div className="blog__thumb-4" data-tilt="">
                    <Link to="#">
                      <img src="assets/imgs/blog/4/3.png" alt="Thumbnail" />
                    </Link>
                  </div>
                  <div className="blog__content-4">
                    <ul className="blog__meta-4">
                      <li>
                        <Link to="#">
                          <i className="fa-regular fa-folder-open" /> Category
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-regular fa-calendar-days" /> October
                          19, 20222
                        </Link>
                      </li>
                    </ul>
                    <Link to="#">
                      <h4 className="blog__title">
                        The standard chunk of Lorem Ipsum Our Company
                      </h4>
                    </Link>
                    <Link className="db-btn-arrow" to="#">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog area end */}
    </>
  );
};

export default BlogFour;
