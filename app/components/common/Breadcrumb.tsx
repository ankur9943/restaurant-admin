"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {

    const pathname = usePathname();
    const pathnames = pathname.split("/").filter((x) => x) || [];

    // Remove 'dashboard' if it's the first segment
    // if (pathnames[0]?.toLowerCase() === "dashboard") {
    //     pathnames = pathnames.slice(1);
    // }

    return (
        <div className="flex items-center space-x-1.5 text-sm text-gray-600">
            {pathnames.length == 0 && (
                <Link href="/" className="hover:text-dark-blue">
                    dashboard
                </Link>
            )}
            {pathnames.map((path, index) => {
                const href = "/" + pathnames.slice(0, index + 1).join("/");
                const isLast = index === pathnames.length - 1;

                return (
                    <div key={href} className="flex items-center space-x-2">
                        <span>/</span>
                        {isLast ? (
                            <span className="text-gray-900 font-medium">
                                {decodeURIComponent(path)}
                            </span>
                        ) : (
                            <Link href={href} className="hover:text-dark-blue">
                                {decodeURIComponent(path)}
                            </Link>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
