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
import AboutUs from "./pages/AboutUs";
import AllWorkshopIdeasPage from "./pages/AllWorkshopIdeas";
import ContactusPage from "./pages/Contactus";
import EditProfileForm from "./components/EditProfileForm";
import IdeaSnapshot from "./components/IdeaSnapshot";
import TermsCondPage from "./pages/TermsCond";
// import PrivacyPolicyPage from "./pages/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/aboutus", element: <AboutUs /> },
      {
        path: "/profile/:slug",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <EditProfileForm /> },
          { path: "", element: <EditProfileForm /> },
          { path: "manageworkshops", element: <IdeaSnapshot filters={[]} /> },
        ],
      },
      {
        path: "/workshopideas/create",
        element: (
          <ProtectedRoute>
            <CreateWorkshopPage />
          </ProtectedRoute>
        ),
      },
      { path: "/workshopideas", element: <AllWorkshopIdeasPage /> },
      // { path: "/privacy", element: <PrivacyPolicyPage /> },
      { path: "/termsandconditions", element: <TermsCondPage /> },
      { path: "/workshopideas/:id", element: <IdeaDetail /> },
      { path: "/contactus", element: <ContactusPage /> },
      { path: "*", element: <NotFound /> },
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
