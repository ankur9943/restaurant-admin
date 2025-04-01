import { ModelCloseIcon } from '@/app/helper/Svg'

interface ReasonRejectingCampaignProps {
    onClose: () => void;
}


export default function ReasonRejectingCampaign({ onClose }: ReasonRejectingCampaignProps) {

    return (
    <>
        {/* Model Backdrop */}
        <div className='fixed bg-black/50 inset-0 z-10 flex justify-center items-center' onClick={onClose}>
                <div className='bg-white rounded-lg shadow-[0px_2px_4px_0px_#F3F3F3] max-w-3xl w-full py-6' onClick={(e) => e.stopPropagation()}>
                <div className='space-y-8 px-4 s max-w-[95%] mx-auto'>

                    {/* Model Header */}
                    <div className='flex justify-between items-start space-x-3'>
                        <h4 className='font-semibold text-[#1E1B39] text-xl xl:text-[22px]'>
                            Notify Merchant about New account <span className='text-[#1CA672]'>“Approval”</span>
                        </h4>
                        <button onClick={onClose}   type='button' title='Close'
                            className='border border-[#EEF1F6] bg-white hover:bg-dark-blue/10 rounded-3xl p-2'>
                            <ModelCloseIcon />
                        </button>
                    </div>

                    {/* Model Content */}
                    <div>
                        <textarea className='text-sm font-normal border border-[#D9D9D9] rounded-md p-3 w-full block min-h-40'>
                            We are pleased to inform you that your merchant account [Merchant/Store Name & ID] has been successfully approved and is now ready to go live on our platform.
                            Account Details:
                            Merchant/Store Name: [Name & ID]
                            Activation Date: [Start Date]
                            Your account will now be visible to the customers, helping you reach a wider audience and business growth.
                        </textarea>
                    </div>

                    {/* Model Footer */}
                    <div className='flex space-x-3 justify-end'>
                        <button type='button' title='No, Cancel' onClick={onClose} className='border-btn'>Discard</button>
                        <button type='button' title='Notify Client' className='blue-fill-btn'>Notify Client</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
