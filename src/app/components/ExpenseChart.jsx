"use client"

import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Day 1", expenses: 400 },
  { name: "Day 2", expenses: 300 },
  { name: "Day 3", expenses: 500 },
  { name: "Day 4", expenses: 200 },
  { name: "Day 5", expenses: 600 },
];

export default function ExpenseChart() {
  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="expenses" stroke="#028DEE" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
