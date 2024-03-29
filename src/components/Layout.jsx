import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "../index.css";

export default function Layout() {
  return (
    <div className="bg-bg h-full font-poppins relative min-h-screen flex flex-col">
      <header>
        <Header/>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
