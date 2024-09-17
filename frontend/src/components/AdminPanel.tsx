import React, { useState } from 'react';
import Swal from 'sweetalert2';


const AdminPanel: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = async () => {
    if (!productName || !productPrice) {
      Swal.fire({
        title: "Incomplete Form",
        text: "Please fill out all fields before submitting.",
        icon: "warning"
      });
      return;
    }

    try {
      const res = await fetch("../data.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ name: productName, price: productPrice })
      }).then(res => res.json());

      if (res.success) {
        Swal.fire({
          title: "Product Added!",
          text: "The product has been successfully added.",
          icon: "success"
        });
        setProductName('');
        setProductPrice('');
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
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleAddProduct();
      }}>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label>
          Product Price:
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminPanel;
