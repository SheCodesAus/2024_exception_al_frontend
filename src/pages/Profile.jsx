import { Outlet } from "react-router-dom";
import ProfileNav from "../components/ProfileNav";
import { useAuthContext } from "../hooks/use-auth-context";

export default function ProfilePage() {
  const { auth } = useAuthContext();
  return (
    <div>
      {auth.user.is_superuser ? <ProfileNav /> : <></>}
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
