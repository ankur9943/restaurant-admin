"use client";
import { useState } from "react";
import { CrossIcon, FilterIcon } from "../../helper/Svg";
import Merchants from "../../components/merchants/Merchants";
import Staff from "../../components/staff/Staff";
import Consumers from "../../components/consumers/Consumers";
import ReasonRejectingCampaign from "@/app/components/model/ReasonRejectingCampaign";



export default function AllCampaign() {
  const [activeTab, setActiveTab] = useState("Approved");
  return (
    <>
      <div className="grid grid-cols-3 border-b-8 border-[#F1F1F1] mb-6 [&>:last-child]:before:hidden">
        {["Approved", "Rejected", "Pending"].map((tab) => (
          <button
            key={tab}
            className={`py-6 px-4 font-medium relative duration-300 after:w-full hover:text-black/80 text-lg lg:text-xl xl:text-2xl
                after:h-2 after:bg-dark-blue after:-bottom-2 after:absolute after:left-0 after:rounded after:transition-opacity
                before:h-1/2 after:my-auto before:bg-black/10 before:absolute before:top-auto before:bottom-auto before:right-0 before:w-[1px]

                ${activeTab === tab ? "after:opacity-1 text-black/80" : "text-black/40 after:opacity-0"}`}
            onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>


      {/* Tab Pane */}
      <div>
        {activeTab === "Approved" ? (
          <Merchants />
        ) : activeTab === "Rejected" ? (
          <Staff />
          ) : activeTab === "Pending" ? (
          <Consumers />
        ) : null}
      </div>
    </>
  );
}
