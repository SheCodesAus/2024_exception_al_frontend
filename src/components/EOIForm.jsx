import { useState } from "react";
import Button from "./Button";
import postEOI from "../api/post-eoi";
import useWorkshop from "../hooks/use-workshop";
import { useAuthContext } from "../hooks/use-auth-context";
import deleteEOI from "../api/delete-eoi";

function EOIForm({ workshopId, onClose, actionType }) {
  const [eoiDetails, setEoiDetails] = useState({
    type: "",
    workshopId: null,
  });
  const [status, setStatus] = useState("idle");
  const {workshop} = useWorkshop(workshopId);
  const {auth} = useAuthContext();
  const handleClick = (type) => {
    setEoiDetails((prev) => ({ ...prev, type: type, workshopId: workshopId }));
    const newEoiDetails = { ...eoiDetails, type: type, workshopId: workshopId };
    postEOI(newEoiDetails).then((res) => {
      res && setStatus("success");
      window.location.reload();
    });
  };
  const eoiId = workshop && workshop.eois && workshop.eois.find(eoi => eoi.user === auth.user.id)?.id;
  const handleCancel = () => {
    console.log("cancel");
    deleteEOI(eoiId);
    onClose();
  }
  return (
    <div className="m-auto w-full px-4 sm:max-w-[500px] sm:px-12 py-6">
      {status === "idle" ? (
        actionType == "cancel" ? (
          <>
            <p className="text-xl font-semibold mb-6 sm:text-2xl text-center">
              Do you want to cancel your EOI?
            </p>
            <div className="flex gap-3">
              <Button
                size="md"
                buttonStyle="primary-outline"
                buttonType="action"
                onClick={handleCancel}
              >
                Yes, cancel
              </Button>
              <Button
                size="md"
                buttonStyle="secondary"
                buttonType="action"
                onClick={onClose}
              >
                No
              </Button>
            </div>
          </>
        ) : (
          <>
            <p className="text-xl font-semibold mb-6 sm:text-2xl text-center">
              Choose below!
            </p>
            <div className="flex justify-between gap-4">
              <Button
                size="md"
                buttonStyle="tertiary"
                buttonType="action"
                onClick={() => handleClick("Mentor")}
              >
                I want to teach!
              </Button>
              <Button
                size="md"
                buttonStyle="secondary"
                buttonType="action"
                onClick={() => handleClick("Attend")}
              >
                I want to learn!!
              </Button>
            </div>
          </>
        )
      ) : (
        <p className="text-xl">Thank you for your interest!</p>
      )}
    </div>
  );
}

export default EOIForm;
