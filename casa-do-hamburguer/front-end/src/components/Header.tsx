import { Link } from "react-router";

const Header = () => {
  return (
    <div className="absoluted bg-[#131313]">
      <div className="p-3px mx-auto flex w-full items-center justify-between md:w-180 md:p-0">
        <Link to="/">
          <img src="./logo.png" alt="Hamburguer" />{" "}
        </Link>
        <Link to="/login">
          <div className="flex h-8.75 w-32.5 items-center justify-center rounded-sm bg-[#f1e3cac8] transition hover:scale-105">
            Entrar
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
