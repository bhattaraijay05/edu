import React, { useState, useEffect } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
} from "mdbreact";
import { useStateValue } from "../StateProvider/StateProvider";
import { Link } from "react-router-dom";
import { db } from "../Firebase/Firebase";

const CollegeList = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [buttonType, setButtonType] = useState(false);
  const [buttonText, setButtonText] = useState("Add To MyList");
  const [collegeName, setCollegeName] = useState("college1");

  const [btnColor, setBtnColor] = useState("primary");
  const addtobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
    });
    setButtonType(true);
    setButtonText("In List");
    setBtnColor("success");
  };

  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    db.collection("colleges")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        setColleges(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            clgId: doc.data().clgId,
            picture: doc.data().picture,
          }))
        );
      });
  }, []);
  return (
    <>
      <MDBCard className="my-1 px-5 pb-5">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            blanditiis.
          </h2>
          <MDBRow>
            {colleges.map((college) => (
              <>
                <MDBCol lg="5" style={{ paddingBottom: "100px" }}>
                  <MDBView
                    className="rounded z-depth-2 mb-lg-0 mb-4"
                    hover
                    waves
                  >
                    <img className="img-fluid" src={college.picture} alt="" />
                    <a href="#!">
                      <MDBMask overlay="white-slight" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol lg="7">
                  <a href="#!" className="red-text">
                    <h6 className="font-weight-bold mb-3">
                      <MDBIcon icon="school" className="pr-2" />
                      Best Rated College
                    </h6>
                  </a>
                  <h3 className="font-weight-bold mb-3 p-0">
                    <Link to={`/college/${collegeName}`}>
                      <strong>{college.name}</strong>
                    </Link>
                  </h3>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus et aut officiis debitis.
                  </p>
                  <p>
                    by
                    <a href="#!">
                      <strong>Carine Fox</strong>
                    </a>
                    , 19/08/2018
                  </p>
                  {/* <MDBBtn color="success" size="md" className="waves-light ">
              Add to List */}
                  <button
                    className={`btn btn-${btnColor} m-2 p-2`}
                    onClick={addtobasket}
                    disabled={buttonType}
                  >
                    {buttonText}
                  </button>
                  {/* </MDBBtn> */}
                </MDBCol>
              </>
            ))}
          </MDBRow>
          <hr className="my-5" />
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default CollegeList;
