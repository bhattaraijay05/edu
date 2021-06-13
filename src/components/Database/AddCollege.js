import React, { useState, useEffect, createContext } from "react";
import { firebase, db } from "../Firebase/Firebase";
import Carousel from "../Navbar/Carousel";
const itemss = createContext([]);

const AddCollege = ({ itemss }) => {
  const [colleges, setColleges] = useState([]);
  const [name, setName] = useState("");
  const [clgId, setClgId] = useState();
  const [picture, setPicture] = useState("");
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
  const addItems = (event) => {
    //this will happen after clicking the button
    event.preventDefault();
    db.collection("colleges").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      name: name,
      clgId: Number(clgId),
      picture: picture,
    });
    setName("");
    setPicture("");
    setClgId();
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
            placeholder="Name of College"
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
            value={clgId}
            className="form-control"
            onChange={(event) => setClgId(event.target.value)}
            style={{ textAlign: " center", fontSize: 20 }}
            placeholder="Colege ID"
          />

          <button
            disabled={(!name, !picture, !clgId)}
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

export default AddCollege;
