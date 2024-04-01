import { useState } from "react";

const useToast = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showToast = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide toast after 3 seconds
  };

  return { showToast, isVisible };
};

export default useToast;
