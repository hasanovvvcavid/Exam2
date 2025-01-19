import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const Detail = () => {
    const { id } = useParams();

    const { products } = useSelector((state) => state.products);

    const findPruduct = products.find((product) => product._id === id);
    
  return (
    <div>
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <div className="detail-image">
                <img src={findPruduct.image} alt="" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="detail-content">
                <h2>{findPruduct.title}</h2>
                <p>{findPruduct.description}</p>
                <div className="detail-price">
                    <span>${findPruduct.price}</span>
                    <span>${findPruduct.price * 1.5}</span>
                </div>
                <div className="detail-add">
                    <button className="btn btn-danger">Add Basket</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Detail