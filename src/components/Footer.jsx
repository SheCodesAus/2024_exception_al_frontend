import InstagramLogo from "../assets/icons/instagram.svg";
import FacebookLogo from "../assets/icons/facebook-2.svg";

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
              <img src={InstagramLogo} alt="Instagram Logo" className="w-8" />
            </a>

            <a href="https://www.facebook.com/shecodesaustralia/">
              <img src={FacebookLogo} alt="Facebook Logo" className="w-8" />
            </a>
          </section>
          <section className="flex space-x-4 flex-row">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/termsandconditions" className="hover:text-white">
              Terms & Conditions
            </a>
            <a
              href="https://youtu.be/Ye8mB6VsUHw?si=t8GPJxh3FpjzYYim&t=10"
              className="hover:text-white"
            >
              Cookie Policy
            </a>
            <a href="/contactus" className="hover:text-white">
              Contact Us
            </a>
          </section>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
