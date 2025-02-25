import React from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";

export default function ChooseUs() {
    const options = [
        {
            id: 1,
            icon: <MdOutlineVerifiedUser />,
            title: "Fast Transactions",
            text: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            id: 2,
            icon: <MdOutlineVerifiedUser />,
            title: "Encrypted Security",
            text: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            id: 3,
            icon: <MdOutlineVerifiedUser />,
            title: "Seamless Banking",
            text: "Lorem ipsum dolor sit amet consectetur.",
        },
    ];

    return (
        <div className="max-w-7xl px-4 mx-auto mt-10">
            <h1 className="text-3xl font-bold py-5">
                Reasons to Choose <br /> FintecX from Us
            </h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid et
                molestias consequatur, animi quod at quia unde incidunt vitae adipisci
                alias perferendis deserunt hic dolores accusamus rerum ipsa tenetur
                perspiciatis?
            </p>
            <div className="flex mt-10 justify-between">
                {options.map((option) => (
                    <div key={option.id} className="flex flex-col items-start mb-6 bg-white leading-relaxed py-10 px-5 rounded-md">
                        <div className="bg-blue-500 text-white p-4 rounded-md my-4 text-lg">
                            {option.icon}
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">{option.title}</h2>
                            <p>{option.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
