import React, { useState } from "react";
import "./review.css";
import { Data } from "./data.js";

const Reviews_Slider = () => {
  return (
    <section className="revBox">
      <header className="revHeading">Reviews 2.0 (Slider)</header>
      <Content />
    </section>
  );
};

const Content = () => {
  const [index, setindex] = useState(0);
  const leftClickHandler = () => {
    if (index === 0) {
      setindex(3);
    } else {
      setindex(index - 1);
    }
  };
  const rightClickHandler = () => {
    if (index === 3) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  };
  const { id, name, job, image, text } = Data[index];
  return (
    <>
      <section className="contentBox" key={id}>
        <img src={image}></img>
        <div>
          <button type="button" onClick={leftClickHandler} className="revBtn">
            {"<"}
          </button>
          <h4>{name}</h4>
          <button type="button" onClick={rightClickHandler} className="revBtn">
            {">"}
          </button>
        </div>
        <h5>{job}</h5>
        <p>{text}</p>
      </section>
    </>
  );
};
export default Reviews_Slider;
