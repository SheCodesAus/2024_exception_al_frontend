import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import { AuthContextProvider } from "./hooks/use-auth-context";
import ProfilePage from "./pages/Profile";
import CreateWorkshopPage from "./pages/CreateWorkshop";
import ProtectedRoute from "./components/ProtectedRoute";
import IdeaDetail from "./pages/IdeaDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/profile/:slug", element: <ProtectedRoute><ProfilePage /></ProtectedRoute> },
      { path: "/workshopideas/create", element: <ProtectedRoute><CreateWorkshopPage /></ProtectedRoute> },
      // { path: "/about", element: <AboutUs /> },
      // { path: "/workshops", element: <Ideas /> },
      // { path: "/contact", element: <Contact /> },
      { path: "/workshops/:id", element: <IdeaDetail /> },
      // { path: "/ideas", element: <AllIdeaDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
