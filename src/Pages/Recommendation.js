import React from "react";


// components
import AdminNavbar from "../components/Navbars/AdminNavbar.js"
import CardTable from "../components/Cards/CardTable.js";
import { Link } from "react-router-dom";
import CardStats from "../components/Cards/CardStats.js";
import RecTable from "components/Cards/RecTable.js";

// const raccoon = require('raccoon')

export default function Tables() {

  return (
    <>
       
        
      <div className="flex flex-wrap mt-4">
        
        <div className="w-full mb-12 px-4">
          <RecTable />
        </div>
      </div>
    </>
  );
}