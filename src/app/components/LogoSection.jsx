import Image from "next/image";
import React from "react";

export default function LogoSection() {
  return (
    <section className="bg-[#013F71] py-8 w-full mt-16">
      <div className="container mx-auto flex items-center justify-center space-x-8">
        <Image src="/img/logo1.png" alt="Logo 1" width={150} height={50} />
        <Image src="/img/logo2.png" alt="Logo 2" width={150} height={50} />
        <Image src="/img/logo3.png" alt="Logo 3" width={150} height={50} />
        <Image src="/img/logo1.png" alt="Logo 4" width={150} height={50} />
        <Image src="/img/logo3.png" alt="Logo 3" width={150} height={50} />
        <Image src="/img/logo1.png" alt="Logo 1" width={150} height={50} />
      </div>
    </section>
  );
}
