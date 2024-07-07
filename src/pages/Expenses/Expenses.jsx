import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Navbar from './components/Header/index';
import WeeklyComparison from './components/WeeklyComparison';
import ExpenseBreakdown from './components/ExpenseBreakdown';
const Expenses = () => {
  return (
    <DefaultLayout>
      <Navbar />
      <div className="flex flex-col gap-10 mt-6 text-lg font-medium">
        <WeeklyComparison />
        <ExpenseBreakdown />
      </div>
    </DefaultLayout>
  );
};

export default Expenses;
