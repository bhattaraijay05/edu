import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import DatePicker from "../DatePicker/DatePicker";
import Gender from "../DatePicker/Gender";
const Forms = () => {
  const [picture, setPicture] = useState(
    "https://source.unsplash.com/1600x900/?nature,water"
  );

  return (
    <div
      style={{
        backgroundColor: "red",
        margin: "auto",
      }}
    >
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <MDBCard>
                <MDBCardBody>
                  <form>
                    <p className="h4 text-center py-4">Sign up</p>
                    <div className="grey-text">
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <div style={{ flex: 0.8 }}>
                          <MDBInput
                            label="Your name"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                          />
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          flex: 0.2,
                        }}
                      >
                        <img
                          style={{
                            width: "100px",
                            height: "100px",
                          }}
                          src={picture}
                          alt=""
                        />

                        <div
                          class="input-group"
                          style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <input
                            style={{ border: "none" }}
                            type="file"
                            id="img"
                            name="img"
                            accept="image/*"
                          />
                        </div>
                      </div>

                      <DatePicker />

                      <Gender />

                      <MDBInput
                        label="Your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Your Phone Number"
                        icon="phone"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />

                      <MDBInput
                        label="Address"
                        icon="map-marker-alt"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Gurdain's Name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Gurdain's Phone Number"
                        icon="phone"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="cyan" type="submit">
                        Submit
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Forms;
