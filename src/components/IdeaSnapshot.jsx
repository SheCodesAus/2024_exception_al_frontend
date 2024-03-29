import IdeaCard from "./IdeaCard";

// temporary measure until backend deployed
const mockIdeaProperties = {
  id: "1",
  plannedDate: new Date(),
  image: "https://picsum.photos/200",
  title: "Idea Title",
  description: "Workshop description",
  attendeeTarget: "50",
  mentorTarget: "2",
};

function IdeaSnapshot() {
  return (
    <div className="flex flex-col justify-around items-center container mx-aut p-4">
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
      <button>View All Workshop Ideas</button>
    </div>
  );
}

export default IdeaSnapshot;
