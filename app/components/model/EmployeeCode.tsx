import { ModelCloseIcon } from '@/app/helper/Svg'
import EditProfile from './EditProfile';
import { useState } from 'react';


interface EmployeeCodeProps {
    onClose: () => void;
}

export default function EmployeeCode({ onClose }: EmployeeCodeProps): JSX.Element {
    const STATIC_CODE: string = 'EMP123';
    const [inputCode, setInputCode] = useState<string>('');
    const [isMatched, setIsMatched] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (inputCode === STATIC_CODE) {
            setIsMatched(true);
            setError('');
        } else {
            setIsMatched(false);
            setError('Invalid employee code');
        }
    };


    return (
    <>
        {/* Model Backdrop */}
        <div className='fixed bg-white/50 inset-0 z-10 flex justify-center items-center backdrop-blur-sm' onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}
                className='bg-[#CDCDCD]/[75%] rounded-lg shadow-[0px_2px_4px_0px_#F3F3F3] max-w-3xl min-h-96 w-full relative flex justify-center items-center'>
                {/* Model Header */}
                <button onClick={onClose} type='button' title='Close'
                    className='border border-[#EEF1F6] bg-white hover:bg-dark-blue/10 rounded-3xl p-2 absolute top-1 right-1 '>
                    <ModelCloseIcon />
                </button>

                {/* Model Content */}
                <div className='space-y-4'>
                    <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                        <div className='flex space-x-2 items-center'>
                            <label className='text-sm block text-[#3E3E3E]'>Employee Code *</label>
                            <input
                                type='text'
                                required
                                placeholder='Code'
                                name='employee_code'
                                value={inputCode}
                                onChange={(e) => setInputCode(e.target.value)}
                                className='bg-white rounded-md px-4 py-2 text-sm text-black max-w-[250px] w-full block outline-none'
                            />
                        </div>
                        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
                        <button
                            type='submit'
                            className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md text-sm'>
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </div>

        {isMatched && (
            <EditProfile />
        )}
    </>
  )
}
