import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderTwo = () => {
  const [offCanvas, setOffCanvas] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
  }, []);

  const offCanvasControl = () => {
    setOffCanvas(!offCanvas);
  };
  return (
    <>
      {/* Offcanvas area start */}
      <div
        className={!offCanvas ? "offcanvas__area" : "offcanvas__area showed"}
      >
        <div className="offcanvas__inner">
          <div className="offcanvas__top">
            <img src="assets/imgs/logo/logo-light.png" alt="Logo" />
            <button id="offcanvas_close" onClick={offCanvasControl}>
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="offcanvas__search">
            <form action="#">
              <input type="text" placeholder="Search..." name="s" />
            </form>
          </div>
          <div className="offcanvas__menu">
            <nav className="offcanvas-navigation" id="offcanvas-navigation">
              <ul>
                <li className="menu-item-has-children">
                  <Link to="/">HOME</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/">Creative Agency</Link>
                    </li>
                    <li>
                      <Link to="/index-2">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link to="/index-3">Creative Agency Dark</Link>
                    </li>
                    <li>
                      <Link to="/index-4">Digital Marketing Dark</Link>
                    </li>
                    <li>
                      <Link to="/index-5">Creative Band</Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link to="#">Services</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/service-details">Services Details</Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link to="/about">Pages</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>

                    <li>
                      <Link to="/project">Projects</Link>
                    </li>
                    <li>
                      <Link to="/project-details">Projects Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/blog">Blog</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>{" "}
                </li>
              </ul>
            </nav>
          </div>
          <div className="offcanvas__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1511.2499674845235!2d-73.99553882767792!3d40.75102778252164!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1686536419224!5m2!1sen!2sbd"
              loading="lazy"
              title="digibold"
            />
          </div>
          <div className="offcanvas__btm">
            <div className="footer__address-3">
              <ul>
                <li>
                  <span>
                    <i className="fa-solid fa-location-dot" />
                  </span>
                  <p className="text-white">
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
                    <Link to="mailto:info@driller.com">info@driller.com</Link>
                    <Link to="mailto:info.example@driller.com">
                      info.example@driller.com
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
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
      </div>
      {/* Offcanvas area end */}
      {/* Header area start */}
      <header className="header__area  plr-90">
        <div className="header__inner inner-2">
          <div className="header__logo logo-2">
            <Link to="/">
              <img src="/assets/imgs/logo/logo.png" alt="Site Logo" />
            </Link>
          </div>
          <div className="header__menu">
            <nav className="main-menu">
              <ul>
                <li className="has-dropdown">
                  <Link to="#">Home</Link>
                  <ul className="main-dropdown">
                    <li>
                      <Link to="/">Creative Agency</Link>
                    </li>
                    <li>
                      <Link to="/index-2">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link to="/index-3">Creative Agency Dark</Link>
                    </li>
                    <li>
                      <Link to="/index-4">Digital Marketing Dark</Link>
                    </li>
                    <li>
                      <Link to="/index-5">Creative Band</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li className="has-dropdown">
                  <Link to="#">Service</Link>
                  <ul className="main-dropdown">
                    <li>
                      <Link to="/service-details">Service details</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-megamenu">
                  <Link to="#">pages</Link>
                  <div className="mega-menu">
                    <ul>
                      <li>home</li>
                      <li>
                        <Link to="/">Creative Agency</Link>
                      </li>
                      <li>
                        <Link to="/index-2">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link to="/index-3">Creative Agency Dark</Link>
                      </li>
                      <li>
                        <Link to="/index-4">Digital Marketing Dark</Link>
                      </li>
                      <li>
                        <Link to="/index-5">Creative Band</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>service</li>
                      <li>
                        <Link to="/service-details">Service details</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>portfolio</li>
                      <li>
                        <Link to="/project">portfolio</Link>
                      </li>
                      <li>
                        <Link to="/project-details">portfolio details</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>Blog</li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Blog details</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-dropdown">
                  <Link to="#">blog</Link>
                  <ul className="main-dropdown">
                    <li className="has-dropdown">
                      <Link to="/blog">Blog</Link>
                      <ul className="sub-dropdown">
                        <li>
                          <Link to="/blog-details">blog details</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__others">
            <div className="header__offcanvas">
              <Link className="header__btn btn-rollover" to="/contact">
                Get a quote <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="header__offcanvas db-mobile-icon">
              <button className="menu_icon" onClick={offCanvasControl}>
                <img src="assets/imgs/icon/menu.png" alt="Menu Icon" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="search__form">
        <form action="#">
          <input type="text" name="s" placeholder="Search..." />
        </form>
      </div>
      {/* Header area end */}
    </>
  );
};

export default HeaderTwo;
