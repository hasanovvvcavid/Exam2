import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { deleteBasket } from "../../redux/features/basketSlice";
import "./Basket.scss"

const Basket = () => {
  const dispatch = useDispatch()
  const {basket} = useSelector((state) => state.basket)

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {basket &&
            basket.map((product) => (
              <tr key={product._id}>
                <td><img src={product.image} alt="" /></td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.count}</td>
                <td><button onClick={()=> dispatch(deleteBasket(product._id))} className="btn btn-danger">Delete</button></td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Basket;
