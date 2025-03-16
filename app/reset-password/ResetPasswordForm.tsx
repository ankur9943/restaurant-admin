'use client'
import React from 'react'

export default function ResetPasswordForm() {
  return (
    <div>
          <h1 className="text-black text-xl font-normal font-['Poppins']">Forgot Password</h1>
          <div className='my-10'>
              <form className='space-y-5'>

                  {/* Enter New Password */}
                  <div>
                      <label htmlFor='newpassword' className='form-label'><span>*</span>Enter New Password</label>
                      <input type="password" name="newpassword" id="newpassword" required placeholder='Password' className='form-input' />
                      {/* <span className='error'></span> */}
                  </div>

                  {/* Re-enter New Password */}
                  <div>
                      <label htmlFor='matchpassword' className='form-label'><span>*</span>Re-enter New Password</label>
                      <input type="password" name="matchpassword" id="matchpassword" required placeholder='Password' className='form-input' />
                      {/* <span className='error'></span> */}
                  </div>

                  {/* Submit Button */}
                  <button type='submit' className='text-base font-normal bg-[#3366ff] text-white
                           rounded-md shadow-[0px_2px_0px_0px_rgba(5,145,255,0.10)] min-h-10 block p-2.5 w-full !mt-14'>
                      <span>Reset Password</span>
                      {/* Loader */}
                      {/* <span></span> */}
                  </button>
              </form>
          </div>
    </div>
  )
}
