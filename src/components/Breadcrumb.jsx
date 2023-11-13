import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <>
      {/* Breadcrumb area start */}
      <section className="breadcrumb__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__inner">
                <div className="breadcrumb__left">
                  <h1 className="breadcrumb__title">{title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb area end */}
    </>
  );
};

export default Breadcrumb;
