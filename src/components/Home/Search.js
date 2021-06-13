import React from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const Search = () => {
  return (
    <>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <MDBCol style={{ fontSize: 30 }} className="mx-5">
          <MDBFormInline className="md-form">
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Search"
              aria-label="Search"
              style={{ fontSize: 30, width: "85%", alignItems: "center" }}
            />
            <button
              type="submit"
              style={{ border: "none", backgroundColor: "white" }}
            >
              <MDBIcon icon="search" />
            </button>
          </MDBFormInline>
        </MDBCol>
      </div>
    </>
  );
};

export default Search;
