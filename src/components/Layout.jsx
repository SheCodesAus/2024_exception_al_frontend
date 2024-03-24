import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "../index.css";

export default function Layout() {
  return (
    <div className="bg-bg h-dvh">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
