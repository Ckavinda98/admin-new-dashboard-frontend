import React from "react";
import DashboardStatsGrid from "../components/DashboardStatsGrid";
import OneCrmIndex from "../components/OneCrmIndex";

export default function Register() {
  return (
    <div className="flex flex-col gap-4">
      {/* <DashboardStatsGrid /> */}

      <div className="flex flex-row gap-4 w-full">
        <OneCrmIndex />
        {/* <BuyerProfilePieChart /> */}
      </div>
      <div className="flex flex-row gap-4 w-full">
        {/* <TransactionChart />
		<PopularProducts /> */}
      </div>
    </div>
  );
}
