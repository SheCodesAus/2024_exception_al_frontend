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
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">
              LOGIN HERE
            </button>
            {/* Register button (hidden in mobile) */}
            <button className="hidden sm:block px-4 py-2 bg-gray-800 text-white rounded-lg">
              REGISTER HERE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
