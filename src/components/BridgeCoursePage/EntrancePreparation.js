import React from "react";
import { Link } from "react-router-dom";

const EntrancePreparation = () => {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <Link to="/teachers">
        <button className="btn btn-primary">Teacher Team</button>
      </Link>

      <Link to="/addteachers">
        <button className="btn btn-primary">Add Teacher</button>
      </Link>

      <Link to="/resources">
        <button className="btn btn-primary">Resources</button>
      </Link>

      <Link to="/key-dates">
        <button className="btn btn-primary">Key Dates</button>
      </Link>

      <Link to="/forms">
        <button className="btn btn-primary">Form Section</button>
      </Link>
    </div>
  );
};

export default EntrancePreparation;
