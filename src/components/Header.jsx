import NavBar from "./NavBar";
import "../index.css";

export function Header() {
  return (
    <div className="flex flex-row items-center mx-8 my-8">
      <img src="logo.svg" alt="planet expressions" />
      <section className="flex flex-grow justify-between">
        <NavBar />

        <div>
          {/* search bar*/}
          <button>&#128269;</button>
          {/* insert login button*/}
          <button>LOGIN HERE</button>
          {/* insert register button (to be hidden in mobile)*/}
          <button>REGISTER HERE</button>
        </div>
        {/* hamburger menu for mobile */}
        <button
          id="mobile-trigram-menu"
          className="text-4xl sm:hidden focus:outline-none flex justify-end"
        >
          &#9776;
        </button>
        {/* fun fact, this is the html code for a trigram of heaven, or what we call a hamburger menu */}
      </section>
    </div>
  );
}
export default Header;
