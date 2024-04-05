import { useEffect, useState } from "react";
import getWorkshops from "../api/get-workshops";

export default function useWorkshops() {
  const [workshops, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getWorkshops()
      .then((workshops) => {
        setWorkshops(workshops);
      })
      .catch((err) => {
        setError(err)
        console.error(err);
      });
    setIsLoading(false);
  }, []);

  return {workshops, isLoading, error};
}
