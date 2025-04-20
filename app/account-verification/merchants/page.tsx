"use client";
import React from 'react'
import { RightArrowIcon } from "../../helper/Svg";
import Link from 'next/link';

const merchantData = [
    { id: 1, name: "Merchant Name", type: "Business Type", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", Approved: "Emp.Name", status: "Active" },
    { id: 2, name: "Merchant Name", type: "Business Type", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", Approved: "Emp.Name", status: "Inactive" },
    { id: 3, name: "Merchant Name", type: "Business Type", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", Approved: "Emp.Name", status: "Inactive" },
    { id: 4, name: "Merchant Name", type: "Business Type", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", Approved: "Emp.Name", status: "Active" },
    { id: 5, name: "Merchant Name", type: "Business Type", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", Approved: "Emp.Name", status: "Banned" },
    { id: 6, name: "Merchant Name", type: "Business Type", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", Approved: "Emp.Name", status: "Active" },
    { id: 7, name: "Merchant Name", type: "Business Type", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", Approved: "Emp.Name", status: "Banned" },
    { id: 8, name: "Merchant Name", type: "Business Type", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", Approved: "Emp.Name", status: "Active" },
    { id: 9, name: "Merchant Name", type: "Business Type", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", Approved: "Emp.Name", status: "Active" },
    { id: 10, name: "Merchant Name", type: "Business Type", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", Approved: "Emp.Name", status: "Banned" },
    { id: 11, name: "Merchant Name", type: "Business Type", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", Approved: "Emp.Name", status: "Active" },
    { id: 12, name: "Merchant Name", type: "Business Type", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", Approved: "Emp.Name", status: "Banned" },
    { id: 13, name: "Merchant Name", type: "Business Type", registered: "Registered On", city: "City Name", approved: "Oct 7,2024 at 5:35pm", Approved: "Emp.Name", status: "Active" },
];

export default function Merchants() {

    return (
        <div className="overflow-x-auto bg-white rounded-lg border border-black/10">
            <table className="w-full border-collapse text-sm text-center">
                <thead className="table-head-style">
                    <tr>
                        <th className='!px-4'>Id</th>
                        <th>Merchant Name</th>
                        <th>Business Type</th>
                        <th>City</th>
                        <th>Registered On</th>
                        <th>Approval Date & time</th>
                        <th>Status</th>
                        <th>Approved By</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='table-body-style'>
                    {merchantData.map((data, id) => (
                        <tr key={id} >
                            <td className=" !px-4">
                                {data.id}
                            </td>
                            <td>
                                {data.name}
                            </td>
                            <td>
                                {data.type}
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
                                        className={`inline-block w-2 h-2 rounded-full
                      ${data.status === "Approved" || data.status === "Active"
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
                                {data.Approved}
                            </td>
                            <td>
                                <Link
                                    title="View Profile"
                                    href={`/account-verification/merchants/${data.name}`}
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
