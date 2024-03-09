'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Gauge = () => {
  const GaugeComponent = dynamic(() => import('react-gauge-component'), {
    ssr: false,
  });
  return (
    <div className="w-full h-full ">
      <div className="flex flex-wrap justify-center items-center gap-4 min-h-full">
        <div className="w-[300px] h-[300px] ">
          <GaugeComponent />

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
