import React from "react";
import { Link } from "react-router-dom";

const PricingOne = () => {
  return (
    <>
      {/* pricing area start */}
      <section className="pricing__area-5 pt-150">
        <div className="container">
          <div className="digibold-section-wrapper-5 text-center">
            <h2 className="section-subtitle-5 heading-animation">
              Our Pricing
            </h2>
            <h3 className="section-title-5 heading-animation">
              Designing with passion creating <br /> with precision
            </h3>
          </div>
          <div className="pricing__items-5">
            <div className="pricing__item-5">
              <div className="pricing__header-5 ">
                <h2 className="title">Stater</h2>
                <h3 className="title-2">
                  <span>$19</span>/month
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text hete uinn of <br /> the
                  designer printing.
                </p>
              </div>
              <div className="pricing__feature-5">
                <ul className="pricing__feature-list">
                  <li>Mistakes To Avoid</li>
                  <li>Your Startup</li>
                  <li>Knew About Fonts</li>
                  <li>Winning Metric for Your Startup</li>
                </ul>
              </div>
              <div className="pricing__btn-wrapper">
                <Link className="pricing__btn" to="/contact">
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="pricing__item-5">
              <div className="pricing__header-5">
                <h2 className="title">Ultimate</h2>
                <h3 className="title-2">
                  <span>$19</span>/month
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text hete uinn of <br /> the
                  designer printing.
                </p>
              </div>
              <div className="pricing__feature-5">
                <ul className="pricing__feature-list">
                  <li>Mistakes To Avoid</li>
                  <li>Your Startup</li>
                  <li>Knew About Fonts</li>
                  <li>Winning Metric for Your Startup</li>
                </ul>
              </div>
              <div className="pricing__btn-wrapper">
                <Link className="pricing__btn" to="/contact">
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="pricing__item-5">
              <div className="pricing__header-5">
                <h2 className="title">Premium</h2>
                <h3 className="title-2">
                  <span>$19</span>/month
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text hete uinn of <br /> the
                  designer printing.
                </p>
              </div>
              <div className="pricing__feature-5">
                <ul className="pricing__feature-list">
                  <li>Mistakes To Avoid</li>
                  <li>Your Startup</li>
                  <li>Knew About Fonts</li>
                  <li>Winning Metric for Your Startup</li>
                </ul>
              </div>
              <div className="pricing__btn-wrapper">
                <Link className="pricing__btn" to="/contact">
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* pricing area end */}
    </>
  );
};

export default PricingOne;
