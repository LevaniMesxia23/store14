import { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from "../../public/images/logo.jpg";
import downArrow from "../../public/images/down-arrow.png";
import { Mycontext } from "../App";
import { Fade as Hamburger } from 'hamburger-react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const context = useContext(Mycontext);
  if (!context) {
    throw new Error("Header must be used within a MyContext.Provider");
  }
  const { burgerClicked, setBurgerClicked, isTablet, isDropdownOpen, setDropdownOpen, changeLanguage } = context;

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleBurger = () => {
    setBurgerClicked(!burgerClicked);
  };

  const handleLinkClick = () => {
    if (burgerClicked) {
      setBurgerClicked(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = burgerClicked ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [burgerClicked]);

  const navLinks = [
    { name: t('home'), path: "/" },
    { name: t('products'), path: "/products" },
    { name: t('about'), path: "/about" },
    { name: t('contact'), path: "/contact" },
  ];

  return (
    <header className={`${i18n.language === "en" ? "font-righteous" : "font-mikheil"} w-full bg-black text-white `}>
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center justify-start gap-4">
          {!isTablet && (
            <Hamburger
              toggled={burgerClicked}
              toggle={handleBurger}
              size={24}
              color="white"
            />
          )}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="logo" className="h-20" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {isTablet && (
            <nav className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-[0.9rem] font-bold" onClick={handleLinkClick}>
                  {link.name}
                </Link>
              ))}
            </nav>
          )}
          <div className="relative" onClick={toggleDropdown}>
            <span className='text-white cursor-pointer'>{i18n.language === 'en' ? 'English' : 'ქართული'}</span>
            <img src={downArrow} alt="down arrow" className='w-4 h-4 cursor-pointer ml-2 inline-block' />
            <div className={`z-20 absolute top-full mt-4 bg-transparent border -ml-4 shadow-lg rounded-lg p-2 transition-all duration-300 ease-in-out overflow-hidden ${isDropdownOpen ? "max-h-40 opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
          <div className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg" onClick={() => changeLanguage('en')}>{t('english')}</div>
          <div className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg" onClick={() => changeLanguage('ka')}>{t('georgian')}</div>
          </div>
          </div>
        </div>
      </div>

      {!isTablet && (
        <nav
          className={`z-10 fixed top-[113px] left-0 h-full w-[100%] bg-black text-white transition-transform duration-300 ease-in-out ${
            burgerClicked ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:flex md:items-center md:w-auto`}
        >
          <ul className="flex flex-col  space-y-4 md:mt-0 md:flex-row md:space-y-0 md:space-x-4">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:bg-[#333333] pl-10 pt-6 text-[1.8rem] font-bold">
                <Link to={link.path} className="hover:underline" onClick={handleLinkClick}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
