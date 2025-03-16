import Link from 'next/link'
import React from 'react'

export default function SignInForm() {
  return (
    <>
      <h1 className="text-black text-xl font-normal font-['Poppins']">Sign In</h1>
      <div className='my-10'>
        <form className='space-y-5'>

          {/* Email */}
          <div>
            <label htmlFor='email' className='form-label'><span>*</span>Email</label>
            <input type="email" name="email" id="email" autoComplete="email" required placeholder='Email' className='form-input' />
            {/* <span className='error'></span> */}
          </div>

          {/* Password */}
          <div>
            <div>
              <label htmlFor='password' className='form-label'><span>*</span>Password</label>
              <input type="password" name="password" id="password" autoComplete="current-password" required placeholder='Password' className='form-input' />
              {/* <span className='error'></span> */}
            </div>
            <Link href='/forgot-password' className='text-[#36F] text-sm mt-4 hover:underline underline-offset-1 ml-auto w-fit block' title='Forgot Password'>Forgot Password?</Link>
          </div>

          {/* Submit Button */}
          <button type='submit' className='text-base font-normal bg-[#3366ff] text-white rounded-md shadow-[0px_2px_0px_0px_rgba(5,145,255,0.10)] min-h-10
          block p-2.5 w-full !mt-14'>
            <span>Sign In</span>
            {/* Loader */}
            {/* <span></span> */}
          </button>

        </form>
      </div>
    </>
  )
}
