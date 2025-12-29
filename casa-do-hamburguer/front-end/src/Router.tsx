import { createBrowserRouter } from "react-router";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },

  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);

export default router;
