import React, { useState } from 'react';

const RPSL = () => {
  const [selectedDuration, setSelectedDuration] = useState('30 Days');
  const [durationOpen, setDurationOpen] = useState(false);

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };
  const projects = [
    {
      title: 'IT Solutions',
      progress: '78%',
      color: '#ffba39',
    },
    {
      title: 'IT Solutions',
      progress: '58%',
      color: '#d51414',
    },
    {
      title: 'IT Solutions',
      progress: '68%',
      color: '#424242',
    },
    {
      title: 'IT Solutions',
      progress: '74%',
      color: '#67e852',
    },
    {
      title: 'IT Solutions',
      progress: '28%',
      color: '#589bf5',
    },
    {
      title: 'IT Solutions',
      progress: '38%',
      color: '#9747ff',
    },
  ];
  return (
    <div className="rounded-2xl p-6 text-black border border-[#eae9e9] shadow-lg">
      <div className="flex mb-6 gap-3 justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Runing Projects</h3>
          <p className="text-sm text-gray-600">In last 30 days top projects</p>
        </div>
        <div
          onClick={() => setDurationOpen(!durationOpen)}
          className="rounded border border-[#c7c6c6]  relative pr-5"
        >
          <select
            value={selectedDuration}
            onChange={handleDurationChange}
            className="appearance-none rounded px-2 py-1 outline-none text-sm"
          >
            <option value="30 Days">30 Days</option>
            <option value="7 Days">7 Days</option>
            <option value="1 Day">1 Day</option>
          </select>
          <svg
            className={`fill-[#c7c6c6]  absolute right-2 ${
              durationOpen && 'rotate-180'
            } top-1`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
              fill=""
            />
          </svg>
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        {projects?.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className=" text-md text-[#706a6a] font-medium ">
                {item.title}
              </h3>
              <h4 className=" text-md text-[#706a6a] font-medium ">
                {item.progress}
              </h4>
            </div>

            <div className="w-full bg-[#e3e2e2] rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: item.progress,
                  backgroundColor:item.color
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RPSL;
