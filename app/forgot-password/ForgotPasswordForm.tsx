import React from 'react'
import { ArrowIcon } from '../helper/Svg'
import Link from 'next/link'

export default function ForgotPasswordForm() {
  return (
      <>
          <Link href="/" className="text-black text-xl font-normal font-['Poppins'] flex items-center">
              <span className='inline-block flex-shrink mr-3'><ArrowIcon color={'black'} /></span> Forgot Password
          </Link>
          <div className='my-10'>
              <form className='space-y-5'>
                  {/* Email */}
                  <div>
                      <label htmlFor='email' className='form-label'><span>*</span>Enter Registered Email</label>
                      <input type="email" name="remail" id="remail" autoComplete="remail" required placeholder='Email' className='form-input' />
                      {/* <span className='error'></span> */}
                  </div>

                  {/* Submit Button */}
                  <button type='submit' className='text-base font-normal bg-[#3366ff] text-white rounded-md shadow-[0px_2px_0px_0px_rgba(5,145,255,0.10)] min-h-10 block p-2.5 w-full !mt-14'>
                      <span>Send OTP</span>
                      {/* Loader */}
                      {/* <span></span> */}
                  </button>
              </form>
          </div>


          {/* Send Otp Than Show Otp Screen */}



          {/* <div className='my-10'>
              <form className='space-y-5'>
                  <div>
                      <label htmlFor='otp' className='form-label'>Enter OTP</label>
                      <div>
                        <input type="number" name="otp" id="otp" placeholder='OTP' required className='form-input' />
                        <div className='flex items-center justify-between text-base text-[#6C6C6C] font-normal mt-1'>
                            <span>00: 33</span>
                            <button type='button' className='underline hover:no-underline'>Resend</button>
                        </div>
                      </div>
                      {error && <span className='error'></span>}
                  </div>
                  <button type='submit'
                      className='text-base font-normal bg-[#3366ff] text-white
                      rounded-md shadow-[0px_2px_0px_0px_rgba(5,145,255,0.10)] min-h-10 block p-2.5 w-full !mt-14'>
                      <span>Verify OTP</span>

                  </button>
              </form>
          </div> */}
      </>
  )
}
