import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import TopFourCards from './components/TopFourCards';
import OverviewSection from './components/OverviewSection';
import RecentDeals from './components/RecentDeals';
import LeadsSection from './components/LeadsSection';
import RuningProjectsSection from './components/RuningProjectsSection';
import { useSidebarStore } from '../../Store Management/useSidebarStore';
import Header from './components/Header';
const Dashboard = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebarStore();
  return (
    <DefaultLayout>
      {/* <!-- ===== Header Start ===== --> */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* <!-- ===== Header End ===== --> */}
      <TopFourCards />
      <OverviewSection />
      <RecentDeals />
      <LeadsSection />
      <RuningProjectsSection />
    </DefaultLayout>
  );
};

export default Dashboard;
