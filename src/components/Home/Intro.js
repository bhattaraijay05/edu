import React, { Component } from "react";
import MDBParallaxWrapper from "../Parallax/MDBParallaxWrapper";
class Intro extends Component {
  render() {
    return (
      <>
        {/* <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sunt
          laboriosam omnis! Id, numquam inventore voluptates labore odit
          doloremque eum quod, excepturi vitae ipsa deserunt. Magnam facilis
          praesentium optio? Ipsam iusto dolores facilis placeat, ducimus hic in
          atque ex similique eveniet. Sed at quas nostrum suscipit magni est
          quos, non sint fuga sit nobis recusandae eligendi animi error commodi,
          eaque, nam odio asperiores aut repudiandae. Voluptatem consequuntur
          ullam expedita nesciunt, mollitia dicta quaerat temporibus ex quia,
          omnis est odit! Ut, labore aut? Maxime ipsa consectetur itaque
          provident similique, temporibus quibusdam, iusto placeat culpa
          voluptate, eum possimus. Aut accusamus tenetur sapiente!
        </h2> */}
        <MDBParallaxWrapper
          image="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(20).jpg"
          speed={0.2}
          height="30%"
          type="scroll-opacity"
          //   style={{ height: "30vh", width: "40%" }}
        >
          <h2
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            repellat repudiandae at rerum, repellendus illo cumque incidunt
            ipsam pariatur rem similique laboriosam ipsa atque aliquid alias
            nisi. Odit aliquid placeat dignissimos similique, ullam quaerat
            aliquam officia libero numquam laborum autem corporis tempora nulla
            est repellendus commodi vel culpa ducimus eveniet.
          </h2>
        </MDBParallaxWrapper>
      </>
    );
  }
}
export default Intro;
