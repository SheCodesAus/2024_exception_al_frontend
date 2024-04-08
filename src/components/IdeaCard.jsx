/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/use-auth-context";
import FilledHeart from "../assets/icons/heart-filled.svg";
import EmptyHeart from "../assets/icons/heart-unfilled.svg";
import Button from "./Button";
import BinIcon from "../assets/icons/bin.svg";

function IdeaCard({ workshop, toggleModal, handleEOIClick, handleDeleteClick }) {
  var date = new Date(workshop?.planned_date);
  var formattedDate = date.toLocaleDateString();
  const { auth } = useAuthContext();
  const userIsSuperuser = auth.user && auth.user.is_superuser;
  const navigate = useNavigate();
  const hasExpressedInterest =
    auth.user &&
    workshop.eois.filter((eoi) => eoi.user === auth.user.id).length > 0;
  const handleHeartClick = () => {
    if (!auth || !auth.user) {
      navigate("/login");
      return;
    }
    if (workshop.created_by === auth.user.id) {
      handleEOIClick(workshop.id, "error");
    } else {
      const action = hasExpressedInterest ? "cancel" : "submit";
      handleEOIClick(workshop.id, action);
      toggleModal();
    }
  };
  const handleDeleteBtnClick = () => {
    handleDeleteClick(workshop.id, "delete");
    toggleModal();
  }

  return (
    <>
      <div className="flex flex-col items-start justify-self-center border border-1 border-greyscale-600 rounded-lg max-w-96 w-full overflow-hidden">
        <section className="object-cover w-full">
          <Link to={`/workshopideas/${workshop.id}`} className="h-52 block">
            <img
              src={workshop.image}
              alt={`${workshop.title} picture of workshop`}
              className="object-cover pb-2 w-full h-full"
            />
          </Link>
          <section className="flex justify-between items-start h-18 pt-2 px-4 gap-4 ">
            <Link to={`/workshopideas/${workshop.id}`}>
              <h2 className="justify-start text-lg font-semibold">
                {workshop.title}
              </h2>
            </Link>
            {!userIsSuperuser ? (
              <button onClick={handleHeartClick}>
                <img
                  src={hasExpressedInterest ? FilledHeart : EmptyHeart}
                  className="justify-end max-w-10 h-full"
                  aria-hidden="true"
                  alt=""
                />
                <span className="sr-only">expression of interest</span>
              </button>
            ) : (
              <button className="text-center text-warning" onClick={handleDeleteBtnClick}>
                <img src={BinIcon} alt="" className="min-w-6"/>
                <span className="sr-only">Delete</span>
              </button>
            )}
          </section>
        </section>
        <section className="flex flex-col gap-0.5 px-4 flex-1">
          <span className="line-clamp-4 text-greyscale-700 flex-1 my-2">
            {workshop.description}
          </span>
          <p className="flex gap-1">
            <span className="font-semibold">Planned Date: </span>
            {formattedDate}
          </p>
          <p className="flex gap-1">
            <span className="font-semibold">Attendee:</span>
            {
              workshop.eois.filter((eoi) => eoi.eoi_type === "Attend").length
            } / {workshop.attendee_target}
          </p>
          <p className="flex gap-1">
            <span className="font-semibold">Mentor: </span>
            {workshop.eois.filter((eoi) => eoi.eoi_type === "Mentor").length}
             / {workshop.mentor_target}
          </p>
        </section>
        <div className="flex my-5 w-full px-4 justify-center">
          {!userIsSuperuser && (
            <Button
              buttonType="link"
              href={`/workshopideas/${workshop.id}`}
              size="md"
              buttonStyle="secondary"
            >
              More Info
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default IdeaCard;
