import React, { useState } from "react";
import "./reviews.css";
import { data } from "./data.js";

const Reviews = () => {
  return (
    <section className="boxing">
      <header>
        <h1 className="header">Reviews</h1>
      </header>
      <div className="contentBox">
        <Content />
      </div>
    </section>
  );
};

const Content = () => {
  var [index, setIndex] = useState(0);

  const nextClickHandler = (id) => {
    if (index <= 3) {
      index += 1;
      setIndex(index);
    }
    if (index > 3) {
      index = 0;
      setIndex(index);
    }
  };
  const prevClickHandler = (id) => {
    if (index >= 0) {
      index -= 1;
      setIndex(index);
    }
    if (index < 0) {
      index = 3;
      setIndex(index);
    }
  };
  const surpriseHandler = () => {
    var random_no;
    while (true) {
      random_no = parseInt(Math.random() * 10);
      if (random_no >= 0 && random_no <= 3) {
        break;
      } else {
        continue;
      }
    }
    setIndex(random_no);
  };
  const { id, name, job, image, text } = data[index];

  return (
    <>
      <section className="contents" key={id}>
        <img src={image}></img>
        <h3>{name}</h3>
        <h2>{job}</h2>
        <p>{text}</p>
        <div className="controlBtn">
          <button type="button" onClick={prevClickHandler}>
            prev
          </button>
          <button type="button" onClick={nextClickHandler}>
            next
          </button>
        </div>
        <button type="button" onClick={surpriseHandler} className="surpriseBtn">
          Random
        </button>
      </section>
    </>
  );
};

export default Reviews;
