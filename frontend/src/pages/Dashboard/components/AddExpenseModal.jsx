import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function AddExpenseModal({ isAEOpen, setIsAEOpen }) {
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [expenseDate, setExpenseDate] = useState('');

  const handleSave = () => {
    // Handle the save logic here
    console.log({ expenseAmount, expenseName, expenseDate });
    setIsAEOpen(false);
  };

  return (
    <>
      <Transition appear show={isAEOpen} as={Fragment}>
        <Dialog
          as="div"
          style={{
            zIndex: 99999999999000,
          }}
          className="relative z-10"
          onClose={() => setIsAEOpen(!isAEOpen)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-sm bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full flex flex-col gap-3 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex mt-4 justify-end">
                    <button onClick={() => setIsAEOpen(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Expense Amount
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-[#dcdcdc] outline-none border-2 px-4 py-3 shadow-sm sm:text-sm"
                      value={expenseAmount}
                      onChange={(e) => setExpenseAmount(e.target.value)}
                      placeholder="$500000"
                    />
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Expense Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-[#dcdcdc] outline-none border-2 px-4 py-3 shadow-sm sm:text-sm"
                      value={expenseName}
                      onChange={(e) => setExpenseName(e.target.value)}
                      placeholder="House rent"
                    />
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Expense Debt Date
                    </label>
                    <input
                      type="date"
                      className="mt-1 block w-full rounded-md border-[#dcdcdc] outline-none border-2 px-4 py-3 shadow-sm sm:text-sm"
                      value={expenseDate}
                      onChange={(e) => setExpenseDate(e.target.value)}
                    />
                  </div>
                  <div className="mt-6 flex justify-center items-center">
                    <button
                      onClick={handleSave}
                      className="w-max inline-flex justify-center rounded-full sm:px-8 border border-transparent bg-[#71299d] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700"
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
