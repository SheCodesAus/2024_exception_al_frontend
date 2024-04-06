import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useAuthContext } from "../hooks/use-auth-context";
import { useEffect } from "react";


export default function LoginPage() {
  const { auth } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.user) {
      navigate("/"); 
    }
  }, [auth, navigate]);
  return <LoginForm />;
}
