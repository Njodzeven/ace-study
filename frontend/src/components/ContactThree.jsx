import React from "react";

const ContactThree = () => {
  return (
    <>
      {/* Contact area start */}
      <section className="contact__area-4 pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div data-aos="fade-right" data-aos-delay={200}>
                <div className="contact__form-4">
                  <form action="#">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      required=""
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail*"
                      required=""
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="subject*"
                      required=""
                    />
                    <textarea
                      name="comments"
                      placeholder="Comment*"
                      required=""
                      defaultValue={""}
                    />
                    <button className="submit" type="submit">
                      Submit <i className="fa-solid fa-arrow-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__content-4">
                <div className="call" data-aos="fade-up" data-aos-delay={200}>
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                  <p>
                    Call now
                    <a href="(808)555-1111">(808) 555- 1111</a>
                  </p>
                </div>
                <div
                  className="contact__img-4"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="img-animation">
                    <img
                      src="assets/imgs/contact/4/1.jpg"
                      alt="digibold"
                      data-speed="auto"
                    />
                  </div>
                  <div className="satisfy-clients">
                    <img src="assets/imgs/contact/4/people.png" alt="icon" />
                    <h3 className="title">5,000+</h3>
                    <p>Satisfied Clients</p>
                  </div>
                  <img
                    src="assets/imgs/contact/4/shape.png"
                    alt="shape"
                    className="shpae"
                  />
                  <img
                    src="assets/imgs/contact/4/shape-2.png"
                    alt="shape"
                    className="shpae-2"
                  />
                  <img
                    src="assets/imgs/contact/4/shape-3.png"
                    alt="shape"
                    className="shpae-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shadow">creativity</div>
      </section>
      {/* Contact area end */}
    </>
  );
};

export default ContactThree;
