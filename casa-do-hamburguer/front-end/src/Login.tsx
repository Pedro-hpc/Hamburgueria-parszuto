import { use, useState } from "react";
import Input from "./components/Input";

// Login component: renders a login form with email and password inputs
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2 px-2 py-2 text-white">
        <img src="./logo.png" alt="" className="mb-4" />
        <Input
          placeholder="E-mail"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full cursor-pointer items-center justify-center rounded-md bg-[#C92A0E] py-2"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
