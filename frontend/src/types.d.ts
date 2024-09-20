interface MyContextType {
  burgerClicked: boolean;
  setBurgerClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isTablet: boolean;
  isDropdownOpen: boolean;
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  changeLanguage: (lng: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  products: Products[]
  filteredProducts: {
    id: number;        
    name: string;
    price: number;     
    quantity: number;         
    size: string;
    image: string;   
  }[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<{
    id: number;        
    name: string;
    price: number;     
    quantity: number;         
    size: string;
    image: string;   
  }[]>>;
  sortOption: string; 
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
//   result: {
//     id: number;        
//     name: string;
//     price: number;     
//     quantity: number;         
//     size: string;
//     image: string;   
// }[];
}
interface Products {
  id: number;        
  name: string;
  price: number;     
  quantity: number;         
  size: string;
  image: string;       
}
