"use client";
import { useState } from "react";
import { CrossIcon, FilterIcon } from "../helper/Svg";
import Merchants from "../components/merchants/Merchants";
import Staff from "../components/staff/Staff";
import Consumers from "../components/consumers/Consumers";
import ReasonRejectingCampaign from "../components/model/ReasonRejectingCampaign";


export default function AccountVerificationPage() {
    const [activeTab, setActiveTab] = useState("Merchants");
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {isOpen && (<ReasonRejectingCampaign onClose={() => setIsOpen(false)} />)}
            <div>
                <div className="grid grid-cols-3 border-b-8 border-[#F1F1F1] mb-4 [&>:last-child]:before:hidden">
                    {["Merchants", "Staff", "Consumers"].map((tab) => (
                        <button
                            key={tab}
                            className={`tab-style
                    ${activeTab === tab ? "after:opacity-1 text-black/80" : "text-black/40 after:opacity-0"}`}
                            onClick={() => setActiveTab(tab)}>
                            {tab} (1000)
                        </button>
                    ))}
                </div>

                {/* Filters */}
                <div className="flex justify-between space-x-2 items-center my-8">
                    <div className="flex gap-2">
                        <div className="">
                            <label htmlFor="search-email" className="sr-only">Search By Name or Email </label>
                            <div className="relative">
                                <input type="search" name="search-email" placeholder="Search by Name or Email" className="text-sm font-medium border border-gray-2 py-2 px-3 pe-9 rounded-lg w-full placeholder:text-[#7A85B2] focus:border-dark-blue outline-none" />
                                <button className="bg-black/25 rounded-full hover:bg-dark-blue transition-all absolute right-4 inline-block top-0 bottom-0 h-fit my-auto">
                                    <CrossIcon />
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="search-district" className="sr-only">Search By Name or Email </label>
                            <div className="relative">
                                <input type="search" name="search-district" placeholder="Search By City or District" className="text-sm font-medium border border-gray-2 py-2 px-3 pe-9 rounded-lg w-full placeholder:text-[#7A85B2] focus:border-dark-blue outline-none" />
                                <button className="bg-black/25 rounded-full hover:bg-dark-blue transition-all absolute right-4 inline-block top-0 bottom-0 h-fit my-auto">
                                    <CrossIcon />
                                </button>
                            </div>
                        </div>
                        <button type="button" className="px-4 py-2 rounded-lg bg-dark-blue text-white text-sm font-medium hover:opacity-85 transition-all duration-300">
                            <FilterIcon />
                        </button>
                        <button type="button" className="border border-dark-blue px-4 py-2 rounded-lg text-dark-blue hover:bg-dark-blue hover:text-white text-sm font-medium hover:opacity-85 transition-all duration-300">
                            Clear All
                            <span> Filters(22) </span>
                        </button>
                    </div>

                    <div className="flex space-x-2">
                        <div className="inline-flex rounded-md shadow-xs" role="group">
                            <button type="button" className="text-[#7A85B2] text-sm font-medium border-gray-2
                                    px-3 py-2 border rounded-s-lg hover:bg-dark-blue hover:text-white transition-all duration-300">
                                Active
                            </button>
                            <button type="button" className="text-[#7A85B2] text-sm font-medium border-gray-2
                                    px-3 py-2 border-t border-b hover:bg-dark-blue hover:text-white transition-all duration-300">
                                Inactive
                            </button>
                            <button type="button" className="text-[#7A85B2] text-sm font-medium border-gray-2
                                px-3 py-2 rounded-e-lg hover:bg-dark-blue hover:text-white border transition-all duration-300">
                                Banned
                            </button>
                        </div>
                        <button type="button" title="Add Consumer"
                            className="blue-fill-btn" onClick={() => setIsOpen(true)}>
                            {
                                activeTab === 'Merchants' ?
                                    ('Add Merchants') :
                                activeTab === 'Staff' ?
                                    ('Add Staff') :
                                activeTab === 'Consumers' ?
                                    ('Add Consumers') : null
                            }
                        </button>
                    </div>
                </div>

                {/* Tab Pane */}
                <div>
                    {activeTab === "Merchants" ? (
                        <Merchants />
                    ) : activeTab === "Staff" ? (
                        <Staff />
                    ) : activeTab === "Consumers" ? (
                        <Consumers />
                    ) : null}
                </div>
            </div>
        </>
    );
}
