import { Link } from "react-router-dom";

export default function TermsCondPage() {
  return (
    <div className="bg-primary flex-col justify-center">
      <section className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-3xl font-semibold mb-3 sm:text-4xl text-center text-white">
          Terms and Conditions
        </h1>
        <p className="text-2xl font-semibold text-center mt-0 text-bg">
          Last Updated: 7 April 2024
        </p>
        <img
          src="/planidea-light.svg"
          alt="planidea logo"
          className="size-24 mx-auto flex flex-col"
        />
      </section>
      <section className="bg-bg flex flex-col p-4">
        <p className="text-start text-lg">
          Welcome to planidea (Website). These terms and conditions govern your
          use of this Website; by using this Website, you accept these terms and
          conditions in full. If you disagree with these terms and conditions or
          any part of these terms and conditions, you must not use this Website.
        </p>
        <h2 className="text-lg font-semibold text-start mt-4 text-black">
          Introduction
        </h2>
        <p className="text-start text-lg">
          The Website is owned and operated by planidea "Company", in Australia.
        </p>
        <h2 className="text-lg font-semibold text-start mt-4 text-black">
          Intellectual Property Rights
        </h2>
        <p className="text-start text-lg">
          Unless otherwise stated, the Company and/or its licensors own the
          intellectual property rights in the Website and material on the
          Website. Subject to the license below, all these intellectual property
          rights are reserved.
        </p>
        <h2 className="text-lg font-semibold text-start mt-4 text-black">
          License to Use Website
        </h2>
        <p className="text-start text-lg">
          You may view, download for caching purposes only, and print pages from
          the Website for your own personal use, subject to the restrictions set
          out below and elsewhere in these terms and conditions. You must not:
          Republish material from this Website including republication on
          another website; Sell, rent, or sub-license material from the Website;
          Reproduce, duplicate, copy, or otherwise exploit material on this
          Website for a commercial purpose; Edit or otherwise modify any
          material on the Website; or Redistribute material from this Website
          except for content specifically and expressly made available for
          redistribution.
        </p>
        <h2 className="text-lg font-semibold text-start mt-4 text-black">
          Acceptable Use
        </h2>
        <p className="text-start text-lg">
          You must not use this Website in any way that causes, or may cause,
          damage to the Website or impairment of the availability or
          accessibility of the Website; or in any way which is unlawful,
          illegal, fraudulent, or harmful, or in connection with any unlawful,
          illegal, fraudulent, or harmful purpose or activity. You must not use
          this Website to copy, store, host, transmit, send, use, publish, or
          distribute any material that consists of (or is linked to) any
          spyware, computer virus, Trojan horse, worm, keystroke logger,
          rootkit, or other malicious computer software. You must not conduct
          any systematic or automated data collection activities (including
          without limitation scraping, data mining, data extraction, and data
          harvesting) on or in relation to this Website without the Company's
          express written consent.
        </p>
        <h2 className="text-lg font-semibold text-start mt-4 text-black">
          Acceptable Use
        </h2>
        <p className="text-start text-lg">
          You must not use this Website in any way that causes, or may cause,
          damage to the Website or impairment of the availability or
          accessibility of the Website; or in any way which is unlawful,
          illegal, fraudulent, or harmful, or in connection with any unlawful,
          illegal, fraudulent, or harmful purpose or activity. You must not use
          this Website to copy, store, host, transmit, send, use, publish, or
          distribute any material that consists of (or is linked to) any
          spyware, computer virus, Trojan horse, worm, keystroke logger,
          rootkit, or other malicious computer software. You must not conduct
          any systematic or automated data collection activities (including
          without limitation scraping, data mining, data extraction, and data
          harvesting) on or in relation to this Website without the Company's
          express written consent.
        </p>
        <Link
          className="font-semibold text-secondary text-lg underline text-center"
          to="/contactus"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
