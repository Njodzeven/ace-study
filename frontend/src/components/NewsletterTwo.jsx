import React from "react";

const NewsletterTwo = () => {
  return (
    <>
      {/* news letter area start */}
      <section className="newsletter__area-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="newsletter__title-5 heading-animation">
                Subscribe for <br /> Offers and News
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="newsletter__form-wrapper-5">
                <form action="#">
                  <input type="text" placeholder="Enter Your Email" /> <br />
                  <button>Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* news letter area end */}
    </>
  );
};

export default NewsletterTwo;
