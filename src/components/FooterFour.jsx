import React from "react";
import { Link } from "react-router-dom";

const FooterFour = () => {
  return (
    <>
      {/* Footer area start */}
      <footer className="footer__area-4">
        <div className="footer__top-4-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="footer__top-4">
                  <h2 className="title">
                    Meet The Main Pioneers <br /> of Education
                  </h2>
                  <Link to="/about" className="db-btn-primary">
                    Read More About <i className="fa-solid fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__widgets db-bg-secondary">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div className="footer__logo">
                  <Link to="/">
                    <img
                      src="assets/imgs/logo/logo-light.png"
                      alt="Footer Logo"
                    />
                  </Link>
                  <p>
                    Conditions Terms of Use Ours feturesin Services ew Guests
                    LisitThe Team List Guests LisitThe Team List
                  </p>
                  <div className="footer__social-4">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link toi="#">
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
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div className="footer__address">
                  <h2 className="footer__title">Address</h2>
                  <ul>
                    <li>
                      <span>
                        <i className="fa-solid fa-paper-plane" />
                      </span>
                      <p>
                        Old city Street,Usa <br />
                        1212 New york-3500
                      </p>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-phone" />
                      </span>
                      <Link to="tel:+88014420420">+88 014 420420</Link>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <Link to="mailto:urcompany@mail.com">
                        urcompany@mail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div className="footer__service">
                  <h2 className="footer__title">More Servicve</h2>
                  <ul>
                    <li>
                      <Link to="/about">Ui Design</Link>
                    </li>
                    <li>
                      <Link to="/about">Ux Design</Link>
                    </li>
                    <li>
                      <Link to="/about">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link to="/about">Video Editing</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div className="footer__newsletter">
                  <div className="footer__title">Newsletter</div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted
                  </p>
                  <div className="footer__rblog border-0 pb-0">
                    <Link to="/blog-details">
                      <img src="assets/imgs/home-2/recent-2.jpg" alt="rtitle" />
                    </Link>
                    <div className="footer__rcontent">
                      <span>
                        <i className="fa-solid fa-calendar-days" /> October 19,
                        2022
                      </span>
                      <Link to="/blog-details">
                        <p>The standard chunk of Lorem Ipsum</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12">
                <div className="footer__btm">
                  <div className="footer__copyright">
                    <p>© s7template 2023 | All Rights Reserved</p>
                  </div>
                  <div className="footer__menu-4">
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

export default FooterFour;
