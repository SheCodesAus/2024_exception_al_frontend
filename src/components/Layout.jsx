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
      <main className="mx-8 my-8">
        <h1 className="text-4xl">I am the main doing main boss things</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          dignissimos, vitae, eligendi voluptatum dolorem ullam repudiandae
          explicabo corrupti perspiciatis unde iusto ipsa. Aperiam porro itaque
          aut architecto doloribus. Consectetur, minus?
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          laudantium in suscipit inventore sapiente a molestias. Totam, autem
          aliquam molestiae quae harum expedita, quidem corrupti fugiat sequi
          temporibus pariatur laudantium?
        </p>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
