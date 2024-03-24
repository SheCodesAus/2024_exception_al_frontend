import React from "react";

function Home() {
  return (
    <div className="bg-primary">
      <section className="mx-8 my-8 flex justify-center space-x-10">
        <section className="my-32">
          <h1 className="lg:text-6xl md:text-6xl sm: text-4xl">
            Workshops People Want
          </h1>
          <h2 className="text-2xl">Never have empty workshops again</h2>
          <button>Get Started</button>
          <button>Find out more</button>
        </section>
        <img
          src="../women-holding-pottery.jpg"
          alt="Black women holding up abstract pottery"
          className="max-w-lg hidden lg:block my-32"
        />
        {/* Photo by RF._.studio: https://www.pexels.com/photo/black-female-artist-with-painted-vase-in-creative-room-3817580/ */}
      </section>
    </div>
  );
}

export default Home;
