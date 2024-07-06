import React from 'react';

const RecentTransactions = () => {
  const transactions = [
    {
      icon: 'path/to/icon.png',
      title: 'GTR 5',
      category: 'Gadget & Gear',
      amount: '$160.00',
      date: '17 May 2023',
    },
    {
      icon: 'path/to/icon.png',
      title: 'Polo Shirt',
      category: 'XL Fashions',
      amount: '$20.00',
      date: '17 May 2023',
    },
    {
      icon: 'path/to/icon.png',
      title: 'Biriyani',
      category: 'Hajir Biriyani',
      amount: '$10.00',
      date: '17 May 2023',
    },
    {
      icon: 'path/to/icon.png',
      title: 'Taxi Fare',
      category: 'Uber',
      amount: '$12.00',
      date: '17 May 2023',
    },
    {
      icon: 'path/to/icon.png',
      title: 'Keyboard',
      category: 'Gadget & Gear',
      amount: '$22.00',
      date: '17 May 2023',
    },
  ];

  return (
    <div className="w-full text-[#7c7c80]">
      <h2 className="text-2xl mb-4">Recent Transactions</h2>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between mb-4">
          <button className="font-semibold text-purple-500 border-b-2 border-purple-500 pb-2">
            All
          </button>
          <button className="font-semibold text-gray-500 pb-2">Revenue</button>
          <button className="font-semibold text-gray-500 pb-2">Expenses</button>
        </div>
        <div>
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-between py-4 border-b last:border-b-0"
            >
              <div className="flex items-center">
                <img
                  src={'/public/images/dummy-image-RT.png'}
                  alt="icon"
                  className="h-10 w-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {transaction.title}
                  </p>
                  <p className="text-gray-500">{transaction.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">
                  {transaction.amount}
                </p>
                <p className="text-gray-500 text-sm">{transaction.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
