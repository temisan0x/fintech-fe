import React from "react";
import ExpenseChart from "./ExpenseChart";
import { IoWalletSharp } from "react-icons/io5";

export default function ExpertSection() {
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 py-16 ">
        <div className="bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-24">
          <div className="md:w-1/2">
            <div className="p-8 rounded-xl shadow-md bg-[#F5F7FA] ">
              <div className="bg-white p-4">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#6365A2] inline-block rounded-full">
                    <IoWalletSharp color="white" size={30} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-gray-800 font-bold">Expenses</h4>
                    <p className="text-gray-500 font-medium">Total</p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  $118,326.73
                </h3>

                <p className="text-green-600 inline-block bg-teal-100 mt-2 text-sm font-semibold">
                  $56,481.8 (2.7%) <span className="bg-gray-100 text-slate-950">Past 24 hours</span>
                </p>

                <div className="mt-6">
                  <ExpenseChart />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">
              Track Your Expenses
            </h2>
            <p className="text-gray-600 mt-4">
              Easily view and compare your expenses with our intuitive platform.
              Track your spending patterns, set budgets, and make informed
              financial decisions. Stay on top of your finances by understanding
              where your money goes. It's a simple way to take control of your
              financial health.
            </p>
            <button className="mt-6 inline-flex items-center bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-600">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
