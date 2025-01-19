import product from "../Models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json();
  }
};
export const addProduct = async (req, res) => {
  try {
    const newProduct = new product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json();
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await product.findByIdAndDelete(id);
    res.status(201).json(deleteProduct);
  } catch (error) {
    res.status(500).json();
  }
};
