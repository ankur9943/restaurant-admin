import React from 'react'

export default function Header() {
    return (
        <div className='py-4 px-8 flex justify-between items-center sticky top-0 bg-white z-10'>
            <div className='space-y-2'>
                <span className='text-sm text-grey'>User Management</span>
                <h2 className="text-xl font-medium text-black">User Management</h2>
            </div>
        </div>
    )
}
