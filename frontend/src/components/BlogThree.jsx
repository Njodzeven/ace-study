import React from "react";
import { Link } from "react-router-dom";

const BlogThree = () => {
  return (
    <>
      {/* Blog area start */}
      <section className="blog__area-3 pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrap" data-aos="fade-up">
                <h3 className="sec-title text-capitalize">
                  Latest news &amp; articles <br /> from the blog
                </h3>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__list">
                <article
                  className="blog__item-3"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="blog__thumb-3">
                    <Link to="/blog-details">
                      <img src="assets/imgs/blog/3/1.jpg" alt="Thumbnail" />
                    </Link>
                    <div className="date">
                      16 <br /> March
                    </div>
                  </div>
                  <ul className="blog__meta-3">
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
                    <h4 className="blog__title-3">
                      The standard chunk of Lorem Ipsum Our Company
                    </h4>
                  </Link>
                  <Link className="db-btn-arrow" to="/blog-details">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </article>
                <article
                  className="blog__item-3"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <div className="blog__thumb-3">
                    <Link to="/blog-details">
                      <img src="assets/imgs/blog/3/2.jpg" alt="Thumbnail" />
                    </Link>
                    <div className="date">
                      16 <br /> March
                    </div>
                  </div>
                  <ul className="blog__meta-3">
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
                    <h4 className="blog__title-3">
                      Trusted IT Partner for Your <br /> Business Growth
                    </h4>
                  </Link>
                  <Link className="db-btn-arrow" to="/blog-details">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </article>
                <article
                  className="blog__item-3"
                  data-aos="fade-up"
                  data-aos-delay={900}
                >
                  <div className="blog__thumb-3">
                    <Link to="/blog-details">
                      <img src="assets/imgs/blog/3/3.jpg" alt="Thumbnail" />
                    </Link>
                    <div className="date">
                      16 <br /> March
                    </div>
                  </div>
                  <ul className="blog__meta-3">
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
                    <h4 className="blog__title-3">
                      The standard chunk of Lorem Ipsum <br /> Our Company
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

export default BlogThree;
