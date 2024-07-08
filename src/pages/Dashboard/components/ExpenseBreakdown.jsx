import React from 'react';

const expensesData = [
  {
    category: 'Housing',
    amount: 250.0,
    percentage: 15,
    change: 'up',
    color: '#723097',
  },
  {
    category: 'Food',
    amount: 350.0,
    percentage: 8,
    change: 'down',
    color: '#7c7c80',
  },
  {
    category: 'Transportation',
    amount: 50.0,
    percentage: 12,
    change: 'down',
    color: '#7c7c80',
  },
  {
    category: 'Entertainment',
    amount: 80.0,
    percentage: 15,
    change: 'down',
    color: '#7c7c80',
  },
  {
    category: 'Shopping',
    amount: 420.0,
    percentage: 25,
    change: 'up',
    color: '#7c7c80',
  },
  {
    category: 'Others',
    amount: 650.0,
    percentage: 23,
    change: 'up',
    color: '#7c7c80',
  },
];

const getArrow = (change) => {
  return change === 'up' ? '↑' : '↓';
};

const ExpensesCard = ({ category, amount, percentage, change, color }) => (
  <div className="flex justify-between text-[#7c7c80] items-center p-4 bg-white">
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
        {/* Replace with appropriate icons */}
        <span>🏠</span>
      </div>
      <div>
        <p className="text-gray-600">{category}</p>
        <p className="text-black text-lg font-semibold">${amount.toFixed(2)}</p>
        <p
          className="text-xs"
          style={{ color: change === 'up' ? 'red' : 'green' }}
        >
          {percentage}% {getArrow(change)}
        </p>
      </div>
    </div>
    <div>
      <span className="text-2xl " style={{ color:color }}>
        →
      </span>
    </div>
  </div>
);

const ExpensesBreakdown = () => (
  <div className="sm:p-6">
    <div className='flex flex-col sm:flex-row text-[#7c7c80] sm:items-center justify-between'>
    <h2 className="text-2xl ">Expenses Breakdown</h2>
    <p className=" text-sm mt-4 self-end">*Compare to last month</p>

    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 shadow rounded-lg gap-4">
      {expensesData.map((expense, index) => (
        <ExpensesCard
          key={index}
          category={expense.category}
          amount={expense.amount}
          percentage={expense.percentage}
          change={expense.change}
          color={expense.color}
        />
      ))}
    </div>
  </div>
);

export default ExpensesBreakdown;
