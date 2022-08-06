import React from "react";

function Form() {
  return (
    <div>
      <h1 className="App mt-5 mb-5 text-primary">Contact Form</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <form class="row g-3 needs-validation" novalidate>
              <div class="col-md-4">
                <label for="validationCustom01" class="form-label">
                  First name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  value="Mark"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom02" class="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustomUsername" class="form-label">
                  Username
                </label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom04" class="form-label">
                  State
                </label>
                <select class="form-select" id="validationCustom04" required>
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option>...</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">Please provide a valid zip.</div>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
            {/* <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Select Courses</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Gender</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Default radio
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Default checked radio
                </label>
              </div>
            </div>
            <div class="mb-3">
             
              <label for="formFile" class="form-label">
                Uplaod Image
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3">
                Submit
              </button>
            </div> */}
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}
export default Form;
