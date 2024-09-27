import Product from "../models/model.js";

export const getAllProduct = async (req, res) => {
  try {
    const data = await Product.find();
    const newData = data.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      size: item.size,
      quantity: item.quantity,
      image: item.image,
      status: item.status,
    }));
    return res.json(newData);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products", error });
  }
  res.json("Hello World")
};

export const addProduct = async (req, res) => {
  try {
    console.log(req.body)
    const productData = req.body;
    const item = new Product(productData);
    const result = await item.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const existingProduct = await Product.findOne({ id });
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    existingProduct.status = !existingProduct.status;
    const updatedProduct = await existingProduct.save();
    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const existingProduct = await Product.findOne({ id });
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    await Product.deleteOne({ id });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};

export const deleteMany = async (req, res) => {
  try {
    await Product.deleteMany({ status: false });
    res.status(200).json({ message: "Inactive products deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting products", error });
  }
};