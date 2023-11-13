import React from "react";
import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <>
      {/* Footer area start */}
      <footer className="footer__area-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="footer__top-3">
                <li>
                  <span>
                    <i className="fa-solid fa-phone-volume" />
                  </span>
                  <p>
                    Call us Today For your Free Quote - Your Agency <br />{" "}
                    <Link to="tel:(603)555-0123">(603) 555-0123</Link>
                  </p>
                </li>
                <div>
                  <Link className="db-btn-primary" to="/contact">
                    <i className="fa-solid fa-shield" /> Free Touch Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__widgets-3">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer__logo-3">
                  <img
                    src="assets/imgs/logo/logo-light.png"
                    alt="Footer Logo"
                  />
                  <p>
                    Conditions Terms of Use Ours feturesin Services ew Guests
                    LisitThe Team List Guests LisitThe Team List
                  </p>
                  <div className="footer__social-3">
                    <ul>
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
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer__link-3">
                  <h2 className="footer__title">Quick links</h2>
                  <ul>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/service-details">Service</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog Post</Link>
                    </li>
                    <li>
                      <Link to="/about">Team Members</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer__address-3">
                  <h2 className="footer__title">Contact now</h2>
                  <ul>
                    <li>
                      <span>
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      <p>
                        Burmsille Street, MN 55337, <br />
                        United States
                      </p>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-phone" />
                      </span>
                      <div>
                        <Link to="tel:+88014420420">+(1) 123 456 7890</Link>
                        <Link to="tel:+88014420420">+(1) 098 765 4321</Link>
                      </div>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <div>
                        <Link to="mailto:info@driller.com">
                          info@driller.com
                        </Link>
                        <Link to="mailto:info.example@driller.com">
                          info.example@driller.com
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer__gallery-3">
                  <div className="footer__title">Gallery posts</div>
                  <ul className="gallery">
                    <li>
                      <Link to="/project">
                        <img
                          src="assets/imgs/blog/3/footer/1.png"
                          alt="Thumbnail"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/project">
                        <img
                          src="assets/imgs/blog/3/footer/2.png"
                          alt="Thumbnail"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/project">
                        <img
                          src="assets/imgs/blog/3/footer/3.png"
                          alt="Thumbnail"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/project">
                        <img
                          src="assets/imgs/blog/3/footer/4.png"
                          alt="Thumbnail"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/project">
                        <img
                          src="assets/imgs/blog/3/footer/5.png"
                          alt="Thumbnail"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/project.ht">
                        <img
                          src="assets/imgs/blog/3/footer/6.png"
                          alt="Thumbnail"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__btm-3-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="footer__btm-3">
                  <div className="footer__copyright-3">
                    <p>
                      Copyright @2023 IT Company Template. All Rights Reserved.
                    </p>
                  </div>
                  <div className="footer__menu-3">
                    <ul>
                      <li>
                        <Link to="/about">Privacy Policy.</Link>
                      </li>
                      <li>
                        <Link to="/about">Terms Of Condition</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer area end */}
    </>
  );
};

export default FooterThree;
