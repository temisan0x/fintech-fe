import Image from "next/image";
import React from "react";

export default function LatestInsights() {
  const articles = [
    {
      id: 1,
      image: "/img/article1.png",
      category: "Mobile Banking",
      title: "5 Smart Ways to Save Money Without Sacrificing Your Lifestyle",
      link: "/articles/save-money-lifestyle",
    },
    {
      id: 2,
      image: "/img/article2.png",
      category: "Mobile Banking",
      title: "How to Spot and Avoid Online Banking Scams Like a Pro",
      link: "/articles/avoid-banking-scams",
    },
    {
      id: 3,
      image: "/img/article3.png",
      category: "Mobile Banking",
      title: "The Future of Digital Banking: What to Expect in 2025 and Beyond",
      link: "/articles/future-of-digital-banking",
    },
  ];

  return (
    <section className="bg-[#F4F6F8] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Latest Information and <br /> Latest Insights from us
          </h2>
          <p className="text-gray-800 mt-2">
            We are ready to provide you with the latest knowledge that can
            enrich your understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {articles.map((article) => (
            <div
              key={article.id}
              className=" overflow-hidden flex flex-col"
            >
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-44 object-cover"
                width={300}
                height={300}
              />

              <div className="py-6 flex flex-col flex-1">
                <p className="text-sm text-gray-500 mb-1 text-right">
                  {article.category}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <a
                  href={article.link}
                  className="mt-4 inline-flex items-center justify-center w-fit
             bg-transparent border border-zinc-700 text-stone-800
             px-2 py-1 text-[12px] rounded-full hover:bg-zinc-200 transition-colors "
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
