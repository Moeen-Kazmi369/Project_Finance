import React from 'react';

const StatusTracking = () => {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-semibold text-black">Status and Tracking</h1>
      <div className=" md:text-base text-sm gap-6 mt-6 flex flex-col justify-between">
        <div className="grid grid-cols-2 w-[100%] gap-5">
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="text-[#808080]   font-medium">
              Current Balance
            </label>
            <input
              type="text"
              placeholder="Text input"
              className="pl-3 py-2 bg-transparent  outline-none border border-[#DBD7D7]  rounded-md pr-3  w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="text-[#808080]   font-medium">Paid Off</label>
            <input
              type="text"
              placeholder="Text input"
              className="pl-3 py-2 bg-transparent  outline-none border border-[#DBD7D7]  rounded-md pr-3  w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="text-[#808080]   font-medium">Recurring:</label>
            <input
              type="text"
              placeholder="Text input"
              className="pl-3 py-2 bg-transparent  outline-none border border-[#DBD7D7]  rounded-md pr-3  w-[100%]"
            />
          </div>

          <div className="flex flex-col gap-2 w-[100%]">
            <label className="text-[#808080]   font-medium">Priority</label>
            <input
              type="text"
              placeholder="Text input"
              className="pl-3 py-2 bg-transparent  outline-none border border-[#DBD7D7]  rounded-md pr-3  w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="text-[#808080]   font-medium">Date</label>
            <input
              type="date"
              placeholder="Text input"
              className="pl-3 py-2 bg-transparent  outline-none border border-[#DBD7D7]  rounded-md pr-3  w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusTracking;
