import { useCart } from "../context/Carcontext";
import { Link } from "react-router";
import { useState } from "react";
// import HeaderShopp from "../components/HeaderShopp";

const Cart = () => {
  const { cart } = useCart();

  const [quantity, setQuantity] = useState(1);

  function handleSum() {
    setQuantity(quantity + 1);
  }

  function handleSub() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const subtotal = cart.reduce(
    (total: number, item: any) => total + item.price * quantity,
    0,
  );
  const delivery = 8;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen bg-[#161410] text-white">
      {/* <HeaderShopp /> */}

      <main className="mx-auto max-w-5xl px-4 py-8">
        <div>
          <Link to="/page" className="text-gray-500 hover:underline">
            ← Voltar
          </Link>
        </div>
        <h1 className="mb-8 text-3xl font-bold">Seu Carrinho</h1>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Lista de produtos */}
          <div className="space-y-4 lg:col-span-2">
            {cart.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl bg-[#222] p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />

                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-zinc-400">
                      R$ {item.price.toFixed(2) * quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="rounded bg-[#333] px-3 py-1"
                    onClick={handleSub}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="rounded bg-[#333] px-3 py-1"
                    onClick={handleSum}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resumo */}
          <div className="h-fit rounded-xl bg-[#222] p-6">
            <h2 className="mb-4 text-xl font-semibold">Resumo</h2>

            <div className="mb-2 flex justify-between">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>

            <div className="mb-4 flex justify-between">
              <span>Entrega</span>
              <span>R$ {delivery.toFixed(2)}</span>
            </div>

            <div className="mb-6 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>

            <button className="w-full rounded-lg bg-[#f1e3ca] py-3 font-semibold text-black transition hover:scale-105">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
