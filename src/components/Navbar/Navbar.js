import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="container-fluid" style={{ paddingBottom: "58px" }}>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark black  scrolling-navbar  p-0">
        <Link class="navbar-brand" to="/">
          <img
            style={{
              width: "125px",
              height: "50px",
              marginLeft: "60px",
              padding: 0,
            }}
            src={Logo}
            alt=""
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto" style={{ marginRight: 20 }}>
            <li
              class="nav-item "
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Link class="nav-link" to="/carrerguidence">
                Career Guidence
              </Link>
            </li>

            <li
              class="nav-item "
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Link class="nav-link" to="/entrancepreparation">
                Entrance Preparation
              </Link>
            </li>

            <li
              class="nav-item"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Link class="nav-link" to="/join">
                Join
              </Link>
            </li>

            <li
              class="nav-item"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Link class="nav-link" to="/wishlist">
                Favourite
                <span className="badge danger-color">{basket?.length}</span>
              </Link>
            </li>

            <li
              class="nav-item"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Link class="nav-link" to="/notices">
                Notice
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
