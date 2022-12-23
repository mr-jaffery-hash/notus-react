import React from "react";

// components

import TempCardTable from "components/Cards/TempCardTable.js";
import TempEnrollmentCard from "components/Cards/TempEnrollmentCardTable.js"
import CardBarChart from "components/Cards/CardBarChart.js";
import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar";
import CardStats from "components/Cards/CardStats";
import { Link } from "react-router-dom";
import HeaderStats from "components/Headers/HeaderStats";
export default function EnrollmentForm() {
  return (
    <>
        <Sidebar/>
        <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar/>
        <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <CardStats
            statSubtitle="Enrollment Form"
            statTitle="Register for the program you want to actively participate"
            statArrow=""
            statPercent=""
            statPercentColor="text-emerald-500"
            statDescripiron=""
            statIconName="fas fa-pen"
            statIconColor="bg-lightBlue-500"
            />
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">                
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="flex flex-wrap mt-4">      
      
        <div className="w-full mb-12 px-4">
          <TempEnrollmentCard color="dark" />
        </div>
      </div>
      </div>
    </>
  );
}
