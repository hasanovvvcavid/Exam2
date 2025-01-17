import React, { useState } from "react";
import { Link } from "react-router";
import { searchProduct } from "../../redux/features/productSlice";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.scss";
import { useEffect } from "react";
import Products from "../Products/Products";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch()

  const handleSearch = (value) => {
    setSearchValue(value);
    dispatch(searchProduct(value));
  };
  

  return (
    
    <div>
      <div className="header">
        <div className="container header-content">
          <div className="logo">
            <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png.webp" alt="" />
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="nav-extra-links">
              <input value={searchValue} onChange={(e) => handleSearch(e.target.value)} type="text" placeholder="Search" />
            <div className="basket">
              <Link to="/basket">
              <i class="bi bi-cart2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
