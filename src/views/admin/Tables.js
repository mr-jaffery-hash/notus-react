import React from "react";

// components

import TempCardTable from "components/Cards/TempCardTable.js";
import CardBarChart from "components/Cards/CardBarChart.js";
export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
      <CardBarChart />
        <div className="w-full mb-12 px-4">
          <TempCardTable color="dark" />
        </div>
      </div>
    </>
  );
}
