import React from "react";
import Common from "./Common";
import web from "../src/images/E-learning.svg";

const About = () => {
  var userDetails = localStorage.getItem("userDetail");
  const myDetails = JSON.parse(userDetails);
  console.log(myDetails);
  return (
    <div>
      <div className="Member__detail">
        <h3>
          <strong>Participents Details</strong>
        </h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Name</th>
              <th scope="col">Work</th>
              <th scope="col">Contact</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{myDetails.username}</td>
              <td>{myDetails.work}</td>
              <td>{myDetails.contact}</td>
              <td>{myDetails.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
