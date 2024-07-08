import React from 'react';
import ReactApexChart from 'react-apexcharts';

const TopTwoCards = () => {
  const areaOptions = {
    series: [
      {
        name: 'Spending',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 100,
        toolbar: {
          show: false,
        },
        width: '100%', // Ensure the chart takes full width
        height: '100%', // Ensure the chart takes full width
      },
      stroke: {
        curve: 'smooth',
        width: 3,
        colors: ['#71299d'], // Set line color to purple
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: '#e8faf3',
              opacity: 0.7,
            },
            {
              offset: 100,
              color: '#f5faf8',
              opacity: 0.9,
            },
          ],
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        y: {
          formatter: (val) => `$${val}`,
        },
      },
    },
  };
  

  const barOptions = {
    series: [
      {
        data: [20, 30, 45, 50, 49, 60],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 100,
        toolbar: {
          show: false,
        },
      },
      colors: ['#7131a1', '#4b7fe2', '#c946f9', '#ea75f5', '#6aa0f5'],
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: false,
          borderRadius: 5,
          columnWidth: '50%', // Adjust this value to create the gap
          barHeight: '80%', // Adjust this value if necessary
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: {
          style: {
            colors: ['#000'],
            fontWeight: '600', // Semibold
          },
          offsetX: 10,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return `$${val / 1000}K`;
          },
          style: {
            colors: ['#000'],
            fontWeight: '600', // Semibold
          },
          offsetX: 0,
          offsetY: 20, // 3rem gap
        },
      },
      grid: {
        show: false,
      },
      legend: {
        show: false,
      },
    },
  };

  const progressBars = [
    { label: 'Gaming PC', value: 309 },
    { label: 'New house', value: 950 },
    { label: 'Summer trip', value: 550 },
    { label: 'Wedding', value: 620 },
    { label: 'Top up game', value: 170 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="">
       <div className=' grid grid-cols-10 gap-1'>
        <div className=' bg-[#71299d] h-[80%] rounded-2xl col-span-6'>

        </div>
       <div className="bg-white col-span-4">
          <h3 className="text-md font-medium text-[#939393]">This Month</h3>
          <h3 className="text-lg font-extrabold text-black">87%</h3>
          <div className='-mt-10'>
          <ReactApexChart
            options={areaOptions.options}
            series={areaOptions.series}
            type="area"
            height={150}
          />
          </div>
        </div>
       </div>
        <div className="bg-white">
          <ReactApexChart
            options={barOptions.options}
            series={barOptions.series}
            type="bar"
            height={200}
          />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold mb-4">My Savings</h2>
        {progressBars.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span>{item.label}</span>
            <div className="flex-1 mx-2 bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-purple-500 h-full"
                style={{ width: `${item.value / 10}%` }}
              ></div>
            </div>
            <span>${item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTwoCards;
