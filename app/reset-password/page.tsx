import React from 'react'
import Image from "next/image";
import LoginImage from '@/public/assets/images/login-image.jpg'
import ResetPasswordForm from './ResetPasswordForm';

export default function ForgotPassword() {
  return (
      <div className="flex justify-center items-center min-h-dvh p-5">
          <div className="w-full max-w-[991px] bg-white rounded-[14px] border border-[#d9d9d9] flex justify-between p-10">
              <div className="rounded-[14px] overflow-hidden basis-[45%] hidden md:block">
                  <Image src={LoginImage} alt="" />
              </div>
              <div className="w-full md:basis-1/2">
                  <ResetPasswordForm/>
              </div>
          </div>
      </div>
  )
}
