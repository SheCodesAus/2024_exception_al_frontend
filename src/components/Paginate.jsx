import { useEffect, useState } from "react";
import Button from "./Button";

const Paginate = ({ postsPerPage, totalPosts, paginate, previousPage, nextPage }) => {
   const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
   }
   const handleClick = (number) => {
    paginate(number);
    setCurrentPage(number);
   }
   
   return (
      <div className="py-8">
         <div className="pagination cursor-pointer flex gap-5">
            <Button buttonType="action" onClick={previousPage}  buttonStyle="plain" classes="text-secondary font-semibold">
               Prev
            </Button>
            {pageNumbers.map((number) => (
               <Button 
                  buttonType="action"
                  buttonStyle="plain"
                  key={number}
                  onClick={() => handleClick(number)}
                  classes={`rounded-full w-10 h-10 ${currentPage === number ? "bg-primary text-white" : "border-1 border-primary text-black"}`}
               >
                  {number}
               </Button>
            ))}
            <Button onClick={nextPage} buttonStyle="plain" classes="text-secondary font-semibold">
               Next
            </Button>
         </div>
      </div>
   );
};
 
export default Paginate;