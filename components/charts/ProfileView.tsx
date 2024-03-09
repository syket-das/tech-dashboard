import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  ['x', 'view'],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],
];

export const options = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Profile Views',
  },
  series: {
    1: { curveType: 'function' },
  },
};

const ProfileView = () => {
  return (
    <div className="h-full">
      <Chart
        chartType="LineChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ProfileView;
