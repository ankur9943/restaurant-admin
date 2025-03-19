'use client'
import { CrossIcon, ModelCloseIcon, PlusIcon } from '@/app/helper/Svg';
import Image from 'next/image';
import React, { useState } from 'react';

export default function AddMember() {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [tags, setTags] = useState<string[]>([]);
    const [dishes, setDishes] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");
    const [dishInput, setDishInput] = useState("");

    const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setProfileImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => setProfileImage(null);

    const addTag = () => {
        if (tagInput.trim() && !tags.includes(tagInput.trim())) {
            setTags([...tags, tagInput.trim()]);
            setTagInput("");
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const addDish = () => {
        if (dishInput.trim() && !dishes.includes(dishInput.trim())) {
            setDishes([...dishes, dishInput.trim()]);
            setDishInput("");
        }
    };

    const removeDish = (dishToRemove: string) => {
        setDishes(dishes.filter(dish => dish !== dishToRemove));
    };

    return (
        <>
            <div className='w-4/5'>
            {/* Profile Image Section */}
            <div className="flex flex-col items-center mb-8">
                <div className="relative mb-2">
                    <div className="size-36 rounded-full flex items-center justify-center overflow-hidden bg-gray-2">
                        {profileImage && <Image src={profileImage} alt="Profile" width={112} height={112} className="w-full h-full object-cover" />}
                    </div>
                    <label htmlFor="profile-upload" className="absolute bottom-0 right-0 bg-dark-blue rounded-full size-10 border-2 border-white flex items-center justify-center text-white cursor-pointer">
                        <PlusIcon />
                        <input id="profile-upload" type="file" className="hidden" accept="image/*" onChange={handleProfileImageUpload} />
                    </label>
                </div>
                <button type="button" onClick={handleRemoveImage} className="text-sm text-red-600 font-medium pt-3 underline">
                    Remove Picture
                </button>
            </div>

            {/* Personal Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                    <label className="text-sm text-[#4B5162] pb-1.5 inline-block">Merchant Name</label>
                    <input type="text" className="block w-full rounded-sm border border-gray-2 p-2" />
                </div>
                <div>
                    <label className="text-sm text-[#4B5162] pb-1.5 inline-block">Merchant ID</label>
                    <input type="text"  className="block w-full rounded-sm border border-gray-2 p-2" />
                </div>
                <div>
                    <label className="text-sm text-[#4B5162] pb-1.5 inline-block">Email ID</label>
                    <input type="email"  className="block w-full rounded-sm border border-gray-2 p-2" />
                </div>
                <div>
                    <label className="text-sm text-[#4B5162] pb-1.5 inline-block">Contact Number</label>
                    <input type="number" className="block w-full rounded-sm border border-gray-2 p-2" />
                </div>
                <div>
                    <label className="text-sm text-[#4B5162] pb-1.5 inline-block">Business Type</label>
                    <select className="block w-full rounded-sm border border-gray-2 p-2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div>
                    <label className="text-sm text-[#4B5162] pb-1.5 inline-block">Location</label>
                    <input type="text" className="block w-full rounded-sm border border-gray-2 p-2" />
                </div>
                 <div>
                    <label className="text-sm text-[#4B5162] pb-1.5 inline-block">Timings</label>
                    <input type="time" className="block w-full rounded-sm border border-gray-2 p-2" />
                </div>
                 <div>
                    <label className="text-sm text-[#4B5162] pb-1.5 inline-block">Average cost for two (in INR)</label>
                    <input type="number" className="block w-full rounded-sm border border-gray-2 p-2" />
                </div>
            </div>

            {/* Tags Section */}
            <div className="space-y-2 mt-5">
                <span className="text-sm text-[#4B5162] inline-block">Tags</span>
                <div className="rounded-lg border border-gray-2 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.15)] px-6 py-8">
                    <div className="flex gap-2 items-center">
                        <input type="text"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addTag()}
                                placeholder="Write tags here" className="text-sm block w-full rounded-sm border border-gray-2 px-2 py-1.5 placeholder:text-[#3E3E3E]" />
                        <button onClick={addTag}
                            type="button"
                                className="bg-dark-blue text-white p-2 py-2.5 rounded-md">
                            <PlusIcon />
                        </button>
                    </div>
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {tags.map((tag, index) => (
                                <div key={index}
                                    className="flex items-center border border-gray-2 px-3 py-1 rounded-md text-sm text-[#6C6C6C]">
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


            {/* Popular Dishes Section */}
            <div className="space-y-2 mt-5">
                <span className="text-sm text-[#4B5162] inline-block">Popular Dishes</span>
                <div className="rounded-lg border border-gray-2 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.15)] px-6 py-8">
                    <div className="flex gap-2 items-center">
                        <input type="text"
                            value={dishInput}
                            onChange={(e) => setDishInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addDish()}
                            placeholder="Write popular dishes here"
                            className="text-sm block w-full rounded-sm border border-gray-2 px-2 py-1.5 placeholder:text-[#3E3E3E]" />
                        <button
                            onClick={addDish}
                            type="button"
                            className="bg-dark-blue text-white p-2 py-2.5 rounded-md">
                            <PlusIcon />
                        </button>
                    </div>
                    {dishes.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {dishes.map((dish, index) => (
                                <div key={index}
                                    className="flex items-center border border-gray-2 px-3 py-1 rounded-md text-sm text-[#6C6C6C]">
                                    {dish}
                                    <button onClick={() => removeDish(dish)} className="ml-2">
                                        <ModelCloseIcon />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-2 mt-6">
                <button className="border border-gray-300 px-6 py-2 rounded-lg">Cancel</button>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Save Changes</button>
                </div>
        </div>
        </>
    );
}
