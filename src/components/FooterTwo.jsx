import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <>
      <footer className="footer__area-2">
        <div className="footer__widgets footer__widgets-2">
          <div className="container">
            <div className="separator-2" />
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                <div className="footer__logo">
                  <img
                    src="assets/imgs/inner/logo-footer.png"
                    alt="Footer Logo"
                  />
                  <p>
                    Conditions Terms of Use Ours feturesin <br /> Services ew
                    Guests LisitThe <br /> Team List Guests LisitThe Team List
                  </p>
                  <div className="footer__newsletter footer__newsletter-2">
                    <div className="footer__title">STAY CONECTED!</div>
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your mail address"
                      />
                      <button type="submit" className="submit-2">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6">
                <div className="footer__service footer__service-2">
                  <h2 className="footer__title">More Servicve</h2>
                  <ul>
                    <li>
                      <Link to="/about.">Ui Design</Link>
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
                <div className="footer__address footer__address-2">
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
                <h2 className="footer__title">Recent News</h2>
                <div className="footer__rblog">
                  <Link to="/blog-details">
                    <img src="assets/imgs/home-2/recent-1.jpg" alt="rtitle" />
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
                <div className="footer__rblog">
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
              <div className="col-xxl-12">
                <div className="footer__btm footer__btm-2">
                  <div className="footer__copyright">
                    <p>© s7template 2023 | All Rights Reserved</p>
                  </div>
                  <div className="footer__social footer__social-2">
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
