import { useParams } from "react-router-dom";
import useWorkshop from "../hooks/use-workshop";

export default function LoginPage() {
  const { id } = useParams();
  const { workshop, isLoading, error } = useWorkshop(id);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  var date = new Date(workshop.plannned_date);
  var formattedDate = date.toLocaleDateString();

  return (
    <>
      <p>Idea Detail Page</p>
      <section>
        <img src={workshop.image} alt={workshop.description}></img>
        <h2>{workshop.title}</h2>
        <p>{workshop.description}</p>
      </section>
      <section>
        <p>Proposed date: {formattedDate}</p>
      </section>
      <section>
        <p>Attendee target: {workshop.attendee_target} </p>
        <p>Mentor target: {workshop.mentor_target} </p>
        <button>I want to learn!</button>
        {/* Optional button to express interest in mentoring */}
        <button>I want to mentor!</button>
      </section>
      {/* <section>
        <p>Ideated by: {workshop.created_by}</p>
        <p>{user.first_name}</p>
        <p>{user.profile_image}</p>
        <p>About the ideator: {user.biography}</p>
      </section> */}
    </>
  );
}
