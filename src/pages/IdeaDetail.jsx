import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";
import postEOI from "../api/post-eoi";
import getWorkshop from "../api/get-workshop";
import { useAuthContext } from "../hooks/use-auth-context";

export default function IdeaDetail() {
  const { id } = useParams();
  const { auth } = useAuthContext();
  const [refetchWorkshop, setRefetchWorkshop] = useState(false);
  const [workshop, setWorkshop] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const hasExpressedInterest =
    auth.user &&
    workshop &&
    workshop.eois.filter(
      (eoi) => eoi.user === auth.user.id && eoi.eoi_type === "Attend"
    ).length > 0;

  const isMentor =
    auth.user &&
    workshop &&
    workshop.eois.filter(
      (eoi) => eoi.user === auth.user.id && eoi.eoi_type === "Mentor"
    ).length > 0;

  useEffect(() => {
    if (!workshop || refetchWorkshop === true) {
      console.log("use effect re-running for getting workshop!", {
        id,
        refetchWorkshop,
      });
      getWorkshop(id)
        .then((workshop) => {
          setWorkshop(workshop);
          setRefetchWorkshop(false);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
          setRefetchWorkshop(false);
        });
    }
  }, [id, workshop, refetchWorkshop]);

  const handleAttendeeClick = async () => {
    try {
      const data = {
        workshopId: id,
        type: "Attend",
      };
      await postEOI(data);
      setRefetchWorkshop(true);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleMentorClick = async () => {
    try {
      const data = {
        workshopId: id,
        type: "Mentor",
      };
      await postEOI(data);
      setRefetchWorkshop(true);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <h1>{error.message}</h1>;
  if (!workshop) return null;

  let formattedCost = "";

  if (workshop.est_cost) {
    const cost = workshop.est_cost;
    formattedCost = new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    }).format(cost);
  }
  const isOpenText = workshop.is_open ? "Yes" : "No";

  var date = new Date(workshop.planned_date);
  var formattedDate = date.toLocaleDateString();

  return (
    <>
      <section className="m-auto w-full px-4 sm:max-w-[500px] sm:px-12 py-6 mb-20">
        <img src={workshop.image} alt="" />
        <h1 className="text-3xl font-semibold mb-3 sm:text-4xl text-center">
          {workshop.title}
        </h1>
      </section>
      <div className="m-auto w-full px-4 sm:max-w-[1100px] sm:px-12 py-6 mb-20">
        <div className="lg:max-w-[500px] md:flex md:flex-row md:justify-between lg:justify-start">
          <section className="mb-5 text-left mx-7">
            <p className="font-semibold">Proposed Date:</p>{" "}
            <p>{formattedDate}</p>
            <br />
            <p className="font-semibold">Location:</p> <p>Perth</p>
            <br />
            <p className="font-semibold">Open:</p> <p> {isOpenText}</p>
          </section>
          <section className="mb-5 text-left mx-7 md:mr-10">
            <p className="font-semibold">Type:</p> <p>In-Person</p>
            <br />
            <p className="font-semibold">Estimated Cost:</p>{" "}
            <p> {formattedCost}</p>
          </section>
        </div>
        <section className="mb-5 text-left mx-7 lg:mr-96">
          <p>{workshop.description}</p>
        </section>

        <section className="mb-5 text-center mx-7 md:text-start">
          {workshop.is_open && (
            <>
              <p className="font-semibold">
                Learners Needed:{" "}
                {
                  workshop.eois.filter((eoi) => eoi.eoi_type === "Attend")
                    .length
                }{" "}
                / {workshop.attendee_target}
              </p>
              <br />
              <Button
                disabled={hasExpressedInterest || isMentor}
                variant="link"
                href="/eoi"
                size="sm"
                buttonStyle="secondary"
                onClick={handleAttendeeClick}
              >
                {hasExpressedInterest ? "I'm attending!" : "I want to learn!"}
              </Button>
              <br />
              <br />
              {/* Conditional rendering for mentor button */}
              {workshop.mentor_target !== 0 && (
                <>
                  <p className="font-semibold">
                    Mentors Needed:{" "}
                    {
                      workshop.eois.filter((eoi) => eoi.eoi_type === "Mentor")
                        .length
                    }
                    / {workshop.mentor_target}
                  </p>
                  <br />
                  <Button
                    disabled={isMentor || hasExpressedInterest}
                    variant="link"
                    href="/eoi"
                    size="sm"
                    buttonStyle="tertiary"
                    onClick={handleMentorClick}
                  >
                    {isMentor ? "I am mentoring!" : "I want to mentor!"}
                  </Button>
                </>
              )}
            </>
          )}
          {/* Conditional rendering for contact organiser when workshop is closed*/}
          {!workshop.is_open && (
            <>
              <p className="font-semibold">
                For more info about this workshop:
              </p>
              <Button
                variant="link"
                href="/eoi"
                size="sm"
                buttonStyle="primary"
              >
                Contact Organiser
              </Button>
            </>
          )}
        </section>
        {/* <section>
        <p>Ideated by: {user.username}</p>
        <p>{user.first_name}</p>
        <p>{user.profile_image}</p>
        <p>About the ideator: {user.biography}</p>
      </section> */}
      </div>
    </>
  );
}
