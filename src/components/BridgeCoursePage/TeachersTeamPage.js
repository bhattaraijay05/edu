import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

const TeachersTeamPage = ({ name, picture, specialization }) => {
  return (
    <>
      <MDBCol md="4" style={{ padding: "30px" }}>
        <MDBCard>
          <MDBCardImage
            hover
            overlay="white-light"
            className="card-img-top"
            src={picture}
            alt="man"
          />

          <MDBCardBody cascade className="text-center">
            <MDBCardTitle className="card-title">
              <strong>{name}</strong>
            </MDBCardTitle>

            <p className="font-weight-bold blue-text">{specialization}</p>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{" "}
            </MDBCardText>

            <MDBCol md="12" className="d-flex justify-content-center">
              <MDBBtn rounded floating color="fb">
                <MDBIcon size="lg" fab icon="facebook-f"></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color="tw">
                <MDBIcon size="lg" fab icon="twitter"></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color="dribbble">
                <MDBIcon size="lg" fab icon="dribbble"></MDBIcon>
              </MDBBtn>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
};

export default TeachersTeamPage;
