'use client';
import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  [
    { type: 'date', id: 'Date' },
    { type: 'number', id: 'Won/Loss' },
  ],
  [new Date(2023, 2, 4), 10],
  [new Date(2023, 2, 5), 3],
  [new Date(2023, 2, 7), -1],
  [new Date(2023, 2, 8), 2],
  [new Date(2023, 2, 12), -1],
  [new Date(2023, 2, 13), 1],
  [new Date(2023, 2, 15), 1],
  [new Date(2023, 2, 16), -4],
  [new Date(2023, 1, 4), 10],
  [new Date(2023, 1, 5), 3],
  [new Date(2023, 1, 7), -1],
  [new Date(2023, 1, 8), 2],
  [new Date(2023, 1, 12), -1],
  [new Date(2023, 1, 13), 1],
  [new Date(2023, 1, 15), 1],
  [new Date(2023, 1, 16), -4],
];

export const options = {
  title: 'Interview Preparation Strak',
};

const CalendarChart = () => {
  return (
    <div className="w-full scroll-auto h-full ">
      {' '}
      <Chart
        style={{ width: '100%', height: '100%' }}
        options={options}
        chartType="Calendar"
        width="100%"
        height="100%"
        data={data}
      />
    </div>
  );
};

export default CalendarChart;
