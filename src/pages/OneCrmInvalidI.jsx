import React from "react";
import DashboardStatsGrid from "../components/DashboardStatsGrid";
import OneCrmInvalid from "../components/OneCrmInvalid";

export default function OneCrmInvalidI() {
  return (
    <div className="flex flex-col gap-4">
      {/* <DashboardStatsGrid /> */}

      <div className="flex flex-row gap-4 w-full">
        <OneCrmInvalid />
        {/* <BuyerProfilePieChart /> */}
      </div>
      <div className="flex flex-row gap-4 w-full">
        {/* <TransactionChart />
	<PopularProducts /> */}
      </div>
    </div>
  );
}
