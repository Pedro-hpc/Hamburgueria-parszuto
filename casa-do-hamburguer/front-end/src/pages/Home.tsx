import { Link } from "react-router";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="fixed flex h-screen">
      <Header />
      <div className="fixed h-full w-full">
        <img
          src="./public/img.hamburguer.CHATGPT.png"
          alt="Hamburguer"
          className="h-screen w-full object-cover"
        />
      </div>

      <div className="absolute flex h-screen max-h-full w-screen flex-col items-center justify-center gap-4 object-cover lg:ml-20 lg:items-start">
        <Link
          to="/login"
          className="w-full max-w-xs cursor-pointer rounded-md border-2 border-[#ffffff66] bg-[#3c37362e] py-2 text-center text-sm font-bold text-white transition hover:scale-105"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="w-full max-w-xs cursor-pointer rounded-md border-2 border-[#ffffff66] bg-[#3c37362e] py-2 text-center text-sm font-bold text-white transition hover:scale-105"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Home;
