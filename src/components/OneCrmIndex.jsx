import React from "react";

import { useState, useEffect } from "react";

export default function Userdata() {
  const [userData, setUserdata] = useState([]);
  useEffect(() => {
    const getUserdata = async () => {
      const reqData = await fetch("http://localhost:9090/api/v1/tableValid");
      const resData = await reqData.json();
      setUserdata(resData);
      console.log(resData);
    };
    getUserdata();
  }, []);
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">CRM-All-Index</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Index</th>
              <th>Active</th>
              <th>Date</th>
              <th>Deployment</th>
              <th>NS</th>
              <th>Pre Fix</th>
              <th>Pri</th>
              <th>Size</th>
              <th>System</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, index) => (
              <tr>
                <th scope="col">{item.index}</th>
                <th scope="col">{item.active}</th>
                <th scope="col">{item.date}</th>

                <th scope="col">{item.deployment}</th>
                <th scope="col">{item.ns}</th>
                <th scope="col">{item.prefix}</th>
                <th scope="col">{item.pri}</th>
                <th scope="col">{item.size}</th>
                <th scope="col">{item.system}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
