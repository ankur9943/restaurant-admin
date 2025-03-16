'use client'
import React from 'react'
import Layout from '@/app/components/common/Layout'
import { ToastContainer } from 'react-toastify'
import { usePathname } from 'next/navigation'

export default function Wrapper({ children, }: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname()

    // Define routes where Layout should be disabled
    const excludedRoutes = ['/', '/forgot-password', '/reset-password']

    // Check if the current route is in the excluded routes
    const shouldUseLayout = !excludedRoutes.includes(pathname)

    return (
        <>
            <ToastContainer />
            {shouldUseLayout ? <Layout>{children}</Layout> : children}
        </>
    );
}
