import InstagramLogo from "../assets/icons/instagram.svg";
import FacebookLogo from "../assets/icons/facebook-2.svg";

function Footer() {
  return (
    <footer className="w-full bg-primary text-sm p-4 ">
      <div className="container mx-auto flex flex-col sm:flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            className="size-24"
            src="/planidea-light.svg"
            alt="planidea logo"
          />
          <h3>Copyright {new Date().getFullYear()} | planidea</h3>
        </div>
        <div className="flex justify-center space-x-4 ">
          <a href="https://www.instagram.com/shecodesaus/?hl=en">
            <img src={InstagramLogo} alt="Instagram Logo" className="w-8" />
          </a>
          <a href="https://www.facebook.com/shecodesaustralia/">
            <img src={FacebookLogo} alt="Facebook Logo" className="w-8" />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row">
          <section className="flex space-x-4">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
