import { useState, createContext } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { useMediaQuery } from "@custom-react-hooks/all";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import i18n from "./i18n";
import data from "./data.json";
import About from "./components/About";
import ItemPage from "./pages/ItemPage";
import Contact from "./components/Contact";
import Swal from 'sweetalert2'
import AdminPanel from "./components/AdminPanel";
import AdminLogin from "./components/AdminLogin";

export const Mycontext = createContext<MyContextType | null>(null);

function App() {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data.product);
  const [sortOption, setSortOption] = useState("priceAsc");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const result = data.product.filter(user => 
    user && user.nameKey && user.nameKey.toLowerCase().includes(input.toLowerCase())
  );

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("number")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
  
    if (!name || !email || !phone || !message) {
      Swal.fire({
        title: "Incomplete Form",
        text: "Please fill out all fields before submitting.",
        icon: "warning"
      });
      return; 
    }
  
    formData.append("access_key", "61e5d23d-e972-4421-87df-52095f21cd7d");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        Swal.fire({
          title: "Good job!",
          text: "You contacted us!",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          icon: "error"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an issue with your submission. Please try again.",
        icon: "error"
      });
      console.log(error)
    }
  };
  

  return (
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
        result,
        onSubmit
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ItemPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </Mycontext.Provider>
  );
}

export default App;
