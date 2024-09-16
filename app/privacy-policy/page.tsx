const page = () => {
  return (
    <div className="flex flex-col items-center bg-[--light] lg:px-64 py-24 px-5">
      <h1 className="text-[--primary] text-6xl font-semibold">
        Privacy Policy
      </h1>

      <div className="">
        <div className="py-5 flex flex-col gap-4">
          <h1 className="text-[--text]">Our Commitment To Privacy</h1>
          <p>
            Your privacy is important to TOMODEV. To better protect your
            privacy, TOMODEV outlines our information practices, including how
            we collect information, why we collect it, and how it will be used.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-[--text]">What Information Do We Collect?</h1>
          <p>
            TOMODEV collects information to provide digital services to you.
            Your information could be used for web support, customer service,
            project email updates, newsletters, and direct contact about the
            project and services.
          </p>
          <p>
            TOMODEV will not share your information with outside parties unless
            requested and approved by you. However, we reserve the right to
            release information following valid judicial practices, such as a
            court order.
          </p>
          <p>
            No mobile information will be shared with third parties for
            marketing purposes.
          </p>
        </div>

        <div className="py-5 flex flex-col gap-4">
          <h1>Do We Use Cookies?</h1>
          <p>
            TOMODEV uses cookies to enhance your experience on our website,
            remember preferences, and analyze website traffic. Cookies help us
            improve future interactions and services.
          </p>
          <p>
            Cookies collect anonymous data and transmit it to Google to create
            web activity reports for our domain. No personally identifiable
            information is collected unless explicitly submitted.
          </p>
        </div>

        <div className="py-5 flex flex-col gap-4">
          <h1>Remarketing</h1>
          <p>
            TOMODEV uses cookies to display remarketing ads based on your prior
            visits to our website, which may appear across other websites on the
            Internet.
          </p>
          <p>
            You can opt-out of cookies at any time by visiting Google Ads
            Preferences Manager.
          </p>
        </div>

        <div className="py-5 flex flex-col gap-4">
          <h1>Third-Party Websites</h1>
          <p>
            TOMODEV’s website may link to third-party websites. TOMODEV has no
            control over these sites and does not assume responsibility for
            their content or privacy practices.
          </p>
          <p>
            We encourage you to review the privacy policies of any third-party
            website you visit.
          </p>
        </div>

        <div className="py-5 flex flex-col gap-4">
          <h1>TOMODEV Is Committed To Data Security</h1>
          <p>
            We implement appropriate practices to safeguard information
            collected online and offline, including proper use of data and
            accuracy.
          </p>
          <p>
            Online transactions are secured with SSL. Billing information is
            deleted upon project completion.
          </p>
        </div>

        <div className="py-5 flex flex-col gap-4">
          <h1>TOMODEV Is Committed To Protecting Children’s Privacy Online</h1>
          <p>
            We do not collect information from users under the age of 13. If we
            learn that we have collected information from someone under 18, we
            will promptly delete it.
          </p>
          <p>
            We encourage parents and guardians to discuss the risks of providing
            personal information online.
          </p>
        </div>

        <div className="py-5 flex flex-col gap-4">
          <h1>Our Privacy Policy and Your Consent</h1>
          <p>
            By using our website, you consent to TOMODEV’s privacy policy.
            Changes to the policy will be posted on this page.
          </p>
        </div>

        <div className="py-5 flex flex-col gap-4">
          <h1>Contacting TOMODEV</h1>
          <p>
            If you have any questions regarding our privacy policy, you can
            contact TOMODEV at:
          </p>
          <ul>
            <li>TOMODEV</li>
            <li>1234 Web Dev Street</li>
            <li>Suite 100</li>
            <li>City, Country 56789</li>
            <li>info@tomodev.com</li>
            <li>(800) 123-4567</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
