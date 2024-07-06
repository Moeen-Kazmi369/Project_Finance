import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LSL = () => {
  const [selectedDuration, setSelectedDuration] = useState('30 Days');
  const [durationOpen, setDurationOpen] = useState(false);
  const [chartOptions, setChartOptions] = useState({
    series: [14, 23, 21, 17, 15],
    options: {
      chart: {
        type: 'polarArea',
      },
      labels: ['Stared', 'Inprogress', 'Completed', 'Cancel', 'Success'],
      stroke: {
        colors: ['#fff'],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              height:300,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      legend: {
        position: 'bottom', // Position the labels at the bottom
      },
    },
  });
  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };
  return (
    <div className="rounded-2xl h-full flex justify-center items-center md:justify-start flex-col gap-6 p-6 text-black border border-[#eae9e9] shadow-lg">
      <div className="flex justify-between gap-3 w-full items-center">
        <h3 className="text-xl font-semibold">Client Payment Status</h3>
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
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        height={450}
        type="polarArea"
      />
    </div>
  );
};

export default LSL;
