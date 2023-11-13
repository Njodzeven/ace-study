import React from "react";
import { Link } from "react-router-dom";

const TeamTwo = () => {
  return (
    <>
      {/* team  */}
      <section className="team__area-2">
        <div className="container">
          <div className="team__wrapper-2" data-aos="fade-up">
            <div className="service__sectiontitle text-center">
              <span>The team</span>
              <h2 className="title text-dark">
                Inspiring Creativity <br /> Delivering Results
              </h2>
            </div>
          </div>
          <div className="team__items-2">
            <div
              className="team__item-2"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="team__thumb-2">
                <div className="shine">
                  <Link to="/about">
                    <img src="assets/imgs/home-2/team-1.png" alt="thumb" />
                  </Link>
                </div>
                <ul className="team__social-2">
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
              <div className="team__content-2">
                <Link to="/about">
                  <h3 className="team__name">Ralph Edwards</h3>
                </Link>
                <p className="team__post">Merketing Department</p>
              </div>
            </div>
            <div
              className="team__item-2"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="team__thumb-2">
                <div className="shine">
                  <Link to="/about">
                    <img src="assets/imgs/home-2/team-2.png" alt="thumb" />
                  </Link>
                </div>
                <ul className="team__social-2">
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
              <div className="team__content-2">
                <Link to="/about">
                  <h3 className="team__name">Annette Black</h3>
                </Link>
                <p className="team__post">Development Department</p>
              </div>
            </div>
            <div
              className="team__item-2"
              data-aos="fade-up"
              data-aos-delay={900}
            >
              <div className="team__thumb-2">
                <div className="shine">
                  <Link to="/about">
                    <img src="assets/imgs/home-2/team-3.png" alt="thumb" />
                  </Link>
                </div>
                <ul className="team__social-2">
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
              <div className="team__content-2">
                <Link to="/about">
                  <h3 className="team__name">Savannah Nguyen</h3>
                </Link>
                <p className="team__post">Design Department</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /team  */}
    </>
  );
};

export default TeamTwo;
