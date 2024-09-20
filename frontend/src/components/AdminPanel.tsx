import { useState } from 'react';
import Swal from 'sweetalert2';

const AdminPanel = () => {
  const generateRandomNumericId = () => {
    return Math.floor(Date.now() + Math.random() * 10000);
  };
  const [producId, setProductId] = useState(generateRandomNumericId());
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleAddProduct = async () => {
    if (!productName || !productPrice) {
      Swal.fire({
        title: "Incomplete Form",
        text: "Please fill out all fields before submitting.",
        icon: "warning"
      });
      return;
    }
    const newProductId = generateRandomNumericId();
    setProductId(newProductId);

    console.log({ name: productName, price: productPrice });
    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ id: producId, name: productName, price: productPrice, quantity: productQuantity,  size: productSize, image: productImage })
      })
      const data = await (res.json)
      console.log(data);
      if (res) {
        Swal.fire({
          title: "Product Added!",
          text: "The product has been successfully added.",
          icon: "success"
        });
        setProductName('');
        setProductPrice('');
        setProductQuantity('');
        setProductSize('');
        setProductImage('');
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          icon: "error"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an issue with your request. Please try again.",
        icon: "error"
      });
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Admin Panel</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleAddProduct();
      }} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Product Price:</label>
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Product Quantity:</label>
          <input
            type="text"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Product Size:</label>
          <input
            type="text"
            value={productSize}
            onChange={(e) => setProductSize(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Product Image:</label>
          <input
            type="file"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
