import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const [text, setText] = useState("");

  const handleOnClick = (event) => {
        setText(event.target.value)
  }

  return (
    <div>
      {/* <h4>{props.heading}</h4> */}
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Enter Your Text Here
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange = {handleOnClick}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button
        type="button"
        id="button1"
        onClick={handleUpClick}
        className="btn btn-primary my-2"
      >
        Convert to UpperCase
      </button>
    </div>
  );
}
