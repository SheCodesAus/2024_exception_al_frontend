import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function AboutUsPage() {
  return (

    <div className="bg-primary flex-col justify-center">
      <section className="flex flex-col justify-center items-center space-y-2">

        
          <h1 className="lg:text-6xl md:text-6xl sm: text-4xl text-center mt-0 text-bg font-semibold">
            planidea
          </h1>
          
          <h2 className="text-2xl font-semibold text-center mt-0 text-bg">
            workshops people want
          </h2>
          <img
          src="/planidea-light.svg"
          alt="planidea logo"
          className="size-24 mx-auto flex flex-col"
        />
      </section>
      <section className="bg-bg flex flex-col p-4">  
        <h3 className="text-2xl font-semibold text-center">How planidea Works</h3>
        <p className="text-center text-2xl">planidea aims to help the Perth community to facilitate ideas they want to turn into in person workshops in three simple steps.</p>
        <p className="text-center text-2xl">Step 1: Browse the idea workshops you would be interested in mentoring or learning</p>
        <p className="text-center text-2xl">Step 2: Register or Login to express your interest</p>
        <p className="text-center text-2xl">Step 3: Don't see an idea you're interested in? Simply create one or contact us to share!</p>
        <Link
              className="font-semibold text-secondary text-lg underline text-center"
              to="/contactus"
            >
              Contact Us
            </Link>
          
        </section>
        
        {/* Photo by RF._.studio: https://www.pexels.com/photo/black-female-artist-with-painted-vase-in-creative-room-3817580/ */}
        
        
      
    </div>
  );

}