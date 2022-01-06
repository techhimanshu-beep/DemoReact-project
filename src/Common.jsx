import React from "react";
import web from "../src/images/E-learning.svg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-centre">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  {props.name}
                  <strong className="brand-name"> Conference </strong>
                </h1>
                <h2 className="my-3">
                  We are here to organise a beautiful conference for you
                  <p> and your team </p>
                </h2>

                <div className="mt-3">
                  <a href="" className="btn-get-started">
                    {props.btname}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
