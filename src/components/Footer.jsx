function Footer() {
  return (
    <footer className="w-full bg-primary text-sm p-4">
      <div className="container mx-auto">
        <img className="size-24" src="planidea-light.svg" alt="planidea logo" />
        <section className="flex flex-col sm:flex-row md:flex-row lg:flex-row">
          <div>
            <h3>Copyright {new Date().getFullYear()} | planidea</h3>
          </div>
          <div className="max-w-12">
            <a href="https://www.instagram.com/shecodesaus/?hl=en">
              <img src="/Instagram_Glyph_Black.svg" alt="Instagram Logo" />
            </a>

            <a href="https://www.facebook.com/yourpage">
              <img src="/Facebook_Glyph.svg" alt="Facebook Logo" />
            </a>
          </div>
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
