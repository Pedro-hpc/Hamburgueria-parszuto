import Input from "./components/Input";

const App = () => {
  return (
    <div className="flex gap-2 bg-black p-6">
      <Input placeholder="E-mail" type="text" />
      <Input placeholder="Senha" type="password" />
    </div>
  );
};

export default App;
