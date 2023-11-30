import React from "react";
import { Link } from "react-router-dom";

const BlogOne = () => {
  return (
    <>
      {/* Blog area start */}
      <section className="blog__area pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrap" data-aos="fade-up">
                <h2 className="sec-subtitle">
                  Our Blog <span>Our Blog</span>
                </h2>
                <h3 className="sec-title">
                  Let’s Checkout our <br /> All Letest News
                </h3>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__list">
                <article
                  className="blog__item"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="blog__thumb">
                    <div className="shine">
                      <Link to="/blog-details">
                        <img src="assets/imgs/blog/1.png" alt="Thumbnail" />
                      </Link>
                    </div>
                    <div className="date">
                      16 <br /> March
                    </div>
                  </div>
                  <ul className="blog__meta">
                    <li>
                      <Link to="#">
                        <i className="fa-regular fa-comments" /> Comments (05)
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-regular fa-user" /> By admin
                      </Link>
                    </li>
                  </ul>
                  <Link to="/blog-details">
                    <h4 className="blog__title">
                      The standard chunk of Lorem Ipsum Our Company
                    </h4>
                  </Link>
                  <Link className="db-btn-arrow" to="/blog-details">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </article>
                <article
                  className="blog__item"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <div className="blog__thumb">
                    <div className="shine">
                      <Link to="/blog-details">
                        <img src="assets/imgs/blog/2.png" alt="Thumbnail" />
                      </Link>
                    </div>
                    <div className="date">
                      16 <br /> March
                    </div>
                  </div>
                  <ul className="blog__meta">
                    <li>
                      <Link to="#">
                        <i className="fa-regular fa-comments" /> Comments (05)
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-regular fa-user" /> By admin
                      </Link>
                    </li>
                  </ul>
                  <Link to="/blog-details">
                    <h4 className="blog__title">
                      The standard chunk of Lorem Ipsum Our Company
                    </h4>
                  </Link>
                  <Link className="db-btn-arrow" to="/blog-details">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </article>
                <article
                  className="blog__item"
                  data-aos="fade-up"
                  data-aos-delay={900}
                >
                  <div className="blog__thumb">
                    <div className="shine">
                      <Link to="/blog-details">
                        <img src="assets/imgs/blog/3.png" alt="Thumbnail" />
                      </Link>
                    </div>
                    <div className="date">
                      16 <br /> March
                    </div>
                  </div>
                  <ul className="blog__meta">
                    <li>
                      <Link to="#">
                        <i className="fa-regular fa-comments" /> Comments (05)
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-regular fa-user" /> By admin
                      </Link>
                    </li>
                  </ul>
                  <Link to="/blog-details">
                    <h4 className="blog__title">
                      The standard chunk of Lorem Ipsum Our Company
                    </h4>
                  </Link>
                  <Link className="db-btn-arrow" to="/blog-details">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </Link>
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

export default BlogOne;
