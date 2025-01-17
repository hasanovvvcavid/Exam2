import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBasket } from "../../redux/features/basketSlice";

const Card = ({product}) => {
  const dispatch = useDispatch()
  return (
    <div className="col-lg-3 product-card">
      <div className="card-image">
        <img
          src={product.image}
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="content-star">
          <i class="bi bi-star yellow"></i>
          <i class="bi bi-star yellow"></i>
          <i class="bi bi-star yellow"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
        </div>
        <div className="content-title">
          <p>{product.title}</p>
        </div>
        <div className="content-price">
          <span className="price-red">${product.price}</span><span>${product.price * 1.5}</span>
        </div>
        <div className="add-to-basket">
          <button onClick={()=>dispatch(addBasket(product))} className="btn btn-danger">Add Basket</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
