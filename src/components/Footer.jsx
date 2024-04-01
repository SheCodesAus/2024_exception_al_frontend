function Footer() {
  return (
    <footer className="w-full bg-primary text-sm p-4 ">
      <div className="container mx-auto  ">
        <img
          className="size-24"
          src="/planidea-light.svg"
          alt="planidea logo"
        />
        <section className="flex flex-col sm:flex-row  lg:flex-row space-x-8">
          <section>
            <h3>Copyright {new Date().getFullYear()} | planidea</h3>
          </section>
          <section className="flex">
            <a href="https://www.instagram.com/shecodesaus/?hl=en">
              <img
                src="/Instagram_Glyph_Black.svg"
                alt="Instagram Logo"
                className="w-8"
              />
            </a>

            <a href="https://www.facebook.com/yourpage">
              <img
                src="/Facebook_Glyph.svg"
                alt="Facebook Logo"
                className="w-8"
              />
            </a>
          </section>
          <section className="flex space-x-4 flex-row">
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
        </section>
      </div>
    </footer>
  );
}

export default Footer;
