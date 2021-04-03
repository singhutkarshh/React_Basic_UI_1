import React, { useState } from "react";
import "./experience.css";
import { Data } from "./data.js";
const Experience = () => {
  const [data, setData] = useState(Data[0]);
  const { id, title, job, date, desc1, desc2, desc3, font } = data;

  const clickHandler0 = () => {
    setData(Data[0]);
  };
  const clickHandler1 = () => {
    setData(Data[1]);
  };
  const clickHandler2 = () => {
    setData(Data[2]);
  };
  return (
    <>
      <header className="expheading">
        <h2>Experience</h2>
      </header>
      <article className="expInfoBox">
        <ul className="expLinks">
          <li>
            <a onClick={clickHandler0}>TOMMY</a>
          </li>
          <li>
            <a onClick={clickHandler1}>BIGDROP</a>
          </li>
          <li>
            <a onClick={clickHandler2}>CUKER</a>
          </li>
        </ul>
        <section className="expInfo">
          <h3>{job}</h3>
          <h4>{title}</h4>
          <h5>{date}</h5>
          <p>
            <h6>{font}</h6> {desc1}
          </p>
          <p>
            <h6>{font}</h6> {desc2}
          </p>
          <p>
            <h6>{font}</h6> {desc3}
          </p>
        </section>
      </article>
    </>
  );
};

export default Experience;
