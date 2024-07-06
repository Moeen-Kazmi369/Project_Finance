import React from 'react';
import RPSL from './RPSL';
import RPSR from './RPSR';

const RuningProjectsSection = () => {
  return (
    <div className=" mt-8 grid gap-3 grid-cols-10">
      <div className=" col-span-10 md:col-span-6">
        <RPSL />
      </div>
      <div className=" col-span-10 md:col-span-4 h-full">
        <RPSR />
      </div>
    </div>
  );
};

export default RuningProjectsSection;
