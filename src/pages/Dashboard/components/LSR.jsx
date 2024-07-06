import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LSR = () => {
  const [chartOptions] = useState({
    series: [
      {
        name: 'STOCK ABC',
        data: [4, 8, 24, 48, 24, 70, 100],
      },
    ],
    options: {
      chart: {
        type: 'area',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: ['#FFC107'],
      },
      fill: {
        colors: ['#FFC107'],
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2024-05-01',
          '2024-05-02',
          '2024-05-03',
          '2024-05-04',
          '2024-05-05',
          '2024-05-06',
          '2024-05-07',
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
      },
      legend: {
        horizontalAlign: 'left',
      },
    },
  });

  const data = [
    {
      duration: 'Yearly',
      count: 4350,
      prevCount: 4350,
      change: '4.63%',
      up: true,
    },
    {
      duration: 'Monthly',
      count: 2763,
      prevCount: 4350,
      change: '4.63%',
      up: true,
    },
    {
      duration: 'Weekly',
      count: 9374,
      prevCount: 4350,
      change: '4.63%',
      up: false,
    },
    {
      duration: 'Daily',
      count: 3629,
      prevCount: 4350,
      change: '4.63%',
      up: true,
    },
  ];
  const [selectedDuration, setSelectedDuration] = useState('30 Days');
  const [durationOpen, setDurationOpen] = useState(false);

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };
  return (
    <div className="rounded-2xl p-6 text-black border border-[#eae9e9] shadow-lg">
      <div className="flex mb-6 justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Leads</h3>
          <p className="text-sm text-gray-600">Lead Statistics</p>
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
      <div className="overflow-x-auto">
        <table className="min-w-full text-left w-max">
          <thead>
            <tr>
              <th className="border-b border-[#c7c6c6] p-2">Duration</th>
              <th className="border-b border-[#c7c6c6] p-2">Count</th>
              <th className="border-b border-[#c7c6c6] p-2">Prev Count</th>
              <th className="border-b border-[#c7c6c6] p-2">Change</th>
              <th className="border-b border-[#c7c6c6] p-2">Statistics</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-[#c7c6c6]">
                <td className="p-2 font-bold">{item.duration}</td>
                <td className="p-2">{item.count}</td>
                <td className="p-2">{item.prevCount}</td>
                <td
                  className={`p-2 ${
                    item.up ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {item.change} {item.up ? '↑' : '↓'}
                </td>
                <td className="p-2">
                  <div className="w-24">
                    <ReactApexChart
                      options={chartOptions.options}
                      series={chartOptions.series}
                      type="area"
                      height={80}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LSR;
