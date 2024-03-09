'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Gauge = () => {
  const GaugeComponent = dynamic(() => import('react-gauge-component'), {
    ssr: false,
  });

  const kbitsToMbits = (value: any) => {
    if (value >= 1000) {
      value = value / 1000;
      if (Number.isInteger(value)) {
        return value.toFixed(0) + ' mbit/s';
      } else {
        return value.toFixed(1) + ' mbit/s';
      }
    } else {
      return value.toFixed(0) + ' kbit/s';
    }
  };

  return (
    <div className="w-full h-full ">
      <div className="flex flex-wrap justify-center items-center gap-4 min-h-full">
        <div className="w-[300px] h-[300px] ">
          <GaugeComponent
            arc={{
              nbSubArcs: 150,
              colorArray: ['#5BE12C', '#F5CD19', '#EA4228'],
              width: 0.3,
              padding: 0.003,
            }}
            labels={{
              valueLabel: {
                fontSize: 40,
                formatTextValue: kbitsToMbits,
              },
              tickLabels: {
                type: 'outer',
                ticks: [
                  { value: 100 },
                  { value: 200 },
                  { value: 300 },
                  { value: 400 },
                  { value: 500 },
                  { value: 600 },
                  { value: 700 },
                  { value: 800 },
                  { value: 900 },
                  { value: 1000 },
                  { value: 1500 },
                  { value: 2000 },
                  { value: 2500 },
                  { value: 3000 },
                ],
                valueConfig: {
                  formatTextValue: kbitsToMbits,
                },
              },
            }}
            value={900}
            maxValue={3000}
          />

          <p className="text-center text-md font-bold">AI/ML</p>
        </div>
        <div className="w-[300px] h-[300px] ">
          <GaugeComponent value={50} />

          <p className="text-center text-md font-bold">Devops</p>
        </div>
        {/* <div className="w-[300px] h-[300px] ">
          <GaugeComponent />

          <p className="text-center text-md font-bold">Data Engineering</p>
        </div>
        <div className="w-[300px] h-[300px] ">
          <GaugeComponent />

          <p className="text-center text-md font-bold">Data Analysis</p>
        </div> */}
      </div>
    </div>
  );
};

export default Gauge;
