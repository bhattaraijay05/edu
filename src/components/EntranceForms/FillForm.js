import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { Link } from "react-router-dom";

const FillForm = () => {
  return (
    <MDBDropdown dropright>
      <MDBDropdownToggle caret color="transparent">
        Fill The Form
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>
          <Link to="/science">Science</Link>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <Link to="/management">Management</Link>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <Link to="/humanities">Humanities</Link>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default FillForm;
