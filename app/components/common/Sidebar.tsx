'use client'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { AccountVerificationIcon, DashboardIcon, ManagementIcon, SettingsIcon, SubscriptionIcon, TagsIcon, TransactionsIcon, UserManagementIcon } from '@/app/helper/Svg'
import Link from 'next/link'

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const MenuItem = [
    { id: 1, Icon: DashboardIcon, Name: 'Dashboard', Url: '/dashboard' },
    { id: 2, Icon: AccountVerificationIcon, Name: 'Account Verification', Url: '/account-verification' },
    { id: 3, Icon: UserManagementIcon, Name: 'User Management', Url: '/user-management' },
    { id: 4, Icon: TransactionsIcon, Name: 'Transactions', Url: '/transactions' },
    { id: 5, Icon: SubscriptionIcon, Name: 'Subscription & Currency', Url: '/subscription-currency' },
    { id: 6, Icon: ManagementIcon, Name: 'Issue Management', Url: '/management' },
    { id: 7, Icon: TagsIcon, Name: 'Tags & Categories', Url: '/tags-categories' },
    { id: 8, Icon: SettingsIcon, Name: 'Settings', Url: '/settings' },
  ];

  return (
    <div className={`bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] p-6 transition-all duration-300
      ${isOpen ? "w-[310px]" : "w-[118px]"}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className='mb-8'>
        <h1 className="whitespace-nowrap text-3xl font-bold text-center transition-all duration-300">
          {isOpen ? "Logo Here" : "Logo"}
        </h1>
      </div>
      <div>
        <ul className='px-3'>
          {MenuItem.map((item) => {
            const isActive = pathname.startsWith(item.Url)
            return (
              <li key={item.id} className="mb-2 transition-all duration-300">
                <Link href={item.Url} className={`flex items-center p-2 rounded text-sm flex-nowrap hover:bg-[#3366FF1A] group 
                  ${isActive ? 'bg-[#3366FF1A] font-semibold' : ''}`}
                >
                  <span>
                    <item.Icon color={isActive ? "#3366FF" : "#737791"} />
                  </span>
                  {
                    isOpen &&
                    <span className={`ms-3 group-hover:text-[#36F] group-hover:font-semibold whitespace-nowrap 
                      ${isActive ? 'text-[#3366FF] font-semibold' : 'text-[#5D7285]'}`}>
                      {item.Name}
                    </span>
                  }
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
