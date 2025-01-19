import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  deleteProduct,
  getProducts,
  sortHighestProduct,
  sortLowestProduct,
} from "../../redux/features/productSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Admin.scss";
import { useState } from "react";
import { all } from "axios";

const Admin = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  console.log(products);
  
  const { resetForm, values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      image: "",
      title: "",
      category: "",
      price: "",
    },
    onSubmit(values) {
      dispatch(addProduct(values));
      dispatch(getProducts());
      resetForm();
      setOpen(false);
    },
    validationSchema: Yup.object({
      image: Yup.string().required("Image is required").url(),
      title: Yup.string().required("Title is required"),
      category: Yup.string().required("category is required"),
      price: Yup.number().required("Confirm password is required"),
    }),
  });

  

  return (
    <div className="container">
      {open && (
        <div className="formik-modal">
          <h2>Add Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="list-container">
              {errors.image}
              <input
                onChange={handleChange}
                value={values.image}
                name="image"
                type="text"
                placeholder="Image URL"
              />
            </div>

            <div className="list-container">
            {errors.title}
              <input
                onChange={handleChange}
                value={values.title}
                name="title"
                type="text"
                placeholder="Title"
              />
            </div>

            <div className="list-container">
            {errors.category}
              <input
                onChange={handleChange}
                value={values.category}
                name="category"
                type="text"
                placeholder="Category"
              />
            </div>

            <div className="list-container">
            {errors.price}
              <input
                onChange={handleChange}
                value={values.price}
                name="price"
                type="text"
                placeholder="Price"
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
      <div className="header-admin">
        <button onClick={() => setOpen(!open)} className="btn btn-success">
          Creat
        </button>
        <button className="btn btn-primary" onClick={() => dispatch(sortHighestProduct())}>AZ</button>
        <button className="btn btn-primary" onClick={() => dispatch(sortLowestProduct())}>ZA</button>
      </div>
      <h1 className="admin-title">Admin</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product._id}>
                <td>
                  <img src={product.image} alt="" />
                </td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    onClick={() => dispatch(deleteProduct(product._id))}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
