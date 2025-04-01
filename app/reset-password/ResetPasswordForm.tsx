'use client'
import React, { useState } from 'react'
import { EyeIcon, SlashEyeIcon } from '../helper/Svg';

export default function ResetPasswordForm() {
    // Separate states for each password field visibility
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);

    // Toggle visibility for the new password
    const toggleNewPasswordVisibility = () => {
        setIsNewPasswordVisible(!isNewPasswordVisible);
    };

    // Toggle visibility for the re-enter password
    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

    return (
        <div>
            <h1 className="text-black text-xl font-normal font-['Poppins']">Forgot Password</h1>
            <div className='my-10'>
                <form className='space-y-5'>

                    {/* Enter New Password */}
                    <div>
                        <label htmlFor='newpassword' className='form-label'>
                            <span>*</span>Enter New Password
                        </label>
                        <div className='relative'>
                            <input
                                type={isNewPasswordVisible ? 'text' : 'password'}
                                name="newpassword"
                                id="newpassword"
                                required
                                placeholder='Password'
                                className='form-input !pe-8'
                            />
                            <span
                                className='absolute top-4 right-4 cursor-pointer'
                                onClick={toggleNewPasswordVisibility}
                            >
                                {!isNewPasswordVisible ? <SlashEyeIcon /> : <EyeIcon />}
                            </span>
                        </div>
                    </div>

                    {/* Re-enter New Password */}
                    <div>
                        <label htmlFor='matchpassword' className='form-label'>
                            <span>*</span>Re-enter New Password
                        </label>
                        <div className='relative'>
                            <input
                                type={isConfirmPasswordVisible ? 'text' : 'password'}
                                name="matchpassword"
                                id="matchpassword"
                                required
                                placeholder='Password'
                                className='form-input !pe-8'
                            />
                            <span
                                className='absolute top-4 right-4 cursor-pointer'
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {!isConfirmPasswordVisible ? <SlashEyeIcon /> : <EyeIcon />}
                            </span>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        className='text-base font-normal bg-[#3366ff] text-white
                           rounded-md shadow-[0px_2px_0px_0px_rgba(5,145,255,0.10)] min-h-10 block p-2.5 w-full !mt-14'
                    >
                        <span>Reset Password</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
