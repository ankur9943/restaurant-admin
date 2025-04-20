'use client';

import React from 'react';
import ReactApexChart from 'react-apexcharts';

type Props = {
    label: string;
    value: number;
};

export default function TotalMerchants({ label }: Props) {
    const chartState = {
        series: [
            {
                name: 'High - 2013',
                data: [28, 29, 33, 36, 32, 32, 33],
            },
            {
                name: 'Low - 2013',
                data: [12, 11, 14, 18, 17, 13, 13],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.5,
                },
                zoom: { enabled: false },
                toolbar: { show: false },
            },
            colors: ['#52C41A', '#F16767'], // green and red
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '12px',
                    fontWeight: 'bold',
                },
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },
            title: {
                text: `Total ${label} Trend`,
                align: 'left',
                style: {
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#333',
                },
            },
            grid: {
                borderColor: '#e7e7e7',
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5,
                },
            },
            markers: {
                size: 0,
                shape: 'circle',
                strokeWidth: 1,
                strokeColors: '#fff',
                hover: {
                    size: 8,
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                    text: 'Month',
                    style: {
                        fontSize: '14px',
                        fontWeight: 'bold',
                    },
                },
            },
            yaxis: {
                title: {
                    text: 'Count',
                    style: {
                        fontSize: '14px',
                        fontWeight: 'bold',
                    },
                },
                min: 0,
                max: 50,
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5,
            },
        },
    };

    return (
        <div className="border border-gray-2 p-6 bg-white rounded-xl min-h-52">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-black/70">Total {label}</h3>
            </div>
            <ReactApexChart
                options={chartState.options}
                series={chartState.series}
                type="line"
                height={300}
            />
        </div>
    );
}
