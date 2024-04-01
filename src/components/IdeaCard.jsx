/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/use-auth-context";
import FilledHeart from '../assets/icons/heart-filled.svg';
import EmptyHeart from '../assets/icons/heart-unfilled.svg';

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
    <div className="flex flex-col items-center justify-center container mx-auto border border-dark rounded-lg max-w-96">
      <section className="object-cover w-full">
        <Link to={`/idea/${id}`}>
          <img
            src={image}
            alt={`${title} picture of workshop`}
            className="object-cover rounded-lg pb-2 w-full h-40"
          />
        </Link>
        <section className="flex justify-between">
          <Link to={`/idea/${id}`}>
            <h2 className="justify-start text-xl p-2 md:p-4">{title}</h2>
          </Link>
          {/* need to add logic for when logged in and already expressed interest heart is filled */}
          {auth.user ? (
            <img
              src={EmptyHeart}
              className="justify-end p-4 max-w-16"
            ></img>
          ) : (
            <img
              src={FilledHeart}
              className="justify-end p-4 max-w-16"
            ></img>
          )}
        </section>
      </section>
      <section className="flex flex-col items-start">
        <p className="ml-4">Planned Date: {formattedDate}</p>
        <p className="ml-4">Description: {description}</p>
        <p className="ml-4">Attendee Target:{attendeeTarget}</p>
        <p className="ml-4">Mentor Target: {mentorTarget}</p>
      </section>
      <Link to={`/idea/${id}`}>More Info</Link>
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
