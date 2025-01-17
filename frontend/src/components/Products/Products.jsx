import React from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";

import "./Products.scss";
import { useEffect } from "react";
import { getProducts } from "../../redux/features/productSlice";

const Products = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="latest-products">
        <div className="products-title container">
          <div className="title">
            <h2>Latest Products</h2>
          </div>
          <div className="title-option">
            <ul>
              <li>All</li>
              <li>New</li>
              <li>Featured</li>
              <li>Offer</li>
            </ul>
          </div>
        </div>
        <div className="products-description container">
          <div className="cards">
            {products && products.map((product) => <Card key={product._id} product={product} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
