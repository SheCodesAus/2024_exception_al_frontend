import { Link } from "react-router-dom";

function IdeaCard() {
  //need a const link for idea//

  return (
    <div className="container mx-auto border border-black rounded-lg"> 
        <img alt="Women holding pottery" className="rounded-lg w-auto pb-2" src="../women-holding-pottery.jpg"></img>
        <h1 className="text-xl p-2 md:p-4">IdeaWorkshop Title</h1>
                <p className="ml-4">attendees</p>
                <p className="ml-4">description</p>
                <p className="ml-4">date</p>
                {/*<p>{ideaData.date}</p>
                <p>{ideaData.description}</p>
                <p>{ideaData.attendees}</p>
                <p>{ideaData.mentors}</p>
                <button onClick={() => alert(`View details of ${ideaData.title}`)}>
                    More Info
                </button> 
                */}
            
    </div>
  );
}

export default IdeaCard;
