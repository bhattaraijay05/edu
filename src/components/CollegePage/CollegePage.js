import React, { useState } from "react";
import FillForm from "../EntranceForms/FillForm";
import { useStateValue } from "../StateProvider/StateProvider";

const CollegePage = ({ slug }) => {
  const [{ basket }, dispatch] = useStateValue();
  const [buttonType, setButtonType] = useState(false);
  const [buttonText, setButtonText] = useState("Add To MyList");
  const [btnColor, setBtnColor] = useState("primary");

  const addtobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
    });
    setButtonType(true);
    setButtonText("In List");
    setBtnColor("success");
  };
  return (
    <div>
      <section id="productDetails" className="pb-5">
        {/* News card */}
        <div className="card mt-5 hoverable">
          <div className="row mt-5">
            <div className="col-lg-6">
              {/* Carousel Wrapper */}
              <div
                id="carousel-thumb"
                className="carousel slide carousel-fade carousel-thumbnails"
                data-ride="carousel"
              >
                {/* Slides */}
                <div
                  className="carousel-inner text-center text-md-left"
                  role="listbox"
                >
                  <div className="carousel-item active">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/17.jpg"
                      alt="First slide"
                      className="img-fluid"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/18.jpg"
                      alt="Second slide"
                      className="img-fluid"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/19.jpg"
                      alt="Third slide"
                      className="img-fluid"
                    />
                  </div>
                </div>
                {/* Slides */}
                {/* Thumbnails */}
                <a
                  className="carousel-control-prev"
                  href="#carousel-thumb"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-thumb"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
                {/* Thumbnails */}
              </div>
              {/* Carousel Wrapper */}
            </div>
            <div className="col-lg-5 mr-3 text-center text-md-left">
              <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                <strong>College 1</strong>
              </h2>
              <span className="badge badge-danger product mb-4 ml-xl-0 ml-4">
                bestcollege
              </span>

              {/* Accordion wrapper */}
              <div
                className="accordion md-accordion"
                id="accordionEx"
                role="tablist"
                aria-multiselectable="true"
              >
                {/* Accordion card */}
                <div className="card">
                  {/* Card header */}
                  <div className="card-header" role="tab" id="headingOne1">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseOne1"
                      aria-expanded="true"
                      aria-controls="collapseOne1"
                    >
                      <h5 className="mb-0">
                        Description
                        <i className="fas fa-angle-down rotate-icon" />
                      </h5>
                    </a>
                  </div>
                  {/* Card body */}
                  <div
                    id="collapseOne1"
                    className="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingOne1"
                    data-parent="#accordionEx"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </div>
                  </div>
                </div>
                {/* Accordion card */}
                {/* Accordion card */}
                <div className="card">
                  {/* Card header */}
                  <div className="card-header" role="tab" id="headingTwo2">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseTwo2"
                      aria-expanded="false"
                      aria-controls="collapseTwo2"
                    >
                      <h5 className="mb-0">
                        Details
                        <i className="fas fa-angle-down rotate-icon" />
                      </h5>
                    </a>
                  </div>
                  {/* Card body */}
                  <div
                    id="collapseTwo2"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo2"
                    data-parent="#accordionEx"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </div>
                  </div>
                </div>
                {/* Accordion card */}
                {/* Accordion card */}
                <div className="card">
                  {/* Card header */}
                  <div className="card-header" role="tab" id="headingThree3">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseThree3"
                      aria-expanded="false"
                      aria-controls="collapseThree3"
                    >
                      <h5 className="mb-0">
                        Entrance
                        <i className="fas fa-angle-down rotate-icon" />
                      </h5>
                    </a>
                  </div>
                  {/* Card body */}
                  <div
                    id="collapseThree3"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree3"
                    data-parent="#accordionEx"
                  >
                    <div className="card-body">
                      {/* Date */}
                      <h5>Important Dates</h5>

                      {/* Fill the form */}
                      <h5>
                        <FillForm />
                      </h5>

                      {/* Take the exam */}
                      <h5>Take the exam</h5>
                    </div>
                  </div>
                </div>
                {/* Accordion card */}
              </div>
              {/* Accordion wrapper */}
              {/* Add to Cart */}
              <section className="color">
                <div className="mt-5">
                  <div className="row mt-3 mb-4">
                    <div className="col-md-12 text-center text-md-left text-md-right">
                      <button
                        className={`btn btn-${btnColor} m-2 p-2`}
                        onClick={addtobasket}
                        disabled={buttonType}
                      >
                        {buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              {/* Add to Cart */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegePage;
