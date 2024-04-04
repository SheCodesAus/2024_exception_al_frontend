import IdeaCard from "../components/IdeaCard";
import useWorkshops from "../hooks/use-workshops";

export default function AllWorkshopIdeasPage() {
  const { workshops } = useWorkshops();
  return (
    <div>
      {workshops.map((workshop) => (
        <IdeaCard key={workshop.id} workshop={workshop}/>
      ))}
    </div>
  );
}
