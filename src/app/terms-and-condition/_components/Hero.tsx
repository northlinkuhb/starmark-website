import TextAnimation from "@/components/animations/TextAnimation";
import React from "react";

const Hero = () => {
  return (
    <div className="~pt-[5.75rem]/[9.25rem] ~pb-[3.125rem]/[5.9375rem] ~px-[1rem]/[19.375rem] ">
      {/* Header */}
      <TextAnimation delay={0.2}>
        <h1 className="~text-[2rem]/[3.5rem] leading-[110%] md:~text-[2.5rem]/[4rem] font-ppMoriBold text-[#004EB2]">
          Terms and Conditions
        </h1>
      </TextAnimation>

      <div className="text-[#002257] flex flex-col ~gap-[1.25rem]/[1.75rem] ~pt-[1.5rem]/[2.5rem]">
        <p className="~text-[0.875rem]/[1.5rem] md:~text-[1rem]/[1.5rem] leading-[1.4]">
          Starmark Containers is a company based in Saudi Arabia specializing in
          container solutions, including shipping containers, reefer containers,
          and container-related services. By accessing and using this website,
          you agree to comply with and be bound by the following Terms and
          Conditions.
        </p>
      </div>

      {[
        {
          title: "Age Requirement",
          content:
            "If you are under 18, you may only use this Site under the supervision and with the consent of a parent or guardian.",
        },
        {
          title: "Copyright and Trademark Notice",
          content:
            "All trademarks and service marks on this website are registered and unregistered trademarks of Starmark Containers. The contents of this website, including but not limited to the arrangement and layout, names, logos, and text, are the copyrighted property of Starmark Containers and are protected under applicable copyright, trademark, and other intellectual property laws.",
        },
        {
          title: "Limited License",
          content:
            "You may download material from the Site for non-commercial and personal use only, provided that you retain all copyright and other proprietary notices contained in the materials. Without the Owner’s written permission, you may not distribute, modify, transmit, reuse, re-post, or use the Website’s content for public or commercial purposes.",
        },
        {
          title: "Website Modification and Termination",
          content:
            "Starmark Containers reserves the right to modify or discontinue the Site at any time, temporarily or permanently, without notice. If you violate any provision of these Terms, your authorization to access the Site will automatically terminate.",
        },
        {
          title: "Forward-Looking Statements",
          content:
            "Information on the Site may consist of forward-looking statements that involve risks and uncertainties. Starmark Containers is not responsible for any differences between these statements and actual future events or results.",
        },
        {
          title: "No Warranty",
          content:
            "While Starmark Containers uses reasonable efforts to include accurate and up-to-date information on the Site, no warranties or representations are made regarding its accuracy. The Owner assumes no liability or responsibility for any errors or omissions in the Site’s content.",
        },
        {
          title: "Limitation of Liability and Disclaimer",
          content:
            "Your use of the Site is at your own risk. Starmark Containers shall not be liable for any direct, indirect, special, incidental, or consequential damages arising from the use, or inability to use, the materials on this Site. Everything on the Site is provided “as is” without warranty of any kind, either expressed or implied.",
        },
        {
          title: "Electronic Communications",
          content:
            "When you communicate with Starmark Containers electronically, you consent to receive communications from the Owner electronically. All agreements, notices, disclosures, and other communications provided electronically satisfy any legal requirement that such communications be in writing.",
        },
        {
          title: "Links",
          content:
            "The Owner is not responsible for the privacy practices or content of any off-site pages or other sites linked to the Site. Linking to other off-site pages or sites is at your own risk.",
        },
        {
          title: "No Obligation to Monitor or Review",
          content:
            "Although Starmark Containers may monitor or review discussions, chats, postings, transmissions, bulletin boards, and the like on the Site, the Owner is under no obligation to do so and assumes no responsibility or liability arising from the content of any such locations.",
        },
        {
          title: "Complete Terms and Conditions",
          content:
            "These Terms and Conditions constitute the entire agreement between the user and Starmark Containers and supersede all prior or contemporaneous understandings or agreements, written or oral, regarding the subject matter hereof. Any waiver of these Terms and Conditions provisions will be effective only if in writing and signed by the Owner.",
        },
      ].map((section, idx) => (
        <div key={idx} className="~pt-[1rem]/[2rem]">
          <h2 className="~text-[1.25rem]/[2rem] leading-[120%]  font-ppMoriSemibold text-[#004EB2]">
            {section.title}
          </h2>
          <p className="~text-[0.875rem]/[1.25rem]  leading-[1.4] ~pt-[0.5rem]/[1rem]">
            {section.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Hero;
