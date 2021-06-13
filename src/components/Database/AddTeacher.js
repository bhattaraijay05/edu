import React, { useState, useEffect, createContext } from "react";
import { firebase, db } from "../Firebase/Firebase";
import TeachersTeamPage from "../BridgeCoursePage/TeachersTeamPage";
const itemss = createContext([]);

const AddTeacher = ({ itemss }) => {
  const [teachers, setTeachers] = useState([]);
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [specialization, setSpecialization] = useState("");

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
  const addItems = (event) => {
    //this will happen after clicking the button
    event.preventDefault();
    db.collection("teachers").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      name: name,
      picture: picture,
      specialization: specialization,
    });
    setName("");
    setPicture("");
    setSpecialization("");
  };

  return (
    <>
      <div className="container-fluid mt-5 pt-5 ">
        <form>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(event) => setName(event.target.value)}
            style={{ textAlign: " center", fontSize: 20 }}
            placeholder="Name of Teacher"
          />
          <input
            type="text"
            value={picture}
            className="form-control"
            onChange={(event) => setPicture(event.target.value)}
            style={{ textAlign: " center", fontSize: 20 }}
            placeholder="Picture"
          />
          <input
            type="text"
            value={specialization}
            className="form-control"
            onChange={(event) => setSpecialization(event.target.value)}
            style={{ textAlign: " center", fontSize: 20 }}
            placeholder="Specialization"
          />

          <button
            disabled={(!name, !picture, !specialization)}
            className="btn btn-primary"
            onClick={addItems}
            type="submit"
          >
            POST
          </button>
        </form>
      </div>
    </>
  );
};
export { itemss };

export default AddTeacher;
