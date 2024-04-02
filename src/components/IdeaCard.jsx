/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/use-auth-context";
import FilledHeart from "../assets/icons/heart-filled.svg";
import EmptyHeart from "../assets/icons/heart-unfilled.svg";
import Button from "./Button";

function IdeaCard({
  id,
  plannedDate,
  image,
  title,
  description,
  attendeeTarget,
  mentorTarget,
}) {
  // const { workshopData } = props;
  var date = new Date(plannedDate);
  var formattedDate = date.toLocaleDateString();
  const { auth } = useAuthContext();

  return (
    <div className="flex flex-col items-start justify-center container mx-auto border border-dark rounded-lg max-w-96">
      <section className="object-cover w-full">
        <Link to={`/workshops/${id}`}>
          <img
            src={image}
            alt={`${title} picture of workshop`}
            className="object-cover rounded-lg pb-2 w-full h-40"
          />
        </Link>
        <section className="flex justify-between">
          <Link to={`/workshops/${id}`}>
            <h2 className="justify-start text-xl p-2 md:p-4 ml-4">{title}</h2>
          </Link>
          {/* Add auth.user check */}
          {auth.user ? (
            EOI ? (
              <img src={FilledHeart} className="justify-end p-4 max-w-16" />
            ) : (
              <img src={EmptyHeart} className="justify-end p-4 max-w-16" />
            )
          ) : (
            <Link to="/login">
              <img src={EmptyHeart} className="justify-end p-4 max-w-16" />
            </Link>
          )}
        </section>
      </section>
      <section className="flex flex-col">
        <p className="ml-4">Planned Date: {formattedDate}</p>
        <p className="ml-4">Description: {description}</p>
        <p className="ml-4">Attendee Target:{attendeeTarget}</p>
        <p className="ml-4">Mentor Target: {mentorTarget}</p>
      </section>
      <div className="flex justify-center self-center m-5">
        <Button
          variant="link"
          href={`/workshops/${id}`}
          size="sm"
          buttonStyle="solid"
        >
          More Info
        </Button>
      </div>
    </div>
  );
}

export default IdeaCard;

// <Link to={`/idea/${workshopData.id}`}>
//         <img
//           // src={workshopData.image}
//           alt="Women holding pottery"
//           className="rounded-lg w-auto pb-2"
//           src="../women-holding-pottery.jpg"
//         ></img>
//         <h2 className="text-xl p-2 md:p-4">{workshopData.title}</h2>
//       </Link>
//       <p className="ml-4">Planned Date: {formattedDate}</p>
//       <p className="ml-4">Description: {workshopData.description}</p>
//       <p className="ml-4">{workshopData.attendee_target}</p>
//       <p>{workshopData.mentor_target}</p>
//       <button onClick={() => alert(`View details of ${ideaData.title}`)}>
//         More Info
//       </button>
//     </div>
