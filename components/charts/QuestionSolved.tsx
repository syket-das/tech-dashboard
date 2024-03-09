import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 20,
    pv: 20,
    amt: 20,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const QuestionSolved = () => {
  return (
    <div className="h-full w-full relative ">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      <p className="absolute top-5 left-[35%]  text-center text-lg font-bold text-blue-800 dark:text-gray-500">
        Questions Solved
      </p>
      <h2 className="absolute top-14 left-[45%] text-4xl font-semibold text-gray-900 dark:text-white">
        120
      </h2>
    </div>
  );
};

export default QuestionSolved;
