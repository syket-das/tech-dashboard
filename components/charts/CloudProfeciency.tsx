import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Aws',
    Effeciency: 3200,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'GCP',
    Effeciency: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Azure',
    Effeciency: 2000,
    pv: 9800,
    amt: 2290,
  },
];

const CloudProfeciency = () => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Legend />
          <XAxis dataKey="name" />

          <YAxis />

          <Bar
            dataKey="Effeciency"
            fill="#8884d8"
            background={{ fill: '#eee' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CloudProfeciency;
