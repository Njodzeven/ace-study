import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <>
      {/* blog area start */}
      <section className="blog__details pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog__single">
                <div className="blog__thumb-inner">
                  <img src="assets/imgs/inner/blog-01.jpg" alt="blog-img" />
                </div>
                <div className="blog__content-inner">
                  <ul className="blog__meta-inner">
                    <li>
                      <Link to="/blog">By admin</Link>
                    </li>
                    <li>
                      <Link to="/blog">Category</Link>
                    </li>
                    <li>
                      <Link to="/blog">Comments (05)</Link>
                    </li>
                    <li>
                      <Link to="/blog">Share (05)</Link>
                    </li>
                  </ul>
                  <h2 className="blog__title-inner">
                    Building brands that last with strategies that work
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    Content here, content here', making it look like readable
                    English. Many desktop publishing packages and web page
                    editors now use Lorem Ipsum as their default model text, and
                    a search for 'lorem ipsum' will uncover many web sites still
                    in their infancy.
                  </p>
                  <h4>
                    Benigits of provide your service many IT project builder
                    that can help your idea generate
                  </h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text
                  </p>
                  <p>
                    Established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    poinusing Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. Many
                    desktop publishing packages and web page editors now ui
                    Lorem Ipsum as their default model text, and a search for
                    'lorem ipsum' will uncover many web sites still in their
                    infancy
                  </p>
                  <div className="blog__quote">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteratio some
                      form, by injected humour, or randomised words which don't
                      look even slightly believable. If you are going to use a
                      passage of Lorem Ipsum, you need to be sure there isn't
                      anything embarrassing hidden
                    </p>
                  </div>
                  <div className="blog__thumb2">
                    <img src="assets/imgs/inner/blog-lg-1.jpg" alt="thumb1" />
                  </div>
                  <h4>
                    Driving Innovation and Growth: Strategies for Maximizing
                    Profitability in a Dynamic Market
                  </h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text
                  </p>
                  <p>
                    Established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    poinusing Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. Many
                    desktop publishing packages and web page editors now ui
                    Lorem Ipsum as their default model text, and a search for
                    'lorem ipsum' will uncover many web sites still in their
                    infancy
                  </p>
                  <div className="blog__detailtag">
                    <div className="blog__detaillist">
                      <span>Tags: </span>
                      <ul className="blog__detailleft">
                        <li>App Design</li>
                        <li>Web development</li>
                      </ul>
                    </div>
                    <div className="blog__detailleft">
                      <span>Tags: </span>
                      <ul className="blog__social">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-dribbble" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog__form">
                    <span className="blog__form-title">Leave a reply</span>
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="Name"
                            id="Name"
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="email"
                            name="E-mail"
                            id="E-mail"
                            placeholder="E-mail"
                          />
                        </div>
                        <div className="col-md-12">
                          <textarea
                            name="msg"
                            id="msg"
                            placeholder="Comment"
                            defaultValue={""}
                          />
                        </div>
                        <div className="blog__submitwrap">
                          <button
                            className="blog__submitbtn btn-rollover"
                            type="submit"
                          >
                            Leave a comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
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
                    <Link to="/blog">Strategy</Link>
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
          </div>
        </div>
      </section>
      {/* /blog area end */}
    </>
  );
};

export default BlogDetails;
