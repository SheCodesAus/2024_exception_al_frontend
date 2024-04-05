
import IdeaSnapshot from "../components/IdeaSnapshot";
import useWorkshops from "../hooks/use-workshops";

export default function AllWorkshopIdeasPage() {
  const { workshops } = useWorkshops();
  return (
    <div className="container mx-auto">
      <IdeaSnapshot itemNumber={workshops.length}/>
    </div>
  );
}
