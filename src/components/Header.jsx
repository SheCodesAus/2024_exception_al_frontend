import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="flex flex-row items-center mx-8 my-8">
      <img src="logo.svg" alt="planet expressions" />
      <section className="flex flex-grow justify-between items-center flex-row-reverse lg:flex-row">
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
            <a
              href="/login"
              className="block px-4 py-2 bg-gray-800 text-dark rounded-lg"
            >
              LOGIN
            </a>

            {/* Register button (hidden in mobile) */}
            <a
              href="/signup"
              className="block px-4 py-2 bg-gray-800 text-dark rounded-lg"
            >
              REGISTER
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
