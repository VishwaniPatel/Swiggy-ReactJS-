import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import RootLayout from "./pages/Root";
import RestaurantDetails from "./pages/RestaurantDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
