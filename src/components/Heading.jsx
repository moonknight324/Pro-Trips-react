import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Heading() {
  return (
    <div className="navbar">
        <Link to={"/"}>
          <h1 className="title">Kalvium ❤️</h1>
        </Link>
    
        <ul>
        <li> <Link to={"/contacts"}>
          <h3>Contacts</h3>
        </Link></li>
        {""}
        <Link to={"/form"}>
          <h3>Registration Form</h3>
        </Link>
        </ul>
    </div>
  );
}

export default Heading;
