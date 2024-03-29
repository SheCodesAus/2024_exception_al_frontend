export function Hero() {
  return (
    <div className="bg-primary flex justify-center">
      <section className="px-4 py-16 flex justify-center items-center space-x-10 container">
        <section className="py-16">
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
          className="max-w-lg hidden lg:block"
        />
        {/* Photo by RF._.studio: https://www.pexels.com/photo/black-female-artist-with-painted-vase-in-creative-room-3817580/ */}
      </section>
    </div>
  );
}
export default Hero;
