/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

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

  return (
    <div className="flex flex-col items-center justify-center container mx-auto border border-dark rounded-lg max-w-96">
      <Link to={`/idea/${id}`}>
        <img
          src={image}
          alt={`${title} picture of workshop`}
          className="object-fill rounded-lg pb-2"
        ></img>
        <h2 className="text-xl p-2 md:p-4">{title}</h2>
      </Link>
      <section className="items-start">
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
