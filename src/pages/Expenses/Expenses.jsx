import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Navbar from './components/Header/index';
import WeeklyComparison from './components/WeeklyComparison';
import ExpenseBreakdown from './components/ExpenseBreakdown';
import AnalyticsReport from './components/AnalyticsReport';
const Expenses = () => {
  return (
    <DefaultLayout>
      <Navbar />
      <div className="flex flex-col gap-10 mt-6 text-lg font-medium">
        <WeeklyComparison />
        <AnalyticsReport />
        <ExpenseBreakdown />
      </div>
    </DefaultLayout>
  );
};

export default Expenses;
