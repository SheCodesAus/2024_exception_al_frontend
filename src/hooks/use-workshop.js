import { useState, useEffect } from "react";
import getWorkshop from "../api/get-workshop";

export default function useWorkshop(workshopId) {
  const [workshop, setWorkshop] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // Here we pass the projectId to the getProject function.
    getWorkshop(workshopId)
      .then((workshop) => {
        setWorkshop(workshop);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
    // This time we pass the projectId to the dependency array so that the hook  will re-run if the projectId changes.
  }, [workshopId]);
  return { workshop, isLoading, error };
}
