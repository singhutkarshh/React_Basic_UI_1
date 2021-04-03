import React, { useState, useEffect } from "react";
import "./navbar.css";
import Error from "../error.js";
const Navbar = () => {
  return (
    <>
      <section className="navBar">
        <header className="navTitle">
          <h2>React UI Designs</h2>
        </header>
        <NavLinks />
        <NavSocial />
      </section>
    </>
  );
};

const NavLinks = () => {
  return (
    <>
      <ul className="navLinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Projects">Projects</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
        <li>
          <a href="/Profile">Profile</a>
        </li>
      </ul>
    </>
  );
};

const NavSocial = () => {
  return (
    <>
      <ul className="navSocial">
        <li>
          <a href="https://facebook.com">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
