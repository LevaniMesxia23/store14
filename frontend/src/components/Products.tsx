import { useEffect, useState } from 'react';

interface Products {
  id: number;        
  name: string;
  price: number;        
  quantity: number;     
  cost: number;         
  size: string;
  image: string;       
}

const Product = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products");
        const data = await res.json();
        setProducts(data); 
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-sm text-black">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md"/>
            <h2 className="text-xl font-medium mb-2">{product.name}</h2>
            <p className=' text-black'>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Cost: ${product.cost}</p>
            <p>Size: {product.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
