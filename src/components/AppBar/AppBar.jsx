/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AppBar({pageTitle, isSidebarOpen, setIsSidebarOpen}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

    return (
      <>
      <div className="bg-white w-full shadow-md rounded-lg flex justify-between p-4">
        <button className="inline-flex items-center pl-1 pr-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          onClick={() => {setIsSidebarOpen(!isSidebarOpen)}}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
          </svg>
        </button>
        <div className="ml-2 inline-flex text-sm sm:text-lg w-full items-center text-gray-500">{pageTitle}</div>
        <div className="flex basis-full gap-4 justify-end items-center text-sm">
          <div className="text-right">
            <p className="text-[#6E6B7B] font-bold text-xs hidden sm:block">Alifia Mutia</p>
            <p className="text-[#6E6B7B] font-normal text-xs hidden sm:block">Selasa, Shift 2 | Kelompok 36</p>
          </div>
          <img
          src="src\assets\3d_avatar_20.png"
          alt="picture-profile"
          onClick={toggleDropdown}
          className="cursor-pointer"
        />
        {isDropdownOpen && (
          <div className="absolute top-24 right-4 bg-white border border-gray-200 shadow-md p-2 rounded-lg">
            {/* Dropdown content */}
            <ul className="font-normal text-xs">
              <li className='mb-1'><Link to="/profile">Profile</Link></li>
              <li className='mb-1'><Link to="/change-pass">Change Password</Link></li>
              <hr className="border-[1px] border-gray-300 mb-1" />
              <a href="/">
                <li className="font-semibold text-[#D5546D] mb-1">Log Out</li>
              </a>

            </ul>
          </div>
        )}
        </div>
      </div>
      </>
    )
  }