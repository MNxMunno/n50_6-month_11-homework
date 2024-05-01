import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useFetch } from "../../hooks/useFetch";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { data, error, loading } = useFetch(
    `/products/search?q=${search}`,
    search
  );

  const searchItems = data?.data?.products?.map((el) => (
    <Link
      onClick={() => setSearch("")}
      className="search_box"
      to={`/product/${el.id}`}
      key={el.id}
    >
      <img src={el.images[0]} alt="img"  />
      <span>{el.title}</span>
    </Link>
  ));

  let { pathname } = useLocation();
  if (pathname.includes("/register") || pathname.includes("/admin")) {
    return <></>;
  }
  return (
    <header>
      <div className="navbar container">
        <div className="nav__items">
          <NavLink to={"/"}>
            <img src={logo} alt="logo"className="logo" />
          </NavLink>
          <NavLink className="navbar__link" to={"/"}>
            Home
          </NavLink>
          <NavLink className="navbar__link" to={"/about"}>
            About
          </NavLink>
        </div>
        <div className="search">
        <CiSearch />
          <input
            style={{ padding: "5px", outline: "none", margin: "auto" }}
            type="search"
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          {search?.trim() ? (
            <ul className="navbar__search-content">{searchItems}</ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
