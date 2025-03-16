'use client'
import { CrossIcon, ModelCloseIcon, PlusIcon } from '@/app/helper/Svg';
import Image from 'next/image';
import React, { useState } from 'react'

export default function page() {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setProfileImage(null);
    };

    const addTag = () => {
        if (inputValue.trim() && !tags.includes(inputValue.trim())) {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };
    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

  return (
    <>

            {/* Profile Image Section */}
            <div className="flex flex-col items-center mb-8">
                <div className="relative mb-2">
                    <div className="size-36 rounded-full bg-gray-2 flex items-center justify-center overflow-hidden">
                        {profileImage ? (
                            <Image src={profileImage} alt="Profile" width={112} height={112} className="w-full h-full object-cover" />
                        ) : null}
                    </div>
                    <label htmlFor="profile-upload"
                        className="absolute bottom-0 right-0 bg-dark-blue rounded-full size-10 border-2 border-white flex items-center justify-center text-white cursor-pointer">
                        <PlusIcon/>
                        <input
                            id="profile-upload"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleProfileImageUpload}
                        />
                    </label>
                </div>
                <button type='button' title='Remove Picture'
                    onClick={handleRemoveImage}
                    className="text-sm text-[#AA2727] font-medium pt-3 underline">
                    Remove Picture
                </button>
            </div>

            {/* Personal Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                    <label className="text-sm text-[#4B5162]">Merchant Name</label>
                    <input type="text" className="block w-full rounded-sm border border-[#D9D9D9] p-2" />
                </div>
                <div>
                    <label className="text-sm text-[#4B5162]">Merchant ID</label>
                    <input type="text" placeholder='' className="block w-full rounded-sm border border-[#D9D9D9] p-2" />
                </div>
                <div>
                    <label className="text-sm text-[#4B5162]">Email ID</label>
                    <input type="email" placeholder='' className="block w-full rounded-sm border border-[#D9D9D9] p-2" />
                </div>
                <div>
                    <label className="text-sm text-[#4B5162]">Contact Number</label>
                    <input type="number" placeholder='' className="block w-full rounded-sm border border-[#D9D9D9] p-2" />
                </div>
                <div>
                    <label className="text-sm text-[#4B5162]">Business Type</label>
                    <select className='className="block w-full rounded-sm border border-[#D9D9D9] p-2'>
                        <option>Business Type</option>
                    </select>
                </div>
                <div>
                    <label className="text-sm text-[#4B5162]">Location</label>
                    <input type="text" placeholder='Full address' className="block w-full rounded-sm border border-[#D9D9D9] p-2" />
                </div>
                <div className=''>
                    <label htmlFor='' className='text-sm text-[#4B5162]'>Timings</label>
                    <div className=' w-full rounded-sm border border-[#D9D9D9] p-2 flex'>
                        <input type='date' className='border-0 outline-none bg-transparent' />
                        <input type='date' className='border-0 outline-none bg-transparent' />
                    </div>
                </div>
                <div>
                    <label className="text-sm text-[#4B5162]">Average cost for two (in INR)</label>
                    <input type="text" placeholder='Full address' className="block w-full rounded-sm border border-[#D9D9D9] p-2" />
                </div>
            </div>

            {/* Tags */}
            <div className='space-y-2 mt-5'>
                <span className='text-sm text-black pb-2'>Tags</span>
                <div className='rounded-lg border border-gray-2 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.15)] p-6'>
                    <div className="flex gap-2 items-center">
                        <input type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addTag()}
                            placeholder='Write tags here' className="text-sm block w-full rounded-sm border border-[#D9D9D9] px-2 py-1" />
                        <button onClick={addTag} type='button' className="bg-blue-500 text-white p-2 rounded-md">
                            <PlusIcon />
                        </button>
                    </div>
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {tags.map((tag, index) => (
                                <div key={index} className="flex items-center border border-gray-2 px-3 py-1 rounded-md text-sm text-[#6C6C6C]">
                                    {tag}
                                    <button onClick={() => removeTag(tag)} className="ml-2">
                                        <ModelCloseIcon />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className='space-y-2 mt-5'>
              <span className='text-sm text-black pb-2'>Popular Dishes</span>
                <div className='rounded-lg border border-gray-2 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.15)] p-6'>
                    <div className="flex gap-2 items-center">
                        <input type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addTag()}
                          placeholder='Write popular dishes here' className="text-sm block w-full rounded-sm border border-[#D9D9D9] px-2 py-1" />
                        <button onClick={addTag} type='button' className="bg-blue-500 text-white p-2 rounded-md">
                            <PlusIcon />
                        </button>
                    </div>
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {tags.map((tag, index) => (
                                <div key={index} className="flex items-center border border-gray-2 px-3 py-1 rounded-md text-sm text-[#6C6C6C]">
                                    {tag}
                                    <button onClick={() => removeTag(tag)} className="ml-2">
                                        <ModelCloseIcon />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>











            <div>
                <label className="block text-sm text-gray-500 mb-1">Position</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
                <label className="block text-sm text-gray-500 mb-1">Position Type</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="md:col-span-2">
                <label className="block text-sm text-gray-500 mb-1">Language (can be max 2)</label>
                <div className="flex gap-2 items-center">
                    <input type="text" className="flex-grow p-2 border border-gray-300 rounded-lg" />
                    <button className="bg-blue-500 text-white p-2 rounded-md">
                        <PlusIcon  />
                    </button>
                </div>
            </div>

            {/* Date Range Section */}
            <div className="mb-6">
                <label className="block text-sm text-gray-500 mb-1">Available dates (from / to)</label>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="flex-1">
                        <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <button className="bg-blue-500 text-white p-2 rounded-md">
                        <PlusIcon size={16} />
                    </button>
                </div>
            </div>

            {/* Single File Upload */}
            <div className="mb-6">
                <label className="block text-sm text-gray-500 mb-1">Single File Upload</label>
                <textarea className="w-full p-2 border border-gray-300 rounded-lg h-24 resize-none" placeholder=""></textarea>
            </div>

            {/* Work Pictures Section */}
            <div className="mb-6">
                <label className="block text-sm text-gray-500 mb-1">Work Pictures</label>
                <div className="grid grid-cols-6 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-gray-200 aspect-square rounded-md"></div>
                    ))}
                    <button className="border border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center p-2 text-gray-400">
                        <PlusIcon size={16} />
                        <span className="text-xs">Add</span>
                    </button>
                </div>
            </div>

            {/* Work Record Items */}
            <div className="mb-6">
                <label className="block text-sm text-gray-500 mb-1">Work Record Items</label>
                <div className="border border-gray-200 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Certificate Number</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Expiration Date</label>
                            <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">PDF File</label>
                            <div className="flex gap-2">
                                <input type="text" className="flex-grow p-2 border border-gray-300 rounded-lg" placeholder="Pick file" readOnly />
                                <button className="whitespace-nowrap bg-white border border-gray-300 px-3 py-2 rounded-lg text-sm">Browse</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm">Cancel</button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">+ Add Item</button>
                    </div>
                </div>
            </div>

            {/* Other Links */}
            <div className="mb-6">
                <label className="block text-sm text-gray-500 mb-1">Other Links</label>
                <div className="grid grid-cols-6 gap-4">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="bg-gray-200 aspect-square rounded-md"></div>
                    ))}
                    <button className="border border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center p-2 text-gray-400">
                        <PlusIcon size={16} />
                        <span className="text-xs">Add</span>
                    </button>
                </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-2">
                <button className="border border-gray-300 px-6 py-2 rounded-lg">Cancel</button>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Save Changes</button>
            </div>
      </>
  )
}
