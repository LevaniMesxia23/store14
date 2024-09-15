import { useState, createContext } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { useMediaQuery } from "@custom-react-hooks/all";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import i18n from "./i18n";
import data from "./data.json"
import About from "./components/About";
import ItemPage from "./pages/ItemPage";

export const Mycontext = createContext<MyContextType | null>(null);
function App() {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data.product);
  const [sortOption, setSortOption] = useState("priceAsc");

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };
  const result = data.product.filter(user => 
    user && user.nameKey && user.nameKey.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <>
      <Mycontext.Provider
        value={{
          burgerClicked,
          setBurgerClicked,
          isDropdownOpen,
          setDropdownOpen,
          changeLanguage,
          isTablet,
          input,
          setInput,
          filteredProducts,
          setFilteredProducts,
          sortOption,
          setSortOption,
          result
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ItemPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Mycontext.Provider>
    </>
  );
}

export default App;
