import Input from "./components/Input";

const App = () => {
  return (
    <div className="flex flex-col items-center gap-1 bg-[#161410] p-2">
      <Input placeholder="E-mail" type="text" />
      <Input placeholder="Senha" type="password" />
    </div>
  );
};

export default App;
