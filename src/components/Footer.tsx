import { useContext, useState } from 'react'
import plus from "../../public/images/plus.png"
import minus from "../../public/images/minus-sign.png"
import instagram from "../../public/images/icon-instagram.svg"
import { useTranslation } from 'react-i18next';
import { Mycontext } from '../App';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation(); 
  const [menuOpen, setMenuOpen] = useState(false)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [socialOpen, setSocialOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const context = useContext(Mycontext);
  if (!context) {
    throw new Error("Header must be used within a MyContext.Provider");
  }

  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleFeedback = () => {
    setFeedbackOpen(!feedbackOpen);
  };

  const toggleSocial = () => {
    setSocialOpen(!socialOpen);
  };

  const toggleContacts = () => {
    setContactOpen(!contactOpen);
  };

  return (
    <div className=' bg-black font-mikheil'>
      <div className=' px-12 py-8'>
        <ul className=' flex flex-col  text-white'>
          <div className=' flex justify-between items-center' onClick={toggleDropdown}>
            <li>{t("menu")}</li>
            <img className='w-2 h-2' src={menuOpen ? minus : plus} alt="" />
          </div>
          <div className={`flex flex-col gap-3 top-full  p-2 transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-40 opacity-100 visible py-4" : "max-h-0 opacity-0 invisible"}`}>
            <Link to="/"><p>{t('home')}</p></Link>
            <Link to="/products"><p>{t('products')}</p></Link>
            <Link to="/about"><p>{t('about_us')}</p></Link>
          </div>
          
          <div className=' flex justify-between items-center' onClick={toggleFeedback}>
            <li>{t("feedback")}</li>
            <img className='w-2 h-2' src={feedbackOpen ? minus : plus} alt="" />
          </div>
          <div className={`flex flex-col gap-3 top-full  p-2 transition-all duration-300 ease-in-out overflow-hidden ${feedbackOpen ? "max-h-40 opacity-100 visible py-4" : "max-h-0 opacity-0 invisible"}`}>
            <Link to='/contact'><p>{t("contact")}</p></Link>
          </div>
          
          <div className=' flex justify-between items-center' onClick={toggleSocial}>
            <li>{t("socials")}</li>
            <img className='w-2 h-2' src={socialOpen ? minus : plus} alt="" />
          </div>
          <div className={`flex flex-col gap-3 top-full  p-2 transition-all duration-300 ease-in-out overflow-hidden ${socialOpen ? "max-h-40 opacity-100 visible py-4" : "max-h-0 opacity-0 invisible"}`}>
          <a target='_blank' href="https://www.instagram.com/burchu.14/"><img src={instagram} alt="Instagram" className='w-12 h-12'/></a>
          </div>

          <div className=' flex justify-between items-center' onClick={toggleContacts}>
            <li>{t('contact_info')}</li>
            <img className='w-2 h-2' src={contactOpen ? minus : plus} alt="" />
          </div>
          <div className={`flex flex-col gap-3 top-full  p-2 transition-all duration-300 ease-in-out overflow-hidden ${contactOpen ? "max-h-40 opacity-100 visible py-4" : "max-h-0 opacity-0 invisible"}`}>
            <p>levanimesxia10@gmail.com</p>
            <p>(+995) 557-147-471</p>
          </div>
        </ul>
      </div>
    </div>
  )
}
