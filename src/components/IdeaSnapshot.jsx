import IdeaCard from "./IdeaCard";
import Button from "./Button";

// temporary measure until backend deployed
const mockIdeaProperties = {
  id: "1",
  plannedDate: "2024-07-08",
  image: "https://picsum.photos/200",
  title: "Idea Title",
  description: "Workshop description",
  attendeeTarget: "50",
  mentorTarget: "2",
};

function IdeaSnapshot() {
  return (
    <div className="flex flex-col justify-around items-center container mx-auto p-4">
      <h2 className="text-xl font-bold">Latest Ideas</h2>
      <IdeaCard
        id={mockIdeaProperties.id}
        plannedDate={mockIdeaProperties.plannedDate}
        image={mockIdeaProperties.image}
        title={mockIdeaProperties.title}
        description={mockIdeaProperties.description}
        attendeeTarget={mockIdeaProperties.attendeeTarget}
        mentorTarget={mockIdeaProperties.mentorTarget}
      />
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
