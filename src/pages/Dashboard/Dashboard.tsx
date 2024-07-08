import React, { useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import TopThreeCards from './components/TopThreeCards';
import RecentTransactions from "./components/RecentTransactions"
import { useSidebarStore } from '../../Store Management/useSidebarStore';
import Statistics from "./components/Statistics"
import Header from './components/Header';
import ExpenseBreakdown from "./components/ExpenseBreakdown"
import AddExpenseModal from "./components/AddExpenseModal"
const Dashboard = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebarStore();
  const [isAEOpen,setIsAEOpen]=useState(false)
  return (
    <DefaultLayout>
      {/* <!-- ===== Header Start ===== --> */}
      <Header isAEOpen={isAEOpen} setIsAEOpen={setIsAEOpen} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* <!-- ===== Header End ===== --> */}
      <AddExpenseModal isAEOpen={isAEOpen} setIsAEOpen={setIsAEOpen}/>
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
