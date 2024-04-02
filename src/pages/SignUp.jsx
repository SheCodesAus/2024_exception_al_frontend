import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import { useAuthContext } from "../hooks/use-auth-context";
import { useEffect } from "react";


export default function SignUpPage() {
  const { auth } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.user) {
      navigate("/"); 
    }
  }, [auth, navigate]);
  return (
    <SignUpForm />
  )
}
