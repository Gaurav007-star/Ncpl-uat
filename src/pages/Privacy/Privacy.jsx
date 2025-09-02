import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const Privacy = () => {
  return (
    <div className="h-max w-full font-plein">
      {/* Navbar */}
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-max my-10 px-[10vw] max-[450px]:px-5"
      >
        {/* Heading */}
        <h1 className="font-plein text-[60px] text-primary mb-5 leading-tight">
          Privacy Policy
        </h1>

        <div className="space-y-5 text-gray-700 leading-relaxed">
          {/* Intro */}
          <section>
            <p>
              At{" "}
              <span className="font-semibold">
                NTNL Construction Private Limited
              </span>
              (“Company,” “we,” “our,” or “us”), your privacy is important to
              us. This Privacy Policy explains how we collect, use, and protect
              any personal information that you provide when you visit or use
              our{" "}
              <a
                href="https://www.ntnlconstruction.com/"
                className="text-blue-600 underline"
              >
                Website
              </a>{" "}
              (the “Website”).
            </p>
            <p className="mt-4">
              We are committed to ensuring that your information is safe and
              that you feel confident when sharing details with us. By using our
              Website, you agree to the terms of this Privacy Policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-medium">Contact Forms or Inquiries:</span>{" "}
                When you submit your details (such as your name, phone number,
                email address, or company name) through inquiry forms or by
                email.
              </li>
              <li>
                <span className="font-medium">Communication Data:</span> If you
                call or email us, we may keep records of our correspondence for
                future reference.
              </li>
              <li>
                <span className="font-medium">Technical Information:</span> Like
                most websites, we may collect non-personal data such as your IP
                address, browser type, device information, and pages visited.
              </li>
            </ul>
            <p className="mt-4">
              We do not knowingly collect sensitive personal information unless
              it is voluntarily provided by you for business purposes.
            </p>
          </section>

          {/* How We Use */}
          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Responding to your inquiries and requests.</li>
              <li>
                Maintaining communication regarding business relationships.
              </li>
              <li>Improving our Website, services, and visitor experience.</li>
              <li>Complying with legal requirements and ensuring security.</li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or trade your personal information to third
              parties.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              Data Security
            </h2>
            <p>
              We take the security of your information seriously. Appropriate
              technical and organizational measures are in place to safeguard
              the information we collect. While we make every effort to protect
              your data, please note that no method of online transmission or
              storage can be guaranteed to be 100% secure.
            </p>
          </section>

          {/* Sharing */}
          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              Sharing of Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                With our employees or authorized representatives, strictly for
                business purposes related to your request.
              </li>
              <li>If required by law, regulation, or legal process.</li>
              <li>
                In the case of a merger, acquisition, or restructuring of the
                Company.
              </li>
            </ul>
            <p className="mt-4">
              We do not share your information with unrelated third parties for
              marketing or promotional purposes.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              Cookies and Website Tracking
            </h2>
            <p>
              Like many websites, we may use cookies or tracking tools to
              analyze Website traffic and improve user experience. Cookies are
              small files placed on your device to help us understand how
              visitors interact with our Website. You can accept or decline
              cookies through your browser settings. Declining cookies may limit
              some functionalities.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Request access to the personal information we hold about you.
              </li>
              <li>Ask us to correct inaccuracies in your information.</li>
              <li>
                Request deletion of your data, subject to legal obligations.
              </li>
              <li>
                Withdraw consent for us to process your data (where applicable).
              </li>
            </ul>
          </section>

          {/* Retention */}
          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              Retention of Data
            </h2>
            <p>
              We retain personal information only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy or as
              required by law. Once no longer needed, data will be securely
              deleted or anonymized.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any updates
              will be posted on this page, with a revised “Effective Date.”
              Please review this page periodically to stay informed.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, contact us:
            </p>
            <ul className="mt-4 space-y-2">
              <li>📧 Email: info@ntnlconstruction.com</li>
              <li>📞 Phone: +91 6396722144</li>
              <li>
                🏢 Address: P 28, Awas Vikas, Rudrapur, Udham Singh Nagar,
                Uttarakhand 263153
              </li>
            </ul>
          </section>

          {/* Final Note */}
          <section>
            <h2 className="text-[25px] font-semibold text-gray-900 mb-4">
              Final Note
            </h2>
            <p>
              At NTNL Construction Private Limited, we value the trust you place
              in us. This Privacy Policy is our way of assuring you that your
              information is respected, protected, and used responsibly. We are
              dedicated to building not only strong infrastructure but also
              strong, trustworthy relationships with everyone who visits our
              Website or engages with our services.
            </p>
          </section>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Privacy;
