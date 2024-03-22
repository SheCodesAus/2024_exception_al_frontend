export function Footer() {
  return (
    <>
      <footer className="text-sm bg-primary">
        <div className="mx-8 my-8">
          <img src="logo.svg" alt="planet expressions" />
          <br />
          <h3>Copyright {new Date().getFullYear()} | Planet Expressions</h3>
          <br />
          <a href="/" className="hover:text-secondary">
            Privacy Policy
          </a>
          <br />
          <br />
          <a href="/" className="hover:text-secondary">
            Terms & Conditions
          </a>
          <br />
          <br />
          <a href="/" className="hover:text-secondary">
            Cookie Policy
          </a>
          <br />
          <br />
          <a href="/" className="hover:text-secondary">
            Contact
          </a>
          <br />
          <br />
        </div>
      </footer>
    </>
  );
}
export default Footer;
