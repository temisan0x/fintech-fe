import Image from "next/image";
import React from "react";

export default function Table() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-semibold text-gray-900 mb-10">
        See Your Shopping List
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="py-3 px-4 text-left text-gray-800 font-medium">
                Transaction Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Amount
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Status
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Transaction ID
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Balance
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-4 px-4 flex items-center space-x-3">
                <Image
                  src="/img/amazon.png"
                  alt="test"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="text-gray-900">Amazon Purchase</span>
              </td>
              <td className="py-4 px-4 text-gray-800 text-center">$5000.00</td>
              <td className="py-4 px-4 font-medium text-green-600 text-center">
                Completed
              </td>
              <td className="py-4 px-4 text-gray-800 text-center">
                TXN9829202
              </td>
              <td className="py-4 px-4 text-gray-800 text-center">$5000</td>
              <td className="py-4 px-4 text-center">
                <button className="bg-transparent text-gray-900 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-blue-800">
                  Trade
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-4 flex items-center space-x-3">
                <Image
                  src="/img/applelogoblack.png"
                  alt="test"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="text-gray-900">Apple</span>
              </td>
              <td className="py-4 px-4 text-gray-800 text-center">$2000.00</td>
              <td className="py-4 px-4 font-medium text-red-600 text-center">
                Pending
              </td>
              <td className="py-4 px-4 text-gray-800 text-center">
                TXN9829202
              </td>
              <td className="py-4 px-4 text-gray-800 text-center">$5000</td>
              <td className="py-4 px-4 text-center">
                <button className="bg-transparent text-gray-900 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-blue-800">
                  Trade
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-4 flex items-center space-x-3">
                <Image
                  src="/img/spotify.png"
                  alt="test"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="text-gray-900">Apple</span>
              </td>
              <td className="py-4 px-4 text-gray-800 text-center">$5000.00</td>
              <td className="py-4 px-4 font-medium text-red-600 text-center">
                Pending
              </td>
              <td className="py-4 px-4 text-gray-800 text-center">
                TXN9829202
              </td>
              <td className="py-4 px-4 text-gray-800 text-center">$5000</td>
              <td className="py-4 px-4 text-center">
                <button className="bg-transparent text-gray-900 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-blue-800">
                  Trade
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}