import { useParams } from "react-router-dom";
import useWorkshop from "../hooks/use-workshop";
import Button from "../components/Button";

export default function LoginPage() {
  const { id } = useParams();
  const { workshop, isLoading, error } = useWorkshop(id);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  var date = new Date(workshop.plannned_date);
  var formattedDate = date.toLocaleDateString();

  return (
    <>
      <section className="m-auto w-full px-4 sm:max-w-[500px] sm:px-12 py-6">
        <img src={workshop.image} alt=""></img>
        <h1 className="text-3xl font-semibold mb-3 sm:text-4xl text-center">
          {workshop.title}
        </h1>
      </section>
      <section className="mb-5 text-left mx-7">
        <p>Proposed Date: {formattedDate}</p>
      </section>
      <section className="mb-5 text-left mx-7">
        <p>{workshop.description}</p>
      </section>
      <section>
        <p>Location: Perth</p>
        <p>Workshop Delivery: In-Person</p>
      </section>
      <section className="mb-5 text-center mx-7">
        <p className="font-semibold p-3">
          Learners Needed: {workshop.attendee_target}
        </p>
        <Button variant="link" href="/eoi" size="sm" buttonStyle="white">
          I want to learn!
        </Button>
        {/* Optional button to express interest in mentoring */}
        <p className="font-semibold p-3">
          Mentors Needed: {workshop.mentor_target}
        </p>
        <Button variant="link" href="/eoi" size="sm" buttonStyle="white">
          I want to mentor!
        </Button>
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
