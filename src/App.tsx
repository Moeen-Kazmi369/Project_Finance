import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Dashboard from './pages/Dashboard/Dashboard';
import Expenses from './pages/Expenses/Expenses';
import Revenues from './pages/Revenues/Revenues';
import Savings from "./pages/Savings/Savings"
import Profile from "./pages/Profile/Profile"
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        {/* Main Dashboard Start */}
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Finance | Dashboard" />
              <Dashboard />
            </>
          }
        />
        {/* Dashboard End */}
        {/* Expenses  */}
        <Route
          path="/expenses"
          element={
            <>
              <PageTitle title="Finacne | Expenses" />
              <Expenses />
            </>
          }
        />
        {/* Reveneus  */}
        <Route
          path="/revenues"
          element={
            <>
              <PageTitle title="Finacne | Revenues" />
              <Revenues />
            </>
          }
        />
        {/* Savings */}
        <Route
          path="/savings"
          element={
            <>
              <PageTitle title="Finacne | Savings" />
              <Savings />
            </>
          }
        />
        {/* Profile */}
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Finacne | Profile" />
              <Profile />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
