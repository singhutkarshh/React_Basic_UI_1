import React, { useState, useEffect } from "react";
import "./accordian.css";
import Data from "./dataAccordian.js";

const Accordian = () => {
  return (
    <>
      <Content />
    </>
  );
};

const Content = () => {
  return (
    <section className="arrangement">
      <header className="heading">Questions And Answers About Login</header>
      <section className="queSection">
        <Questions />
        <hr></hr>
      </section>
    </section>
  );
};
const Questions = () => {
  console.log(Data);
  const [btn, setBtn] = useState("+");
  const [show, setShow] = useState("");
  const clickHandler = () => {
    setShow(!show);
    if (btn === "-") {
      setBtn("+");
    }
    if (btn === "+") {
      setBtn("-");
    }
  };
  return Data.map((item) => {
    const { id, title, info } = item;
    return (
      <section className="queBox" key={id}>
        <div>
          <h3>{title}</h3>
          <button type="button" onClick={clickHandler} className="btn">
            {btn}
          </button>
        </div>
        {show && <p className="info">{info}</p>}
      </section>
    );
  });
};

export default Accordian;
