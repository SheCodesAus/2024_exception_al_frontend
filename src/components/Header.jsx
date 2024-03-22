import NavBar from "./NavBar";
import "../index.css";

export function Header() {
  return (
    <div className="flex flex-row items-center space-x-10 mx-8 my-8">
      <img src="logo.svg" alt="planet expressions" />
      <NavBar />

      {/* search bar*/}
      <button>&#128269;</button>

      {/* hamburger menu for mobile */}
      <button
        id="mobile-trigram-menu"
        className="text-4xl sm:hidden focus:outline-none flex justify-end"
      >
        &#9776;
      </button>

      {/* fun fact, this is the html code for a trigram of heaven, or what we call a hamburger menu */}
      {/* insert login button*/}
      {/* insert register button (to be hidden in mobile)*/}
    </div>
  );
}
export default Header;
