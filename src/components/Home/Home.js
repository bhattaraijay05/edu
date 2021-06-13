import React from "react";
import CollegeList from "./CollegeList";
import Search from "./Search";
import CarouselPage from "../Navbar/CarouselPage";

const Home = () => {
  return (
    <>
      {/* <div
        style={{
          height: "30%",
          width: "80%",
          backgroundColor: "dodgerblue",
          display: "flex",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          dolorem qui! Quod placeat asperiores quia quasi expedita? Illum quo
          praesentium, dolores nisi repellendus dolorum nam ullam reprehenderit,
          alias consequuntur accusantium quibusdam reiciendis voluptates!
          Accusantium nostrum optio molestias eius quidem odit repellendus
          veniam fugit et, dolores a quibusdam consectetur odio quaerat in
          minima quo voluptas voluptate omnis reprehenderit? Consectetur, quas
          doloremque.
        </p>
      </div> */}
      <CarouselPage />
      <Search />
      <CollegeList />
    </>
  );
};

export default Home;
