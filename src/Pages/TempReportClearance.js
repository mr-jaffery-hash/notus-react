import React from "react";

// components

import TempCardTable from "components/Cards/TempCardTable.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar";
import CardStats from "components/Cards/CardStats";
import { Link } from "react-router-dom";
export default function Tables() {
  return (
    <>
        <Sidebar/>
        <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar/>
        <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <Link to="/search">
                <CardStats
                  statSubtitle="Your Volunteerships"
                  statTitle="1"
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-users"
                  statIconColor="bg-lightBlue-500"
                />
                </Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Reports Pending"
                  statTitle="1"
                  statArrow=""
                  statPercent=""
                  statPercentColor=""
                  statDescripiron=""
                  statIconName="fas fa-book"
                  statIconColor="bg-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="flex flex-wrap mt-4">      
      
        <div className="w-full mb-12 px-4">
          <TempCardTable color="dark" />
        </div>
      </div>
      </div>
    </>
  );
}
