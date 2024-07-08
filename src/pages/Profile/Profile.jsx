import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import profile from '../../../public/images/user/user-01.png';
const Profile = () => {
  return (
    <DefaultLayout>
      <div>
        <img src={profile} />
        <form className="flex flex-col gap-4">
          <div className="grid md:grid-cols-2 grid-cols-1 w-[100%] justify-between gap-5 ">
            <div className="flex flex-col gap-2 w-[100%] text-[#1F2131]">
              <label className="font-medium">First Name</label>
              <input
                type="text"
                className="py-2 bg-[#8251CD3D] border border-[#8251CD3D] outline-none rounded-md px-3"
              />
            </div>
            <div className="flex flex-col gap-2 w-[100%] text-[#1F2131]">
              <label className="font-medium">Last Name</label>
              <input
                type="text"
                className="py-2 bg-[#8251CD3D] border border-[#8251CD3D] outline-none rounded-md px-3"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] text-[#1F2131]">
            <label className="font-medium">Email</label>
            <input
              type="text"
              className="py-2 bg-[#8251CD3D] border border-[#8251CD3D] outline-none rounded-md px-3"
            />
          </div>
          <div className="flex flex-col gap-2 w-[100%] text-[#1F2131]">
            <label className="font-medium">Address</label>
            <input
              type="text"
              className="py-2 bg-[#8251CD3D] border border-[#8251CD3D] outline-none rounded-md px-3"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 w-[100%]  justify-between gap-5 text-[#1F2131]">
            <div className="flex flex-col gap-2 w-[100%] text-[#1F2131]">
              <label className="font-medium">City</label>
              <input
                type="text"
                className="py-2 bg-[#8251CD3D] border border-[#8251CD3D] outline-none rounded-md px-3"
              />
            </div>
            <div className="flex flex-col gap-2 w-[100%] text-[#1F2131]">
              <label className="font-medium">State</label>
              <input
                type="text"
                className="py-2 bg-[#8251CD3D] border border-[#8251CD3D] outline-none rounded-md px-3"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] text-[#1F2131]">
            <label className="font-medium">Password</label>
            <input
              type="text"
              className="py-2 bg-[#8251CD3D] border border-[#8251CD3D] outline-none rounded-md px-3"
            />
          </div>
          <div className="flex gap-5 mt-6 justify-end">
            <button className="border border-black rounded-3xl py-2 px-5 md:text-base text-xs md:w-40 w-30 text-black">
              Cancel
            </button>
            <button className="border border-black bg-[#71299D] text-white md:text-base text-xs rounded-3xl py-2 px-5 md:w-40 w-30 ">
              Update
            </button>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
