import React, { useState, useEffect } from "react";
import TeachersTeamPage from "./TeachersTeamPage";
import { db } from "../Firebase/Firebase";
import { MDBRow, MDBCol, MDBCard } from "mdbreact";

const TeachersTeam = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    db.collection("teachers")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        setTeachers(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            picture: doc.data().picture,
            specialization: doc.data().specialization,
          }))
        );
      });
  }, []);
  return (
    <MDBRow style={{ margin: "30px" }}>
      {teachers.map((teacher) => (
        <TeachersTeamPage
          name={teacher.name}
          picture={teacher.picture}
          specialization={teacher.specialization}
        />
      ))}
    </MDBRow>
  );
};

export default TeachersTeam;
