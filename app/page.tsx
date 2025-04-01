'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoginImage from '@/public/assets/images/login-image.jpg'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { EyeIcon, SlashEyeIcon } from './helper/Svg';

const schema = yup.object().shape({
  email: yup.string().required("Email is required.").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),
  password: yup.string().required("Password is required.").min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one uppercase letter, one number, and one special character"),
});

interface FormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const Router: AppRouterInstance = useRouter()
  const [isShow , isSetShow] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

  async function SubmitHandler(data: FormData) {
    console.log(data)
    Router.push('/dashboard')
  }

  const togglePasswordVisibility = () => {
    isSetShow(!isShow)
  }

  return (
    <div className="flex justify-center items-center min-h-dvh p-5">
      <div className="w-full max-w-[991px] bg-white rounded-[14px] border border-[#d9d9d9] flex justify-between p-10">
        <div className="rounded-[14px] overflow-hidden basis-[45%] hidden md:block">
          <Image src={LoginImage} alt="Login" />
        </div>
        <div className="w-full md:basis-1/2">
          <h1 className="text-black text-xl font-normal font-['Poppins']">Sign In</h1>
          <div className='my-10'>
            <form className='space-y-5' onSubmit={handleSubmit(SubmitHandler)}>
              {/* Email */}
              <div>
                <label htmlFor='email' className='form-label'><span>*</span>Email</label>
                <input type="email" {...register("email")} id="email" autoComplete="email" placeholder='Email' className='form-input' />
                {errors.email && <p className='form-error'>{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor='password' className='form-label'><span>*</span>Password</label>
                <div className='relative'>
                  <input type={isShow ? 'text':'password'} {...register("password")} id="password" autoComplete="current-password" placeholder='Password' className='form-input !pe-8' />
                  <span className='absolute top-4 right-4 cursor-pointer' onClick={togglePasswordVisibility}>
                    {!isShow ? <SlashEyeIcon /> : <EyeIcon />}
                  </span>
                </div>
                {errors.password && <p className='form-error'>{errors.password.message}</p>}
              </div>

              <Link href='/forgot-password' className='text-[#36F] text-sm mt-4 ml-auto w-fit block hover:underline underline-offset-1' title='Forgot Password'>
                Forgot Password?
              </Link>

              {/* Submit Button */}
              <button type='submit' className='text-base font-normal bg-[#3366ff] text-white rounded-md shadow-[0px_2px_0px_0px_rgba(5,145,255,0.10)] min-h-10 block p-2.5 w-full !mt-14'>
                <span>Sign In</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
