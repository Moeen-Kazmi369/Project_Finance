import React from 'react';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { IoArrowDown } from 'react-icons/io5';

const data = [
  {
    id: 0,
    name: 'Housing',
    amount: '$20,000',
    percentage: '12%*',
    month: 'last month',
    list: [
      { id: 0, title: 'House Rent', price: '$12,500', date: '17 May 2023' },
      { id: 1, title: 'House Rent', price: '$12,500', date: '17 May 2023' },
    ],
  },
  {
    id: 1,
    name: 'Housing',
    amount: '$20,000',
    percentage: '12%*',
    month: 'last month',
    list: [
      { id: 0, title: 'House Rent', price: '$12,500', date: '17 May 2023' },
      { id: 1, title: 'House Rent', price: '$12,500', date: '17 May 2023' },
    ],
  },
  {
    id: 2,
    name: 'Housing',
    amount: '$20,000',
    percentage: '12%*',
    month: 'last month',
    list: [
      { id: 0, title: 'House Rent', price: '$12,500', date: '17 May 2023' },
      { id: 1, title: 'House Rent', price: '$12,500', date: '17 May 2023' },
    ],
  },
  {
    id: 3,
    name: 'Housing',
    amount: '$20,000',
    percentage: '12%*',
    month: 'last month',
    list: [
      { id: 0, title: 'House Rent', price: '$12,500', date: '17 May 2023' },
      { id: 1, title: 'House Rent', price: '$12,500', date: '17 May 2023' },
    ],
  },
  {
    id: 4,
    name: 'Housing',
    amount: '$20,000',
    percentage: '12%*',
    month: 'last month',
    list: [
      { id: 0, title: 'House Rent', price: '$12,500', date: '17 May 2023' },
      { id: 1, title: 'House Rent', price: '$12,500', date: '17 May 2023' },
    ],
  },
  {
    id: 5,
    name: 'Housing',
    amount: '$20,000',
    percentage: '12%*',
    month: 'last month',
    list: [
      { id: 0, title: 'House Rent', price: '$12,500', date: '17 May 2023' },
      { id: 1, title: 'House Rent', price: '$12,500', date: '17 May 2023' },
    ],
  },
];
const Breakdown = () => {
  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-2 xl:gap-10 lg:gap-7 gap-5">
      {data.map((item, index) => (
        <div key={index} className=" rounded-lg shadow-lg  ">
          <div className="flex justify-between items-center border-b py-4 bg-[#FAFAFA] p-4 rounded-t-xl">
            <div className="flex items-center gap-3">
              <div className="p-4 bg-[#D2D2D240] rounded-md text-[#878787] text-2xl">
                <MdOutlineMapsHomeWork />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-medium">{item.name}</div>
                <div className="text-xl font-bold text-black">
                  {item.amount}
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center text-black gap-2">
                <div>{item.percentage}</div>
                <IoArrowDown className="text-green-400" />
              </div>
              <div className="text-sm">{item.month}</div>
            </div>
          </div>
          <ul className="flex flex-col gap-4 mt-5 p-4 ">
            {item.list.map((transaction) => (
              <li className="flex items-center justify-between text-black font-semibold">
                <div>{transaction.title}</div>
                <div>
                  <div>{transaction.price}</div>
                  <div className="text-[#878787] font-light text-sm">
                    {transaction.date}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Breakdown;
