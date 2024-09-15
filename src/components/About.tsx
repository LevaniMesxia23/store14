import { useContext, useEffect } from 'react';
import zidane from '../../public/images/zidane.jpeg'; 

import Footer from './Footer';
import AOS from 'aos';
import { Mycontext } from '../App';

function About() {
  const context = useContext(Mycontext);
  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);
  if (!context) {
    throw new Error("Header must be used within a MyContext.Provider");
  }
  const { result,input,setFilteredProducts,sortOption } = context;
  
  useEffect(() => {
    AOS.init({ duration: 500 });
    setFilteredProducts(result);
  }, [input, setFilteredProducts, sortOption]);
  
  return (
    <>
    
    <div className="flex flex-col items-center py-8 px-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="max-w-4xl w-full text-start mb-8">
        <p className="text-gray-800 mb-4 text-4xl font-extrabold relative" data-aos="fade-down">
          <b>ABOUT US</b>
        </p>
        <div className=' flex'>

      
        <img 
          src={zidane} 
          alt="Football celebration" 
          className="w-full h-[620px] mb-8 border-4 border-gray-300 rounded-lg shadow-lg"
          data-aos="fade-right"
        />
        </div>

        <p className="text-gray-800 mx-auto mb-6 text-lg leading-relaxed" data-aos="fade-right">
          <i>
            At Burchu, we aim to celebrate the passion of football by delivering high-quality, uniquely designed t-shirts that connect fans to the game they love.
          </i>
        </p>
        <p className="text-gray-800 mx-auto mb-6 text-lg leading-relaxed" data-aos="fade-right">
          <i>
            Based in Georgia, we are committed to growing our brand into a symbol of sports pride and creativity.
          </i>
        </p>
        <p className="text-gray-800 mx-auto mb-6 text-lg leading-relaxed" data-aos="fade-right">
          <i>
            Join us on this exciting journey as we continue to innovate and bring football fans closer to their favorite sport through our exclusive t-shirt collections.
          </i>
        </p>
        <p className="text-gray-800 mx-auto text-lg leading-relaxed" data-aos="fade-right">
          <i>
            Our mission is to create a community where every football fan feels connected and celebrated. Explore our latest designs and be a part of our story!
          </i>
        </p>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default About;
