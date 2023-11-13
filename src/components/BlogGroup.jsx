import React from "react";
import { Link } from "react-router-dom";

const BlogGroup = () => {
  return (
    <>
      {/* blog area start */}
      <section className="blog__area-inner pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog__item-inner">
                <div className="blog__thumb-inner shine">
                  <Link to="/blog-details">
                    <img src="assets/imgs/inner/blog-01.jpg" alt="blog-img" />
                  </Link>
                </div>
                <div className="blog__content-inner">
                  <ul className="blog__meta-inner">
                    <li>
                      <Link to="#">By admin</Link>
                    </li>
                    <li>
                      <Link to="#">Category</Link>
                    </li>
                    <li>
                      <Link to="#">Comments (05)</Link>
                    </li>
                    <li>
                      <Link to="#">Share (05)</Link>
                    </li>
                  </ul>
                  <Link to="/blog-details">
                    <h2 className="blog__title-inner">
                      Building brands that last with strategies that work
                    </h2>
                  </Link>
                  <p className="blog__dis-inner">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking
                    alayout. The <br /> point of using Lorem Ipsum is that it
                    has a more-or-less normal distribution of letters, as
                    opposed
                  </p>
                  <Link
                    className="blog__btn-inner btn-rollover"
                    to="/blog-details"
                  >
                    readmore <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="blog__item-inner">
                <div className="blog__thumb-inner shine">
                  <Link to="/blog-details">
                    <img src="assets/imgs/inner/blog-02.jpg" alt="blog-img" />
                  </Link>
                </div>
                <div className="blog__content-inner">
                  <ul className="blog__meta-inner">
                    <li>
                      <Link to="#">By admin</Link>
                    </li>
                    <li>
                      <Link to="#">Category</Link>
                    </li>
                    <li>
                      <Link to="#">Comments (05)</Link>
                    </li>
                    <li>
                      <Link to="#">Share (05)</Link>
                    </li>
                  </ul>
                  <Link to="/blog-details">
                    <h2 className="blog__title-inner">
                      Innovative solutions for the modern marketer
                    </h2>
                  </Link>
                  <p className="blog__dis-inner">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking
                    alayout. The <br /> point of using Lorem Ipsum is that it
                    has a more-or-less normal distribution of letters, as
                    opposed
                  </p>
                  <Link
                    className="blog__btn-inner btn-rollover"
                    to="/blog-details"
                  >
                    readmore <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="blog__item-inner">
                <div className="blog__thumb-inner shine">
                  <Link to="/blog-details">
                    <img src="assets/imgs/inner/blog-03.jpg" alt="blog-img" />
                  </Link>
                </div>
                <div className="blog__content-inner">
                  <ul className="blog__meta-inner">
                    <li>
                      <Link to="#">By admin</Link>
                    </li>
                    <li>
                      <Link to="#">Category</Link>
                    </li>
                    <li>
                      <Link to="#">Comments (05)</Link>
                    </li>
                    <li>
                      <Link to="#">Share (05)</Link>
                    </li>
                  </ul>
                  <Link to="/blog-details">
                    <h2 className="blog__title-inner">
                      Maximize you potential amplify your message
                    </h2>
                  </Link>
                  <p className="blog__dis-inner">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking
                    alayout. The <br /> point of using Lorem Ipsum is that it
                    has a more-or-less normal distribution of letters, as
                    opposed
                  </p>
                  <Link
                    className="blog__btn-inner btn-rollover"
                    to="/blog-details"
                  >
                    readmore <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="blog__item-inner">
                <div className="blog__thumb-inner shine">
                  <Link to="/blog-details">
                    <img src="assets/imgs/inner/blog-04.jpg" alt="blog-img" />
                  </Link>
                </div>
                <div className="blog__content-inner">
                  <ul className="blog__meta-inner">
                    <li>
                      <Link to="#">By admin</Link>
                    </li>
                    <li>
                      <Link to="#">Category</Link>
                    </li>
                    <li>
                      <Link to="#">Comments (05)</Link>
                    </li>
                    <li>
                      <Link to="#">Share (05)</Link>
                    </li>
                  </ul>
                  <Link to="/blog-details">
                    <h2 className="blog__title-inner">
                      Creating connections that convert to customers
                    </h2>
                  </Link>
                  <p className="blog__dis-inner">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking
                    alayout. The <br /> point of using Lorem Ipsum is that it
                    has a more-or-less normal distribution of letters, as
                    opposed
                  </p>
                  <Link
                    className="blog__btn-inner btn-rollover"
                    to="/blog-details"
                  >
                    readmore <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="blog__sidebar">
                <div className="blog__widget">
                  <div className="blog__search">
                    <form action="#" accept="#">
                      <input type="text" placeholder="Search anything" />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="blog__widget">
                  <span className="blog__widget-title">Blog Categories</span>
                  <ul className="blog__category pt-30">
                    <li>
                      <Link to="/blog">Web Development</Link> <span>19</span>
                    </li>
                    <li>
                      <Link to="/blog">Building Design</Link> <span>05</span>
                    </li>
                    <li>
                      <Link to="/blog">Architecture Design</Link>{" "}
                      <span>17</span>
                    </li>
                    <li>
                      <Link to="/blog">Motion Design</Link> <span>03</span>
                    </li>
                    <li>
                      <Link to="/blog">Graphics Design</Link> <span>18</span>
                    </li>
                    <li>
                      <Link to="/blog">Interior Design</Link> <span>33</span>
                    </li>
                  </ul>
                </div>
                <div className="blog__widget">
                  <span className="blog__widget-title">Latest News</span>
                  <div className="blog__recent pt-30">
                    <div className="blog__ritem">
                      <div className="blog__rcontent">
                        <Link to="/blog">
                          <h4 className="blog__recenttitle">
                            Business information about any of kind their{" "}
                          </h4>
                        </Link>
                        <small>January 17 2023</small>
                      </div>
                      <Link to="/blog">
                        <img src="assets/imgs/inner/r-1.jpg" alt="r1" />
                      </Link>
                    </div>
                    <div className="blog__ritem">
                      <div className="blog__rcontent">
                        <Link to="/blog">
                          <h4 className="blog__recenttitle">
                            Business information about any of kind their{" "}
                          </h4>
                        </Link>
                        <small>January 17 2023</small>
                      </div>
                      <Link to="/blog">
                        <img src="assets/imgs/inner/r-2.jpg" alt="r1" />
                      </Link>
                    </div>
                    <div className="blog__ritem">
                      <div className="blog__rcontent">
                        <Link to="/blog">
                          <h4 className="blog__recenttitle">
                            Business information about any of kind their{" "}
                          </h4>
                        </Link>
                        <small>January 17 2023</small>
                      </div>
                      <Link to="/blog">
                        <img src="assets/imgs/inner/r-3.jpg" alt="r1" />
                      </Link>
                    </div>
                    <div className="blog__ritem">
                      <div className="blog__rcontent">
                        <Link to="/blog">
                          <h4 className="blog__recenttitle">
                            Business information about any of kind their{" "}
                          </h4>
                        </Link>
                        <small>January 17 2023</small>
                      </div>
                      <Link to="/blog">
                        <img src="assets/imgs/inner/r-4.jpg" alt="r1" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog__widget">
                  <span className="blog__widget-title">Blog Categories</span>
                  <ul className="blog__tags pt-30">
                    <Link to="/blog">Start shape</Link>
                    <Link to="/blog">Architecture</Link>
                    <Link to="/blog">Large</Link>
                    <Link to="/blog">Business</Link>
                    <Link to="/blog">Stretegy</Link>
                    <Link to="/blog">Item</Link>
                    <Link to="/blog">Bold</Link>
                    <Link to="/blog">Large Project</Link>
                  </ul>
                </div>
                <div className="blog__widget">
                  <div className="blog__notification">
                    <img src="assets/imgs/inner/msg.png" alt="quote" />
                    <p>
                      The designer always use her creativity, I am happy to use
                      service, Well done for your future hope you will be best
                    </p>
                    <i className="fa-solid fa-quote-right" />
                  </div>
                </div>
              </aside>
            </div>
            <div className="blog__pagination-wrap">
              <ul className="blog__pagination-list">
                <li>
                  <Link to="#">1</Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">3</Link>
                </li>
                <li>
                  <Link to="#">4</Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-solid fa-angles-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* /blog area end */}
    </>
  );
};

export default BlogGroup;
