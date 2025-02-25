import Link from "next/link";
import React from "react";

export default function CtaSection() {
    return (
        <section className=" pt-24 max-w-7xl mx-auto ">
            <div className="max-w-7xl mx-auto px-6 text-center bg-[#0A3554] py-16 rounded-md ">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Take Control of Your Finances
                </h2>
                <p className="text-white mt-4 max-w-2xl mx-auto">
                    Make wise decisions today. Click to start your crypto investment and
                    start building a better future.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/get-started"
                        className="inline-block bg-white text-[#0A3554] px-6 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-gray-100"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/learn-more"
                        className="inline-block border border-white text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-white hover:text-[#0A3554]"
                    >
                        Learn more
                    </Link>
                </div>
            </div>
        </section>
    );
}
