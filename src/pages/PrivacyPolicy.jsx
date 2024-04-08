export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-primary flex-col justify-center">
        <section className="flex flex-col justify-center items-center space-y-2">
          <h1 className="lg:text-5xl md:text-6xl sm:text-4xl text-center mt-0 text-bg font-semibold">
            Privacy Policy
          </h1>
          <p className="text-2xl font-semibold text-center mt-0 text-bg">
            Last Updated: 7 April 2024
          </p>
        </section>
        <section className="bg-bg flex flex-col p-4">
          <h2 className="text-lg font-semibold text-start mt-4 text-black">
            Personal Identification Information
          </h2>
          <p className="text-start text-lg">
            The Company may collect personal identification information from
            Users in a variety of ways, including, but not limited to, when
            Users visit our site, register on the site, place an order,
            subscribe to the newsletter, respond to a survey, fill out a form,
            and in connection with other activities, services, features, or
            resources we make available on our Website. Users may be asked for,
            as appropriate, name, email address, mailing address, phone number,
            and credit card information. Users may, however, visit our Website
            anonymously. The Company will collect personal identification
            information from Users only if they voluntarily submit such
            information to us. Users can always refuse to supply personally
            identification information, except that it may prevent them from
            engaging in certain Website-related activities.
          </p>
          <h2 className="text-lg font-semibold text-start mt-4 text-black">
            Non-personal Identification Information
          </h2>
          <p className="text-start text-lg">
            The Company may collect non-personal identification information
            about Users whenever they interact with our Website. Non-personal
            identification information may include the browser name, the type of
            computer and technical information about Users means of connection
            to our Website, such as the operating system and the Internet
            service providers utilized and other similar information.
          </p>
          <h2 className="text-lg font-semibold text-start mt-4 text-black">
            Web Browser Cookies
          </h2>
          <p className="text-start text-lg">
            Our Website may use cookies to enhance User experience.
          </p>
        </section>
      </div>
    </>
  );
}
