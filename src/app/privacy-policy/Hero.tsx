import React from "react";
import TextAnimation from "../../components/animations/TextAnimation";

const Hero = () => {
  return (
    <div className="~pt-[5.75rem]/[9.25rem] ~pb-[3.125rem]/[5.9375rem] ~px-[1rem]/[19.375rem]">
      <TextAnimation delay={0.2}>
        <h1 className="~text-[2rem]/[3.5rem] leading-[110%] md:~text-[2.5rem]/[4rem] font-ppMoriBold text-[#004EB2]">
          Privacy Policy
        </h1>
      </TextAnimation>

      <div className="text-[#002257] flex flex-col ~gap-[1.25rem]/[1.75rem] ~pt-[1.5rem]/[2.5rem]">
        <p className="~text-[0.875rem]/[1.5rem]  leading-[1.4]">
          Starmark Containers is a leading firm based in Saudi Arabia,
          specializing in container solutions, including shipping containers,
          reefer containers, and related services. We are committed to providing
          the best services to our customers while protecting their personal
          information. This Privacy Policy governs the collection, use, and
          protection of data obtained from users of our online platforms,
          including our website. By using development.ikf.in/starmark, you
          consent to the practices described in this Privacy Policy.
        </p>
      </div>

      <div className="~pt-[1rem]/[2rem]">
        <h2 className="~text-[1.25rem]/[2rem]  font-ppMoriSemibold text-[#004EB2]">
          1. Data Collection
        </h2>
        <p className="~text-[0.875rem]/[1.25rem] leading-[1.4] ~pt-[0.5rem]/[1rem]">
          We collect various types of data from our users:
        </p>
        <ul className="list-disc list-inside ~text-[0.8125rem]/[1.25rem]  ~pt-[0.5rem]/[1rem] space-y-2 text-[#002257]">
          <li>
            <strong>Information You Provide Voluntarily:</strong> Name, address,
            email, phone number, and other details you provide when purchasing
            products or services, filling forms, or contacting us. This
            information is used to fulfill your requests and ensure proper
            delivery of our services.
          </li>
          <li>
            <strong>Information Collected Automatically:</strong> Data collected
            via cookies, third-party tracking systems, and server logs when
            visiting our website. We only collect personal information that is
            consciously provided by users through surveys, membership forms,
            emails, or other voluntary channels.
          </li>
        </ul>
      </div>

      {/* Section 2: Use of Collected Data */}
      <div className="~pt-[2rem]/[3rem]">
        <h2 className="~text-[1.25rem]/[2rem] font-ppMoriSemibold text-[#004EB2]">
          2. Use of Collected Data
        </h2>
        <ul className="list-disc list-inside ~text-[0.8125rem]/[1.25rem]  ~pt-[0.5rem]/[1rem] space-y-2 text-[#002257]">
          <li>Facilitate website operations and deliver requested services.</li>
          <li>
            Inform you of products, services, or promotions that may be of
            interest.
          </li>
          <li>Conduct surveys to improve our services.</li>
        </ul>
        <p className="~text-[0.8125rem]/[1.25rem] ~pt-[0.5rem]/[1rem]">
          <strong>Important:</strong> We do not sell, rent, or lease your
          personal information to third parties, now or in the future.
        </p>
      </div>

      {/* Section 3: Data Protection */}
      <div className="~pt-[1rem]/[2rem]">
        <h2 className="~text-[1.25rem]/[2rem]  font-ppMoriSemibold text-[#004EB2]">
          3. Data Protection
        </h2>
        <p className="~text-[0.875rem]/[1.25rem]  leading-[1.4] ~pt-[0.5rem]/[1rem]">
          We follow strict principles of legality, transparency, and purpose
          limitation. Security measures include:
        </p>
        <ul className="list-disc list-inside ~text-[0.8125rem]/[1.25rem] ~pt-[0.5rem]/[1rem] space-y-2 text-[#002257]">
          <li>
            Technical safeguards to protect against unauthorized access, loss,
            or misuse.
          </li>
          <li>Administrative procedures to ensure proper handling of data.</li>
          <li>
            Monitoring accounts and activity to prevent fraud or violations of
            our terms and policies.
          </li>
        </ul>
        <p className="~text-[0.8125rem]/[1.25rem] ~pt-[0.5rem]/[1rem]">
          Data processing is based on our legitimate interest in providing
          secure and reliable services.
        </p>
      </div>

      <div className="~pt-[1rem]/[2rem]">
        <h2 className="~text-[1.25rem]/[2rem]  font-ppMoriSemibold text-[#004EB2]">
          4. Opt-Out / Unsubscribe
        </h2>
        <p className="~text-[0.875rem]/[1.25rem] leading-[1.4] ~pt-[0.5rem]/[1rem]">
          Users can opt out of receiving promotional communications or
          newsletters at any time. Every newsletter contains an automatic
          unsubscribe link. Please note that transactional emails related to
          orders or service requests cannot be opted out of, as they are
          essential for service delivery.
        </p>
      </div>

      <div className="~pt-[1rem]/[2rem]">
        <h2 className="~text-[1.25rem]/[2rem] font-ppMoriSemibold text-[#004EB2]">
          5. Changes to the Privacy Policy
        </h2>
        <p className="~text-[0.875rem]/[1.25rem] leading-[1.4] ~pt-[0.5rem]/[1rem]">
          Starmark Containers may update this Privacy Policy to reflect
          technological or operational changes. Significant changes will be
          communicated via email. Users have the option to consent or decline
          the use of their information under new terms.
        </p>
      </div>

      {/* Section 6: Acceptance of Terms */}
      <div className="~pt-[1rem]/[2rem]">
        <h2 className="~text-[1.25rem]/[2rem] font-ppMoriSemibold text-[#004EB2]">
          6. Acceptance of Terms
        </h2>
        <p className="~text-[0.875rem]/[1.25rem]  leading-[1.4] ~pt-[0.5rem]/[1rem]">
          By using this website, you agree to the terms of this Privacy Policy.
          If you do not agree, please refrain from accessing or using the
          website. Continued use after updates constitutes acceptance of the
          revised terms.
        </p>
      </div>

      {/* Section 7: Our Commitment */}
      <div className="~pt-[1rem]/[2rem] ">
        <h2 className="~text-[1.25rem]/[2rem] font-ppMoriSemibold text-[#004EB2]">
          7. Our Commitment
        </h2>
        <ul className="list-disc list-inside ~text-[0.8125rem]/[1.25rem] space-y-2 text-[#002257] ~pt-[0.5rem]/[1rem]">
          <li>Protecting your personal information is our highest priority.</li>
          <li>
            We collect only the minimum information necessary and use it
            strictly for its intended purpose.
          </li>
          <li>
            We never share your information with third parties without your
            consent.
          </li>
          <li>
            We employ technical, administrative, and physical safeguards to
            ensure data security.
          </li>
          <li>
            Your trust is important to us, and we dedicate our resources to
            protect your personal information.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
