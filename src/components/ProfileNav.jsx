import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/use-auth-context";


export default function ProfileNav() {
  const {auth} = useAuthContext();

  const location = useLocation();
  const isWorkshopActive = location.pathname.includes('workshops');
  const activeStateClass = "font-semibold text-secondary";
  const isSuperUser = auth.user.is_superuser
  return (
    <nav className="p-4">
      <p className="text-2xl text-center my-6">Hello <span className="text-primary-dark font-semibold">{auth.user.first_name}</span>! Welcome back 😎</p>
      <ul className="flex justify-center">
        <li className="border-r-1 border-r border-greyscale-400 pr-6"><Link to="./" className={!isWorkshopActive ? activeStateClass : ""}>My Profile</Link></li>
        <li className="pl-6"><Link to="./manageworkshops" className={isWorkshopActive ? activeStateClass : ""}>{isSuperUser ? "All workshop ideas" : "My workshop ideas"}</Link></li>
      </ul>
    </nav>
  )
}
