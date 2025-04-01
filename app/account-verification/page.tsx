"use client";
import { JSX, useState } from "react";
import { CrossIcon, FilterIcon } from "../helper/Svg";
import Merchants from "../components/merchants/Merchants";
import Staff from "../components/staff/Staff";
import Consumers from "../components/consumers/Consumers";
import Link from "next/link";

type TabItem = {
    id: number;
    name: string;
    Table: JSX.Element;
};

const tabData: TabItem[] = [
    { id: 1, name: "Merchants", Table: <Merchants /> },
    { id: 2, name: "Staff", Table: <Staff /> },
    { id: 3, name: "Consumers", Table: <Consumers /> }
];

export default function AccountVerificationPage() {
    const [activeTab, setActiveTab] = useState<number>(1);

    return (
        <div>
            {/* Tab Navigation */}
            <div className="grid grid-cols-3 border-b-8 border-[#F1F1F1] mb-4 [&>:last-child]:before:hidden">
                {tabData.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-style ${activeTab === tab.id ? "after:opacity-1 text-black/80" : "text-black/40 after:opacity-0"}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.name} (1000)
                    </button>
                ))}
            </div>

            {/* Filters */}
            <div className="flex justify-between space-x-2 items-center my-8">
                <div className="flex gap-2">
                    <div>
                        <label htmlFor="search-email" className="sr-only">Search By Name or Email</label>
                        <div className="relative">
                            <input type="search" name="search-email" placeholder="Search by Name or Email"
                                className="text-sm font-medium border border-gray-2 py-2 px-3 pe-9 rounded-lg w-full placeholder:text-[#7A85B2] focus:border-dark-blue outline-none" />
                            <button className="bg-black/25 rounded-full hover:bg-dark-blue transition-all absolute right-4 inline-block top-0 bottom-0 h-fit my-auto">
                                <CrossIcon />
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="search-district" className="sr-only">Search By City or District</label>
                        <div className="relative">
                            <input type="search" name="search-district" placeholder="Search By City or District"
                                className="text-sm font-medium border border-gray-2 py-2 px-3 pe-9 rounded-lg w-full placeholder:text-[#7A85B2] focus:border-dark-blue outline-none" />
                            <button className="bg-black/25 rounded-full hover:bg-dark-blue transition-all absolute right-4 inline-block top-0 bottom-0 h-fit my-auto">
                                <CrossIcon />
                            </button>
                        </div>
                    </div>
                    <button type="button" className="px-4 py-2 rounded-lg bg-dark-blue text-white text-sm font-medium hover:opacity-85 transition-all duration-300">
                        <FilterIcon />
                    </button>
                    <button type="button" className="border border-dark-blue px-4 py-2 rounded-lg text-dark-blue hover:bg-dark-blue hover:text-white text-sm font-medium hover:opacity-85 transition-all duration-300">
                        Clear All <span>Filters(22)</span>
                    </button>
                </div>

                <div className="flex space-x-2">
                    <div className="inline-flex rounded-md shadow-xs" role="group">
                        <button type="button" className="text-[#7A85B2] text-sm font-medium border-gray-2 px-3 py-2 border rounded-s-lg hover:bg-dark-blue hover:text-white transition-all duration-300">
                            Approved
                        </button>
                        <button type="button" className="text-[#7A85B2] text-sm font-medium border-gray-2 px-3 py-2 border-t border-b hover:bg-dark-blue hover:text-white transition-all duration-300">
                            Rejected
                        </button>
                        <button type="button" className="text-[#7A85B2] text-sm font-medium border-gray-2 px-3 py-2 rounded-e-lg hover:bg-dark-blue hover:text-white border transition-all duration-300">
                            Pending
                        </button>
                    </div>
                    <Link href={`/account-verification/`} title="Add Member" className="blue-fill-btn">
                        {activeTab === 1 ? "Add Merchants" : activeTab === 2 ? "Add Staff" : null}
                    </Link>
                </div>
            </div>

            {/* Active Tab Content */}
            <div>
                {tabData.find((tab) => tab.id === activeTab)?.Table}
            </div>
        </div>
    );
}
