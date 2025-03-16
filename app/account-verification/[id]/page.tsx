'use client'
import { DeleteIcon, EditIcons, LocationIcon, MoneyIcon, PhoneIcon, RightArrowIcon } from '@/app/helper/Svg';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Staff from '@/app/components/staff/Staff';
// import { boolean } from 'yup';

interface MemberDetailProps {
    params: {
        id: string;
    };
}

const memberInfo = [
    {
        id: 1,
        name: "John Doe",
        location: "Bengaluru, India"
    }
];


const staffList =
    [
        {
            "SrNo": 1,
            "Name": "Name",
            "EmailID": "emailid@gmail.com",
            "ContactNumber": "9999999999",
            "TotalIncome": "₹ 6832",
            "Status": "Active",
            "Actions": "🔘"
        },
        {
            "SrNo": 2,
            "Name": "Name",
            "EmailID": "emailid@gmail.com",
            "ContactNumber": "9999999999",
            "TotalIncome": "₹ 6832",
            "Status": "Active",
            "Actions": "🔘"
        },
        {
            "SrNo": 3,
            "Name": "Name",
            "EmailID": "emailid@gmail.com",
            "ContactNumber": "9999999999",
            "TotalIncome": "₹ 6832",
            "Status": "Active",
            "Actions": "🔘"
        },
        {
            "SrNo": 4,
            "Name": "Name",
            "EmailID": "emailid@gmail.com",
            "ContactNumber": "9999999999",
            "TotalIncome": "₹ 6832",
            "Status": "Active",
            "Actions": "🔘"
        },
        {
            "SrNo": 5,
            "Name": "Name",
            "EmailID": "emailid@gmail.com",
            "ContactNumber": "9999999999",
            "TotalIncome": "₹ 6832",
            "Status": "Active",
            "Actions": "🔘"
        },
        {
            "SrNo": 6,
            "Name": "Name",
            "EmailID": "emailid@gmail.com",
            "ContactNumber": "9999999999",
            "TotalIncome": "₹ 6832",
            "Status": "Active",
            "Actions": "🔘"
        },
        {
            "SrNo": 7,
            "Name": "Name",
            "EmailID": "emailid@gmail.com",
            "ContactNumber": "9999999999",
            "TotalIncome": "₹ 6832",
            "Status": "Active",
            "Actions": "🔘"
        },
        {
            "SrNo": 8,
            "Name": "Name",
            "EmailID": "emailid@gmail.com",
            "ContactNumber": "9999999999",
            "TotalIncome": "₹ 6832",
            "Status": "Active",
            "Actions": "🔘"
        },
        {
            "SrNo": 9,
            "Name": "Name",
            "EmailID": "emailid@gmail.com",
            "ContactNumber": "9999999999",
            "TotalIncome": "₹ 6832",
            "Status": "Active",
            "Actions": "🔘"
        },
        {
            "SrNo": 10,
            "Name": "Name",
            "EmailID": "emailid@gmail.com",
            "ContactNumber": "9999999999",
            "TotalIncome": "₹ 6832",
            "Status": "Active",
            "Actions": "🔘"
        }
    ]


