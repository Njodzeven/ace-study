import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderOne = () => {
  const [search, setSearch] = useState(false);
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

  const searchControl = () => {
    setSearch(!search);
  };
  const offCanvasControl = () => {
    setSearch(false);
    setOffCanvas(!offCanvas);
  };
  return (
    <>
      {/* Header area start */}
      <header className="header__area pos-abs plr-100">
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/home">
              <img src="/assets/imgs/logo/logo.png" alt="Site Logo" />
            </Link>
          </div>
          <div className="header__menu">
            <nav className="main-menu">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/study-tips">Tips</Link>
                </li>
                <li>
                  <Link to="/service-details">Progress</Link>
                </li>
                <li>
                  <Link to="/blog">Counsel</Link>
                </li>
                <li>
                  <Link to="/user-profile">User Profile</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__others">
            <div className="header__search">
              <button
                className={!search ? "search-icon" : "search-icon d-none"}
                onClick={searchControl}
              >
                <i className="fa-solid fa-magnifying-glass" />
              </button>
              <button
                className={search ? "search-close d-inline" : "search-close "}
                onClick={searchControl}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="header__offcanvas">
              <button className="menu_icon" onClick={offCanvasControl}>
                <img src="/assets/imgs/icon/menu.png" alt="Menu Icon" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className={!search ? "search__form" : "search__form showed"}>
        <form action="#">
          <input type="text" name="s" placeholder="Search..." />
        </form>
      </div>
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
          <div className="offcanvas__menu">
            <nav className="offcanvas-navigation" id="offcanvas-navigation">
              <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/study-tips">Tips</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Progress</Link>
                  </li>
                  <li>
                    <Link to="/blog">Counsel</Link>
                  </li>
                  <li>
                    <Link to="/user-profile">User Profile</Link>
                  </li>
                </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Offcanvas area end */}
    </>
  );
};

export default HeaderOne;
