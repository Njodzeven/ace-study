import React from "react";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      {/* Footer area start */}
      <footer className="footer__area">
        <div className="footer__widgets">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div className="footer__logo">
                  <img
                    src="assets/imgs/logo/logo-light.png"
                    alt="Footer Logo"
                  />
                  <p>
                    Conditions Terms of Use Ours feturesin Services ew Guests
                    LisitThe Team List Guests LisitThe Team List
                  </p>
                  <Link className="db-btn-arrow" to="/about">
                    Sign Up Now!! <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-12">
                <div className="footer__btm">
                  <div className="footer__copyright">
                    <p>© Ace Study 2023 | All Rights Reserved</p>
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

export default FooterOne;
