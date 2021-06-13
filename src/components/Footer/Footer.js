import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MDBFooter
      color="unique-color-dark"
      className="page-footer font-small pt-0"
    >
      <div style={{ backgroundColor: "#6351ce" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol
              md="6"
              lg="5"
              className="text-center text-md-left mb-4 mb-md-0"
            >
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a
                href="https://www.facebook.com/edu.directt/"
                className="fb-ic ml-4"
                target="_blank"
              >
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic ml-4">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a
                className="ins-ic ml-4"
                href="https://www.instagram.com/edudirectt/"
                target="_blank"
              >
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Edu Direct</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>Here you can take online tests, apply for colleges.</p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <Link to="#!">Your Account</Link>
            </p>
            <p>
              <Link to="/carrerguidence">Career Guidence</Link>
            </p>
            <p>
              <Link to="/notices">Notices</Link>
            </p>
            <p>
              <Link to="#!">Help</Link>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <i className="fa fa-home mr-3" /> Kathmandu, Nepal
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> edudirectt@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 977 98 98 98 98 98
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 444 444 44
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://edu-direct.web.app" target="_blank">
            {" "}
            Edu Direct{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
