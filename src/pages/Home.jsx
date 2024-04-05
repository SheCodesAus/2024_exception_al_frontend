import Button from "../components/Button";
import Hero from "../components/Hero";
import IdeaSnapshot from "../components/IdeaSnapshot";

function Home() {
  return (
    <>
      <Hero />
      <h2 className="text-3xl text-center mt-16 mb-6">Featured Ideas</h2>
      <IdeaSnapshot itemNumber={6} orderBy="latest" />
      <div className="mx-auto my-6 w-fit">
        <Button
          variant="link"
          href={`/workshops/1`}
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
