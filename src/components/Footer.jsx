function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-primary text-sm">
      <div className="container mx-auto">
        <img className="size-24" src="planidea-light.svg" alt="planidea logo" />
        <section className="flex flex-col sm:flex-row md:flex-row lg:flex-row">
          <h3>Copyright {new Date().getFullYear()} | planidea</h3>
          <a href="/" className="hover:text-secondary">
            Privacy Policy
          </a>
          <a href="/" className="hover:text-secondary">
            Terms & Conditions
          </a>
          <a href="/" className="hover:text-secondary">
            Cookie Policy
          </a>
          <a href="/" className="hover:text-secondary">
            Contact
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
