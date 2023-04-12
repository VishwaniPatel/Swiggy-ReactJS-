import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Main from "./components/Main";
import RootLayout from "./pages/Root";
import RestaurantDetails from "./components/RestaurantDetails";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
