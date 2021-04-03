import React, { useState } from "react";
import "./menu.css";
import { Data } from "./data.js";

const Menu = () => {
  return (
    <>
      <section className="Menu">
        <MenuHeader />
        <MenuItems />
      </section>
    </>
  );
};

const MenuHeader = () => {
  return (
    <header className="menuHeader">
      <h2>Menu</h2>
    </header>
  );
};

const MenuItems = () => {
  const [data, setData] = useState(Data);

  const clickAll = () => {
    setData(Data);
  };

  const clickBreakfast = () => {
    setData(
      Data.filter((element) => {
        if (element.category === "breakfast") {
          return element;
        }
      })
    );
  };

  const clickLunch = () => {
    setData(
      Data.filter((element) => {
        if (element.category === "lunch") {
          return element;
        }
      })
    );
  };

  const clickShakes = () => {
    setData(
      Data.filter((element) => {
        if (element.category === "shakes") {
          return element;
        }
      })
    );
  };

  return (
    <section className="menuList">
      <ul>
        <li>
          <a onClick={clickAll}>All</a>
        </li>
        <li>
          <a onClick={clickBreakfast}>Breakfast</a>
        </li>
        <li>
          <a onClick={clickLunch}>Lunch</a>
        </li>
        <li>
          <a onClick={clickShakes}>Shakes</a>
        </li>
      </ul>
      <article className="menuBox">
        {data.map((item) => {
          const { id, title, category, price, img, desc } = item;
          return (
            <section className="menuItems" key={id}>
              <img src={img}></img>
              <div>
                <ul>
                  <li>{title}</li>
                  <li>Price: ${price}</li>
                </ul>
                <hr></hr>
                <p>{desc}</p>
              </div>
            </section>
          );
        })}
      </article>
    </section>
  );
};

export default Menu;
