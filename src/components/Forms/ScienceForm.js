import React from "react";

const ScienceForm = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-12"></div>
        </div>
        <div className>
          <form>
            <div className="d-flex flex-column">
              <div className="main-content container">
                <h3 className="text-center" style={{ color: "#5f586b" }}>
                  <u>
                    <b>Registration/Scholarship Form (Grade XI-2020/21)</b>
                  </u>
                </h3>
                <div className="separator-breadcrumb border-top" />
                <div className="row eligibility-row">
                  <div className="d-flex justify-content-center">
                    <div
                      className="alert  alert-info  col-md-8  col-sm-12 info-elg-text"
                      style={{ color: "black" }}
                    >
                      <h6 style={{ color: "black" }} className="course-title">
                        {" "}
                        <strong>Eligibility to apply:</strong>
                      </h6>
                      <strong className="course-tag" style={{ color: "red" }}>
                        {" "}
                        ] Science
                      </strong>
                      : Minimum 2.40 GPA , D+ in English, Mathematics, Science
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card mb-4">
                      <div className="card-body info-box">
                        <div className="card-title mb-3 text-20 font-weight-bold heading-info">
                          Basic Information
                        </div>
                        <div className="row p-4">
                          <div className="form-group font-red col-md-4">
                            <label htmlFor="Name">Full Name</label>
                            <input
                              className="form-control form-control-sm"
                              data-val=""
                              data-val-maxlength="The field Full Name must be a string or array type with a maximum length of '50'."
                              data-val-maxlength-max={50}
                              data-val-required="The Full Name field is required."
                              id="Name"
                              maxLength={50}
                              name="Name"
                              placeholder="Full Name"
                              type="text"
                              // defaultValue
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="Name"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="DOB">Date of Birth(BS)</label>
                            <input
                              className=" form-control form-control-sm"
                              id="DOB"
                              name="DOB"
                              placeholder="YYYY-MM-DD"
                              type="text"
                              //   defaultValue
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="DOB"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="StdContactNo">Mobile No</label>
                            <input
                              className="form-control form-control-sm"
                              data-val=""
                              data-val-length="The Phone Number cannot exceed 10 characters. "
                              data-val-length-max={10}
                              data-val-required="The Mobile No field is required."
                              id="StdContactNo"
                              maxLength={10}
                              minLength={10}
                              name="StdContactNo"
                              placeholder="98xxxxxxxx"
                              type="number"
                              //   defaultValue
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="StdContactNo"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="Photo">Photo</label>
                            <input
                              type="file"
                              className="form-control form-control-sm"
                              accept="image/x-png,image/jpg,image/jpeg"
                              name="image"
                              id="image"
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="District">District</label>
                            <select
                              className="form-control form-control-sm dist"
                              data-val=""
                              data-val-required="The District field is required."
                              id="District"
                              name="District"
                            >
                              <option value>Select-District</option>
                            </select>
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="District"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="FatherName">Father's Name</label>
                            <input
                              className="form-control form-control-sm"
                              data-val=""
                              data-val-maxlength="The field Father's Name must be a string or array type with a maximum length of '50'."
                              data-val-maxlength-max={50}
                              data-val-required="The Father's Name field is required."
                              id="FatherName"
                              maxLength={50}
                              name="FatherName"
                              placeholder="Father's Name"
                              type="text"
                              //   defaultValue
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="FatherName"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="FatherMobileNumber">
                              Father's Mobile No
                            </label>
                            <input
                              className="form-control form-control-sm"
                              data-val=""
                              data-val-length="The Phone Number cannot exceed 10 characters. "
                              data-val-length-max={10}
                              id="FatherMobileNumber"
                              maxLength={10}
                              minLength={10}
                              name="FatherMobileNumber"
                              placeholder="98xxxxxxxx"
                              type="number"
                              //   defaultValue
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="FatherMobileNumber"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="MotherName">Mother's Name</label>
                            <input
                              className="form-control form-control-sm"
                              id="MotherName"
                              name="MotherName"
                              placeholder="Mother's Name"
                              type="text"
                              //   defaultValue
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="MotherName"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="MotherMobileNumber">
                              Mother's Mobile No
                            </label>
                            <input
                              className="form-control form-control-sm"
                              data-val=""
                              data-val-length="The Phone Number cannot exceed 10 characters. "
                              data-val-length-max={10}
                              id="MotherMobileNumber"
                              maxLength={10}
                              minLength={10}
                              name="MotherMobileNumber"
                              placeholder="98xxxxxxxx"
                              type="number"
                              //   defaultValue
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="MotherMobileNumber"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="ParentsEmail">Parent's Email</label>
                            <input
                              className="form-control form-control-sm"
                              id="ParentsEmail"
                              name="ParentsEmail"
                              placeholder="example@email.com"
                              type="email"
                              //   defaultValue
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="ParentsEmail"
                              data-valmsg-replace=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="card-body info-box">
                        <div className="card-title mb-3 text-20 font-weight-bold heading-info">
                          Academic Details (Grade X)
                        </div>
                        <div className="col-md-12 row p-4">
                          <div className="form-group col-md-4">
                            <label htmlFor="PreviousSchool">School Name</label>
                            <input
                              className="form-control form-control-sm"
                              data-val=""
                              data-val-required="The School Name field is required."
                              id="PreviousSchool"
                              name="PreviousSchool"
                              placeholder="School Name"
                              type="text"
                              //   defaultValue
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="PreviousSchool"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="SchoolType">School Type</label>
                            <select
                              name="SchoolType"
                              className="form-control form-control-sm"
                              id="SchoolType"
                            >
                              <option value="Government">Government</option>
                              <option value="Community">Community</option>
                              <option value="Private">Private</option>
                            </select>
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="SchoolType"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md">
                            <label htmlFor="SchoolDistrict">
                              School District
                            </label>
                            <select
                              className="form-control form-control-sm dist"
                              data-val=""
                              data-val-required="The School District field is required."
                              id="SchoolDistrict"
                              name="SchoolDistrict"
                            >
                              <option value>Select-District</option>
                            </select>
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="SchoolDistrict"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="GradeSheet">SEE GRADE SHEET </label>
                            <input
                              type="file"
                              name="GradeSheet"
                              id="GradeSheet"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="CumulativeGPA">SEE GPA</label>
                            <input
                              className="form-control form-control-sm input-sm"
                              data-val=""
                              data-val-number="The field SEE GPA must be a number."
                              data-val-required="The SEE GPA field is required."
                              id="CumulativeGPA"
                              max={4}
                              min={0}
                              name="CumulativeGPA"
                              step="0.01"
                              type="number"
                              //   defaultValue
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="CumulativeGPA"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-8">
                            <label htmlFor="SendupPosition">
                              Position in Send-up
                            </label>
                            <select
                              name="SendupPosition"
                              className="form-control form-control-sm"
                              id="SendupPosition"
                            >
                              <option value>--Select Your Position--</option>
                              <option value="Topper">1st Topper</option>
                              <option value="SecondToper">2nd Topper</option>
                              <option value="ThirdTopper">3rd Topper</option>
                              <option value="Others">Others</option>
                            </select>
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="SendupPosition"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="Faculty">
                              Interested Course to Study(+2)
                            </label>
                            <select
                              name="Faculty"
                              className="form-control form-control-sm"
                              id="Faculty"
                              data-val=""
                              data-val-required="The Faculty field is required."
                            >
                              <option value>Select Course First</option>
                              <option value="science">Science </option>
                              <option value="management">Management </option>
                              <option value="humanities">
                                Humanities(Law)
                              </option>
                            </select>
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="Faculty"
                              data-valmsg-replace=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="card-body info-box">
                        <div className="card-title mb-3 text-20 font-weight-bold heading-info">
                          For Online Class (If Necessary)
                        </div>
                        <div className="row p-4">
                          <div className="form-group col-md-4">
                            <label htmlFor="DeviceAvailable">
                              Device Available for Online Class
                            </label>
                            <select
                              name="DeviceAvailable"
                              className="form-control form-control-sm"
                              id="DeviceAvailable"
                              data-val=""
                              data-val-required="Device Available field is required."
                            >
                              <option value>Select Your Device</option>
                              <option value="Latop">Laptop</option>
                              <option value="Tablet">Tablet</option>
                              <option value="Desktop">Desktop</option>
                              <option value="Smartphone">Smartphone</option>
                            </select>
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="DeviceAvailable"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="InternetGateway">
                              Internet Gateway
                            </label>
                            <select
                              name="InternetGateway"
                              className="form-control form-control-sm"
                              id="InternetGateway"
                            >
                              <option value="wifi">Wifi</option>
                              <option value="4g3g">4G/3G</option>
                              <option value="LimitedNetwork">
                                Limited Network
                              </option>
                            </select>
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="InternetGateway"
                              data-valmsg-replace=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="card-body info-box mt-2">
                        <div className="card-title mb-3 text-20 font-weight-bold heading-info">
                          Scholarship Information
                        </div>
                        <div className="col-md-12 row p-4">
                          <div className="form-group col-md-6">
                            <label>
                              Do you want to apply for Scholarships to study +2?
                            </label>
                            <label htmlFor="Scolarship" className="ml-3">
                              <input
                                id="Scolarship"
                                name="Scolarship"
                                type="radio"
                                // defaultValue="True"
                              />
                              <span> Yes</span>
                            </label>
                            <input
                              id="Scolarship"
                              name="Scolarship"
                              type="radio"
                              //   defaultValue="False"
                            />
                            <label className>
                              <span>No</span>
                            </label>
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="Scolarship"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md-4 schcat">
                            <label>
                              Category of Scolarships you want to apply for
                            </label>
                            <select
                              name="ScolarshipCategory"
                              className="form-control form-control-sm"
                              id="ScolarshipCategory"
                            >
                              <option value>--Select--</option>
                              <option value="Merit">Merit Based</option>
                              <option value="Need">Need Based</option>
                              <option value="Sports">Sports</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="card-body info-box">
                        <div className="card-title mb-3 text-20 font-weight-bold heading-info">
                          Interest On Extra Activities
                        </div>
                        <div className="col-md-12 mt-4 p-4">
                          <div className="form-group">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="Sports"
                                name="Sports"
                                // defaultValue=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Sports"
                              >
                                Sports
                              </label>
                            </div>
                            <div className="col-md-6">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="ScienceExperiment"
                                // defaultValue=""
                                name="ScienceExperiment"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="ScienceExperiment"
                              >
                                Science Experiment and Exhibition
                              </label>
                            </div>
                            <div className="col-md-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="Literature"
                                // defaultValue=""
                                name="Literature"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Poem"
                              >
                                Literature
                              </label>
                            </div>
                            <div className="col-md-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="OthersCheck"
                                // defaultValue=""
                                name="OthersCheck"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Others"
                              >
                                Others
                              </label>
                            </div>
                            <div
                              className="col-md-4 otherinput"
                              style={{ display: "none" }}
                            >
                              <input
                                type="text"
                                className="form-control form-control-sm-inline"
                                name="others"
                                id="others"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body info-box">
                        <div className="card-title mb-3 text-20 font-weight-bold heading-info">
                          Login Information
                        </div>
                        <div className="row p-4">
                          <div className="form-group col-md">
                            <label htmlFor="EmailAddress">Email Address</label>{" "}
                            <span
                              style={{ color: "red" }}
                              className="hidden-details redStar"
                            >
                              {" "}
                              *
                            </span>
                            <input
                              className="form-control form-control-sm"
                              data-val=""
                              data-val-email="The Email Address field is not a valid e-mail address."
                              data-val-required="The Email Address field is required."
                              id="EmailAddress"
                              name="EmailAddress"
                              placeholder="Email Address"
                              type="email"
                              //   defaultValue
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="EmailAddress"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md">
                            <label htmlFor="ConfirmEmailAddress">
                              Confirm Email Address
                            </label>{" "}
                            <span
                              style={{ color: "red" }}
                              className="hidden-details redStar"
                            >
                              {" "}
                              *
                            </span>
                            <input
                              className="form-control form-control-sm"
                              data-val=""
                              data-val-email="The Confirm Email Address field is not a valid e-mail address."
                              data-val-equalto="The email address and confirm email address not matched."
                              data-val-equalto-other="*.EmailAddress"
                              data-val-required="The Confirm Email Address field is required."
                              id="ConfirmEmailAddress"
                              name="ConfirmEmailAddress"
                              placeholder="Confirm Email Address"
                              type="email"
                              //   defaultValue
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="ConfirmEmailAddress"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md">
                            <label htmlFor="Password">Create Password</label>{" "}
                            <span
                              style={{ color: "red" }}
                              className="hidden-details redStar"
                            >
                              {" "}
                              *
                            </span>
                            <input
                              className="form-control form-control-sm"
                              data-val=""
                              data-val-length="The Create Password must be at least 5 characters long."
                              data-val-length-max={100}
                              data-val-length-min={5}
                              data-val-required="The Create Password field is required."
                              id="Password"
                              maxLength={100}
                              name="Password"
                              placeholder="Password"
                              type="password"
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="Password"
                              data-valmsg-replace=""
                            />
                          </div>
                          <div className="form-group col-md">
                            <label htmlFor="ConfirmPassword">
                              Confirm Password
                            </label>{" "}
                            <span
                              style={{ color: "red" }}
                              className="hidden-details redStar"
                            >
                              {" "}
                              *
                            </span>
                            <input
                              className="form-control form-control-sm"
                              data-val=""
                              data-val-equalto="The  password and confirm password not matched."
                              data-val-equalto-other="*.Password"
                              data-val-required="The Confirm Password field is required."
                              id="ConfirmPassword"
                              name="ConfirmPassword"
                              placeholder="Confirm Password"
                              type="password"
                            />
                            <span
                              className="field-validation-valid"
                              data-valmsg-for="ConfirmPassword"
                              data-valmsg-replace=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 p-4">
                        <div className="form-group">
                          <label className="checkbox checkbox-outline-primary">
                            <input
                              data-val=""
                              data-val-range="You must agree with terms and conditions!"
                              data-val-range-max="True"
                              data-val-range-min="True"
                              data-val-required="The TermsAndConditions field is required."
                              id="TermsAndConditions"
                              name="TermsAndConditions"
                              type="checkbox"
                              //   defaultValue=""
                            />
                            I have read, understood and agreed to be bound by
                            the Terms and Conditions of Capital College And
                            Research Center. I hereby declare that the
                            information supplied herein is and correct.
                            <span className="checkmark" />
                          </label>
                          <span
                            className="field-validation-valid"
                            data-valmsg-for="TermsAndConditions"
                            data-valmsg-replace=""
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn btn-primary btn-sm"
                          >
                            Submit Form
                          </button>
                          <a href="/" className="btn btn-danger btn-sm">
                            Cancel Form
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input
              name="TermsAndConditions"
              type="hidden"
              //   defaultValue="false"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScienceForm;
