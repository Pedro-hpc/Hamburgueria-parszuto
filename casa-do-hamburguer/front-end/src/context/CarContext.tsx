import { createContext, useContext, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const carContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCart((prev) => [...prev, product]);
  }

  return (
    <carContext.Provider value={{ cart, addToCart }}>
      {children}
    </carContext.Provider>
  );
};
export function useCart() {
  return useContext(carContext)!;
}
