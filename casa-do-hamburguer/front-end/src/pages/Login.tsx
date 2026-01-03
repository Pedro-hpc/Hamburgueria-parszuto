import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

// Login component: renders a login form with email and password inputs
const Login = () => {
  //var state to hold email and password values
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
        <Link to="/">
          <img src="./logo.png" alt="" className="mb-4" />
        </Link>
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
        <Button title="Login" variant="default" />
        <Button title="Não tenho uma conta" variant="outline" />
      </div>
    </form>
  );
};

export default Login;
