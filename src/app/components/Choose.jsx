import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";

export default function ChooseUs() {
  const options = [
    {
      id: 1,
      icon: <FaMobileAlt />,
      title: "Mobile Banking",
      text: "Mobile banking offers easy access to savings and instant transactions, giving you control over your finances anytime, anywhere.",
    },
    {
      id: 2,
      icon: <FaCheck />,
      title: "Saving Accounts",
      text: "Saving accounts provide a secure place to grow your money, earn interest over time, and access your earnings easily.",
    },
    {
      id: 3,
      icon: <GiSpeedometer />,
      title: "Instant Transactions",
      text: "Instant transactions allow for quick and secure money transfers, making payments faster and more efficient.",
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Reasons to Choose FintechX from Us
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl text-lg">
          Choose our bank for its seamless mobile banking experience, secure
          savings accounts, and the convenience of instant transactions. It's
          the perfect solution for managing my finances with ease. I trust your
          bank to keep my money safe and accessible anytime, anywhere.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-12">
          {options.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-start"
            >
              <div className="bg-blue-500 text-white p-4 rounded-md text-3xl">
                {option.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mt-6">
                {option.title}
              </h2>
              <p className="text-gray-600 mt-4">{option.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
