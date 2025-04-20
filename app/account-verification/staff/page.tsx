"use client";
import React from 'react'
import { RightArrowIcon } from '@/app/helper/Svg';
import Link from 'next/link';

const staffData = [
    { id: 1, name: "Staff Name", role: "Job Role", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", status: "Active", action: "" },
    { id: 2, name: "Staff Name", role: "Job Role", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", status: "Inactive", action: "" },
    { id: 3, name: "Staff Name", role: "Job Role", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", status: "Inactive", action: "" },
    { id: 4, name: "Staff Name", role: "Job Role", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", status: "Active", action: "" },
    { id: 5, name: "Staff Name", role: "Job Role", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", status: "Banned", action: "" },
    { id: 6, name: "Staff Name", role: "Job Role", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", status: "Active", action: "" },
    { id: 7, name: "Staff Name", role: "Job Role", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", status: "Banned", action: "" },
    { id: 8, name: "Staff Name", role: "Job Role", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", status: "Active", action: "" },
    { id: 9, name: "Staff Name", role: "Job Role", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", status: "Active", action: "" },
    { id: 10, name: "Staff Name", role: "Job Role", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", status: "Banned", action: "" },
    { id: 11, name: "Staff Name", role: "Job Role", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", status: "Active", action: "" },
    { id: 12, name: "Staff Name", role: "Job Role", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", status: "Banned", action: "" },
    { id: 13, name: "Staff Name", role: "Job Role", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", status: "Active", action: "" },
];

export default function Staff() {

    return (
        <div className="overflow-x-auto bg-white rounded-lg border border-black/10 ">
            <table className="w-full border-collapse text-sm text-center">
                <thead className='table-head-style'>
                    <tr>
                        <th className='!px-4'>Id</th>
                        <th>Staff Name</th>
                        <th>Job Role</th>
                        <th>City</th>
                        <th>Registered Date</th>
                        <th>Approval Date & time</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='table-body-style'>
                    {staffData.map((data, id) => (
                        <tr key={id}>
                            <td className="!px-4">
                                {data.id}
                            </td>
                            <td>
                                {data.name}
                            </td>
                            <td>
                                {data.role}
                            </td>
                            <td>
                                {data.city}
                            </td>
                            <td>
                                {data.registered}
                            </td>
                            <td >
                                {data.approved}
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
                                    />
                                    <span>
                                        {data.status}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <Link
                                    title="View Profile"
                                    href={`/account-verification/staff/${data.name}`}
                                    className="border border-black/10 rounded-lg p-2 hover:bg-dark-blue/10 inline-block">
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
