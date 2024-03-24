import IdeaCard from "./IdeaCard";

function IdeaSnapshot() {
  return (
    <div className="flex flex-col justify-around items-center">
      <h2 className="text-xl font-bold">Latest Ideas</h2>
      <IdeaCard></IdeaCard>
      <button>View All Workshop Ideas</button>
    </div>
  );
}

export default IdeaSnapshot;
