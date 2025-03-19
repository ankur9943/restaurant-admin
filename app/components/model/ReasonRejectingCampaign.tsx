import { ModelCloseIcon } from '@/app/helper/Svg'

interface ReasonRejectingCampaignProps {
    onClose: () => void;
}


export default function ReasonRejectingCampaign({ onClose }: ReasonRejectingCampaignProps) {

    return (
    <>
        {/* Model Backdrop */}
        <div className='fixed bg-black/50 inset-0 z-10 flex justify-center items-center' onClick={onClose}>
            <div className='bg-white rounded-lg shadow-[0px_2px_4px_0px_#F3F3F3] max-w-5xl min-h-96 py-4'>
                <div className='space-y-8 p-5 max-w-[95%] mx-auto'>

                    {/* Model Header */}
                    <div className='flex justify-between items-start space-x-3'>
                        <h4 className='font-semibold text-[#1E1B39] text-xl xl:text-2xl'>Please State Reason for Rejecting Campaign</h4>
                        <button onClick={onClose}   type='button' title='Close'
                                className='border border-[#EEF1F6] bg-white hover:bg-dark-blue/10 rounded-3xl p-2'>
                            <ModelCloseIcon />
                        </button>
                    </div>

                    {/* Model Content */}
                    <div className='space-y-4'>
                        <h5 className='text-base font-normal'>Reason for rejection</h5>
                        <ul className='list-disc text-sm font-normal border border-[#D9D9D9] rounded-md p-6'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore</li>
                            <li>et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                            <li>commodo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et</li>
                            <li>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </li>
                        </ul>
                    </div>

                    {/* Model Footer */}
                    <div className='flex space-x-3 justify-end'>
                        <button type='button' title='No, Cancel' onClick={onClose} className='border-btn'>No, Cancel</button>
                        <button type='button' title='Reject Campaign' className='blue-fill-btn'>Reject Campaign</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
