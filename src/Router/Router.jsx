import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Page/Home";
import Login from "../Components/CreateAccount/Login";
import SignUp from "../Components/CreateAccount/SignUp";
import PrivateRoute from "./PrivateRoute";
import Coming from "../Page/Coming";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/comingListing",
        element: <Coming />,
      },
      {
        path: "/comingAbout",
        element: <Coming />,
      },
      {
        path: "/ComingSearch",
        element: <Coming />,
      },
      {
        path: "/comingFavorites",
        element: <Coming />,
      },
    ],
  },
]);
