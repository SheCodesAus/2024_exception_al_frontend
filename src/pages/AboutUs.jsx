import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="flex-col justify-center mb-10">
      <section className="bg-primary flex flex-col py-6 h-[240px] md:h-[252px] items-ceenter justify-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mt-0 text-bg">
          About us
        </h1>
      </section>
      <section className="max-w-96 mx-auto my-12">
        <h3 className="text-xl font-semibold text-center my-8">What we do</h3>
        <hr className="w-10 mx-auto mb-8 border-t-primary border-t-2" />
        <p className="text-center text-xl  text-greyscale-800">
          <span className="font-semibold text-black">planidea</span> aims to
          help the Perth community to facilitate ideas they want to turn into in
          person workshops in three simple steps.
        </p>
      </section>
      <section className="bg-bg flex flex-col p-4 container mx-auto">
        <h3 className="text-xl font-semibold text-center my-8">How it Works</h3>
        <hr className="w-10 mx-auto mb-8 border-t-primary border-t-2" />
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="text-center bg-greyscale-300 py-6 px-8 rounded-xl relative md:after:content-['>'] md:after:absolute after:-right-5 md:after:top-1/3 md:after:text-2xl">
            <p className="text-lg mb-4">Step 1</p>
            <span>
              <Link
                to="/workshopideas"
                className="font-semibold text-secondary text-md underline text-center"
              >
                Browse
              </Link>{" "}
              the workshop ideas you would be interested in mentoring or
              learning
            </span>
          </div>
          <div className="text-center bg-greyscale-300 py-6 px-8 rounded-xl relative md:after:content-['>'] md:after:absolute after:-right-5 md:after:top-1/3 md:after:text-2xl">
            <p className="text-lg mb-4">Step 2</p>
            <span>
              <Link
                to="/workshopideas"
                className="font-semibold text-secondary text-md underline text-center"
              >
                Register
              </Link>{" "}
              or{" "}
              <Link
                to="/workshopideas"
                className="font-semibold text-secondary text-md underline text-center"
              >
                Login
              </Link>{" "}
              to express your interest
            </span>
          </div>
          <div className="text-center bg-greyscale-300 py-6 px-8 rounded-xl">
            <p className="text-lg mb-4">Step 3</p>
            <span className="pr-6">
              Don't see an idea you're interested in? Simply create one or
              <Link
                className="font-semibold text-secondary text-md underline text-center px-1"
                to="/contactus"
              >
                Contact Us
              </Link>
              to share!
            </span>
          </div>
        </div>
      </section>

      {/* Photo by RF._.studio: https://www.pexels.com/photo/black-female-artist-with-painted-vase-in-creative-room-3817580/ */}
    </div>
  );
}
