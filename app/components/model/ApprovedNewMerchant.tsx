import { ModelCloseIcon } from '@/app/helper/Svg'
import { useState } from 'react';
import ReasonRejectingCampaign from './ReasonRejectingCampaign';

interface AddNewMerchantProps {
    onClose: () => void;
}

export default function ApprovedNewMerchant({ onClose }: AddNewMerchantProps) {
    const [status, setStatus] = useState<"approved" | "rejected" | null>(null);


    return (
    <>
        {/* Model Backdrop */}
        <div className='fixed bg-white/50 inset-0 z-10 flex justify-center items-center backdrop-blur-sm' onClick={onClose}>
                <div onClick={(e) => e.stopPropagation()} className='bg-[#CDCDCD]/[75%] rounded-lg shadow-[0px_2px_4px_0px_#F3F3F3] max-w-3xl min-h-96 w-full relative flex justify-center items-center'>
                {/* Model Header */}
                <button onClick={onClose} type='button' title='Close'
                    className='border border-[#EEF1F6] bg-white hover:bg-dark-blue/10 rounded-3xl p-2 absolute top-1 right-1 '>
                    <ModelCloseIcon />
                </button>

                {/* Model Content */}
                <div className='space-y-4'>
                    <form className='flex flex-col justify-center items-center'>
                        <div className='space-y-5'>
                            <div>
                                <span className='text-sm pb-1.5 block'>Submitting at*</span>
                                <input type='date' className='bg-white rounded-md px-4 py-2 text-sm text-black max-w-[250px] w-full block outline-none' />
                            </div>
                            <div>
                                <span className='text-sm pb-1.5 block'>Employee Code *</span>
                                <input type='text' className='bg-white rounded-md px-4 py-2 text-sm text-black max-w-[250px] w-full block outline-none' />
                            </div>
                        </div>
                        <div className="flex space-x-5 mt-14">
                            <button
                                type="button"
                                title="Reject Profile"
                                onClick={() => setStatus("rejected")}
                                className="border rounded-lg transition-all px-6 py-2 text-sm font-medium bg-white text-[#AA2727] border-[#AA2727] hover:bg-[#AA2727] hover:text-white"
                            >
                                Reject Profile
                            </button>
                            <button
                                type="button"
                                title="Approve Profile"
                                onClick={() => setStatus("approved")}
                                className="border rounded-lg transition-all px-6 py-2 text-sm font-medium bg-[#3366FF] text-white border-[#3366FF] hover:bg-transparent hover:text-[#3366FF]"
                            >
                                Approve Profile
                                </button>
                            {status === "approved" && <ReasonRejectingCampaign onClose={() => setStatus(null)} />}
                            {status === "rejected" && <ReasonRejectingCampaign onClose={() => setStatus(null)} />}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
