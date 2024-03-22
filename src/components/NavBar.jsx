export function NavBar() {
  return (
    <>
      <nav
        className="hidden sm:block space-x-8 text-xl"
        aria-label="main navigation"
      >
        <a href="/" className="hover:text-secondary">
          Home
        </a>
        <a href="/" className="hover:text-secondary">
          About Us
        </a>
        <a href="/" className="hover:text-secondary">
          Ideas
        </a>
        <a href="/" className="hover:text-secondary">
          Contact Us
        </a>
      </nav>
      {/* list bits here */}
    </>
  );
}
export default NavBar;
