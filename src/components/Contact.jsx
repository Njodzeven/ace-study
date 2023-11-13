import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* contact */}
      <section className="contact__area-6 pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact__item">
                    <i className="fa-solid fa-location-dot" />
                    <h4 className="title">Location</h4>
                    <p>Dhaka 102, utl 1216, road 45 house of street</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact__item">
                    <i className="fa-solid fa-phone" />
                    <h4 className="title">Call us</h4>
                    <p>
                      (239) 555-0108 <br />
                      (907) 555-0101
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact__item">
                    <i className="fa-solid fa-envelope" />
                    <h4 className="title">Email</h4>
                    <Link to="mailto:danghoang87hl@gmail.com">
                      danghoang87hl@gmail.com
                    </Link>
                    <Link to="mailto:trungkienspktnd@gamail.com">
                      trungkienspktnd@gamail.com
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact__item">
                    <i className="fa-solid fa-share" />
                    <h4 className="title">Social Media</h4>
                    <p>
                      Facebook/Bold project <br />
                      Instagram/Bold_Project
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <iframe
                title="digibold"
                className="w-100"
                height={500}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477055202!2d-74.11976321327155!3d40.69740344214894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1612427122501!5m2!1sen!2sbd"
              />
            </div>
          </div>
          <div className="blog__form">
            <span className="blog__form-title">Leave a reply</span>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="user_name"
                    id="Name"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="user_email"
                    id="E-mail"
                    placeholder="E-mail"
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    name="msg"
                    id="msg"
                    placeholder="Comment"
                    defaultValue={""}
                  />
                </div>
                <div className="contact__submitwrap">
                  <button
                    className="contact__submit btn-rollover"
                    type="submit"
                  >
                    Send now <i className="fa-solid fa-arrow-right" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* /contact */}
    </>
  );
};

export default Contact;
