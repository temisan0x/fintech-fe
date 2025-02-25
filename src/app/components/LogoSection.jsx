import Image from "next/image";
import React from "react";

export default function LogoSection() {
  return (
    <section className="bg-[#013F71] py-8 mt-16 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-8">
        <Image
          src="/img/logo1.png"
          alt="Partner Logo 1"
          width={150}
          height={50}
          className="object-contain"
        />
        <Image
          src="/img/logo2.png"
          alt="Partner Logo 2"
          width={150}
          height={50}
          className="object-contain"
        />
        <Image
          src="/img/logo3.png"
          alt="Partner Logo 3"
          width={150}
          height={50}
          className="object-contain"
        />
        <Image
          src="/img/logo1.png"
          alt="Partner Logo 4"
          width={150}
          height={50}
          className="object-contain"
        />
        <Image
          src="/img/logo3.png"
          alt="Partner Logo 5"
          width={150}
          height={50}
          className="object-contain"
        />
        <Image
          src="/img/logo1.png"
          alt="Partner Logo 6"
          width={150}
          height={50}
          className="object-contain"
        />
      </div>
    </section>
  );
}