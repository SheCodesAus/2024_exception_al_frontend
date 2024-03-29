
import NavBar from "./NavBar";
import Button from "./Button";
import { useAuthContext } from "../hooks/use-auth-context";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const {auth} = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="flex flex-row items-center p-4">
      <img
        className="size-16 mr-4 sm:size-24"
        src="planidea-light.svg"
        alt="planidea logo"
      />
      <section className="flex flex-grow gap-4 items-center flex-row-reverse lg:flex-row lg:justify-between">
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
            {auth.user ? (
              <Button
                variant="action"
                size="sm"
                buttonStyle="outline"
                onClick={handleLogout}
              >
                LOGOUT
              </Button>
            ) : (
              <>
                <Button variant="link" href="/login" size="sm" buttonStyle="outline">
                  LOGIN
                </Button>
                <Button variant="link" href="/signup" size="sm" buttonStyle="solid">
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
