import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import NewCardTable from "new/NewCardTable.js";
import ReportTable from "components/Cards/ReportTable";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <NewCardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <ReportTable color="dark" />
        </div>
      </div>
    </>
  );
}
