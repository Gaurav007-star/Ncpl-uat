import React from "react";
import { motion } from "framer-motion";

const Term = () => {
  return (
    <div className="bg-gray-50 h-max py-16 px-6 lg:px-20 font-plein ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Heading */}
        <h1 className="font-plein text-[60px] text-primary mb-5 leading-tight">
          Terms and Conditions
        </h1>

        {/* Sections */}
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <section>
            <p>
              At <span className="font-semibold">NTNL Construction Private Limited</span>, we
              respect your privacy and are committed to protecting the personal
              information you share with us. This Privacy Policy explains how we
              collect, use, and safeguard your data when you visit our Website.
            </p>
          </section>

          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email
              address, phone number, and project-related details when you contact
              us through our Website or submit inquiries. Additionally, we may
              collect non-personal data like browser type, IP address, and usage
              patterns to improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p>
              Your information is used to respond to inquiries, provide
              quotations, deliver services, and improve our Website. We do not
              sell or rent your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              Data Protection
            </h2>
            <p>
              We implement strict security measures to protect your personal
              information from unauthorized access, alteration, or disclosure.
              However, no online transmission can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              Third-Party Links
            </h2>
            <p>
              Our Website may contain links to third-party sites. We are not
              responsible for the privacy practices of these external websites,
              and we encourage you to review their policies separately.
            </p>
          </section>

          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              Your Consent
            </h2>
            <p>
              By using our Website, you consent to this Privacy Policy. We may
              update it from time to time, and any changes will be reflected on
              this page.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Term;
