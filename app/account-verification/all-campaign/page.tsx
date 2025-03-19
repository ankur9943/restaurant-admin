"use client";
import { useState } from "react";
import { DeleteIcon, RightArrowIcon } from "../../helper/Svg";
import Link from "next/link";
import AdCampaignDetail from "@/app/components/model/AdCampaignDetail";

const campaignList = [
  { ID: 1, CampaignName: "Campaign A", StartDate: "01/01/2024", EndDate: "10/01/2024", SubmittedOn: "02/01/2024", ApprovedOn: "05/01/2024", Status: "Approved" },
  { ID: 2, CampaignName: "Campaign B", StartDate: "02/02/2024", EndDate: "12/02/2024", SubmittedOn: "03/02/2024", ApprovedOn: "06/02/2024", Status: "Rejected" },
  { ID: 3, CampaignName: "Campaign C", StartDate: "03/03/2024", EndDate: "15/03/2024", SubmittedOn: "04/03/2024", ApprovedOn: "07/03/2024", Status: "Pending" },
  { ID: 4, CampaignName: "Campaign D", StartDate: "05/04/2024", EndDate: "20/04/2024", SubmittedOn: "06/04/2024", ApprovedOn: "10/04/2024", Status: "Approved" },
  { ID: 5, CampaignName: "Campaign E", StartDate: "06/05/2024", EndDate: "25/05/2024", SubmittedOn: "07/05/2024", ApprovedOn: "12/05/2024", Status: "Rejected" }
];

interface CampaignParams {
  id?: string;
}

export default function AllCampaign() {
  const [activeTab, setActiveTab] = useState("Approved");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredCampaigns = campaignList.filter((campaign) => campaign.Status === activeTab);

  return (
    <>
      {selectedId && <AdCampaignDetail onClose={() => setSelectedId(null)} params={{ id: selectedId }} />}

      {/* Tab Navigation */}
      <div className="grid grid-cols-3 border-b-8 border-[#F1F1F1] mb-6 [&>:last-child]:before:hidden">
        {["Approved", "Rejected", "Pending"].map((tab) => (
          <button
            key={tab}
            className={`tab-style ${activeTab === tab ? "text-black/80 after:opacity-100" : "text-black/40 after:opacity-0"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Campaign Table */}
      <div className="overflow-x-auto bg-white rounded-lg border border-black/10">
        <table className="w-full border-collapse text-sm">
          <thead className="table-head-style">
            <tr>
              <th>ID</th>
              <th>Campaign Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Submitted On</th>
              <th>Approved On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-body-style [&_td]:text-center">
            {filteredCampaigns.map((data) => (
              <tr key={data.ID}>
                <td>{data.ID}</td>
                <td>
                  <Link
                    className="hover:underline transition-all duration-300 hover:text-dark-blue"
                    href={`/account-verification/all-campaign/${data.ID}`}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation
                      setSelectedId(data.ID.toString());
                    }}
                  >
                    {data.CampaignName}
                  </Link>
                </td>
                <td>{data.StartDate}</td>
                <td>{data.EndDate}</td>
                <td>{data.SubmittedOn}</td>
                <td>{data.ApprovedOn}</td>
                <td className="text-center">
                  <div className="flex space-x-2 justify-center">
                    <button type="button" title="Delete" className="border border-black/10 rounded-lg p-2 hover:bg-dark-blue/10">
                      <DeleteIcon />
                    </button>
                    <button type="button" title="Move" className="border border-black/10 rounded-lg p-2 hover:bg-dark-blue/10">
                      <RightArrowIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
