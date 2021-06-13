import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { db } from "../Firebase/Firebase";
import { MDBContainer, MDBCarousel, MDBCarouselInner } from "mdbreact";
const CarouselPage = () => {
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
    <div style={{ backgroundColor: "black" }}>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            {colleges.map((college) => (
              <Carousel
                picture={college.picture}
                name={college.name}
                clgId={college.clgId}
              />
            ))}
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
};

export default CarouselPage;
