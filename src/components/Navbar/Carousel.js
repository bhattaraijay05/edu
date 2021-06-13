import React from "react";
import { Link } from "react-router-dom";

import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";
const Carousel = ({ name, picture, clgId }) => {
  return (
    <>
      <MDBCarouselItem itemId={clgId}>
        <MDBView>
          <img className="d-block w-100" src={picture} alt={name} />
          <MDBMask overlay="black-strong" />
        </MDBView>
        <MDBCarouselCaption>
          <h3 className="h3-responsive">{name}</h3>
          <p>{name}</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </>
  );
};

export default Carousel;
