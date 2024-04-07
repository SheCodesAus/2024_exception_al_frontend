import { useEffect, useState } from "react";
import IdeaCard from "./IdeaCard";
import LoadingSpinner from "./LoadingSpinner";
import Modal from "./Modal";
import EOIForm from "./EOIForm";
import Toast from "./Toast";
import Paginate from "./Paginate";
import useModal from "../hooks/use-modal";
import useWorkshops from "../hooks/use-workshops";
import useToast from "../hooks/use-toast";
import { applyFilters } from "../utils/filterWorkshop";
import OopsImage from "../assets/oops.jpeg";

function IdeaSnapshot({ listingType, filters }) {
  const { workshops, isLoading } = useWorkshops();
  const { isOpen, toggleModal } = useModal();
  const { showToast, isVisible } = useToast();
  const [selectedWorkshopId, setSelectedWorkshopId] = useState(null);
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [filteredWorkshops, setFilteredWorkshops] = useState([]);
  const handleEOIClick = (workshopId, type) => {
    setSelectedWorkshopId(workshopId);
    setType(type);
    showToast();
  };
  const gridClassNames =
    listingType === "simple"
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 xl:grid-cols-3 w-full ";
  // switch()
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    const sortedWorkshops = applyFilters(workshops, filters);
    setFilteredWorkshops(sortedWorkshops);
  }, [workshops, filters]);

  const currentWorkshops = filteredWorkshops.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  //Pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const previousPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage !== Math.ceil(filteredWorkshops.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-around items-center mx-auto p-4 h-full">
        {isLoading ? (
          <div className="h-full w-full flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : filteredWorkshops.length > 0 ? (
          <>
            <div className={`grid gap-4 ${gridClassNames} justify-center`}>
              {currentWorkshops.map((workshop, index) => {
                return (
                  <IdeaCard
                    workshop={workshop}
                    key={index}
                    toggleModal={toggleModal}
                    handleClick={handleEOIClick}
                  />
                );
              })}
            </div>
            {listingType !== "simple" && (
              <Paginate
                postsPerPage={postsPerPage}
                totalPosts={workshops.length}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
              />
            )}
          </>
        ) : (
          <div className="text-center flex flex-col gap-6 h-full items-center justify-center">
            <img src={OopsImage} alt="oops graphic" className="w-12" />
            <p className="text-xl font-bold">Oopsie!</p>
            <p>
               It seems there are no workshops that match your criteria.
            </p>
          </div>
        )}
      </div>
      {type === "error" ? (
        <Toast
          message="Sorry! Idea owner can't vote."
          type="error"
          isVisible={isVisible}
        />
      ) : (
        <Modal open={isOpen} onClose={toggleModal}>
          <EOIForm
            workshopId={selectedWorkshopId}
            onClose={toggleModal}
            actionType={type}
          />
        </Modal>
      )}
    </>
  );
}

export default IdeaSnapshot;
