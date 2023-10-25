import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import Sidebar from "components/Sidebar/Sidebar.js";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js"
import Sidebar from "../Sidebar/Sidebar.js"
import HeaderStats from "../Headers/HeaderStats.js";
import FooterAdmin from "../Footers/Footer.js"
import SSHeaderStats from "../SS/SSHeaderStats.js"
// views
import Dashboard from "./DonorDashboard.js";
// import Dashboard from "../../views/admin/Dashboard.js";
// import Dashboard from "views/admin/Dashboard.js";
// import Maps from "views/admin/Maps.js";
// import Settings from "views/admin/Settings.js";
// import Tables from "views/admin/Tables.js";
// import SearchPage from "../Pages/SearchPage";
export default function DonorHome() {
  return (
    <>       
    <Sidebar />
      <div className=" md:ml-64 bg-blueGray-100">
        <div className="mx-auto w-full h-96">
            <div class="flex flex-col items-center py-10">
            <div class="py-5 text-xl font-semibold">Donors Feed</div>
            <div class="">
            <div class="w-32 bg-white rounded-lg overflow-hidden shadow-lg mb-5 px-8">
  
  <div class="text-center mt-5">
    <h2 class="text-xl font-bold text-gray-800">John Doe</h2>
    <p class="text-sm text-gray-600">FAST University</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">3.49</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">Computer Science</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">Rs.12000</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">University Fee Payment</p>
    <div class="text-xs text-white bg-blueGray-700 hover:bg-blueGray-500 h-4 mx-auto rounded shadow-lg overflow-hidden cursor-pointer">Donate</div>
    <div class="text-xs text-white bg-blueGray-700 hover:bg-blueGray-500 h-4 mx-auto rounded shadow-lg overflow-hidden cursor-pointer">Email</div>
  </div>
</div>
<div class=" w-32 bg-white rounded-lg overflow-hidden shadow-lg">
  <img class="w-8 h-8 rounded-full mt-5" src="" alt="Profile Picture"/>
  <div class="text-center mt-5">
    <h2 class="text-xl font-bold text-gray-800">John Doe</h2>
    <p class="text-sm text-gray-600">Some data</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
  </div>
</div>
<div class=" w-32 bg-white rounded-lg overflow-hidden shadow-lg">
  <img class="w-8 h-8 rounded-full mt-5" src="" alt="Profile Picture"/>
  <div class="text-center mt-5">
    <h2 class="text-xl font-bold text-gray-800">John Doe</h2>
    <p class="text-sm text-gray-600">Some data</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
  </div>
</div>
</div>
            </div>
         
         
        </div>
        <FooterAdmin class="mt-28"/>
      </div>
    </>



  );
}
