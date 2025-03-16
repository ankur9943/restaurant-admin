'use client'
import React from 'react'
import { DeleteIcon, RightArrowIcon } from '@/app/helper/Svg';
import Link from 'next/link';

const consumersData = [
  { id: 1, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active", action: "" },
  { id: 2, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Inactive", action: "" },
  { id: 3, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Inactive", action: "" },
  { id: 4, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active", action: "" },
  { id: 5, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Banned", action: "" },
  { id: 6, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active", action: "" },
  { id: 7, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Banned", action: "" },
  { id: 8, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active", action: "" },
  { id: 9, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active", action: "" },
  { id: 10, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Banned", action: "" },
  { id: 11, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active", action: "" },
  { id: 12, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Banned", action: "" },
  { id: 13, name: "Consumers Name", email: "emailid@gmail.com", contact: "9999999999", city: "City Name", status: "Active", action: "" },
];

export default function Consumers() {

  return (
    <div className="overflow-x-auto bg-white rounded-lg border border-black/10 ">
      <table className="w-full border-collapse text-sm">
        <thead className='[&_th]:py-4 [&_th]:px-2 [&_th]:text-left [&_th]:text-[#1A1D20] [&_th]:font-medium bg-[#E6E9EC] [&_th]:text-xs xl:[&_th]:text-sm mid-xl:[&_th]:text-base'>
          <tr>
            <th className='!px-4'>Id</th>
            <th>Consumers Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>City</th>
            <th>Status</th>
            <th className='!text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {consumersData.map((data, id) => (
            <tr key={id} className="border-b border-[#E6E9EC] hover:bg-gray-50 [&_td]:text-[#2E3D52] [&_td]:font-medium [&_td]:p-2 [&_td]:text-xs xl:[&_td]:text-sm mid-xl:[&_td]:text-base">
              <td className=" !px-4">
                {data.id}
              </td>
              <td>
                <Link className='hover:underline transition-all duration-300h hover:text-dark-blue' href={`/account-verification/${data.name}`}>{data.name}</Link>
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
                <div className="flex items-center space-x-2">
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
              <td className="text-center">
                <div className='flex space-x-2 justify-center'>
                  <button type='button' title="Delete" className="border border-black/10 rounded-lg p-2 hover:bg-dark-blue/10"><DeleteIcon /></button>
                  <button type="button" title="Move" className="border border-black/10 rounded-lg p-2 hover:bg-dark-blue/10"><RightArrowIcon /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
