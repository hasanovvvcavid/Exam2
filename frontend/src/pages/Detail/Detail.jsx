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
            <div className="detail-image">
                <img src={findPruduct.image} alt="" />
            </div>
            <div className="detail-info">
                <h2>{findPruduct.title}</h2>
                <h3>{findPruduct.category}</h3>
                <h4>{findPruduct.price}</h4>
                <p>{findPruduct.description}</p>
                <button>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Detail