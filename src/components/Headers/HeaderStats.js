import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import { Link } from "react-router-dom";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <Link to="/search">
                <CardStats
                  statSubtitle="SEARCH FOR COMMUNITY WORK"
                  statTitle="Register for volunteership"
                  statArrow="up"
                  statPercent="100+ vacancies"
                  statPercentColor="text-emerald-500"
                  statDescripiron="in the last 24 hours"
                  statIconName="fas fa-users"
                  statIconColor="bg-lightBlue-500"
                />
                </Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="/jobsel">
                <CardStats
                  statSubtitle="REPORT CLEARANCE"
                  statTitle="Request verification"
                  statArrow=""
                  statPercent=""
                  statPercentColor=""
                  statDescripiron=""
                  statIconName="fas fa-book"
                  statIconColor="bg-red-500"
                />
                </Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PAST ACTIVITIES"
                  statTitle="See previous involvements"
                  statArrow=""
                  statPercent=""
                  statPercentColor=""
                  statDescripiron=""
                  statIconName="fas fa-clock"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ACADEMIC DETAILS"
                  statTitle="See your information"
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-school"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
