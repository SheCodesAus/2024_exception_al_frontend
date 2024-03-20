import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        {/* Navbar to be added */}
      </header>
      <main>
      <h1>Hello Peeps!!</h1>
        <Outlet/>
      </main>
    </>
  )
}
