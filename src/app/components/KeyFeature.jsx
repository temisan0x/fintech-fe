import React from "react";
import { IoMdRadioButtonOn } from "react-icons/io";
import Link from "next/link";

export default function KeyFeatures() {
  const features = [
    {
      id: 1,
      title: "Secure Savings Accounts",
      text: "Keep your money safe while earning interest.",
    },
    {
      id: 2,
      title: "Budgeting Tools",
      text: "Help with planning and managing your expenses effectively.",
    },
    {
      id: 3,
      title: "No Hidden Fees",
      text: "Transparent banking with no surprise charges.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Seamless Integration
          </h1>
          <p className="mt-4 text-gray-800 max-w-lg text-lg">
            Experience seamless integration with our mobile banking system.
            Effortlessly manage your savings, make instant transactions, and
            stay in control of your finances. Our user-friendly platform ensures
            smooth access to all your banking needs. Trust us to provide a
            secure and hassle-free financial experience.
          </p>
          <Link
            href="/explore-more"
            className="mt-6 inline-flex items-center justify-center bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-medium transition duration-300 hover:bg-blue-600"
          >
            Explore More
          </Link>
        </div>

        <div className="md:w-1/2 bg-[#F2F7F8] rounded-lg p-6 shadow-sm">
          <div className="bg-white p-5">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Key Feature
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`flex items-center justify-between bg-white p-5 rounded-lg ${
                    index === 0
                      ? "border border-blue-500"
                      : "border-4 border-#F2F7F8 "
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/img/security.png"
                      alt={feature.title}
                      className="w-8 h-8"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-800 mt-1">{feature.text}</p>
                    </div>
                  </div>

                  <IoMdRadioButtonOn color={"#0b86e5"} size={30} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
