import React from "react";
import DashboardStatsGrid from "../components/DashboardStatsGrid";
import RecentOrders from "../components/OneCrmProduct";

export default function Products() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        {/* <BuyerProfilePieChart /> */}
      </div>
      <div className="flex flex-row gap-4 w-full">
        {/* <TransactionChart />
	<PopularProducts /> */}
      </div>
    </div>
  );
}
