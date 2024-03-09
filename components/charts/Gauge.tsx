'use client';
import React, { useState, useEffect } from 'react';
import GaugeChart from 'react-gauge-chart';

const Gauge = () => {
  return (
    <div className="w-full h-full ">
      <div className="flex flex-wrap justify-center items-center gap-4 min-h-full">
        <div className="w-[150px] h-[150px] ">
          <GaugeChart
            className=""
            id="gauge-chart5"
            nrOfLevels={420}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={['#5BE12C', '#F5CD19', '#EA4228']}
            percent={0.37}
            arcPadding={0.02}
            textColor="black"
          />{' '}
          <p className="text-center text-md font-bold">AI/ML</p>
        </div>
        <div className="w-[150px] h-[150px] ">
          <GaugeChart
            className=""
            id="gauge-chart5"
            nrOfLevels={420}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={['#5BE12C', '#F5CD19', '#EA4228']}
            percent={0.27}
            arcPadding={0.02}
            textColor="black"
          />{' '}
          <p className="text-center text-md font-bold">Devops</p>
        </div>
        <div className="w-[150px] h-[150px] ">
          <GaugeChart
            className=""
            id="gauge-chart5"
            nrOfLevels={420}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={['#5BE12C', '#F5CD19', '#EA4228']}
            percent={0.77}
            arcPadding={0.02}
            textColor="black"
          />{' '}
          <p className="text-center text-md font-bold">Data Engineering</p>
        </div>
        <div className="w-[150px] h-[150px] ">
          <GaugeChart
            className=""
            id="gauge-chart5"
            nrOfLevels={420}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={['#5BE12C', '#F5CD19', '#EA4228']}
            percent={0.07}
            arcPadding={0.02}
            textColor="black"
          />{' '}
          <p className="text-center text-md font-bold">Data Analysis</p>
        </div>
      </div>
    </div>
  );
};

export default Gauge;
