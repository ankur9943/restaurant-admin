'use client';
import React, { useState } from 'react';
import TotalMerchants from '../components/Dashboard/totalMerchants';
import RegisteredMerchants from '../components/Dashboard/registeredMerchants';
import TotalIncome from '../components/Dashboard/totalIncome';
import SubscriptionPlan from '../components/Dashboard/subscriptionPlan';
import TagsCategoriesTrends from '../components/Dashboard/categoriesTrends';



const dashboardData = {
  merchants: {
    totalmerchants: {
        label: "Merchants",
        total: 7602,
        registered: 7023,
        income: 320835,
        profit: 70323,
    },
    registeredmerchants : {
        label: "Merchants",
        total: 7602,
        registered: 7023,
        income: 320835,
        profit: 70323,
    },
  },

  staff: {
    label: "Staff",
    total: 1200,
    registered: 1102,
    income: 180000,
    profit: 50323,
  },
  consumers: {
    label: "Consumers",
    total: 20000,
    registered: 18500,
    income: 500000,
    profit: 120000,
  },
};

interface dashboardData {
  label: string;
  total: number;
  registered: number;
  income: number;
  profit: number;
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = ['merchants', 'staff', 'consumers'] as const;
  const activeKey = tabs[activeTab];
  const currentData = dashboardData[activeKey];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Tabs */}
      <div className="grid grid-cols-3 border-b-8 border-[#F1F1F1] mb-4">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`tab-style ${activeTab === index ? "after:opacity-1 text-black/80" : "text-black/40 after:opacity-0"}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Shared Components with Dynamic Data */}
      <div className="grid gap-4 grid-cols-12 md:gap-6">
        <div className='col-span-6'>
          <TotalMerchants label={currentData.label} value={currentData.total} />
        </div>
        <div className='col-span-6'>
          <RegisteredMerchants label={currentData.label} value={currentData.registered} />
        </div>
        <div className='col-span-8'>
          <TotalIncome amount={currentData.label} profit={currentData.profit} />
        </div>
        <div className='col-span-4'>
          <SubscriptionPlan />
        </div>
        <div className='col-span-12'>
          <TagsCategoriesTrends />
        </div>
      </div>
    </div>
  );
}
