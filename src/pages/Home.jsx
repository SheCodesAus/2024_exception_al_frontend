import Button from "../components/Button";
import Hero from "../components/Hero";
import IdeaSnapshot from "../components/IdeaSnapshot";
import { useAuthContext } from "../hooks/use-auth-context";

function Home() {
  const initialFilters = {date: "newest"}
  const {auth} = useAuthContext();
  return (
    <>
      <Hero>
        <section className="py-16">
          <h1 className="text-5xl lg:text-6xl md:text-6xl text-bg font-semibold">
            Workshops People Want
          </h1>
          <h2 className="text-2xl font-semibold">
            Never have empty workshops again
          </h2>
          <div className="flex space-x-4 py-8">
            <Button
              buttonType="link"
              href={auth?.user ? "/workshopideas" : "/login"}
              size="md"
              buttonStyle="white"
            >
              Get Started
            </Button>
            <Button
              buttonType="link"
              href="/aboutus"
              size="md"
              buttonStyle="black"
            >
              Find Out More
            </Button>
          </div>
        </section>
        <img
          src="../women-holding-pottery.jpg"
          alt="Black women holding up abstract pottery"
          className="max-w-lg hidden lg:block"
        />
        {/* Photo by RF._.studio: https://www.pexels.com/photo/black-female-artist-with-painted-vase-in-creative-room-3817580/ */}
      </Hero>
      <h3 className="text-xl font-semibold text-center my-8">Featured ideas</h3>
      <IdeaSnapshot listingType="simple" filters={initialFilters} />
      <div className="mx-auto my-6 w-fit">
        <Button
          buttonType="link"
          href="/workshopideas"
          size="sm"
          buttonStyle="primary-outline"
        >
          View All Workshop Ideas
        </Button>
      </div>
    </>
  );
}

export default Home;
