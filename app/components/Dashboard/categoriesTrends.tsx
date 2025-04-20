import React from 'react'

type Props = {
    label: string;
    value: number;
};

export default function TagsCategoriesTrends({ label }: Props) {
    return (
        <div className="border border-gray-2 p-6 bg-white shadow rounded-xl min-h-52">
            <h3 className="text-xl font-semibold text-black/70">{label}</h3>
        </div>
    );
}
