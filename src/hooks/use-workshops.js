import { useEffect, useState } from "react";
import getWorkshops from "../api/get-workshops";

export default function useWorkshops() {
  const [workshops, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getWorkshops()
      .then((workshops) => {
        setWorkshops(workshops);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        console.error(err);
      });
  }, [setWorkshops]);

  return { workshops, isLoading, error, setWorkshops };
}
