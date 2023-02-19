import React from "react";
import DashboardStatsGrid from "../components/DashboardStatsGrid";

import OneCrmProduct from "../components/OneCrmProduct";
import OneCrmIndex from "../components/OneCrmIndex";
import OneCrmInvalid from "../components/OneCrmInvalid";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [userData, setUserdata] = useState(0);
  const [deployData, setDeploydata] = useState(0);
  const [userSize, setSizedata] = useState(0);
  const [nsProduct, setNsProduct] = useState(0);
  const [sizeCount, setSizeCount] = useState(0);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getUserdata = async () => {
      const reqData = await fetch("http://localhost:9090/api/v1/tableProduct");
      const reqsizeValid = await fetch(
        "http://localhost:9090/api/v1/tableValid"
      );
      const reqsizeInvalid = await fetch(
        "http://localhost:9090/api/v1/tableInvalid"
      );
      const resData = await reqData.json();
      const ressizeValid = await reqsizeValid.json();
      const ressizeInvalid = await reqsizeInvalid.json();
      const unique = [...new Set(resData.map((item) => item.ns))];
      setNsProduct(unique.length);
      setProductList(unique);
      const system = [...new Set(resData.map((item) => item.system))];
      const deploy = [...new Set(resData.map((item) => item.deployment))];
      setNsProduct(unique.length);
      setDeploydata(deploy.length);
      setUserdata(system.length);
      setSizedata(ressizeValid.length + ressizeInvalid.length);
      console.log("response", unique.sort());
      const size = sizeValue(ressizeValid, "size");
      setSizeCount(size);
    };
    getUserdata();
  }, []);
  const sizeValue = (data = [], col) => {
    let size = 0;
    data.map((item) => {
      if (item[col].slice(-2) == "gb") {
        size += parseInt(item[col].slice(0, -2)) * 1024;
      } else if (item[col].slice(-2) == "mb") {
        size += parseInt(item[col].slice(0, -2));
      } else if (item[col].slice(-2) == "kb") {
        size += parseInt(item[col].slice(0, -2) / 1024);
      } else if (item[col].slice(-2) == "tb") {
        size += parseInt(item[col].slice(0, -2)) * 1024 * 1024;
      }
    });
    return size / 1024 / 1024;
  };
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid
        system={userData}
        product={nsProduct}
        deploy={deployData}
        size={sizeCount}
      />
      {/* <DashboardStatsGrid list={productList} /> */}
      {productList.length > 0 &&
        productList.map((item, key) => <div key={key}>{item}</div>)}

      {/* <div className="flex flex-row gap-4">
        <DashboardStatsGrid />
        <OneCrmProduct /> 

         <BuyerProfilePieChart /> 
      </div> */}
      <div className="flex flex-row gap-4 w-full">
        <OneCrmInvalid />
      </div>
      <div className="flex flex-row gap-4 w-full">
        {/* <OneCrmInvalid /> */}
      </div>
    </div>
  );
}
