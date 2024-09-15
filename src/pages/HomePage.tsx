import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Mycontext } from "../App";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { useTranslation } from 'react-i18next';
import MainImg from "../../public/images/focus.jpg";
import papi from '../../public/images/papi.jpeg';

function HomePage() {
  const { i18n } = useTranslation();
  const context = useContext(Mycontext);
  if (!context) {
    throw new Error("Header must be used within a MyContext.Provider");
  }
  const { isTablet } = context;

  return (
    <div className={`${i18n.language === "en" ? "font-righteous" : "font-mikheil"}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Burchu</title>
        <link rel="canonical" href="/images/logo.jpg" />
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
      </Helmet>
      {!isTablet ? (
        <img src={MainImg} className="w-full" alt="Main" />
      ) : (
        <img
          src={papi}
          className="flex justify-center items-center w-full h-[620px]"
          alt="Papi"
        />
      )}
      <h1 className="flex justify-center text-[2.5rem] font-bold mt-4">
        First Drop
      </h1>
      <Products />
      <Footer />
    </div>
  );
}

export default HomePage;
