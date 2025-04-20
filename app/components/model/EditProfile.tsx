import { LocationIcon, ModelCloseIcon, MoneyIcon, PhoneIcon } from '@/app/helper/Svg';
import Image from 'next/image';
import React, { useState } from 'react'

interface EditProfile {
    onClose: () => void;
}

export default function EditProfile({ onClose }: EditProfile) {

    const [banType, setBanType] = useState<'Temporary' | 'Permanent'>('Temporary');
    const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

    const reasons = [
        'Fraudulent Transactions',
        'Selling Prohibited Items',
        'Misuse of Customer Data',
        'Violating Terms of Service',
        'Illegal Activities',
        'Other'
    ];
    const toggleReason = (reason: string) => {
        setSelectedReasons((prev) =>
            prev.includes(reason) ? prev.filter((r) => r !== reason) : [...prev, reason]
        );
    };

  return (
    <>
        {/* Model Backdrop */}
          <div className='fixed bg-white/50 inset-0 z-10 flex justify-center items-center backdrop-blur-sm p-10 ' onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}
                  className='bg-[#CDCDCD]/[75%] rounded-lg shadow-[0px_2px_4px_0px_#F3F3F3] min-h-96 w-full relative flex justify-center items-center p-10'>

                {/* Model Header */}
                <button onClick={onClose} type='button' title='Close'
                    className='border border-[#EEF1F6] bg-white hover:bg-dark-blue/10 rounded-3xl p-2 absolute top-1 right-1 '>
                    <ModelCloseIcon />
                  </button>

                {/* Model Content */}
                  <div className='space-y-4 w-full '>

                    <div className="border border-[#D9D9D9] rounded-lg p-8 flex bg-white w-full">
                          <div className="mb-4 w-[200px] flex-shrink">
                              <Image
                                  src={"/path/to/member.jpg"}
                                  alt="Merchant Profile"
                                  width={113}
                                  height={113}
                                  className="rounded-full bg-black/20 object-cover"
                              />
                          </div>

                          <div className='flex-grow'>
                              <div className="py-6 border-b border-[#D9D9D9] flex justify-between items-center">
                                  <div className='space-y-2'>
                                      <h4 className="text-lg font-medium text-[#353B40]">{ "Member Name"}</h4>
                                      <p className='text-sm text-[#353B40]'>ID: { "XXXXX"}</p>
                                  </div>

                              </div>

                              <div className="mt-4">
                                  <ul className="grid lg:grid-cols-2 space-y-2.5">
                                      <li className="flex items-center space-x-2">
                                          <LocationIcon />
                                          <span className="text-sm xl:text-base space-x-2">
                                              <span className='text-[#5D6870]'>Location: </span>
                                              <span className='text-[#434A50]'>{ "Not available"}</span>
                                          </span>
                                      </li>
                                      <li className="flex items-center space-x-2">
                                          <PhoneIcon />
                                          <span className="text-sm xl:text-base space-x-2">
                                              <span className='text-[#5D6870]'>Contact: </span>
                                              <span className='text-[#434A50]'>{ "Not available"}</span>
                                          </span>
                                      </li>
                                      <li className="flex items-center space-x-2">
                                          <MoneyIcon />
                                          <span className="text-sm xl:text-base space-x-2">
                                              <span className='text-[#5D6870]'>Active Subscription: </span>
                                              <span className='text-[#434A50]'>{ "Not available"}</span>
                                          </span>
                                      </li>
                                      <li className="flex items-center space-x-2">
                                          <MoneyIcon />
                                          <span className="text-sm xl:text-base space-x-2">
                                              <span className='text-[#5D6870]'>Payout Status: </span>
                                              <span className='text-[#434A50]'>{ "Not available"}</span>
                                          </span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>


                      {/*  */}
                      <div className="grid grid-cols-2 border border-[#D9D9D9] rounded-lg p-8 bg-white w-full space-x-6">

                          {/* Ban Type Selection */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <span className="font-medium text-xl text-black min-w-[200px]">Ban Type</span>
                              <button
                                  className={`px-4 py-1 rounded border ${banType === 'Temporary' ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                      }`}
                                  onClick={() => setBanType('Temporary')}
                              >
                                  Temporary
                              </button>
                              <button
                                  className={`px-4 py-1 rounded border
                                    ${banType === 'Permanent' ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                      }`}
                                  onClick={() => setBanType('Permanent')}
                              >
                                  Permanent
                              </button>
                              </div>
                              {/* Ban Duration */}
                              <div className='flex items-center gap-4'>
                                  <label className="block mb-1 font-medium text-xl text-black min-w-[200px]">Ban Duration</label>
                                  <input
                                      type="text"
                                      placeholder="Banned for DD | MM | YY"
                                        className="w-full border p-2 rounded border-[#F5FAFF] bg-[#F5FAFF]"
                                  />
                              </div>
                          </div>

                          {/* Ban Dates */}
                          <div className="space-y-4">
                              <div className='flex items-center gap-4 w-full'>
                                  <label className="font-medium text-xl text-black min-w-[200px]">Ban Start Date & Time</label>
                                  <div className="flex gap-2">
                                      <select className="border p-1 rounded w-full">
                                          <option>Month</option>
                                      </select>
                                      <select className="border p-1 rounded w-full">
                                          <option>Year</option>
                                      </select>
                                  </div>
                              </div>
                              <div className='flex items-center gap-4 w-full'>
                                  <label className="font-medium text-xl text-black min-w-[200px]">Ban End Date & Time</label>
                                  <div className="flex gap-2">
                                      <select className="border p-1 rounded w-full">
                                          <option>Month</option>
                                      </select>
                                      <select className="border p-1 rounded w-full">
                                          <option>Year</option>
                                      </select>
                                  </div>
                              </div>
                          </div>

                      </div>

                      {/* Ban Reasons */}
                      <div className='overflow-y-auto p-8 flex w-full'>
                          <label className="block text-sm mb-2 font-medium">Ban Type</label>
                          {reasons.map((reason) => (
                              <div key={reason} className="mb-3">
                                  <button
                                      type="button"
                                      onClick={() => toggleReason(reason)}
                                      className={`mb-1 px-3 py-1 rounded-full border text-sm ${selectedReasons.includes(reason)
                                          ? 'bg-blue-500 text-white'
                                          : 'bg-gray-100 text-gray-700'
                                          }`}
                                  >
                                      {reason}
                                  </button>
                                  {selectedReasons.includes(reason) && (
                                      <textarea
                                          maxLength={100}
                                          className="w-full mt-1 border rounded p-2 text-sm"
                                          defaultValue={`• We are pleased to inform you that your merchant account [Merchant/Store Name & Id] has been successfully approved and is now ready to go live on our platform.\n• Account Details:\n   - Merchant/Store Name: [Name & Id]\n   - Activation Date: [Start Date]\n• Your account will now be visible to the customers, helping you reach a wider audience and business growth.`}
                                      />
                                  )}
                              </div>
                          ))}
                      </div>
                </div>
            </div>
        </div>
    </>
  )
}
