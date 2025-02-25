import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="bg-[#EAF5F6] overflow-hidden py-16 px-4 mx-auto max-w-7xl mt-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-6 sm:text-5xl lg:text-6xl">
            Modern Banking for a Digital World
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Experience seamless and secure banking built for the future. Enjoy
            fast transactions, encrypted security, and financial freedom—without
            the hassle of traditional banks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link
              href="/trade-now"
              className="inline-flex items-center justify-center bg-[#028DEE] text-white px-6 py-2 rounded-lg text-lg font-medium transition-colors hover:bg-[#026dbb] hover:shadow-lg"
            >
              Trade Now
            </Link>
            <Link
              href="/learn-more"
              className="inline-flex items-center justify-center text-[#028DEE] border border-[#028DEE] px-6 py-2 rounded-lg text-lg font-medium transition-colors hover:bg-[#028DEE] hover:text-white hover:shadow-lg"
            >
              Learn More
            </Link>
          </div>

          <ul className="space-y-3 text-[#063B6B]">
            <li className="flex items-center">
              <FaRegCircleCheck className="bg-[#0b3350] text-lg rounded-full text-white mr-2" />
              <span className="ml-2">Transactions are secure and encrypted</span>
            </li>
            <li className="flex items-center">
              <FaRegCircleCheck className="bg-[#0b3350] text-lg rounded-full text-white mr-2" />
              <span className="ml-2">Seamless banking without traditional banks</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/img/atm.png"
            alt="Illustration of a modern banking ATM"
            width={500}
            height={500}
            className="w-full max-w-[550px] object-cover lg:ml-10 relative"
          />
        </div>
      </div>
    </section>
  );
}