import React from "react";

function TermAndCondition() {
  return (
    <div className=" bg-white  font-sans px-4 py-10">
      <div className=" bg-white  mx-auto rounded-2xl p-6 sm:p-10 md:p-14 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 text-center mt-4">
          <span className="text-green-600">T</span>erms & <span className="text-orange-600">C</span>onditions
        </h1>

        <p className="text-gray-500 text-center mb-10 text-sm sm:text-base">
          Last updated: January 2025
        </p>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            1. Introduction
          </h2>
          <p className="text-gray-600 ">
            Welcome to TravelZen! By accessing or using our website and
            services, you agree to be bound by these Terms & Conditions. Please
            read them carefully before using the TravelZen platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            2. User Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
            <li>Provide accurate and truthful account information.</li>
            <li>Keep your login details safe and private.</li>
            <li>
              Do not misuse or exploit our platform in illegal or harmful ways.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            3. Booking & Payments
          </h2>
          <p className="text-gray-600  mb-3">
            TravelZen allows users to explore and book various destinations. All
            bookings are subject to availability and confirmation.
          </p>
          <ul className="list-disc list-inside  text-gray-600 space-y-2">
            <li>Prices may vary depending on season and availability.</li>
            <li>Payment details must be accurate and authorized.</li>
            <li>
              TravelZen is not responsible for errors from third-party
              providers.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            4. Cancellation & Refund Policy
          </h2>
          <p className="text-gray-600 ">
            Cancellation and refund eligibility depends on the specific service
            provider. TravelZen follows the provider's policies. Refunds may
            take 5-10 business days to reflect in your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            5. Privacy Protection
          </h2>
          <p className="text-gray-600">
            Your privacy matters to us. Your personal details will be used only
            according to our Privacy Policy. We do not share sensitive
            information with unauthorized third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            6. Intellectual Property
          </h2>
          <p className="text-gray-600 ">
            All content, images, and designs on TravelZen are the intellectual
            property of TravelZen and cannot be used or copied without
            permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-600 ">
            TravelZen is not liable for any loss, injury, delay, or damage
            resulting from third-party services, natural events, or user
            negligence.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            8. Changes to Terms
          </h2>
          <p className="text-gray-600">
            We may update these Terms & Conditions occasionally. Continued use
            of our platform means you accept the updated terms.
          </p>
        </section>

        <p className="text-gray-700 text-center mt-10 text-sm sm:text-base">
          For any inquiries, contact us at
          <span className="text-indigo-600 font-semibold">
            support@travelzen.com
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default TermAndCondition;
