"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
    const pathname = usePathname();
    const pathnames = pathname.split("/").filter((x) => x) || [];

    return (
        <nav className="flex items-center space-x-1 text-sm text-gray" aria-label="Breadcrumb">
            {pathnames.length === 0 ? (
                <Link href="/" className="hover:text-dark-blue">
                    Dashboard
                </Link>
            ) : (
                <>
                    {pathnames.map((path, index) => {
                        const href = "/" + pathnames.slice(0, index + 1).join("/");
                        const isLast = index === pathnames.length - 1;

                        return (
                            <div key={href} className="flex items-center space-x-1">
                                {index > 0 && <span>/</span>}
                                {isLast ? (
                                    <span className="text-gray font-medium capitalize" aria-current="page">
                                        {decodeURIComponent(path.replace(/-/g, ' '))}
                                    </span>
                                ) : (
                                    <Link href={href} className="hover:text-dark-blue capitalize">
                                        {decodeURIComponent(path.replace(/-/g, ' '))}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </>
            )}
        </nav>
    );
}
