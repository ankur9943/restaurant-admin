'use client'
import React from 'react'
import Sidebar from '@/app/components/common/Sidebar'
import Header from '@/app/components/common/Header'

export default function Layout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className='flex h-screen '>
            <Sidebar />
            <div className='flex-grow h-full flex flex-col overflow-y-auto'>
                    <Header />
                <div className='p-5 xl:p-6 mid-xl:p-10'>
                    {children}
                </div>
            </div>
        </div>
    )
}
