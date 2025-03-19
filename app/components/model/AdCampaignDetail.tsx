import { ArrowIcon } from '@/app/helper/Svg';
import Link from 'next/link';
import React from 'react';
// import { ModelCloseIcon } from '@/app/helper/Svg';

interface AdCampaignDetailProps {
  onClose: () => void;
  params?: { id: string }; // Make params optional
}

interface Campaign {
  id: number;
  CampaignName: string;
}

const campaigns: Campaign[] = [
  { id: 1, CampaignName: "Campaign A" },
  { id: 2, CampaignName: "Campaign B" },
  { id: 3, CampaignName: "Campaign C" },
  { id: 4, CampaignName: "Campaign D" },
  { id: 5, CampaignName: "Campaign E" },
];

export default function AdCampaignDetail({ onClose, params }: AdCampaignDetailProps) {
  const campaign = params ? campaigns.find((c) => c.id.toString() === params.id) : undefined;


  return (
    <>
      {/* Modal Backdrop */}
      <div className="fixed bg-black/50 inset-0 z-10 flex justify-center items-center" onClick={onClose}>
        <div className="py-4 px-6 relative flex flex-col h-full w-full" onClick={(e) => e.stopPropagation()} >

          {/* Modal Header */}
          <div className="flex justify-between items-start mb-6">
            <button type='button' onClick={onClose} className="text-white text-xl font-normal font-['Poppins'] flex items-center">
              <span className='inline-block flex-shrink mr-3'><ArrowIcon color={'white'} /></span> {campaign.CampaignName}
            </button>
            <div className="flex space-x-3">
              <button className="text-[#AA2727] border border-[#AA2727] bg-white rounded p-2 px-5 font-medium text-sm">
                Reject Campaign
              </button>
              <button className="text-white bg-dark-blue border border-dark-blue rounded p-2 px-5 font-medium text-sm">
                Approve Campaign
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="space-y-4 bg-white min-h-[65dvh] min-w-[50vw] p-5 m-auto ">
            <h5 className="text-base font-normal">Campaign Details</h5>

          </div>
        </div>
      </div>
    </>
  );
}
