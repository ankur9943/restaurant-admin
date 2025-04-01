'use client'
import { DeleteIcon, EditIcons, LocationIcon, MoneyIcon, PhoneIcon, RightArrowIcon } from '@/app/helper/Svg';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface ConsumersDetailProps {
    params: Promise<{ id: string }>;
}

const memberInfo = [
    {
        id: 1,
        name: "John Doe",
        location: "Bengaluru, India"
    }
];

const consumersList = Array.from({ length: 10 }, (_, index) => ({
    SrNo: index + 1,
    Name: `Name ${index + 1}`,
    EmailID: `email${index + 1}@gmail.com`,
    ContactNumber: `999999999${index}`,
    TotalIncome: `₹ 6832`,
    Status: "Active"
}));

export default function ConsumersDetail({ params }: ConsumersDetailProps): React.ReactElement {

    const { id } = React.use(params);
    const memberId = parseInt(id, 10);
    const member = memberInfo.find((m) => m.id === memberId);

    return (
        <>
            <Link href="/account-verification/all-campaign" title="View all Campaigns" className="blue-fill-btn mb-4 ml-auto">
                View all Campaigns
            </Link>

            <div className="border border-[#D9D9D9] rounded-lg p-8 flex">
                <div className="mb-4 w-[200px] flex-shrink">
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
                        <div className='space-y-2'>
                            <h4 className="text-lg font-medium text-[#353B40]">{member?.name ?? "Member Name"}</h4>
                            <p className='text-sm text-[#353B40]'>ID: {member?.id ?? id}</p>
                        </div>
                        <Link href={`/account-verification/${id}/${memberId}`} title="Edit" className="border border-black/10 rounded-lg p-2 hover:bg-dark-blue/10">
                            <EditIcons />
                        </Link>
                    </div>

                    <div className="mt-4">
                        <ul className="grid lg:grid-cols-2 space-y-2.5">
                            <li className="flex items-center space-x-2">
                                <LocationIcon />
                                <span className="text-sm xl:text-base space-x-2">
                                    <span className='text-[#5D6870]'>Location: </span>
                                    <span className='text-[#434A50]'>{member?.location ?? "Not available"}</span>
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <PhoneIcon />
                                <span className="text-sm xl:text-base space-x-2">
                                    <span className='text-[#5D6870]'>Contact: </span>
                                    <span className='text-[#434A50]'>999999999</span>
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MoneyIcon />
                                <span className="text-sm xl:text-base space-x-2">
                                    <span className='text-[#5D6870]'>Active Subscription: </span>
                                    <span className='text-[#434A50]'>Subscription Name</span>
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MoneyIcon />
                                <span className="text-sm xl:text-base space-x-2">
                                    <span className='text-[#5D6870]'>Payout Status: </span>
                                    <span className='text-[#434A50]'>Pending</span>
                                </span>
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
                <Link href='/account-verification/all-campaign' title="View Campaign"
                    className="text-[#141736] hover:text-black underline hover:no-underline block w-fit flex-shrink ml-auto">
                    View Campaign
                </Link>
            </div>

            <div className='mt-8'>
                <h4 className='text-black/80 text-2xl font-medium mb-5'>Staff Details</h4>

                <div className="overflow-x-auto bg-white rounded-lg border border-black/10">
                    <table className="w-full border-collapse text-sm">
                        <thead className='table-head-style'>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Total Income</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-body-style [&_td]:text-center'>
                            {consumersList.map((data) => (
                                <tr key={data.SrNo}>
                                    <td>{data.SrNo}</td>
                                    <td>
                                        <Link className='hover:underline transition-all duration-300 hover:text-dark-blue' href={`/account-verification/${data.SrNo}`}>
                                            {data.Name}
                                        </Link>
                                    </td>
                                    <td>{data.EmailID}</td>
                                    <td>{data.ContactNumber}</td>
                                    <td>{data.TotalIncome}</td>
                                    <td>
                                        <div className="flex items-center space-x-2 justify-center">
                                            <span className={`inline-block w-2 h-2 rounded-full ${data.Status === "Active" ? "bg-green-500" : "bg-gray-500"}`} />
                                            <span>{data.Status}</span>
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
                    <button type='button' title='Reset Password' className='rounded-lg py-2 px-4 text-sm text-[#607487] border border-[#607487] font-medium hover:bg-[#607487] hover:text-white transition-all duration-300'>
                        Reset Password
                    </button>
                    <button type='button' title='Ban User' className='rounded-lg py-2 px-4 text-sm text-[#AA2727] border border-[#AA2727] font-medium hover:bg-[#AA2727] hover:text-white transition-all duration-300'>
                        Ban User
                    </button>
                    <button type="button" title="Delete" className="border border-black/10 rounded-lg py-2 px-3 hover:bg-dark-blue/10 transition-all duration-300">
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </>
    );
}
