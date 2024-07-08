import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import TopThreeCards from './components/TopThreeCards';
import RecentTransactions from "./components/RecentTransactions"
import { useSidebarStore } from '../../Store Management/useSidebarStore';
import Statistics from "./components/Statistics"
import Header from './components/Header';
import ExpenseBreakdown from "./components/ExpenseBreakdown"
const Dashboard = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebarStore();
  return (
    <DefaultLayout>
      {/* <!-- ===== Header Start ===== --> */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* <!-- ===== Header End ===== --> */}
      <TopThreeCards />
      <div className=" mt-8 grid gap-3 grid-cols-10">
      <div className=" col-span-10 md:col-span-3 flex flex-col gap-3">
        <RecentTransactions/>
      </div>
      <div className=" col-span-10 md:col-span-7 h-full flex gap-3 flex-col">
        <Statistics/>
        <ExpenseBreakdown/>
      </div>
    </div>
    </DefaultLayout>
  );
};

export default Dashboard;
