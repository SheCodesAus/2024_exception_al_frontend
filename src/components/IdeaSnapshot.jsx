import IdeaCard from "./IdeaCard";
import useWorkshops from "../hooks/use-workshops";
import LoadingSpinner from "./LoadingSpinner";
import useModal from "../hooks/use-modal";
import Modal from "./Modal";
import EOIForm from "./EOIForm";
import { useState } from "react";
import Toast from "./Toast";
import useToast from "../hooks/use-toast";
import Paginate from "./Paginate";

function IdeaSnapshot({ itemNumber, orderBy }) {
  const { workshops, isLoading } = useWorkshops();
  const { isOpen, toggleModal } = useModal();
  const [selectedWorkshopId, setSelectedWorkshopId] = useState(null);
  const { showToast, isVisible } = useToast();
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const handleEOIClick = (workshopId, type) => {
    setSelectedWorkshopId(workshopId);
    setType(type);
    showToast();
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentWorkshops = workshops.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(workshops.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const sortedWorkshops = [...workshops].sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return orderBy === "latest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <>
      <div className="flex flex-col justify-around items-center mx-auto p-4">
        {isLoading ? (
          <div className="h-full w-full flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {currentWorkshops.map((workshop, index) => {
                if (index < itemNumber) {
                  return (
                    <IdeaCard
                      workshop={workshop}
                      key={index}
                      toggleModal={toggleModal}
                      handleClick={handleEOIClick}
                    />
                  );
                }
              })}
            </div>
            <Paginate
              postsPerPage={postsPerPage}
              totalPosts={workshops.length}
              paginate={paginate}
              previousPage={previousPage}
              nextPage={nextPage}
            />
          </>
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
