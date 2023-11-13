import React from "react";

const NewsletterOne = () => {
  return (
    <>
      {/* Newsletter area start */}
      <section className="newsletter__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5">
              <div className="newsletter__left" data-aos="fade-right">
                <img src="assets/imgs/newsletter/1.png" alt="digibold" />
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7">
              <div
                className="newsletter__right pt-120 pb-120"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <h2 className="sec-subtitle">
                  Newsletter <span>Newsletter</span>
                </h2>
                <h3 className="sec-title">Want to Be a Member?</h3>
                <form action="">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  <button type="submit" className="submit btn-rollover">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter area end */}
    </>
  );
};

export default NewsletterOne;
