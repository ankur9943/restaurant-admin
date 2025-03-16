"use client";
import React from "react";
import { notFound } from "next/navigation";

interface Campaign {
    id: number;
    CampaignName: string;
}

const campaigns: Campaign[] = [
    {
        id: 1,
        CampaignName: "Campaign Name",
    },
];

export default function CampaignDetail({ params }: { params: { id: string } }) {
    const campaign = campaigns.find((c) => c.id.toString() === params.id);

    if (!campaign) {
        return notFound();
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-dark-blue">{campaign.CampaignName}</h1>
            {/* You can add more campaign details here */}
        </div>
    );
}
