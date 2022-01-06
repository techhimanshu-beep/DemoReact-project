import React, { useState } from "react";

const Resister = () => {
  const [name, setName] = useState("");
  const [work, setWork] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandle = (e) => {
    e.preventDefault();

    const userDetails = {
      username: name,
      work: work,
      contact: contact,
      email: email,
    };

    localStorage.setItem("userDetail", JSON.stringify(userDetails));
  };

  return (
    <div className="bgcolor">
      <div className="my-5">
        <h1 className="text-center"> Resister yourself </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form method="get" id="form1">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Work
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={work}
                  onChange={(e) => {
                    setWork(e.target.value);
                  }}
                  placeholder="work"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  {" "}
                  Contact
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                  placeholder="Contact number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Important note(optional) onChange=
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </form>

            <button
              class="btn btn-primary"
              type="button"
              onClick={onSubmitHandle}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resister;
