'use client';

import React from 'react';
import ReactApexChart from 'react-apexcharts';

type Props = {
  label: string;
  value: number;
};

export default function SubscriptionPlan({ label }: Props) {
  // Example fixed values for plans
  const planData = [
    { name: 'Plan 2', users: 6435, color: '#6B5DD3' },
    { name: 'Plan 1', users: 4344, color: '#A594F9' },
    { name: 'Plan 3', users: 1223, color: '#D5CCFF' },
  ];

  const totalUsers = planData.reduce((acc, item) => acc + item.users, 0);

  const chartData = {
    series: planData.map(p => p.users),
    options: {
      chart: {
        type: 'donut',
      },
      labels: planData.map(p => p.name),
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
      colors: planData.map(p => p.color),
      plotOptions: {
        pie: {
          donut: {
            size: '80%',
            labels: {
              show: true,
              value: {
                show: true,
                fontSize: '24px',
                fontWeight: 600,
                offsetY: 0,
                formatter: () => totalUsers.toString(),
              },
              total: {
                show: true,
                label: 'Total User',
                fontSize: '14px',
                color: '#999',
              },
            },
          },
        },
      },
    },
  };

  return (
    <div className="border border-gray-2 p-6 bg-white rounded-xl min-h-52">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-black">{label}</h3>
        <button className="text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded-md">Monthly ⌄</button>
      </div>

      <div className="flex items-center justify-between">
        <div className="w-[180px]">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            height={180}
          />
        </div>
        <div className="space-y-2">
          {planData.map((plan, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: plan.color }}
              ></span>
              <div className="text-sm text-gray-700">
                {plan.name} - <span className="font-medium">{plan.users} users</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
