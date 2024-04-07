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
      })
      .catch((err) => {
        setError(err)
        console.error(err);
      });
    setIsLoading(false);
  }, [setWorkshops]);

  return {workshops, isLoading, error, setWorkshops};
}
