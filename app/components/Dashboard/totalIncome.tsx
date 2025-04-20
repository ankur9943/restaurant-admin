'use client';

import React from 'react';
import ReactApexChart from 'react-apexcharts';

type Props = {
    label: string;
};

export default function TotalIncome({ label }: Props) {
    const chartState = {
        series: [
            {
                name: 'Total Income from Subscriptions',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
                name: 'Total Income from ad campaigns',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            colors: ['#5A6ACF', '#CF5ACD'],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '30%',
                    borderRadius: 0,
                    borderRadiusApplication: 'end',
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)',
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val: number) {
                        return '$ ' + val + ' thousands';
                    },
                },
            },
        },
    };

    return (
        <div className="border border-gray-2 p-6 bg-white  rounded-xl min-h-52">
            <h3 className="text-xl font-semibold text-black/70">{label}</h3>
            <ReactApexChart
                options={chartState.options}
                series={chartState.series}
                type="bar"
                height={350}
            />
        </div>
    );
}
