import React from "react";
import Breadcrumb from "./Breadcrumb";
import { usePathname } from "next/navigation";
import Image from "next/image";
import UserProfilePicture from '@/public/assets/images/campaign-image.png'
import { BellIcon } from "@/app/helper/Svg";

export default function Header() {
    const pathname = usePathname();
    const pathnames = pathname.split("/").filter((x) => x) || [];

    const pageTitle = pathnames.length > 0
        ? decodeURIComponent(pathnames[pathnames.length - 1]).replace(/-/g, " ")
        : "Dashboard";

    return (
        <div className="py-4 px-8 flex justify-between items-center sticky top-0 bg-white z-10 shadow-[0px_1px_5px_0px_rgba(0,0,0,0.14)]">
            <div className="space-y-2">
                <span className="text-sm text-grey">
                    <Breadcrumb />
                </span>
                <h2 className="text-xl font-medium text-black capitalize">
                    {pageTitle}
                </h2>
            </div>

            <div className='flex items-center space-x-5'>

                {/* Notification */}
                <div className="rounded-full size-12 relative border border-[#d9d9d9] flex justify-center items-center shadow-lg">
                    <BellIcon />
                    <span className="bg-[#FF4D4F] rounded-full text-xs text-center px-1.5 py-1 inline-block text-white
                    absolute -top-2 -right-2">21</span>
                </div>

                {/* User Profile */}
                <div className="rounded-full size-12 overflow-hidden border border-[#d9d9d9]">
                    <Image width={46} height={46} src={UserProfilePicture} alt="User Profile Picture" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
}
