import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  deleteProduct,
  getProducts,
  sortAzProduct,
  sortZaProduct,
} from "../../redux/features/productSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Admin.scss";
import { useState } from "react";

const Admin = () => {
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      category: "",
      price: "",
    },
    validationSchema: Yup.object({
      image: Yup.string().required("Image is required").url(),
      title: Yup.string().required("Title is required"),
      category: Yup.string().required("category is required"),
      price: Yup.number().required("Confirm password is required"),
    }),
    onSubmit(values) {
      dispatch(addProduct(values));
      setOpen(false);
      dispatch(getProducts());
      
    },
  });

  

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();


  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="container">
      {open && (
        <div className="formik-modal">
          <h2>Add Product</h2>
          <form onSubmit={formik.handleSubmit}>
            {/* {errors.image && <p>{errors.image.message}</p>} */}
            <input
              onChange={formik.handleChange}
              value={formik.values.image}
              name="image"
              type="text"
            />
            {/* {errors.title && <p>{errors.title.message}</p>} */}
            <input
              onChange={formik.handleChange}
              value={formik.values.title}
              name="title"
              type="text"
            />
            {/* {errors.category && <p>{errors.category.message}</p>} */}
            <input
              onChange={formik.handleChange}
              value={formik.values.category}
              name="category"
              type="text"
            />
            {/* {errors.price && <p>{errors.price.message}</p>} */}
            <input
              onChange={formik.handleChange}
              value={formik.values.price}
              name="price"
              type="text"
            />
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
        <button onClick={() => dispatch(sortAzProduct())}>AZ</button>
        <button onClick={() => dispatch(sortZaProduct())}>ZA</button>
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
