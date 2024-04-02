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
      <section className="sm:flex sm:flex-col md:flex md:flex-row m-5">
        <div className="m-6">
          <IdeaCard
            id={mockIdeaProperties.id}
            plannedDate={mockIdeaProperties.plannedDate}
            image={mockIdeaProperties.image}
            title={mockIdeaProperties.title}
            description={mockIdeaProperties.description}
            attendeeTarget={mockIdeaProperties.attendeeTarget}
            mentorTarget={mockIdeaProperties.mentorTarget}
          />
        </div>
        <div className="m-6">
          <IdeaCard
            id={mockIdeaProperties.id}
            plannedDate={mockIdeaProperties.plannedDate}
            image={mockIdeaProperties.image}
            title={mockIdeaProperties.title}
            description={mockIdeaProperties.description}
            attendeeTarget={mockIdeaProperties.attendeeTarget}
            mentorTarget={mockIdeaProperties.mentorTarget}
          />
        </div>
        <div className="m-6">
          <IdeaCard
            id={mockIdeaProperties.id}
            plannedDate={mockIdeaProperties.plannedDate}
            image={mockIdeaProperties.image}
            title={mockIdeaProperties.title}
            description={mockIdeaProperties.description}
            attendeeTarget={mockIdeaProperties.attendeeTarget}
            mentorTarget={mockIdeaProperties.mentorTarget}
          />
        </div>
      </section>
      <button>View All Workshop Ideas</button>
    </div>
  );
}

export default IdeaSnapshot;
