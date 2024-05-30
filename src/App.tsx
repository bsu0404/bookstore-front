import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { BookStoreProvider } from "./context/themeContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/SIgnup";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <Error />{" "}
      </Layout>
    ),
  },
  {
    path: "/books",
    element: (
      <Layout>
        <Books />
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
  {
    path: "/reset",
    element: (
      <Layout>
        <ResetPassword />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/book/:bookId",
    element: (
      <Layout>
        <BookDetail />
      </Layout>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: "/order",
    element: (
      <Layout>
        <Order />
      </Layout>
    ),
  },
]);
function App() {
  return (
    <>
      <BookStoreProvider>
        <ThemeSwitcher />
        <RouterProvider router={router} />
      </BookStoreProvider>
    </>
  );
}

export default App;
