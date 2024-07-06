import React from 'react';
import LSR from './LSR';
import LSL from './LSL';

const LeadsSection = () => {
  return (
    <div className=" mt-8 grid gap-3 grid-cols-10">
      <div className=" col-span-10 md:col-span-6">
        <LSR />
      </div>
      <div className=" col-span-10 md:col-span-4 h-full">
        <LSL />
      </div>
    </div>
  );
};

export default LeadsSection;
