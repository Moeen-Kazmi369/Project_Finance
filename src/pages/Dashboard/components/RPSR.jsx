import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RPSR = () => {
  const data = [
    {
      ID: 'P-78',
      Name: 'Product 1',
      Price: '$999.00',
      status: 10,
    },
    {
      ID: 'P-78',
      Name: 'Product 1',
      Price: '$999.00',
      status: 1,
    },
    {
      ID: 'P-78',
      Name: 'Product 1',
      Price: '$999.00',
      status: 0,
    },
    {
      ID: 'P-78',
      Name: 'Product 1',
      Price: '$999.00',
      status: 10,
    },
  ];
  const [selectedDuration, setSelectedDuration] = useState('30 Days');
  const [durationOpen, setDurationOpen] = useState(false);

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };
  return (
    <div className="rounded-2xl p-6 w-full h-full text-black border border-[#eae9e9] shadow-lg">
      <div className="flex mb-6 justify-between items-center">
        <h3 className="font-bold text-title-md text-black">Recent Sale</h3>
        <h3 className="font-medium text-title-xs text-[#5a6dd1]">View All</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-max min-w-full text-left">
          <thead>
            <tr>
              <th className="border-b border-[#c7c6c6] p-2">ID</th>
              <th className="border-b border-[#c7c6c6] p-2">Name</th>
              <th className="border-b border-[#c7c6c6] p-2">Price</th>
              <th className="border-b border-[#c7c6c6] p-2">Status</th>
              <th className="border-b border-[#c7c6c6] p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-[#c7c6c6]">
                <td className="p-2 py-5 font-bold">{item.ID}</td>
                <td className="p-2 py-5">{item.Name}</td>
                <td className="p-2 py-5">{item.Price}</td>
                <td
                  className={`p-2 py-5 flex gap-2 items-center ${
                    item.status > 5
                      ? 'text-green-500'
                      : item.status > 0
                      ? 'text-#ffba39'
                      : 'text-red-500'
                  }`}
                >
                  <span
                    className={`w-3 h-3 rounded-sm ${
                      item.status > 5
                        ? 'bg-green-500'
                        : item.status > 0
                        ? 'bg-[#ffba39]'
                        : 'bg-red-500'
                    }`}
                  ></span>
                  {item.status > 5
                    ? 'Available'
                    : item.status > 0
                    ? 'Low Stock'
                    : 'Out of Stock'}
                </td>
                <td className="p-2 py-5">
                  <div className="flex gap-2 items-center">
                    <img src="/images/icon/icon-RS-action1.svg" />
                    <img src="/images/icon/icon-RS-action2.svg" />
                    <img src="/images/icon/icon-RS-action3.svg" />
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

export default RPSR;
