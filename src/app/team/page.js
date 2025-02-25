import React from "react";
import Features from "../components/FeaturedCard";
import ProfileCard from "../components/ProfileCard";
import Community from "../components/Community";
import Footer from "../components/Footer";

export default function page() {
  const teamMembers = [
    {
      name: "Gotar Pemun Longs",
      role: "Founder",
      imageUrl:
        "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732253199/team/bjshox10yihirj51ynbs.png",
    },
    {
      name: "Adaaku Peter Jr",
      role: "Co-founder/CEO",
      imageUrl:
        "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732253422/team/mzy3zcycnai0hiqhwirc.png",
    },
    {
      name: "Tukura Pishikeni",
      role: "Adviser",
      imageUrl:
        "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732364638/team/kcxsvxzflpv0inzofpe2.png",
      description:
        "Jane specializes in Web3 development, delivering hands-on training and bootcamp leadership.",
    },
    {
      name: "Samuel Victor",
      role: "Senior Web3 Developer",
      imageUrl:
        "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732253873/team/kjpr6rroqix2qefrekuo.png",
    },
    {
      name: "Kunanzang  Luka",
      role: "Senior Web3 Developer",
      imageUrl:
        "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732255822/team/yhrmrjsslusi6fayjnc0.png",
    },
    {
      name: "Itodo Simon",
      role: "Engineer",
      imageUrl:
        "https://res.cloudinary.com/dcl3ecscw/image/upload/v1731674958/team/l5oetfwwv0wf5152gssg.png",
    },
    {
      name: "Dapal Mitong",
      role: "Legal Officer",
      imageUrl:
        "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732364680/team/sw2weamqk3zare7vfcvd.png",
    },
    {
      name: "Bala Nenman Dakup",
      role: "Graphics Designer",
      imageUrl:
        "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732255896/team/bu1rxjwo0wmi98drk1nc.png",
    },
    {
      name: "Kariyol Jennifer",
      role: "Office Assistant",
      imageUrl:
        "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732255958/team/l3b9jpdyg6ktcf2owpx6.png",
    },
    {
      name: "Harrison Titus Lorfa",
      role: "Social Media Manager /Content Writer/ Content Strategist",
      imageUrl:
        "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732364713/team/jdfqu5i1iljhigaxofcq.png",
    },
  ];

  return (
    <main className="mx-auto  w-full px-4 py-10 flex flex-col items-center">
      <section className="py-16 px-6 sm:px-10 lg:px-20  text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            Meet Our Team
            <span className="text-purple-500">At Blockfuse Labs</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed mx-auto max-w-3xl text-center">
            Discover the bright minds shaping the blockchain space! Our Team are
            pioneers, creators, and leaders who drive innovation and inspire the
            next generation in the world of decentralized technology. Blockfuse
            Labs team continues to drive the future of decentralized technology
            across the globe.{" "}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ProfileCard
                key={index}
                imageUrl={member.imageUrl}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </div>
        <div>
          <Community />
        </div>
      </section>
        <div className="w-full">
          <Footer />
        </div>
    </main>
  );
}
