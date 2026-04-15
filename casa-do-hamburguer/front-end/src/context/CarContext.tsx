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

  function addToCart(product: any) {
    setCart((prevCart: any[]) => {
      const itemExist = prevCart.find((item) => item.id === product.id);

      if (itemExist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
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

export default carContext;
