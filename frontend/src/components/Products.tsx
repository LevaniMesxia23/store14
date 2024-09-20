import { useContext } from 'react';
import { Mycontext } from '../App';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

const Product = () => {
  const context = useContext(Mycontext);
  if (!context) {
    throw new Error("Header must be used within a MyContext.Provider");
  }
  const { filteredProducts } = context;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-sm text-black">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md"/>
            <h2 className="text-xl font-medium mb-2">{product.name}</h2>
            <p className=' text-black'>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Size: {product.size}</p>
            <Link to={`/product/${product.id}`}>
              <button className='bg-gray-800 text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-700 hover:scale-105 transition-colors duration-300'>
                {t('Buy Now')}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
