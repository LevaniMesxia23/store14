import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useState } from 'react';
import downArrow from "/images/down-arrow-black.png";
import SizeImg from "/images/size.png";
import Footer from '../components/Footer';
import backArrow from "/images/back-arrow.png"
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../App';

const ItemPage = () => {
  const context = useContext(Mycontext)
  if (!context) {
    throw new Error("Header must be used within a MyContext.Provider");
  }
  const { products } = context;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [clickSize, setClickSize] = useState(false);
  const [clickDetails, setClickDetails] = useState(false);

  const productId = parseInt(id || "", 10);

  const product = products.find(item => item.id === productId);
  
  useEffect(() => {
    console.log('Scrolling to top');
    window.scrollTo(0, 0);  
  }, []); 

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container mx-auto p-6 font-roboto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={backArrow} alt="" className='w-4 h-4' onClick={handleGoBack}/>

          <div className="flex justify-center items-center">
            {product.image && (
              <img src={product.image} alt={t(product.name)} className="w-full h-auto object-cover rounded-lg shadow-md" />
            )}
          </div>
          <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4">{t(product.name)}</h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <p className="text-2xl font-semibold">₾{product.price}</p>
            </div>

            <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setClickSize(!clickSize)}>
              <p className="text-lg">Size Chart</p>
              <img
                src={downArrow}
                alt="Arrow"
                className={`w-4 h-4 transition-transform duration-300 ${clickSize ? 'rotate-180' : 'rotate-0'}`}
              />
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ${clickSize ? 'max-h-96' : 'max-h-0'}`}>
              <img src={SizeImg} alt="Size Chart" className="w-full mb-8" />
            </div>

            <div className="flex items-center justify-between cursor-pointer" onClick={() => setClickDetails(!clickDetails)}>
              <p className="text-lg">Details</p>
              <img
                src={downArrow}
                alt="Arrow"
                className={`w-4 h-4 transition-transform duration-300 ${clickDetails ? 'rotate-180' : 'rotate-0'}`}
              />
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ${clickDetails ? 'max-h-96' : 'max-h-0'}`}>
              <p className="text-gray-700 text-lg font-bold mt-2">
                • 230 GSM <br />
                • 100% COMBED COTTON <br />
                • PUFF PRINT DESIGN
              </p>
            </div>

            <p className="text-gray-500 mt-4">Available Quantity: {product.quantity}</p>
          </div>
        </div>
      </div>
      <div className='bottom-0'>
        <Footer />
      </div>
    </>
  );
};

export default ItemPage;
