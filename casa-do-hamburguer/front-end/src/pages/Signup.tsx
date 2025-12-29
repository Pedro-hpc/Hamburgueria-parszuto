import { useState } from "react";
import Input from "../components/Input";

// Signup component: renders a signup form with email and password inputs
const Signup = () => {
  //var state to hold email and password values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ name, email, password, confirmPassword, cep });
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2 px-2 py-2 text-white">
        <img src="./logo.png" alt="" className="mb-4" />
        <Input
          placeholder="Nome Completo"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirme sua Senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
        />
        <button
          className="w-full cursor-pointer items-center justify-center rounded-md bg-[#C92A0E] py-2"
          onClick={handleSubmit}
        >
          Criar Conta
        </button>
      </div>
    </form>
  );
};

export default Signup;
