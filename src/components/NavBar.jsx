import { Link } from "react-router-dom";

export function NavBar() {
  return (
    // For when we have a hook for useAuth
    // const { auth, setAuth } = useAuth();
    // const handleLogout = () => {
    //   window.localStorage.removeItem("token");
    //   setAuth({ token: null });
    // };
    <>
      <nav
        className="hidden sm:block space-x-8 text-xl"
        aria-label="main navigation"
      >
        <Link to="/" className="hover:text-secondary">
          Home
        </Link>
        <Link to="/aboutus" className="hover:text-secondary">
          About Us
        </Link>
        <Link to="/workshopideas" className="hover:text-secondary">
          Ideas
        </Link>
        <Link to="/contactus" className="hover:text-secondary">
          Contact Us
        </Link>
      </nav>
    </>
  );
}
export default NavBar;
