
export function Hero({children}) {
  return (
    <div className="bg-primary flex justify-center">
      <section className="px-4 py-16 flex justify-center items-center space-x-10 container">
{children}
      </section>
    </div>
  );
}
export default Hero;
