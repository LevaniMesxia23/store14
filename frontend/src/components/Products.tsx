import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mycontext } from "../App";
import { Link } from 'react-router-dom';

function Products() {
  const { t, i18n } = useTranslation();
  const context = useContext(Mycontext);

  if (!context) {
    throw new Error("Products must be used within a MyContext.Provider");
  }
  
  const { filteredProducts, setFilteredProducts, result } = context;

  useEffect(() => {
    console.log('Initializing AOS');
    AOS.init({ duration: 1000 });
  }, []); 
  
  useEffect(() => {
    console.log('Scrolling to top');
    window.scrollTo(0, 0);  
  }, []); 
  useEffect(() => {
    if (result) {
      console.log('Setting filtered products', result);
      setFilteredProducts(result);
    }
  }, []); 


  if (!filteredProducts || filteredProducts.length === 0) {
    return <p>{t('No products available')}</p>; 
  }

  return (
    <div className={`${i18n.language === "en" ? "font-righteous" : "font-mikheil"} bg-gray-100 text-gray-900 p-8 min-h-screen`}>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((item) => (
            <div key={item.id}
              className='flex flex-col items-center bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer'
              data-aos="fade-up"
            >
              <img
                src={item.image}
                alt={t(item.nameKey)}
                className='w-full h-auto rounded-lg mb-4 hover:scale-105 transition-transform duration-300'
              />
              <p className='mb-2 text-center text-xl font-medium text-gray-800 max-w-[260px] truncate righteous-regular'>
                {t(item.nameKey)}
              </p>
              <p className='text-gray-600 text-center text-md mb-4 righteous-regular'>
                ₾ {item.cost} {t('Gel')}
              </p>
              <Link key={item.id} to={`/product/${item.id}`}>
              <button className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 hover:scale-105 transition-colors duration-300 righteous-regular'>
                {t('Buy Now')}
              </button>
              </Link>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Products;