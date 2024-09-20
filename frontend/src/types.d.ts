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
  filteredProducts: {
    id: number;
    nameKey: string;
    image: string;
    size: string;
    price: number;
    quantity: number;
  }[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<{
    id: number;
    nameKey: string;
    image: string;
    size: string;
    price: number;
    quantity: number;
  }[]>>;
  sortOption: string; 
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  result: {
    id: number;
    nameKey: string;
    image: string;
    size: string;
    price: number;
    quantity: number;
}[]
}
