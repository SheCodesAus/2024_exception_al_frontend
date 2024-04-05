import IdeaCard from "./IdeaCard";
import Button from "./Button";
import useWorkshops from "../hooks/use-workshops";

function IdeaSnapshot({itemNumber}) {
  const { workshops } = useWorkshops();
  return (
    <div className="flex flex-col justify-around items-center container mx-auto p-4">
      <h2 className="text-xl font-bold my-6">Latest Ideas</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workshops.map((workshop, index) => {
          if (index < itemNumber) {
            return <IdeaCard workshop={workshop} key={index} />;
          }
        })}
      </div>
      <section className="m-5">
        <Button
          variant="link"
          href={`/workshops/1`}
          size="sm"
          buttonStyle="solid"
        >
          View All Workshop Ideas
        </Button>
      </section>
    </div>
  );
}

export default IdeaSnapshot;
