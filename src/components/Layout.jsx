import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "../index.css";

export default function Layout() {
  return (
    <div className="[&:has(div.show)]:overflow-y-hidden bg-bg h-full font-poppins relative min-h-screen flex flex-col overflow-hidden">
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
