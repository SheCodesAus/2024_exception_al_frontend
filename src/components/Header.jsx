import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/use-auth-context";
import NavBar from "./NavBar";
import Button from "./Button";
import profilePlaceHolder from "../assets/profile-placeholder.png";
import LogoutIcon from "../assets/icons/logout.png";

export default function Header() {
  const { auth } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="flex flex-row items-center p-4 container mx-auto">
      <img
        className="size-16 mr-4 sm:size-24"
        src="/planidea-light.svg"
        alt="planidea logo"
      />
      <section className="flex flex-grow gap-4 items-center flex-row-reverse md:flex-row md:justify-between">
        <NavBar />

        <div>
          {/* Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search bar
            <input
              type="text"
              placeholder="Search"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none"
            /> */}
            {/* Login button */}
            {auth.user !== null ? (
              <>
                <Link
                  to={`profile/${auth.user.id}`}
                  className="flex items-center gap-3"
                >
                  <img src={profilePlaceHolder} className="w-[40px] block" />
                  <span>{auth.user.first_name}</span>
                </Link>
                <Button
                  variant="action"
                  size="sm"
                  buttonStyle="outline"
                  onClick={handleLogout}
                >
                  <span className="hidden sm:block">LOGOUT</span>
                  <img src={LogoutIcon} className="w-[24px] sm:hidden" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="link"
                  href="/login"
                  size="sm"
                  buttonStyle="outline"
                >
                  LOGIN
                </Button>
                <Button
                  variant="link"
                  href="/signup"
                  size="sm"
                  buttonStyle="solid"
                >
                  REGISTER
                </Button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
