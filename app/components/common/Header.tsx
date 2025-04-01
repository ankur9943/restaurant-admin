import React from "react";
import Breadcrumb from "./Breadcrumb";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const pathnames = pathname.split("/").filter((x) => x) || [];

    const pageTitle = pathnames.length > 0
        ? decodeURIComponent(pathnames[pathnames.length - 1]).replace(/-/g, " ")
        : "Dashboard";

    return (
        <div className="py-4 px-8 flex justify-between items-center sticky top-0 bg-white z-10">
            <div className="space-y-2">
                <span className="text-sm text-grey">
                    <Breadcrumb />
                </span>

                <h2 className="text-xl font-medium text-black capitalize">
                    {pageTitle}
                </h2>
            </div>
        </div>
    );
}
