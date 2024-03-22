import NavBar from "./NavBar";

export function Header() {
  return (
    <>
      <h1>
        I am the header. I contain the logo, navigation, search bar, login and
        register
      </h1>
      <img src="logo.svg" alt="planet expressions" />
      {/* nav */}
      <NavBar />
      {/* search bar*/}
      {/* login button*/}
      {/* register button*/}
      <div>
        <button>&#128269;</button>
        <button
          id="mobile-trigram-menu"
          className="text-lg sm:hidden focus:outline-none"
        >
          &#9776;
        </button>
        <nav
          className="hidden sm:block space-x-8 text-3xl"
          aria-label="main navigation"
        >
          <a href="/" className="hover:opacity-80">
            Home
          </a>
          <a href="/" className="hover:opacity-80">
            About Us
          </a>
          <a href="/" className="hover:opacity-80">
            Ideas
          </a>
          <a href="/" className="hover:opacity-80">
            Contact Us
          </a>
        </nav>
      </div>
      {/* fun fact, this is the html code for a trigram of heaven, or what we call a hamburger menu */}
    </>
  );
}
export default Header;
