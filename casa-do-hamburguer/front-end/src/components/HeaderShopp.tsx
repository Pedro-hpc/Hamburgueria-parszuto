import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/Carcontext";

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="bg-[#131313]">
      <div className="mx-auto flex w-full items-center justify-between px-3 md:w-180 md:px-0">
        <Link to="/">
          <img src="./logo.png" alt="Hamburguer" />
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/cart">
            <div className="flex items-center justify-center rounded-full bg-[#f1e3ca] p-3 transition hover:scale-105">
              <ShoppingCart size={20} className="text-[#131313]" />
              <span className="ml-2 text-lg font-bold">{cart.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
