import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import DebtInformation from './DebtInformation';
import PaymentDetails from './PaymentDetails';
import StatusTracking from './StatusTracking';
import { IoIosAdd } from 'react-icons/io';

const AddDebts = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <h1 className="text-xl text-black font-semibold">Add New Debts</h1>
        <DebtInformation />
        <PaymentDetails />
        <StatusTracking />
        <div className="flex items-center gap-1 text-[#878787] font-medium">
          <IoIosAdd size={20} />
          add more
        </div>
        <div className="flex gap-5 mt-6 ">
          <button className="border border-black bg-[#71299D] text-white md:text-base text-xs rounded-3xl py-2 px-5 md:w-40 w-30 ">
            Create Project
          </button>
          <button className="border border-black rounded-3xl py-2 px-5 md:text-base text-xs md:w-40 w-30 text-black">
            Cancel
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddDebts;
