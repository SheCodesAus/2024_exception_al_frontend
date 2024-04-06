import Hero from "../components/Hero";
import IdeaSnapshot from "../components/IdeaSnapshot";

function Home() {
  return (
    <>
      <Hero />
      <IdeaSnapshot itemNumber={6}/>
    </>
  );
}

export default Home;
