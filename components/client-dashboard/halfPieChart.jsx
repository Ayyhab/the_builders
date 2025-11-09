"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Positive", value: 1048 },
  { name: "Negative", value: 735 },
];

const COLORS = ["#22c55e", "#ef4444"];

export default function CleanPieChart({ score = 50 }) {
  const data = [
    { name: "Score", value: score },
    { name: "Remaining", value: 100 - score },
  ];
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="36.5%"
            cy="40%"
            startAngle={90}
            endAngle={-270}
            innerRadius="40%"
            outerRadius="70%"
            paddingAngle={0}
            labelLine={false}
            label={false}
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-xs uppercase tracking-widest text-neutral-500">
          Score
        </div>{" "}
        <div className="text-5xl font-bold text-neutral-900">{score}</div>
      </div>
    </div>
  );
}
