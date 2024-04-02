import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/use-auth-context"

export default function ProtectedRoute({children}) {
  const {auth} = useAuthContext();
  if (!auth | auth.user == null) {
    return <Navigate to="/login" />;
  }
  return children;
}
