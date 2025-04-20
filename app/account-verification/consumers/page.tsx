'use client'
import React from 'react'
import { RightArrowIcon } from '@/app/helper/Svg';
import Link from 'next/link';

const consumersData = [
    { id: 1, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active" },
    { id: 2, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Inactive" },
    { id: 3, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Inactive" },
    { id: 4, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active" },
    { id: 5, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Banned" },
    { id: 6, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active" },
    { id: 7, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Banned" },
    { id: 8, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active" },
    { id: 9, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active" },
    { id: 10, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Banned" },
    { id: 11, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active" },
    { id: 12, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Banned" },
    { id: 13, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active" },
];

export default function Consumers() {

    return (
        <div className="overflow-x-auto bg-white rounded-lg border border-black/10 ">
            <table className="w-full border-collapse text-sm text-center">
                <thead className='table-head-style'>
                    <tr>
                        <th className='!px-4'>Id</th>
                        <th>Consumers Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>City</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='table-body-style'>
                    {consumersData.map((data, id) => (
                        <tr key={id}>
                            <td className="!px-4">
                                {data.id}
                            </td>
                            <td>
                                {data.name}
                            </td>
                            <td>
                                {data.email}
                            </td>
                            <td>
                                {data.contact}
                            </td>
                            <td>
                                {data.city}
                            </td>
                            <td>
                                <div className="flex items-center justify-center space-x-2">
                                    {/* Optional: small status dot */}
                                    <span
                                        className={`inline-block w-2 h-2 rounded-full ${data.status === "Approved" || data.status === "Active"
                                            ? "bg-green-500"
                                            : data.status === "Inactive" || data.status === "Rejected"
                                                ? "bg-red-500"
                                                : data.status === "Banned"
                                                    ? "bg-yellow-500"
                                                    : "bg-gray-500"
                                            }`}
                                    >
                                    </span>
                                    <span>
                                        {data.status}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <Link
                                    title="View Profile"
                                    className="border border-black/10 rounded-lg p-2 hover:bg-dark-blue/10 inline-block"
                                    href={`/account-verification/consumers/${data.id}`}>
                                    <RightArrowIcon />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
