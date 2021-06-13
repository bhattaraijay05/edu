import React, { useRef, useEffect } from "react";

const FileInput = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        alignItems: "center",
        margin: "auto",
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        alignContent: "center",
      }}
    >
      <input type="file" onChange={inputEl} style={{ display: "none" }} />
      <button className="btn btn-outline-danger">Add Post</button>
      <button className="btn btn-primary" onClick={() => onButtonClick}>
        Submit
      </button>
    </div>
  );
};

export default FileInput;
