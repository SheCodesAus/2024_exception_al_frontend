import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "../index.css";

export default function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <h1>I am the main doing main boss things</h1>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
