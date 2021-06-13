import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="background">
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>👀</h1>
          </div>
          <h2>404 - Page not found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link to="/">home page</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
