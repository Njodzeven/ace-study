import React from "react";
import { Link } from "react-router-dom";

const GalleryOne = () => {
  return (
    <>
      {/* gallary  */}
      <section className="gallary__area-2">
        <div className="gallary__wrapper-2">
          <div className="gallary__item-2">
            <div className="counter__content-2 p-0">
              <div className="service__sectiontitle" data-aos="fade-up">
                <span>Our Gallery</span>
                <h2 className="title">
                  Innovative <br /> Design Seamless <br /> Functionality
                </h2>
                <p className="gallarydis">
                  There are many variations of passages of Lorem this Ipsum
                  available ut the agency create a website that is both visually
                  appealing is our majority have suffered alteration in sme form
                </p>
              </div>
              <ul
                className="nav nav-pills gallary__buttons-2"
                id="pills-tab"
                role="tablist"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Show All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Information
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    About us
                  </button>
                </li>
              </ul>
              <div
                className="about__btnwrapper-2"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <Link className="about__arrowup" to="/project.ht">
                  <img
                    src="assets/imgs/home-2/arrow-lg-down.png"
                    alt="arrowup"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="gallary__itemright-2"
            data-aos="fade-up"
            data-aos-delay={900}
          >
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="gallary__items">
                  <Link to="/project-details">
                    <img src="assets/imgs/home-2/gallary-1.jpg" alt="g" />
                  </Link>
                  <Link to="/project-details">
                    <img src="assets/imgs/home-2/gallary-2.jpg" alt="g" />
                  </Link>
                  <Link to="/project-details">
                    <img src="assets/imgs/home-2/gallary-3.jpg" alt="g" />
                  </Link>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="gallary__items">
                  <Link to="/project-details">
                    <img src="assets/imgs/home-2/gallary-1.jpg" alt="g" />
                  </Link>
                  <Link to="/project-details">
                    <img src="assets/imgs/home-2/gallary-2.jpg" alt="g" />
                  </Link>
                  <Link to="/project-details">
                    <img src="assets/imgs/home-2/gallary-3.jpg" alt="g" />
                  </Link>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="gallary__items">
                  <Link to="/project-details">
                    <img src="assets/imgs/home-2/gallary-1.jpg" alt="g" />
                  </Link>
                  <Link to="/project-details">
                    <img src="assets/imgs/home-2/gallary-2.jpg" alt="g" />
                  </Link>
                  <Link to="/project-details">
                    <img src="assets/imgs/home-2/gallary-3.jpg" alt="g" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /gallary  */}
    </>
  );
};

export default GalleryOne;
