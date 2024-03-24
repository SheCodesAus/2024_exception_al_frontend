import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav>
      <section className="MOBILE-MENU flex lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-dark"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-dark"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-dark"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-12 w-12 text-dark"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-between min-h-[250px] text-3xl">
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
          </div>
        </div>
      </section>

      <div className="DESKTOP-MENU hidden space-x-8 lg:flex items-center">
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
      </div>

      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          right: 0;
          background: #FFFFF8;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </nav>
  );
}
