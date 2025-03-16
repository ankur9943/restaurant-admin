import { DeleteIcon, EditIcons, LocationIcon, MoneyIcon, PhoneIcon } from '@/app/helper/Svg';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Staff from '@/app/components/staff/Staff';

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

function MemberDetail({ params: { id } }: MemberDetailProps): React.ReactElement {
    const memberId = parseInt(id, 10);
    const member = memberInfo.find((m) => m.id === memberId);

    return (
        <>
            <Link href={"/account-verification/all-campaign"} title="View all Campaigns" className="blue-fill-btn mb-4 ml-auto ">
                View all Campaigns
            </Link>

            <div className="border border-[#D9D9D9] rounded-lg p-8 flex">
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
                        <button type="button" title="Edit" className="border border-black/10 rounded-lg p-2 hover:bg-dark-blue/10">
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
                                    <span className='text-[#434A50]'>Bengaluru, India</span>
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
                <Staff />
                <div className='flex space-x-3 justify-end mt-4'>
                    <button type='button' title='Reset Password' className='rounded-lg py-2 px-4 text-sm text-[#607487] border border-[#607487] font-medium'>Reset Password</button>
                    <button type='button' title='Ban User' className='rounded-lg py-2 px-4 text-sm text-[#AA2727] border border-[#AA2727] font-medium'>Ban User</button>
                    <button type="button" title="Edit" className="border border-black/10 rounded-lg py-2 px-3 hover:bg-dark-blue/10">
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </>
    );
}

export default MemberDetail;
