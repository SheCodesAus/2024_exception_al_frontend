import Error404 from "../components/Error404";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div>
      <div className="bg-bg h-full font-poppins relative min-h-screen flex flex-col">
        <header>
          <Header />
        </header>
        <main className="flex-1">
          <Error404 />
        </main>
        <Footer />
      </div>
    </div>
  );
}
