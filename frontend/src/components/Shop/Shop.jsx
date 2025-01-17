import React from "react";
import "./Shop.scss";

const Shop = () => {
  return (
    <div>
      <div className="shop-category-section">
        <div className="category-content container">
          <div className="content-title">
            <h2>Shop by Category</h2>
          </div>
          <div className="content-image col-lg-12">
            <div className="box1 box col-lg-4">
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg.webp"
                alt=""
              />
              <div className="box-content">
                <h2>Women</h2>
                <a href="">Best New deals</a>
                <span>New collection</span>
              </div>
            </div>
            <div className="box2 box col-lg-4">
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg.webp"
                alt=""
              />

              <div className="box-content">
                <span>Discount</span>
                <h2>Winter Cloth</h2>
                <h6>New Collection</h6>
              </div>
            </div>
            <div className="box3 box col-lg-4">
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg.webp"
                alt=""
              />
              <div className="box-content">
                <h2>Men</h2>
                <a href="">Best New deals</a>
                <span>New collection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
