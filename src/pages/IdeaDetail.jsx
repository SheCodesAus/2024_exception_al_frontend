import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useWorkshop from "../hooks/use-workshop";
import Button from "../components/Button";

export default function IdeaDetail() {
  const { id } = useParams();
  const { workshop, isLoading, error } = useWorkshop(id);
  const [formattedCost, setFormattedCost] = useState("");

  useEffect(() => {
    const formatCost = () => {
      if (workshop && workshop.est_cost) {
        const cost = workshop.est_cost;
        const formattedCost = new Intl.NumberFormat("en-AU", {
          style: "currency",
          currency: "AUD",
        }).format(cost);
        setFormattedCost(formattedCost);
      }
    };

    formatCost();
  }, [workshop]);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  var date = new Date(workshop.plannned_date);
  var formattedDate = date.toLocaleDateString();

  return (
    <>
      <section className="m-auto w-full px-4 sm:max-w-[500px] sm:px-12 py-6">
        <img src={workshop.image} alt="" />
        <h1 className="text-3xl font-semibold mb-3 sm:text-4xl text-center">
          {workshop.title}
        </h1>
      </section>
      <div className="md:flex md:flex-row md:justify-between lg:justify-start">
        <section className="mb-5 text-left mx-7">
          <p>Proposed Date: {formattedDate}</p>
          <p>Location: Perth</p>
          <p>Taking new EOIs: {workshop.is_open}</p>
        </section>
        <section className="mb-5 text-left mx-7 md:mr-10">
          <p>Type: In-Person</p>
          <p>Estimated Cost: {formattedCost}</p>
        </section>
      </div>
      <section className="mb-5 text-left mx-7 lg:mr-96">
        <p>{workshop.description}</p>
      </section>

      <section className="mb-5 text-center mx-7 md:text-start">
        <p className="font-semibold">
          Learners Needed: {workshop.attendee_target}
        </p>
        <Button variant="link" href="/eoi" size="sm" buttonStyle="secondary">
          I want to learn!
        </Button>
        {/* Optional button to express interest in mentoring */}
        <p className="font-semibold">
          Mentors Needed: {workshop.mentor_target}
        </p>
        <Button variant="link" href="/eoi" size="sm" buttonStyle="tertiary">
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
