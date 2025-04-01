'use client'
import React, { useState } from 'react'
// import { toast } from 'react-toastify';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <button onClick={notify}>Notify !</button> */}

      {/* Tabs */}
      <div className="grid grid-cols-3 border-b-8 border-[#F1F1F1] mb-4 [&>:last-child]:before:hidden">
        {["Merchants", "Staff", "Consumers"].map((tab, index) => (
          <button
            key={tab}
            className={`tab-style
            ${activeTab === index ? "after:opacity-1 text-black/80" : "text-black/40 after:opacity-0"}`}
            onClick={() => setActiveTab(index)} // Use index instead of string
          >
            {tab}
          </button>
        ))}
      </div>


      {/* Content Panel */}
      <div className=''></div>
    </div>
  );
}
