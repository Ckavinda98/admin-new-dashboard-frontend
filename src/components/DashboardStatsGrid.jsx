import React from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoApps } from "react-icons/io5";

export default function DashboardStatsGrid({ system, product, deploy, size }) {
  return (
    <div className="flex gap-2 w-full border-slate-900">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-wite">
          <IoApps className="text-2xl text-blue" />
        </div>
        <div className="pl-2">
          <span className="text-sm text-gray-500 font-semibold">NS Status</span>
          <div className="flex items-center">
            <strong className="text-sm text-gray-700 font-light">Count:</strong>
            <span className="text-sm text-green-500 pl-2">
              {product && product}
            </span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-white">
          <IoApps className="text-2xl text-blue" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-semibold">
            Application Status
          </span>
          <div className="flex items-center">
            <strong className="text-sm text-gray-700 font-light">Count:</strong>
            <span className="text-sm text-green-500 pl-2">
              {deploy && deploy}
            </span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-wite">
          <IoApps className="text-2xl text-blue" />
        </div>
        <div className="pl-2">
          <span className="text-sm text-gray-500 font-semibold">
            Size Status
          </span>
          <div className="flex items-center">
            <strong className="text-sm text-gray-700 font-light">Count:</strong>
            <span className="text-sm text-green-500 pl-2">
              {size && parseFloat(size).toFixed(2)}Tb
            </span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-wite">
          <IoApps className="text-2xl text-blue" />
        </div>
        <div className="pl-2">
          <span className="text-sm text-gray-500 font-semibold">
            System Status
          </span>
          <div className="flex items-center">
            <strong className="text-sm text-gray-700 font-light">Count:</strong>
            <span className="text-sm text-green-500 pl-2">
              {system && system}
            </span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-2 flex-1 border-slate-900		 flex items-center">
      {children}
    </div>
  );
}
