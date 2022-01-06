import React from "react";
import web from "../src/images/E-learning.svg";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> </h1>
        <div className="container-fluid mb-5">
          <div className="row gy-6">
            <div className="col-10 mx-auto">
              <div className="col-md-3 col-10 mx-auto">
                <div class="card">
                  <img src={web} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
