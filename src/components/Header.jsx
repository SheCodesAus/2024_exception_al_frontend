import NavBar from "./NavBar";

export function Header() {
  return (
    <>
      <h1 className="text-3xl text-primary">
        I am the header. I contain the logo, navigation, search bar, login and
        register
      </h1>
      {/* logo*/}
      {/* nav */}
      <NavBar />
      {/* search bar*/}
      {/* login button*/}
      {/* register button*/}
    </>
  );
}
export default Header;
