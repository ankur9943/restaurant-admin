'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import CampaignImage from '@/public/assets/images/campaign-image.png'

export default function UserManagement() {
  const [activeTab, setActiveTab] = useState<string>("Merchants");

  return (
    <div>
      {/* Tabs Section */}
      <div className="grid grid-cols-3 border-b-8 border-[#F1F1F1] mb-4 [&>:last-child]:before:hidden">
        {["Merchants", "Staff", "Consumers"].map((tab) => (
          <button
            key={tab}
            className={`tab-style px-4 py-2 text-lg font-medium
                          ${activeTab === tab ? "text-black/80 after:opacity-1" : "text-black/40 after:opacity-0"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} (1000)
          </button>
        ))}
      </div>


      <div className='flex'>
        <div className='space-y-4'>
          <div className=''>
            <Image src={CampaignImage} alt="" />
          </div>
          <div className=''>
            <label htmlFor=''>Ad Campaign Place Format</label>
            <input type='text' name='campaign-format' className='w-full block min-h-[40px] rounded-md border border-gray-2 mt-1.5' required />
          </div>
          <div className=''>
            <label htmlFor=''>Ad Campaign Place Format</label>
            <input type='text' name='campaign-format' className='w-full block min-h-[40px]  rounded-md border border-gray-2 mt-1.5' required />
          </div>
          <div className=''>
            <label htmlFor=''>Ad Campaign Place Format</label>
            <input type='text' name='campaign-format' className='w-full block min-h-[40px]  rounded-md border border-gray-2 mt-1.5' required />
          </div>
          <div className=''>
            <label htmlFor=''>Ad Campaign Place Format</label>
            <input type='text' name='campaign-format' className='w-full block min-h-[40px]  rounded-md border border-gray-2 mt-1.5' required />
          </div>
          <div className=''>
            <label htmlFor=''>Ad Campaign Place Format</label>
            <input type='text' name='campaign-format' className='w-full block min-h-[40px]  rounded-md border border-gray-2 mt-1.5' required />
          </div>
          <div className=''>
            <label htmlFor=''>Ad Campaign Place Format</label>
            <input type='text' name='campaign-format' className='w-full block min-h-[40px] rounded-md border border-gray-2 mt-1.5' required />
          </div>
          <div className=''>
            <label htmlFor=''>Ad Campaign Place Format</label>
            <input type='text' name='campaign-format' className='w-full block min-h-[40px] rounded-md;border border-gray-2 mt-1.5' required />
          </div>

        </div>
        <hr className='h-full block w-2 bg-gray-2' />
        <div className=''></div>
      </div>

    </div>
  );
}
