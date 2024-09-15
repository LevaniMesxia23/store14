import { SetStateAction, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mycontext } from "../App";

function FilterSort() {
  const { t } = useTranslation();

  const context = useContext(Mycontext);
  if (!context) {
    throw new Error("Header must be used within a MyContext.Provider");
  }
  const { input,
    setInput,
    setFilteredProducts,
    sortOption,
    setSortOption,
    result } = context;

  result.sort((a, b) => {
    if (sortOption === "priceAsc") {
      return a.cost - b.cost;
    } else if (sortOption === "priceDesc") {
      return b.cost - a.cost;
    }
    return 0;
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setFilteredProducts(result);
  }, [input, setFilteredProducts, sortOption]);

const handleChange = (value: SetStateAction<string>) => {
  setInput(value);
};

const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setSortOption(e.target.value);
};
  return (
    <div>
       <div className="flex flex-col lg:flex-row justify-between items-center my-8 mx-10">
        <input
          type="text"
          placeholder={t('Search...')}
          className="border rounded-md px-4 py-2 mb-4 lg:mb-0 w-full lg:w-1/3"
          onChange={e => handleChange(e.target.value)}
        />
        <div className="flex">
          <select
            className="border rounded-md px-4 py-2"
            onChange={handleSortChange}
          >
            <option value="priceAsc">{t('Price Low to High')}</option>
            <option value="priceDesc">{t('Price High to Low')}</option>
          </select>
        </div>
      </div>
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">{t('All Products')}</h1>
        <p className="text-lg text-gray-600">{t('Explore our range of products below.')}</p>
      </header>
    </div>
  )
}

export default FilterSort