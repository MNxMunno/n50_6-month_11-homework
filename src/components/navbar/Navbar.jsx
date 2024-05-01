import React from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  let { pathname } = useLocation();
  if (pathname.includes("/register") || pathname.includes("/admin")) {
    return <></>;
  }
  return (
    <div className="navbar">
      <NavLink to={"/"}>
        <img src={logo} alt="logo" width={300} height={260} />
      </NavLink>
      <NavLink className="navbar__link" to={"/"}>
        Home
      </NavLink>
      <NavLink className="navbar__link" to={"/about"}>
        About
      </NavLink>
    </div>
  );
};

export default Navbar;
