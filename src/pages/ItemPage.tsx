import { useParams } from 'react-router-dom';
import data from "../data.json";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import downArrow from "../../public/images/down-arrow-black.png";
import SizeImg from "../../public/images/Screenshot 2024-09-15 at 01.36.36.png";
import Footer from '../components/Footer';
import backArrow from "../../public/images/arrow.png"
import { useNavigate } from 'react-router-dom';

type Product = {
  id: number;
  image: string;
  nameKey: string;
  cost: number;
  quantity: number;
};


const ItemPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [clickSize, setClickSize] = useState(false);
  const [clickDetails, setClickDetails] = useState(false);

  const productId = parseInt(id || "", 10);

  const product = data.product.find((item: Product) => item.id === productId);

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
          <div className=' w-8 h-8 rounded-[50%] bg-black flex items-center justify-center' onClick={handleGoBack}>
          <img src={backArrow} alt="" className='w-4 h-4'/>
          </div>
          <div className="flex justify-center items-center">
            {product.image && (
              <img src={product.image} alt={t(product.nameKey)} className="w-full h-auto object-cover rounded-lg shadow-md" />
            )}
          </div>
          <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4">{t(product.nameKey)}</h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <p className="text-2xl font-semibold">₾{product.cost}</p>
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
      <Footer />
    </>
  );
};

export default ItemPage;
