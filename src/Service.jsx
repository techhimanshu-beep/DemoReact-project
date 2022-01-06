import React from "react";
import web from "./images/informative.jpg";

const Service = () => {
  return (
    <div className="backgroung">
      <div className="my-5">
        <h1 className="text-center">
          {" "}
          <strong>Our Services</strong>{" "}
        </h1>
        <figure class="figure">
          <img src={web} class="figure-img img-fluid rounded" alt="img" />
          <figcaption class="figure-caption"></figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Service;
