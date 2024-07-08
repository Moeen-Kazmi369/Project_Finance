import React, { useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { useSidebarStore } from '../../Store Management/useSidebarStore';
import Header from './components/Header';
import TopTwoCards from './components/TopTwoCards';
const Savings = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebarStore();
  return (
    <DefaultLayout>
      {/* <!-- ===== Header Start ===== --> */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* <!-- ===== Header End ===== --> */}
      <TopTwoCards />
    </DefaultLayout>
  );
};

export default Savings;
