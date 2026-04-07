import { createBrowserRouter, Outlet } from "react-router";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Home from "./pages/Home.tsx";
import Header from "./components/Header.tsx";
import Page from "./pages/Page.tsx";
import Cart from "./pages/Cart.tsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },

  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/page",
    element: <Page></Page>,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default router;