function MemberDetail({ params: { id } }: MemberDetailProps): React.ReactElement {
    const memberId = parseInt(id, 10);
    const member = memberInfo.find((m) => m.id === memberId);


    return (
        <>
            <Link href={"/account-verification/all-campaign"} title="View all Campaigns" className="blue-fill-btn mb-4 ml-auto">
                View all Campaigns
            </Link>

            <div className="border border-[#D9D9D9] rounded-lg p-8 flex ">
                <div className="mb-4 w-[200px] flex-shrink" >
                    <Image
                        src="/path/to/member.jpg"
                        alt="Member Profile"
                        width={113}
                        height={113}
                        className="rounded-full bg-black/20 object-cover"
                    />
                </div>

                <div className='flex-grow'>

                    <div className="py-6 border-b border-[#D9D9D9] flex justify-between items-center">
                        {/* Member Name and ID */}
                        <div className='space-y-2'>
                            <h4 className="text-lg font-medium text-[#353B40]">{member ? member.name : "Member Name"}</h4>
                            <p className='text-sm text-[#353B40]'>{member ? `ID: ${member.id}` : `${id}`}</p>
                        </div>
                        <button  type="button" title="Edit" className="border border-black/10 rounded-lg p-2 hover:bg-dark-blue/10">
                            <EditIcons />
                        </button>
                    </div>

                    <div className="mt-4">
                        <ul className="grid lg:grid-cols-2 space-y-2.5">
                            <li className="flex items-center space-x-2">
                                <span className='flex-shrink'>
                                    <LocationIcon />
                                </span>
                                <div className='text-sm xl:text-base'>
                                    <span className='text-[#5D6870]'>Location: </span>
                                    {/* Toggle Between Text and Input */}
                                    {/* {isEditing ? (
                                        <input
                                            type="text"
                                            value={location}
                                            onChange={handleInputChange}
                                            className="border rounded p-1 text-[#434A50] focus:outline-none"
                                            autoFocus
                                        />
                                    ) : ( */}
                                    <span className='text-[#434A50]'>{'Bengaluru, India'}</span>
                                    {/* )} */}
                                </div>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className='flex-shrink'>
                                    <PhoneIcon />
                                </span>
                                <div className='text-sm xl:text-base'>
                                    <span className='text-[#5D6870]'>Contact: </span>
                                    <span className='text-[#434A50]'>999999999</span>
                                </div>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className='flex-shrink'>
                                    <MoneyIcon />
                                </span>
                                <div className='text-sm xl:text-base'>
                                    <span className='text-[#5D6870]'>Active Subscription: </span>
                                    <span className='text-[#434A50]'>Subscription Name</span>
                                </div>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className='flex-shrink'>
                                    <MoneyIcon />
                                </span>
                                <div className='text-sm xl:text-base'>
                                    <span className='text-[#5D6870]'>Active ad campaigns: </span>
                                    <span className='text-[#434A50]'>Campaign Name 1, Campaign Name 2</span>
                                </div>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className='flex-shrink'>
                                    <MoneyIcon />
                                </span>
                                <div className='text-sm xl:text-base'>
                                    <span className='text-[#5D6870]'>Payout Status: </span>
                                    <span className='text-[#434A50]'>Pending</span>
                                </div>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className='flex-shrink'>
                                    <MoneyIcon />
                                </span>
                                <div className='text-sm xl:text-base'>
                                    <span className='text-[#5D6870]'>Active ad campaigns: </span>
                                    <span className='text-[#434A50]'>Campaign Name 1, Campaign Name 2</span>
                                </div>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className='flex-shrink'>
                                    <MoneyIcon />
                                </span>
                                <div className='text-sm xl:text-base'>
                                    <span className='text-[#5D6870]'>Payout Status: </span>
                                    <span className='text-[#434A50]'>Pending</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Message */}
            <div className='border-2 border-[#EC7203] rounded-lg p-5 bg-[#FFF5EC] text-sm flex mt-6'>
                <p className='text-[#3E3E3E] font-medium'>
                    A new ad campaign “campaign name” has been uploaded by user, pending for approval.
                </p>
                <Link href={'/account-verification/all-campaign'} title="View Campaign"
                    className="text-[#141736] hover:text-black underline hover:no-underline block w-fit flex-shrink ml-auto">
                    View Campaign
                </Link>
            </div>

            <div className='mt-8'>
                <h4 className='text-black/80 text-2xl font-medium mb-5'>Staff Details</h4>

                <div className="overflow-x-auto bg-white rounded-lg border border-black/10 ">
                    <table className="w-full border-collapse text-sm">
                        <thead className='table-head-style'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Contact Number</th>
                                <th>Total Income</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-body-style [&_td]:text-center'>
                            {staffList.map((data, id) => (
                                <tr key={id}>
                                    <td>
                                        {data.SrNo}
                                    </td>
                                    <td>
                                        <Link className='hover:underline transition-all duration-300h hover:text-dark-blue' href={`/account-verification/${data.SrNo}`}>{data.Name}</Link>
                                    </td>
                                    <td>
                                        {data.EmailID}
                                    </td>
                                    <td>
                                        {data.ContactNumber}
                                    </td>
                                    <td>
                                        {data.TotalIncome}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-2 justify-center">
                                            {/* Optional: small status dot */}
                                            <span
                                                className={`inline-block w-2 h-2 rounded-full ${data.Status === "Approved" || data.Status === "Active"
                                                    ? "bg-green-500"
                                                    : data.Status === "Inactive" || data.Status === "Rejected"
                                                        ? "bg-red-500"
                                                        : data.Status === "Banned"
                                                            ? "bg-yellow-500"
                                                            : "bg-gray-500"
                                                    }`}
                                            />
                                            <span>
                                                {data.Status}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="text-center">
                                        <button type="button" title="Move" className="border border-black/10 rounded-lg p-2 hover:bg-dark-blue/10">
                                            <RightArrowIcon />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='flex space-x-3 justify-end mt-4'>
                    <button type='button' title='Reset Password'
                        className='rounded-lg py-2 px-4 text-sm text-[#607487] border border-[#607487] font-medium
                         hover:bg-[#607487] hover:text-white transition-all duration-300'>
                        Reset Password
                    </button>
                    <button type='button' title='Ban User'
                        className='rounded-lg py-2 px-4 text-sm text-[#AA2727] border border-[#AA2727] font-medium
                         hover:bg-[#AA2727] hover:text-white transition-all duration-300'>
                        Ban User
                    </button>
                    <button type="button" title="Edit"
                        className="border border-black/10 rounded-lg py-2 px-3 hover:bg-dark-blue/10 transition-all duration-300">
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </>
    );
}

export default MemberDetail;
