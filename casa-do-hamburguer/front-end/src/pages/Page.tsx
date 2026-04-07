import HeaderShopp from "../components/HeaderShopp";
import { useCart } from "../context/Carcontext";

const Page = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-zinc-100">
      <HeaderShopp />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Escolha seu pedido
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl bg-white shadow-md">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              alt="Hambúrguer"
              className="h-52 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Hambúrguer Clássico</h2>
              <p className="mt-2 text-sm text-zinc-600">
                Pão brioche, carne 180g, cheddar, alface e tomate.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">R$ 28,90</span>
                <button
                  className="rounded-lg bg-black px-4 py-2 text-white transition hover:scale-105"
                  onClick={() =>
                    addToCart({
                      id: 1,
                      name: "Hambúrguer Clássico",
                      price: 28.9,
                      image:
                        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
                    })
                  }
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-md">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349"
              alt="Combo Burger"
              className="h-52 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Combo Burger</h2>
              <p className="mt-2 text-sm text-zinc-600">
                Hambúrguer + fritas + refrigerante.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">R$ 39,90</span>
                <button
                  className="rounded-lg bg-black px-4 py-2 text-white transition hover:scale-105"
                  onClick={() =>
                    addToCart({
                      id: 2,
                      name: "Combo Burguer",
                      price: 39.9,
                      image:
                        "https://images.unsplash.com/photo-1550547660-d9450f859349",
                    })
                  }
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-md">
            <img
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add"
              alt="Batata Frita"
              className="h-52 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Batata Frita Especial</h2>
              <p className="mt-2 text-sm text-zinc-600">
                Batata crocante com cheddar e bacon.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">R$ 19,90</span>
                <button
                  className="rounded-lg bg-black px-4 py-2 text-white transition hover:scale-105"
                  onClick={() =>
                    addToCart({
                      id: 3,
                      name: "Batata Frita Especial",
                      price: 19.9,
                      image:
                        "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
                    })
                  }
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
